/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

const imgUrls: string[] = ["ats", "cmfest", "dexv", "ogun", "bao", "xpedition"];

const BrandSlider = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  return (
    <div
      data-animated={!reducedMotion}
      className="max-w-[109.375rem] w-[90%] marquee-anim overflow-hidden mx-auto wow fadeIn"
    >
      <div className="inner flex items-center gap-[6.25rem] w-max wow fadeIn">
        {imgUrls.map((url, index) => (
          <img
            key={`img__${index}`}
            src={"/svg/" + url + ".svg"}
            alt={`img_${index}`}
            className="wow fadeIn"
          />
        ))}
        {imgUrls.map((url, index) => (
          <img
            key={`img__${index}`}
            src={"/svg/" + url + ".svg"}
            alt={`img_${index}`}
            className="wow fadeIn"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
