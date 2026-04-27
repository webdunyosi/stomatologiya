const Services = () => {
  const allServices = [
    { title: "Terapevtik stomatologiya", price: "150,000", img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400" },
    { title: "Jarrohlik (Ekstratsiya)", price: "200,000", img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400" },
    { title: "Ortodontiya (Breketlar)", price: "5,000,000", img: "https://images.unsplash.com/photo-1593054315313-0504100c61ba?auto=format&fit=crop&q=80&w=400" },
    { title: "Implantologiya", price: "3,500,000", img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=400" },
    { title: "Bolalar stomatologiyasi", price: "100,000", img: "https://images.unsplash.com/photo-1502741126161-b048400d085d?auto=format&fit=crop&q=80&w=400" },
    { title: "Gigiyena va oqartirish", price: "400,000", img: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-black text-blue-900">Barcha xizmatlar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allServices.map((service, i) => (
          <div key={i} className="bg-white p-4 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
            <div className="aspect-video rounded-2xl mb-4 overflow-hidden bg-gray-100">
              <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">{service.title}</h3>
            <div className="flex items-center justify-between mt-4">
              <span className="text-blue-600 font-black">{service.price} so'm dan</span>
              <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-600 hover:text-white transition-all">Batafsil</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;