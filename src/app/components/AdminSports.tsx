import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';

export function AdminSports() {
  const [matches, setMatches] = useState<any[]>([]);
  const [apiResults, setApiResults] = useState<any[]>([]); // Pour stocker les matchs de l'API
  const [loadingApi, setLoadingApi] = useState(false);
  
  const [form, setForm] = useState({
    sport: 'Foot',
    league: '',
    home_team: '',
    away_team: '',
    match_time: '',
    is_live: false,
    is_visible: true,
    home_score: null as number | null,
    away_score: null as number | null,
    event_timestamp: ''
  });
   
  const [selectedLeague, setSelectedLeague] = useState('FL1'); // Par défaut Ligue 1
  const [showAllMatches, setShowAllMatches] = useState(false); // Pour la Popup

  const API_KEY = 'fe55bbd956a148209c46ba28fc15c999';

  useEffect(() => { fetchMatches(); }, []);

async function fetchMatches() {
  const { data, error } = await supabase
    .from('matches')
    .select('*')
    .order('id', { ascending: false }); // Syntaxe correcte pour Supabase JS

  if (error) {
    console.error("Erreur détaillée Supabase:", error.message);
    return;
  }
  if (data) setMatches(data);
}

  // Fonction pour chercher les matchs de Ligue 1 (FL1)
async function searchFootball() {
  setLoadingApi(true);

  // 1. Calcul des dates : d'aujourd'hui à J+7
  const today = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);

  const dateFrom = today.toISOString().split('T')[0];
  const dateTo = nextWeek.toISOString().split('T')[0];

  // 2. Construction de l'URL avec la ligue sélectionnée et les dates
  const targetUrl = `https://api.football-data.org/v4/competitions/${selectedLeague}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`;

  try {
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: { 'X-Auth-Token': API_KEY } 
    });

    if (!response.ok) throw new Error(`Erreur API: ${response.status}`);

    const result = await response.json();
    console.log("Résultat API brut:", result);

    if (!result.matches || result.matches.length === 0) {
      console.log("Aucun match trouvé pour ces dates.");
      setApiResults([]);
      return;
    }

    // 3. Formatage des données pour ton Dashboard et Supabase
    const formatted = result.matches.map((m: any) => ({
      sport: 'Foot',
      // On récupère le nom de la ligue
      league: m.competition ? m.competition.name : 'Football',
      home_team: m.homeTeam.name,
      away_team: m.awayTeam.name,
      // Date ISO pour les calculs
      utcDate: m.utcDate, 
      // Heure formatée pour l'affichage (ex: 21:00)
      match_time: new Date(m.utcDate).toLocaleTimeString('fr-FR', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }),
      // Statuts dynamiques
      is_live: m.status === 'IN_PLAY',
      is_visible: true,
      
      // --- LES NOUVEAUX CHAMPS CRUCIALS ---
      // Scores (peuvent être null si match pas commencé)
      home_score: m.score.fullTime.home,
      away_score: m.score.fullTime.away,
      // Le timestamp exact pour l'auto-suppression dans 6h
      event_timestamp: m.utcDate 
    }));

    setApiResults(formatted);
  } catch (error) {
    console.error("Erreur complète:", error);
    alert("Erreur lors de la récupération des matchs. Vérifie ta console.");
  } finally {
    setLoadingApi(false);
  }
}

  // Fonction pour remplir le formulaire automatiquement
 function autoFill(match: any) {
  console.log("Match sélectionné :", match); // Pour vérifier ce qui arrive dans la console
  
  const date = new Date(match.utcDate);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  
  setForm({
    ...form, // On garde les valeurs par défaut (sport, etc.)
    league: match.league || 'Football',
    home_team: match.home_team,
    away_team: match.away_team,
    match_time: `${hours}:${minutes}`,
    is_live: match.is_live || false,
    home_score: match.home_score,
    away_score: match.away_score,
    event_timestamp: match.event_timestamp
  });

  // Petit effet sympa pour remonter au formulaire
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function addMatch(e: React.FormEvent) {
  e.preventDefault();
  
  // On extrait l'id (s'il existe) pour ne pas l'envoyer
  const { id, ...cleanData } = form as any;

  const { error } = await supabase
    .from('matches')
    .insert([cleanData]); // On envoie les données sans ID
    
  if (error) {
    alert("Erreur Supabase : " + error.message);
  } else {
    setForm({ sport: 'Foot', league: '', home_team: '', away_team: '', match_time: '', is_live: false, is_visible: true });
    fetchMatches();
    alert("Match ajouté !");
  }
}

  async function deleteMatch(id: number) {
    if(confirm("Supprimer ce match ?")) {
      await supabase.from('matches').delete().eq('id', id);
      fetchMatches();
    }
  }

  return (
    <div className="min-h-screen bg-[#0c0a09] text-white p-6 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-black text-[#d97706] mb-8 uppercase italic">Dashboard Saint-Aubin</h1>

        {/* SECTION RECHERCHE API */}
        <div className="mb-10 bg-[#1c1917] p-4 rounded-xl border border-gray-800">
  <div className="flex flex-wrap gap-4 mb-4">
    {/* Sélecteur de Ligue */}
    <select 
      value={selectedLeague} 
      onChange={(e) => setSelectedLeague(e.target.value)}
      className="bg-black text-white p-2 rounded border border-gray-700 outline-none"
    >
      <option value="FL1">🇫🇷 Ligue 1</option>
      <option value="PL">🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League</option>
      <option value="PD">🇪🇸 La Liga</option>
      <option value="CL">🏆 Champions League</option>
      <option value="SA">🇮🇹 Serie A</option>
    </select>

    <button 
      onClick={searchFootball}
      className="bg-[#d97706] text-black font-bold py-2 px-4 rounded-lg hover:bg-white transition-all"
    >
      Rechercher
    </button>
  </div>

  {/* Affichage des 4 premiers résultats */}
  <div className="grid grid-cols-1 gap-2">
    {apiResults.slice(0, 4).map((m, index) => (
      <div key={index} className="flex justify-between items-center p-2 bg-black/20 rounded border border-gray-800 text-xs">
        <span>{m.home_team} vs {m.away_team}</span>
        <button onClick={() => autoFill(m)} className="text-[#d97706] font-bold">CHOISIR</button>
      </div>
    ))}
  </div>

  {/* Bouton "Afficher plus" si on a plus de 4 matchs */}
  {apiResults.length > 4 && (
    <button 
      onClick={() => setShowAllMatches(true)}
      className="w-full mt-4 text-gray-400 text-xs hover:text-white underline"
    >
      Afficher plus de matchs ({apiResults.length - 4} restants)
    </button>
  )}
</div>

        {/* FORMULAIRE D'AJOUT */}
        <form onSubmit={addMatch} className="bg-[#1c1917] p-8 rounded-2xl border border-[#d97706]/20 shadow-2xl space-y-6 mb-12">
          <h2 className="text-xl font-bold border-b border-gray-800 pb-2">Enregistrer un match</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs text-gray-400 uppercase font-bold">Ligue / Compétition</label>
              <input className="w-full bg-black p-3 rounded mt-1 border border-gray-800 focus:border-[#d97706] outline-none" required value={form.league} onChange={e => setForm({...form, league: e.target.value})} />
            </div>
            <div>
              <label className="text-xs text-gray-400 uppercase font-bold">Sport</label>
              <select className="w-full bg-black p-3 rounded mt-1 border border-gray-800 outline-none text-white" value={form.sport} onChange={e => setForm({...form, sport: e.target.value})}>
                <option value="Foot">Football ⚽</option>
                <option value="Rugby">Rugby 🏉</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input className="bg-black p-3 rounded border border-gray-800 outline-none" placeholder="Domicile" required value={form.home_team} onChange={e => setForm({...form, home_team: e.target.value})} />
            <input className="bg-black p-3 rounded border border-gray-800 outline-none" placeholder="Extérieur" required value={form.away_team} onChange={e => setForm({...form, away_team: e.target.value})} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs text-gray-400 uppercase font-bold">Heure (Locale)</label>
              <input type="time" className="w-full bg-black p-3 rounded border border-gray-800 outline-none" required value={form.match_time} onChange={e => setForm({...form, match_time: e.target.value})} />
            </div>
            <div className="flex items-center gap-3">
               <input type="checkbox" id="live" checked={form.is_live} onChange={e => setForm({...form, is_live: e.target.checked})} className="w-5 h-5 accent-[#d97706]" />
               <label htmlFor="live" className="text-sm font-bold">Match en DIRECT ?</label>
            </div>
          </div>

          <button type="submit" className="w-full bg-[#d97706] text-black font-black py-4 rounded-xl hover:bg-white hover:scale-[1.02] transition-all uppercase tracking-tighter">
            Publier sur le site
          </button>
        </form>

        {/* LISTE DES MATCHS SUR LE SITE */}
        <div className="space-y-4">
          <h3 className="text-gray-500 font-bold uppercase text-sm tracking-widest">Matchs actuellement visibles</h3>
          {matches.map(m => (
            <div key={m.id} className="bg-black border border-gray-800 p-4 rounded-xl flex justify-between items-center group">
              <div>
                <span className="text-[#f5e90c] text-[10px] font-bold uppercase">{m.league}</span>
                <p className="font-bold">{m.home_team} vs {m.away_team}</p>
                <p className="text-gray-500 text-xs">{m.match_time}</p>
              </div>
              <button onClick={() => deleteMatch(m.id)} className="text-gray-600 hover:text-red-500 transition-colors p-2 text-sm uppercase font-bold">Supprimer</button>
            </div>
          ))}
        </div>
      </div>
      {showAllMatches && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-[#1c1917] border border-gray-700 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Tous les matchs ({selectedLeague})</h2>
        <button onClick={() => setShowAllMatches(false)} className="text-gray-400 hover:text-white text-2xl">&times;</button>
      </div>
      
      <div className="space-y-3">
  {apiResults.map((m, index) => (
    <div key={index} className="flex justify-between items-center p-4 bg-black/60 rounded-xl border border-gray-800 hover:border-[#d97706]/40 transition-all">
      <div className="flex flex-col">
        <span className="text-[10px] text-[#d97706] font-bold uppercase mb-1">{m.league}</span>
        <span className="font-bold text-sm">{m.home_team} vs {m.away_team}</span>
        <span className="text-gray-500 text-[10px]">{new Date(m.utcDate).toLocaleDateString('fr-FR')} à {m.match_time}</span>
      </div>
      <button 
        onClick={() => { autoFill(m); setShowAllMatches(false); }} 
        className="bg-[#d97706] hover:bg-white text-black px-4 py-2 rounded-lg text-xs font-black uppercase transition-colors"
      >
        Choisir
      </button>
    </div>
  ))}
</div>
    </div>
  </div>
)}
    </div>
  );
}