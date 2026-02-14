import { useState, useEffect } from 'react';

export function Navigation({ onOpenReserve }: { onOpenReserve: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // État pour le menu mobile

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour fermer le menu quand on clique sur un lien
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-[#0c0a09]/95 backdrop-blur-md py-3 border-b border-[#d97706]/30'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex flex-col leading-tight z-50">
          <span className="text-2xl font-black text-[#fafaf9] tracking-tighter uppercase">
            Saint<span className="text-[#d97706]">Aubin</span>
          </span>
          <span className="text-[10px] text-[#d97706] tracking-[0.3em] font-bold uppercase">
            Bordeaux Victoire
          </span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <a href="#menu" className="text-[#fafaf9] text-sm font-bold uppercase tracking-widest hover:text-[#d97706] transition-colors">La Carte</a>
          <a href="#sports" className="relative text-[#fafaf9] text-sm font-bold uppercase tracking-widest hover:text-[#d97706] transition-colors flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            Direct Sport
          </a>
          <a href="#atmosphere" className="text-[#fafaf9] text-sm font-bold uppercase tracking-widest hover:text-[#d97706] transition-colors">Le Pub</a>
          <a href="#contact" className="text-[#fafaf9] text-sm font-bold uppercase tracking-widest hover:text-[#d97706] transition-colors">Accès</a>
        </div>

        {/* Bouton de réservation Desktop & Burger Button */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenReserve}
            className="hidden sm:block bg-[#d97706] text-[#0c0a09] px-6 py-2 rounded-md font-bold text-xs uppercase tracking-tighter hover:bg-[#fafaf9] transition-all cursor-pointer"
          >
            Réserver
          </button>
          
          {/* Mobile Menu Icon (Hamburger) */}
          <button 
            className="md:hidden text-[#fafaf9] z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> // Icône X
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /> // Icône Burger
              )}
            </svg>
          </button>
        </div>
      </div>

    

<div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#0c0a09] z-[40] transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
  <div className="flex flex-col items-center justify-center h-full space-y-8 px-6 pt-20">
    {/* Liens avec un style plus "Bistro / Pub" */}
    <a href="#menu" onClick={closeMobileMenu} className="text-3xl font-black text-[#fafaf9] uppercase tracking-tighter">
      La Carte
    </a>
    <a href="#sports" onClick={closeMobileMenu} className="text-3xl font-black text-[#d97706] uppercase tracking-tighter italic flex items-center gap-3">
      Direct Sport <span className="text-xl">⚽</span>
    </a>
    <a href="#atmosphere" onClick={closeMobileMenu} className="text-3xl font-black text-[#fafaf9] uppercase tracking-tighter">
      Le Pub
    </a>
    <a href="#contact" onClick={closeMobileMenu} className="text-3xl font-black text-[#fafaf9] uppercase tracking-tighter">
      Accès
    </a>
    
    {/* Séparateur */}
    <div className="w-12 h-[2px] bg-[#d97706]/30 my-4"></div>

    <button 
      onClick={() => { onOpenReserve(); closeMobileMenu(); }}
      className="w-full bg-[#d97706] text-[#0c0a09] py-5 rounded-xl font-black text-lg uppercase tracking-widest shadow-[0_10px_20px_rgba(217,119,6,0.2)]"
    >
      Réserver maintenant
    </button>
  </div>
</div>
    </nav>
  );
}