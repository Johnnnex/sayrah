import Counter from "@/components/Counter";
/* eslint-disable @next/next/no-img-element */
import Hero from "@/components/Hero";
import SVGClient from "@/components/SVGClient";
import { ABeeZee, Poppins, Syne } from "next/font/google";
import { Fragment, useEffect, useState } from "react";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const abeeze = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
});

const testimonialData: {
  testimonial: string;
  user: string;
  imgName: string;
}[] = [
  {
    testimonial: `“WID changed my view about blockchain and crypto. A community blessed with great tutors that are patient in explaining and carrying their students along. My Defi journey has been a great one. It all started with #WID”`,
    user: "Nemi James",
    imgName: "nemi",
  },
  {
    testimonial: `“WID was the start of my defi journey and the start of my millionaire journey. I discovered so many opportunities that i can leverage to make myself financially stable in the defi space. The biggest motivation is the fact that i'm taught by women who have broken records, which gives me the inspiration to do more. Then being part of a community that looks out for you can't be overemphasized as it speeds up my growth.”`,
    user: "Uwadimma Christabel",
    imgName: "uwadimma",
  },
  {
    testimonial: `“The WID team has not only taught me about Defi but also help me stand my feet in the decentralized finance space through the process of close watch and constant follow-up even after the class. After the class, i have been able to get jobs that have given me funds to get gadgets to improve my tech journey, funds to process admission, and also my upkeep. A big thanks to the team for also reaching out and helping.”`,
    user: "Lady Benny",
    imgName: "benny",
  },
  {
    testimonial: `“Joining women in Defi was actually one of my best gift the Lord gave me the year 2022. It changed my life and made me meet a lot of important people that i could call sisters. They really make the community look like family. I am grateful for having the best tutors also.”`,
    user: "Swizzabane Mide",
    imgName: "mide",
  },
  {
    testimonial: `“I was onboarded into the web3 space by the WID community in April this year; that was the best thing that happened to me. Before now, I had no knowledge of what web3 is or what the decentralized space is all about.The only knowledge I had on crypto then was buying low and selling high 😅. A big thank you to the founder of WomenInDefi and the core team members, WID was a game changer for me. Today, I'm an ardent believer in Decentralized Finance”`,
    user: "Vivian Adeniyi",
    imgName: "mide",
  },
];

