/* eslint-disable @next/next/no-img-element */

import SVGClient from "@/components/SVGClient";
import { Montserrat } from "next/font/google";

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
    title: "About Me",
    href: "/",
  },
  {
    title: "WiD Community",
    href: "/",
  },
  {
    title: "Media & Features",
    href: "/",
  },
  {
    title: "Blog",
    href: "/",
  },
  {
    title: "Media Kit",
    href: "/",
  },
];
const Header = () => {
  return (
    <header
      className={`py-[1rem] sticky bg-white z-[200] top-0 xl:px-[5rem] ${montserrat.className}`}
    >
      <section className="flex items-center justify-between">
        <figure>
          <img src="/svg/logo.svg" alt="Logo" />
        </figure>
        <ul className="flex items-center gap-[1.25rem]">
          {linkInfo.map((item, index) => (
            <li
              className="min-w-max m-0 text-[#76063D]"
              key={"nav_item_" + index}
            >
              <a
                className="min-w-max min-h-max conic-nav-bg rounded-[1.5rem] flex justify-center items-center m-0"
                href={item.href}
              >
                <div className="text-nowrap py-[.5rem] m-[1px] rounded-[1.5rem] bg-white px-[1rem] text-[0.9375rem] ">
                  {item.title}
                </div>
              </a>
            </li>
          ))}
        </ul>
        <button className="bg-[#76063D] btn hover:bg-white hover:text-[#76063D] transition-[.4s] border border-[#76063D] text-[1rem] items-center rounded-[1.5rem] gap-[.5rem] react-svg text-white font-[400] flex px-[1.5rem] py-[.7rem]">
          Contact Me
          <SVGClient src="/svg/navigation-03.svg" />
        </button>
      </section>
      <hr className="mt-[.75rem] bg-[#76063D40] h-[.4px]" />
    </header>
  );
};

export default Header;
