import React from 'react';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';

 interface Match {
  id: number;
  home_team: string;
  away_team: string;
  league: string;
  match_time: string;
  event_timestamp: string;
  sport: string;
  is_live: boolean;
  home_score?: number | null;
  away_score?: number | null;
}


export function LiveSports({ onOpenReserve }: { onOpenReserve: (match: any) => void }) {
  // Mock data : Facile à mettre à jour pour le patron du bar
  const [matches, setMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

 

  useEffect(() => {
  async function fetchMatches() {
    const { data, error } = await supabase
      .from('matches')
      .select('*')
      .eq('is_visible', true);

    if (!error && data) {
      const now = new Date().getTime();
      const sixHoursMs = 6 * 60 * 60 * 1000;

      const processedMatches = data
        .filter(m => {
          // 1. AUTO-CLEAN : On ignore les matchs vieux de plus de 6h
          const matchTime = new Date(m.event_timestamp).getTime();
          return (matchTime + sixHoursMs) > now;
        })
        .sort((a, b) => {
          // 2. TRI : Les matchs les plus proches (ou en direct) d'abord
          return new Date(a.event_timestamp).getTime() - new Date(b.event_timestamp).getTime();
        });

      setMatches(processedMatches);
    }
    setLoading(false);
  }
  fetchMatches();
}, []);

  if (loading) return <div className="text-center py-20 text-[#d97706]">Chargement des matchs...</div>;

  return (
    <section id="sports" className="bg-[#1c1917] py-16 border-y border-[#d97706]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* En-tête de la section */}
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

        {/* Grille des Matchs avec limitation slice(0, 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showAll ? matches : matches.slice(0, 3)).map((match) => (
            <div key={match.id} className="group relative bg-[#0c0a09] border border-[#d97706]/10 p-8 rounded-2xl hover:border-[#d97706]/40 transition-all duration-500 shadow-2xl overflow-hidden">
              
              <div className="flex justify-between items-start mb-6">
                <span className="text-3xl">{match.sport === 'Rugby' ? '🏉' : '⚽'}</span>
                
                {/* Score affiché si disponible dans Supabase */}
                {match.home_score !== null && match.home_score !== undefined && (
                  <div className="bg-[#d97706] text-black px-4 py-1 rounded font-black text-2xl shadow-[0_0_15px_rgba(217,119,6,0.3)]">
                    {match.home_score} - {match.away_score}
                  </div>
                )}

                {match.is_live && (
                  <span className="flex items-center gap-2 bg-red-600/10 text-red-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-red-500/20">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    En direct
                  </span>
                )}
              </div>

              <div className="space-y-1 mb-6">
                <p className="text-[#d97706] text-xs font-bold uppercase tracking-tighter">{match.league}</p>
                <h3 className="text-xl text-[#fafaf9] font-bold tracking-tight">
                  {match.home_team} <span className="text-[#a8a29e] font-light text-lg mx-1">vs</span> {match.away_team}
                </h3>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#fafaf9]/5">
                <div className="flex flex-col">
                  <span className="text-[#a8a29e] text-sm font-medium">{match.match_time}</span>
                  {/* Petit rappel de la date pour la clarté */}
                  <span className="text-[#57534e] text-[10px] uppercase font-bold">
                    {new Date(match.event_timestamp).toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' })}
                  </span>
                </div>
                <button 
                  onClick={() => onOpenReserve(match)}
                  className="bg-[#d97706]/10 hover:bg-[#d97706] text-[#d97706] hover:text-black border border-[#d97706]/30 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
                >
                  Réserver
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Voir Plus / Voir Moins */}
        {matches.length > 3 && (
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-3 bg-transparent border-2 border-[#d97706] text-[#d97706] px-10 py-4 rounded-full font-black uppercase text-sm tracking-tighter hover:bg-[#d97706] hover:text-black transition-all duration-300"
            >
              {showAll ? "Réduire la liste" : `Voir toutes les diffusions (${matches.length})`}
              <span className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}>↓</span>
            </button>
          </div>
        )}

        {/* Note d'information */}
        <div className="mt-16 bg-[#d97706]/5 border border-[#d97706]/20 p-6 rounded-2xl flex items-start gap-4">
          <span className="text-2xl">📢</span>
          <div>
            <p className="text-[#fafaf9] text-sm font-bold mb-1">Conseil d'habitué</p>
            <p className="text-[#a8a29e] text-sm italic">
              Pour les matchs de l'UBB et du XV de France, nous vous conseillons d'arriver au moins 45 minutes avant le coup d'envoi pour avoir une place assise près des écrans.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}