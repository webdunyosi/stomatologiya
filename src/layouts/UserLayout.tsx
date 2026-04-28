import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

const UserLayout = () => {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* Sidebar - Faqat Desktop uchun (lg: o'lchamda ko'rinadi) */}
      <aside className="hidden lg:flex w-72 bg-gradient-to-b from-blue-600 to-indigo-700 text-white flex-col fixed h-full shadow-2xl">
        <Sidebar />
      </aside>

      {/* Asosiy kontent maydoni */}
      <div className="flex-1 flex flex-col lg:ml-72 pb-24 lg:pb-0">
        <Header />
        
        <main className="p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>

        {/* Bottom Nav - Faqat Mobil uchun (lg: o'lchamdan kichikda ko'rinadi) */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
          <BottomNav />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;