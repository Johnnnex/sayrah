"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import Chip from "@/components/Chip";
import CommonContainer from "@/components/CommonContainer";
import features from "@/Data/features";
import SVGClient from "@/components/SVGClient";
import { Montserrat, Poppins, Syne } from "next/font/google";
import Link from "next/link";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

type MediaItem = {
  title: string;
  date: string;
  message: string;
};

const engagements: MediaItem[] = [
  {
    title: "Xplore 2023",
    date: "2023-11-30",
    message:
      "Blockchain as the Future: Trends & Predictions, African usecases for Blockchain Tech.",
  },
  {
    title: "CMFest 2023",
    date: "2023-10-21",
    message: "Web3 Communities: Creating a sense of Belonging.",
  },
  {
    title: "Tech Summit Ogun the 5th",
    date: "2023-10-18",
    message:
      "Introduction to Decentralised Tech: Understanding Blockchain, DeFi, and Web3.",
  },
  {
    title: "Africa Money and Defi Summit",
    date: "2023-10-04",
    message: "Crypto in Africa - Building the Future of Web3 in Africa.",
  },
  {
    title: "Africa Money and Defi Summit",
    date: "2023-10-03",
    message: "Crypto in Africa - What's Trending and What's Next?",
  },
  {
    title: "SCASUMMIT 2023",
    date: "2023-09-30",
    message: "Spotlighting Women In DeFi Community.",
  },
  {
    title: "Teendin Unleashing the Future of Tech",
    date: "2023-09-01",
    message: "Career opportunities for teenagers in Tech.",
  },
  {
    title: "Value First Conference 2.0",
    date: "2023-08-15",
    message: "Building a successful career in Blockchain and Web3.",
  },
  {
    title: "Defi Code: The Emergence",
    date: "2023-08-04",
    message: "Lightning Talk on the Defi Space.",
  },
  {
    title: "CCC, Western Edition 2023",
    date: "2023-07-08",
    message: "WiD: Empowering Innovation for a Better Future.",
  },
  {
    title: "Polygon DevX Global Tour",
    date: "2023-07-01",
    message:
      "Web3 for Social Impact: Harnessing Decentralized Technologies for Positive Change.",
  },
  {
    title: "The Expedition Conference 8.0",
    date: "2023-04-27",
    message: "Web3 Panel Discussion.",
  },
  {
    title: "BAO ENGAGE '23",
    date: "2023-04-26",
    message: "Empowering Creatives and Innovators to Build Better.",
  },
  {
    title: "Africa Tech Summit",
    date: "2023-02-16",
    message: "The NFT Opportunity.",
  },
  {
    title: "Africa Tech Summit",
    date: "2023-02-15",
    message: "Building the Future of Web3.",
  },
  {
    title: "AfricaNXT 2023",
    date: "2023-02-07",
    message:
      "Leveraging the Blockchain, Empowering Women Financially as a Catalyst for Change.",
  },
  {
    title: "GDG+DSC Web Cluster Jam",
    date: "2022-12-09",
    message: "Using Blockchain to fund your dreams as a developer.",
  },
  {
    title: "GDG DevFest Lagos",
    date: "2022-11-26",
    message: "Impact using the Blockchain.",
  },
  {
    title:
      "Hilton Top Solicitors Virtual Female Internship on emerging technologies",
    date: "2022-11-23",
    message: "Women participation in Blockchain.",
  },
  {
    title: "Women TechMakers Ajah",
    date: "2022-11-19",
    message: "Navigating your way to the top as a woman in Tech.",
  },
  {
    title: "Training with Nigerian Security Agencies",
    date: "2022-11-17",
    message: "Blockchain and its Utilities.",
  },
  {
    title: "Cyberchain Conference",
    date: "2022-11-12",
    message: "Women Empowerment with DeFi.",
  },
  {
    title: "Netrepreneur",
    date: "2022-11-05",
    message: "Understanding the Metaverse: Introducing DeFi.",
  },
  {
    title: "Nigeria Fintech Week",
    date: "2022-10-28",
    message: "Women in Blockchain - State and Future.",
  },
  {
    title: "Africa Money and DeFi Summit",
    date: "2022-09-27",
    message: "Crypto and DeFi in Africa.",
  },
  {
    title: "Ginakev Digital Academy",
    date: "2022-09-17",
    message: "Managing your emotions on the path to crypto success.",
  },
  {
    title: "Web3 Delight",
    date: "2022-07-30",
    message:
      "VC Funding for Web3 has remained resilient even as total startup investments have fallen, what Nigeria startups.....",
  },
  {
    title: "Web3 Delight",
    date: "2022-07-30",
    message: "The Power of communities in Web3.",
  },
  {
    title: "Lagos Finance Conference",
    date: "2022-06-04",
    message: "The New Money Way, Digital Money.",
  },
  {
    title: "Women in Crypto",
    date: "2022-03-08",
    message: "Managing day-jobs, business, career, and crypto trading.",
  },
];

