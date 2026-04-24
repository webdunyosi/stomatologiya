import { useState } from 'react';
import { FileText, Video, FileQuestion, Search, ChevronDown, ChevronUp } from 'lucide-react';
import educationData from '../data/educationData.json';

const Education = () => {
  // JSON dan kelgan ma'lumotlarni o'zgaruvchilarga ajratib olamiz
  const { articles, videos, faqs } = educationData;

  const [activeTab, setActiveTab] = useState('videos'); 
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const filteredArticles = articles.filter(article => {
    const query = searchQuery.toLowerCase();
    return (
      article.title.toLowerCase().includes(query) ||
      article.desc.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query)
    );
  });

  return (
    <div className="w-full font-sans bg-gray-50 min-h-screen pb-20">
      
      {/* Hero qismi */}
      <section className="bg-blue-600 text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Og'iz salomatligi ta'limi</h1>
          <p className="text-lg md:text-xl text-blue-100">
            Bilim sog'lom tabassumning kalitidir
          </p>
        </div>
      </section>

      {/* Asosiy kontent qismi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        
        {/* Tab tugmalari */}
        <div className="bg-gray-100 p-2 rounded-xl flex flex-col md:flex-row gap-2 max-w-6xl mx-auto mb-8 shadow-sm">
          <button 
            onClick={() => setActiveTab('articles')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'articles' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            <FileText size={20} />
            Maqolalar
          </button>
          
          <button 
            onClick={() => setActiveTab('videos')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'videos' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Video size={20} />
            Videolar
          </button>
          
          <button 
            onClick={() => setActiveTab('faq')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'faq' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            <FileQuestion size={20} />
            Savol-javoblar
          </button>
        </div>

        {/* Tab Kontentlari */}
        <div className="max-w-6xl mx-auto">
          
          {/* 1. MAQOLALAR TABI */}
          {activeTab === 'articles' && (
            <div className="animate-in fade-in duration-300">
              <div className="relative mb-8 max-w-6xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Maqolalarni qidiring..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-11 pr-4 py-4 bg-white border border-gray-200 hover:border-blue-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((item, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                      <p className="text-blue-600 text-sm font-medium mb-3">{item.category}</p>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                        {item.desc}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full bg-white border border-gray-200 rounded-2xl p-12 text-center shadow-sm">
                    <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Maqola topilmadi</h3>
                    <p className="text-gray-500">"{searchQuery}" bo'yicha hech narsa topilmadi. Boshqa so'z bilan izlab ko'ring.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 2. VIDEOLAR TABI (YOUTUBE IFRAME BILAN) */}
          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
              {videos.map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
                  
                  {/* Haqiqiy YouTube Iframe */}
                  <div className="h-56 w-full bg-gray-200 relative">
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${item.youtubeId}`} 
                      title={item.title}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  {/* Video ma'lumoti */}
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-sm">Davomiyligi: {item.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3. SAVOL-JAVOBLAR (FAQ) TABI */}
          {activeTab === 'faq' && (
            <div className="max-w-6xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 animate-in fade-in duration-300 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Tez-tez so'raladigan savollar</h2>
              
              <div className="divide-y divide-gray-100 border-t border-gray-100">
                {faqs.map((faq, index) => (
                  <div key={index} className="py-5">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between text-left focus:outline-none group"
                    >
                      <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {faq.question}
                      </span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 group-hover:text-blue-600 transition-colors" />
                      )}
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openFaq === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default Education;