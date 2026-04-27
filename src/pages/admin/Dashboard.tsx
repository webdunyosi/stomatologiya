import { 
  Users, 
  CalendarDays, 
  Wallet, 
  TrendingUp, 
  MoreVertical,
  Clock,
  CheckCircle2
} from 'lucide-react';

const Dashboard = () => {
  // Mock Statistika
  const stats = [
    { title: "Jami Bemorlar", value: "1,254", trend: "+12%", trendUp: true, icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Bugungi Qabullar", value: "24", trend: "+4 ta", trendUp: true, icon: CalendarDays, color: "text-indigo-600", bg: "bg-indigo-50" },
    { title: "Oylik Daromad", value: "85.4M", trend: "+15%", trendUp: true, icon: Wallet, color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "Faol Shifokorlar", value: "12", trend: "O'zgarishsiz", trendUp: true, icon: TrendingUp, color: "text-orange-600", bg: "bg-orange-50" },
  ];

  // Mock Oxirgi Qabullar
  const recentAppointments = [
    { id: 1, patient: "Ali Valiyev", doctor: "Dr. Jamshid Tursunov", time: "10:00", date: "Bugun", status: "Kutilmoqda", statusColor: "text-amber-600 bg-amber-50" },
    { id: 2, patient: "Malika Karimova", doctor: "Dr. Saida Karimova", time: "11:30", date: "Bugun", status: "Bajarildi", statusColor: "text-emerald-600 bg-emerald-50" },
    { id: 3, patient: "Sardor Ibragimov", doctor: "Dr. Aziz Umarov", time: "14:00", date: "Bugun", status: "Kutilmoqda", statusColor: "text-amber-600 bg-amber-50" },
    { id: 4, patient: "Nigina Rustamova", doctor: "Dr. Jamshid Tursunov", time: "16:00", date: "Bugun", status: "Kutilmoqda", statusColor: "text-amber-600 bg-amber-50" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500 relative">
      
      {/* Sarlavha qismi */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-gray-900">Boshqaruv paneli</h2>
          <p className="text-sm text-gray-500 mt-1">Klinikaning umumiy holati va bugungi ko'rsatkichlar</p>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-95 text-sm shadow-lg shadow-blue-500/30">
          + Yangi qabul qo'shish
        </button>
      </div>

      {/* 1. Statistika Kartochkalari */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${stat.trendUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                {stat.trend}
              </span>
            </div>
            <div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-3xl font-black text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Pastki qism: Jadval va Qo'shimcha ma'lumotlar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Chap panel - Oxirgi qabullar (Kengroq) */}
        <div className="lg:col-span-2 bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">Bugungi qabullar</h3>
            <button className="text-blue-600 text-sm font-bold hover:underline">Barchasini ko'rish</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="p-4 font-bold">Bemor</th>
                  <th className="p-4 font-bold">Shifokor</th>
                  <th className="p-4 font-bold">Vaqt</th>
                  <th className="p-4 font-bold">Holat</th>
                  <th className="p-4 font-bold text-right">Amal</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {recentAppointments.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="p-4">
                      <p className="font-bold text-gray-900">{row.patient}</p>
                    </td>
                    <td className="p-4 text-gray-600">{row.doctor}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-gray-900 font-medium">
                        <Clock size={16} className="text-gray-400" />
                        {row.time}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-xl text-xs font-bold flex items-center w-fit gap-1.5 ${row.statusColor}`}>
                        {row.status === 'Bajarildi' ? <CheckCircle2 size={14} /> : <Clock size={14} />}
                        {row.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* O'ng panel - Shifokorlar ro'yxati (Torroq) */}
        <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Shifokorlar bandligi</h3>
          </div>
          
          <div className="space-y-6">
            {[
              { name: "Dr. Jamshid Tursunov", role: "Ortodont", progress: 85, patients: 8 },
              { name: "Dr. Saida Karimova", role: "Terapevt", progress: 60, patients: 5 },
              { name: "Dr. Aziz Umarov", role: "Jarroh", progress: 30, patients: 2 },
            ].map((doc, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <p className="font-bold text-gray-900">{doc.name}</p>
                    <p className="text-xs text-gray-500">{doc.role}</p>
                  </div>
                  <span className="font-bold text-gray-700">{doc.patients} ta bemor</span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${doc.progress > 80 ? 'bg-red-500' : doc.progress > 50 ? 'bg-blue-500' : 'bg-emerald-500'}`} 
                    style={{ width: `${doc.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="mt-auto pt-6 text-blue-600 text-sm font-bold hover:underline w-full text-center">
            Barcha shifokorlarni ko'rish
          </button>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;