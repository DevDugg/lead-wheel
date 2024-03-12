import "./globals.css";

import { DM_Sans } from "next/font/google";
import Footer from "@/components/sections/Footer";
import Logo from "@/components/elements/logo";
import type { Metadata } from "next";
import SmoothScroll from "@/components/layout/SmoothScroll";

const dm = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mythical Marketing",
  description: "Mythical Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm.className} text-WHITE bg-BLACK`}>
        <SmoothScroll>
          <Logo />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
