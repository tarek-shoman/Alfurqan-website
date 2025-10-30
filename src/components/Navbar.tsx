// src/components/Navbar.tsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {" "}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/src/imgs/logo.png"
              className="h-24 pt-4"
              alt="شعار حضانة الفرقان"
            />
            <span className="text-xl font-bold text-gray-900">
              حضانة الفرقان
            </span>
          </Link>
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <div className="hidden md:flex gap-6">
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

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0"
        } bg-white shadow-lg`}
      >
        <div className="flex flex-col items-end gap-3 px-8 pb-4 pt-2">
          <Link
            to="/"
            className="text-gray-700 hover:text-emerald-600 transition-colors py-2 text-right w-full border-b"
            onClick={closeMenu}
          >
            الرئيسية
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-emerald-600 transition-colors py-2 text-right w-full border-b"
            onClick={closeMenu}
          >
            من نحن
          </Link>
          <Link
            to="/programs"
            className="text-gray-700 hover:text-emerald-600 transition-colors py-2 text-right w-full border-b"
            onClick={closeMenu}
          >
            البرامج
          </Link>
          <Link
            to="/teachers"
            className="text-gray-700 hover:text-emerald-600 transition-colors py-2 text-right w-full border-b"
            onClick={closeMenu}
          >
            المعلمون
          </Link>
          <Link
            to="/gallery"
            className="text-gray-700 hover:text-emerald-600 transition-colors py-2 text-right w-full border-b"
            onClick={closeMenu}
          >
            المعرض
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-emerald-600 transition-colors py-2 text-right w-full"
            onClick={closeMenu}
          >
            تواصل معنا
          </Link>
        </div>
      </div>
    </nav>
  );
}
