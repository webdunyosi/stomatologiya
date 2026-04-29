import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { CheckCircle2, AlertCircle } from 'lucide-react';

// Xizmatlar bazasi
const servicesData = {
  "Terapevtik xizmatlar": [
    "Konsultatsiya va ko'rik",
    "Tish tozalash (Air Flow)",
    "Kariesni davolash va plomba",
    "Tish oqartirish (Zoom 4)"
  ],
  "Jarrohlik xizmatlari": [
    "Aql tishini sug'urish",
    "Oddiy tishni sug'urish",
    "Tish implantatsiyasi"
  ],
  "Ortodontik xizmatlar": [
    "Metall breketlar o'rnatish",
    "Kapa (Invisalign) bilan davolash",
    "Breketlarni to'g'rilash"
  ]
};

// Bugungi sanani "YYYY-MM-DD" formatida olish uchun funksiya
const getTodayDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const Booking = () => {
  const { user } = useAuth(); 
  const location = useLocation();
  
  // Form inputlari uchun state'lar
  const [service, setService] = useState(servicesData["Terapevtik xizmatlar"][0]);
  const [doctor, setDoctor] = useState('Dr. Jamshid Tursunov (Ortodont)');
  
  // SANANI AVTOMATIK BUGUNGI KUN QILIB BELGILASH
  const [date, setDate] = useState(getTodayDate()); 
  const [time, setTime] = useState('09:00');
  
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; text: string }>({ type: null, text: '' });

  const BOT_TOKEN = '8664236528:AAHYozJSlLSJ1_nn-cktvcPRknQ4b4dif7I';
  const CHAT_ID = '5414733748';

  useEffect(() => {
    if (location.state && location.state.selectedService) {
      setService(location.state.selectedService);
    }
  }, [location.state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      setStatus({ type: 'error', text: 'Iltimos, sanani tanlang!' });
      return;
    }

    setIsLoading(true);
    setStatus({ type: null, text: '' });

    const text = `
🏥 <b>Yangi qabul so'rovi!</b>

👤 <b>Bemor:</b> ${user?.name || "Noma'lum"}
📞 <b>Telefon:</b> ${user?.phone || "Noma'lum"}

🩺 <b>Xizmat turi:</b> ${service}
👨‍⚕️ <b>Shifokor:</b> ${doctor}
📅 <b>Sana:</b> ${date}
⏰ <b>Vaqt:</b> ${time}

🌐 <i>StomaCare tizimi orqali yuborildi</i>
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: 'HTML'
        })
      });

      if (response.ok) {
        setStatus({ type: 'success', text: "Qabul muvaffaqiyatli band qilindi! Tez orada xodimlarimiz siz bilan bog'lanishadi." });
        
        setDate(getTodayDate());
        setTime('09:00');
        setService(servicesData["Terapevtik xizmatlar"][0]); 
      } else {
        setStatus({ type: 'error', text: "Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring." });
      }
    } catch (error) {
      setStatus({ type: 'error', text: "Internet tarmog'ida muammo yuz berdi." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // ASOSIY QUTI PADDINGLARI IXCHAMLASHTIRILDI (p-5 sm:p-8)
    <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 bg-white p-5 sm:p-8 md:p-12 rounded-[32px] sm:rounded-[40px] shadow-sm border border-gray-100 animate-in fade-in zoom-in-95 duration-500 mb-0 sm:mb-0">
      
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-blue-900">Qabulga yozilish</h2>
        <p className="text-sm sm:text-base text-gray-500 mt-1.5">O'zingizga qulay xizmat, vaqt va shifokorni tanlang</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Xizmat turi tanlash */}
        <div>
          <label className="block text-xs sm:text-sm font-bold text-gray-700 ml-2 mb-1.5">Xizmat turini tanlang</label>
          <select 
            value={service}
            onChange={(e) => setService(e.target.value)}
            // PADDINGLAR IXCHAMLASHTIRILDI (py-3.5)
            className="w-full bg-gray-50 border border-transparent hover:border-blue-100 px-5 py-3.5 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer text-sm sm:text-base text-gray-900 font-medium"
          >
            {Object.entries(servicesData).map(([category, services]) => (
              <optgroup key={category} label={category} className="font-bold text-blue-600 bg-white">
                {services.map((item, idx) => (
                  <option key={idx} value={item} className="text-gray-900 font-medium">{item}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        {/* Shifokor tanlash */}
        <div>
          <label className="block text-xs sm:text-sm font-bold text-gray-700 ml-2 mb-1.5">Shifokorni tanlang</label>
          <select 
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            className="w-full bg-gray-50 border border-transparent hover:border-blue-100 px-5 py-3.5 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer text-sm sm:text-base text-gray-900 font-medium"
          >
            <option value="Dr. Jamshid Tursunov (Ortodont)">Dr. Jamshid Tursunov (Ortodont)</option>
            <option value="Dr. Saida Karimova (Terapevt)">Dr. Saida Karimova (Terapevt)</option>
            <option value="Dr. Aziz Umarov (Jarroh)">Dr. Aziz Umarov (Jarroh)</option>
          </select>
        </div>

        {/* Sana va Vaqt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs sm:text-sm font-bold text-gray-700 ml-2 mb-1.5">Sana</label>
            <input 
              type="date" 
              value={date}
              min={getTodayDate()} 
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-gray-50 border border-transparent hover:border-blue-100 px-5 py-3.5 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-sm sm:text-base text-gray-900 font-medium cursor-pointer" 
            />
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-bold text-gray-700 ml-2 mb-1.5">Vaqt</label>
            <select 
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full bg-gray-50 border border-transparent hover:border-blue-100 px-5 py-3.5 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer text-sm sm:text-base text-gray-900 font-medium"
            >
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
            </select>
          </div>
        </div>

        {/* Xabarlar qismi */}
        {status.type && (
          <div className={`p-4 rounded-2xl flex items-center gap-3 ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {status.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
            <span className="font-medium text-xs sm:text-sm">{status.text}</span>
          </div>
        )}

        <button 
          type="submit" 
          disabled={isLoading}
          // TUGMA HAM IXCHAMLASHTIRILDI (py-4)
          className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-base sm:text-lg shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
        >
          {isLoading ? (
             <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Band qilishni tasdiqlash"
          )}
        </button>
      </form>
    </div>
  );
};

export default Booking;