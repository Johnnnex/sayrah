/* eslint-disable @next/next/no-img-element */
import { Poppins } from "next/font/google";
import SVGClient from "../SVGClient";

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
}: {
  link: string;
  subtitle: string;
  title: string;
  imgUrl: string;
  iconName?: string;
}) => {
  return (
    <div className="basis-[18.75rem] hover:[&>figure]:scale-[130%] flex-1 border-[.5px] border-[#76063D80] overflow-hidden rounded-[12px] bg-[#FFF] ">
      <figure
        className={`h-[10.5625rem] border border-red-500 relative transition-transform overlay-comp duration-[.7s] bg-cover bg-center bg-blend-overlay w-full`}
      >
        <img
          className="h-full w-full"
          loading="lazy"
          src={"/images/" + imgUrl + ".png"}
          alt=""
        />
        <span className="bg-[#0000007F] top-0 left-0 absolute h-full w-full">
          <span className="flex items-center justify-center h-full w-full">
            {!!iconName ? (
              <SVGClient src={"/svg/" + iconName + ".svg"} />
            ) : null}
          </span>
        </span>
      </figure>
      <div
        className={`py-[.625rem] text-[.75rem] bg-white relative z-10 ${poppins.className} font-[400] pl-[.75rem] pr-[1.1875rem]`}
      >
        <a
          href={link}
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
