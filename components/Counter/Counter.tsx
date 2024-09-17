"use client";

import { FC, Fragment, useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter: FC = () => {
  const [isClient, setIsClient] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {[
        {
          numeral: 40000,
          text: (
            <>
              Social Media
              <br />
              Reach
            </>
          ),
        },
        {
          numeral: 3000,
          text: (
            <>
              Community
              <br />
              Members
            </>
          ),
        },
        {
          numeral: 5,
          text: (
            <>
              Physical Events
              <br />
              Hosted
            </>
          ),
        },
        {
          numeral: 20,
          text: (
            <>
              Community Chapters
              <br />
              Nationwide
            </>
          ),
        },
        {
          numeral: 10,
          text: (
            <>
              DeFi
              <br />
              Cohorts
            </>
          ),
        },
      ].map(({ numeral, text }, index) => (
        <Fragment key={"Metric__" + index}>
          <div className="text-white mx-auto md:mx-auto wow fadeIn">
            <p
              ref={ref}
              className="~text-[30px]/[40px] leading-[80%] text-center font-[600] wow fadeIn"
            >
              {isClient &&
                (!!inView ? <CountUp start={0} end={numeral} /> : "")}
              +
            </p>
            <p className="~text-[20px]/[24px] w-[100%] mx-auto text-center wow fadeIn">
              {text}
            </p>
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default Counter;
