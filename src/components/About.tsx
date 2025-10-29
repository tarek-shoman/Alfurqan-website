import { Award, Heart, Users, BookOpen } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: BookOpen,
      title: 'التعليم القرآني',
      description: 'منهج متوازن في تعليم القرآن الكريم يرتكز على إتقان التلاوة، وترسيخ الحفظ'
    },
    {
      icon: Heart,
      title: 'الرعاية الكاملة',
      description: 'الاهتمام بالجوانب النفسية والاجتماعية للطفل في بيئة آمنة'
    },
    {
      icon: Users,
      title: 'معلمون متميزون',
      description: 'كادر تعليمي مؤهل وحاصل على شهادات في التربية والتحفيظ'
    },
    {
      icon: Award,
      title: 'منهج نور البيان',
      description: 'تطبيق منهج نور البيان المعتمد لتعليم القراءة والكتابة'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            من نحن
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            حضانة الفرقان هي مؤسسة تعليمية رائدة في تحفيظ القرآن الكريم وتعليم القراءة والكتابة بطريقة نور البيان.
            نسعى لتربية جيل متميز يحفظ كتاب الله ويتقن اللغة العربية في بيئة تربوية محفزة
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-right">
                {value.title}
              </h3>
              <p className="text-gray-600 text-right leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-right">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">رؤيتنا</h3>
              <p className="text-emerald-50 leading-relaxed text-lg">
                أن نكون المؤسسة التعليمية الأولى في تحفيظ القرآن الكريم وتعليم نور البيان، ونساهم في بناء جيل واعٍ ومتمسك بكتاب الله عز وجل
              </p>
            </div>
            <div className="text-right">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">رسالتنا</h3>
              <p className="text-emerald-50 leading-relaxed text-lg">
                تقديم تعليم قرآني متميز وفق أحدث الأساليب التربوية، في بيئة آمنة ومحفزة تنمي مهارات الطفل وتعزز ثقته بنفسه
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
