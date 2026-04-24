import { useState } from 'react';
import { ShieldCheck, Wrench, Sparkles, Scissors, Smile, Baby } from 'lucide-react';

// --- MA'LUMOTLAR BAZASI ---

// Yuqoridagi 6 ta umumiy xizmat kartalari
const categories = [
  {
    id: 'profilaktik',
    title: "Profilaktik parvarish",
    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    count: 4,
    items: ["Muntazam tekshiruvlar", "Professional tozalash", "Ftorid bilan davolash"],
    more: "+1 ko'proq"
  },
  {
    id: 'tiklovchi',
    title: "Tiklovchi stomatologiya",
    icon: <Wrench className="w-8 h-8 text-blue-500" />,
    count: 5,
    items: ["Plombalar", "Tojlar", "Ko'priklar"],
    more: "+2 ko'proq"
  },
  {
    id: 'kosmetik',
    title: "Kosmetik stomatologiya",
    icon: <Sparkles className="w-8 h-8 text-purple-500" />,
    count: 4,
    items: ["Tishlarni oqartirish", "Vinerlar", "Bonding"],
    more: "+1 ko'proq"
  },
  {
    id: 'ogiz',
    title: "Og'iz jarrohlik",
    icon: <Scissors className="w-8 h-8 text-red-500" />,
    count: 4,
    items: ["Tish olish", "Donolik tishlarini olib tashlash", "Suyak greftlash"],
    more: "+1 ko'proq"
  },
  {
    id: 'ortodontiya',
    title: "Ortodontiya",
    icon: <Smile className="w-8 h-8 text-orange-500" />,
    count: 3,
    items: ["An'anaviy breketlar", "Shaffof tekislagichlar", "Retaynerlar"],
    more: null
  },
  {
    id: 'bolalar',
    title: "Bolalar stomatologiyasi",
    icon: <Baby className="w-8 h-8 text-pink-500" />,
    count: 4,
    items: ["Bolalar tekshiruvlari", "Ftorid laki", "Kariesni oldini olish ta'limi"],
    more: "+1 ko'proq"
  }
];

// Tablar ro'yxati
const tabs = [
  { id: 'profilaktik', label: 'Profilaktik' },
  { id: 'tiklovchi', label: 'Tiklovchi' },
  { id: 'kosmetik', label: 'Kosmetik' },
  { id: 'ogiz', label: "Og'iz" },
  { id: 'ortodontiya', label: 'Ortodontiya' },
  { id: 'bolalar', label: 'Bolalar' }
];

