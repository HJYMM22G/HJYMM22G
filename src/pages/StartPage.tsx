import { Helmet } from 'react-helmet-async';
import BrandBanner from '../components/BrandBanner';
import { ContactForm } from '../components/ContactForm';
import { Hero } from '../components/Hero';
import MapSection from '../components/MapSection';
import { ServicesSection } from '../components/ServicesSection';
import { TeamSection } from '../components/TeamSection';

export function StartPage() {
  return (
    <>
      <Helmet>
        <title>Your development studio - devStudio</title>
        <meta
          name="description"
          content="A website for our development studio"
        />
      </Helmet>
      <Hero />
      <TeamSection />
      <ServicesSection />
      <ContactForm />
      <BrandBanner />
      <MapSection />
    </>
  );
}
