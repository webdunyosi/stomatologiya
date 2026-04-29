import { Award, Users, Heart, ShieldCheck, Target, Smile, CheckCircle2 } from 'lucide-react';

const About = () => {
  // Statistika ma'lumotlari
  const stats = [
    { id: 1, icon: <Award size={28} />, count: "15+", label: "Yillik tajriba" },
    { id: 2, icon: <Smile size={28} />, count: "10,000+", label: "Xursand bemorlar" },
    { id: 3, icon: <Users size={28} />, count: "25+", label: "Malakali mutaxassislar" },
    { id: 4, icon: <ShieldCheck size={28} />, count: "100%", label: "Sifat kafolati" },
  ];

  // Qadriyatlar (Sizning oldingi kartochkalaringizning kuchaytirilgan versiyasi)
  const values = [
    {
      id: 1,
      icon: <Award size={32} />,
      title: "Sifat kafolati",
      description: "Biz faqat xalqaro sertifikatlangan materiallardan va Germaniya texnologiyalaridan foydalanamiz."
    },
    {
      id: 2,
      icon: <Users size={32} />,
      title: "Professional jamoa",
      description: "Shifokorlarimiz Yevropa va AQSHda muntazam ravishda o'z malakalarini oshirib kelishadi."
    },
    {
      id: 3,
      icon: <Heart size={32} />,
      title: "G'amxo'rlik",
      description: "Har bir bemor uchun individual yondashuv, og'riqsiz muolaja va eng qulay sharoitlar yaratilgan."
    }
  ];

  // Shifokorlar jamoasi (Local rasmlar bilan)
  const team = [
    {
      id: 1,
      name: "Dr. Jamshid Tursunov",
      role: "Bosh shifokor, Ortodont",
      image: "/doktors/1.jpg" // Sizning public/doktors/1.jpg faylingiz
    },
    {
      id: 2,
      name: "Dr. Saida Karimova",
      role: "Oliy toifali Terapevt",
      image: "/doktors/2.png" // Sizning public/doktors/2.png faylingiz
    },
    {
      id: 3,
      name: "Dr. Aziz Umarov",
      role: "Jarroh-Implantolog",
      image: "/doktors/3.png" // Sizning public/doktors/3.png faylingiz
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 animate-in fade-in duration-700">
      
      {/* 1. HERO BANNER (Kichraytirilgan va ixchamlangan versiya) */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 rounded-[32px] md:rounded-[40px] p-8 md:p-10 lg:p-12 overflow-hidden shadow-2xl shadow-blue-900/20 text-white flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 mt-4">
        
        {/* Orqa fon bezaklari */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/30 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        
        <div className="relative z-10 max-w-xl space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs sm:text-sm font-bold tracking-wide shadow-sm">
             StomaCare Klinikasi
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight">
            Bizning maqsad — <br/> <span className="text-blue-200">mukammal tabassum</span>
          </h1>
          
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed opacity-90 max-w-lg">
            15 yildan ortiq vaqt davomida zamonaviy stomatologiya texnologiyalari va tajribali mutaxassislar yordamida bemorlarga xizmat ko'rsatib kelmoqdamiz.
          </p>
        </div>

        {/* Hero rasmi (Kichraytirilgan) */}
        <div className="relative z-10 hidden md:block w-full max-w-[380px] lg:max-w-[450px]">
          <div className="relative rounded-[24px] overflow-hidden border-[6px] border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent z-10 mix-blend-overlay"></div>
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600" 
              alt="StomaCare Clinic" 
              className="w-full h-[240px] lg:h-[280px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* 2. STATISTIKA BLOKI */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20 -mt-24 px-4 md:px-8">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white rounded-[24px] p-6 flex items-center gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
              {stat.icon}
            </div>
            <div>
              <h3 className="text-2xl font-black text-gray-900">{stat.count}</h3>
              <p className="text-sm font-bold text-gray-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </section>

      {/* 3. MISSYAMIZ VA TARIXIMIZ (Ixchamlashtirilgan) */}
      <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* Chap qism: Rasm */}
        <div className="w-full lg:w-1/2 relative group max-w-xl mx-auto lg:max-w-none">
          <div className="absolute inset-0 bg-blue-600 rounded-[32px] rotate-2 group-hover:rotate-4 transition-transform duration-500 opacity-15"></div>
          <img 
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" 
            alt="Doctor patient interaction" 
            className="relative rounded-[32px] w-full h-[320px] md:h-[400px] object-cover shadow-xl z-10 border border-gray-50"
          />
          {/* Rasm ustidagi xabar qutisi */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-lg z-20 flex items-center gap-4 border border-white/50">
            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
              <CheckCircle2 size={20} />
            </div>
            <p className="font-bold text-gray-800 text-xs sm:text-sm leading-snug">
              Bizning eng katta yutug'imiz — bu sizning og'riqsiz va chiroyli tabassumingizdir.
            </p>
          </div>
        </div>

        {/* O'ng qism: Matn */}
        <div className="w-full lg:w-1/2 space-y-5">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
            Zamonaviy yondashuv va <br className="hidden lg:block"/> xalqaro standartlar
          </h2>
          
          <div className="space-y-4 text-gray-500 text-base leading-relaxed">
            <p>
              StomaCare klinikasi o'z faoliyatini 2009-yilda kichik bir xona bilan boshlagan. Bugungi kunga kelib biz Toshkentdagi eng ilg'or uskunalar bilan jihozlangan, barcha turdagi stomatologik xizmatlarni ko'rsatuvchi yirik markazga aylandik.
            </p>
            <p>
              Bizning vazifamiz — odamlarni tish davolashdan qo'rqish hissini yo'qotish va har bir muolajani maksimal darajada qulay, og'riqsiz va xavfsiz o'tkazishdir.
            </p>
          </div>

          <ul className="space-y-3 pt-3">
            {[
              '100% og\'riqsiz davolash usullari', 
              'Germaniya va Shveytsariya uskunalari', 
              'Bolalar uchun maxsus sharoitlar'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-900 font-bold text-base">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Target size={12} />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. QADRIYATLARIMIZ */}
      <section className="bg-gray-50 rounded-[40px] p-8 md:p-16 text-center">
        <h2 className="text-3xl font-black text-gray-900 mb-4">Bizning qadriyatlarimiz</h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto text-lg">Biz nima uchun har kuni ishga kelamiz va nima bizni boshqalardan ajratib turadi?</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item) => (
            <div key={item.id} className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-500 group border border-gray-100">
              <div className="w-20 h-20 mx-auto bg-blue-50 text-blue-600 rounded-[24px] flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. JAMOAMIZ */}
      <section className="pb-12 text-center">
        <h2 className="text-3xl font-black text-gray-900 mb-4">Tajribali mutaxassislarimiz</h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto text-lg">Sizning sog'lig'ingiz ishonchli qo'llarda. Jamoamizdagi har bir shifokor o'z ishining ustasidir.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((doc) => (
            <div key={doc.id} className="group relative rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/5] relative">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-left translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-1">{doc.name}</h3>
                <p className="text-blue-300 font-bold">{doc.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;