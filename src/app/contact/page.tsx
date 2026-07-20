import type { Metadata } from "next";
import ContactHero from "../components/contact/ContactHero";
import ContactFormSection from "../components/contact/ContactFormSection";
import ContactFAQ from "../components/contact/ContactFAQ";

export const metadata: Metadata = {
  title: "Contact — SkillPilot",
  description: "Get in touch with the SkillPilot team.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactFormSection />
      <ContactFAQ />
    </main>
  );
}