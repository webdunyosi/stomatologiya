import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-black text-blue-900">Biz bilan bog'laning</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {[
            { icon: <Phone />, label: "Telefon", val: "+998 71 123 45 67" },
            { icon: <Mail />, label: "Email", val: "info@stomacare.uz" },
            { icon: <MapPin />, label: "Manzil", val: "Toshkent sh., Buyuk Ipak yo'li ko'chasi, 100-uy" },
            { icon: <MessageCircle />, label: "Telegram", val: "@stomacare_admin" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-[28px] border border-gray-100 flex items-center gap-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">{item.icon}</div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">{item.label}</p>
                <p className="text-lg font-bold text-gray-900">{item.val}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-200 rounded-[40px] overflow-hidden min-h-[400px] border-4 border-white shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.1121516035173!2d69.3406254!3d41.3281566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE5JzQxLjQiTiA2OcKwMjAnMjYuMyJF!5e0!3m2!1suz!2s!4v1620824142345!5m2!1suz!2s" 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;