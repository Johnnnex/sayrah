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
  role: string;
}[] = [
  {
    testimonial: `“Sarah has been an invaluable member of the Nirvana Academy, embodying unwavering work ethics, loyalty, & remarkable growth. Having transitioned from student to tutor, she brings a unique perspective that resonates with our students. Her professionalism & commitment to our mission are evident in her outstanding contributions. Sarah excels in mentoring & leadership, positively impacting student progress & personal development. I wholeheartedly recommend her for her exceptional character & capabilities.”`,
    user: "Samuel O. Oladokun",
    imgName: "samuel",
    role: "Founder - Nirvana Labs",
  },
  {
    testimonial: `“It was such a pleasure to work together with Sarah. She was always accommodating, kind, and motivated. We worked together at the Web3 Delight Lagos project, and she is very applied and aims for high-quality work. She is creative, smart, has excellent communication skills, and is willing to help when you need it. Sarah is the kind of person who does anything for the group's benefit. A great colleague!”`,
    user: "Paul Lalovich",
    imgName: "paul",
    role: "CEO, Founder; Synthetic Equity",
  },
  {
    testimonial: `“I have been working with Sarah since April 2022. She is a proficient writer and researcher, with incredible consistency. She also applies a creative and out-of-the-box approach to her work and continues to exceed my expectations. She is also an incredible speaker and community builder in the digital assets field.”`,
    user: "Tatiana Koffman",
    imgName: "tatiana",
    role: "Writer; Myth Of Money",
  },
  {
    testimonial: `“I am highly pleased to commend Sarah for her outstanding contributions as a Community Manager at Cassava. Her dedication to the role and her strategic insights were instrumental in driving the remarkable growth and success of our company. She consistently demonstrated a deep understanding of the Web3 landscape and employed her skills diligently to implement effective strategies that fostered engagement, nurtured our community, and elevated our platform's visibility.”`,
    user: "Mouloukoh Sanoh",
    imgName: "sanoh",
    role: "Co-founder - Cassava Network",
  },
];
const abeeze = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
});
const Testimonial = () => {
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
    <section className="embla" ref={emblaRef}>
      <div className={`embla__container pt-[40px] flex ${poppins.className}`}>
        {testimonialData.map(({ imgName, testimonial, role, user }, index) => (
          <div
            key={"testimonial__" + index}
            style={{ transition: "margin 1s" }}
            className={`embla__slide mr-[40px] min-w-0 relative overflow-hidden flex-shrink-0 flex-grow-0 basis-[620px] ${
              index === activeIndex ? "mt-[-40px]" : ""
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
              style={{ transition: "inset 1s" }}
              className={`${
                abeeze.className
              } text-[20rem] max-h-[10rem] text-[#0000000D] ${
                index === activeIndex ? "bottom-[5.5rem]" : ""
              } z-[500] right-[-20px] font-[400] absolute bottom-[3rem]`}
            >
              “
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center w-fit mx-auto pb-[20px] gap-[.5rem]">
        {Array.from({ length: testimonialData.length }, (_, index) => (
          <button
            disabled={index === activeIndex}
            key={"pagination__" + index}
            className={`embla__pagination-dot w-[12px] transition-[.8s] aspect-square ${
              index === activeIndex
                ? "bg-[#76063D] w-[24px] rounded-[20px] aspect-[2/1]"
                : "bg-[#76063D33] rounded-[50%] aspect-square"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
      <div className="flex w-fit gap-[1.25rem] mx-auto">
        <button
          className="embla__prev aspect-[1/1] hover:bg-transparent hover:text-[#76063D] border-[#76063D] border transition-[.4s] w-[2.875rem] text-white flex items-center justify-center react-svg bg-[#76063D] rounded-[50%]"
          onClick={scrollPrev}
        >
          <SVGClient src="/svg/arr-left.svg" />
        </button>
        <button
          className="embla__next aspect-[1/1] hover:bg-transparent hover:text-[#76063D] border-[#76063D] border transition-[.4s] w-[2.875rem] text-white flex items-center justify-center react-svg bg-[#76063D] rounded-[50%]"
          onClick={scrollNext}
        >
          <SVGClient src="/svg/arr-right.svg" />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
