import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://theholding-space.co.za"),
  title: "Online & In-Person Counselling | The Holding Space",
  description:
    "A warm, safe space to be truly heard. Offering professional counselling online and in-person for trauma, grief, emotional wellbeing, recovery support, relationship challenges, building self-confidence and coping skills.",
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
      <GoogleAnalytics gaId="G-H5VJ8JE4X7" />
    </html>
  );
}
