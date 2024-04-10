import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from "../Components/Side bar";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bass Stream",
  description: "Listen to your favourite Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={font.className}>
      <Sidebar>{children}</Sidebar>
    </div>
  );
}
