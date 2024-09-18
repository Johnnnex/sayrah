/* eslint-disable @next/next/no-img-element */

import BgSlider from "@/components/BgSlider";
import Chip from "@/components/Chip";
import CommonContainer from "@/components/CommonContainer";
import ContactForm from "@/components/ContactForm";
import SVGClient from "@/components/SVGClient";
import Testimonial from "@/components/Testimonial";
import { Montserrat, Poppins, Syne } from "next/font/google";
import features from "@/Data/features";
import BrandSlider from "@/components/BrandSlider";
import Link from "next/link";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const serviceInfo: {
  svg: string;
  title: string;
  text: string;
}[] = [
  {
    svg: "tool",
    title: "Community Building",
    text: "Create and nurture vibrant online communities that foster engagement and growth. This service focuses on developing strategies to build strong ecosystems, encouraging active participation, and ensuring a supportive environment for users.",
  },
  {
    svg: "oui_training",
    title: "Web3 Training",
    text: "Provide comprehensive training on blockchain technology, decentralized finance (DeFi), and the transition to Web3. Simplify complex concepts through tailored sessions to help individuals and organizations understand and leverage the decentralized world effectively.",
  },
  {
    svg: "wi_small-craft-advisory",
    title: "Project Advisory",
    text: "Offer strategic guidance for blockchain and DeFi projects, including tokenomics, ecosystem development, and market positioning. This service helps projects navigate the decentralized landscape and ensures they are set up for long-term success.",
  },
  {
    svg: "nimbus_marketing",
    title: "Marketing & Consulting",
    text: "Develop and implement targeted marketing strategies that resonate with the Web3 audience. This service includes market analysis, branding, and campaign development to enhance project visibility and drive engagement.",
  },
];

