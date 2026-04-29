import { Search, User, LogOut, ChevronDown, TrendingUp, Stethoscope } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

// Aqlli qidiruv variantlari 
const popularSearches = [
  { title: "Konsultatsiya va ko'rik", type: "booking" }, // Buni to'g'ridan-to'g'ri qabulga yuboramiz
  { title: "Tish tozalash (Air Flow)", type: "service" }, // Bularni xizmatlarga
  { title: "Implant o'rnatish", type: "service" },
  { title: "Dr. Jamshid Tursunov", type: "doctor" },
  { title: "Dr. Saida Karimova", type: "doctor" },
  { title: "Dr. Aziz Umarov", type: "doctor" }
];

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigate = useNavigate();

  // 1. Enter bosilganda ishlashi
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (query !== '') {
      const isDoctorSearch = popularSearches.some(
        (s) => s.type === 'doctor' && s.title.toLowerCase().includes(query.toLowerCase())
      );

      if (isDoctorSearch) {
        navigate('/shifokorlar');
      } else {
        navigate(`/xizmatlar?q=${encodeURIComponent(query)}`);
      }
      setIsSearchFocused(false);
    }
  };

  // 2. Tayyor ro'yxatdan birortasi bosilganda (ASOSIY O'ZGARISH)
  const handleSuggestionClick = (item: { title: string, type: string }) => {
    setSearchQuery(item.title);
    setIsSearchFocused(false);
    
    if (item.type === 'doctor') {
      // Shifokorni bossa -> Shifokorlar sahifasiga
      navigate('/shifokorlar');
    } else if (item.type === 'booking') {
      // Konsultatsiyani bossa -> Qabul sahifasiga
      navigate('/qabul', { state: { selectedService: item.title } });
    } else if (item.type === 'service') {
      // Boshqa xizmatlarni bossa -> Xizmatlar sahifasiga
      navigate(`/xizmatlar?q=${encodeURIComponent(item.title)}`);
    }
  };

  return (
    <header className="px-4 py-4 md:px-8 flex items-center justify-between bg-white/70 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100/50">
      
      {/* 1. AQLLI QIDIRUV PANELI */}
      <div className="relative max-w-md flex-1 hidden md:block">
        <form onSubmit={handleSearch} className="relative group">
          <button 
            type="submit" 
            className="absolute inset-y-0 left-0 pl-4 flex items-center cursor-pointer z-10"
          >
            <Search className={`h-5 w-5 transition-colors ${isSearchFocused ? 'text-blue-600' : 'text-gray-400'}`} />
          </button>
          
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            placeholder="Xizmatlar, shifokorlar qidiruvi..." 
            className="w-full bg-gray-100/50 border border-transparent focus:border-blue-500/30 focus:bg-white pl-11 pr-4 py-2.5 rounded-2xl outline-none transition-all duration-300 text-sm text-gray-800 font-medium relative z-10"
          />
        </form>

        {/* Tayyor variantlar (Dropdown) */}
        {isSearchFocused && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <p className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 px-3 pt-2">
              <TrendingUp size={12} /> Mashhur qidiruvlar
            </p>
            <div className="space-y-0.5">
              {popularSearches.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onMouseDown={(e) => {
                    e.preventDefault(); 
                    handleSuggestionClick(item);
                  }}
                  className="w-full text-left px-3 py-2.5 hover:bg-blue-50 rounded-xl text-sm font-bold text-gray-700 hover:text-blue-700 transition-colors flex items-center gap-2 group/btn"
                >
                  {item.type === 'doctor' ? (
                    <User size={14} className="text-blue-400 group-hover/btn:text-blue-600" />
                  ) : (
                    <Stethoscope size={14} className="text-gray-400 group-hover/btn:text-blue-600" />
                  )}
                  {item.title}
                  
                  {item.type === 'doctor' && (
                    <span className="ml-auto text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Shifokor
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobil logo */}
      <div className="md:hidden font-black text-2xl tracking-tighter text-blue-600">
        Stoma<span className="text-gray-900">Care</span>
      </div>

      {/* 2. Profil va Kirish qismi */}
      <div className="flex items-center gap-4 ml-auto">
        {isAuthenticated ? (
          <div className="relative">
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-3 bg-white border border-gray-100 pl-2 pr-4 py-1.5 rounded-2xl hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-blue-200 shadow-lg">
                <User size={18} />
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-[10px] text-gray-400 font-bold uppercase leading-none mb-1">Bemor</p>
                <p className="text-sm font-bold text-gray-800 leading-none">{user?.name}</p>
              </div>
              <ChevronDown size={16} className={`text-gray-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-100 rounded-[24px] shadow-xl py-2 animate-in fade-in zoom-in duration-200 z-50">
                <Link 
                  to="/profil" 
                  className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 transition-colors font-medium"
                  onClick={() => setIsProfileOpen(false)}
                >
                  <User size={16} /> Profil sozlamalari
                </Link>
                <button 
                  onClick={() => {
                    logout();
                    setIsProfileOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors font-medium"
                >
                  <LogOut size={16} /> Chiqish
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right mr-2">
              <p className="text-[10px] text-gray-400 font-bold uppercase">Xush kelibsiz</p>
              <p className="text-sm font-bold text-gray-800 italic">Bemor</p>
            </div>
            <Link 
              to="/login" 
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95 font-bold text-sm"
            >
              <User size={18} />
              <span>Kirish</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;