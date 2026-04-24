import React, { useState } from 'react';
import { User, Mail, Phone, ChevronLeft, ChevronRight, Clock, MessageSquare, ChevronDown } from 'lucide-react';

const Appointment = () => {
  // --- STATE UCHUN O'ZGARUVCHILAR ---
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    appointmentType: '',
    notes: ''
  });

  // Kalendar uchun state
  const [currentDate, setCurrentDate] = useState(new Date()); // Hozirgi ko'rsatilayotgan oy
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Foydalanuvchi tanlagan sana
  
  // Vaqt dropdowni uchun state
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  // --- TELEGRAM BOT MA'LUMOTLARI ---
  const BOT_TOKEN = '8664236528:AAHYozJSlLSJ1_nn-cktvcPRknQ4b4dif7I';
  const CHAT_ID = '5414733748';

  // --- YARDAMCHI FUNKSIYALAR ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Kalendar mantig'i
  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const isPastDate = (day: number) => {
    const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return checkDate < today;
  };

  const isSunday = (day: number) => {
    const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return checkDate.getDay() === 0;
  };

  const handleDateClick = (day: number) => {
    if (isPastDate(day) || isSunday(day)) return; // O'tgan kunlar va Yakshanbani tanlab bo'lmaydi
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  };

  const monthNames = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"];
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const timeSlots = ["9:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

  // --- FORMANI YUBORISH (TELEGRAM API) ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validatsiya
    if (!selectedDate || !selectedTime || !formData.appointmentType) {
      setStatusMessage({ type: 'error', text: "Iltimos, sana, vaqt va qabul turini tanlang!" });
      return;
    }

    setIsLoading(true);
    setStatusMessage({ type: '', text: '' });

    // Formatlangan sana
    const formattedDate = selectedDate.toLocaleDateString('uz-UZ', { year: 'numeric', month: 'long', day: 'numeric' });

    // Telegramga boradigan xabar matni (HTML formatida)
    const text = `
🏥 <b>Yangi qabul so'rovi!</b>

👤 <b>Mijoz:</b> ${formData.firstName} ${formData.lastName}
📞 <b>Telefon:</b> ${formData.phone}
✉️ <b>Email:</b> ${formData.email}

🦷 <b>Xizmat turi:</b> ${formData.appointmentType}
📅 <b>Sana:</b> ${formattedDate}
⏰ <b>Vaqt:</b> ${selectedTime}

📝 <b>Izoh:</b> ${formData.notes ? formData.notes : "Yo'q"}
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
        setStatusMessage({ type: 'success', text: "So'rovingiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz." });
        // Formani tozalash
        setFormData({ firstName: '', lastName: '', email: '', phone: '', appointmentType: '', notes: '' });
        setSelectedDate(null);
        setSelectedTime('');
      } else {
        setStatusMessage({ type: 'error', text: "Xatolik yuz berdi. Iltimos qayta urinib ko'ring." });
      }
    } catch (error) {
      setStatusMessage({ type: 'error', text: "Internetga ulanishda xatolik yuz berdi." });
    } finally {
      setIsLoading(false);
    }
  };

  // Kalendarni chizish uchun kunlar massivini tayyorlash
  const daysInMonthCount = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
  const firstDay = getFirstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth());
  const blanks = Array.from({ length: firstDay }, (_, i) => null);
  const days = Array.from({ length: daysInMonthCount }, (_, i) => i + 1);
  const allDays = [...blanks, ...days];

  return (
    <div className="w-full font-sans bg-white pb-20">
      
      {/* 1. Hero Qismi */}
      <section className="bg-blue-600 text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Qabulga yoziling
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            Bir necha oddiy qadamda tashrifingizni rejalashtiring
          </p>
        </div>
      </section>

      {/* 2. Asosiy Kontent (Form + Sidebar) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* ChAP TOMON: FORMA */}
          <div className="lg:col-span-2">
            <div className="border border-gray-200 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-8">Qabul tafsilotlari</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Ism va Familiya */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Ism *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input 
                        type="text" required name="firstName" value={formData.firstName} onChange={handleInputChange}
                        className="bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 w-full pl-10 pr-3 py-3 rounded-lg text-gray-900 transition outline-none"
                        placeholder="Akmal" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Familiya *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input 
                        type="text" required name="lastName" value={formData.lastName} onChange={handleInputChange}
                        className="bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 w-full pl-10 pr-3 py-3 rounded-lg text-gray-900 transition outline-none"
                        placeholder="Karimov" 
                      />
                    </div>
                  </div>
                </div>

                {/* Email va Telefon */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Email *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input 
                        type="email" required name="email" value={formData.email} onChange={handleInputChange}
                        className="bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 w-full pl-10 pr-3 py-3 rounded-lg text-gray-900 transition outline-none"
                        placeholder="akmal@example.com" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Telefon *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input 
                        type="tel" required name="phone" value={formData.phone} onChange={handleInputChange}
                        className="bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 w-full pl-10 pr-3 py-3 rounded-lg text-gray-900 transition outline-none"
                        placeholder="+998 90 123 45 67" 
                      />
                    </div>
                  </div>
                </div>

                {/* Qabul turi */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Qabul turi *</label>
                  <select 
                    required name="appointmentType" value={formData.appointmentType} onChange={handleInputChange}
                    className="bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 w-full px-4 py-3 rounded-lg text-gray-900 transition outline-none appearance-none"
                  >
                    <option value="" disabled>Qabul turini tanlang</option>
                    <option value="Umumiy ko'rik">Umumiy ko'rik</option>
                    <option value="Tish tozalash">Tish tozalash</option>
                    <option value="Tish og'rig'i / Plomba">Tish og'rig'i / Plomba</option>
                    <option value="Ortodontiya (Breket)">Ortodontiya (Breket)</option>
                    <option value="Implant">Implant</option>
                  </select>
                </div>

                {/* KALENDAR */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Qulaylik sana *</label>
                  <div className="border border-gray-200 rounded-xl p-4 md:p-6 w-full max-w-md">
                    {/* Kalendar Header */}
                    <div className="flex justify-between items-center mb-6">
                      <button type="button" onClick={handlePrevMonth} className="p-2 border rounded-md hover:bg-gray-50">
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                      </button>
                      <h3 className="font-bold text-gray-900">
                        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                      </h3>
                      <button type="button" onClick={handleNextMonth} className="p-2 border rounded-md hover:bg-gray-50">
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>

                    {/* Kunlar nomlari */}
                    <div className="grid grid-cols-7 gap-1 text-center mb-4">
                      {weekDays.map(day => (
                        <div key={day} className="text-gray-400 text-sm font-medium">{day}</div>
                      ))}
                    </div>

                    {/* Kunlar Raqamlari */}
                    <div className="grid grid-cols-7 gap-y-2 text-center">
                      {allDays.map((day, index) => {
                        if (day === null) return <div key={`blank-${index}`}></div>;
                        
                        const isDisabled = isPastDate(day) || isSunday(day);
                        const isSelected = selectedDate?.getDate() === day && selectedDate?.getMonth() === currentDate.getMonth() && selectedDate?.getFullYear() === currentDate.getFullYear();

                        return (
                          <div key={day} className="flex justify-center">
                            <button
                              type="button"
                              onClick={() => handleDateClick(day)}
                              disabled={isDisabled}
                              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm transition
                                ${isDisabled ? 'text-gray-300 cursor-not-allowed' : 
                                  isSelected ? 'bg-gray-900 text-white font-medium shadow-md' : 'text-gray-700 hover:bg-gray-100'
                                }
                              `}
                            >
                              {day}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs mt-2">Eslatma: Dam olish kunlari mavjud emas. Iltimos, ish kunini tanlang.</p>
                </div>

                {/* QULAY VAQT (Maxsus Dropdown) */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-900 mb-2">Qulay vaqt *</label>
                  <div 
                    onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
                    className="bg-gray-50 border border-transparent focus:border-blue-500 flex justify-between items-center w-full px-4 py-3 rounded-lg text-gray-900 cursor-pointer"
                  >
                    <span className={selectedTime ? 'text-gray-900' : 'text-gray-500'}>
                      {selectedTime || 'Vaqtni tanlang'}
                    </span>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  {isTimeDropdownOpen && (
                    <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                      {timeSlots.map(time => (
                        <div 
                          key={time}
                          onClick={() => {
                            setSelectedTime(time);
                            setIsTimeDropdownOpen(false);
                          }}
                          className={`px-4 py-3 cursor-pointer hover:bg-gray-50 transition ${selectedTime === time ? 'bg-gray-100 font-medium' : ''}`}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Qo'shimcha Izohlar */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Qo'shimcha izohlar</label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea 
                      name="notes" value={formData.notes} onChange={handleInputChange}
                      rows={4}
                      className="bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 w-full pl-10 pr-3 py-3 rounded-lg text-gray-900 transition outline-none resize-none"
                      placeholder="Biron-bir muayyan tashvishlar yoki talablaringiz bormi?" 
                    ></textarea>
                  </div>
                </div>

                {/* Xabarlar chiqishi */}
                {statusMessage.text && (
                  <div className={`p-4 rounded-lg text-sm font-medium ${statusMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {statusMessage.text}
                  </div>
                )}

                {/* Yuborish tugmasi */}
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#0B0F19] text-white py-4 rounded-lg font-semibold hover:bg-black transition-colors flex justify-center items-center"
                >
                  {isLoading ? 'Yuborilmoqda...' : "Qabulga yozilish so'rovini yuborish"}
                </button>

              </form>
            </div>
          </div>

          {/* O'NG TOMON: SIDEBAR MA'LUMOTLARI */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Ish vaqti */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-gray-900" />
                <h3 className="font-bold text-gray-900 text-lg">Ish vaqti</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Dushanba - Juma</span>
                  <span className="font-medium text-gray-900">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Shanba</span>
                  <span className="font-medium text-gray-900">9:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Yakshanba</span>
                  <span className="font-medium text-gray-900">Yopiq</span>
                </div>
              </div>
            </div>

            {/* Aloqa ma'lumotlari */}
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-6">Aloqa ma'lumotlari</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">Shoshilinch: (555) 123-4567</p>
                    <p className="text-gray-500 text-sm">24/7 mavjud</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">info@stomatologiya.uz</p>
                    <p className="text-gray-500 text-sm">24 soat ichida javob</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Yangi bemormisiz */}
            <div className="bg-[#F0F4FA] rounded-xl p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-3">Yangi bemormisiz?</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Xush kelibsiz! Iltimos, hujjatlarni to'ldirish uchun 15 daqiqa oldinroq keling.
              </p>
              <button className="w-full bg-white border border-gray-200 text-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-50 transition shadow-sm">
                Shakllarni yuklab olish
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Appointment;