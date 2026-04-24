import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, PhoneCall } from 'lucide-react';

const Contact = () => {
  // --- STATE ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  // --- TELEGRAM BOT MA'LUMOTLARI ---
  const BOT_TOKEN = '8664236528:AAHYozJSlLSJ1_nn-cktvcPRknQ4b4dif7I';
  const CHAT_ID = '5414733748';

  // --- HANDLERS ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage({ type: '', text: '' });

    // Telegramga boradigan xabar matni
    const text = `
✉️ <b>Yangi xabar (Aloqa sahifasidan)!</b>

👤 <b>Ism:</b> ${formData.name}
📞 <b>Telefon:</b> ${formData.phone || "Kiritilmadi"}
📧 <b>Email:</b> ${formData.email}
🏷 <b>Mavzu:</b> ${formData.subject || "Kiritilmadi"}

💬 <b>Xabar:</b>
${formData.message}
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
        setStatusMessage({ type: 'success', text: "Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz." });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatusMessage({ type: 'error', text: "Xatolik yuz berdi. Iltimos qayta urinib ko'ring." });
      }
    } catch (error) {
      setStatusMessage({ type: 'error', text: "Internetga ulanishda xatolik yuz berdi." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full font-sans bg-white pb-0">
      
      {/* 1. Hero Qismi */}
      <section className="bg-blue-600 text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Biz bilan bog'laning
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            Savollaringizga javob berish va sizga yordam berish uchun shu yerdamiz
          </p>
        </div>
      </section>

      {/* 2. Asosiy Kontent (Ma'lumotlar va Forma) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* CHAP TOMON: Aloqa ma'lumotlari kartalari */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Manzil */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <h3 className="font-bold text-gray-900 text-lg">Bizning manzilimiz</h3>
              </div>
              <div className="text-gray-600 text-sm leading-relaxed pl-9">
                <p>Toshkent shahri</p>
                <p>Mirzo Ulug'bek tumani</p>
                <p>Buyuk Ipak yo'li ko'chasi, 100</p>
              </div>
            </div>

            {/* Telefon raqamlari */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <h3 className="font-bold text-gray-900 text-lg">Telefon raqamlari</h3>
              </div>
              <div className="text-sm pl-9 space-y-4">
                <div>
                  <p className="text-gray-900 font-medium">Ofis: +998 71 123 45 67</p>
                  <p className="text-gray-500">Dush-Juma 8:00-18:00</p>
                </div>
                <div className="border-t border-gray-100 pt-3">
                  <p className="text-gray-900 font-medium">Shoshilinch: +998 90 123 45 67</p>
                  <p className="text-gray-500">24/7 mavjud</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <h3 className="font-bold text-gray-900 text-lg">Email</h3>
              </div>
              <div className="text-sm pl-9 space-y-4">
                <div>
                  <p className="text-gray-900 font-medium">info@stomatologiya.uz</p>
                  <p className="text-gray-500">Umumiy savollar</p>
                </div>
                <div className="border-t border-gray-100 pt-3">
                  <p className="text-gray-900 font-medium">qabul@stomatologiya.uz</p>
                  <p className="text-gray-500">Qabulga yozilish</p>
                </div>
              </div>
            </div>

            {/* Ish vaqti */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="font-bold text-gray-900 text-lg">Ish vaqti</h3>
              </div>
              <div className="text-sm pl-9 space-y-3">
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

          </div>

          {/* O'NG TOMON: Forma va Xarita */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Forma */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Bizga xabar yuboring</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Ism */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Ism *</label>
                  <input 
                    type="text" required name="name" value={formData.name} onChange={handleInputChange}
                    className="bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 w-full px-4 py-3 rounded-lg text-gray-900 transition outline-none"
                    placeholder="To'liq ismingiz" 
                  />
                </div>

                {/* Email va Telefon */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Email *</label>
                    <input 
                      type="email" required name="email" value={formData.email} onChange={handleInputChange}
                      className="bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 w-full px-4 py-3 rounded-lg text-gray-900 transition outline-none"
                      placeholder="sizning@email.uz" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Telefon</label>
                    <input 
                      type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                      className="bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 w-full px-4 py-3 rounded-lg text-gray-900 transition outline-none"
                      placeholder="+998 90 123 45 67" 
                    />
                  </div>
                </div>

                {/* Mavzu */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Mavzu</label>
                  <input 
                    type="text" name="subject" value={formData.subject} onChange={handleInputChange}
                    className="bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 w-full px-4 py-3 rounded-lg text-gray-900 transition outline-none"
                    placeholder="Bu nima haqida?" 
                  />
                </div>

                {/* Xabar */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Xabar *</label>
                  <textarea 
                    required name="message" value={formData.message} onChange={handleInputChange}
                    rows={5}
                    className="bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 w-full px-4 py-3 rounded-lg text-gray-900 transition outline-none resize-y"
                    placeholder="Sizga qanday yordam bera olamiz..." 
                  ></textarea>
                </div>

                {/* Xabar matnlari (Muvaffaqiyat/Xato) */}
                {statusMessage.text && (
                  <div className={`p-4 rounded-lg text-sm font-medium ${statusMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {statusMessage.text}
                  </div>
                )}

                {/* Yuborish tugmasi */}
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#0B0F19] text-white py-4 rounded-lg font-semibold hover:bg-black transition-colors flex justify-center items-center gap-2"
                >
                  <Send size={18} />
                  {isLoading ? 'Yuborilmoqda...' : 'Xabar yuborish'}
                </button>

              </form>
            </div>

            {/* Xarita (Placeholder) */}
            <div className="bg-[#E5E7EB] border border-gray-200 rounded-2xl h-[400px] flex flex-col items-center justify-center text-gray-500 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <MapPin className="w-16 h-16 mb-4 text-gray-400" />
              <h3 className="font-medium text-lg">Xarita joylashuvi</h3>
              <p className="text-sm">Buyuk Ipak yo'li 100, Toshkent</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Stomatologik favqulodda holat (Emergency) qismi */}
      <section className="bg-[#FFF5F5] py-16 px-4 text-center mt-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#991B1B] mb-4">
            Stomatologik favqulodda holat?
          </h2>
          <p className="text-[#B91C1C] text-lg mb-8">
            Agar sizda stomatologik shoshilinch holat bo'lsa, iltimos, darhol shoshilinch raqamga qo'ng'iroq qiling
          </p>
          
          <a href="tel:+998901234567" className="inline-flex items-center gap-2 bg-[#DC2626] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#B91C1C] transition-colors shadow-md">
            <PhoneCall size={20} />
            Shoshilinch raqam: +998 90 123 45 67
          </a>
          
          <p className="text-[#DC2626] mt-6 font-medium">
            Kuniga 24 soat, haftada 7 kun mavjud
          </p>
        </div>
      </section>

    </div>
  );
};

export default Contact;