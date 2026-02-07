import { useState } from 'react'; // Ajoute cet import
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { FeaturedMenu } from './components/FeaturedMenu';
import { Atmosphere } from './components/Atmosphere';
import { Footer } from './components/Footer';
import { LiveSports } from './components/LiveSports';
import { ClosingAction } from './components/ClosingAction';
import { ReservationModal } from './components/Reservation';

export default function App() {
  // 1. Création de l'état global pour la modale
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. Fonction pour ouvrir la modale
  const openModal = () => setIsModalOpen(true);
  // 3. Fonction pour fermer la modale
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-background">
      {/* On passe la fonction openModal aux composants qui ont un bouton */}
      <Navigation onOpenReserve={openModal} />
      <Hero onOpenReserve={openModal} />
      
      <OurStory />
      <FeaturedMenu />
      
      {/* Plus besoin de ReservationModal ici au milieu car elle est "fixed" */}
      
      <LiveSports onOpenReserve={openModal} />
      <Atmosphere />
      <Footer />
      
      {/* On peut aussi l'ajouter ici si le bouton de fin existe */}
      <ClosingAction onOpenReserve={openModal} />

      {/* 4. La modale unique, pilotée par l'état d'App.tsx */}
      <ReservationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}