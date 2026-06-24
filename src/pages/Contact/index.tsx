import { ContactHero } from '../../components/contact/ContactHero';
import { ContactMethods } from '../../components/contact/ContactMethods';
import { ContactForm } from '../../components/contact/ContactForm';
import { WhyContactUs } from '../../components/contact/WhyContactUs';
import { ContactFAQ } from '../../components/contact/ContactFAQ';

export default function Contact() {
  return (
    <div className="flex flex-col w-full bg-[#0f172a]">
      <ContactHero />
      <ContactMethods />
      
      {/* Form & Trust Indicators Split Section */}
      <section className="py-24 relative overflow-hidden bg-[#0B1120]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="w-full lg:w-5/12">
              <WhyContactUs />
            </div>
            <div className="w-full lg:w-7/12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <ContactFAQ />
    </div>
  );
}
