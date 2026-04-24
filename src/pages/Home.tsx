import { Link } from 'react-router-dom';
import { Calendar, GraduationCap, Stethoscope, Phone, Check } from 'lucide-react';

const Home = () => {
  return (
    <div>
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
            <Link to="/qabul" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
              Qabulga yozilish
            </Link>
            {/* Figmada ikkinchi tugma bo'sh oq to'rtburchak edi, unga "Batafsil" deb yozdik */}
            <Link to="/xizmatlar" className="bg-white text-transparent px-8 py-3 rounded-md transition hover:bg-gray-50 border border-white focus:text-blue-600">
              Batafsil
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Xizmatlar Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Optimal og'iz salomatligi uchun barcha kerakli xizmatlar
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white border rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
            <div className="flex justify-center mb-4">
              <Calendar className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Oson qabulga yozilish</h3>
            <p className="text-gray-500 text-sm">Kunning istalgan vaqtida onlayn qabulga yoziling</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white border rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
            <div className="flex justify-center mb-4">
              <GraduationCap className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Og'iz gigiyenasi ta'limi</h3>
            <p className="text-gray-500 text-sm">Tish parvarishi va gigiyena haqida bilib oling</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
            <div className="flex justify-center mb-4">
              <Stethoscope className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Keng qamrovli xizmatlar</h3>
            <p className="text-gray-500 text-sm">To'liq stomatologik xizmatlar va davolash</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
            <div className="flex justify-center mb-4">
              <Phone className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Biz bilan bog'laning</h3>
            <p className="text-gray-500 text-sm">Do'stona jamoamiz bilan aloqaga chiqing</p>
          </div>
        </div>
      </section>

      {/* 3. Nima uchun bizni tanlash kerak? Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-8">Nima uchun bizni tanlash kerak?</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 bg-blue-600 rounded-full p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 text-white">
                <Check size={14} strokeWidth={3} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Tajribali mutaxassislar</h4>
                <p className="text-gray-500">Bizning jamoamiz 50 yildan ortiq tajribaga ega</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 bg-blue-600 rounded-full p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 text-white">
                <Check size={14} strokeWidth={3} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Zamonaviy texnologiya</h4>
                <p className="text-gray-500">Aniq diagnostika va davolash uchun eng yangi uskunalar</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 bg-blue-600 rounded-full p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 text-white">
                <Check size={14} strokeWidth={3} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Bemor markazida xizmat</h4>
                <p className="text-gray-500">Sizning qulayligingiz va qoniqishingiz bizning asosiy vazifamiz</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 bg-blue-600 rounded-full p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 text-white">
                <Check size={14} strokeWidth={3} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Moslashuvchan jadval</h4>
                <p className="text-gray-500">Kechki va dam olish kunlari uchun qabul mavjud</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
          Stomatologiya ofisi rasmi
        </div>
      </section>

      {/* 4. CTA (Call to action) Section */}
      <section className="bg-blue-600 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Tabassumingizni o'zgartirishga tayyormisiz?</h2>
        <p className="text-blue-100 mb-8 text-lg">Bugun qabulga yoziling va farqni his qiling</p>
        <Link to="/qabul" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition inline-block">
          Hoziroq yoziling
        </Link>
      </section>
    </div>
  );
};

export default Home;