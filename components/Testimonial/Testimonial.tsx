"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Testimonial = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi);
    }
  }, [emblaApi]);
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container flex">
        <div className="embla__slide min-w-0 flex-shrink-0 flex-grow-0 basis-[500px]">
          Slide 1
        </div>
        <div className="embla__slide min-w-0 flex-shrink-0 flex-grow-0 basis-[500px]">
          Slide 2
        </div>
        <div className="embla__slide min-w-0 flex-shrink-0 flex-grow-0 basis-[500px]">
          Slide 3
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
