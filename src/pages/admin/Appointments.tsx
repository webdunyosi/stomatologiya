import { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  Calendar as CalendarIcon,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Appointments = () => {
  // Filtrlash uchun state'lar
  const [activeFilter, setActiveFilter] = useState('Barchasi');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock Qabullar ro'yxati
  const allAppointments = [
    { id: 1, patient: "Ali Valiyev", phone: "+998 90 111 22 33", doctor: "Dr. Jamshid Tursunov", service: "Aql tishini sug'urish", date: "12-Oktabr, 2024", time: "10:00", status: "Kutilmoqda" },
    { id: 2, patient: "Malika Karimova", phone: "+998 93 444 55 66", doctor: "Dr. Saida Karimova", service: "Tish tozalash (Air Flow)", date: "12-Oktabr, 2024", time: "11:30", status: "Bajarildi" },
    { id: 3, patient: "Sardor Ibragimov", phone: "+998 99 777 88 99", doctor: "Dr. Aziz Umarov", service: "Implantatsiya", date: "12-Oktabr, 2024", time: "14:00", status: "Bekor qilindi" },
    { id: 4, patient: "Nigina Rustamova", phone: "+998 88 123 45 67", doctor: "Dr. Jamshid Tursunov", service: "Breket o'rnatish", date: "13-Oktabr, 2024", time: "09:00", status: "Kutilmoqda" },
    { id: 5, patient: "Murod Aliyev", phone: "+998 97 987 65 43", doctor: "Dr. Saida Karimova", service: "Kariesni davolash", date: "13-Oktabr, 2024", time: "15:00", status: "Kutilmoqda" },
  ];

  // Filtrlash mantiqi
  const filteredAppointments = allAppointments.filter(app => {
    const matchesFilter = activeFilter === 'Barchasi' || app.status === activeFilter;
    const matchesSearch = app.patient.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          app.phone.includes(searchTerm) ||
                          app.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Holatiga qarab rang berish funksiyasi
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Bajarildi':
        return <span className="px-3 py-1 rounded-xl text-xs font-bold flex items-center w-fit gap-1.5 text-emerald-600 bg-emerald-50 border border-emerald-100"><CheckCircle2 size={14} /> Bajarildi</span>;
      case 'Bekor qilindi':
        return <span className="px-3 py-1 rounded-xl text-xs font-bold flex items-center w-fit gap-1.5 text-red-600 bg-red-50 border border-red-100"><XCircle size={14} /> Bekor qilingan</span>;
      default:
        return <span className="px-3 py-1 rounded-xl text-xs font-bold flex items-center w-fit gap-1.5 text-amber-600 bg-amber-50 border border-amber-100"><Clock size={14} /> Kutilmoqda</span>;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Sarlavha */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-gray-900">Qabullar ro'yxati</h2>
          <p className="text-sm text-gray-500 mt-1">Barcha rejalashtirilgan va o'tgan qabullarni boshqarish</p>
        </div>
        <Link to="/admin/qabullar/yangi" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-95 text-sm shadow-lg shadow-blue-500/30 text-center">
          + Yangi qabul qo'shish
        </Link>
      </div>

      {/* Filtrlash va Qidiruv qismi */}
      <div className="bg-white p-4 rounded-[24px] border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
        
        {/* Qidiruv */}
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Bemor, shifokor yoki raqam..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-50 border border-transparent pl-11 pr-4 py-2.5 rounded-xl outline-none focus:bg-white focus:border-blue-500/30 transition-all text-sm"
          />
        </div>

        {/* Tablar (Status bo'yicha) */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
          {['Barchasi', 'Kutilmoqda', 'Bajarildi', 'Bekor qilindi'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                activeFilter === filter 
                ? 'bg-gray-900 text-white shadow-md' 
                : 'bg-transparent text-gray-500 hover:bg-gray-100'
              }`}
            >
              {filter}
            </button>
          ))}
          <button className="p-2.5 rounded-xl bg-gray-50 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all ml-2 border border-gray-200">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* Jadval qismi */}
      <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50/80 text-gray-500 text-[11px] uppercase tracking-widest border-b border-gray-100">
                <th className="p-5 font-bold rounded-tl-[32px]">Bemor / Kontakt</th>
                <th className="p-5 font-bold">Shifokor / Xizmat</th>
                <th className="p-5 font-bold">Sana va Vaqt</th>
                <th className="p-5 font-bold">Holat</th>
                <th className="p-5 font-bold text-right rounded-tr-[32px]">Amallar</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-50">
              {filteredAppointments.length > 0 ? (
                filteredAppointments.map((app) => (
                  <tr key={app.id} className="hover:bg-blue-50/30 transition-colors group">
                    <td className="p-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900">{app.patient}</span>
                        <span className="text-xs text-gray-500 flex items-center gap-1 mt-1"><Phone size={12}/> {app.phone}</span>
                      </div>
                    </td>
                    <td className="p-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-700">{app.doctor}</span>
                        <span className="text-xs text-gray-500 mt-1">{app.service}</span>
                      </div>
                    </td>
                    <td className="p-5">
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-gray-900 flex items-center gap-1.5"><CalendarIcon size={14} className="text-blue-500"/> {app.date}</span>
                        <span className="text-xs text-gray-500 flex items-center gap-1.5"><Clock size={14} className="text-gray-400"/> Soat {app.time} da</span>
                      </div>
                    </td>
                    <td className="p-5">
                      {getStatusBadge(app.status)}
                    </td>
                    <td className="p-5 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {app.status === 'Kutilmoqda' && (
                          <>
                            <button className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all" title="Bajarildi qilib belgilash">
                              <CheckCircle2 size={16} />
                            </button>
                            <button className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all" title="Bekor qilish">
                              <XCircle size={16} />
                            </button>
                          </>
                        )}
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
                    Hech qanday qabul topilmadi.
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

export default Appointments;