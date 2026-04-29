import { Link, useLocation } from 'react-router-dom';
import { Home, Stethoscope, Calendar, UserCircle } from 'lucide-react';

const BottomNav = () => {
  const { pathname } = useLocation();

  return (
    // Asosiy container uchun Liquid Glass effekti (Orqasi shaffof shisha)
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-2xl border-t border-white/60 px-6 py-2 flex justify-between items-center rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] pb-safe">
      {[
        { name: 'Asosiy', path: '/', icon: Home },
        { name: 'Xizmatlar', path: '/xizmatlar', icon: Stethoscope },
        { name: 'Qabul', path: '/qabul', icon: Calendar },
        { name: 'Profil', path: '/profil', icon: UserCircle }, // '/login' o'rniga '/profil' ga o'zgartirildi
      ].map((item) => {
        const isActive = pathname === item.path;

        return (
          <Link
            key={item.path}
            to={item.path}
            // active:scale-90 orqali bosilganda (tap) chiroyli kichrayish animatsiyasi
            className="relative flex flex-col items-center justify-center w-14 h-14 group active:scale-90 transition-transform duration-200 ease-out"
          >
            {/* Ikonka qutisi - Faol holatda Liquid Glass va yuqoriga chiqish effekti */}
            <div 
              className={`absolute transition-all duration-500 ease-out flex items-center justify-center rounded-2xl overflow-hidden ${
                isActive 
                ? 'bg-gradient-to-tr from-blue-600 to-blue-400 text-white -translate-y-5 shadow-lg shadow-blue-500/40 border border-white/30 p-3.5' 
                : 'bg-transparent text-gray-400 group-hover:text-blue-500 border border-transparent p-2 translate-y-[-8px]'
              }`}
            >
              {/* Suyuq nur effekti (faqat faol holatda tugma ichidan oqib o'tadi) */}
              {isActive && (
                <div className="absolute inset-0 -translate-x-[150%] active:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 z-0 pointer-events-none"></div>
              )}
              <item.icon size={24} className="relative z-10" />
            </div>

            {/* Yozuv - Faol holatda sekin yo'qoladi, boshqa payt chiqib turadi */}
            <span 
              className={`absolute bottom-1 text-[10px] font-black uppercase tracking-wider transition-all duration-300 ${
                isActive 
                ? 'opacity-0 translate-y-2' 
                : 'opacity-100 translate-y-0 text-gray-500 group-hover:text-blue-500'
              }`}
            >
              {item.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNav;