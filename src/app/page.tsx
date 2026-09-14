import  AboutSection  from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesGrid />    
      <ContactSection />    
    </>
  );
}
