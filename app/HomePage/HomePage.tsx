/* eslint-disable @next/next/no-img-element */

import Chip from "@/components/Chip";
import CommonContainer from "@/components/CommonContainer";
import ContactForm from "@/components/ContactForm";
import SVGClient from "@/components/SVGClient";
import { Montserrat, Poppins, Syne } from "next/font/google";

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

const imgUrls: string[] = ["ats", "cmfest", "dexv", "ogun", "bao", "xpedition"];

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

const features: {
  title: string;
  url: string;
  subtitle: string;
  link: string;
}[] = [
  {
    title: "Empowering Women In Blockchain: The Journey of Women In DeFi.",
    url: "features-sarah",
    subtitle: "Inside the Hive with Feezy Podcast; Sept 2023",
    link: "https://open.spotify.com/episode/1RjnKtPK0nK8Mbioz3guN0",
  },
  {
    title: "UNILAG; The Expedition.",
    url: "features-sarah",
    subtitle: "Nairametrics; April 26, 2023",
    link: "https://nairametrics.com/2023/04/26/unilag-others-brace-up-for-the-expedition-conference-tec-8-0/",
  },
  {
    title:
      "TechNext Women In Tech Series: Sarah Idahosa, Founder; Women in DeFI.",
    url: "features-sarah",
    subtitle: "TechNext24; March 13, 2023",
    link: "https://technext24.com/2023/03/13/sarah-idahosa-founder-of-women-in-defi/",
  },
  {
    title: "Global Fintech Interview.",
    url: "features-sarah",
    subtitle: "iTech Series; December 30, 2022",
    link: "https://globalfintechseries.com/blockchain/global-fintech-interview-with-sarah-idahosa-founder-at-womenindefi/",
  },
  {
    title: "Africa Tech Summit",
    url: "features-sarah",
    subtitle: "Cointelegraph; Sept 27, 2022",
    link: "https://x.com/Cointelegraph/status/1574792079783362567?t=7skMDX56j7YwSv3qnL_A9g&s=19",
  },
  {
    title: "Mara: Blockchain Masterclass: The impact of communities in Web3.",
    url: "features-sarah",
    subtitle: "Mara; Sept 14, 2022",
    link: "https://www.youtube.com/watch?v=KbhvlMt_xYI",
  },
  {
    title: "Women Series: DeFi; Use Cases & Benefits to the Economy.",
    url: "features-sarah",
    subtitle: "Web3TV Nigeria; August 3, 2022",
    link: "https://www.youtube.com/watch?v=Kxd54Yskn9I",
  },
  {
    title: "Web3 Delight Podcast",
    url: "features-sarah",
    subtitle: "Web3 Delight; Jul 2022",
    link: "https://open.spotify.com/episode/1zwkAfhTXSyPAJkFrFh43y",
  },
];

const HomePage = () => {
  return (
    <main>
      <section className="w-full relative max-h-[47.5rem] h-[80vh]">
        <img
          src="/svg/hero-one.svg"
          className="object-cover w-full h-full"
          alt="Home Page Image"
        />
        <div className="absolute h-full w-full flex items-end top-0 left-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent">
          <div className="px-[5rem] max-w-[109.375rem] mx-auto pb-[4.1875rem] text-white">
            <h1
              className={`text-[6rem] font-[700] mb-[-0.75rem] uppercase ${montserrat.className}`}
            >
              SARAH IDAHOSA
            </h1>
            <p
              className={`text-[1.75rem] w-[60%] ${syne.className} font-[700]`}
            >
              Community Growth Manager, DeFi Advocate, Web3 Educator, & Founder;
              Women In DeFi.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[url(/svg/noise-bg.svg)] px-[5.3125rem] bg-cover bg-center py-[2.625rem]">
        <div className="max-w-[109.375rem] flex items-center w-full justify-between mx-auto">
          {imgUrls.map((url, index) => (
            <img
              key={`img_${index}`}
              src={"/svg/" + url + ".svg"}
              alt={`img_${index}`}
            />
          ))}
        </div>
      </section>
      <section className="bg-[url(/images/bg-white.jpg)] bg-cover bg-center py-[5rem]">
        <div className="max-w-[109.375rem] w-[90%] mx-auto">
          <Chip name="ABOUT ME" />
          <div
            className={`flex mt-[1rem]  items-center gap-[3.75rem] w-fit ml-auto`}
          >
            <div className="">
              <h2
                className={`leading-[normal] text-black text-[4rem] font-[500] mb-[2.5rem] ${syne.className}`}
              >
                Who is <br />
                <span className="text-[#76063D] ">SARAH IDAHOSA?</span>
              </h2>
              <p
                className={`${poppins.className} leading-[200%] text-[1rem] mb-[1.75rem] font-[400] text-black`}
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
              <button className="bg-[#76063D] hover:bg-white hover:text-[#76063D] transition-[.4s] border border-[#76063D] text-[1rem] items-center rounded-[1.5rem] gap-[.5rem] react-svg text-white font-[400] flex px-[1.5rem] py-[.7rem]">
                Download CV
                <SVGClient src="/svg/document-attachment.svg" />
              </button>
            </div>
            <img
              src="/images/sayrah.jpg"
              className="w-[36.123125rem] 2xl:rounded-[1.25rem] rounded-l-[1.25rem] h-[50rem]"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="bg-[url(/images/bg.jpg)] py-[5rem]">
        <div className="max-w-[109.375rem] w-[90%] mx-auto">
          <Chip name="my services" />
          <div className="flex gap-y-[1.6875rem] mt-[3.75rem] flex-wrap gap-x-[2.5rem]">
            {serviceInfo.map(({ svg, text, title }, index) => (
              <div
                key={"servce" + index}
                className="pt-[1.25rem] basis-[37.5rem] flex-1 border-[.25px] border-[#00000040] pb-[2.75rem] rounded-[8px] bg-[#FFF] px-[2.5rem]"
              >
                <figure className="aspect-[1/1] mb-[.75rem] w-[2.5rem] bg-[#76063D] text-white react-svg flex items-center justify-center rounded-[8px] mx-auto">
                  <SVGClient
                    className="react-svg"
                    src={"/svg/" + svg + ".svg"}
                  />
                </figure>
                <h4
                  className={`text-[1.25rem] ${syne.className} text-[#76063D] text-center mb-[.75rem]`}
                >
                  {title}
                </h4>
                <p
                  className={`${poppins.className} text-black text-[.75rem] font-[400]`}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[url(/images/bg-white.jpg)] bg-cover bg-center py-[5rem]">
        <div className="max-w-[109.375rem] w-[90%] mx-auto">
          <Chip name="TESTIMONIALS" />
        </div>
      </section>
      <section className="bg-[url(/images/bg.jpg)] bg-cover bg-center py-[5rem]">
        <div className="max-w-[109.375rem] w-[90%] mx-auto">
          <Chip name="CONTACT ME" />
          <ContactForm />
        </div>
      </section>
      <section className="bg-[url(/images/bg-white.jpg)] bg-cover py-[5rem] bg-center">
        <div className="max-w-[109.375rem] w-[90%] mx-auto">
          <Chip name="features" />
          <div className="flex gap-y-[1.75rem] mt-[3.75rem] flex-wrap gap-x-[1.6875rem]">
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
        </div>
      </section>
    </main>
  );
};

export default HomePage;
