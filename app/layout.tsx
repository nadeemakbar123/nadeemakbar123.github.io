import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StackEnterprises.dev",
  description:
    "StackEnterprises.dev builds full-stack websites and helps businesses optimize and manage Google Business Profiles.",
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
