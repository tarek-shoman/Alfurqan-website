// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="text-right">
            <div className="flex items-center gap-2 justify-end mb-4">
              <img src="./src/imgs/logo.png" className='h-24 pt-4' alt="" />
              <span className="text-xl font-bold">حضانة الفرقان</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              مؤسسة تعليمية رائدة في تحفيظ القرآن الكريم وتعليم نور البيان
            </p>
          </div>

          <div className="text-right">
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/About" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/Programs" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  البرامج
                </Link>
              </li>
              <li>
                <Link to="/Teachers" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  المعلمون
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-right">
            <h3 className="text-lg font-bold mb-4">البرامج</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">تحفيظ القرآن الكريم</li>
              <li className="text-gray-300">نور البيان</li>
              <li className="text-gray-300">التربية الإسلامية</li>
              <li className="text-gray-300">الأنشطة التفاعلية</li>
            </ul>
          </div>

          <div className="text-right">
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 justify-end text-gray-300">
                <span className="dir-ltr">+20 123 456 7890</span>
                <Phone className="w-5 h-5 text-emerald-400" />
              </li>
              <li className="flex items-center gap-2 justify-end text-gray-300">
                <span>info@alfurqan.com</span>
                <Mail className="w-5 h-5 text-emerald-400" />
              </li>
              <li className="flex items-center gap-2 justify-end text-gray-300">
                <span>شرق المحطة،بجوار مستشفي الايمان، بني مزار</span>
                <MapPin className="w-5 h-5 text-emerald-400" />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-sm">
               Tarek (للحلول البرمجية)   جميع الحقوق محفوظة ©  2025 لدي
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                سياسة الخصوصية
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
