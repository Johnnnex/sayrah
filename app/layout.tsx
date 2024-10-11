import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "../components/AppLayout";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarah Idahosa",
  description:
    "Community Growth Manager, DeFi Advocate, Web3 Educator, & Founder; Women In DeFi.",
  keywords:
    "women in tech, women in defi, defi, Web3 Training, Sarah Idahosa, blockchain, cryptocurrency, fintech, community management, Web3 education, DeFi advocate, Women In DeFi founder, crypto influencer, digital assets, decentralized finance, blockchain technology, crypto community, Web3 consultant, blockchain educator, cryptocurrency expert, Web3 innovation, DeFi ecosystem, crypto adoption, blockchain solutions, digital finance, crypto market analysis, Web3 strategy, DeFi protocols, blockchain governance, crypto regulations, NFTs, tokenomics, smart contracts, DeFi yield farming, crypto wallets, blockchain interoperability, Web3 security, DeFi lending, crypto trading strategies, blockchain scalability, crypto assets, decentralized applications (dApps), blockchain infrastructure, digital currency, Ethereum, Bitcoin, Solana, Layer 2 solutions, staking, liquidity mining, decentralized exchanges (DEX), Metaverse, decentralized governance, ICOs, IDOs, blockchain startups, crypto investment, stablecoins, blockchain analytics, crypto tax strategies, decentralized identity, DAO, decentralized organizations, DeFi insurance, peer-to-peer finance, blockchain privacy, DeFi aggregator, decentralized oracles, blockchain innovation, multi-chain DeFi, cross-chain solutions, governance tokens, Web3 metaverse, DeFi investment strategies, blockchain startups, public blockchain, sidechains, decentralized marketplaces, permissionless finance, decentralized staking platforms, self-sovereign identity, zero-knowledge proofs, zk-rollups, layer 2 scaling, crypto staking rewards, decentralized fundraising, decentralized prediction markets, blockchain entrepreneurship, blockchain careers, fintech disruption, open finance, programmable money, digital governance, crypto yield farming, crypto liquidity pools, DeFi smart contracts, automated market makers (AMM), blockchain remittances, social tokens, crypto philanthropy, yield optimization, blockchain trading bots, decentralized stablecoins",
  authors: [
    {
      name: "Johnex",
      url: "https://bow-sidecar-646.notion.site/John-Onyeibor-e33f33006575474db682a63066f0b100?pvs=4",
    },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#76063d",
  twitter: {
    card: "summary",
    site: "@sarahidahosa",
    title: "Sarah Idahosa",
    description:
      "Community Growth Manager, DeFi Advocate, Web3 Educator, & Founder; Women In DeFi.",
    images: ["https://sarahidahosa.com/images/seo-img.png"],
  },
  openGraph: {
    url: "https://sarahidahosa.com",
    title: "Sarah Idahosa",
    description:
      "Community Growth Manager, DeFi Advocate, Web3 Educator, & Founder; Women In DeFi.",
    type: "website",
    siteName: "Sarah Idahosa",
    images: [
      {
        url: "https://sarahidahosa.com/images/seo-img.png",
      },
    ],
  },
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
      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
        <Toaster
          toastOptions={{
            style: {
              background: "#76063d",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
