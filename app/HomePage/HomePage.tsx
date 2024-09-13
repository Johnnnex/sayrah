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
    text: "Lorem ipsum dolor sit amet consectetur. Amet enim morbi eu id aliquam eget in. Facilisis justo mi congue commodo sem eu morbi imperdiet. Amet eget morbi nibh lorem sit nunc sit. Habitant sed eget donec turpis quis. Senectus cursus sit facilisis urna lectus cursus sit sed suspendisse. Urna nulla pulvinar massa luctus.",
  },
  {
    svg: "oui_training",
    title: "Web3 Training",
    text: "Lorem ipsum dolor sit amet consectetur. Amet enim morbi eu id aliquam eget in. Facilisis justo mi congue commodo sem eu morbi imperdiet. Amet eget morbi nibh lorem sit nunc sit. Habitant sed eget donec turpis quis. Senectus cursus sit facilisis urna lectus cursus sit sed suspendisse. Urna nulla pulvinar massa luctus.",
  },
  {
    svg: "wi_small-craft-advisory",
    title: "Project Advisory",
    text: "Lorem ipsum dolor sit amet consectetur. Amet enim morbi eu id aliquam eget in. Facilisis justo mi congue commodo sem eu morbi imperdiet. Amet eget morbi nibh lorem sit nunc sit. Habitant sed eget donec turpis quis. Senectus cursus sit facilisis urna lectus cursus sit sed suspendisse. Urna nulla pulvinar massa luctus.",
  },
  {
    svg: "nimbus_marketing",
    title: "Marketing & Consulting",
    text: "Lorem ipsum dolor sit amet consectetur. Amet enim morbi eu id aliquam eget in. Facilisis justo mi congue commodo sem eu morbi imperdiet. Amet eget morbi nibh lorem sit nunc sit. Habitant sed eget donec turpis quis. Senectus cursus sit facilisis urna lectus cursus sit sed suspendisse. Urna nulla pulvinar massa luctus.",
  },
];

const HomePage = () => {
  return (
    <main>
      <section className="w-full relative max-h-[760px] h-[60vh] md:h-[85vh]">
        <BgSlider />
        <div className="absolute h-full w-full flex items-end top-0 left-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent">
          <div className="2xl:px-[80px] md:px-[40px] px-[20px] max-w-[1750px] mx-auto xl:pb-[67px] pb-[48px] text-white">
            <h1
              className={`xl:text-[64px] md:text-[56px] text-[48px] 2xl:text-[96px] font-[700] mb-[-12px] uppercase ${montserrat.className}`}
            >
              SARAH IDAHOSA
            </h1>
            <p
              className={`md:text-[16px] text-[12px] 2xl:text-[28px] md:w-[70%] xl:w-[60%] ${syne.className} font-[700]`}
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
            className={`flex ~mt-[16px]/[36px] items-center flex-wrap-reverse md:gap-[60px] ~gap-[20px]/[60px]`}
          >
            <div className="basis-[45%] flex-1">
              <h2
                className={`leading-[normal] text-black ~text-[24px]/[60px] xl:text-[64px] font-[500] ~mb-[11px]/[40px] ${syne.className}`}
              >
                Who is <br />
                <span className="text-[#76063D] ">SARAH IDAHOSA?</span>
              </h2>
              <p
                className={`${poppins.className} leading-[200%] ~text-[12px]/[16px] mb-[28px] font-[400] text-black`}
              >
                Sarah Idahosa; (Sayraah) is a versatile professional
                distinguished for her proficiency in Web3 community development,
                educational initiatives, decentralized finance research, and
                token economics. She serves as the esteemed founder of Women In
                DeFi, a pioneering community dedicated to empowering women with
                comprehensive knowledge of blockchain technology and adeptly
                navigating tthe Web3 ecosystem utilizing their existing Web2
                competencies. <br />
                In addition to her pivotal role at Women In DeFi, Sarah also
                assumes the position of community manager at Cassava Network.
                This innovative platform serves as a pivotal bridge between Web
                2 and Web 3, particularly focusing on NFTs, gaming, and
                entertainment sectors. <br />
                Through her stewardship, Sarah facilitates seamless connections
                between individuals & the manifold advantages inherent in the
                Web3 landscape....
              </p>
              <button className="bg-[#76063D] hover:bg-white hover:text-[#76063D] focus:bg-white focus:text-[#76063D] transition-[.4s] border border-[#76063D] ~text-[12px]/[16px] items-center rounded-[24px] gap-[8px] react-svg text-white font-[400] flex px-[24px] py-[11px]">
                Download CV
                <SVGClient
                  className="react-svg aspect-square ~w-[16px]/[24px]"
                  src="/svg/document-attachment.svg"
                />
              </button>
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
          <div className="flex ~gap-y-[20px]/[27px] ~mt-[32px]/[60px] flex-wrap gap-x-[40px]">
            {serviceInfo.map(({ svg, text, title }, index) => (
              <div
                key={"service__" + index}
                className="md:pt-[20px] py-[12px] basis-[600px] flex-1 border-[.25px] border-[#00000040] md:pb-[44px] rounded-[8px] bg-[#FFF] px-[24px] md:px-[40px]"
              >
                <figure className="aspect-[1/1] mb-[12px] w-[40px] bg-[#76063D] text-white react-svg flex items-center justify-center rounded-[8px] mx-auto">
                  <SVGClient
                    className="react-svg"
                    src={"/svg/" + svg + ".svg"}
                  />
                </figure>
                <h4
                  className={`text-[20px] ${syne.className} text-[#76063D] text-center mb-[12px]`}
                >
                  {title}
                </h4>
                <p
                  className={`${poppins.className} text-black text-[12px] font-[400]`}
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
        <div className="max-w-[1750px] ~mt-[32px]/[40px] overflow-hidden mx-auto">
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
          <div className="flex gap-y-[28px] ~mt-[32px]/[60px] flex-wrap gap-x-[27px]">
            {features.map(({ subtitle, url, link, title }, index) => (
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
            href="/about"
            style={{ border: "1px solid #76063D" }}
            className="hover:bg-[#76063D] mt-[40px] w-fit mx-auto btn bg-white focus:bg-[#76063D] text-[#76063D] focus:text-white transition-[.4s] border border-[#76063D] text-[16px] items-center rounded-[24px] gap-[8px] react-svg hover:text-white font-[400] flex px-[24px] py-[11px]"
          >
            See More
            <SVGClient src="/svg/arrow-up-right-01.svg" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
