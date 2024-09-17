"use client";

import { useState } from "react";
import { Montserrat, Poppins, Syne } from "next/font/google";
import Input from "../Input";
import SVGClient from "../SVGClient";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

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
      name: string;
    }
  | Array<{
      label: string;
      placeholder: string;
      type: ITypesDefinition;
      name: string;
    }>
> = [
  [
    {
      label: "First Name",
      placeholder: "Johnex",
      type: "text",
      name: "firstName",
    },
    {
      label: "Last Name",
      placeholder: "Doe",
      type: "text",
      name: "lastName",
    },
  ],
  [
    {
      label: "Email",
      placeholder: "johnexdoe@gmail.com",
      type: "email",
      name: "email",
    },
    {
      label: "Phone Number",
      placeholder: "+1 (235)",
      type: "number",
      name: "phoneNumber",
    },
  ],
  {
    label: "Subject",
    placeholder: "Write a subject....",
    type: "text",
    name: "subject",
  },
  {
    label: "Message",
    placeholder: "Write your message..",
    type: "textarea",
    name: "message",
  },
];
const ContactForm = () => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (formErrors[name]) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    contactFields.flat().forEach((field) => {
      if (typeof field === "object" && !formData[field.name]) {
        errors[field.name] = `${field.label} is required`;
      }
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    console.log(formData);

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      console.log(result.text);
      toast.success("Message sent successfully!");

      setFormData({});
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="~mt-[32px]/[40px] bx-shdw border border-[#76063D] rounded-[12px] ~p-[12px]/[42px] wow fadeIn">
      <div className="shadow-index rounded-[12px] overflow-hidden flex flex-wrap wow fadeIn">
        <div className="~pl-[20px]/[66px] ~pr-[20px]/[60px] bg-[#76063D] ~pt-[20px]/[0] ~pb-[20px]/[60px] flex items-end flex-1 min-w-fit basis-[411px] wow fadeIn">
          <div className="wow fadeIn">
            <h4
              className={`~text-[16px]/[28px] ${syne.className} md:w-[70%] font-[600] mb-[20px] text-white wow fadeIn`}
            >
              Let&apos;s Connect & Collaborate
            </h4>
            <div className="flex gap-[20px] text-white flex-col wow fadeIn">
              {contactInfo.map(({ icon, text }, index) => (
                <div
                  key={"contact__" + index}
                  className="flex react-svg items-center ~gap-[8px]/[16px] wow fadeIn"
                >
                  <SVGClient
                    className="react-svg text-[#76063D] flex ~h-[26px]/[32px] ~w-[26px]/[32px] border border-[#ffffff] bg-white items-center justify-center rounded-[50%]"
                    src={`/svg/${icon}.svg`}
                  />
                  <span
                    className={`~text-[14px]/[16px] font-[400] ${poppins.className} wow fadeIn`}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
            <div className="~mt-[20px]/[44px] flex items-center ~gap-[4px]/[8px] wow fadeIn">
              <div
                className={`~text-[10px]/[16px] text-nowrap ${poppins.className} react-svg flex font-[500] ~gap-[2px]/[8px] items-center react-svg text-white leading-[200%] wow fadeIn`}
              >
                <SVGClient
                  className="~w-[11px]/[30px] h-[2px]"
                  src="/svg/line.svg"
                />
                Follow Me
              </div>
              <div className="flex items-center ~gap-[4px]/[8px] wow fadeIn">
                {[
                  {
                    socialIcons: "twitter",
                    socialLinks: "https://x.com/thesarahidahosa",
                  },
                  {
                    socialIcons: "medium",
                    socialLinks: "https://medium.com/@sarahidahosa",
                  },
                  {
                    socialIcons: "mail",
                    socialLinks: "mailto:sarahidahosa001@gmail.com",
                  },
                  {
                    socialIcons: "tiktok",
                    socialLinks: "https://www.tiktok.com/@thesarahidahosa",
                  },
                  {
                    socialIcons: "instagram",
                    socialLinks: "https://www.instagram.com/thesarahidahosa/",
                  },
                  {
                    socialIcons: "linkedin",
                    socialLinks: "https://www.linkedin.com/in/sarahidahosa/",
                  },
                  {
                    socialIcons: "telegram-one",
                    socialLinks: "https://t.me/thesarahidahosa",
                  },
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
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-[20px] bg-white basis-[705px] ~px-[12px]/[55px] ~py-[20px]/[60px] wow fadeIn"
        >
          {contactFields.map((fields, parentIndex) => {
            return Array.isArray(fields) ? (
              <div
                key={"parent__" + parentIndex}
                className="flex w-full ~gap-[24px]/[40px] wow fadeIn"
              >
                {fields.map((field, index) => (
                  <div
                    key={"field__" + index + "__" + parentIndex}
                    className="basis-[278px] flex-1 wow fadeIn"
                  >
                    <Input
                      variant="outlined"
                      placeholder={field.placeholder || undefined}
                      label={field.label || undefined}
                      name={field.name}
                      onChange={handleInputChange}
                      error={formErrors[field.name]}
                      type={field.type}
                      value={formData[field.name] || ""}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div key={"field__" + parentIndex}>
                <Input
                  variant="outlined"
                  placeholder={fields.placeholder || undefined}
                  label={fields.label || undefined}
                  name={fields.name}
                  onChange={handleInputChange}
                  error={formErrors[fields.name]}
                  type={fields.type}
                  value={formData[fields.name] || ""}
                />
              </div>
            );
          })}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[#76063D] w-fit ml-auto btn hover:bg-white hover:text-[#76063D] focus:bg-white focus:text-[#76063D] transition-[.4s] border border-[#76063D] ~text-[12px]/[16px] items-center rounded-[24px] gap-[8px] react-svg text-white font-[400] flex px-[24px] py-[11px] ${montserrat.className} wow fadeIn`}
          >
            Send Message
            {isSubmitting ? (
              <ClipLoader size={16} className="ml-2" color="currentColor" />
            ) : (
              <SVGClient
                className="~w-[16px]/[24px] ~h-[16px]/[24px]"
                src="/svg/navigation-03.svg"
              />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
