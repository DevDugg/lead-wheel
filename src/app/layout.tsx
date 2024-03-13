import "./globals.css";

import AnimatedFadeIn from "@/components/elements/animated-fade-in";
import { DM_Sans } from "next/font/google";
import Footer from "@/components/sections/footer";
import Logo from "@/components/elements/logo";
import type { Metadata } from "next";
import Provider from "@/components/layout/provider";

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
        <Provider>
          <Logo />
          <AnimatedFadeIn>
            {children}
            <Footer />
          </AnimatedFadeIn>
        </Provider>
      </body>
    </html>
  );
}
