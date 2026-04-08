"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  visible: boolean;
  onHide: () => void;
}

export default function Toast({ message, visible, onHide }: ToastProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (visible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        setTimeout(onHide, 200);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [visible, onHide]);

  if (!visible && !show) return null;

  return (
    <div className="fixed top-[var(--space-5)] left-1/2 z-50 -translate-x-1/2">
      <div
        className={show ? "animate-toast-in" : "animate-toast-out"}
        style={{
          background: "var(--accent)",
          color: "#ffffff",
          fontSize: "14px",
          fontWeight: 500,
          borderRadius: "var(--radius-xl)",
          padding: "var(--space-3) var(--space-5)",
          boxShadow: "var(--shadow-toast)",
          whiteSpace: "nowrap",
        }}
      >
        {message}
      </div>
    </div>
  );
}
