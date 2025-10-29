import { BookOpen, Star, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Programs() {
  const programs = [
    {
      icon: BookOpen,
      title: "تحفيظ القرآن الكريم",
      description:
        "برنامج متكامل لتحفيظ القرآن الكريم مع التجويد والتلاوة الصحيحة",
      features: [
        "حلقات تحفيظ منظمة",
        "متابعة يومية للحفظ",
        "مراجعة دورية",
        "تعليم أحكام التجويد",
      ],
      color: "emerald",
      ageRange: "من 4 إلى 12 سنة",
    },
    {
      icon: Star,
      title: "نور البيان",
      description:
        "تعليم القراءة والكتابة باللغة العربية بطريقة نور البيان المبتكرة",
      features: [
        "تعليم الحروف والحركات",
        "القراءة الصحيحة",
        "الكتابة السليمة",
        "الإملاء والخط",
      ],
      color: "amber",
      ageRange: "من 3 إلى 8 سنوات",
    },
    {
      icon: Award,
      title: "التربية الإسلامية",
      description: "تعليم القيم والأخلاق الإسلامية والسيرة النبوية والآداب",
      features: [
        "تعليم الأخلاق الحميدة",
        "السيرة النبوية المبسطة",
        "الأذكار والأدعية",
        "الآداب الإسلامية",
      ],
      color: "teal",
      ageRange: "جميع الأعمار",
    },
    {
      icon: Users,
      title: "الأنشطة التفاعلية",
      description:
        "أنشطة ترفيهية وتعليمية تنمي مهارات الطفل الاجتماعية والإبداعية",
      features: [
        "مسابقات قرآنية",
        "أنشطة فنية",
        "رحلات تعليمية",
        "ورش عمل ترفيهية",
      ],
      color: "cyan",
      ageRange: "من 3 إلى 12 سنة",
    },
  ];

  return (
    <section
      id="programs"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-emerald-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            برامجنا التعليمية
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة متنوعة من البرامج التعليمية المتخصصة التي تلبي احتياجات
            أطفالكم التربوية والتعليمية
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div
                className={`bg-gradient-to-br from-${program.color}-500 to-${program.color}-600 p-8`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                    {program.ageRange}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 text-right">
                  {program.title}
                </h3>
                <p className="text-white/90 text-right leading-relaxed">
                  {program.description}
                </p>
              </div>

              <div className="p-8">
                <h4 className="font-bold text-gray-900 mb-4 text-right text-lg">
                  مميزات البرنامج:
                </h4>
                <ul className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-right"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-${program.color}-500 flex-shrink-0`}
                      ></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            استفسر عن البرامج
          </Link>
        </div>
      </div>
    </section>
  );
}
