import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { FeaturedMenu } from './components/FeaturedMenu';
import { Atmosphere } from './components/Atmosphere';
import { Footer } from './components/Footer';
import { LiveSports } from './components/LiveSports';
import { AdminSports } from './components/AdminSports';
import { ClosingAction } from './components/ClosingAction';
import { ReservationModal } from './components/Reservation';

export default function App() {
  // 1. États pour la modale et la gestion du match sélectionné
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<any>(null); // Stocke le match cliqué
  const [isAdmin, setIsAdmin] = useState(window.location.hash === '#admin');

  // 2. Fonctions pour la modale
  // Cette fonction est maintenant capable de recevoir un match en argument
  const openModal = (match: any = null) => {
    setSelectedMatch(match); // On enregistre le match (ou null si c'est une résa classique)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMatch(null); // On reset quand on ferme
  };

  // 3. Détection automatique du mode Admin via l'URL (#admin)
  useEffect(() => {
    const handleHash = () => setIsAdmin(window.location.hash === '#admin');
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // 4. AFFICHAGE CONDITIONNEL (Mode Admin)
  if (isAdmin) {
    return <AdminSports />;
  }

  // 5. AFFICHAGE SITE PUBLIC
  return (
    <div className="min-h-screen bg-[#0c0a09]">
      {/* On passe openModal aux composants. Hero et Nav ouvrent une résa vide */}
      <Navigation onOpenReserve={() => openModal()} />
      <Hero onOpenReserve={() => openModal()} />
      
      <OurStory />
      <FeaturedMenu />
      
      {/* LiveSports passe le 'match' spécifique à openModal lors du clic */}
      <LiveSports onOpenReserve={(match) => openModal(match)} />
      
      <Atmosphere />
      <Footer />
      
      <ClosingAction onOpenReserve={() => openModal()} />

      {/* La modale reçoit l'état d'ouverture ET les données du match sélectionné */}
      <ReservationModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        selectedMatch={selectedMatch} 
      />
    </div>
  );
}