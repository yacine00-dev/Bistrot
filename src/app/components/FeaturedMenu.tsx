import React from 'react';

export function FeaturedMenu() {
  const draughtBeers = [
    {
      name: "Guinness Draught",
      description: "L'incontournable stout irlandaise, crémeuse à souhait.",
      price: "8.50€",
      isHappyHour: true
    },
    {
      name: "Paix Dieu",
      description: "Triple artisanale brassée les soirs de pleine lune.",
      price: "9.50€",
      isHappyHour: false
    },
    {
      name: "IPA du Moment",
      description: "Sélection locale tournante (demandez au bar).",
      price: "8.00€",
      isHappyHour: true
    },
    {
      name: "Saint Aubin Lager",
      description: "Notre blonde légère et rafraîchissante.",
      price: "6.50€",
      isHappyHour: true
    }
  ];

  const pubGrub = [
    {
      name: "Le Burger Saint Aubin",
      description: "Bœuf origine France, cheddar affiné, oignons confits, sauce maison.",
      price: "16.50€"
    },
    {
      name: "Fish & Chips Tradition",
      description: "Filet de cabillaud frais, panure à la bière, frites maison.",
      price: "15.90€"
    },
    {
      name: "Planche Mixte Géante",
      description: "Sélection de charcuteries locales et fromages de nos régions.",
      price: "22.00€"
    },
    {
      name: "Tacos de la Victoire",
      description: "Trois tacos au porc effiloché, sauce piquante et coriandre.",
      price: "14.00€"
    }
  ];

  return (
    <section id="menu" className="py-24 bg-[#0c0a09]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl text-[#fafaf9] font-bold mb-4">
            Cuisine & <span className="text-[#d97706] italic">Pressions</span>
          </h2>
          <p className="text-[#a8a29e] max-w-2xl mx-auto">
            Des produits frais, des bières sélectionnées et l'ambiance des grands soirs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Section Bières */}
          <div>
            <div className="mb-10 pb-4 border-b border-[#d97706]/30 flex justify-between items-end">
              <div>
                <h3 className="text-3xl text-[#d97706] font-bold">À la Pression</h3>
                <p className="text-[#a8a29e] text-sm italic">Pinte (50cl)</p>
              </div>
              <span className="text-[#d97706] text-xs font-bold uppercase tracking-widest bg-[#d97706]/10 px-3 py-1 rounded">
                Cheers!
              </span>
            </div>
            
            <div className="space-y-10">
              {draughtBeers.map((item, index) => (
                <div key={index} className="group cursor-default">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <h4 className="text-xl text-[#fafaf9] group-hover:text-[#d97706] transition-colors font-semibold">
                        {item.name}
                      </h4>
                      {item.isHappyHour && (
                        <span className="text-[10px] bg-green-600 text-white px-2 py-0.5 rounded-full font-bold animate-pulse">
                          HH
                        </span>
                      )}
                    </div>
                    <span className="text-[#d97706] font-mono font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-[#a8a29e] text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section Food */}
          <div>
            <div className="mb-10 pb-4 border-b border-[#d97706]/30 flex justify-between items-end">
              <div>
                <h3 className="text-3xl text-[#d97706] font-bold">Côté Brasserie</h3>
                <p className="text-[#a8a29e] text-sm italic">Servi jusqu'à 23h</p>
              </div>
              <span className="text-[#d97706] text-xs font-bold uppercase tracking-widest bg-[#d97706]/10 px-3 py-1 rounded">
                Fait Maison
              </span>
            </div>

            <div className="space-y-10">
              {pubGrub.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl text-[#fafaf9] group-hover:text-[#d97706] transition-colors font-semibold">
                      {item.name}
                    </h4>
                    <span className="text-[#d97706] font-mono font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-[#a8a29e] text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA pour le menu complet */}
        <div className="text-center mt-20">
          <a 
            href="/menu/menu9.pdf" 
            download="Menu_Saint_Aubin.pdf" 
            className="inline-block px-8 py-4 border-2 border-[#d97706] text-[#d97706] font-bold rounded-lg hover:bg-[#d97706] hover:text-[#0c0a09] transition-all uppercase tracking-widest text-sm"
          >
            Télécharger la carte complète (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}