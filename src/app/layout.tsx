/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
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

export const metadata = {
  title: "Nguyen Trong Qui | Profile",
  description:
    "Trang cá nhân của Nguyễn Trọng Quí — Lập trình viên React Native, Swift, .NET",
  openGraph: {
    title: "Nguyen Trong Qui | Profile",
    description:
      "Trang cá nhân của Nguyen Trong Qui — nơi chia sẻ dự án và kinh nghiệm lập trình.",
    url: "http://quinguyen.cloud",
    siteName: "Nguyen Trong Qui",
    images: [
      {
        url: "http://quinguyen.click/uploads/b166c489-19a8-4947-accd-9f1cf40f5136.jpg",
        width: 1200,
        height: 630,
        alt: "Nguyen Trong Qui",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Trong Qui | Profile",
    description:
      "Trang cá nhân của Nguyen Trong Qui — nơi chia sẻ dự án và kinh nghiệm lập trình.",
    images: [
      "http://quinguyen.click/uploads/b166c489-19a8-4947-accd-9f1cf40f5136.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
