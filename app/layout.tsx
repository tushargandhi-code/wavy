import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://newp-neon.vercel.app/"),
  title: { default: "Wavy", template: `%s | Nexus News` },
  description: "Stay updated with the latest tech and global news.",
  openGraph: {
    url: "/",
    title: "Wavy",
    description: "",
    images: ["/logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus News",
    description: "",
    images: ["/logo.svg"],
  },
  icons: {
    icon: "/logo-wavy.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
       
      </body>
    </html>
  );
}
