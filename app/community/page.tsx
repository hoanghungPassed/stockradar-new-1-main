"use client";

import { useState, useEffect } from "react";
import { auth, db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  query,
  orderBy,
  arrayUnion,
  arrayRemove,
  serverTimestamp,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { ArrowLeft, Heart, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function CommunityPage() {
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [newPost, setNewPost] = useState("");
  const [loading, setLoading] = useState(false);
  const [commentInputs, setCommentInputs] = useState<{ [key: string]: string }>({});

  // ✅ Theo dõi đăng nhập
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  // ✅ Lấy danh sách bài viết
  useEffect(() => {
    const fetchPosts = async () => {
      const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPosts(data);
    };
    fetchPosts();
  }, []);

  // ✅ Đăng bài viết mới
  const handlePost = async () => {
    if (!user) return alert("Vui lòng đăng nhập để đăng bài.");
    if (!newPost.trim()) return;

    setLoading(true);
    try {
      await addDoc(collection(db, "posts"), {
        authorId: user.uid,
        author: user.displayName || "Người dùng ẩn danh",
        avatar: user.photoURL || "/default-avatar.png",
        email: user.email,
        content: newPost.trim(),
        createdAt: serverTimestamp(),
        likes: [],
        comments: [],
      });
      setNewPost("");
      window.location.reload();
    } catch (error) {
      console.error("Lỗi đăng bài:", error);
      alert("Không thể đăng bài, vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Thả / bỏ tym
  const toggleLike = async (postId: string, hasLiked: boolean) => {
    if (!user) return alert("Vui lòng đăng nhập để thả tym.");
    const postRef = doc(db, "posts", postId);
    try {
      if (hasLiked) {
        await updateDoc(postRef, { likes: arrayRemove(user.uid) });
      } else {
        await updateDoc(postRef, { likes: arrayUnion(user.uid) });
      }
      setPosts((prev) =>
        prev.map((p) =>
          p.id === postId
            ? {
                ...p,
                likes: hasLiked
                  ? p.likes.filter((id: string) => id !== user.uid)
                  : [...(p.likes || []), user.uid],
              }
            : p
        )
      );
    } catch (e) {
      console.error("Lỗi thả tym:", e);
    }
  };

  // ✅ Thêm bình luận
  const handleComment = async (postId: string) => {
    if (!user) return alert("Vui lòng đăng nhập để bình luận.");
    const text = commentInputs[postId];
    if (!text?.trim()) return;

    const postRef = doc(db, "posts", postId);
    const newComment = {
      uid: user.uid,
      author: user.displayName || "Ẩn danh",
      avatar: user.photoURL || "/default-avatar.png",
      text: text.trim(),
      createdAt: new Date().toISOString(), // ✅ dùng client timestamp
    };

    try {
      await updateDoc(postRef, { comments: arrayUnion(newComment) });
      setPosts((prev) =>
        prev.map((p) =>
          p.id === postId
            ? { ...p, comments: [...(p.comments || []), newComment] }
            : p
        )
      );
      setCommentInputs((prev) => ({ ...prev, [postId]: "" }));
    } catch (e) {
      console.error("Lỗi bình luận:", e);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Link href="/analysis">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Trở về Công cụ phân tích
            </Button>
          </Link>
          <h1 className="text-2xl font-bold ml-4">Cộng đồng nhà đầu tư</h1>
        </div>
      </div>

      {/* Đăng bài */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Tạo bài viết mới</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Chia sẻ ý kiến, chiến lược hoặc phân tích của bạn..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            rows={3}
          />
          <div className="flex justify-end mt-3">
            <Button onClick={handlePost} disabled={loading}>
              <Send className="w-4 h-4 mr-2" />
              {loading ? "Đang đăng..." : "Đăng bài"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Danh sách bài viết */}
      <div className="space-y-6">
        {posts.map((post) => {
          const likes = Array.isArray(post.likes) ? post.likes : [];
          const hasLiked = user && likes.includes(user.uid);

          return (
            <Card key={post.id}>
              <CardHeader className="flex items-center gap-3">
                <Image
                  src={post.avatar || "/default-avatar.png"}
                  alt={post.author || "Ảnh đại diện người dùng"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{post.author}</h3>
                  <p className="text-xs text-gray-500">
                    {post.createdAt?.toDate
                      ? new Date(post.createdAt.toDate()).toLocaleString("vi-VN")
                      : "Đang tải..."}
                  </p>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-800 whitespace-pre-line">{post.content}</p>

                {/* Thả tym & Bình luận */}
                <div className="flex gap-6 mt-3 text-gray-500">
                  <button
                    className={`flex items-center gap-1 ${
                      hasLiked ? "text-red-500" : "hover:text-red-400"
                    }`}
                    onClick={() => toggleLike(post.id, hasLiked)}
                  >
                    <Heart className="w-4 h-4" />
                    <span>{likes.length}</span>
                  </button>

                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    <span>{post.comments?.length || 0}</span>
                  </div>
                </div>

                {/* Hiển thị bình luận */}
                <div className="mt-3 space-y-2">
                  {Array.isArray(post.comments) &&
                    post.comments.map((c: any, i: number) => (
                      <div key={i} className="flex items-start gap-2">
                        <Image
                          src={c.avatar || "/default-avatar.png"}
                          alt={c.author || "Ảnh người bình luận"}
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <div>
                          <p className="text-sm font-semibold">{c.author}</p>
                          <p className="text-sm text-gray-700">{c.text}</p>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Ô nhập bình luận */}
                {user && (
                  <div className="flex items-center gap-2 mt-2">
                    <Input
                      placeholder="Viết bình luận..."
                      value={commentInputs[post.id] || ""}
                      onChange={(e) =>
                        setCommentInputs((prev) => ({
                          ...prev,
                          [post.id]: e.target.value,
                        }))
                      }
                    />
                    <Button
                      size="sm"
                      onClick={() => handleComment(post.id)}
                      disabled={!commentInputs[post.id]?.trim()}
                    >
                      Gửi
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}

        {posts.length === 0 && (
          <p className="text-center text-gray-500">Chưa có bài viết nào.</p>
        )}
      </div>
    </div>
  );
}
