import { useState } from "react"
import { Link } from "react-router-dom"
import {
  ShieldCheck,
  Clock,
  Award,
  Users,
  ArrowRight,
  PhoneCall,
  Star,
  CheckCircle2,
  Play,
  X,
} from "lucide-react"

const Home = () => {
  // MODAL UCHUN STATE
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  // Asosiy sahifada ko'rsatiladigan Top 3 ta xizmat (To'liq ma'lumotlari bilan)
  const topServices = [
    {
      id: 1,
      title: "Tish tozalash (Air Flow)",
      description:
        "Yuqori sifatli va og'riqsiz tish tozalash xizmati. Tishlaringizni tabiiy oqligini qaytaramiz.",
      price: "250,000",
      category: "Terapevt",
      youtubeId: "UhQzx8n8tFU",
    },
    {
      id: 2,
      title: "Tish implantatsiyasi",
      description:
        "Yo'qotilgan tishlar o'rniga umrbod kafolatga ega yuqori sifatli titanium implantlar.",
      price: "3,500,000",
      category: "Jarrohlik",
      youtubeId: "Q7r2J3oFzHY",
    },
    {
      id: 3,
      title: "Ortodontiya (Breketlar)",
      description:
        "Zamonaviy breket tizimlari yordamida har qanday yoshda go'zal tabassumga erishing.",
      price: "4,500,000",
      category: "Ortodont",
      youtubeId: "EecvCubadm0",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto space-y-16 pb-0 md:pb-12 animate-in fade-in duration-700">
      {/* 1. HERO BANNER - Ixchamlashtirilgan va Animatsiyalangan */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 rounded-[32px] md:rounded-[48px] p-6 md:p-10 lg:p-12 overflow-hidden shadow-2xl shadow-blue-600/30 text-white mt-4 mx-2 md:mx-0 group animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Orqa fon animatsion effektlari */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl animate-pulse duration-1000"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[300px] h-[300px] bg-indigo-400/30 rounded-full blur-2xl animate-pulse duration-700 delay-150"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Chap qism: Matnlar */}
          <div className="space-y-5 lg:space-y-6">
            {/* Status yorlig'i */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm animate-in slide-in-from-left-4 duration-500 delay-200">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-blue-50">
                Bugun qabulga ochiqmiz
              </span>
            </div>

            {/* Sarlavha */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight text-white animate-in slide-in-from-bottom-4 duration-700 delay-300">
              Sog'lom tabassum — <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white drop-shadow-sm">
                sizning muvaffaqiyatingiz
              </span>
            </h1>

            {/* Qisqa matn */}
            <p className="text-blue-100 text-sm sm:text-base lg:text-lg max-w-md leading-relaxed opacity-90 animate-in slide-in-from-bottom-4 duration-700 delay-500">
              Navoiydagi eng zamonaviy uskunalarga ega xalqaro darajadagi
              stomatologiya klinikasi. Og'riqsiz davolash kafolati.
            </p>

            {/* Tugmalar */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 animate-in slide-in-from-bottom-4 duration-700 delay-700">
              <Link
                to="/qabul"
                className="bg-white text-blue-700 px-6 sm:px-8 py-3.5 rounded-2xl font-black text-sm sm:text-base hover:bg-gray-50 hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all flex items-center gap-2 group/btn"
              >
                Qabulga yozilish{" "}
                <ArrowRight
                  size={18}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/xizmatlar"
                className="px-6 sm:px-8 py-3.5 rounded-2xl font-bold text-sm sm:text-base text-white/90 hover:text-white hover:bg-white/10 active:bg-white/20 transition-all border border-transparent hover:border-white/30"
              >
                Xizmatlarni ko'rish
              </Link>
            </div>
          </div>

          {/* O'ng qism: Rasm va Tajriba yorlig'i */}
          <div className="relative hidden md:block w-full max-w-md mx-auto lg:max-w-none animate-in zoom-in-95 duration-1000 delay-300">
            {/* Rasm orqasidagi porlash (Glow) */}
            <div className="absolute inset-0 bg-blue-400 rounded-[28px] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>

            <div className="relative rounded-[28px] overflow-hidden border-[6px] border-white/10 shadow-2xl group-hover:border-white/20 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent z-10 mix-blend-overlay"></div>
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
                alt="Stomatologik muolaja"
                className="w-full h-[280px] lg:h-[360px] object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>

            {/* Tajriba yorlig'i (Animatsiyali) */}
            <div className="absolute -bottom-5 -left-5 bg-white p-4 sm:p-5 rounded-3xl shadow-2xl shadow-blue-900/40 z-20 animate-bounce hover:animate-none hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-blue-50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 rounded-[14px] flex items-center justify-center text-blue-600 shadow-inner">
                  <Star size={24} fill="currentColor" />
                </div>
                <div>
                  <h4 className="text-2xl lg:text-3xl font-black text-gray-900 leading-none mb-0.5">
                    10+
                  </h4>
                  <p className="text-[10px] sm:text-xs font-black text-gray-400 uppercase tracking-widest">
                    Yillik tajriba
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AFZALLIKLARIMIZ (Silliq animatsiyalar bilan takomillashtirilgan) */}
      <section className="p-0 md:p-4 mx-2 md:mx-0">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
            Nega aynan StomaCare?
          </h2>
          <p className="text-gray-500 mt-3 text-lg">
            Bemorlarimiz bizga nima uchun ishonishadi
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            {
              icon: <ShieldCheck size={32} />,
              title: "100% Xavfsizlik",
              desc: "Barcha asboblar 5 bosqichli sterilizatsiyadan o'tadi.",
            },
            {
              icon: <Users size={32} />,
              title: "Malakali shifokorlar",
              desc: "Xalqaro toifadagi tajribali mutaxassislar jamoasi.",
            },
            {
              icon: <Award size={32} />,
              title: "Zamonaviy uskunalar",
              desc: "Germaniya va Shveytsariyaning eng so'nggi texnologiyalari.",
            },
            {
              icon: <Clock size={32} />,
              title: "Kafolatlangan natija",
              desc: "Barcha xizmatlarimizga rasmiy kafolat beramiz.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2 hover:border-blue-100 transition-all duration-500 ease-out group"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 ease-out shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-500">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MASHHUR XIZMATLAR (Endi Xizmatlar sahifasidagi dizaynda!) */}
      <section className="bg-gray-50 rounded-[40px] p-0 md:p-4 mx-2 md:mx-0">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-black text-gray-900">
              Ommabop xizmatlar
            </h2>
            <p className="text-gray-500 mt-2">
              Bemorlarimiz eng ko'p murojaat qiladigan yo'nalishlar
            </p>
          </div>
          <Link
            to="/xizmatlar"
            className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-2 group bg-white px-6 py-3 rounded-2xl shadow-sm hover:shadow-md transition-all"
          >
            Barchasini ko'rish{" "}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* XIZMATLAR GRIDI (Professional Kartochkalar) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topServices.map((service) => (
            <div
              key={service.id}
              className="bg-white p-4 rounded-[30px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-50 flex flex-col"
            >
              {/* VIDEO MUQOVASI */}
              <div
                onClick={() => setActiveVideo(service.youtubeId)}
                className="relative aspect-video bg-gray-900 rounded-[22px] mb-4 overflow-hidden group cursor-pointer"
              >
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
                <div className="absolute top-3 left-3 z-10 pointer-events-none">
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
                  <span className="text-[10px] text-gray-400 font-bold uppercase">
                    Narxi
                  </span>
                  <span className="text-base font-black text-blue-600">
                    {service.price} so'm
                  </span>
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
          ))}
        </div>
      </section>

      {/* 4. SHOSHILINCH ALOQA BLOKI */}
      <section className="p-0 md:p-4 mx-2 md:mx-0">
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-[40px] p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl shadow-blue-900/20">
          {/* Orqa fon bezaklari (Glow effektlari) */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-[80px] opacity-40 -mr-20 -mt-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full blur-[60px] opacity-20 -ml-20 -mb-20 pointer-events-none"></div>

          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Tish og'rig'i qiynayaptimi?
            </h2>
            <p className="text-blue-100 text-lg lg:text-xl opacity-90">
              Vaqtni yo'qotmang. Shoshilinch yordam uchun biz bilan hoziroq
              bog'laning. Navbatsiz qabul qilamiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 mt-8">
              <div className="flex items-center gap-3 text-white font-medium">
                <CheckCircle2 className="text-blue-400 w-6 h-6" /> Rentgen
                diagnostika
              </div>
              <div className="flex items-center gap-3 text-white font-medium">
                <CheckCircle2 className="text-blue-400 w-6 h-6" />{" "}
                Og'riqsizlantirish
              </div>
            </div>
          </div>

          <div className="relative z-10 w-full md:w-auto mt-4 md:mt-0">
            {/* LIQUID GLASS TUGMA - YORQIN VA ANIMATSIYALI */}
            <a
              href="tel:+998711234567"
              className="group relative w-full md:w-auto inline-flex items-center justify-center gap-4 px-3 md:px-8 py-4 md:py-5 bg-white rounded-2xl text-blue-900 font-black text-lg md:text-xl shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:shadow-blue-400/50 hover:-translate-y-1 hover:scale-[1.02] active:scale-95 transition-all duration-500 ease-out overflow-hidden"
            >
              {/* Oqib o'tuvchi yorug'lik effekti (Liquid Shine) */}
              <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-blue-50/60 to-transparent -skew-x-12 z-0 pointer-events-none"></div>

              {/* Ikonka bloki - Yorqin ko'k fon bilan */}
              <div className="relative z-10 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500 ease-out">
                {/* Animatsiyali Ikonka (Tebranish va kattalashish) */}
                <PhoneCall className="w-5 h-5 text-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:-rotate-12 group-hover:scale-110 origin-center" />
              </div>

              {/* Raqam matni */}
              <span className="relative z-10 tracking-wide">
                +998 71 123 45 67
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* MODAL OYNA (Video Player) */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setActiveVideo(null)}
          ></div>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl z-10 border border-gray-800">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
            >
              <X size={20} />
            </button>
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
  )
}

export default Home
