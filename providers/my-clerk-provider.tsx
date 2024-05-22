"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { arSA } from "@clerk/localizations";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

type Props = {
  children: React.ReactNode;
};

export default function MyClerkProvider({ children }: Props) {
  const { theme } = useTheme();
  return (
    <ClerkProvider
      localization={arSA}
      appearance={{
        layout: {
          socialButtonsPlacement: "top",
          socialButtonsVariant: "iconButton",
          termsPageUrl: "https://clerk.com/terms",
        },
        baseTheme: theme === "dark" ? dark : undefined,
      }}
    >
      {children}
    </ClerkProvider>
  );
}
