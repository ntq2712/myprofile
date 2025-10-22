/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "react-quill/dist/quill.snow.css";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <head>
        <title>Nguyen Trong Qui | Profile</title>
        <meta
          name="description"
          content="Trang cá nhân của Nguyen Trong Qui — nơi chia sẻ dự án và kinh nghiệm lập trình."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Nguyen Trong Qui | Profile" />
        <meta
          property="og:description"
          content="Trang cá nhân của Nguyen Trong Qui — nơi chia sẻ dự án và kinh nghiệm lập trình."
        />
        <meta property="og:url" content="http://quinguyen.cloud" />
        <meta
          property="og:image"
          content="http://quinguyen.click/uploads/b166c489-19a8-4947-accd-9f1cf40f5136.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nguyen Trong Qui" />
        <meta property="fb:app_id" content="1234567890" />

        {/* Twitter */}
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
