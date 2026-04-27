import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';
import AdminBottomNav from '../components/AdminBottomNav';

const AdminLayout = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user?.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      
      {/* Chap Sidebar - Faqat desktopda ko'rinadi (lg dan katta ekranlarda) */}
      <div className="hidden lg:block z-20">
        <AdminSidebar />
      </div>

      {/* Asosiy Kontent qismi */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <AdminHeader />
        
        {/* pb-24 mobil menyu kontentni to'sib qo'ymasligi uchun pastdan joy tashlaydi */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50/50 p-4 md:p-8 pb-28 lg:pb-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Bottom Nav - Faqat Mobil uchun (lg dan kichik ekranlarda) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
        <AdminBottomNav />
      </div>

    </div>
  );
};

export default AdminLayout;