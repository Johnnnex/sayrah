/* eslint-disable @next/next/no-img-element */

import Chip from "@/components/Chip";
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

const imgUrls = ["ats", "cmfest", "dexv", "ogun", "bao", "xpedition"];
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
      <section className="bg-white py-[5rem] pl-[5rem]">
        <div className="max-w-[109.375rem] mx-auto">
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
                competencies. In addition to her pivotal role at Women In DeFi,
                Sarah also assumes the position of community manager at Cassava
                Network. This innovative platform serves as a pivotal bridge
                between Web 2 and Web 3, particularly focusing on NFTs, gaming,
                and entertainment sectors. Through her stewardship, Sarah
                facilitates seamless connections between individuals & the
                manifold advantages inherent in the Web3 landscape....
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
    </main>
  );
};

export default HomePage;
