// Remplace tout le début de ton fichier Reservation.tsx par ceci :
import { useState } from 'react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedMatch: any; // On reçoit l'objet du match ici
}

export function ReservationModal({ isOpen, onClose, selectedMatch }: ReservationModalProps) {
  if (!isOpen) return null;

  // On vérifie si on est en mode "Match" ou "Classique"
  const isMatchBooking = selectedMatch !== null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#1c1917] border border-[#d97706]/30 p-8 rounded-2xl max-w-md w-full relative shadow-2xl">
        
        <button onClick={onClose} className="absolute top-4 right-4 text-[#a8a29e] hover:text-[#d97706]">✕</button>

        {/* 1. TITRE DYNAMIQUE */}
        <h2 className="text-2xl font-bold text-[#fafaf9] mb-2 font-serif">
          {isMatchBooking ? "Réservation Match" : "Réserver une table"}
        </h2>
        
        {/* 2. RAPPEL DU MATCH (Seulement si c'est un match) */}
        {isMatchBooking ? (
          <div className="mb-6 p-3 bg-[#d97706]/10 border border-[#d97706]/20 rounded-lg">
            <p className="text-[#d97706] text-xs font-bold uppercase">Diffusion Sportive</p>
            <p className="text-white font-bold">{selectedMatch.home_team} vs {selectedMatch.away_team}</p>
            <p className="text-gray-400 text-[10px]">Le {new Date(selectedMatch.event_timestamp).toLocaleDateString('fr-FR')}</p>
          </div>
        ) : (
          <p className="text-[#a8a29e] text-sm mb-6">Pour un déjeuner ou un dîner entre amis au Saint-Aubin.</p>
        )}
        
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm text-[#a8a29e] mb-1">Nom complet</label>
            <input type="text" className="w-full bg-[#0c0a09] border border-[#292524] p-3 rounded text-white outline-none focus:border-[#d97706]" placeholder="Jean Dupont" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              {/* 3. DATE OU HEURE DYNAMIQUE */}
              <label className="block text-sm text-[#a8a29e] mb-1">
                {isMatchBooking ? "Heure d'arrivée" : "Date"}
              </label>
              <input 
                type={isMatchBooking ? "time" : "date"} 
                className="w-full bg-[#0c0a09] border border-[#292524] p-3 rounded text-white outline-none focus:border-[#d97706]" 
                defaultValue={isMatchBooking ? selectedMatch.match_time : ""}
              />
            </div>
            <div>
              <label className="block text-sm text-[#a8a29e] mb-1">Personnes</label>
              <input type="number" min="1" className="w-full bg-[#0c0a09] border border-[#292524] p-3 rounded text-white outline-none focus:border-[#d97706]" placeholder="2" />
            </div>
          </div>

          {/* 4. SELECTEUR D'ÉVÉNEMENT (Seulement pour résa classique) */}
          {!isMatchBooking && (
            <div>
              <label className="block text-sm text-[#a8a29e] mb-1">Type d'événement</label>
              <select className="w-full bg-[#0c0a09] border border-[#292524] p-3 rounded text-white outline-none focus:border-[#d97706]">
                <option>Repas classique</option>
                <option>Anniversaire</option>
                <option>Groupe / Entreprise</option>
              </select>
            </div>
          )}

          <button type="submit" className="w-full bg-[#d97706] text-[#0c0a09] font-bold py-4 rounded-lg hover:bg-[#fafaf9] transition-all uppercase tracking-widest mt-4">
            {isMatchBooking ? "Confirmer pour le match" : "Réserver ma table"}
          </button>
        </form>
      </div>
    </div>
  );
}