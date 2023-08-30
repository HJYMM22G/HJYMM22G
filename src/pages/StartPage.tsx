import BrandBanner from '../components/BrandBanner';
import { ServicesSection } from '../components/ServicesSection';
import { TeamSection } from '../components/TeamSection';

export function StartPage() {
  return (
    <>
      <TeamSection />
      <ServicesSection />
      <BrandBanner />
    </>
  );
}
