import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, X } from 'lucide-react'; // Play va yopish ikonkalari qo'shildi

// 1. Xizmatlar bazasi
const allServices = [
  {
    id: 1,
    title: "Tish tozalash (Air Flow)",
    description: "Yuqori sifatli va og'riqsiz tish tozalash xizmati. Tishlaringizni tabiiy oqligini qaytaramiz.",
    price: "250,000",
    category: "Terapevt",
    youtubeId: "UhQzx8n8tFU"
  },
  {
    id: 2,
    title: "Kariesni davolash va plomba",
    description: "Zamonaviy kompozit materiallar yordamida tish kariesini og'riqsiz va ishonchli davolash.",
    price: "300,000",
    category: "Terapevt",
    youtubeId: "XdIxHrn_6bg"
  },
  {
    id: 3,
    title: "Tish oqartirish (Zoom 4)",
    description: "Tish emaliga zarar yetkazmagan holda tishlarni bir necha tonnagacha xavfsiz oqartirish.",
    price: "1,200,000",
    category: "Terapevt",
    youtubeId: "egf1SWGc1vk"
  },
  {
    id: 4,
    title: "Aql tishini sug'urish",
    description: "Murakkab o'sayotgan yoki shikastlangan aql tishlarini og'riqsiz jarrohlik yo'li bilan olish.",
    price: "400,000",
    category: "Jarrohlik",
    youtubeId: "--YF3cSg3JE"
  },
  {
    id: 5,
    title: "Tish implantatsiyasi",
    description: "Yo'qotilgan tishlar o'rniga yuqori sifatli titanium implantlarni o'rnatish xizmati.",
    price: "3,500,000",
    category: "Jarrohlik",
    youtubeId: "Q7r2J3oFzHY"
  },
  {
    id: 6,
    title: "Metall breketlar o'rnatish",
    description: "Tishlar qing'irligini to'g'rilash va go'zal tabassum yaratish uchun ishonchli breket tizimi.",
    price: "4,500,000",
    category: "Ortodont",
    youtubeId: "EecvCubadm0"
  },
  {
    id: 7,
    title: "Kapa (Invisalign) bilan davolash",
    description: "Ko'rinmas va yechiladigan kapalar yordamida tishlarni tekislashning zamonaviy usuli.",
    price: "8,000,000",
    category: "Ortodont",
    youtubeId: "1TF0bf116cg"
  }
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("Hammasi");
  
  // MODAL UCHUN YANGI STATE (Qaysi video ochiqligini saqlaydi)
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const categories = ["Hammasi", "Terapevt", "Jarrohlik", "Ortodont"];

  const filteredServices = activeCategory === "Hammasi" 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-1 sm:px-4 py-6 pb-24 md:pb-10 space-y-8 animate-in fade-in duration-500">
      
      {/* Sarlavha */}
      <div className="flex flex-col gap-4 px-3 sm:px-0">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Bizning xizmatlar</h2>
      </div>

      {/* Kategoriyalar */}
      <div className="flex gap-2 overflow-x-auto px-3 sm:px-0 pb-2 no-scrollbar scroll-smooth">
        {categories.map((cat, i) => (
          <button 
            key={i}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full font-bold whitespace-nowrap text-sm transition-all duration-300 ${
              activeCategory === cat 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                : 'bg-white text-gray-500 border border-gray-50 hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Xizmatlar Gridi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-3 sm:px-0">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div key={service.id} className="bg-white p-4 rounded-[30px] shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-50 flex flex-col">
              
              {/* VIDEO MUQOVASI (CUSTOM POSTER) */}
              <div 
                onClick={() => setActiveVideo(service.youtubeId)}
                className="relative aspect-video bg-gray-900 rounded-[22px] mb-4 overflow-hidden group cursor-pointer"
              >
                {/* YouTube'dan avtomatik rasmni tortib olish */}
                <img 
                  src={`https://img.youtube.com/vi/${service.youtubeId}/hqdefault.jpg`} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />

                {/* Markazdagi Play tugmasi */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-600 group-hover:scale-110">
                    <Play className="w-6 h-6 ml-1" fill="currentColor" />
                  </div>
                </div>
                
                {/* Kategoriya yorlig'i */}
                <div className="absolute top-3 left-3 z-10">
                   <span className="text-[9px] font-black uppercase tracking-wider text-blue-600 bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-lg shadow-sm border border-blue-100/50">
                    {service.category}
                  </span>
                </div>
              </div>
              
              {/* Ma'lumot qismi */}
              <div className="flex-1 px-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-xs mb-5 line-clamp-2 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Narx va tugma */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Narxi</span>
                  <span className="text-base font-black text-blue-600">{service.price} so'm</span>
                </div>
                <Link 
                  to="/qabul" 
                  state={{ selectedService: service.title }}
                  className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 active:scale-95 transition-all text-xs shadow-md shadow-blue-500/10"
                >
                  + Band qilish
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-gray-400 font-medium">
            Bu bo'limda hozircha xizmatlar mavjud emas.
          </div>
        )}
      </div>

      {/* MODAL OYNA (VIDEO PLAYERI) */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          
          {/* Qora fon bosilganda videoni yopish */}
          <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveVideo(null)}></div>
          
          {/* Video Konteyneri */}
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 z-10 border border-gray-800">
            
            {/* Yopish tugmasi */}
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
            >
              <X size={20} />
            </button>

            {/* YouTube Player (autoplay=1 bilan) */}
            <iframe
              className="w-full h-full border-0"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

    </div>
  );
};

export default Services;