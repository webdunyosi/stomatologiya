import { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  UserPlus, 
  Star, 
  Phone, 
  Users, 
  CalendarDays 
} from 'lucide-react';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock Shifokorlar ro'yxati
  const allDoctors = [
    { id: 1, name: "Dr. Jamshid Tursunov", specialty: "Ortodont", phone: "+998 90 123 45 67", experience: "8 yil", patients: 1240, rating: 4.9, status: "Faol", color: "text-blue-600", bg: "bg-blue-50" },
    { id: 2, name: "Dr. Saida Karimova", specialty: "Terapevt", phone: "+998 93 234 56 78", experience: "5 yil", patients: 850, rating: 4.8, status: "Faol", color: "text-emerald-600", bg: "bg-emerald-50" },
    { id: 3, name: "Dr. Aziz Umarov", specialty: "Jarroh", phone: "+998 99 345 67 89", experience: "12 yil", patients: 2100, rating: 5.0, status: "Ta'tilda", color: "text-amber-600", bg: "bg-amber-50" },
    { id: 4, name: "Dr. Malika Rustamova", specialty: "Bolalar shifokori", phone: "+998 88 456 78 90", experience: "4 yil", patients: 420, rating: 4.7, status: "Faol", color: "text-purple-600", bg: "bg-purple-50" },
    { id: 5, name: "Dr. Sardor Aliyev", specialty: "Ortoped", phone: "+998 97 567 89 01", experience: "9 yil", patients: 1560, rating: 4.9, status: "Faol", color: "text-indigo-600", bg: "bg-indigo-50" },
  ];

  // Qidiruv bo'yicha filtrlash
  const filteredDoctors = allDoctors.filter(doc => 
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    doc.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Sarlavha qismi */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-gray-900">Shifokorlar</h2>
          <p className="text-sm text-gray-500 mt-1">Klinikadagi barcha shifokorlar va ularning ko'rsatkichlari</p>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-95 text-sm shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
          <UserPlus size={18} /> Yangi shifokor qo'shish
        </button>
      </div>

      {/* Qidiruv va Filtrlash */}
      <div className="bg-white p-4 rounded-[24px] border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Shifokor ismi yoki mutaxassisligi..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-50 border border-transparent pl-11 pr-4 py-2.5 rounded-xl outline-none focus:bg-white focus:border-blue-500/30 transition-all text-sm"
          />
        </div>
        <button className="p-2.5 rounded-xl bg-gray-50 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all border border-gray-200 self-end md:self-auto">
          <Filter size={18} />
        </button>
      </div>

      {/* Shifokorlar Kartochkalari (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc) => (
            <div key={doc.id} className="bg-white rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 overflow-hidden group">
              
              {/* Karta tepa qismi */}
              <div className="p-6 border-b border-gray-50 relative">
                
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black ${doc.bg} ${doc.color} shadow-sm group-hover:scale-110 transition-transform`}>
                    {doc.name.split(' ')[1].charAt(0)}
                  </div>
                  <button className="text-gray-400 hover:text-gray-900 transition-colors p-1">
                    <MoreVertical size={20} />
                  </button>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{doc.name}</h3>
                  <p className="text-sm font-bold text-blue-600 mt-1">{doc.specialty}</p>
                </div>

                <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  doc.status === 'Faol' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                }`}>
                  {doc.status}
                </div>
              </div>

              {/* Karta o'rta qismi (Statistika) */}
              <div className="p-6 grid grid-cols-2 gap-4 bg-gray-50/50">
                <div className="space-y-1">
                  <span className="text-xs text-gray-500 font-medium flex items-center gap-1.5"><Star size={14} className="text-amber-400 fill-amber-400"/> Reyting</span>
                  <p className="font-black text-gray-900">{doc.rating} <span className="text-xs text-gray-400 font-normal">/ 5.0</span></p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-gray-500 font-medium flex items-center gap-1.5"><Users size={14} className="text-blue-400"/> Bemorlar</span>
                  <p className="font-black text-gray-900">{doc.patients} <span className="text-xs text-gray-400 font-normal">ta</span></p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-gray-500 font-medium flex items-center gap-1.5"><CalendarDays size={14} className="text-purple-400"/> Tajriba</span>
                  <p className="font-black text-gray-900">{doc.experience}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-gray-500 font-medium flex items-center gap-1.5"><Phone size={14} className="text-emerald-400"/> Aloqa</span>
                  <p className="font-bold text-gray-900 text-sm truncate">{doc.phone}</p>
                </div>
              </div>

              {/* Karta pastki qismi (Tugmalar) */}
              <div className="p-4 flex gap-2">
                <button className="flex-1 bg-white border border-gray-200 text-gray-700 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors">
                  Profilni ko'rish
                </button>
                <button className="flex-1 bg-blue-50 text-blue-600 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-600 hover:text-white transition-colors">
                  Jadval
                </button>
              </div>

            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-gray-500 font-medium bg-white rounded-[32px] border border-gray-100">
            Kiritilgan ma'lumot bo'yicha shifokor topilmadi.
          </div>
        )}
      </div>

    </div>
  );
};

export default Doctors;