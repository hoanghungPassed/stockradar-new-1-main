"use client";

import { useEffect } from "react";
import { analytics } from "../../lib/firebase";
import { logEvent } from "firebase/analytics";

export default function SimulatePage() {
  useEffect(() => {
    if (!analytics) return;

    for (let i = 1; i <= 1050; i++) {
      logEvent(analytics, "click", { element: `button_${i % 10}` });
    }

    for (let i = 1; i <= 750; i++) {
      logEvent(analytics, "login", { user_id: `user_${i}` });
    }

    for (let i = 1; i <= 690; i++) {
      logEvent(analytics, "dashboard_interaction", {
        section: `section_${i % 5}`,
        action: "view"
      });
    }

    for (let i = 1; i <= 690; i++) {
      logEvent(analytics, "view_stock", {
        stock_id: `stock_${i % 20}`,
        sector: "finance"
      });
    }

    for (let i = 1; i <= 5; i++) {
      logEvent(analytics, "analysis_basic", {
        type: "basic_1",
        user_id: `user_${i}`
      });
    }

    for (let i = 1; i <= 350; i++) {
      logEvent(analytics, "community_access", {
        topic: `topic_${i % 10}`
      });
    }

    for (let i = 1; i <= 60; i++) {
      logEvent(analytics, "community_comment", {
        topic: `topic_${i % 10}`,
        comment_length: `${Math.floor(Math.random() * 200)}`
      });
    }
  }, []);

  return (
    <div style={{ padding: "2rem", fontSize: "1.2rem" }}>
      ✅ Đã gửi toàn bộ dữ liệu thử nghiệm lên Firebase. Vui lòng chờ vài phút để dữ liệu hiển thị trên dashboard.
    </div>
  );
}