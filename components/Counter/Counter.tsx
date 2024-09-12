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
          <div className="text-white basis-[15.375rem]">
            <p
              ref={ref}
              className="text-[2.5rem] leading-[80%] text-center font-[600]"
            >
              {isClient &&
                (!!inView ? <CountUp start={0} end={numeral} /> : "")}
              +
            </p>
            <p className="text-[1.5rem] w-[100%] mx-auto text-center">{text}</p>
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default Counter;
