import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Người Việt Cali - Cộng đồng người Việt California",
  description:
    "Cộng đồng người Việt California lớn nhất với 67,000+ thành viên tại Orange County, San Jose, Los Angeles. Tin tức, rao vặt, sự kiện và kết nối đồng hương.",
  keywords: [
    "vietnamese california",
    "nguoi viet california",
    "cong dong nguoi viet",
    "little saigon",
    "orange county vietnamese",
    "san jose vietnamese",
  ],
  openGraph: {
    title: "Người Việt Cali - Cộng đồng người Việt California",
    description: "67,000+ thành viên người Việt tại California. Tham gia miễn phí.",
    type: "website",
    locale: "vi_VN",
    siteName: "Người Việt Cali",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
