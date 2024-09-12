/* eslint-disable @next/next/no-img-element */
import { Poppins } from "next/font/google";
import SVGClient from "../SVGClient";
import Link from "next/link";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const CommonContainer = ({
  link,
  subtitle,
  title,
  imgUrl,
  iconName,
  basis,
}: {
  link: string;
  subtitle: string;
  title: string;
  imgUrl: string;
  basis?: string;
  iconName?: string;
}) => {
  return (
    <div
      className={`${
        basis ? basis : "basis-[20%]"
      } img-hover hover:[&>figure>span]:text-[#ADB77E] max-w-[25%] hover:[&>figure>span]:bg-[#000000AA] grow border-[.5px] border-[#76063D80] overflow-hidden rounded-[12px] bg-[#FFF]`}
    >
      <figure className={`h-[10.5625rem] relative duration-[.7s] w-full`}>
        <img
          className="h-full w-full transition-transform object-cover duration-[.7s]"
          loading="lazy"
          src={"/images/" + imgUrl + ".png"}
          alt=""
        />
        <span className="bg-[#0000007F] text-[#ADB77E40] transition-colors duration-[.7s] top-0 left-0 absolute h-full w-full">
          <span className="flex transition-colors text-current duration-[.7s] items-center justify-center h-full w-full">
            {!!iconName ? (
              <SVGClient
                className="opacity-25 svg-parent transition-opacity duration-300"
                src={"/svg/" + iconName + ".svg"}
              />
            ) : null}
          </span>
        </span>
      </figure>
      <div
        className={`py-[.625rem] text-[.75rem] bg-white relative z-10 ${poppins.className} font-[400] pl-[.75rem] pr-[1.1875rem]`}
      >
        <a
          href={link}
          target="_blank"
          className={`text-black transition-[.4s] hover:text-[#76063D] focus:text-[#76063D]`}
        >
          {title}
        </a>
        <hr className="my-[5.5px]" />
        <p className="text-[#000000B2]">{subtitle}</p>
      </div>
    </div>
  );
};

export default CommonContainer;
