import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/providers/theme-provider";
import { Header } from "@/components/header";
import { StoreProvider } from "@/providers/store-provider";
import "./globals.css";
import { Footer } from "@/components/footer";

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
            <main className="h-screen">{children}</main>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
