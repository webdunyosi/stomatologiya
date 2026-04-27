import { useState } from 'react';
import { Link } from 'react-router-dom';

// 1. Barcha xizmatlar ma'lumotlar bazasi (Mock Data)
const allServices = [
  {
    id: 1,
    title: "Tish tozalash (Air Flow)",
    description: "Yuqori sifatli va og'riqsiz tish tozalash xizmati. Tishlaringizni tabiiy oqligini qaytaramiz.",
    price: "250,000",
    category: "Terapevt",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    title: "Kariesni davolash va plomba",
    description: "Zamonaviy kompozit materiallar yordamida tish kariesini og'riqsiz va ishonchli davolash.",
    price: "300,000",
    category: "Terapevt",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    title: "Tish oqartirish (Zoom 4)",
    description: "Tish emaliga zarar yetkazmagan holda tishlarni bir necha tonnagacha xavfsiz oqartirish.",
    price: "1,200,000",
    category: "Terapevt",
    image: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    title: "Aql tishini sug'urish",
    description: "Murakkab o'sayotgan yoki shikastlangan aql tishlarini og'riqsiz jarrohlik yo'li bilan olish.",
    price: "400,000",
    category: "Jarrohlik",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 5,
    title: "Tish implantatsiyasi",
    description: "Yo'qotilgan tishlar o'rniga yuqori sifatli titanium implantlarni o'rnatish xizmati.",
    price: "3,500,000",
    category: "Jarrohlik",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 6,
    title: "Metall breketlar o'rnatish",
    description: "Tishlar qing'irligini to'g'rilash va go'zal tabassum yaratish uchun ishonchli breket tizimi.",
    price: "4,500,000",
    category: "Ortodont",
    image: "https://images.unsplash.com/photo-1593054315313-0504100c61ba?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 7,
    title: "Kapa (Invisalign) bilan davolash",
    description: "Ko'rinmas va yechiladigan kapalar yordamida tishlarni tekislashning zamonaviy usuli.",
    price: "8,000,000",
    category: "Ortodont",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=400"
  }
];

const Home = () => {
  // 2. Tablarni boshqarish uchun State
  const [activeCategory, setActiveCategory] = useState("Hammasi");
  const categories = ["Hammasi", "Terapevt", "Jarrohlik", "Ortodont"];

  // 3. Tanlangan kategoriyaga qarab ma'lumotlarni filtrlaymiz
  const filteredServices = activeCategory === "Hammasi" 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Sarlavha va Qidiruv */}
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-extrabold text-blue-900">Xizmatlar</h2>
        <div className="md:hidden relative">
          <input 
            type="text" 
            placeholder="Qidirish..." 
            className="w-full bg-white border border-gray-200 px-4 py-3 rounded-2xl outline-none"
          />
        </div>
      </div>

      {/* Tab tugmalari */}
      <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((cat, i) => (
          <button 
            key={i}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-3 rounded-2xl font-bold whitespace-nowrap transition-all duration-300 ${
              activeCategory === cat 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-white text-gray-500 hover:bg-gray-100 border border-transparent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Xizmatlar Gridi (Filtrlangan ma'lumotlar chiqadi) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div key={service.id} className="bg-white p-5 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-blue-100 flex flex-col">
              
              {/* Rasm qismi */}
              <div className="aspect-video bg-gray-100 rounded-2xl mb-4 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Ma'lumot qismi */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                  {service.description}
                </p>
              </div>
              
              {/* Narx va tugma */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xl font-black text-blue-600">{service.price} so'm</span>
                <Link to="/qabul" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 active:scale-95 transition-all text-sm">
                  + Band qilish
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-10 text-center text-gray-500 font-medium">
            Bu bo'limda hozircha xizmatlar yo'q.
          </div>
        )}
      </div>

    </div>
  );
};

export default Home;