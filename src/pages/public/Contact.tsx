import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {

  // Aloqa ma'lumotlari ro'yxati (Havolalar bilan)
  const contactLinks = [
    {
      id: 1,
      icon: <Phone size={24} />,
      label: "TELEFON",
      value: "+998 71 123 45 67",
      href: "tel:+998711234567",
      target: "_self"
    },
    {
      id: 2,
      icon: <Mail size={24} />,
      label: "EMAIL",
      value: "info@stomacare.uz",
      href: "mailto:info@stomacare.uz",
      target: "_self"
    },
    {
      id: 3,
      icon: <MapPin size={24} />,
      label: "MANZIL",
      value: "Toshkent sh., Buyuk Ipak yo'li ko'chasi, 100-uy",
      href: "https://yandex.uz/maps/?text=Toshkent+shahar,+Buyuk+Ipak+yo'li+ko'chasi,+100-uy",
      target: "_blank"
    },
    {
      id: 4,
      icon: <MessageCircle size={24} />,
      label: "TELEGRAM",
      value: "@stomacare_admin",
      href: "https://t.me/stomacare_admin",
      target: "_blank"
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <h2 className="text-3xl font-black text-blue-900 px-2 lg:px-0">Biz bilan bog'laning</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* CHAP QISM: ALOQA KARTOCHKALARI */}
        <div className="space-y-4 px-2 lg:px-0">
          {contactLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target={item.target}
              rel={item.target === "_blank" ? "noopener noreferrer" : ""}
              className="flex items-center gap-6 bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 group cursor-pointer block"
            >
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                <p className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* O'NG QISM: XARITA */}
        <div className="bg-gray-200 rounded-[40px] overflow-hidden min-h-[400px] border-4 border-white shadow-lg mx-2 lg:mx-0">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.862423382717!2d69.3242!3d41.3111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4ee8c4d2d47%3A0xc3f8e02ea51d953a!2sBuyuk%20Ipak%20Yoli%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1689000000000!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[400px] object-cover"
          ></iframe>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;