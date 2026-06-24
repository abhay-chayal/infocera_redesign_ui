import { careersPageData } from '../../data/careersPageData';
import { SectionHeader } from '../shared/SectionHeader';

export const CultureGallery = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#0B1120]">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title={
            <>
              Inside <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Infocera</span>
            </>
          }
          subtitle="A glimpse into our daily life, collaboration, and celebrations."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {careersPageData.gallery.map((img, idx) => (
            <div 
              key={idx}
              className={`relative rounded-3xl overflow-hidden group border border-white/5 shadow-xl ${
                idx === 0 ? 'md:col-span-2 md:row-span-2' : 
                idx === 3 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={img} 
                alt={`Culture Image ${idx + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
