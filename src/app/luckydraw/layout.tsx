import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LuckyDraw - Microsoft Teams Bot | AquaSoft",
  description:
    "LuckyDraw Bot for Microsoft Teams. More fun in team collaboration. Award team players, boost employee engagement, and build team culture with lucky draws.",
};

export default function LuckyDrawLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
