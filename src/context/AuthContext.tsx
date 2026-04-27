import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Foydalanuvchi tipi
interface User {
  name: string;
  phone: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  login: (phone: string, password: string) => boolean;
  register: (name: string, phone: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Dastlab xotiradan foydalanuvchini tekshirish
  useEffect(() => {
    const savedUser = localStorage.getItem('activeUser');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Login funksiyasi
  const login = (phone: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find((u: any) => u.phone === phone && u.password === password);

    if (foundUser) {
      const userData = { name: foundUser.name, phone: foundUser.phone, role: foundUser.role };
      setUser(userData);
      localStorage.setItem('activeUser', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  // Ro'yxatdan o'tish funksiyasi
  const register = (name: string, phone: string, password: string) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const newUser = { name, phone, password, role: 'user' };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  };

  // Tizimdan chiqish
  const logout = () => {
    setUser(null);
    localStorage.removeItem('activeUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth AuthProvider ichida ishlatilishi kerak");
  return context;
};