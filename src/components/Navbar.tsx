// src/components/Navbar.tsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <img
              src="/src/imgs/logo.png"
              className="h-24 pt-4"
              alt="شعار حضانة الفرقان"
            />
            <span className="text-xl font-bold text-gray-900">
              حضانة الفرقان
            </span>
          </div>
          <div className="hidden md:flex gap-6" dir="rtl">
            {/* تم استبدال علامات <a> بـ <Link> واستخدام مسارات (paths) بدلاً من الـ IDs (#) */}
            <Link
              to="/"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              الرئيسية
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              من نحن
            </Link>
            <Link
              to="/programs"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              البرامج
            </Link>
            <Link
              to="/teachers"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              المعلمون
            </Link>
            <Link
              to="/gallery"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              المعرض
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
