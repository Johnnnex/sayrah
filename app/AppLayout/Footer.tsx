import { Syne, Poppins } from "next/font/google";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className="">
      <section className={`py-[2.5rem] text-white bg-[#76063D] `}>
        <h3
          className={` text-[1.5rem] font-[500] ${syne.className} text-center leading-[133.333%]`}
        >
          Join my Crypto Newsletter.
        </h3>
        <p
          className={`text-center leading-[266.667%] mb-[1.25rem] ${poppins.className}`}
        >
          Not just another boring newsletter, I promise... I’d be seeing you
          around.
        </p>
        <div className="w-fit mx-auto">
          <input
            className="py-[.625rem] px-[1.25rem] bg-transparent outline-none border border-[#FFF] rounded-[1.5rem] rounded-[28.125rem]"
            type="text"
          />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
