import FeaturesSection from '../components/FeaturesSection';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <HeroSection />
      <FeaturesSection />
    </>
  );
}
