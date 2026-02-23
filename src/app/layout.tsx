import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Người Việt Cali - Cộng đồng người Việt California",
  description:
    "Cộng đồng người Việt California lớn nhất với 67,000+ thành viên tại Orange County, San Jose, Los Angeles.",
  keywords: [
    "vietnamese california",
    "nguoi viet california",
    "cong dong nguoi viet",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}

