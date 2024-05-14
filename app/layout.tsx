import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";


const cairoPlay = Cairo({subsets: ["arabic"]})

export const metadata: Metadata = {
  title: "فيزو لصناعة وتجارة الألبسة",
  description:  "فيزو لصناعة وتجارة الألبسة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className={cairoPlay.className}>{children}</body>
    </html>
  );
}
