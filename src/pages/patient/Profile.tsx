import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { User, Phone, Lock, Calendar, Settings, LogOut, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  // Tablarni boshqarish uchun state
  const [activeTab, setActiveTab] = useState('info'); // 'info', 'appointments', 'security'
  
  // Form inputlari uchun state
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || ''
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Bu yerda backendga ma'lumot jo'natish logikasi bo'ladi
    // Hozircha faqat saqlandi degan xabarni ko'rsatamiz
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Agar foydalanuvchi login qilmagan bo'lsa (garchi bunga yo'l qo'ymasligimiz kerak bo'lsa ham)
  if (!user) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Siz tizimga kirmagansiz</h2>
        <button onClick={() => navigate('/login')} className="bg-blue-600 text-white px-6 py-2 rounded-xl">Kirish</button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* Profil Sarlavhasi va Avatar */}
      <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
        
        <div className="w-24 h-24 bg-white rounded-full p-1 relative z-10 mt-8 md:mt-12 shadow-lg">
          <div className="w-full h-full bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
            <User size={40} />
          </div>
        </div>
        
        <div className="text-center md:text-left relative z-10 mt-4 md:mt-14">
          <h1 className="text-2xl font-black text-gray-900">{user.name}</h1>
          <p className="text-gray-500 font-medium">{user.phone}</p>
        </div>
      </div>

      {/* Asosiy Kontent (Tablar va Ma'lumotlar) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Chap panel - Tab menyular */}
        <div className="md:col-span-1 space-y-2">
          <button 
            onClick={() => setActiveTab('info')}
            className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl font-bold transition-all ${activeTab === 'info' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
          >
            <User size={18} /> Shaxsiy ma'lumotlar
          </button>
          <button 
            onClick={() => setActiveTab('appointments')}
            className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl font-bold transition-all ${activeTab === 'appointments' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
          >
            <Calendar size={18} /> Mening qabullarim
          </button>
          <button 
            onClick={() => setActiveTab('security')}
            className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl font-bold transition-all ${activeTab === 'security' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
          >
            <Settings size={18} /> Xavfsizlik
          </button>
          
          <div className="pt-4 border-t border-gray-200 mt-4">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-5 py-4 rounded-2xl font-bold text-red-500 hover:bg-red-50 transition-all"
            >
              <LogOut size={18} /> Tizimdan chiqish
            </button>
          </div>
        </div>

        {/* O'ng panel - O'zgaruvchi kontent */}
        <div className="md:col-span-3 bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
          
          {/* Shaxsiy Ma'lumotlar Tab */}
          {activeTab === 'info' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-gray-900 mb-6">Shaxsiy ma'lumotlar</h2>
              
              <form onSubmit={handleSave} className="space-y-5 max-w-lg">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">To'liq ismingiz</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-gray-50 border border-transparent focus:border-blue-500/30 pl-11 pr-4 py-3.5 rounded-2xl outline-none transition-all text-gray-900"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Telefon raqam</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-gray-50 border border-transparent focus:border-blue-500/30 pl-11 pr-4 py-3.5 rounded-2xl outline-none transition-all text-gray-900"
                    />
                  </div>
                </div>

                <button type="submit" className="bg-gray-900 text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-black transition-all active:scale-95 flex items-center gap-2">
                  Saqlash {isSaved && <CheckCircle2 size={18} className="text-green-400" />}
                </button>
              </form>
            </div>
          )}

          {/* Qabullar Tab */}
          {activeTab === 'appointments' && (
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-6">Mening qabullarim</h2>
              
              {/* Vaqtincha (Mock) ma'lumot */}
              <div className="space-y-4">
                <div className="p-5 border border-gray-100 rounded-[24px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:shadow-md transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Tish tozalash (Air Flow)</h3>
                      <p className="text-sm text-gray-500">Dr. Saida Karimova</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="font-bold text-blue-600">12-Oktabr, 2024</p>
                    <p className="text-sm text-gray-500">Soat 10:00 da</p>
                  </div>
                </div>

                <div className="p-5 border border-gray-100 rounded-[24px] flex justify-center items-center bg-gray-50">
                  <p className="text-gray-500 font-medium">Boshqa qabullar yo'q</p>
                </div>
              </div>
            </div>
          )}

          {/* Xavfsizlik Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-gray-900 mb-6">Parolni o'zgartirish</h2>
              
              <form className="space-y-5 max-w-lg">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Joriy parol</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input type="password" placeholder="••••••••" className="w-full bg-gray-50 border border-transparent focus:border-blue-500/30 pl-11 pr-4 py-3.5 rounded-2xl outline-none transition-all text-gray-900" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Yangi parol</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input type="password" placeholder="••••••••" className="w-full bg-gray-50 border border-transparent focus:border-blue-500/30 pl-11 pr-4 py-3.5 rounded-2xl outline-none transition-all text-gray-900" />
                  </div>
                </div>
                <button type="button" className="bg-gray-900 text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-black transition-all active:scale-95">
                  Parolni yangilash
                </button>
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Profile;