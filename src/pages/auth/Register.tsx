import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Phone, Lock, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-hot-toast';

const Register = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone && password) {
      register(name, phone, password);
      
      // Muvaffaqiyatli ro'yxatdan o'tish toast xabari
      toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz!", {
        icon: '🎉',
        style: {
          borderRadius: '12px',
        },
      });

      // 1 soniyadan keyin login sahifasiga o'tkazish
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } else {
      toast.error("Barcha maydonlarni to'ldiring!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center p-4 font-sans">
      <div className="bg-white w-full max-w-md rounded-[40px] p-10 shadow-2xl relative">
        <Link to="/login" className="absolute top-6 left-6 text-gray-400 hover:text-blue-600 transition-colors">
          <ArrowLeft size={24} />
        </Link>
        
        <div className="text-center mb-10 mt-4">
          <h1 className="text-3xl font-black text-blue-900">Ro'yxatdan o'tish</h1>
        </div>

        <form className="space-y-5" onSubmit={handleRegister}>
          <div className="relative">
            <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              placeholder="To'liq ism" 
              className="w-full bg-gray-50 border border-gray-100 pl-14 pr-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" 
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="tel" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              required 
              placeholder="Telefon raqam" 
              className="w-full bg-gray-50 border border-gray-100 pl-14 pr-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" 
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="Parol yarating" 
              className="w-full bg-gray-50 border border-gray-100 pl-14 pr-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-500/30"
          >
            Ro'yxatdan o'tish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;