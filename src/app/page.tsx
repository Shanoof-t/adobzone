import  AboutSection  from "@/components/sections/AboutSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesGrid />
      <ClientsSection />
    </>
  );
}
