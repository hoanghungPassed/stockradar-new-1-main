"use client";

import { useState, useEffect } from "react";
import type { User } from "firebase/auth"; // chỉ import type
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";      // đường dẫn tới file firebase.ts

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u: User | null) => {
      setUser(u);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
}
