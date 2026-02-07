// Remplace tout le début de ton fichier Reservation.tsx par ceci :
import { useState } from 'react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  // Si isOpen est faux, on n'affiche rien du tout
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#1c1917] border border-[#d97706]/30 p-8 rounded-2xl max-w-md w-full relative shadow-2xl animate-in fade-in zoom-in duration-300">
        
        {/* Bouton Fermer */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#a8a29e] hover:text-[#d97706] transition-colors"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-[#fafaf9] mb-6 font-serif">Réservation</h2>
        
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm text-[#a8a29e] mb-1">Nom complet</label>
            <input type="text" className="w-full bg-[#0c0a09] border border-[#292524] p-3 rounded text-white focus:border-[#d97706] outline-none" placeholder="Jean Dupont" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#a8a29e] mb-1">Date</label>
              <input type="date" className="w-full bg-[#0c0a09] border border-[#292524] p-3 rounded text-white outline-none" />
            </div>
            <div>
              <label className="block text-sm text-[#a8a29e] mb-1">Personnes</label>
              <input type="number" min="1" className="w-full bg-[#0c0a09] border border-[#292524] p-3 rounded text-white outline-none" placeholder="2" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#a8a29e] mb-1">Événement</label>
            <select className="w-full bg-[#0c0a09] border border-[#292524] p-3 rounded text-white outline-none">
              <option>Dîner classique</option>
              <option>Match de Rugby</option>
              <option>Match de Foot</option>
              <option>Anniversaire</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-[#d97706] text-[#0c0a09] font-bold py-4 rounded-lg hover:bg-[#fafaf9] transition-all uppercase tracking-widest mt-4">
            Confirmer la demande
          </button>
        </form>
      </div>
    </div>
  );
}