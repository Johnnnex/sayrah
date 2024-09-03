/* eslint-disable @next/next/no-img-element */
import SVGClient from "@/components/SVGClient";
import { Syne, Poppins, Montserrat } from "next/font/google";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const linkInfo = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/",
  },
  {
    title: "Community",
    href: "/",
  },
  {
    title: "Speaking",
    href: "/",
  },
  {
    title: "Blog",
    href: "/",
  },
];
const Footer = () => {
  return (
    <footer className="bg-white">
      <section className={`py-[2.5rem] text-white bg-[#76063D] `}>
        <h3
          className={` text-[1.5rem] font-[500] ${syne.className} text-center leading-[133.333%]`}
        >
          Join my Crypto Newsletter.
        </h3>
        <p
          className={`text-center leading-[266.667%] mb-[1.25rem] ${poppins.className}`}
        >
          Not just another boring newsletter, I promise... I&apos;d be seeing
          you around.
        </p>
        <div className="w-fit mx-auto flex items-center gap-[1.25rem]">
          <input
            placeholder="Your Email Address"
            className={`py-[.625rem] placeholder:text-[#ffffff80] text-[.75rem] h-[3.25rem] px-[1.25rem] leading-[266.667%] font-[400] bg-transparent outline-none border border-[#FFF] rounded-[1.5rem] w-[28.125rem] ${poppins.className}`}
            type="text"
          />
          <button
            className={`bg-[#FFF] btn text-[1rem] hover:text-white focus:text-white hover:bg-transparent focus:bg-transparent border border-white transition-[.4s] items-center rounded-[1.5rem] gap-[.5rem] font-[500] react-svg text-[#76063D] flex px-[1.5rem] py-[.7rem] ${montserrat.className}`}
          >
            Subscribe
            <SVGClient src="/svg/navigation-03.svg" />
          </button>
        </div>
      </section>
      <section className="pt-[2.5rem] max-w-[109.375rem] mx-auto  pb-[5.0625rem] px-[3.25rem]">
        <div className="flex items-center justify-between px-[2rem]">
          <figure>
            <img src="/svg/logo.svg" alt="Logo" />
          </figure>
          <ul className="flex items-center gap-[2.5rem]">
            {linkInfo.map((e, index) => (
              <li key={"footer__link__" + index}>
                <a
                  href={e.href}
                  className={`text-[.75rem] font-[400] a text-[#76063D] tracking-[0.24px] ${poppins.className}`}
                >
                  {e.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="mt-[2.5625rem] bg-[#76063D80] mb-[0.765625rem] h-[.4px]" />
        <div
          className={`w-fit flex text-[0.75rem] text-[#76063D] items-center gap-[2.5rem] ml-auto ${poppins.className}`}
        >
          <a
            href=""
            className="font-[400] tracking-[0.24px] a transition-[.4s]"
          >
            EULA
          </a>
          <a href="/" className="font-[400] a tracking-[0.24px]">
            Privacy Policy
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
