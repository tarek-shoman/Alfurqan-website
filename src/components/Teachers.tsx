import { Award, Users } from 'lucide-react';

export default function Teachers() {
  const teachers = [
    {
      name: 'أ. فاطمة محمد',
      role: 'معلمة تحفيظ القرآن',
      qualification: 'إجازة في القرآن الكريم',
      experience: '15 سنة خبرة',
      specialization: 'التجويد والقراءات'
    },
    {
      name: 'أ. خديجة أحمد',
      role: 'معلمة نور البيان',
      qualification: 'بكالوريوس تربية طفل',
      experience: '10 سنوات خبرة',
      specialization: 'تعليم القراءة والكتابة'
    },
    {
      name: 'أ. مريم عبدالله',
      role: 'مشرفة تربوية',
      qualification: 'ماجستير تربية',
      experience: '12 سنة خبرة',
      specialization: 'التربية الإسلامية'
    },
    {
      name: 'أ. زينب حسن',
      role: 'معلمة تحفيظ',
      qualification: 'إجازة في القرآن الكريم',
      experience: '8 سنوات خبرة',
      specialization: 'تحفيظ الصغار'
    }
  ];

  return (
    <section id="teachers" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            الكادر التعليمي
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            فريق من المعلمات المتميزات والمؤهلات لتقديم أفضل تعليم قرآني وتربوي لأطفالكم
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 text-center">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-12 h-12 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {teacher.name}
                </h3>
                <p className="text-emerald-100 text-sm">
                  {teacher.role}
                </p>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-start gap-3 text-right">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 mb-1">المؤهل:</div>
                    <div className="text-gray-600 text-sm">{teacher.qualification}</div>
                  </div>
                  <Award className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                </div>

                <div className="flex items-start gap-3 text-right">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 mb-1">الخبرة:</div>
                    <div className="text-gray-600 text-sm">{teacher.experience}</div>
                  </div>
                  <Users className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <div className="text-center text-sm text-emerald-600 font-medium">
                    {teacher.specialization}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">معايير اختيار المعلمات</h3>
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-emerald-50 rounded-xl">
              <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-gray-700">حاصلات على مؤهلات عالية</div>
            </div>
            <div className="p-6 bg-emerald-50 rounded-xl">
              <div className="text-3xl font-bold text-emerald-600 mb-2">25+</div>
              <div className="text-gray-700">معلمة متخصصة</div>
            </div>
            <div className="p-6 bg-emerald-50 rounded-xl">
              <div className="text-3xl font-bold text-emerald-600 mb-2">8+</div>
              <div className="text-gray-700">سنوات خبرة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
