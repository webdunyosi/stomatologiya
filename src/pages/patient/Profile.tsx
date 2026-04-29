import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// useAuth manzilingiz loyihangizdagi papka tuzilishiga qarab o'zgarishi mumkin:
import { useAuth } from '../../context/AuthContext'; 

import { 
  User, Phone, Mail, ShieldCheck, 
  CalendarDays, Settings, LogOut, 
  MapPin, Stethoscope,
  Bell, Globe, MessageSquare, Smartphone,
  Eye, EyeOff, CheckCircle2
} from 'lucide-react';

const Profile = () => {
  // Router va Auth hooklari (Tizimdan chiqish uchun)
  const navigate = useNavigate();
  const { logout } = useAuth();

  // Form ma'lumotlari
  const [name, setName] = useState("Alimardon Toshpo'latov");
  const [phone, setPhone] = useState("90 123 45 67");
  const [email, setEmail] = useState("alimardon@example.com");
  
  // Tablar uchun state
  const [activeTab, setActiveTab] = useState('shaxsiy');

  // Bildirishnomalar va Til uchun state'lar
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [tgNotif, setTgNotif] = useState(true);
  const [language, setLanguage] = useState('uz');

  // Parol state'lar
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  // ================= TOAST STATE VA FUNKSIYASI =================
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Toastni 3 soniyadan keyin avtomatik yopish
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Tugma bosilganda ishlaydigan funksiya
  const handleSave = (e: React.FormEvent, message: string) => {
    e.preventDefault(); // Formani sahifani yangilashdan to'xtatadi
    setToastMessage(message);
  };
  // =============================================================

  // ================= TIZIMDAN CHIQISH ==========================
  const handleLogout = () => {
    if (logout) {
      logout();
    } else {
      localStorage.removeItem('token'); 
      localStorage.removeItem('user');
    }
    navigate('/'); // Asosiy sahifaga yo'naltirish
  };
  // =============================================================

  const getInitials = (fullName: string) => {
    return fullName.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
  };

  const menuItems = [
    { id: 'shaxsiy', icon: <User size={20} />, label: "Shaxsiy ma'lumotlar" },
    { id: 'qabullar', icon: <CalendarDays size={20} />, label: "Mening qabullarim" },
    { id: 'xavfsizlik', icon: <ShieldCheck size={20} />, label: "Xavfsizlik" },
    { id: 'sozlamalar', icon: <Settings size={20} />, label: "Sozlamalar" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 animate-in fade-in duration-500 relative">
      
      {/* ================= TOAST NOTIFICATION UI ================= */}
      <div 
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-out flex items-center gap-3 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-green-100 ${
          toastMessage 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-10 opacity-0 invisible'
        }`}
      >
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
          <CheckCircle2 size={20} />
        </div>
        <span className="font-bold text-gray-800">{toastMessage}</span>
      </div>
      {/* ========================================================= */}


      {/* 1. YUQORI PROFIL KARTASI */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-[32px] p-8 md:p-10 text-white shadow-xl shadow-blue-900/20 mb-8 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl -ml-10 -mb-10"></div>
        
        <div className="relative z-10 w-28 h-28 flex-shrink-0 bg-white text-blue-700 rounded-[28px] rotate-3 flex items-center justify-center shadow-2xl border-4 border-white/20">
          <span className="text-4xl font-black -rotate-3">{getInitials(name)}</span>
        </div>
        
        <div className="relative z-10 text-center md:text-left flex-1">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-2">{name}</h1>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-blue-100 font-medium">
            <span className="flex items-center gap-2 bg-black/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
              <Phone size={16} /> +998 {phone}
            </span>
            <span className="flex items-center gap-2 bg-black/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
              <Mail size={16} /> {email}
            </span>
          </div>
        </div>
      </div>

      {/* 2. ASOSIY QISM (Menyu va Kontent) */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* CHAP QISM: Menyular */}
        <div className="w-full lg:w-72 flex-shrink-0">
          <div className="bg-white rounded-[32px] p-4 shadow-sm border border-gray-100 space-y-1">
            {menuItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === item.id 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className={`${activeTab === item.id ? 'scale-110 text-blue-600' : ''} transition-transform`}>
                  {item.icon}
                </div>
                {item.label}
              </button>
            ))}
            
            {/* Tizimdan chiqish tugmasi */}
            <div className="pt-4 mt-4 border-t border-gray-100">
              <button 
                onClick={handleLogout} 
                className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-bold text-red-500 hover:bg-red-50 transition-all group"
              >
                <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" /> Tizimdan chiqish
              </button>
            </div>
          </div>
        </div>

        {/* O'NG QISM: Asosiy Kontent */}
        <div className="flex-1">
          <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-gray-100 min-h-[500px]">
            
            {/* SHAXSIY MA'LUMOTLAR */}
            {activeTab === 'shaxsiy' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-black text-gray-900 mb-8">Shaxsiy ma'lumotlar</h2>
                
                <form onSubmit={(e) => handleSave(e, "Shaxsiy ma'lumotlar muvaffaqiyatli saqlandi!")} className="space-y-6 max-w-xl">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">To'liq ismingiz</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                      <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-gray-50 border border-gray-100 p-4 pl-12 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all font-bold text-gray-900"/>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Telefon raqam</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                        <Phone className="text-gray-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                        <span className="text-gray-400 font-bold border-r border-gray-200 pr-2">+998</span>
                      </div>
                      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-gray-50 border border-gray-100 p-4 pl-24 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all font-bold text-gray-900"/>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Elektron pochta</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-50 border border-gray-100 p-4 pl-12 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all font-bold text-gray-900"/>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button type="submit" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
                      Ma'lumotlarni saqlash
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* QABULLAR (O'zgarmadi) */}
            {activeTab === 'qabullar' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-black text-gray-900 mb-8">Bo'lajak qabullar</h2>
                <div className="bg-white border-2 border-blue-50 p-6 rounded-[28px] shadow-sm relative overflow-hidden group hover:border-blue-100 transition-colors">
                  <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
                  <div className="flex flex-col sm:flex-row justify-between gap-6 pl-2">
                    <div className="space-y-4">
                      <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider">Tasdiqlangan</div>
                      <h3 className="text-xl font-bold text-gray-900">Tish tozalash (Air Flow)</h3>
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-gray-500 font-medium text-sm mt-2">
                        <div className="flex items-center gap-2"><Stethoscope size={18} className="text-blue-500" /> Dr. Jamshid Tursunov</div>
                        <div className="flex items-center gap-2"><MapPin size={18} className="text-blue-500" /> StomaCare Asosiy Filial</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-2xl flex flex-col items-center justify-center min-w-[120px] shrink-0 border border-gray-100">
                      <CalendarDays size={24} className="text-gray-400 mb-1" />
                      <span className="font-bold text-gray-900">20 May, 2024</span>
                      <span className="text-blue-600 font-black text-lg mt-1">14:00</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* XAVFSIZLIK */}
            {activeTab === 'xavfsizlik' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-black text-gray-900 mb-2">Xavfsizlik</h2>
                <p className="text-gray-500 mb-8">Tizimga kirish parolingizni yangilang</p>
                
                <form onSubmit={(e) => handleSave(e, "Parolingiz muvaffaqiyatli o'zgartirildi!")} className="space-y-6 max-w-xl">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Joriy parol</label>
                    <div className="relative group">
                      <input type={showCurrentPassword ? "text" : "password"} placeholder="••••••••" className="w-full bg-gray-50 border border-gray-100 p-4 pr-14 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all font-bold text-gray-900"/>
                      <button type="button" onClick={() => setShowCurrentPassword(!showCurrentPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors p-1">
                        {showCurrentPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Yangi parol</label>
                    <div className="relative group">
                      <input type={showNewPassword ? "text" : "password"} placeholder="••••••••" className="w-full bg-gray-50 border border-gray-100 p-4 pr-14 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all font-bold text-gray-900"/>
                      <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors p-1">
                        {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all active:scale-95 shadow-lg shadow-gray-900/20">
                      Parolni o'zgartirish
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {/* SOZLAMALAR */}
            {activeTab === 'sozlamalar' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-black text-gray-900 mb-8">Sozlamalar</h2>
                <form onSubmit={(e) => handleSave(e, "Sozlamalar muvaffaqiyatli saqlandi!")} className="space-y-8 max-w-2xl">
                  
                  <div className="bg-gray-50/50 border border-gray-100 rounded-[28px] p-6 sm:p-8 hover:bg-gray-50 hover:shadow-md hover:border-blue-100 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shadow-inner"><Bell size={24} /></div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Bildirishnomalar</h3>
                        <p className="text-sm text-gray-500 font-medium mt-1">Xabarlar va eslatmalarni qanday qabul qilishni tanlang</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3"><Mail size={20} className="text-gray-400" /><div><p className="font-bold text-gray-900">Email xabarnomalar</p><p className="text-xs text-gray-500 mt-0.5">Qabullar va yangiliklar haqida</p></div></div>
                        <button type="button" onClick={() => setEmailNotif(!emailNotif)} className={`w-14 h-8 rounded-full transition-colors duration-300 relative focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${emailNotif ? 'bg-blue-600' : 'bg-gray-200'}`}><div className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-transform duration-300 shadow-sm ${emailNotif ? 'translate-x-7' : 'translate-x-1'}`} /></button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3"><Smartphone size={20} className="text-gray-400" /><div><p className="font-bold text-gray-900">SMS xabarnomalar</p><p className="text-xs text-gray-500 mt-0.5">Muhim eslatmalar uchun</p></div></div>
                        <button type="button" onClick={() => setSmsNotif(!smsNotif)} className={`w-14 h-8 rounded-full transition-colors duration-300 relative focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${smsNotif ? 'bg-blue-600' : 'bg-gray-200'}`}><div className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-transform duration-300 shadow-sm ${smsNotif ? 'translate-x-7' : 'translate-x-1'}`} /></button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3"><MessageSquare size={20} className="text-gray-400" /><div><p className="font-bold text-gray-900">Telegram bot orqali</p><p className="text-xs text-gray-500 mt-0.5">Tezkor aloqa va tasdiqlashlar</p></div></div>
                        <button type="button" onClick={() => setTgNotif(!tgNotif)} className={`w-14 h-8 rounded-full transition-colors duration-300 relative focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${tgNotif ? 'bg-blue-500' : 'bg-gray-200'}`}><div className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-transform duration-300 shadow-sm ${tgNotif ? 'translate-x-7' : 'translate-x-1'}`} /></button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50/50 border border-gray-100 rounded-[28px] p-6 sm:p-8 hover:bg-gray-50 hover:shadow-md hover:border-blue-100 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shadow-inner"><Globe size={24} /></div>
                      <div><h3 className="text-xl font-bold text-gray-900">Tizim tili</h3><p className="text-sm text-gray-500 font-medium mt-1">O'zingizga qulay tilni tanlang</p></div>
                    </div>
                    <div className="relative group">
                      <select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full bg-white border border-gray-200 p-4 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold text-gray-900 appearance-none cursor-pointer shadow-sm">
                        <option value="uz">O'zbek tili</option>
                        <option value="ru">Русский язык</option>
                        <option value="en">English</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-blue-600 font-bold">▼</div>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button type="submit" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-500/25">
                      O'zgarishlarni saqlash
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;