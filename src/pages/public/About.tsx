import { Award, Users, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="space-y-12">
      <div className="bg-blue-600 rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-black mb-6">Bizning klinika haqida</h2>
          <p className="text-blue-50 text-lg leading-relaxed">
            StomaCare klinikasi 15 yildan ortiq vaqt davomida zamonaviy stomatologiya texnologiyalari va tajribali mutaxassislar yordamida bemorlarga xizmat ko'rsatib kelmoqda.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Award size={32} />, title: "Sifat kafolati", text: "Biz faqat xalqaro sertifikatlangan materiallardan foydalanamiz." },
          { icon: <Users size={32} />, title: "Professional jamoa", text: "Shifokorlarimiz Yevropa va AQSHda malaka oshirishgan." },
          { icon: <Heart size={32} />, title: "G'amxo'rlik", text: "Har bir bemor uchun individual yondashuv va qulay muhit." }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm text-center space-y-4">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;