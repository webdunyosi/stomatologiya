import { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  UserPlus, 
  Phone, 
  CalendarDays, 
  History 
} from 'lucide-react';

const Patients = () => {
  // Qidiruv uchun state
  const [searchTerm, setSearchTerm] = useState('');

  // Mock Bemorlar ro'yxati
  const allPatients = [
    { id: 1, name: "Ali Valiyev", phone: "+998 90 111 22 33", lastVisit: "12-Okt, 2024", totalVisits: 5, balance: "Qarzdorlik yo'q", status: "Faol" },
    { id: 2, name: "Malika Karimova", phone: "+998 93 444 55 66", lastVisit: "10-Okt, 2024", totalVisits: 2, balance: "250,000 so'm", status: "Qarzdor" },
    { id: 3, name: "Sardor Ibragimov", phone: "+998 99 777 88 99", lastVisit: "15-Sen, 2024", totalVisits: 1, balance: "Qarzdorlik yo'q", status: "Faol" },
    { id: 4, name: "Nigina Rustamova", phone: "+998 88 123 45 67", lastVisit: "01-Okt, 2024", totalVisits: 8, balance: "Qarzdorlik yo'q", status: "Faol" },
    { id: 5, name: "Murod Aliyev", phone: "+998 97 987 65 43", lastVisit: "20-Avg, 2024", totalVisits: 3, balance: "Qarzdorlik yo'q", status: "Nofaol" },
  ];

  // Filtrlash mantiqi (Qidiruv bo'yicha)
  const filteredPatients = allPatients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    patient.phone.includes(searchTerm)
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Sarlavha qismi */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-gray-900">Bemorlar bazasi</h2>
          <p className="text-sm text-gray-500 mt-1">Klinikadagi barcha bemorlar ro'yxati va ularning tarixi</p>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-95 text-sm shadow-lg shadow-blue-500/30 flex items-center gap-2">
          <UserPlus size={18} /> Yangi bemor qo'shish
        </button>
      </div>

      {/* Qidiruv va Filtrlash */}
      <div className="bg-white p-4 rounded-[24px] border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Ism yoki telefon raqami orqali qidirish..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-50 border border-transparent pl-11 pr-4 py-2.5 rounded-xl outline-none focus:bg-white focus:border-blue-500/30 transition-all text-sm"
          />
        </div>
        <button className="p-2.5 rounded-xl bg-gray-50 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all border border-gray-200 self-end md:self-auto">
          <Filter size={18} />
        </button>
      </div>

      {/* Bemorlar Jadvali */}
      <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50/80 text-gray-500 text-[11px] uppercase tracking-widest border-b border-gray-100">
                <th className="p-5 font-bold rounded-tl-[32px]">Bemor F.I.Sh</th>
                <th className="p-5 font-bold">Aloqa uchun</th>
                <th className="p-5 font-bold">Oxirgi tashrif / Jami</th>
                <th className="p-5 font-bold">Balans holati</th>
                <th className="p-5 font-bold text-right rounded-tr-[32px]">Amallar</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-50">
              {filteredPatients.length > 0 ? (
                filteredPatients.map((patient) => (
                  <tr key={patient.id} className="hover:bg-blue-50/30 transition-colors group">
                    
                    {/* Bemor Ismi va Avatari */}
                    <td className="p-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold shadow-sm">
                          {patient.name.charAt(0)}
                        </div>
                        <div>
                          <span className="font-bold text-gray-900 block">{patient.name}</span>
                          <span className={`text-[10px] font-bold uppercase mt-0.5 px-2 py-0.5 rounded-md w-fit ${
                            patient.status === 'Faol' ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-500'
                          }`}>
                            {patient.status}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Telefon */}
                    <td className="p-5">
                      <div className="flex items-center gap-2 text-gray-700 font-medium">
                        <Phone size={14} className="text-gray-400" />
                        {patient.phone}
                      </div>
                    </td>

                    {/* Tashriflar */}
                    <td className="p-5">
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-gray-900 flex items-center gap-1.5">
                          <CalendarDays size={14} className="text-blue-500"/> {patient.lastVisit}
                        </span>
                        <span className="text-xs text-gray-500">Jami qabullar: {patient.totalVisits} ta</span>
                      </div>
                    </td>

                    {/* Balans */}
                    <td className="p-5">
                      <span className={`font-bold ${patient.balance.includes("Qarzdorlik") ? "text-emerald-600" : "text-red-500"}`}>
                        {patient.balance}
                      </span>
                    </td>

                    {/* Amallar */}
                    <td className="p-5 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 flex items-center gap-1.5 text-xs font-bold hover:bg-blue-600 hover:text-white transition-all" title="Karta tarixi">
                          <History size={14} /> Tarix
                        </button>
                        <button className="w-8 h-8 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-900 flex items-center justify-center transition-all">
                          <MoreVertical size={18} />
                        </button>
                      </div>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-10 text-center text-gray-500 font-medium">
                    Hech qanday bemor topilmadi.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Patients;