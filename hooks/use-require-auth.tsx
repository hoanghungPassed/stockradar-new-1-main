"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./use-auth";

/**
 * Hook ép user phải đăng nhập mới vào được trang.
 * @param redirectTo đường dẫn redirect nếu chưa login, mặc định "/login"
 */
export function useRequireAuth(redirectTo = "/login") {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push(redirectTo);
    }
  }, [loading, user, router, redirectTo]);

  return { checking: loading }; // trả về trạng thái đang kiểm tra
}
