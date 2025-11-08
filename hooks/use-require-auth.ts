"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

export function useRequireAuth(redirectTo: string = "/login") {
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.href = redirectTo;
      }
      setChecking(false);
    });
    return () => unSub();
  }, [redirectTo]);

  return { checking };
}
