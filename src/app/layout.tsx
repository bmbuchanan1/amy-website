import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Holding Space | Specialist Wellness Counselling",
  description:
    "Amy Ryan — ASCHP registered specialist wellness counsellor offering individual, couples, trauma, grief and addiction counselling. Online sessions available.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
