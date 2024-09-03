import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

type InputTypes = {
  placeholder?: string;
  type?: "text" | "number" | "email" | "textarea";
  variant?: "contained" | "outlined";
  label?: string;
};

const Input = ({
  placeholder = "Input your name",
  type,
  label,
  variant,
}: InputTypes) => {
  return !!variant && variant === "outlined" ? (
    <div
      className={`input-container ${
        !!label ? "h-[55px]" : "h-fit"
      }  text-[#00000050] flex flex-col justify-between ${poppins.className}`}
    >
      {!!label ? (
        <p className="text-[0.75rem] text-[#000] leading-[166.667%] font-[500]">
          {label}
        </p>
      ) : null}
      <input
        className={`border-b outline-none bg-transparent w-full text-[0.875rem] font-[500] leading-[142.857%] text-[#8D8D8D] placeholder:text-[#8D8D8D90]`}
        placeholder={placeholder}
        type={!!type ? type : "text"}
      />
    </div>
  ) : (
    <div>hi</div>
  );
};

export default Input;
