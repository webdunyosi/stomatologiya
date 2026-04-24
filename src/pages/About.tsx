import { Heart, Award, Users, Microscope } from 'lucide-react';
import teamMembers from '../data/teamData.json';

const About = () => {
  return (
    <div className="w-full font-sans bg-white pb-0">
      
      {/* 1. Hero Qismi */}
      <section className="bg-blue-600 text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Biz haqimizda
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            2010 yildan beri jamiyatimizga mukammallik bilan xizmat qilamiz
          </p>
        </div>
      </section>

      {/* 2. Bizning hikoyamiz */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          Bizning hikoyamiz
        </h2>
        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
          <p>
            Stomatologiya klinikasi 2010 yilda oddiy vazifa bilan tashkil etilgan: qulay va samimiy muhitda ajoyib
            stomatologik xizmat ko'rsatish. Bitta amaliyotchi ofisi sifatida boshlangan narsa har yili minglab bemorlarga
            xizmat ko'rsatadigan keng qamrovli stomatologiya klinikasiga aylandi.
          </p>
          <p>
            Tajribali stomatolog mutaxassislarimiz jamoasi sizga optimal og'iz salomatligiga erishishda va uni saqlab
            qolishda yordam berishga bag'ishlangan. Biz bemorlarimiz uchun eng yaxshi natijalarni ta'minlash uchun
            ilg'or texnologiyani sinovdan o'tgan usullar bilan birlashtiramiz.
          </p>
        </div>
      </section>

      {/* 3. Bizning qadriyatlarimiz */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Bizning qadriyatlarimiz
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
              <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Mehribon parvarish</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Har bir bemorga mehr, hamdardlik va hurmat bilan munosabatda bo'lamiz.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
              <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Award className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Mukammallik</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Stomatologik xizmat va xizmat ko'rsatishning eng yuqori standartlariga sodiqmiz.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
              <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Users className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Bemorga e'tibor</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Sizning ehtiyojlaringiz va qulayligingiz biz qiladigan hamma narsaning markazida.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
              <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Microscope className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Innovatsiya</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Yaxshiroq natijalar uchun eng so'nggi texnologiya va usullardan foydalanish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bizning jamoa - DINAMIK QISM */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Bizning jamoa
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group cursor-default"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-50 group-hover:border-blue-100 transition-colors duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-blue-600 text-sm my-2 font-medium">
                {member.role}
              </p>
              <p className="text-gray-500 text-sm mt-3">
                {member.specialty}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Statistika qismi */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="hover:scale-110 transition-transform duration-300 cursor-default">
            <div className="text-4xl md:text-5xl font-bold mb-3">15+</div>
            <div className="text-blue-100 font-medium">Yillik tajriba</div>
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-default">
            <div className="text-4xl md:text-5xl font-bold mb-3">10,000+</div>
            <div className="text-blue-100 font-medium">Mamnun bemorlar</div>
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-default">
            <div className="text-4xl md:text-5xl font-bold mb-3">25+</div>
            <div className="text-blue-100 font-medium">Mutaxassis xodimlar</div>
          </div>
          <div className="hover:scale-110 transition-transform duration-300 cursor-default">
            <div className="text-4xl md:text-5xl font-bold mb-3">98%</div>
            <div className="text-blue-100 font-medium">Qoniqish darajasi</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;