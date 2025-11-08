"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BarChart3 } from "lucide-react";

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

import { auth, db } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { collection, getDocs, limit, query, where } from "firebase/firestore";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Xử lý redirect flow (mobile/Safari) cho Google
  useEffect(() => {
    getRedirectResult(auth)
      .then((res) => {
        if (res?.user) router.push("/dashboard");
      })
      .catch((e: any) => setError(e?.message || String(e)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Đăng nhập bằng USERNAME + PASSWORD (không fake email)
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const unameLower = username.trim().toLowerCase();

      // 1) Tra Firestore lấy email thật từ usernameLower
      const q = query(
        collection(db, "users"),
        where("usernameLower", "==", unameLower),
        limit(1)
      );
      const snap = await getDocs(q);
      if (snap.empty) {
        setError("Tên đăng nhập không tồn tại.");
        return;
      }
      const userDoc = snap.docs[0].data() as { email?: string };
      const emailFromDB = userDoc.email;
      if (!emailFromDB) {
        setError("Tài khoản chưa có email. Vui lòng đăng ký lại.");
        return;
      }

      // 2) Đăng nhập bằng email thật
      await signInWithEmailAndPassword(auth, emailFromDB, password);
      router.push("/dashboard");
    } catch (err: any) {
      const code = err?.code || "";
      if (code.includes("wrong-password")) setError("Mật khẩu không đúng.");
      else if (code.includes("too-many-requests"))
        setError("Bạn thao tác quá nhanh, vui lòng thử lại sau.");
      else setError(err?.message || "Đăng nhập thất bại.");
    } finally {
      setLoading(false);
    }
  };

  // Đăng nhập với Google
  
const handleGoogle = async () => {
  setError("");
  try {
    // ✅ Import GoogleAuthProvider ngay tại đây (client-only)
    const { GoogleAuthProvider, signInWithPopup, signInWithRedirect } = await import("firebase/auth");
    const provider = new GoogleAuthProvider();

    // Kiểm tra thiết bị
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

    if (isMobile) {
      await signInWithRedirect(auth, provider);
    } else {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // ✅ Kiểm tra tài khoản Premium
      if (user.email === "truydit2003@gmail.com") {
        alert("🎖️ Bạn đang đăng nhập bằng tài khoản Premium!");
      } else {
        alert("🌱 Bạn đang đăng nhập bằng tài khoản Basic.");
      }

      // Chuyển trang sau khi đăng nhập
      router.push("/dashboard");
    }
  } catch (e: any) {
    console.error("Lỗi đăng nhập Google:", e);
    setError(e?.message || String(e));
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
            <CardTitle className="text-2xl text-center">Đăng nhập</CardTitle>
            <CardDescription className="text-center">
              Chọn cách đăng nhập: Username &amp; mật khẩu hoặc Google
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Tên đăng nhập</Label>
                <Input
                  id="username"
                  placeholder="vd: nguyenvana"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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

              {error && <p className="text-sm text-red-500">{error}</p>}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Đang đăng nhập..." : "Đăng nhập"}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">Hoặc</span>
              </div>
            </div>

            <Button variant="outline" className="w-full" onClick={handleGoogle}>
              Đăng nhập với Google
            </Button>

            <div className="text-center text-sm mt-4">
              Chưa có tài khoản?{" "}
              <Link href="/register" className="text-blue-600 hover:underline">
                Đăng ký
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
