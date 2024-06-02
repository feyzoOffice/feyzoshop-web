import type { Metadata } from "next";
import { Cairo } from "next/font/google";

import NextTopLoader from "nextjs-toploader";

import { ThemeProvider } from "@/providers/theme-provider";
import { StoreProvider } from "@/providers/store-provider";
import MyClerkProvider from "@/providers/my-clerk-provider";

import { Header } from "@/components/header";
import { OfflineAlert } from "@/components/offline-alert";
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
          <NextTopLoader
            color="hsl(47.9 95.8% 53.1%)"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            zIndex={1600}
            showAtBottom={false}
          />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <OfflineAlert />
            <MyClerkProvider>
              <Header />
              <main>{children}</main>
              <Footer />
              <Toaster />
            </MyClerkProvider>
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
