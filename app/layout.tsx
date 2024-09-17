import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "../components/AppLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarah Idahosa",
  description:
    "Community Growth Manager, DeFi Advocate, Web3 Educator, & Founder; Women In DeFi.",
  authors: [
    {
      name: "Johnex",
      url: "https://bow-sidecar-646.notion.site/John-Onyeibor-e33f33006575474db682a63066f0b100?pvs=4",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Community Growth Manager, DeFi Advocate, Web3 Educator, & Founder; Women In DeFi."
        />
        <meta
          name="keyword"
          content="women in tech, women in defi, defi, Web3 Training, Sarah Idahosa, Sarah, Idahosa, "
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="womenindefi.org" />
        <meta name="twitter:title" content="Women In DeFi" />
        <meta
          name="twitter:description"
          content="Community Growth Manager, DeFi Advocate, Web3 Educator, & Founder; Women In DeFi."
        />
        <meta
          name="twitter:image"
          content="https://sarahidahosa.com/images/seo-img.jpg"
        />
        <meta property="og:title" content="Sarah Idahosa" />
        <meta property="og:url" content="https://sarahidahosa.com" />
        <meta
          property="og:image"
          content="https://sarahidahosa.com/images/seo-img.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Community Growth Manager, DeFi Advocate, Web3 Educator, & Founder; Sarah Idahosa."
        />
        <meta property="og:site_name" content="Sarah Idahosa" />
        <link rel="icon" href="favicon.ico" />
      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
