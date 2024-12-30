import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "cirro water : purest of all",
  description:
    "Cirro was born from a desire to elevate the everyday hydration experience. Inspired by the highest and purest clouds in the sky, we bring you water that stands above the rest in purity, taste, and elegance.Elevate your hydration with Cirro – water that’s as elegant as it is refreshing",
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
        {children}

        <Navbar />
      </body>
    </html>
  );
}
