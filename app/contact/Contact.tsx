import Chip from "@/components/Chip";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <section className="bg-[url(/images/bg.jpg)] bg-cover bg-center py-[5rem]">
      <div className="max-w-[109.375rem] w-[90%] mx-auto wow fadeIn">
        <Chip name="CONTACT ME" />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
