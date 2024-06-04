import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Problem Solving Portal | Visionary",
  description: "A portal for solving problems",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
