import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, CalendarDays, Stethoscope } from 'lucide-react';

const AdminBottomNav = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-gray-900 text-gray-400 px-6 py-3 flex justify-between items-center rounded-t-[32px] shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.2)]">
      {[
        { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
        { name: 'Qabullar', path: '/admin/qabullar', icon: CalendarDays },
        { name: 'Bemorlar', path: '/admin/bemorlar', icon: Users },
        { name: 'Shifokorlar', path: '/admin/shifokorlar', icon: Stethoscope },
      ].map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className="flex flex-col items-center gap-1 group"
          >
            <div className={`p-2 rounded-xl transition-all duration-300 ${
              isActive 
              ? 'bg-blue-600 text-white -translate-y-4 shadow-lg shadow-blue-900/50' 
              : 'text-gray-400 group-hover:text-gray-200'
            }`}>
              <item.icon size={24} />
            </div>
            {!isActive && (
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                {item.name}
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default AdminBottomNav;