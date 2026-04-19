import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Priority Trees & Shrubs | Plant Material Supplier — Fayetteville, AR",
  description: "Family-owned plant material supplier serving landscape professionals in Arkansas. Trees, shrubs, grasses, and groundcovers sourced for contractors, developers, and municipalities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
