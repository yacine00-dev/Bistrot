import { useRef } from 'react';

export function Atmosphere() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const atmosphereImages = [
    {
      url: "../../../img/PubStAubin_18.jpg",
      alt: "Bar Counter"
    },
    {
      url: "../../../public/img/exterieur2.jpg",
      alt: "Whiskey Glass"
    },
    {
      url: "../../../public/img/inteieur.jpg",
      alt: "Craft Cocktail"
    },
    {
      url: "../../../public/img/repas.jpg",
      alt: "Restaurant Interior"
    }
  ];

  return (
    <section id="atmosphere" className="py-24 lg:py-32 bg-[#0c0a09]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#d97706]/10 border border-[#d97706]/30 rounded-full mb-6">
            <span className="text-[#d97706] uppercase tracking-wider">Ambiance</span>
          </div>
          <h2 className="text-4xl lg:text-6xl text-[#fafaf9] mb-4">
            Une Atmosphère <span className="text-[#d97706]">Envoûtante</span>
          </h2>
          <p className="text-[#a8a29e] text-lg max-w-2xl mx-auto">
            Plongez dans notre univers chaleureux et élégant
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide pb-8"
        >
          <div className="flex gap-6 min-w-max">
            {atmosphereImages.map((image, index) => (
              <div 
                key={index}
                className="relative w-[400px] h-[500px] flex-shrink-0 overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {atmosphereImages.map((_, index) => (
            <div 
              key={index}
              className="w-2 h-2 rounded-full bg-[#d97706]/30 hover:bg-[#d97706] transition-colors cursor-pointer"
            ></div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
