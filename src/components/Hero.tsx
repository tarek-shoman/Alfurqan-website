import { BookOpen, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
          <div className="text-right space-y-6 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full">
              <Heart className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-800 font-medium">منذ عام 2008</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              أكاديمية الفرقان
              <span className="block text-emerald-600 mt-2">لتحفيظ القرآن ونور البيان</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              نوفر بيئة تعليمية آمنة ومحفزة لأطفالكم لتعليم القرآن الكريم بطريقة نور البيان، مع العناية الكاملة والاهتمام بنمو الطفل الروحي والعقلي والاجتماعي
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#contact"
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                سجل الآن
              </a>
              <a
                href="#programs"
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold border-2 border-emerald-600 hover:bg-emerald-50 transition-all duration-300"
              >
                تعرف على البرامج
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">2000+</div>
                <div className="text-gray-600 mt-1">طالب</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">25+</div>
                <div className="text-gray-600 mt-1">معلم</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">17+</div>
                <div className="text-gray-600 mt-1">سنوات خبرة</div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
              <img src="/src/imgs/logo.png" className='pt-6' alt="" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
              <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">تعليم متميز</div>
                    <div className="text-sm text-gray-600">منهج نور البيان</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-400 rounded-full blur-2xl opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-400 rounded-full blur-2xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
