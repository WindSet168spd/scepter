import type { Metadata } from "next";

import "@app/styles/globals.css";

export const metadata: Metadata = {
  title: "Scepter",
  description: "Rupert's scepter for leaderboards",
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
