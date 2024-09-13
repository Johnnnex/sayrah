import { Montserrat, Poppins, Syne } from "next/font/google";
import Input from "../Input";
import SVGClient from "../SVGClient";
import Link from "next/link";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const contactInfo: {
  icon: string;
  text: string;
}[] = [
  { icon: "call-02", text: "(234) 0708-950-6462" },
  { icon: "mail-02", text: "sarahidahosa001@gmail.com" },
  { icon: "location-06", text: "Lagos, Nigeria" },
];
type ITypesDefinition = "text" | "number" | "email" | "textarea";
const contactFields: Array<
  | {
      label: string;
      placeholder: string;
      type: ITypesDefinition;
    }
  | Array<{
      label: string;
      placeholder: string;
      type: ITypesDefinition;
    }>
> = [
  [
    {
      label: "First Name",
      placeholder: "Johnex",
      type: "text",
    },
    {
      label: "Last Name",
      placeholder: "Doe",
      type: "text",
    },
  ],
  [
    {
      label: "Email",
      placeholder: "johnexdoe@gmail.com",
      type: "email",
    },
    {
      label: "Phone Number",
      placeholder: "Doe",
      type: "number",
    },
  ],
  {
    label: "Subject",
    placeholder: "Write a subject....",
    type: "text",
  },
  {
    label: "Message",
    placeholder: "Write your message..",
    type: "textarea",
  },
];
const ContactForm = () => {
  return (
    <div className="~mt-[32px]/[40px] bx-shdw border border-[#76063D] rounded-[12px] ~p-[12px]/[42px]">
      <div className="shadow-index rounded-[12px] overflow-hidden flex flex-wrap">
        <div className="~pl-[20px]/[66px] ~pr-[20px]/[60px] bg-[#76063D] ~pt-[20px]/[0] ~pb-[20px]/[60px] flex items-end flex-1 min-w-fit basis-[411px]">
          <div className="">
            <h4
              className={`~text-[16px]/[28px] ${syne.className} md:w-[70%] font-[600] mb-[20px] text-white`}
            >
              Let&apos;s Connect & Collaborate
            </h4>
            <div className="flex gap-[20px] text-white flex-col">
              {contactInfo.map(({ icon, text }, index) => (
                <div
                  key={"contact__" + index}
                  className="flex react-svg items-center ~gap-[8px]/[16px]"
                >
                  <SVGClient
                    className="react-svg text-[#76063D] flex ~h-[26px]/[32px] ~w-[26px]/[32px] border border-[#ffffff] bg-white items-center justify-center rounded-[50%]"
                    src={`/svg/${icon}.svg`}
                  />
                  <span
                    className={`~text-[14px]/[16px] font-[400] ${poppins.className}`}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
            <div className="~mt-[20px]/[44px] flex items-center ~gap-[4px]/[8px]">
              <div
                className={`~text-[10px]/[16px] text-nowrap ${poppins.className} react-svg flex font-[500] ~gap-[2px]/[8px] items-center react-svg text-white leading-[200%]`}
              >
                <SVGClient
                  className="~w-[11px]/[30px] h-[2px]"
                  src="/svg/line.svg"
                />
                Follow Me
              </div>
              <div className="flex items-center ~gap-[4px]/[8px]">
                {[
                  { socialIcons: "twitter", socialLinks: "" },
                  { socialIcons: "medium", socialLinks: "" },
                  { socialIcons: "mail", socialLinks: "" },
                  { socialIcons: "tiktok", socialLinks: "" },
                  { socialIcons: "instagram", socialLinks: "" },
                  { socialIcons: "linkedin", socialLinks: "" },
                  { socialIcons: "telegram-one", socialLinks: "" },
                  { socialIcons: "discord", socialLinks: "" },
                ].map(({ socialIcons, socialLinks }, index) => (
                  <a
                    target="_blank"
                    href={socialLinks}
                    key={"icon__" + index}
                    className="h-fit w-fit"
                  >
                    <SVGClient
                      className="hover:text-[#76063D] ~w-[22px]/[32px] ~h-[22px]/[32px] hover:bg-white focus:text-[#76063D] focus:bg-white transition-[.4s] rounded-[50%] text-white border p-[6px] items-center justify-center flex"
                      src={"/svg/" + socialIcons + ".svg"}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-[20px] bg-white basis-[705px] ~px-[12px]/[55px] ~py-[20px]/[60px]">
          {contactFields.map((fields, parentIndex) => {
            return Array.isArray(fields) ? (
              <div
                key={"parent__" + parentIndex}
                className="flex w-full ~gap-[24px]/[40px]"
              >
                {fields.map((field, index) => (
                  <div
                    key={"field__" + index + "__" + parentIndex}
                    className="basis-[278px] flex-1"
                  >
                    <Input
                      variant="outlined"
                      placeholder={field.placeholder || undefined}
                      label={field.label || undefined}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <Input
                variant="outlined"
                key={"field__" + parentIndex}
                placeholder={fields.placeholder || undefined}
                label={fields.label || undefined}
              />
            );
          })}
          <button
            className={`bg-[#76063D] w-fit ml-auto btn hover:bg-white hover:text-[#76063D] focus:bg-white focus:text-[#76063D] transition-[.4s] border border-[#76063D] ~text-[12px]/[16px] items-center rounded-[24px] gap-[8px] react-svg text-white font-[400] flex px-[24px] py-[11px] ${montserrat.className}`}
          >
            Send Message
            <SVGClient
              className="~w-[16px]/[24px] ~h-[16px]/[24px]"
              src="/svg/navigation-03.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
