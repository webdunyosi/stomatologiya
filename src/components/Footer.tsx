import { Link } from 'react-router-dom';
// Ijtimoiy tarmoqlar o'rniga Lucide'da aniq bor bo'lgan ikonkalarni ishlatamiz
import { 
  Globe, 
  Send, 
  Share2, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight 
} from 'lucide-react';

const Footer = () => {
  // Yilni dinamik olish
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* 1. Brend va Haqida */}
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-bold text-white">
            Stoma<span className="text-blue-500">Care</span>
          </Link>
          <p className="text-sm leading-relaxed">
            2010-yildan buyon bemorlarimizga yuqori sifatli stomatologik xizmat ko'rsatib kelmoqdamiz.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all">
              <Globe size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all">
              <Send size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all">
              <Share2 size={18} />
            </a>
          </div>
        </div>

        {/* 2. Tezkor havolalar */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Tezkor havolalar</h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-blue-500 flex items-center gap-2"><ChevronRight size={14}/> Asosiy</Link></li>
            <li><Link to="/xizmatlar" className="hover:text-blue-500 flex items-center gap-2"><ChevronRight size={14}/> Xizmatlar</Link></li>
            <li><Link to="/login" className="hover:text-blue-500 flex items-center gap-2"><ChevronRight size={14}/> Kirish</Link></li>
          </ul>
        </div>

        {/* 3. Ish vaqti */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Ish vaqti</h3>
          <div className="space-y-2 text-sm">
            <p>Dush - Juma: 08:00 - 18:00</p>
            <p>Shanba: 09:00 - 14:00</p>
            <p className="text-red-400">Yakshanba: Dam olish</p>
          </div>
        </div>

        {/* 4. Kontaktlar */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Bog'lanish</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3"><MapPin size={18} className="text-blue-500"/> Toshkent sh.</li>
            <li className="flex gap-3"><Phone size={18} className="text-blue-500"/> +998 71 123 45 67</li>
            <li className="flex gap-3"><Mail size={18} className="text-blue-500"/> info@stoma.uz</li>
          </ul>
        </div>
      </div>

      {/* Mualliflik huquqi bo'limi - Yil shu yerda ishlatildi */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p>&copy; {currentYear} StomaCare. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;