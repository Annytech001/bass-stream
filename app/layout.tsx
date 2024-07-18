import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import Sidebar from "../Components/Side bar";
import SupabaseProvider from "@/providers/SupabaseProvider"
import UserProvider from "@/providers/UserProvider"

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bass Stream",
  description: "Listen to your favourite Music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <userProvider>
          <Sidebar>
          {children}
          </Sidebar>
          </userProvider>
        <
          </SupabaseProvider>
      </body>
    </html>
  )
}

