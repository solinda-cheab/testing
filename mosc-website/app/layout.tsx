
import React from "react";
import "./globals.css";

export const metadata = {
  title: "MOSC Journal",
  description: "Stories published with Ghost.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
