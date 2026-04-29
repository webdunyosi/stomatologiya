import { Award, Star, CalendarDays, Stethoscope, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Doctors = () => {
  const navigate = useNavigate();

  // Shifokorlar bazasi (Sizning public/doktors/ papkangizdagi rasmlar bilan)
  const doctors = [
    {
      id: 1,
      name: "Dr. Jamshid Tursunov",
      role: "Bosh shifokor, Ortodont",
      experience: "15 yillik tajriba",
      patients: "5000+",
      rating: "5.0",
      description: "Tishlarni to'g'rilash va zamonaviy breket tizimlari bo'yicha yetakchi mutaxassis. AQSH va Germaniyada malaka oshirgan.",
      image: "/doktors/1.jpg",
      services: ["Metall breketlar", "Invisalign (Kapa)"]
    },
    {
      id: 2,
      name: "Dr. Saida Karimova",
      role: "Oliy toifali Terapevt",
      experience: "12 yillik tajriba",
      patients: "8000+",
      rating: "4.9",
      description: "Murakkab karieslarni davolash, tish kanallarini tozalash va estetik plombalash bo'yicha tajribali shifokor.",
      image: "/doktors/2.png",
      services: ["Karies davolash", "Tish oqartirish"]
    },
    {
      id: 3,
      name: "Dr. Aziz Umarov",
      role: "Jarroh-Implantolog",
      experience: "10 yillik tajriba",
      patients: "3000+",
      rating: "5.0",
      description: "Og'riqsiz tish sug'urish va xalqaro standartlar asosida implant o'rnatish bo'yicha professional jarroh.",
      image: "/doktors/3.png",
      services: ["Implantatsiya", "Aql tishini sug'urish"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 pt-8 animate-in fade-in duration-700 space-y-12 ">
      
      {/* 1. Sarlavha qismi */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-wide">
          <Stethoscope size={18} /> Bizning jamoa
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
          Sog'lig'ingiz ishonchli <br className="hidden sm:block" />
          <span className="text-blue-600">qo'llarda</span>
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          Klinikamizda o'z ishining chinakam ustalari, xalqaro tajribaga ega oliy toifali mutaxassislar xizmat ko'rsatadi.
        </p>
      </div>

      {/* 2. Shifokorlar ro'yxati (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctor) => (
          <div 
            key={doctor.id} 
            className="bg-white rounded-[32px] p-4 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full"
          >
            {/* Rasm qismi */}
            <div className="relative aspect-[4/3] sm:aspect-square mb-6 rounded-[24px] overflow-hidden bg-gray-100">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Reyting (Rasm ustida) */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-bold text-gray-900">{doctor.rating}</span>
              </div>
            </div>

            {/* Ma'lumotlar qismi */}
            <div className="flex flex-col flex-1">
              <div className="mb-4">
                <p className="text-blue-600 font-bold text-sm mb-1">{doctor.role}</p>
                <h3 className="text-2xl font-black text-gray-900">{doctor.name}</h3>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                {doctor.description}
              </p>

              {/* Statistika va xizmatlar */}
              <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-gray-100">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Award size={16} />
                    <span className="text-xs font-bold uppercase">Tajriba</span>
                  </div>
                  <p className="font-bold text-gray-900">{doctor.experience}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Star size={16} />
                    <span className="text-xs font-bold uppercase">Bemorlar</span>
                  </div>
                  <p className="font-bold text-gray-900">{doctor.patients}</p>
                </div>
              </div>

              {/* Tugma */}
              <button 
                onClick={() => navigate('/qabul')}
                className="w-full bg-gray-50 hover:bg-blue-600 text-gray-900 hover:text-white flex items-center justify-between px-6 py-4 rounded-2xl font-bold transition-all duration-300 group/btn"
              >
                <span className="flex items-center gap-2">
                  <CalendarDays size={20} className="group-hover/btn:scale-110 transition-transform" />
                  Qabulga yozilish
                </span>
                <ChevronRight size={20} className="text-gray-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Doctors;