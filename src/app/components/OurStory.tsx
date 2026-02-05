export function OurStory() {
  return (
    <section id="story" className="py-24 lg:py-32 bg-[#0c0a09]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1703621366518-ed272b801a57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwcHViJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMjQwMTE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Vintage Pub Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#d97706]/10"></div>
          </div>

          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-[#d97706]/10 border border-[#d97706]/30 rounded-full">
              <span className="text-[#d97706] uppercase tracking-wider">Notre Histoire</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl text-[#fafaf9]">
              Un Sanctuaire pour les <span className="text-[#d97706]">Épicuriens</span>
            </h2>
            
            <div className="space-y-4 text-[#a8a29e] leading-relaxed">
              <p>
                Depuis des décennies, le Pub Saint Aubin s'impose comme le cœur battant de la Place de la Victoire. Derrière sa façade historique,
                 c'est toute l'âme de Bordeaux qui s'exprime : un mélange unique de ferveur sportive,
                 d'effervescence étudiante et de convivialité gasconne.
              </p>
              <p>
                Ici, on ne vient pas seulement pour boire une pinte ; on vient pour vivre l'instant. 
                Que ce soit pour la tension d'un match de l'UBB sur nos écrans géants,
                une partie de billard entre deux cours ou un après-midi ensoleillé sur notre immense terrasse, le 'Saint Aubin' est le refuge de ceux qui aiment la vie.
              </p>
              <p>
                Notre sélection de bières artisanales et notre cuisine de brasserie généreuse sont là pour accompagner vos meilleurs souvenirs.
                 Bienvenue chez vous, au centre de tout, là où Bordeaux ne dort jamais
              </p>
            </div>

            <div className="flex items-center space-x-4 pt-6">
              <div className="h-px flex-1 bg-[#d97706]/30"></div>
              <span className="text-[#d97706] text-sm tracking-widest">EST. 2014</span>
              <div className="h-px flex-1 bg-[#d97706]/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