const Community = () => {
  return (
    <>
      <Hero chipTitle="THE WiD COMMUNITY" bgImg="/svg/wid-community.svg" />
      <section className="bg-[url(/images/bg-white.jpg)] bg-cover bg-center">
        <div className="max-w-[109.375rem] w-[80%] flex gap-x-[4.5rem] mx-auto py-[5rem]">
          <div className="">
            <h2
              className={`text-[#000] flex-1 min-w-fit ${syne.className} text-[4rem] font-[500] ordinal`}
            >
              The{" "}
              <span className="text-[#76063D] relative">
                WID
                <SVGClient
                  style={{ position: "absolute", top: "-10px", left: "-20px" }}
                  src="/svg/circle-sm.svg"
                />
              </span>
              <br />
              Community
            </h2>
            <div className="mt-[1.25rem] mx-auto w-fit flex items-center gap-[.5rem]">
              <div
                className={`text-[1rem] ${poppins.className} flex font-[500] gap-[.5rem] items-center react-svg text-[#76063DCC] leading-[200%]`}
              >
                <SVGClient src="/svg/line.svg" />
                <p className="text-nowrap">Follow Us</p>
              </div>
              <div className="flex items-center gap-[.5rem]">
                {[
                  { socialIcons: "twitter", socialLinks: "" },
                  { socialIcons: "instagram", socialLinks: "" },
                  { socialIcons: "linkedin", socialLinks: "" },
                  { socialIcons: "discord", socialLinks: "" },
                  { socialIcons: "youtube", socialLinks: "" },
                ].map(({ socialIcons, socialLinks }, index) => (
                  <a
                    target="_blank"
                    href={socialLinks}
                    key={"icon__" + index}
                    className="h-fit w-fit"
                  >
                    <SVGClient
                      className="aspect-[1/1] text-[#76063D] hover:bg-[#76063D] focus:text-[#76063D] focus:bg-[#76063D] transition-[.4s] rounded-[50%] hover:text-white border border-[#76063D] p-[6px] items-center justify-center flex"
                      src={"/svg/" + socialIcons + ".svg"}
                    />
                  </a>
                ))}
              </div>
            </div>
            <a
              href="https://womenindefi.org/"
              target="_blank"
              style={{ border: "1px solid #76063D" }}
              className="bg-[#76063D] btn hover:bg-white focus:bg-white w-fit mx-auto mt-[1.25rem] hover:text-[#76063D] cursor-pointer focus:text-[#76063D] transition-[.4s] border border-[#76063D] text-[1rem] items-center rounded-[1.5rem] gap-[.5rem] react-svg text-white font-[400] flex px-[1.5rem] py-[.7rem]"
            >
              Visit Website
              <SVGClient src="/svg/navigation-03.svg" />
            </a>
          </div>
          <div
            className={`basis-[53.75rem] text-[1rem] tracking-[0.32px] leading-[200%] font-[400] flex-1 ${poppins.className}`}
          >
            {[
              {
                header: "ABOUT WiD",
                text: "Women In DeFi is a non-profit organization dedicated to promoting knowledge and empowerment among women in the areas of Blockchain Technology and Decentralized Finance. Our fundamental approach is to provide our community members with high-quality mentorship that focuses on their individual areas of expertise within the Blockchain Technology domain.",
              },
              {
                header: "OUR VISION",
                text: "We aim to educate 2,000,000 girls and women about blockchain technology, fostering understanding, creating opportunities, and nurturing future leaders in the blockchain space",
              },
              {
                header: "OUR MISSION",
                text: "We envision a thriving, inclusive community of women in the Blockchain space, where diverse talents and perspectives converge to revolutionize the Web3 landscape. Through mentorship, education, and collaboration, we strive to break down barriers, fostering innovation and leading the way towards a more equitable digital future.",
              },
            ].map(({ header, text }, index) => (
              <Fragment key={"community__info__" + index}>
                <h3 className="font-[600] tracking-[0.4px]">{header}</h3>
                <p>{text}</p>
                {index === 2 ? null : <br />}
              </Fragment>
            ))}
          </div>
        </div>
      </section>
      <section
        className={`bg-[url(/svg/noise-bg.svg)] ${syne.className} bg-cover bg-center py-[1.75rem]`}
      >
        <div className="max-w-[109.375rem] items-center justify-between flex w-[80%] mx-auto">
          <Counter />
        </div>
      </section>
      <section className="pt-[7.5rem] pb-[4.375rem]">
        <div className="max-w-[109.375rem] w-[90%] flex flex-wrap gap-x-[2.5rem] items-center gap-y-[1.25rem] mx-auto">
          <div
            className={`basis-[30%] flex-1 text-[#000] text-[4rem] ordinal ${syne.className} h-fit font-[500]`}
          >
            What{" "}
            <span className="relative">
              they
              <SVGClient
                className="absolute bottom-0 left-0"
                src="/svg/line-12.svg"
              />
            </span>{" "}
            <span className="text-[#76063D]">say</span>
            ...
          </div>
          {testimonialData.map(({ imgName, testimonial, user }, index) => (
            <div
              key={"testimonial__" + index}
              className={`relative overflow-hidden flex-1 basis-[30%]`}
            >
              <p className="min-h-[13.4375rem]  py-[1rem] bg-[#FDFCFC] px-[1rem] border-[.25px] flex items-center justify-center border-[#0000000D] italic font-[400] rounded-t-[8px] text-[0.875rem] text-center tracking-[0.28px] text-black">
                {testimonial}
              </p>
              <div className="bg-white relative z-[600] h-[4px] w-full"></div>
              <div className="py-[.75rem] bg-[#FDFCFC] border-[.25px] border-[#0000000D] flex items-center gap-[4px] justify-center rounded-b-[8px] w-full">
                <img
                  src={`/images/${imgName}.png`}
                  className="rounded-[50%] w-[1.75rem] aspect-square"
                  alt="Testimonial Image"
                />
                <div className="">
                  <h6 className="text-[1rem] font-[500] tracking-[.64px] text-[#000000D9]">
                    {user}
                  </h6>
                </div>
              </div>
              <p
                style={{ transition: "inset 1s" }}
                className={`${abeeze.className} text-[20rem] max-h-[10rem] text-[#0000000D] z-[500] right-[-20px] font-[400] absolute bottom-[3rem]`}
              >
                “
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Community;
