import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "../components/AppLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarah Idahosa",
  description:
    "Community Growth Manager, DeFi Advocate, Web3 Educator, & Founder; Women In DeFi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
