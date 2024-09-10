import CommonContainer from "@/components/CommonContainer";
import Hero from "@/components/Hero";
import SVGClient from "@/components/SVGClient";
import { Poppins, Syne } from "next/font/google";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const featured: {
  title: string;
  url: string;
  subtitle: string;
  link: string;
}[] = [
  {
    title: "Empowering Women In Blockchain: The Journey of Women In DeFi.",
    url: "features-sarah",
    subtitle: "Inside the Hive with Feezy Podcast; Sept 2023",
    link: "https://open.spotify.com/episode/1RjnKtPK0nK8Mbioz3guN0",
  },
  {
    title: "UNILAG; The Expedition.",
    url: "features-sarah",
    subtitle: "Nairametrics; April 26, 2023",
    link: "https://nairametrics.com/2023/04/26/unilag-others-brace-up-for-the-expedition-conference-tec-8-0/",
  },
  {
    title:
      "TechNext Women In Tech Series: Sarah Idahosa, Founder; Women in DeFI.",
    url: "features-sarah",
    subtitle: "TechNext24; March 13, 2023",
    link: "https://technext24.com/2023/03/13/sarah-idahosa-founder-of-women-in-defi/",
  },
  {
    title: "Global Fintech Interview.",
    url: "features-sarah",
    subtitle: "iTech Series; December 30, 2022",
    link: "https://globalfintechseries.com/blockchain/global-fintech-interview-with-sarah-idahosa-founder-at-womenindefi/",
  },
  {
    title: "Africa Tech Summit",
    url: "features-sarah",
    subtitle: "Cointelegraph; Sept 27, 2022",
    link: "https://x.com/Cointelegraph/status/1574792079783362567?t=7skMDX56j7YwSv3qnL_A9g&s=19",
  },
  {
    title: "Mara: Blockchain Masterclass: The impact of communities in Web3.",
    url: "features-sarah",
    subtitle: "Mara; Sept 14, 2022",
    link: "https://www.youtube.com/watch?v=KbhvlMt_xYI",
  },
  {
    title: "Women Series: DeFi; Use Cases & Benefits to the Economy.",
    url: "features-sarah",
    subtitle: "Web3TV Nigeria; August 3, 2022",
    link: "https://www.youtube.com/watch?v=Kxd54Yskn9I",
  },
  {
    title: "Web3 Delight Podcast",
    url: "features-sarah",
    subtitle: "Web3 Delight; Jul 2022",
    link: "https://open.spotify.com/episode/1zwkAfhTXSyPAJkFrFh43y",
  },
  {
    title: "Cryptocurrency Market: Navigating Defi Protocols As Hacks Rise",
    url: "features-sarah",
    subtitle: "Channels Television; May 17, 2022",
    link: "https://www.youtube.com/watch?v=ytrEaITxixQ&feature=youtu.be",
  },
  {
    title: "Crypto Ladies League “Blockchain Week”.",
    url: "features-sarah",
    subtitle: "CryptoTVPlus; March 8, 2022",
    link: "https://cryptotvplus.com/2022/03/commemorating-the-international-womens-day-crypto-ladies-league-is-set-to-host-her-first-public-event-blockchain-week-in/",
  },
  {
    title: "Women Series: DeFi; Use Cases & Benefits to the Economy.",
    url: "features-sarah",
    subtitle: "Web3TV Nigeria; August 3, 2022",
    link: "https://www.youtube.com/watch?v=Kxd54Yskn9I",
  },
];
const About = () => {
  return (
    <>
      <Hero chipTitle="About Me" bgImg="/images/about.png" />
      <section className="bg-[url(/images/bg-white.jpg)] bg-cover bg-center">
        <div className="max-w-[109.375rem] w-[80%] flex gap-x-[4.5rem] mx-auto py-[5rem]">
          <h2
            className={`text-[#000] flex-1 min-w-fit ${syne.className} text-[4rem] font-[500] ordinal`}
          >
            Let&apos;s talk <br />
            <span className="text-[#76063D] relative">
              ABOUT ME
              <SVGClient
                style={{ position: "absolute", top: "-20%", left: 0 }}
                src="/svg/circle.svg"
              />
            </span>
          </h2>
          <p
            className={`basis-[53.75rem] text-[1rem] tracking-[0.32px] leading-[200%] font-[400] flex-1 ${poppins.className}`}
          >
            Sarah Idahosa is a versatile professional distinguished for her
            proficiency in Web3 community development, educational initiatives,
            decentralized finance research, and token economics. She serves as
            the esteemed founder of Women In DeFi, a pioneering community
            dedicated to empowering women with comprehensive knowledge of
            blockchain technology and adeptly navigating the Web3 ecosystem
            utilizing their existing Web2 competencies. <br />
            In addition to her pivotal role at Women In DeFi, Sarah also assumes
            the position of community manager at Cassava Network. This
            innovative platform serves as a pivotal bridge between Web 2 and Web
            3, particularly focusing on NFTs, gaming, and entertainment sectors.
            Through her stewardship, Sarah facilitates seamless connections
            between individuals and the manifold advantages inherent in the Web3
            landscape. <br />
            Drawing upon a robust background in blockchain education, Sarah is
            deeply committed to facilitating individuals&apos; transition from
            Web2 to Web3 paradigms. <br />
            Her experience extends to dynamic public speaking engagements, where
            she has been invited to share her insights at prestigious forums
            including Nigerian FinTech Week, GDG DEVFEST Lagos, Africa Tech
            Summit in Kenya, and Africa Money and DeFi Summit in Ghana. <br />
            Sarah&apos;s illustrious career has been marked by fruitful
            collaborations with renowned tech entities such as Mara, Myth of
            Money, and Africa Tech Summit, highlighting her influential presence
            and profound impact within the global technology community
          </p>
        </div>
      </section>
      <section className="bg-[url(/images/bg-white.jpg)] bg-cover bg-center">
        <div className="flex flex-wrap gap-[1.625rem] max-w-[109.375rem] w-[90%] mx-auto pt-[4.375rem] pb-[6.375rem]">
          <h2
            className={`${syne.className} h-fit relative text-[4rem] font-[500] ordinal text-[#76063D]`}
          >
            Featured
            <SVGClient
              style={{ position: "absolute", bottom: 0, left: 0 }}
              src="/svg/stroke.svg"
            />
          </h2>
          {featured.map(({ link, subtitle, title, url }, index) => (
            <CommonContainer
              key={"featured__" + index}
              imgUrl={url}
              link={link}
              subtitle={subtitle}
              title={title}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
