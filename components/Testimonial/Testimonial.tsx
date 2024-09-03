/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Poppins, ABeeZee } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const testimonialData: {
  testimonial: string;
  user: string;
  imgName: string;
  role: string;
}[] = [
  {
    testimonial: `“It was such a pleasure to work together with Sarah. She was always accommodating, kind, and motivated. We worked together at the Web3 Delight Lagos project, and she is very applied and aims for high-quality work. She is creative, smart, has excellent communication skills, and is willing to help when you need it. Sarah is the kind of person who does anything for the group's benefit. A great colleague!”`,
    user: "Paul Lalovich",
    imgName: "paul",
    role: "CEO, Founder; Synthetic Equity",
  },
  {
    testimonial: `“It was such a pleasure to work together with Sarah. She was always accommodating, kind, and motivated. We worked together at the Web3 Delight Lagos project, and she is very applied and aims for high-quality work. She is creative, smart, has excellent communication skills, and is willing to help when you need it. Sarah is the kind of person who does anything for the group's benefit. A great colleague!”`,
    user: "Paul Lalovich",
    imgName: "paul",
    role: "CEO, Founder; Synthetic Equity",
  },
  {
    testimonial: `“It was such a pleasure to work together with Sarah. She was always accommodating, kind, and motivated. We worked together at the Web3 Delight Lagos project, and she is very applied and aims for high-quality work. She is creative, smart, has excellent communication skills, and is willing to help when you need it. Sarah is the kind of person who does anything for the group's benefit. A great colleague!”`,
    user: "Paul Lalovich",
    imgName: "paul",
    role: "CEO, Founder; Synthetic Equity",
  },
  {
    testimonial: `“It was such a pleasure to work together with Sarah. She was always accommodating, kind, and motivated. We worked together at the Web3 Delight Lagos project, and she is very applied and aims for high-quality work. She is creative, smart, has excellent communication skills, and is willing to help when you need it. Sarah is the kind of person who does anything for the group's benefit. A great colleague!”`,
    user: "Paul Lalovich",
    imgName: "paul",
    role: "CEO, Founder; Synthetic Equity",
  },
];
const abeeze = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
});
const Testimonial = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: false, align: "center" },
    [Autoplay()]
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const logSlidesInView = useCallback((emblaApi) => {
    console.log(emblaApi.slidesInView());
  }, []);
  useEffect(() => {
    if (emblaApi) emblaApi.on("slidesInView", logSlidesInView);
  }, [emblaApi, logSlidesInView]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const slideIndex = emblaApi.slidesInView()[1];
    setActiveIndex(slideIndex);
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
    <section className="embla" ref={emblaRef}>
      <div className={`embla__container flex ${poppins.className}`}>
        {testimonialData.map(({ imgName, testimonial, role, user }, index) => (
          <div
            key={"testimonial__" + index}
            className={`embla__slide mr-[40px] overflow-hidden min-w-0 relative flex-shrink-0 flex-grow-0 basis-[620px] ${
              index === activeIndex ? "mt-[-20px]" : ""
            }`}
          >
            <p className="p-[1.375rem] bg-[#FDFCFC] border-[.25px] border-[#0000000D] italic font-[400] rounded-t-[8px] text-[0.875rem] text-center tracking-[0.28px] text-black">
              {testimonial}
            </p>
            <div className="bg-white relative z-[600] h-[4px] w-full"></div>
            <div className="py-[.75rem] bg-[#FDFCFC] border-[.25px] border-[#0000000D] flex items-center gap-[8px] justify-center rounded-b-[8px] w-full">
              <img
                src={`/svg/${imgName}.svg`}
                className="rounded-[50%]"
                alt="Testimonial Image"
              />
              <div className="">
                <h6 className="mb-[-4px] text-[1.25rem] font-[500] tracking-[.8px] text-[#000000D9]">
                  {user}
                </h6>
                <p className="text-[#00000080] font-[500] text-[.75rem] tracking-[.48px]">
                  {role}
                </p>
              </div>
            </div>
            <p
              className={`${abeeze.className} text-[20rem] max-h-[10rem] text-[#0000000D] z-[500] right-[-20px] font-[400] absolute bottom-[3rem]`}
            >
              “
            </p>
          </div>
        ))}
      </div>
      <div className="flex w-fit gap-[1.25rem] mx-auto">
        <button className="embla__prev" onClick={scrollPrev}>
          Prev
        </button>
        <button className="embla__next" onClick={scrollNext}>
          Next
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
