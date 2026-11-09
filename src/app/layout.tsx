import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chloe Hansen | Portfolio",
  description: "Portfolio of a creative web developer building thoughtful digital experiences.",
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
