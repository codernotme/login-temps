import type { Metadata } from "next";
import "./globals.css";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "Clerk+Convex",
  description: "A Next.js app with Clerk and Convex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
    <html lang="en">
    <body className="relative flex items-center justify-center w-full h-screen bg-black overflow-hidden">
        {children}
      </body>
    </html>
    </Provider>
  );
}
