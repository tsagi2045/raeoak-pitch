"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "사전 브리핑", href: "/request" },
  { label: "리서치", href: "/research" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-40"
      style={{
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(24px) saturate(180%)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="mx-auto max-w-[980px] px-[var(--space-6)]">
        <div
          className="flex items-center justify-between"
          style={{ height: "48px" }}
        >
          <Link
            href="/"
            style={{
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "-0.3px",
              color: "var(--text-primary)",
            }}
          >
            라이옥
          </Link>
          <ul className="flex items-center" style={{ gap: "var(--space-6)" }}>
            {menuItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-opacity duration-150 hover:opacity-70"
                    style={{
                      fontSize: "14px",
                      fontWeight: isActive ? 600 : 500,
                      color: isActive
                        ? "var(--text-primary)"
                        : "var(--text-secondary)",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
