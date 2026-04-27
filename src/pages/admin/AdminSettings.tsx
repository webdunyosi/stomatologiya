import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { User, Phone, Lock, Shield, CheckCircle2 } from 'lucide-react';

const AdminSettings = () => {
  const { user } = useAuth();
  
  // Tablarni boshqarish (Shaxsiy ma'lumotlar yoki Xavfsizlik)
  const [activeTab, setActiveTab] = useState('info');
  const [isSaved, setIsSaved] = useState(false);

  // Form inputlari
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || ''
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Bu yerda backendga ulanish logikasi bo'ladi
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-5xl mx-auto">
      
      {/* Sarlavha qismi */}
      <div>
        <h2 className="text-2xl font-black text-gray-900">Profil sozlamalari</h2>
        <p className="text-sm text-gray-500 mt-1">Shaxsiy ma'lumotlar va xavfsizlikni boshqarish</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
        
        {/* Chap panel - Tab menyular */}
        <div className="md:col-span-1 space-y-2">
          <button 
            onClick={() => setActiveTab('info')}
            className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl font-bold transition-all ${
              activeTab === 'info' 
              ? 'bg-gray-900 text-white shadow-md' 
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
            }`}
          >
            <User size={18} /> Ma'lumotlar
          </button>
          <button 
            onClick={() => setActiveTab('security')}
            className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl font-bold transition-all ${
              activeTab === 'security' 
              ? 'bg-gray-900 text-white shadow-md' 
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
            }`}
          >
            <Shield size={18} /> Xavfsizlik
          </button>
        </div>

        {/* O'ng panel - Kontent */}
        <div className="md:col-span-3 bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 relative overflow-hidden">
          
          {/* Orqa fondagi chiroyli gradient naqsh */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-50 pointer-events-none"></div>

          {/* 1. Shaxsiy Ma'lumotlar Tab */}
          {activeTab === 'info' && (
            <div className="space-y-8 relative z-10">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-2xl bg-gray-900 text-white flex items-center justify-center text-3xl font-black shadow-lg">
                  {user?.name?.charAt(0) || 'A'}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{user?.name}</h3>
                  <p className="text-gray-500 font-medium">Administrator</p>
                </div>
              </div>

              <form onSubmit={handleSave} className="space-y-5 max-w-md pt-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">To'liq ismingiz</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 focus:bg-white focus:border-blue-500/30 pl-11 pr-4 py-3.5 rounded-2xl outline-none transition-all text-gray-900 font-medium"
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
                      className="w-full bg-gray-50 border border-gray-100 focus:bg-white focus:border-blue-500/30 pl-11 pr-4 py-3.5 rounded-2xl outline-none transition-all text-gray-900 font-medium"
                    />
                  </div>
                </div>

                <button type="submit" className="bg-blue-600 text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-blue-500/30">
                  Saqlash {isSaved && <CheckCircle2 size={18} className="text-white" />}
                </button>
              </form>
            </div>
          )}

          {/* 2. Xavfsizlik Tab (Parolni o'zgartirish) */}
          {activeTab === 'security' && (
            <div className="space-y-8 relative z-10">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Parolni o'zgartirish</h3>
                <p className="text-gray-500 text-sm mt-1">Hisobingiz xavfsizligini ta'minlash uchun kuchli paroldan foydalaning.</p>
              </div>
              
              <form className="space-y-5 max-w-md">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Joriy parol</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input type="password" placeholder="••••••••" className="w-full bg-gray-50 border border-gray-100 focus:bg-white focus:border-blue-500/30 pl-11 pr-4 py-3.5 rounded-2xl outline-none transition-all text-gray-900" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Yangi parol</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input type="password" placeholder="••••••••" className="w-full bg-gray-50 border border-gray-100 focus:bg-white focus:border-blue-500/30 pl-11 pr-4 py-3.5 rounded-2xl outline-none transition-all text-gray-900" />
                  </div>
                </div>

                <button type="button" className="bg-gray-900 text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-black transition-all active:scale-95 w-full sm:w-auto">
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

export default AdminSettings;