import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  CalendarDays, 
  Bell, 
  PlusCircle 
} from 'lucide-react';

const AdminBottomNav = () => {
  const { pathname } = useLocation();

  // Mobil menyu uchun 5 ta eng asosiy bo'lim
  const navItems = [
    { name: 'Home', path: '/admin', icon: LayoutDashboard },
    { name: 'Qabullar', path: '/admin/qabullar', icon: CalendarDays },
    { name: 'Yangi', path: '/admin/qabullar/yangi', icon: PlusCircle }, // Markaziy tugma
    { name: 'Bemorlar', path: '/admin/bemorlar', icon: Users },
    { name: 'Xabarlar', path: '/admin/bildirishnomalar', icon: Bell },
  ];

  return (
    <div className="bg-gray-900 text-gray-400 px-2 py-3 flex justify-around items-center rounded-t-[32px] shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.3)] border-t border-gray-800">
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        
        // "Yangi qabul" tugmasi uchun alohida stil (ajralib turishi uchun)
        const isPlus = item.name === 'Yangi';

        return (
          <Link
            key={item.path}
            to={item.path}
            className="flex flex-col items-center gap-1 group relative min-w-[64px]"
          >
            <div className={`p-2 rounded-2xl transition-all duration-300 ${
              isActive 
                ? 'bg-blue-600 text-white -translate-y-4 shadow-lg shadow-blue-600/40 scale-110' 
                : isPlus 
                  ? 'bg-gray-800 text-blue-400 border border-gray-700' 
                  : 'text-gray-500 group-hover:text-gray-200'
            }`}>
              <item.icon size={isPlus && !isActive ? 28 : 22} />
            </div>
            
            {!isActive && (
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
                {item.name}
              </span>
            )}

            {/* Bildirishnoma bo'lsa qizil nuqta (faqat Xabarlar uchun) */}
            {item.name === 'Xabarlar' && (
              <span className="absolute top-1 right-4 w-2 h-2 bg-red-500 rounded-full border border-gray-900"></span>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default AdminBottomNav;