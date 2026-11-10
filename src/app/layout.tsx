import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ImpactLens | ESG Company Directory",
  description:
    "Explore a sustainability scorecard prototype with regional and sector filters.",
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