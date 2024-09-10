import { Syne } from "next/font/google";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const Chip = ({
  name,
  variant = "one",
}: {
  name: string;
  variant?: "one" | "two";
}) => {
  return (
    <div className="flex rounded-[.5rem] w-fit overflow-hidden">
      <div
        className={`w-[8px] ${
          variant === "one" ? "bg-[#76063D]" : "bg-[#fff]"
        }`}
      ></div>
      <p
        className={`${
          variant === "one"
            ? "bg-[#76063D1A] text-[#76063D]"
            : "bg-[#ADB77E80] text-[#fff]"
        } tracking-[0.4px] uppercase py-[8px] font-[600] text-[1.25rem] pl-[12px] pr-[8px] ${
          syne.className
        }`}
      >
        {name}
      </p>
    </div>
  );
};

export default Chip;
