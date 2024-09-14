import CommunityTestomonial from "@/components/CommunityTestomonial";
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
        <div className="max-w-[1750px] w-[90%] md:w-[80%] flex gap-x-[72px] gap-y-[20px] flex-wrap mx-auto ~py-[32px]/[80px]">
          <div className="mx-auto xl:ml-0">
            <h2
              className={`text-[#000] w-fit xl:text-left text-center mx-auto flex-1 min-w-fit ${syne.className} ~text-[24px]/[60px] font-[500] ordinal wow fadeIn`}
            >
              The{" "}
              <span className="text-[#76063D] relative">
                WID
                <SVGClient
                  className="~w-[58.139px]/[185px] ~h-[28.267px]/[92px] absolute ~top-[0]/[-10px] ~left-[0]/[-20px]"
                  src="/svg/circle-sm.svg"
                />
              </span>
              <br />
              Community
            </h2>
            <div className="~mt-[16px]/[20px] mx-auto w-fit flex items-center gap-[8px] wow fadeIn">
              <div
                className={`text-[16px] ${poppins.className} flex font-[500] ~gap-[4px]/[8px] items-center react-svg text-[#76063DCC] leading-[200%]`}
              >
                <SVGClient
                  className="~w-[12px]/[28px] h-[2px]"
                  src="/svg/line.svg"
                />
                <p className="text-nowrap ~text-[10px]/[16px] wow fadeIn">
                  Follow Us
                </p>
              </div>
              <div className="flex items-center gap-[8px] wow fadeIn">
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
              className="bg-[#76063D] btn hover:bg-white focus:bg-white w-fit mx-auto mt-[20px] hover:text-[#76063D] cursor-pointer focus:text-[#76063D] transition-[.4s] border border-[#76063D] ~text-[12px]/[16px] md:text-[14px] items-center rounded-[24px] gap-[8px] react-svg text-white font-[400] flex px-[24px] py-[11px] wow fadeIn"
            >
              Visit Website
              <SVGClient
                className="~w-[16px]/[24px] ~h-[16px]/[24px]"
                src="/svg/navigation-03.svg"
              />
            </a>
          </div>
          <div
            className={`basis-[560px] text-[16px] tracking-[0.32px] leading-[200%] font-[400] flex-1 ${poppins.className} wow fadeIn`}
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
                <h3 className="font-[600] tracking-[0.4px] wow fadeIn">
                  {header}
                </h3>
                <p className="wow fadeIn">{text}</p>
                {index === 2 ? null : <br />}
              </Fragment>
            ))}
          </div>
        </div>
      </section>
      <section
        className={`bg-[url(/svg/noise-bg.svg)] ${syne.className} bg-cover bg-center ~py-[20px]/[28px]`}
      >
        <div className="max-w-[1750px] items-center gap-y-[40px] flex-wrap justify-between flex w-[90%] md:w-[80%] mx-auto wow fadeIn">
          <Counter />
        </div>
      </section>
      <section className="~pt-[32px]/[120px] ~pb-[40px]/[70px]">
        <div className="max-w-[1750px] w-[90%] flex flex-wrap gap-x-[40px] items-center gap-y-[20px] mx-auto">
          <div
            className={`basis-[40%] xl:basis-[30%] flex-1 text-center xl:text-left text-[#000] xl:text-[64px] ~text-[24px]/[60px] ordinal ${syne.className} h-fit font-[500] wow fadeIn`}
          >
            What{" "}
            <span className="relative">
              they
              <SVGClient
                className="absolute bottom-0 ~w-[51.974px]/[155px] ~h-[5.775px]/[21px] left-0"
                src="/svg/line-12.svg"
              />
            </span>{" "}
            <br />
            <span className="text-[#76063D]">say</span>
            ...
          </div>

          {testimonialData.map(({ imgName, testimonial, user }, index) => (
            <div
              key={"testimonial__" + index}
              className={`relative md:block hidden overflow-hidden flex-1 basis-[40%] xl:basis-[30%] wow fadeIn`}
            >
              <p className="min-h-[215px] py-[16px] bg-[#FDFCFC] px-[16px] border-[.25px] flex items-center justify-center border-[#0000000D] italic font-[400] rounded-t-[8px] text-[14px] text-center tracking-[0.28px] text-black wow fadeIn">
                {testimonial}
              </p>
              <div className="bg-white relative z-[600] h-[4px] w-full wow fadeIn"></div>
              <div className="py-[12px] bg-[#FDFCFC] border-[.25px] border-[#0000000D] flex items-center gap-[4px] justify-center rounded-b-[8px] w-full wow fadeIn">
                <img
                  src={`/images/${imgName}.png`}
                  className="rounded-[50%] w-[28px] aspect-square"
                  alt="Testimonial Image"
                />
                <div className="wow fadeIn">
                  <h6 className="text-[16px] font-[500] tracking-[.64px] text-[#000000D9] wow fadeIn">
                    {user}
                  </h6>
                </div>
              </div>
              <p
                style={{ transition: "inset 1s" }}
                className={`${abeeze.className} text-[320px] max-h-[160px] text-[#0000000D] z-[500] right-[-20px] font-[400] absolute bottom-[48px] wow fadeIn`}
              >
                “
              </p>
            </div>
          ))}
        </div>
        <div className="max-w-[1750px] overflow-hidden mx-auto wow fadeIn">
          <CommunityTestomonial />
        </div>
      </section>
    </>
  );
};

export default Community;
