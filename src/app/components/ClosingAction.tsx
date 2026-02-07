export function ClosingAction() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Image de fond en parallaxe légère (optionnel) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1920" 
          alt="Ambiance bar"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-[#fafaf9] mb-8 leading-tight">
          On se retrouve à <span className="text-[#d97706]">la Victoire ?</span>
        </h2>
        
        <p className="text-[#a8a29e] text-lg mb-12">
          Que ce soit pour une pinte entre amis, un match de l'UBB ou un burger rapide, 
          notre équipe vous attend avec le sourire.
        </p>

        <div className="grid sm:flex justify-center gap-6">
          {/* Bouton Appel direct (Top sur mobile) */}
          <a 
            href="tel:0556912815" 
            className="flex items-center justify-center gap-3 bg-[#d97706] text-[#0c0a09] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#fafaf9] transition-all"
          >
            <span>📞</span> 05 56 91 28 15
          </a>

          {/* Bouton Itinéraire Google Maps */}
          <a 
            href="https://maps.app.goo.gl/KaEcJ1L4iiHuLkev5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border-2 border-[#fafaf9] text-[#fafaf9] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#fafaf9] hover:text-[#0c0a09] transition-all"
          >
            <span>📍</span> Itinéraire
          </a>
        </div>

        <div className="mt-12 flex justify-center items-center gap-8 text-[#a8a29e] text-sm uppercase tracking-widest">
          <div className="flex flex-col">
            <span className="text-[#d97706] font-bold">Ouvert</span>
            <span>Jusqu'à 02h</span>
          </div>
          <div className="w-px h-8 bg-[#d97706]/30"></div>
          <div className="flex flex-col">
            <span className="text-[#d97706] font-bold">Terrasse</span>
            <span>Chauffée</span>
          </div>
        </div>
      </div>
    </section>
  );
}