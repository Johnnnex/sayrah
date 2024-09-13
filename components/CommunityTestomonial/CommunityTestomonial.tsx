/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Poppins, ABeeZee } from "next/font/google";
import SVGClient from "../SVGClient";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const testimonialData: {
  testimonial: string;
  user: string;
  imgName: string;
}[] = [
  {
    testimonial: `“WID changed my view about blockchain and crypto. A community blessed with great tutors that are patient in explaining and carrying their students along. My Defi journey has been a great one. It all started with #WID”`,
    user: "Nemi James",
    imgName: "nemi",
  },
  {
    testimonial: `“WID was the start of my defi journey and the start of my millionaire journey. I discovered so many opportunities that i can leverage to make myself financially stable in the defi space. The biggest motivation is the fact that i'm taught by women who have broken records, which gives me the inspiration to do more. Then being part of a community that looks out for you can't be overemphasized as it speeds up my growth.”`,
    user: "Uwadimma Christabel",
    imgName: "uwadimma",
  },
  {
    testimonial: `“The WID team has not only taught me about Defi but also help me stand my feet in the decentralized finance space through the process of close watch and constant follow-up even after the class. After the class, i have been able to get jobs that have given me funds to get gadgets to improve my tech journey, funds to process admission, and also my upkeep. A big thanks to the team for also reaching out and helping.”`,
    user: "Lady Benny",
    imgName: "benny",
  },
  {
    testimonial: `“Joining women in Defi was actually one of my best gift the Lord gave me the year 2022. It changed my life and made me meet a lot of important people that i could call sisters. They really make the community look like family. I am grateful for having the best tutors also.”`,
    user: "Swizzabane Mide",
    imgName: "mide",
  },
  {
    testimonial: `“I was onboarded into the web3 space by the WID community in April this year; that was the best thing that happened to me. Before now, I had no knowledge of what web3 is or what the decentralized space is all about.The only knowledge I had on crypto then was buying low and selling high 😅. A big thank you to the founder of WomenInDefi and the core team members, WID was a game changer for me. Today, I'm an ardent believer in Decentralized Finance”`,
    user: "Vivian Adeniyi",
    imgName: "mide",
  },
];
const abeeze = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
});

const CommunityTestomonial = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: false, align: "center" },
    [Autoplay({ stopOnInteraction: false })]
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const selectedIndex = emblaApi.selectedScrollSnap();
    setActiveIndex(selectedIndex);
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);
      onSelect();
    }
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <section className="embla md:hidden" ref={emblaRef}>
      <div
        className={`embla__container mt-[10px] flex items-center ${poppins.className}`}
      >
        {testimonialData.map(({ imgName, testimonial, user }, index) => (
          <div
            key={"testimonial__" + index}
            style={{ transition: "margin 1s" }}
            className={`embla__slide mr-[40px] min-w-0 relative overflow-hidden flex-shrink-0 flex-grow-0 ~basis-[353px]/[620px]`}
          >
            <p className="min-h-[215px] py-[16px] bg-[#FDFCFC] px-[16px] border-[.25px] flex items-center justify-center border-[#0000000D] italic font-[400] rounded-t-[8px] text-[14px] text-center tracking-[0.28px] text-black">
              {testimonial}
            </p>
            <div className="bg-white relative z-[600] h-[4px] w-full"></div>
            <div className="py-[12px] bg-[#FDFCFC] border-[.25px] border-[#0000000D] flex items-center gap-[4px] justify-center rounded-b-[8px] w-full">
              <img
                src={`/images/${imgName}.png`}
                className="rounded-[50%] w-[28px] aspect-square"
                alt="Testimonial Image"
              />
              <div className="">
                <h6 className="text-[16px] font-[500] tracking-[.64px] text-[#000000D9]">
                  {user}
                </h6>
              </div>
            </div>
            <p
              style={{ transition: "inset 1s" }}
              className={`${abeeze.className} text-[320px] max-h-[160px] text-[#0000000D] z-[500] right-[-20px] font-[400] absolute bottom-[48px]`}
            >
              “
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center w-fit mx-auto mt-[20px] ~pb-[10px]/[20px] gap-[.5rem]">
        {Array.from({ length: testimonialData.length }, (_, index) => (
          <button
            disabled={index === activeIndex}
            key={"pagination__" + index}
            className={`transition-[.8s] aspect-square ${
              index === activeIndex
                ? "bg-[#76063D] ~w-[16px]/[24px] rounded-[20px] ~h-[8px]/[12px]"
                : "bg-[#76063D33] rounded-[50%] ~w-[8px]/[12px] ~h-[8px]/[12px]"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default CommunityTestomonial;
