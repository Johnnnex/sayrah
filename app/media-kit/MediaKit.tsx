/* eslint-disable @next/next/no-img-element */
import Chip from "@/components/Chip";
import Hero from "@/components/Hero";
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
          className={`max-w-[1750px] w-[90%] mx-auto text-center text-[#000] ${poppins.className} ~text-[10px]/[14px] font-normal md:leading-[228.571%] tracking-[0.28px]`}
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
          <div className="flex gap-[40px] ~mt-[20px]/[80px] flex-wrap">
            <figure className="xl:basis-[28%] basis-[100%] h-fit ">
              <img
                src="/images/media-pic-1.png"
                className="~h-[453.857px]/[540px] md:h-[600px] xl:h-[540px] w-[100%] rounded-[14px] overflow-hidden object-cover"
                loading="lazy"
                alt="profile"
              />
            </figure>
            <p
              className={`basis-[60%] flex-1 text-[#000] text-justify ${poppins.className} ~text-[12px]/[16px] font-normal leading-[200%] tracking-[0.32px]`}
            >
              Sarah Idahosa is a passionate Community Growth Manager, DeFi
              Advocate, and Web3 Educator based in Nigeria. With a background in
              Computer Science and a keen interest in blockchain technology,
              Sarah has established herself as a prominent figure in the Web3
              space. Her expertise lies in fostering community engagement,
              promoting decentralized finance solutions, and educating
              individuals about the potential of blockchain technology. As the
              founder of Women in DeFi, Sarah has created a thriving community
              that empowers women to explore and excel in the world of
              decentralized finance. Her initiative has successfully bridged the
              gender gap in the industry, providing resources, mentorship, and
              networking opportunities for women interested in blockchain and
              DeFi. Sarah&apos;s influence extends beyond her community-building
              efforts all through the blockchain ecosystem. As a respected
              thought leader, efforts. She is a sought-after speaker at tech
              conferences and blockchain events, where she shares her insights
              on community growth strategies, DeFi adoption, and the future of
              Web3. Her talks are known for their clarity, depth, and ability to
              make complex concepts accessible to diverse audiences. In addition
              to her speaking engagements, Sarah is an active content creator,
              regularly publishing articles and thought pieces on medium.com.
              Her writing covers a wide range of topics, from beginner-friendly
              introductions to DeFi to in-depth analyses of emerging trends in
              the Web3 ecosystem. Sarah&apos;s work has been recognized all
              through organizations in the tech and blockchain space. She has
              been featured in prominent publications and has received awards
              for her contributions to blockchain education and community
              development. As a Web3 educator, Sarah is committed to
              demystifying blockchain technology and making it accessible to a
              broader audience. She conducts workshops, webinars, and online
              courses that help individuals and businesses understand the
              practical applications of blockchain and DeFi. Sarah&apos;s vision
              is to create a more inclusive and decentralized financial system
              through education, community building, and advocacy. Her work
              continues to inspire and guide the next generation of blockchain
              enthusiasts and DeFi innovators.
            </p>
          </div>
          <div className="flex gap-[40px] mt-[16px] items-end flex-wrap-reverse">
            <figure className="xl:basis-[28%] basis-[100%] h-fit">
              <img
                src="/images/media-pic-2.png"
                className="~h-[453.857px]/[540px] md:h-[600px] xl:h-[540px] w-[100%] rounded-[14px] overflow-hidden object-cover"
                loading="lazy"
                alt="profile"
              />
            </figure>
            <p
              className={`basis-[60%] flex-1 text-[#000] text-justify ${poppins.className} ~text-[12px]/[16px] font-normal leading-[200%] tracking-[0.32px]`}
            >
              Sarah Idahosa is a passionate Community Growth Manager, DeFi
              Advocate, and Web3 Educator based in Nigeria. With a background in
              Computer Science and a keen interest in blockchain technology,
              Sarah has established herself as a prominent figure in the Web3
              space. Her expertise lies in fostering community engagement,
              promoting decentralized finance solutions, and educating
              individuals about the potential of blockchain technology. As the
              founder of Women in DeFi, Sarah has created a thriving community
              that empowers women to explore and excel in the world of
              decentralized finance. Her initiative has successfully bridged the
              gender gap in the industry, providing resources, mentorship, and
              networking opportunities for women interested in blockchain and
              DeFi. Sarah&apos;s influence extends beyond her community-building
              efforts all through the blockchain ecosystem. As a respected
              thought leader, efforts. She is a sought-after speaker at tech
              conferences and blockchain events, where she shares her insights
              on community growth strategies, DeFi adoption, and the future of
              Web3. Her talks are known for their clarity, depth, and ability to
              make complex concepts accessible to diverse audiences. In addition
              to her speaking engagements, Sarah is an active content creator,
              regularly publishing articles and thought pieces on medium.com.
              Her writing covers a wide range of topics, from beginner-friendly
              introductions to DeFi to in-depth analyses of emerging trends in
              the Web3 ecosystem. Sarah&apos;s work has been recognized all
              through organizations in the tech and blockchain space. She has
              been featured in prominent publications and has received awards
              for her contributions to blockchain education and community
              development. As a Web3 educator, Sarah is committed to
              demystifying blockchain technology and making it accessible to a
              broader audience. She conducts workshops, webinars, and online
              courses that help individuals and businesses understand the
              practical applications of blockchain and DeFi. Sarah&apos;s vision
              is to create a more inclusive and decentralized financial system
              through education, community building, and advocacy. Her work
              continues to inspire and guide the next generation of blockchain
              enthusiasts and DeFi innovators.
            </p>
          </div>
        </div>
      </section>
      <section className="py-[80px] bg-[linear-gradient(0deg,_#FDF7F2_0%,_#FDF7F2_100%)]">
        <div className="max-w-[1750px] w-[90%] mx-auto">
          <Chip name="HI-RES IMAGES" />
          <div className="mt-[40px] flex flex-wrap gap-[20px]">
            {[
              "/images/sarah-1.png",
              "/images/sarah-2.png",
              "/images/sarah-3.png",
              "/images/sarah-4.png",
              "/images/sarah-5.png",
              "/images/sarah-6.png",
              "/images/sarah-7.png",
              "/images/sarah-8.png",
            ].map((src, index) => (
              <figure
                key={`hi-res-image-${index}`}
                className="xl:basis-[20%] md:basis-[40%] basis-[100%] grow"
              >
                <img
                  src={src}
                  className="w-[100%] h-[420px] rounded-[14px] overflow-hidden object-cover"
                  alt={`Sarah Idahosa hi-res image ${index + 1}`}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MediaKit;
