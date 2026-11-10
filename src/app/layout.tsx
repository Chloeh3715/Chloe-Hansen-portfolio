import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ImpactLens | Sustainability Scorecard Prototype",
  description: "Explore a sustainability scorecard prototype with fictional demo data.",
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
