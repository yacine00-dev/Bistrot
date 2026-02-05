import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background avec une image qui évoque la Place de la Victoire ou une terrasse animée */}
      <div className="absolute inset-0">
        <img
          src="../../../img/PubStAubin_18.jpg" 
          alt="Terrasse du Pub Saint Aubin Bordeaux"
          className="w-full h-full object-cover"
        />
        {/* Overlay légèrement plus sombre pour faire ressortir le texte blanc */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/70 via-[#0c0a09]/40 to-[#0c0a09]/80"></div>
      </div>

      {/* Badge Happy Hour - Argument de vente majeur pour le Saint Aubin */}
      <div className="absolute top-32 right-8 md:right-16 animate-bounce hidden md:block">
        <div className="bg-[#d97706] text-[#0c0a09] font-bold p-4 rounded-full shadow-2xl flex flex-col items-center justify-center w-24 h-24 rotate-12 border-2 border-[#fafaf9]">
          <span className="text-xs uppercase">Happy</span>
          <span className="text-xl">Hour</span>
          <span className="text-[10px]">17h - 21h</span>
        </div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        {/* Titre ancré localement */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 text-[#fafaf9] font-bold max-w-5xl tracking-tight">
          L'Institution de la <span className="text-[#d97706] italic">Victoire</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-[#fafaf9]/90 mb-12 max-w-2xl font-light">
          Bières artisanales, retransmissions sportives et l'esprit Pub au cœur de Bordeaux.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-10 py-4 bg-[#d97706] text-[#fafaf9] font-bold rounded-lg hover:bg-[#b45309] transition-all transform hover:scale-105 shadow-lg uppercase tracking-wider">
            Réserver une table
          </button>
          <button className="px-10 py-4 border-2 border-[#fafaf9] text-[#fafaf9] font-bold rounded-lg hover:bg-[#fafaf9] hover:text-[#0c0a09] transition-all uppercase tracking-wider">
            Voir la carte
          </button>
        </div>

        {/* Petit indicateur de sport en bas */}
        <div className="absolute bottom-10 left-0 w-full flex justify-center">
          <div className="flex items-center gap-4 text-[#fafaf9]/60 text-sm uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2">🏉 Rugby</span>
            <span className="w-1 h-1 bg-[#d97706] rounded-full"></span>
            <span className="flex items-center gap-2">⚽ Football</span>
            <span className="w-1 h-1 bg-[#d97706] rounded-full"></span>
            <span className="flex items-center gap-2">🎯 Fléchettes</span>
          </div>
        </div>
      </div>
    </section>
  );
}