// Tab bosilganda chiqadigan batafsil xizmatlar
const detailedServices = {
  profilaktik: [
    { title: "Muntazam tekshiruvlar", desc: "Muammolarni erta aniqlash uchun keng qamrovli og'iz tekshiruvi", duration: "30-45 daq", freq: "Har 6 oyda", icon: <ShieldCheck className="w-6 h-6 text-green-600" /> },
    { title: "Professional tozalash", desc: "Sog'lomroq tish va milklar uchun blyashka va tosh to'planishini olib tashlash", duration: "45-60 daq", freq: "Har 6 oyda", icon: <ShieldCheck className="w-6 h-6 text-green-600" /> },
    { title: "Ftorid bilan davolash", desc: "Tish emalini mustahkamlash va kariesni oldini olish", duration: "15-20 daq", freq: "Tavsiya bo'yicha", icon: <ShieldCheck className="w-6 h-6 text-green-600" /> },
    { title: "Tish muhrlari", desc: "Parchalanishni oldini olish uchun azizlar uchun himoya qoplamasi", duration: "20-30 daq", freq: "Bir martalik", icon: <ShieldCheck className="w-6 h-6 text-green-600" /> }
  ],
  tiklovchi: [
    { title: "Plombalar", desc: "Tish rangidagi kompozit materiallar bilan kariesni ta'mirlash", duration: "30-60 daq", freq: "Kerak bo'lganda", icon: <Wrench className="w-6 h-6 text-blue-500" /> },
    { title: "Tojlar", desc: "Shikastlangan yoki zaif tishlarni qoplash va himoya qilish", duration: "2 tashrif", freq: "Kerak bo'lganda", icon: <Wrench className="w-6 h-6 text-blue-500" /> },
    { title: "Ko'priklar", desc: "Yo'qolgan tishlarni doimiy protezlar bilan almashtirish", duration: "2-3 tashrif", freq: "Kerak bo'lganda", icon: <Wrench className="w-6 h-6 text-blue-500" /> },
    { title: "Ildiz kanali terapiyasi", desc: "Shikastlangan pulpani olib tashlash orqali infektsiyalangan tishlarni saqlash", duration: "1-2 soat", freq: "Kerak bo'lganda", icon: <Wrench className="w-6 h-6 text-blue-500" /> },
    { title: "Tish implantlari", desc: "Doimiy tish almashtirish yechimi", duration: "Bir necha tashrif", freq: "Kerak bo'lganda", icon: <Wrench className="w-6 h-6 text-blue-500" /> }
  ],
  kosmetik: [
    { title: "Tishlarni oqartirish", desc: "Yorqinroq tabassum uchun professional oqartirish", duration: "60-90 daq", freq: "Xohlagancha", icon: <Sparkles className="w-6 h-6 text-purple-500" /> },
    { title: "Vinerlar", desc: "Tishlarning ko'rinishini yaxshilash uchun yupqa chinni qobiqlar", duration: "2-3 tashrif", freq: "Uzoq muddatli", icon: <Sparkles className="w-6 h-6 text-purple-500" /> },
    { title: "Bonding", desc: "Kompozit smola bilan chiplar va bo'shliqlarni ta'mirlash", duration: "30-60 daq", freq: "Kerak bo'lganda", icon: <Sparkles className="w-6 h-6 text-purple-500" /> },
    { title: "Tabassum o'zgartirish", desc: "Kompleks kosmetik davolash rejasi", duration: "Bir necha tashrif", freq: "Moslashtirilgan", icon: <Sparkles className="w-6 h-6 text-purple-500" /> }
  ],
  ogiz: [
    { title: "Tish olish", desc: "Muammoli tishlarni xavfsiz olib tashlash", duration: "30-60 daq", freq: "Kerak bo'lganda", icon: <Scissors className="w-6 h-6 text-red-500" /> },
    { title: "Donolik tishlarini olib tashlash", desc: "Uchinchi aziz tishlarini olib tashlash", duration: "45-90 daq", freq: "Odatda bir martalik", icon: <Scissors className="w-6 h-6 text-red-500" /> },
    { title: "Suyak greftlash", desc: "Implant qo'llab-quvvatlash uchun jag' suyagini qayta qurish", duration: "1-2 soat", freq: "Kerak bo'lganda", icon: <Scissors className="w-6 h-6 text-red-500" /> },
    { title: "Milkning jarrohlik", desc: "Ilg'or periodontal kasallikni davolash", duration: "1-2 soat", freq: "Kerak bo'lganda", icon: <Scissors className="w-6 h-6 text-red-500" /> }
  ],
  ortodontiya: [
    { title: "An'anaviy breketlar", desc: "Tishlarni to'g'rilash uchun metall qavs va simlar", duration: "18-24 oy", freq: "Uzoq muddatli davolash", icon: <Smile className="w-6 h-6 text-orange-500" /> },
    { title: "Shaffof tekislagichlar", desc: "Diskret tishlarni to'g'rilash uchun ko'rinmas paxmoqlar", duration: "12-18 oy", freq: "Uzoq muddatli davolash", icon: <Smile className="w-6 h-6 text-orange-500" /> },
    { title: "Retaynerlar", desc: "Ortodontik davolanishdan keyin tish pozitsiyasini saqlash", duration: "Davomiy", freq: "Davolashdan keyin", icon: <Smile className="w-6 h-6 text-orange-500" /> }
  ],
  bolalar: [
    { title: "Bolalar tekshiruvlari", desc: "Yoshga mos stomatologik tekshiruvlar", duration: "30-45 daq", freq: "Har 6 oyda", icon: <Baby className="w-6 h-6 text-pink-500" /> },
    { title: "Ftorid laki", desc: "Rivojlanayotgan tishlar uchun qo'shimcha himoya", duration: "10-15 daq", freq: "Har 6 oyda", icon: <Baby className="w-6 h-6 text-pink-500" /> },
    { title: "Kariesni oldini olish ta'limi", desc: "To'g'ri og'iz gigiyenasi odatlarini o'rgatish", duration: "15-20 daq", freq: "Har tashrifda", icon: <Baby className="w-6 h-6 text-pink-500" /> },
    { title: "Sport himoya qurillari", desc: "Faol bolalar uchun maxsus himoya", duration: "2 tashrif", freq: "Kerak bo'lganda", icon: <Baby className="w-6 h-6 text-pink-500" /> }
  ]
};

