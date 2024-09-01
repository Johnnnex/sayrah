import { Syne } from "next/font/google";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const Chip = ({ name }: { name: string }) => {
  return (
    <div className="flex rounded-[.5rem] w-fit overflow-hidden">
      <div className="w-[8px] bg-[#76063D]"></div>
      <p
        className={`bg-[#76063D1A] tracking-[0.4px] uppercase py-[8px] font-[600] text-[1.25rem] text-[#76063D] pl-[12px] pr-[8px] ${syne.className}`}
      >
        {name}
      </p>
    </div>
  );
};

export default Chip;
