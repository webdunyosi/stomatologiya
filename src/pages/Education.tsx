import { useState } from 'react';
import { FileText, Video, FileQuestion, Search, ChevronDown, ChevronUp } from 'lucide-react';

// --- MA'LUMOTLAR BAZASI (Kodni toza saqlash uchun) ---

const articles = [
  {
    category: "Og'iz gigiyenasi",
    title: "Kundalik tish yuvish texnikasi",
    desc: "Maksimal samaradorlik uchun tishlarni to'g'ri yuvishni o'rganing. \n\nKuniga ikki marta tish yuvish og'iz salomatligini saqlash uchun zarur. Yumshoq tukli cho'tka va ftoridli tish pastasidan foydalaning. Cho'tkani milkka nisbatan 45 daraja burchak ostida ushlab turing va yumshoq dumaloq harakatlarni qiling. Bakteriyalarni olib tashlash va nafasni yangilash uchun tilni artishni unutmang."
  },
  {
    category: "Og'iz gigiyenasi",
    title: "Tish ipining ahamiyati",
    desc: "Nima uchun tish ipi milkning kasalliklari va kariesni oldini olish uchun muhim. \n\nTish ipi cho'tka yetib bormaydigan tishlar orasidagi blyashka va oziq-ovqat zarralarini olib tashlaydi. Bu tishlar orasidagi kariesni oldini olishga va milkning kasalliklari xavfini kamaytirishga yordam beradi. Kuniga kamida bir marta, yaxshisi uxlashdan oldin tish ipidan foydalaning."
  },
  {
    category: "Tish salomatligi",
    title: "Tish parchalanishini tushunish",
    desc: "Karies nima sabab bo'ladi va uni qanday oldini olish mumkin. \n\nTish parchalanishi og'izdagi bakteriyalar tish emalini yo'q qiladigan kislotalar ishlab chiqarganda sodir bo'ladi. Bu jarayon shakarli va kislotali ovqatlar ta'sirida tezlashadi. Muntazam cho'tkalash, shakar iste'molini cheklash, ftoriddan foydalanish va muntazam stomatologik tekshiruvlardan o'tish orqali parchalanishning oldini oling."
  },
  {
    category: "Tish salomatligi",
    title: "Milkning kasalligini oldini olish",
    desc: "Milkning kasalligi belgilarini tanib oling va oldini olish strategiyalarini o'rganing. \n\nMilkning kasalligi gingivit bilan boshlanadi, qizil, shishgan, qon ketadigan milklarga olib keladi. Agar davolanmasa, u periodontitga o'tishi mumkin, bu esa tish yo'qotilishiga olib kelishi mumkin. To'g'ri cho'tkalash, tish ipi, muntazam tish tozalash va tamakidan voz kechish orqali milkning kasalligini oldini oling."
  },
  {
    category: "Parhez va ovqatlanish",
    title: "Sog'lom tishlar uchun ovqatlanish",
    desc: "Mustahkam tishlar va sog'lom og'izni ta'minlaydigan ovqatlar. \n\nKaltsiy, fosfor va vitaminlarga boy muvozanatli parhez tish salomatligini qo'llab-quvvatlaydi. Sut mahsulotlari, yashil bargli sabzavotlar, yong'oqlar va baliq ajoyib tanlovlardir. Shakarli taomlar va kislotali ichimliklarni cheklang. Suvni, ayniqsa ftorli suvni ichish oziq-ovqat zarralarini va bakteriyalarni yuvishga yordam beradi."
  },
  {
    category: "Bolalar stomatologiyasi",
    title: "Bolalar tish parvarishi",
    desc: "Chaqaloqlikdan to'spirinlikkacha bo'lgan bolalar uchun muhim og'iz salomatligi maslahatlari. \n\nHatto tishlar paydo bo'lishidan oldin chaqaloqning milklarini tozalashni boshlang. Tishlar paydo bo'lgandan so'ng, kuniga ikki marta guruch donasi o'lchamidagi ftoridli tish pastasi bilan yuvish. Birinchi stomatologik tekshiruvni bir yoshgacha rejalashtiring. Bolalarga to'g'ri cho'tkalash va tish ipidan foydalanish usullarini o'rgating va ular malakali bo'lguncha ularning texnikasini kuzatib boring."
  }
];

const videos = [
  { title: "To'g'ri cho'tkalash texnikasi", duration: "3:45" },
  { title: "Tish ipidan to'g'ri foydalanish", duration: "2:30" },
  { title: "Ildiz kanalini tushunish", duration: "5:12" },
  { title: "Tish implantlari haqida", duration: "4:20" },
  { title: "Milkning kasalliklarini oldini olish", duration: "3:55" },
  { title: "Bolaning birinchi stomatolog tashrifi", duration: "6:10" }
];

