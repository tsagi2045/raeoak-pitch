import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "라이옥 가맹점 모집 LP — 사전 질문지",
  description: "라이옥(RAEOAK) 가맹점 모집 랜딩페이지 제작을 위한 사전 미팅 질문지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
