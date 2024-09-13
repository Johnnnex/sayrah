import Chip from "../Chip";

const Hero = ({ bgImg, chipTitle }: { bgImg: string; chipTitle: string }) => {
  return (
    <section
      style={{ backgroundImage: `url(${bgImg})` }}
      className={`md:min-h-[28.3125rem] min-h-[18.3125rem] overflow-hidden w-full bg-cover bg-center hero-slider bg-blend-overlay bg-[#0000004D]`}
    >
      <div className="max-w-[109.375rem] w-[90%] pt-[2.5rem] mx-auto">
        <Chip variant="two" name={chipTitle} />
      </div>
    </section>
  );
};

export default Hero;
