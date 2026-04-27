import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // react-router-dom orqali joriy manzilni (URL) olamiz
  const { pathname } = useLocation();

  useEffect(() => {
    // Har safar pathname (sahifa manzili) o'zgarganda brauzer scrollini eng tepaga qaytaradi
    window.scrollTo(0, 0);
  }, [pathname]);

  // Bu komponent ekranda hech qanday vizual narsa ko'rsatmaydi, shuning uchun null qaytaradi
  return null;
};

export default ScrollToTop;