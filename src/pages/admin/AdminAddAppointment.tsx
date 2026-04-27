import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle2, AlertCircle, ArrowLeft, User, Phone, CalendarDays, Clock, Stethoscope } from 'lucide-react';

const AdminAddAppointment = () => {
  const navigate = useNavigate();
  
  // Form inputlari
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [doctor, setDoctor] = useState('Dr. Jamshid Tursunov (Ortodont)');
  const [service, setService] = useState('Tish ko\'rigi va maslahat');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('09:00');
  
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; text: string }>({ type: null, text: '' });

  // Telegram bot ma'lumotlari (Sizning botingiz)
  const BOT_TOKEN = '8664236528:AAHYozJSlLSJ1_nn-cktvcPRknQ4b4dif7I';
  const CHAT_ID = '5414733748';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      setStatus({ type: 'error', text: 'Iltimos, sanani tanlang!' });
      return;
    }

    setIsLoading(true);
    setStatus({ type: null, text: '' });

    // Telegramga yuboriladigan xabar (Admin panel nomidan)
    const text = `
🏥 <b>Yangi qabul (Admin paneldan qo'shildi)</b>

👤 <b>Bemor:</b> ${patientName}
📞 <b>Telefon:</b> ${phone}

👨‍⚕️ <b>Shifokor:</b> ${doctor}
🩺 <b>Xizmat:</b> ${service}
📅 <b>Sana:</b> ${date}
⏰ <b>Vaqt:</b> ${time}

⚙️ <i>StomaAdmin tizimi</i>
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
        setStatus({ type: 'success', text: "Qabul muvaffaqiyatli qo'shildi va Telegramga yuborildi!" });
        
        // 2 soniyadan keyin qabullar ro'yxatiga qaytarish
        setTimeout(() => {
          navigate('/admin/qabullar');
        }, 2000);
      } else {
        setStatus({ type: 'error', text: "Telegramga yuborishda xatolik yuz berdi." });
      }
    } catch (error) {
      setStatus({ type: 'error', text: "Internet tarmog'ida muammo yuz berdi." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500">
      
      {/* Orqaga qaytish va Sarlavha */}
      <div className="flex items-center gap-4">
        <Link to="/admin/qabullar" className="p-2 bg-white rounded-xl border border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h2 className="text-2xl font-black text-gray-900">Yangi qabul qo'shish</h2>
          <p className="text-sm text-gray-500 mt-1">Bemor uchun ma'muriyat tomonidan qabul belgilash</p>
        </div>
      </div>

      {/* Form qismi */}
      <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bemor Ismi */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-2">Bemor F.I.Sh</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="text" required value={patientName} onChange={(e) => setPatientName(e.target.value)} placeholder="Ali Valiyev" className="w-full bg-gray-50 border border-transparent hover:border-blue-100 focus:border-blue-500/30 focus:bg-white pl-11 pr-4 py-3.5 rounded-2xl outline-none transition-all text-gray-900" />
              </div>
            </div>

            {/* Telefon */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-2">Telefon raqam</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+998 90 123 45 67" className="w-full bg-gray-50 border border-transparent hover:border-blue-100 focus:border-blue-500/30 focus:bg-white pl-11 pr-4 py-3.5 rounded-2xl outline-none transition-all text-gray-900" />
              </div>
            </div>

            {/* Shifokor */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-2">Shifokor</label>
              <div className="relative">
                <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <select value={doctor} onChange={(e) => setDoctor(e.target.value)} className="w-full bg-gray-50 border border-transparent hover:border-blue-100 focus:border-blue-500/30 focus:bg-white pl-11 pr-4 py-3.5 rounded-2xl outline-none transition-all appearance-none cursor-pointer text-gray-900">
                  <option>Dr. Jamshid Tursunov (Ortodont)</option>
                  <option>Dr. Saida Karimova (Terapevt)</option>
                  <option>Dr. Aziz Umarov (Jarroh)</option>
                </select>
              </div>
            </div>

            {/* Xizmat */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-2">Xizmat turi</label>
              <input type="text" required value={service} onChange={(e) => setService(e.target.value)} placeholder="Masalan: Tish tozalash" className="w-full bg-gray-50 border border-transparent hover:border-blue-100 focus:border-blue-500/30 focus:bg-white px-5 py-3.5 rounded-2xl outline-none transition-all text-gray-900" />
            </div>

            {/* Sana */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-2">Sana</label>
              <div className="relative">
                <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-gray-50 border border-transparent hover:border-blue-100 focus:border-blue-500/30 focus:bg-white pl-11 pr-4 py-3.5 rounded-2xl outline-none transition-all text-gray-900" />
              </div>
            </div>

            {/* Vaqt */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-2">Vaqt</label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <select value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-gray-50 border border-transparent hover:border-blue-100 focus:border-blue-500/30 focus:bg-white pl-11 pr-4 py-3.5 rounded-2xl outline-none transition-all appearance-none cursor-pointer text-gray-900">
                  <option>09:00</option>
                  <option>10:00</option>
                  <option>11:30</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:30</option>
                </select>
              </div>
            </div>
          </div>

          {/* Xabar */}
          {status.type && (
            <div className={`p-4 rounded-2xl flex items-center gap-3 ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {status.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
              <span className="font-bold text-sm">{status.text}</span>
            </div>
          )}

          {/* Tugma */}
          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button 
              type="submit" 
              disabled={isLoading}
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-500/30 hover:bg-blue-700 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto"
            >
              {isLoading ? (
                 <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Qabulni tasdiqlash"
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AdminAddAppointment;