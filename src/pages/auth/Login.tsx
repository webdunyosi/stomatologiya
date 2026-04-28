import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, Lock } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-hot-toast';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(phone, password);
    
    if (success) {
      // Muvaffaqiyatli xabar
      toast.success("Xush kelibsiz!", {
        duration: 3000,
        icon: '👋',
      });

      const activeUser = JSON.parse(localStorage.getItem('activeUser') || '{}');
      
      if (activeUser.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } else {
      // Xatolik xabari
      toast.error("Telefon raqam yoki parol xato!", {
        style: {
          borderRadius: '12px',
          background: '#333',
          color: '#fff',
        },
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center p-4 font-sans">
      <div className="bg-white w-full max-w-md rounded-[40px] p-10 shadow-2xl text-center">
        <h1 className="text-3xl font-black text-blue-900 mb-2">Xush kelibsiz!</h1>
        <form className="space-y-6 mt-10" onSubmit={handleLogin}>
          
          <div className="relative">
            <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="tel" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              required 
              placeholder="Telefon raqam" 
              className="w-full bg-gray-50 border border-gray-100 pl-14 pr-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-900" 
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="Parol" 
              className="w-full bg-gray-50 border border-gray-100 pl-14 pr-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-900" 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-500/30"
          >
            Kirish
          </button>

        </form>

        <div className="mt-8 text-sm text-gray-500">
          Hali ro'yxatdan o'tmaganmisiz? <br />
          <Link to="/register" className="text-blue-600 font-bold hover:underline">Yangi profil yaratish</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;