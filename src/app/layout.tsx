import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SplashScreen from "@/components/SplashScreen";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luboya - Building the Future",
  description: "Building the future, one line of code at a time",
  icons: {
    icon: [
      { url: '/luboyalogo.svg', media: '(prefers-color-scheme: light)' },
      { url: '/luboyalogow.svg', media: '(prefers-color-scheme: dark)' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
