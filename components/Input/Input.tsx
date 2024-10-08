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
  name?: string;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  placeholder = "Input your name",
  type,
  label,
  variant,
  error,
  name,
  onChange,
  value,
}: InputTypes) => {
  return !!variant && variant === "outlined" ? (
    <>
      <div
        className={`input-container ${
          !!label ? "~h-[32px]/[55px]" : "h-fit"
        }  text-[#00000050] flex flex-col justify-between ${poppins.className}`}
      >
        {!!label ? (
          <p className="~text-[10px]/[12px] text-[#000] ~leading-[126.05%]/[166.667%] font-[500]">
            {label}
          </p>
        ) : null}
        <input
          className={`border-b outline-none bg-transparent w-full ~text-[10px]/[14px] leading-[142.857%] text-[#8D8D8D] placeholder:text-[#8D8D8D90] ${
            !!error ? "border-red-500" : ""
          }`}
          placeholder={placeholder}
          type={!!type ? type : "text"}
          name={name}
          onChange={onChange}
          value={value}
        />
      </div>
      {!!error ? (
        <p className="text-red-500 text-[10px]/[14px]">{error}</p>
      ) : null}
    </>
  ) : null;
};

export default Input;
