import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nguoivietcali.com"),
  title: "Người Việt Cali - Cộng đồng người Việt California lớn nhất",
  description:
    "Cộng đồng người Việt California lớn nhất với 67,000+ thành viên tại Orange County, San Jose, Los Angeles. Tin tức, rao vặt, sự kiện và kết nối đồng hương.",
  keywords: [
    "vietnamese california",
    "vietnamese community california",
    "nguoi viet california",
    "nguoi viet cali",
    "cong dong nguoi viet california",
    "little saigon california",
    "orange county vietnamese",
    "san jose vietnamese",
    "los angeles vietnamese",
    "viet cali",
    "hoi nguoi viet california",
    "viet community california",
    "california vietnamese facebook group",
  ],
  authors: [{ name: "Người Việt Cali" }],
  creator: "Người Việt Cali",
  publisher: "Người Việt Cali",
  alternates: {
    canonical: "https://nguoivietcali.com",
  },
  openGraph: {
    title: "Người Việt Cali - Cộng đồng người Việt California",
    description: "67,000+ thành viên người Việt tại California. Tham gia miễn phí.",
    type: "website",
    url: "https://nguoivietcali.com",
    locale: "vi_VN",
    siteName: "Người Việt Cali",
  },
  twitter: {
    card: "summary_large_image",
    title: "Người Việt Cali - Cộng đồng người Việt California",
    description: "67,000+ thành viên người Việt tại California. Tham gia miễn phí.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Structured data for Google
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Người Việt Cali",
  url: "https://nguoivietcali.com",
  description:
    "Cộng đồng người Việt California lớn nhất với 67,000+ thành viên",
  areaServed: {
    "@type": "State",
    name: "California",
    addressCountry: "US",
  },
  memberOf: {
    "@type": "SocialMediaPosting",
    url: "https://www.facebook.com/groups/1205665560928886",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
