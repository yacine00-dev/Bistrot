import React from 'react';

export function LiveSports() {
  // Mock data : Facile à mettre à jour pour le patron du bar
  const matches = [
    {
      id: 1,
      sport: "Rugby",
      league: "Top 14",
      teams: { home: "UBB", away: "Stade Toulousain" },
      time: "Ce soir - 21h05",
      isLive: true,
      icon: "🏉"
    },
    {
      id: 2,
      sport: "Foot",
      league: "Ligue 2",
      teams: { home: "FC Girondins", away: "Angers SCO" },
      time: "Demain - 15h00",
      isLive: false,
      icon: "⚽"
    },
    {
      id: 3,
      sport: "Rugby",
      league: "Six Nations",
      teams: { home: "France", away: "Irlande" },
      time: "Samedi - 16h00",
      isLive: false,
      icon: "🏉"
    }
  ];

  return (
    <section id="sports" className="bg-[#1c1917] py-16 border-y border-[#d97706]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-12 h-[2px] bg-[#d97706]"></span>
              <span className="text-[#d97706] uppercase tracking-[0.3em] text-xs font-bold">Côté Terrain</span>
            </div>
            <h2 className="text-4xl font-bold text-[#fafaf9]">Prochaines <span className="text-[#d97706] italic">Diffusions</span></h2>
          </div>
          <p className="text-[#a8a29e] max-w-md text-sm md:text-right">
            Vivez les plus grandes émotions sportives sur nos 8 écrans géants. 
            Ambiance garantie, surtout pour l'UBB !
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((match) => (
            <div 
              key={match.id} 
              className="bg-[#0c0a09] border border-[#fafaf9]/5 p-6 rounded-xl hover:border-[#d97706]/40 transition-all group relative overflow-hidden"
            >
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d97706]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-3xl">{match.icon}</span>
                  {match.isLive ? (
                    <span className="flex items-center gap-2 bg-red-600/10 text-red-500 text-[10px] font-bold px-3 py-1 rounded-full border border-red-600/20 uppercase tracking-widest animate-pulse">
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                      Direct
                    </span>
                  ) : (
                    <span className="text-[#a8a29e] text-[10px] font-bold uppercase tracking-widest border border-[#fafaf9]/10 px-3 py-1 rounded-full">
                      À venir
                    </span>
                  )}
                </div>

                <div className="space-y-1 mb-6">
                  <p className="text-[#d97706] text-xs font-bold uppercase tracking-tighter">{match.league}</p>
                  <h3 className="text-xl text-[#fafaf9] font-bold tracking-tight">
                    {match.teams.home} <span className="text-[#a8a29e] font-light text-lg mx-1">vs</span> {match.teams.away}
                  </h3>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#fafaf9]/5">
                  <span className="text-[#a8a29e] text-sm font-medium">{match.time}</span>
                  <button className="text-[#d97706] text-xs font-bold uppercase tracking-widest group-hover:underline underline-offset-4">
                    Réserver
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note pour les soirs de gros matchs */}
        <div className="mt-12 bg-[#d97706]/5 border border-[#d97706]/20 p-4 rounded-lg flex items-start gap-4">
          <span className="text-xl">📢</span>
          <p className="text-[#a8a29e] text-sm italic">
            <strong>Note :</strong> Pour les matchs de l'UBB et du XV de France, nous vous conseillons d'arriver au moins 45 minutes avant le coup d'envoi pour avoir une place assise.
          </p>
        </div>

      </div>
    </section>
  );
}