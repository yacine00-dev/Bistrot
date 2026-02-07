export function Footer() {
  return (
    <footer id="contact" className="bg-[#0c0a09] border-t border-[#d97706]/20 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl text-[#d97706] mb-4">Pub Saint Aubin</h3>
            <p className="text-[#a8a29e] mb-6">
             Le rendez-vous incontournable de la Victoire.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/pubsaintaubin" 
                className="w-10 h-10 bg-[#1c1917] rounded-full flex items-center justify-center text-[#d97706] hover:bg-[#d97706] hover:text-[#0c0a09] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/pubsaintaubin" 
                className="w-10 h-10 bg-[#1c1917] rounded-full flex items-center justify-center text-[#d97706] hover:bg-[#d97706] hover:text-[#0c0a09] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
             <a 
              href="mailto:contact@pub-saintaubin.fr" 
              className="w-10 h-10 bg-[#1c1917] rounded-full flex items-center justify-center text-[#d97706] hover:bg-[#d97706] hover:text-[#0c0a09] transition-colors" 
              aria-label="Envoyer un mail">
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg text-[#fafaf9] mb-4">Horaires d'Ouverture</h4>
            <div className="space-y-2 text-[#a8a29e]">
              <div className="flex justify-between">
                <span>Lundi - Dimanche</span>
                <span>11h00 - 01h00(Service)</span>
              </div>
              <div className="flex justify-between">
                <span>Lundi - Dimanche</span>
                <span>07h00 - 02h00</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg text-[#fafaf9] mb-4">Nous Trouver</h4>
            <address className="text-[#a8a29e] not-italic space-y-2">
              <p>5 Place de la Victoire,</p>
              <p>33000 Bordeaux, France</p>
              <p className="pt-2">
                <a href="tel:05 56 91 28 15" className="hover:text-[#d97706] transition-colors">
                  05 56 91 28 15
                </a>
              </p>
              <p>
                <a href="mailto:contact@pubsaintaubin.com" className="hover:text-[#d97706] transition-colors">
                  contact@pubsaintaubin.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-[#d97706]/20 pt-8 flex flex-col md:flex-row justify-between items-center text-[#a8a29e] text-sm">
          <p>&copy; 2026 Pub Saint Aubin. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#d97706] transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-[#d97706] transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
