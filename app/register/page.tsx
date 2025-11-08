"use client";

import Link from "next/link";
import { BarChart3 } from "lucide-react";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  limit,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [plan, setPlan] = useState("basic");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateUsername = (name: string) =>
    /^[a-zA-Z0-9_]{3,20}$/.test(name);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateUsername(username)) {
      setError("Tên đăng nhập chỉ gồm chữ/số/gạch dưới (3–20 ký tự).");
      return;
    }
    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp.");
      return;
    }

    setLoading(true);
    try {
      const unameLower = username.toLowerCase();

      // 1) Kiểm tra trùng username
      const snap = await getDocs(
        query(
          collection(db, "users"),
          where("usernameLower", "==", unameLower),
          limit(1)
        )
      );
      if (!snap.empty) {
        setError("Tên đăng nhập đã tồn tại, vui lòng chọn tên khác.");
        return;
      }

      // 2) Tạo user bằng EMAIL THẬT
      const cred = await createUserWithEmailAndPassword(auth, email, password);

      // 3) Set displayName
      await updateProfile(cred.user, { displayName: username });

      // 4) Lưu hồ sơ vào Firestore
      await setDoc(doc(db, "users", cred.user.uid), {
        uid: cred.user.uid,
        email,
        username,
        usernameLower: unameLower,
        plan,
        createdAt: serverTimestamp(),
      });

      setSuccess("Tạo tài khoản thành công! Bạn có thể đăng nhập ngay.");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setPlan("basic");
    } catch (err: any) {
      setError(err?.message || "Đăng ký thất bại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link className="flex items-center justify-center mb-6" href="/">
            <BarChart3 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold">Stock Radar</span>
          </Link>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Tạo tài khoản</CardTitle>
            <CardDescription className="text-center">
              Nhập thông tin để tạo tài khoản Stock Radar
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Tên đăng nhập</Label>
                <Input
                  id="username"
                  placeholder="vd: nguyenvana"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value.trim())}
                />
                <p className="text-xs text-muted-foreground">
                  Chỉ cho phép chữ, số, gạch dưới; 3–20 ký tự.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Mật khẩu</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Xác nhận mật khẩu</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="plan">Chọn gói dịch vụ</Label>
                <Select value={plan} onValueChange={setPlan}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn gói" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic (Miễn phí)</SelectItem>
                    <SelectItem value="premium">
                      Premium (499,000 VNĐ/tháng)
                    </SelectItem>
                    <SelectItem value="pro">Pro (999,000 VNĐ/tháng)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="rounded" required />
                <Label htmlFor="terms" className="text-sm">
                  Tôi đồng ý với{" "}
                  <Link href="/terms" className="text-blue-600 hover:underline">
                    Điều khoản dịch vụ
                  </Link>{" "}
                  và{" "}
                  <Link href="/privacy" className="text-blue-600 hover:underline">
                    Chính sách bảo mật
                  </Link>
                </Label>
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}
              {success && <p className="text-sm text-green-600">{success}</p>}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Đang tạo tài khoản..." : "Tạo tài khoản"}
              </Button>

              <div className="text-center text-sm">
                Đã có tài khoản?{" "}
                <Link href="/login" className="text-blue-600 hover:underline">
                  Đăng nhập
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