// --- ASOSIY KOMPONENT ---

const Services = () => {
  // Tabni boshqarish uchun state
  const [activeTab, setActiveTab] = useState('profilaktik');

  // activeTab state'iga qarab qaysi ma'lumotlarni ko'rsatishni belgilab olamiz
  const currentServices = detailedServices[activeTab as keyof typeof detailedServices];

  return (
    <div className="w-full font-sans bg-white pb-20">
      
      {/* 1. Hero Qismi */}
      <section className="bg-blue-600 text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Bizning xizmatlar va protseduralarimiz
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            Barcha ehtiyojlaringiz uchun keng qamrovli stomatologik xizmat
          </p>
        </div>
      </section>

      {/* 2. Kategoriyalar Gridi (Yuqori qism) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => setActiveTab(cat.id)}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                {cat.icon}
                <h3 className="font-bold text-xl text-gray-900">{cat.title}</h3>
              </div>
              <p className="text-gray-500 text-sm font-medium mb-4">{cat.count} xizmat mavjud</p>
              <ul className="space-y-3 mb-4">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 text-sm">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              {cat.more && (
                <p className="text-gray-400 text-sm">{cat.more}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 3. Xizmatlar Tafsilotlari (Tab va Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        
        {/* Tab tugmalari */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-4 no-scrollbar">
          <div className="flex bg-gray-100 rounded-full p-1.5 space-x-1 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-8 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab kontent (Xizmatlar) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in duration-500">
          {currentServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-lg hover:border-blue-100 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <div className="opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110 duration-300">
                  {service.icon}
                </div>
              </div>
              
              <p className="text-gray-600 mb-8 min-h-[48px]">
                {service.desc}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="border border-gray-200 text-gray-700 text-sm py-1.5 px-3 rounded-md bg-gray-50">
                  Davomiyligi: {service.duration}
                </span>
                <span className="border border-gray-200 text-gray-700 text-sm py-1.5 px-3 rounded-md bg-gray-50">
                  {service.freq}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Sug'urta va To'lov Variantlari */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sug'urta va to'lov variantlari</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            Biz ko'pgina asosiy stomatologik sug'urta rejalarini qabul qilamiz va sifatli stomatologik xizmatni hamma
            uchun ochiq qilish uchun moslashuvchan to'lov variantlarini taklif qilamiz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Sug'urta</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Imtiyozlaringizni maksimal darajada oshirish uchun asosiy provayderlar bilan ishlaymiz
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-xl text-gray-900 mb-4">To'lov rejalari</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Kattaroq protseduralar uchun moslashuvchan moliyalashtirish variantlari
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-xl text-gray-900 mb-4">A'zolik rejasi</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Sug'urtalanmagan bemorlar uchun maxsus tariflar
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;