const HomePage = () => {
  return (
    <main>
      <section className="w-full relative max-h-[760px] h-[60vh] md:h-[85vh]">
        <BgSlider />
        <div className="absolute h-full w-full flex items-end top-0 left-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent">
          <div className="max-w-[1750px] w-[90%] mx-auto xl:pb-[67px] pb-[48px] text-white">
            <h1
              className={`xl:text-[64px] wow fadeIn md:text-[56px] text-[48px] 2xl:text-[96px] font-[700] mb-[-12px] uppercase ${montserrat.className}`}
            >
              SARAH IDAHOSA
            </h1>
            <p
              className={`md:text-[16px] text-[12px] 2xl:text-[28px] md:w-[70%] xl:w-[60%] ${syne.className} font-[700] wow fadeIn`}
            >
              Community Growth Manager, DeFi Advocate, Web3 Educator, & Founder;
              Women In DeFi.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[url(/svg/noise-bg.svg)] bg-cover bg-center py-[42px]">
        <BrandSlider />
      </section>
      <section className="bg-[url(/images/bg-white.jpg)] bg-cover bg-center py-[80px]">
        <div className="max-w-[1750px] w-[90%] mx-auto">
          <Chip name="ABOUT ME" />
          <div
            className={`flex ~mt-[16px]/[36px] items-center flex-wrap-reverse md:gap-[60px] ~gap-[20px]/[60px] wow fadeIn`}
          >
            <div className="basis-[45%] flex-1 wow fadeIn">
              <h2
                className={`leading-[normal] wow fadeIn text-black ~text-[24px]/[60px] xl:text-[64px] font-[500] ~mb-[11px]/[40px] ${syne.className}`}
              >
                Who is <br />
                <span className="text-[#76063D] ">SARAH IDAHOSA?</span>
              </h2>
              <p
                className={`${poppins.className} leading-[200%] ~text-[12px]/[16px] text-justify mb-[28px] font-[400] text-black wow fadeIn`}
              >
                Sarah Idahosa is a versatile professional distinguished for her
                proficiency in Web3 community development, educational
                initiatives, and decentralized finance research. She is the
                esteemed founder of Women In DeFi, a pioneering community
                dedicated to empowering women with comprehensive knowledge of
                blockchain technology and adeptly navigating the Web3 ecosystem
                utilizing their existing Web2 competencies.
                <br />
                <br />
                In addition to her pivotal role at Women In DeFi, Sarah also
                assumes the partnership and community growth lead position at
                Mansa. This DeFi platform provides liquidity solutions to
                cross-border payment companies.
                <br />
                <br />
                Drawing upon a robust background in blockchain education, Sarah
                is deeply committed to facilitating individuals&apos; transition
                from Web2 to Web3 paradigms...
                <Link
                  href="/about"
                  className="text-[#76063D] ~text-[10px]/[14px] italic inline h-fit mb-0 hover:underline"
                >
                  See more
                </Link>
              </p>
              {/* <button className="bg-[#76063D] hover:bg-white hover:text-[#76063D] focus:bg-white focus:text-[#76063D] transition-[.4s] border border-[#76063D] ~text-[12px]/[16px] items-center rounded-[24px] gap-[8px] react-svg text-white font-[400] flex px-[24px] py-[11px]">
                Download CV
                <SVGClient
                  className="react-svg aspect-square ~w-[16px]/[24px]"
                  src="/svg/document-attachment.svg"
                />
              </button> */}
            </div>
            <img
              src="/images/sayrah.jpg"
              className="basis-[25%] scale-x-[-1] xl:scale-x-[1] flex-1 2xl:rounded-[20px] rounded-[20px] ~h-[414.079px]/[800px] object-cover"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="bg-[url(/images/bg.jpg)] py-[80px]">
        <div className="max-w-[1750px] w-[90%] mx-auto">
          <Chip name="my services" />
          <div className="flex ~gap-y-[20px]/[27px] ~mt-[32px]/[60px] flex-wrap gap-x-[40px] wow fadeIn">
            {serviceInfo.map(({ svg, text, title }, index) => (
              <div
                key={"service__" + index}
                className="md:pt-[20px] py-[12px] basis-[45%] flex-1 border-[.25px] border-[#00000040] md:pb-[44px] rounded-[8px] bg-[#FFF] px-[24px] md:px-[40px] wow fadeIn"
              >
                <figure className="aspect-[1/1] mb-[12px] w-[40px] bg-[#76063D] text-white react-svg flex items-center justify-center rounded-[8px] mx-auto">
                  <SVGClient
                    className="react-svg"
                    src={"/svg/" + svg + ".svg"}
                  />
                </figure>
                <h4
                  className={`text-[20px] wow fadeIn ${syne.className} text-[#76063D] text-center mb-[12px]`}
                >
                  {title}
                </h4>
                <p
                  className={`${poppins.className} text-black text-[12px] font-[400] wow fadeIn`}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[url(/images/bg-white.jpg)] bg-cover bg-center py-[80px]">
        <div className="max-w-[1750px] w-[90%] mx-auto">
          <Chip name="TESTIMONIALS" />
        </div>
        <div className="max-w-[1750px] ~mt-[32px]/[40px] overflow-hidden mx-auto wow fadeIn">
          <Testimonial />
        </div>
      </section>
      <section className="bg-[url(/images/bg.jpg)] bg-cover bg-center py-[80px]">
        <div className="max-w-[1750px] w-[90%] mx-auto">
          <Chip name="CONTACT ME" />
          <ContactForm />
        </div>
      </section>
      <section className="bg-[url(/images/bg-white.jpg)] bg-cover ~py-[40px]/[80px] bg-center">
        <div className="max-w-[1750px] w-[90%] mx-auto">
          <Chip name="features" />
          <div className="flex gap-y-[28px] ~mt-[32px]/[60px] flex-wrap gap-x-[27px] wow fadeIn">
            {features
              .slice(4, 8)
              .map(({ subtitle, url, link, title }, index) => (
                <CommonContainer
                  key={"feature__" + index}
                  imgUrl={url}
                  link={link}
                  subtitle={subtitle}
                  title={title}
                />
              ))}
          </div>
          <Link
            href="/about#features"
            style={{ border: "1px solid #76063D", display: "flex" }}
            className="hover:bg-[#76063D] react-svg ~mt-[20px]/[40px] w-fit mx-auto btn bg-white focus:bg-[#76063D] text-[#76063D] focus:text-white transition-[.4s] border border-[#76063D] ~text-[12px]/[16px] items-center rounded-[24px] gap-[8px] react-svg hover:text-white font-[400] flex px-[24px] py-[11px]"
          >
            See More
            <SVGClient className="" src="/svg/arrow-up-right-01.svg" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
