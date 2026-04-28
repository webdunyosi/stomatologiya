import { useState } from 'react';
import { Bell, CalendarDays, UserPlus, AlertCircle, CheckCircle2 } from 'lucide-react';

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('all'); // 'all' yoki 'unread'

  // Mock bildirishnomalar ro'yxati
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'appointment', title: 'Yangi qabul belgilandi', message: "Ali Valiyev Dr. Jamshid Tursunovga qabulga yozildi.", time: '10 daqiqa oldin', read: false, icon: CalendarDays, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 2, type: 'patient', title: 'Yangi bemor ro\'yxatdan o\'tdi', message: "Malika Karimova tizimda yangi profil yaratdi.", time: '1 soat oldin', read: false, icon: UserPlus, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { id: 3, type: 'alert', title: 'Qabul bekor qilindi', message: "Sardor Ibragimov bugungi 14:00 dagi qabulni bekor qildi.", time: '2 soat oldin', read: true, icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
    { id: 4, type: 'system', title: 'Tizim yangilanishi', message: "StomaCare tizimi muvaffaqiyatli yangilandi.", time: 'Kecha, 18:00', read: true, icon: CheckCircle2, color: 'text-gray-600', bg: 'bg-gray-100' },
  ]);

  // Filtrlash
  const filteredNotifications = activeTab === 'all' 
    ? notifications 
    : notifications.filter(n => !n.read);

  // Barchasini o'qilgan deb belgilash
  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-4xl mx-auto">
      
      {/* Sarlavha qismi */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-gray-900 flex items-center gap-2">
            <Bell size={24} className="text-blue-600" /> Bildirishnomalar
          </h2>
          <p className="text-sm text-gray-500 mt-1">Tizimdagi so'nggi hodisalar va xabarlar</p>
        </div>
        <button 
          onClick={markAllAsRead}
          className="text-blue-600 text-sm font-bold hover:underline flex items-center gap-1.5"
        >
          <CheckCircle2 size={16} /> Barchasini o'qilgan qilish
        </button>
      </div>

      <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
        
        {/* Tablar */}
        <div className="flex items-center gap-6 px-6 border-b border-gray-100 pt-4">
          <button 
            onClick={() => setActiveTab('all')}
            className={`pb-4 text-sm font-bold border-b-2 transition-all ${activeTab === 'all' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
          >
            Barchasi
          </button>
          <button 
            onClick={() => setActiveTab('unread')}
            className={`pb-4 text-sm font-bold border-b-2 transition-all flex items-center gap-2 ${activeTab === 'unread' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
          >
            O'qilmagan 
            {notifications.filter(n => !n.read).length > 0 && (
              <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                {notifications.filter(n => !n.read).length}
              </span>
            )}
          </button>
        </div>

        {/* Xabarlar ro'yxati */}
        <div className="divide-y divide-gray-50">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notif) => (
              <div key={notif.id} className={`p-6 flex items-start gap-4 transition-colors hover:bg-gray-50/50 ${!notif.read ? 'bg-blue-50/20' : ''}`}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${notif.bg} ${notif.color}`}>
                  <notif.icon size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className={`text-base ${!notif.read ? 'font-bold text-gray-900' : 'font-semibold text-gray-700'}`}>
                      {notif.title}
                    </h3>
                    <span className="text-xs font-medium text-gray-400 whitespace-nowrap">{notif.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{notif.message}</p>
                </div>
                {!notif.read && (
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                )}
              </div>
            ))
          ) : (
            <div className="p-12 text-center text-gray-500">
              <Bell size={48} className="mx-auto text-gray-200 mb-4" />
              <p className="font-medium">Hozircha bildirishnomalar yo'q</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;