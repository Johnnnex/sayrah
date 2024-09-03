import { Montserrat, Poppins, Syne } from "next/font/google";
import Input from "../Input";
import SVGClient from "../SVGClient";

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
    <div className="mt-[2.5rem] border border-[#76063D] rounded-[12px] p-[2.625rem]">
      <div className="shadow-index rounded-[12px] overflow-hidden flex flex-wrap">
        <div className="pl-[4.125rem] pr-[3.75rem] bg-[#76063D] pb-[3.75rem] flex items-end flex-1 min-w-fit basis-[25.6875rem]">
          <div className="">
            <h4
              className={`text-[1.75rem] ${syne.className} w-[70%] font-[600] mb-[1.25rem] text-white`}
            >
              Let’s Connect & Collaborate
            </h4>
            <div className="flex gap-[1.25rem] text-white flex-col">
              {contactInfo.map(({ icon, text }, index) => (
                <div
                  key={"contact__" + index}
                  className="flex react-svg items-center gap-[1rem]"
                >
                  <SVGClient
                    className="react-svg text-[#76063D] flex aspect-[1/1] w-[2rem] border border-[#ffffff] bg-white items-center justify-center rounded-[50%]"
                    src={`/svg/${icon}.svg`}
                  />
                  <span
                    className={`text-[1rem] font-[400] ${poppins.className}`}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-[2.75rem] flex items-center gap-[.5rem]">
              <div
                className={`text-[1rem] ${poppins.className} flex font-[500] gap-[.5rem] items-center react-svg text-white leading-[200%]`}
              >
                <SVGClient src="/svg/line.svg" />
                Follow Me
              </div>
              <div className="flex items-center gap-[.5rem]">
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
                    href={socialLinks}
                    key={"icon__" + index}
                    className="h-fit w-fit"
                  >
                    <SVGClient
                      className="aspect-[1/1] hover:text-[#76063D] hover:bg-white focus:text-[#76063D] focus:bg-white transition-[.4s] rounded-[50%] text-white border p-[6px] items-center justify-center flex"
                      src={"/svg/" + socialIcons + ".svg"}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-[1.25rem] bg-white basis-[44.0625rem] px-[3.4375rem] py-[3.75rem]">
          {contactFields.map((fields, parentIndex) => {
            return Array.isArray(fields) ? (
              <div
                key={"parent__" + parentIndex}
                className="flex w-full gap-[2.5rem]"
              >
                {fields.map((field, index) => (
                  <div
                    key={"field__" + index + "__" + parentIndex}
                    className="basis-[17.375rem] flex-1"
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
            className={`bg-[#76063D] w-fit ml-auto btn hover:bg-white hover:text-[#76063D] focus:bg-white focus:text-[#76063D] transition-[.4s] border border-[#76063D] text-[1rem] items-center rounded-[1.5rem] gap-[.5rem] react-svg text-white font-[400] flex px-[1.5rem] py-[.7rem] ${montserrat.className}`}
          >
            Send Message
            <SVGClient src="/svg/navigation-03.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
