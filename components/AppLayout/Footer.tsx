"use client";

/* eslint-disable @next/next/no-img-element */
import SVGClient from "@/components/SVGClient";
import { Syne, Poppins, Montserrat } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    href: "/about",
  },
  {
    title: "Community",
    href: "/community",
  },
  {
    title: "Speaking",
    href: "/features",
  },
  {
    title: "Blog",
    href: "https://medium.com/@sarahidahosa",
  },
];
const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="bg-white">
      <section className={`~py-[20px]/[40px] text-white bg-[#76063D] `}>
        <h3
          className={`~text-[16px]/[24px] font-[500] ${syne.className} text-center md:leading-[133.333%] wow fadeIn`}
        >
          Join my Web3 Newsletter.
        </h3>
        <p
          className={`text-center ~text-[12px]/[16px] md:leading-[266.667%] ~mb-[16px]/[20px] ${poppins.className} wow fadeIn`}
        >
          Not just another boring newsletter, I promise... I&apos;d be seeing
          you around.
        </p>
        <div className="w-fit  overflow-hidden mx-auto flex items-center wow fadeIn">
          <a
            style={{ border: "1px solid white" }}
            href="https://medium.com/@sarahidahosa"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-[#FFF] btn ~text-[12px]/[16px] hover:text-white focus:text-white hover:bg-transparent focus:bg-transparent border border-white transition-[.4s] items-center rounded-[24px] gap-[8px] font-[500] react-svg text-[#76063D] flex px-[24px] py-[11px] ${montserrat.className}`}
          >
            <span className="">Medium</span>
            <SVGClient
              className="~w-[16px]/[24px] ~h-[16px]/[24px]"
              src="/svg/navigation-03.svg"
            />
          </a>
        </div>
      </section>
      <section className="pt-[40px] max-w-[1750px] mx-auto  pb-[81px] ~px-[20px]/[52px]">
        <div className="flex md:items-center items-start justify-between md:px-[32px] wow fadeIn">
          <figure className="~w-[100px]/[171.852px]">
            <img src="/svg/logo.svg" alt="Logo" />
          </figure>
          <ul className="flex flex-col md:flex-row md:items-center md:gap-[40px] gap-[8px]">
            {linkInfo.map((e, index) => (
              <li key={"footer__link__" + index}>
                {e.title === "Blog" ? (
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`~text-[10px]/[12px] font-[400] a text-[#76063D] tracking-[0.24px] ${poppins.className}`}
                  >
                    {e.title}
                  </a>
                ) : (
                  <Link
                    href={e.href}
                    className={`~text-[10px]/[12px] font-[400] a text-[#76063D] tracking-[0.24px] ${
                      poppins.className
                    } ${pathname === e.href ? "active" : ""}`}
                  >
                    {e.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="md:hidden flex flex-col gap-[8px] wow fadeIn">
            <a
              href="https://www.linkedin.com/in/sarahidahosa/"
              target="_blank"
              rel="noopener noreferrer"
              className={`~text-[10px]/[12px] font-[400] a text-[#76063D] tracking-[0.24px] ${poppins.className}`}
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/thesarahidahosa/"
              target="_blank"
              rel="noopener noreferrer"
              className={`~text-[10px]/[12px] font-[400] a text-[#76063D] tracking-[0.24px] ${poppins.className}`}
            >
              Instagram
            </a>
            <a
              href="https://x.com/thesarahidahosa"
              target="_blank"
              rel="noopener noreferrer"
              className={`~text-[10px]/[12px] font-[400] a text-[#76063D] tracking-[0.24px] ${poppins.className}`}
            >
              Twitter
            </a>
          </div>
        </div>
        <hr className="mt-[41px] bg-[#76063D80] mb-[12.25px] h-[.4px]" />
        <div
          className={`w-fit hidden md:flex text-[12px] text-[#76063D] items-center gap-[40px] ml-auto ${poppins.className} wow fadeIn`}
        >
          <a
            href="https://www.linkedin.com/in/sarahidahosa/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[400] tracking-[0.24px] a transition-[.4s]"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/thesarahidahosa/"
            target="_blank"
            rel="noopener noreferrer"
            className={`~text-[10px]/[12px] font-[400] a text-[#76063D] tracking-[0.24px] ${poppins.className}`}
          >
            Instagram
          </a>
          <a
            href="https://x.com/thesarahidahosa"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[400] a tracking-[0.24px]"
          >
            Twitter
          </a>
        </div>
        <p
          className={`text-center text-[#76063D] ~text-[10px]/[12px] font-normal leading-normal tracking-[0.16px] ${poppins.className} wow fadeIn`}
        >
          &copy; 2024. Some Rights Reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
