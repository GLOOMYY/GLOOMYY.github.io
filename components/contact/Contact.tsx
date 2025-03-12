import ContactInfo from "@/components/contact/ContactInfo"
import ContactForm from "@/components/contact/ContactForm"
import ContactFormBasic from "@/components/contact/ContactFormBasic"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">&gt; Contact_Me</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <ContactInfo />
          <ContactFormBasic />
        </div>
      </div>
    </section>
  )
}
