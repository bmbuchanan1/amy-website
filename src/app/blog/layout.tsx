import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | The Holding Space",
  description: "Insights and reflections on mental wellbeing, wellness counselling, and navigating life's challenges.",
  keywords: ["counselling", "wellness", "mental health", "blog"],
  openGraph: {
    title: "Blog | The Holding Space",
    description: "Insights and reflections on mental wellbeing, wellness counselling, and navigating life's challenges.",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
