/* eslint-disable @next/next/no-img-element */
import Chip from "@/components/Chip";
import Hero from "@/components/Hero";
import SVGClient from "@/components/SVGClient";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const MediaKit = () => {
  return (
    <>
      <Hero bgImg="/images/bg-media.png" chipTitle="MEDIA KIT" />
      <section className="bg-[#FDF7F2] ~py-[20px]/[40px]">
        <p
          className={`max-w-[1750px] w-[90%] mx-auto text-center text-[#000] ${poppins.className} ~text-[10px]/[14px] font-normal md:leading-[228.571%] tracking-[0.28px] wow fadeIn`}
        >
          Welcome to my Media Kit page! This resource provides media
          professionals, collaborators, and partners with essential information
          about my work as a Community Growth Manager, DeFi Advocate, and Web3
          Educator. Here, you will find insights into my professional journey,
          high-quality assets, and the latest updates on my projects and
          industry contributions. Whether you&apos;re featuring me in an
          article, inviting me for an interview, or learning about my expertise,
          this media kit has everything you need. Thank you for your interest,
          and I look forward to connecting with you.
        </p>
      </section>
      <section className="bg-[url(/images/bg-white.jpg)] bg-cover bg-center py-[40px]">
        <div className="max-w-[1750px] w-[90%] mx-auto">
          <Chip name="BIOGRAPHY" />
          <div className="flex gap-[40px] ~mt-[20px]/[80px] flex-wrap wow fadeIn">
            <figure className="xl:basis-[28%] gap-7 flex-col flex basis-[100%] h-fit ">
              <img
                src="/images/media-pic-1.png"
                className="~h-[453.857px]/[540px] md:h-[600px] xl:h-[540px] w-[100%] rounded-[14px] overflow-hidden object-cover"
                loading="lazy"
                alt="profile"
              />
              <img
                src="/images/media-pic-2.png"
                className="~h-[453.857px]/[540px] hidden xl:block md:h-[600px] xl:h-[540px] w-[100%] rounded-[14px] overflow-hidden object-cover"
                loading="lazy"
                alt="profile"
              />
            </figure>
            <div className="basis-[60%] flex flex-col gap-[50px] flex-1">
              <p
                className={` text-[#000] text-justify ${poppins.className} text-justify ~text-[12px]/[16px] font-normal leading-[200%] tracking-[0.32px] wow fadeIn`}
              >
                Sarah Idahosa is a versatile professional distinguished for her
                proficiency in Web3 community development, educational
                initiatives, and decentralized finance research.
                <br />
                <br />
                She serves as the esteemed founder of Women In DeFi, a
                pioneering community dedicated to empowering women with
                comprehensive knowledge of blockchain technology and adeptly
                navigating the blockchain technology and adeptly navigating the
                Web3 ecosystem utilizing their existing Web2 competencies.{" "}
                <br />
                <br />
                In addition to her pivotal role at Women In DeFi, Sarah also
                assumes the position of partnership and community growth at
                Mansa, a DeFi RWA protocol. <br />
                <br />
                She has previously worked with other Web3 projects such as
                Cassava Network, Myth of Money, Africa Tech Summit, and Mara,
                showing her expertise in Web3 Through her stewardship, Sarah
                facilitates seamless connections between individuals and the
                manifold advantages inherent in the Web3 landscape. Drawing upon
                a robust background in blockchain education, Sarah is deeply
                committed to facilitating individuals&apos; transition from Web2
                to Web3 paradigms. <br />
                <br />
                As a respected thought leader, she is a sought-after speaker at
                tech conferences and blockchain events, where she shares her
                insights on community growth strategies, DeFi insights on
                community growth strategies, DeFi adoption, and the future of
                Web3. Her talks are known for their clarity, depth, and ability
                to make complex concepts accessible to diverse audiences. <br />
                <br />
                In addition to her speaking engagements, Sarah is an active
                content creator, regularly publishing articles and thought
                pieces on her socials. Her writing and videos cover a wide range
                of topics, from beginner-friendly introductions to DeFi to
                in-depth analyses of emerging trends in the Web3 ecosystem.{" "}
                <br />
                <br />
                As a Web3 educator, Sarah is committed to demystifying
                blockchain technology and making it accessible to a broader
                audience. She conducts workshops, webinars, and online courses
                that help individuals and businesses understand the practical
                applications of blockchain and DeFi. Sarah&apos;s vision is to
                create a more inclusive and decentralized financial system
                through education, community building, and advocacy. Her work
                continues to inspire and guide the next generation of blockchain
                enthusiasts and DeFi innovators.
              </p>
              <div className="flex gap-[40px] mt-[16px] items-end flex-wrap wow fadeIn">
                <figure className="xl:basis-[28%] xl:hidden block basis-[100%] h-fit">
                  <img
                    src="/images/media-pic-2.png"
                    className="~h-[453.857px]/[540px] md:h-[600px] xl:h-[540px] w-[100%] rounded-[14px] overflow-hidden object-cover"
                    loading="lazy"
                    alt="profile"
                  />
                </figure>
                <p
                  className={`basis-[60%] flex-1 text-[#000] text-justify ${poppins.className} ~text-[12px]/[16px] font-normal leading-[200%] tracking-[0.32px] wow fadeIn`}
                >
                  Sarah Idahosa is a versatile professional distinguished for
                  her proficiency in Web3 community development, educational
                  initiatives, and decentralized finance research. <br />
                  <br />
                  She serves as the esteemed founder of Women In DeFi, a
                  pioneering community dedicated to empowering women with
                  comprehensive knowledge of blockchain technology and adeptly
                  navigating the Web3 ecosystem utilizing their existing Web2
                  competencies. <br />
                  <br />
                  In addition to her pivotal role at Women In DeFi, Sarah also
                  assumes the position of partnership and community growth at
                  Mansa, a DeFi RWA protocol. <br />
                  <br />
                  Through her stewardship, Sarah facilitates seamless
                  connections between individuals and the manifold advantages
                  inherent in the Web3 landscape. Drawing upon a robust
                  background in blockchain education, Sarah is deeply committed
                  to facilitating individuals&apos; transition from Web2 to Web3
                  paradigms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[80px] bg-[linear-gradient(0deg,_#FDF7F2_0%,_#FDF7F2_100%)]">
        <div className="max-w-[1750px] w-[90%] mx-auto">
          <Chip name="HI-RES IMAGES" />
          <div className="mt-[40px] flex flex-wrap gap-[20px] wow fadeIn">
            {[
              "/images/sayrah-1.png",
              "/images/sayrah-2.png",
              "/images/sayrah-3.png",
              "/images/sayrah-4.png",
              "/images/sayrah-5.png",
              "/images/sayrah-6.png",
              "/images/sayrah-7.png",
              "/images/sayrah-8.png",
            ].map((src, index) => (
              <figure
                key={`hi-res-image-${index}`}
                className="xl:basis-[20%] relative md:basis-[40%] basis-[100%] grow wow fadeIn group"
              >
                <img
                  src={src}
                  className="w-[100%] h-[420px] rounded-[14px] overflow-hidden object-cover"
                  alt={`Sarah Idahosa hi-res image ${index + 1}`}
                />
                <a
                  href={src}
                  className="absolute bottom-[10px] right-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  title="Download"
                  download
                >
                  <SVGClient
                    style={{ width: "30px", height: "30px", color: "#fff" }}
                    src="/svg/download.svg"
                  />
                </a>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MediaKit;
