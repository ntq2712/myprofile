/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"], // hoặc thêm 'vietnamese' nếu cần
  weight: ["400", "700"], // tuỳ bạn chọn
  variable: "--font-ibm", // để dùng dưới dạng CSS variable
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nguyen Trong Qui - Lập trình viên Mobile & Web",
  description:
    "Trang cá nhân của Nguyễn Trọng Quí - Lập trình viên React Native, Swift, .NET",
  keywords: [
    "Nguyen Trong Qui",
    "Nguyễn Trọng Quí",
    "Qui Trọng",
    "TrongQui",
    "Trọng Quí",
    "Qui Nguyen",
    "QuiNguyen",
    "Quí Nguyễn",
    "Lập trình viên Việt Nam",
  ],
  openGraph: {
    title: "Nguyen Trong Qui",
    description:
      "Trang cá nhân của Nguyễn Trọng Quí - Lập trình viên React Native, Swift, .NET",
    url: "https://quinguyen.cloud",
    siteName: "Nguyen Trong Qui",
    locale: "vi_VN",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <head>
        <title>Nguyen Trong Qui | Profile</title>
        <meta property="og:title" content="Nguyen Trong Qui | Profile" />
        <meta
          property="og:description"
          content="Trang cá nhân của Nguyen Trong Qui — nơi chia sẻ dự án và kinh nghiệm lập trình."
        />
        <meta property="og:image" content="http://quinguyen.click/uploads/b166c489-19a8-4947-accd-9f1cf40f5136.jpg" />
        <meta property="og:url" content="http://quinguyen.cloud" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nguyen Trong Qui | Profile" />
        <meta
          name="twitter:description"
          content="Trang cá nhân của Nguyen Trong Qui — nơi chia sẻ dự án và kinh nghiệm lập trình."
        />
        <meta
          name="twitter:image"
          content="http://quinguyen.click/uploads/b166c489-19a8-4947-accd-9f1cf40f5136.jpg"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