const Media = () => {
  const [activeYear, setActiveYear] = useState(1);

  return (
    <>
      <Hero bgImg="/images/dev-x.png" chipTitle="MEDIA AND FEATURES" />
      <section className="bg-[url(/images/bg-white.jpg)] bg-center bg-cover pb-[40px] ~pt-[32px]/[80px]">
        <div className="max-w-[1750px] w-[90%] mx-auto wow fadeIn">
          <Chip name="MEDIA" />
          <div className="~my-[20px]/[40px] flex flex-wrap gap-[26px] wow fadeIn">
            {features.slice(0, 4).map((feature, index) => (
              <CommonContainer
                key={`article-${index}`}
                link={feature.link}
                subtitle={feature.subtitle}
                title={feature.title}
                imgUrl={feature.url}
                iconName={index === 0 ? "play-circle" : "book-04"}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[url(/svg/noise-bg.svg)] bg-cover bg-center ~py-[20px]/[40px]">
        <div className="max-w-[1750px] w-[90%] mx-auto wow fadeIn">
          <p
            className={`text-white text-center ~text-[16px]/[24px] font-medium leading-[133.333%] mb-[20px] ${syne.className} wow fadeIn`}
          >
            Bring your event to life with expert insights on community growth,
            DeFi, and Web3.
            <br />
            Book me today for an unforgettable experience!
          </p>
          <div className="flex justify-center wow fadeIn">
            <Link href="/contact">
              <button
                className={`bg-[#FFF] btn ~text-[12px]/[16px] hover:text-white focus:text-white hover:bg-transparent focus:bg-transparent border border-white transition-[.4s] items-center rounded-[24px] gap-[8px] font-[500] react-svg text-[#76063D] flex px-[24px] py-[11px] ${montserrat.className}`}
              >
                Book Me
                <SVGClient
                  className="~w-[16px]/[24px] ~h-[16px]/[24px]"
                  src="/svg/navigation-03.svg"
                />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[url(/images/bg-white.jpg)] bg-center bg-cover py-[40px]">
        <div className="max-w-[1750px] w-[90%] mx-auto wow fadeIn">
          <Chip name="SPEAKING ENGAGEMENTS" />
          <div className="border-b border-[#76063D80] mt-[32px]">
            <button
              onClick={() => setActiveYear(3)}
              className={`${
                activeYear === 3
                  ? "bg-[#76063D] text-white"
                  : "bg-white text-[#76063D]"
              } hover:bg-[#76063D] focus:bg-[#76063D] border border-r-0 border-b-0 border-[#76063D80] transition-[.4s] px-[16px] py-[8px] hover:text-white focus:text-white rounded-tl-[8px] ${
                syne.className
              }`}
            >
              2024
            </button>
            <button
              onClick={() => setActiveYear(2)}
              className={`${
                activeYear === 2
                  ? "bg-[#76063D] text-white"
                  : "bg-white text-[#76063D]"
              } hover:bg-[#76063D] focus:bg-[#76063D] border border-b-0 border-[#76063D80] transition-[.4s] px-[16px] py-[8px] hover:text-white focus:text-white ${
                syne.className
              }`}
            >
              2023
            </button>
            <button
              onClick={() => setActiveYear(1)}
              className={`${
                activeYear === 1
                  ? "bg-[#76063D] text-white"
                  : "bg-white text-[#76063D]"
              } hover:bg-[#76063D] focus:bg-[#76063D] border border-l-0 border-b-0 border-[#76063D80] rounded-tr-[8px] transition-[.4s] px-[16px] py-[8px] hover:text-white focus:text-white ${
                syne.className
              }`}
            >
              2022
            </button>
          </div>
          <div className="my-[40px] flex flex-wrap max-h-[50vh] px-[8px] mx-[-8px] md:max-h-fit overflow-y-auto gap-[12px] wow fadeIn scrollbar-hide">
            {engagements.map((engagement, index) =>
              engagement.date.startsWith(`202${1 + activeYear}`) ? (
                <div
                  key={`engagement-${index}`}
                  className={`xl:basis-[20%] md:basis-[40%] basis-[100%] flex-1 p-[16px] rounded-[12px] border-[0.5px] border-[#76063D80] ${poppins.className} wow fadeIn`}
                >
                  <p className="text-[#000000CC] text-[10px] font-semibold tracking-[0.2px] wow fadeIn">
                    {engagement.title}{" "}
                    <span className="italic font-normal">
                      {engagement.date}
                    </span>
                  </p>
                  <hr className="my-[8px] border-[#76063D80]" />
                  <p className="text-[#000000CC] font-semibold text-[10px] leading-[180%] wow fadeIn">
                    {engagement.message}
                  </p>
                </div>
              ) : null
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Media;
