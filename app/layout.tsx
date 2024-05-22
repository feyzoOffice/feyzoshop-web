import type { Metadata } from "next";
import { Cairo } from "next/font/google";

import { ThemeProvider } from "@/providers/theme-provider";
import { StoreProvider } from "@/providers/store-provider";
import MyClerkProvider from "@/providers/my-clerk-provider";

import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/footer";

import "./globals.css";

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
            <MyClerkProvider>
              <Header />
              <main className="h-screen">{children}</main>
              <Footer />
              <Toaster />
            </MyClerkProvider>
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
