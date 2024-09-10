import Hero from "@/components/Hero";
import SVGClient from "@/components/SVGClient";
import { Poppins, Syne } from "next/font/google";
import { Fragment } from "react";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
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
          {[
            {
              numeral: "40,000",
              text: (
                <>
                  Social Media
                  <br />
                  Reach
                </>
              ),
            },
            {
              numeral: "3,000",
              text: (
                <>
                  Community
                  <br />
                  Members
                </>
              ),
            },
            {
              numeral: "5",
              text: (
                <>
                  Physical Events
                  <br />
                  Hosted
                </>
              ),
            },
            {
              numeral: "20",
              text: (
                <>
                  Community Chapters
                  <br />
                  Nationwide
                </>
              ),
            },
            {
              numeral: "10",
              text: (
                <>
                  DeFi
                  <br />
                  Cohorts
                </>
              ),
            },
          ].map(({ numeral, text }, index) => (
            <Fragment key={"Metric__" + index}>
              <div className="text-white basis-[15.375rem]">
                <p className="text-[2.5rem] leading-[80%] text-center font-[600]">
                  {numeral}+
                </p>
                <p className="text-[1.5rem] w-[100%] mx-auto text-center">
                  {text}
                </p>
              </div>
            </Fragment>
          ))}
        </div>
      </section>
      <section className="pt-[7.5rem]"></section>
    </>
  );
};

export default Community;
