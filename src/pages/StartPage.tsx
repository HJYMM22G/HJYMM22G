import BrandBanner from '../components/BrandBanner';
import { ContactForm } from '../components/ContactForm';
import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { TeamSection } from '../components/TeamSection';

export function StartPage() {
  return (
    <>
      <Hero />
      <TeamSection />
      <ServicesSection />
      <ContactForm />
      <BrandBanner />
    </>
  );
}
