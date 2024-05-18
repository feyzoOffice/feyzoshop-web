import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";
import { Header } from "@/components/header";
import { StoreProvider } from "@/providers/store-provider";

const cairo = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "فيزو لصناعة وتجارة الألبسة",
  description: "فيزو لصناعة وتجارة الألبسة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="ar" dir="rtl" suppressHydrationWarning>
        <body className={cairo.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main>{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
