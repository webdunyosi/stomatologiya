import { Link } from 'react-router-dom';
import { Calendar, GraduationCap, Stethoscope, Phone, Check } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full font-sans bg-white pb-20">
      {/* 1. Hero Section */}
      <section className="bg-blue-600 text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Sizning tabassumingiz, bizning ustuvorligimiz
          </h1>
          <p className="text-xl mb-10 text-blue-100">
            Butun oila uchun to'liq stomatologik xizmat
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/qabul" className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-300">
              Qabulga yozilish
            </Link>
            <Link to="/xizmatlar" className="bg-transparent text-white border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 hover:scale-105 hover:shadow-lg transition-all duration-300">
              Batafsil ma'lumot
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Xizmatlar Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Optimal og'iz salomatligi uchun barcha kerakli xizmatlar
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Calendar className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Oson qabulga yozilish</h3>
            <p className="text-gray-500 text-sm">Kunning istalgan vaqtida onlayn qabulga yoziling</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <GraduationCap className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Og'iz gigiyenasi ta'limi</h3>
            <p className="text-gray-500 text-sm">Tish parvarishi va gigiyena haqida bilib oling</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Stethoscope className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Keng qamrovli xizmatlar</h3>
            <p className="text-gray-500 text-sm">To'liq stomatologik xizmatlar va davolash</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Phone className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Biz bilan bog'laning</h3>
            <p className="text-gray-500 text-sm">Do'stona jamoamiz bilan aloqaga chiqing</p>
          </div>
        </div>
      </section>

      {/* 3. Nima uchun bizni tanlash kerak? Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Nima uchun bizni tanlash kerak?</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4 group cursor-pointer">
              <div className="mt-1 bg-blue-600 rounded-full p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 text-white group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300 shadow-sm">
                <Check size={14} strokeWidth={3} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Tajribali mutaxassislar</h4>
                <p className="text-gray-500">Bizning jamoamiz 50 yildan ortiq tajribaga ega</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="mt-1 bg-blue-600 rounded-full p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 text-white group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300 shadow-sm">
                <Check size={14} strokeWidth={3} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Zamonaviy texnologiya</h4>
                <p className="text-gray-500">Aniq diagnostika va davolash uchun eng yangi uskunalar</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="mt-1 bg-blue-600 rounded-full p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 text-white group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300 shadow-sm">
                <Check size={14} strokeWidth={3} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Bemor markazida xizmat</h4>
                <p className="text-gray-500">Sizning qulayligingiz va qoniqishingiz bizning asosiy vazifamiz</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="mt-1 bg-blue-600 rounded-full p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 text-white group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300 shadow-sm">
                <Check size={14} strokeWidth={3} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Moslashuvchan jadval</h4>
                <p className="text-gray-500">Kechki va dam olish kunlari uchun qabul mavjud</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full h-[400px] bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 hover:shadow-2xl transition-shadow duration-500 overflow-hidden relative group cursor-pointer border border-gray-200">
          <span className="relative z-10 group-hover:scale-110 transition-transform duration-500">Stomatologiya ofisi rasmi</span>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
        </div>
      </section>

      {/* 4. CTA (Call to action) Section */}
      <section className="bg-blue-600 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Tabassumingizni o'zgartirishga tayyormisiz?</h2>
        <p className="text-blue-100 mb-8 text-lg">Bugun qabulga yoziling va farqni his qiling</p>
        <Link to="/qabul" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-300 inline-block">
          Hoziroq yoziling
        </Link>
      </section>
    </div>
  );
};

export default Home;