import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chloe Hansen | Portfolio",
  description:
    "Portfolio website for Chloe Hansen featuring projects, design work, and sustainability-focused research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
