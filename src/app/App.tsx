import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { FeaturedMenu } from './components/FeaturedMenu';
import { Atmosphere } from './components/Atmosphere';
import { Footer } from './components/Footer';
import { LiveSports } from './components/LiveSports';
import { ClosingAction } from './components/ClosingAction';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <OurStory />
      <FeaturedMenu />
      <LiveSports />
      <Atmosphere />
      <Footer />
      <ClosingAction />
    </div>
  );
}