const faqs = [
  {
    question: "Stomatologga qancha tez-tez borish kerak?",
    answer: "Ko'pchilik odamlar muntazam tekshiruvlar va tozalash uchun har olti oyda bir marta stomatologga tashrif buyurishlari kerak. Biroq, ba'zi shaxslar og'iz salomatligi ehtiyojlariga qarab tez-tez tashrif buyurishlari kerak bo'lishi mumkin."
  },
  {
    question: "Tishlarni oqartirish xavfsizmi?",
    answer: "Ha, tishlarni oqartirish mutaxassis stomatolog nazorati ostida amalga oshirilganda mutlaqo xavfsizdir. Biz emalga zarar yetkazmaydigan tasdiqlangan va xavfsiz materiallardan foydalanamiz."
  },
  {
    question: "Stomatologik shoshilinch holat bo'lsa nima qilish kerak?",
    answer: "Agar qattiq og'riq, tish sinishi yoki shish paydo bo'lsa, zudlik bilan klinikamizga murojaat qiling. Biz shoshilinch bemorlarni navbatsiz qabul qilishga harakat qilamiz."
  },
  {
    question: "Elektr cho'tkalar qo'lda ishlatiladiganlardan yaxshiroqmi?",
    answer: "Elektr cho'tkalar tish tozalashda ko'pincha samaraliroq bo'ladi, chunki ular ko'proq tebranish va aylanish harakatlarini amalga oshiradi. Ammo to'g'ri texnika bilan qo'l cho'tkasi ham yetarli natija bera oladi."
  },
  {
    question: "Bolalar qachon ftoridli tish pastasidan foydalanishni boshlashlari kerak?",
    answer: "Bolalar birinchi tishi chiqqandan boshlab (taxminan 6 oylikdan) juda kichik miqdorda (guruch donasidek) ftoridli pastadan foydalanishi mumkin. 3 yoshdan keyin esa no'xatdek hajmda ishlatish tavsiya etiladi."
  }
];


// --- ASOSIY KOMPONENT ---

const Education = () => {
  // Tablar uchun state ('articles', 'videos', 'faq')
  const [activeTab, setActiveTab] = useState('articles');
  
  // FAQ uchun state (qaysi index ochiqligini saqlaydi)
  const [openFaq, setOpenFaq] = useState<number | null>(0); // Boshida 1-savol ochiq

  // FAQni ochib-yopish funksiyasi
  const toggleFaq = (index: number) => {
    // Agar bosilgan savol allaqachon ochiq bo'lsa, uni yopamiz (null), aks holda ochamiz (index)
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full font-sans bg-gray-50 min-h-screen pb-20">
      
      {/* Hero qismi */}
      <section className="bg-blue-600 text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Og'iz salomatligi ta'limi</h1>
          <p className="text-lg md:text-xl text-blue-100">
            Bilim sog'lom tabassumning kalitidir
          </p>
        </div>
      </section>

      {/* Asosiy kontent qismi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        
        {/* Tab tugmalari */}
        <div className="bg-gray-100 p-2 rounded-xl flex flex-col md:flex-row gap-2 max-w-5xl mx-auto mb-8 shadow-sm">
          <button 
            onClick={() => setActiveTab('articles')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'articles' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            <FileText size={20} />
            Maqolalar
          </button>
          
          <button 
            onClick={() => setActiveTab('videos')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'videos' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Video size={20} />
            Videolar
          </button>
          
          <button 
            onClick={() => setActiveTab('faq')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'faq' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            <FileQuestion size={20} />
            Savol-javoblar
          </button>
        </div>

        {/* Tab Kontentlari */}
        <div className="max-w-6xl mx-auto">
          
          {/* 1. MAQOLALAR TABI */}
          {activeTab === 'articles' && (
            <div className="animate-in fade-in duration-300">
              {/* Qidiruv qismi */}
              <div className="relative mb-8 max-w-5xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Maqolalarni qidiring..."
                  className="block w-full pl-11 pr-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm"
                />
              </div>

              {/* Maqolalar gridi */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((item, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                    <p className="text-blue-600 text-sm font-medium mb-3">{item.category}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. VIDEOLAR TABI */}
          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
              {videos.map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                  {/* Video rasm (placeholder) */}
                  <div className="h-48 bg-[#E5E7EB] flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                    <Video className="w-16 h-16 text-gray-400" />
                  </div>
                  {/* Video ma'lumoti */}
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm">Davomiyligi: {item.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3. SAVOL-JAVOBLAR (FAQ) TABI */}
          {activeTab === 'faq' && (
            <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 animate-in fade-in duration-300 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Tez-tez so'raladigan savollar</h2>
              
              <div className="divide-y divide-gray-100 border-t border-gray-100">
                {faqs.map((faq, index) => (
                  <div key={index} className="py-5">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between text-left focus:outline-none group"
                    >
                      <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {faq.question}
                      </span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 group-hover:text-blue-600 transition-colors" />
                      )}
                    </button>
                    
                    {/* Javob qismi - faqat tanlangani ochiladi */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openFaq === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};

export default Education;