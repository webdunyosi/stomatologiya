import { Smile } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* 1-ustun */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Smile className="w-8 h-8" />
              <span className="text-xl font-bold">Stomatologiya Klinikasi</span>
            </div>
            <p className="text-gray-400 text-sm pr-4">
              Og'iz bo'shlig'i salomatligi va stomatologik xizmatlaringiz uchun ishonchli hamkor.
            </p>
          </div>

          {/* 2-ustun */}
          <div>
            <h4 className="text-lg font-bold mb-4">Tezkor havolalar</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/biz-haqimizda" className="hover:text-white transition">Biz haqimizda</Link></li>
              <li><Link to="/xizmatlar" className="hover:text-white transition">Xizmatlar</Link></li>
              <li><Link to="/qabul" className="hover:text-white transition">Qabulga yozilish</Link></li>
            </ul>
          </div>

          {/* 3-ustun */}
          <div>
            <h4 className="text-lg font-bold mb-4">Aloqa</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Telefon: (555) 123-4567</li>
              <li>Email: info@stomatologiya.uz</li>
              <li>Ish vaqti: Dush-Juma 8:00-18:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          © 2026 Stomatologiya Klinikasi. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;