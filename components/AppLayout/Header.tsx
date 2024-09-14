/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import SVGClient from "@/components/SVGClient";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

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
    href: "/about",
  },
  {
    title: "WiD Community",
    href: "/community",
  },
  {
    title: "Media & Features",
    href: "/media",
  },
  {
    title: "Blog",
    href: "https://medium.com/@sarahidahosa",
  },
  {
    title: "Media Kit",
    href: "/media-kit",
  },
];

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    new WOW().init();
    const handleScroll = () => {
      if (window.scrollY > 0) {
        if (!scrolled) {
          setScrolled(true);
        }
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  return (
    <header
      style={{ transition: "all .3s" }}
      className={`${
        !scrolled ? "py-[1rem]" : ""
      } sticky w-full bg-white z-[500] px-[1rem] top-0 xl:px-[5rem] ${
        montserrat.className
      }`}
    >
      <hr className="mb-[.75rem] bg-[#76063D40] h-[.4px]" />
      <section className="flex items-center justify-between">
        <figure className="~w-[100px]/[171.852px]">
          <img src="/svg/logo.svg" alt="Logo" />
        </figure>
        <button
          className="xl:hidden relative z-[5000]"
          onClick={() => setIsActive(!isActive)}
        >
          <SVGClient
            className="w-[32px] text-[#00000070] h-[24px]"
            src="/svg/menu.svg"
          />
        </button>
        <div
          className={`xl:relative absolute top-0 left-0 w-full h-[100vh] xl:h-fit flex flex-col xl:flex-row ~rounded-b-[16px]/[64px] items-center gap-[20px] xl:w-fit xl:bg-none bg-white p-[16px] xl:p-0 ${
            isActive ? "translate-y-0" : "translate-y-[-100%] xl:translate-y-0"
          } transition-transform duration-300`}
        >
          <ul className="flex xl:flex-row flex-col xl:items-center gap-[1.25rem]">
            {linkInfo.map((item, index) => (
              <li
                className="min-w-max m-0 text-[#76063D]"
                key={"nav__item__" + index}
              >
                {item.title === "Blog" ? (
                  <a
                    target="_blank"
                    className={`min-w-max min-h-max ${
                      pathname === item.href ? "conic-nav-bg" : "reg-nav-bg"
                    } rounded-[1.5rem] flex justify-center items-center m-0`}
                    href={item.href}
                  >
                    <div className="text-nowrap py-[.5rem] m-[1px] rounded-[1.5rem] bg-white px-[1rem] text-[0.9375rem] ">
                      {item.title}
                    </div>
                  </a>
                ) : (
                  <Link
                    className={`min-w-max min-h-max ${
                      pathname === item.href ? "conic-nav-bg" : "reg-nav-bg"
                    } rounded-[1.5rem] flex justify-center items-center m-0`}
                    href={item.href}
                  >
                    <div className="text-nowrap py-[.5rem] m-[1px] rounded-[1.5rem] bg-white px-[1rem] text-[0.9375rem] ">
                      {item.title}
                    </div>
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link className="xl:hidden block" href="/contact">
            <button
              style={{ border: "1px solid #76063D" }}
              className="bg-[#76063D] btn hover:bg-white focus:bg-white hover:text-[#76063D] focus:text-[#76063D] transition-[.4s] border border-[#76063D] text-[1rem] items-center rounded-[1.5rem] gap-[.5rem] react-svg text-white font-[400] flex px-[1.5rem] py-[.7rem]"
            >
              Contact Me
              <SVGClient
                className="~w-[16px]/[24px] ~h-[16px]/[24px]"
                src="/svg/navigation-03.svg"
              />
            </button>
          </Link>
        </div>
        <Link className="xl:block hidden" href="/contact">
          <button
            style={{ border: "1px solid #76063D" }}
            className="bg-[#76063D] btn hover:bg-white focus:bg-white hover:text-[#76063D] focus:text-[#76063D] transition-[.4s] border border-[#76063D] text-[1rem] items-center rounded-[1.5rem] gap-[.5rem] react-svg text-white font-[400] flex px-[1.5rem] py-[.7rem]"
          >
            Contact Me
            <SVGClient
              className="~w-[16px]/[24px] ~h-[16px]/[24px]"
              src="/svg/navigation-03.svg"
            />
          </button>
        </Link>
      </section>
      <hr className="mt-[.75rem] bg-[#76063D40] h-[.4px]" />
    </header>
  );
};

export default Header;
