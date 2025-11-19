import { CheckCircle2, Shield, Clock, Users, Heart, Award } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'بيئة آمنة',
      description: 'نوفر بيئة آمنة ونظيفة مع مراقبة مستمرة لضمان سلامة أطفالكم'
    },
    {
      icon: Users,
      title: 'فصول صغيرة',
      description: 'عدد طلاب محدود في كل فصل لضمان الاهتمام الفردي بكل طالب'
    },
    {
      icon: Clock,
      title: 'مرونة في الأوقات',
      description: 'فترات صباحية تناسب جميع أولياء الأمور'
    },
    {
      icon: Heart,
      title: 'رعاية شاملة',
      description: 'اهتمام بالجوانب التربوية والنفسية والصحية للطفل'
    },
    {
      icon: Award,
      title: 'معلمون مؤهلون',
      description: 'كادر تعليمي متخصص وحاصل على شهادات معتمدة'
    },
    {
      icon: CheckCircle2,
      title: 'متابعة دورية',
      description: 'تقارير شهرية لأولياء الأمور عن تطور الطفل'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            لماذا أكاديمية الفرقان؟
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            نتميز بمجموعة من المزايا التي تجعلنا الخيار الأفضل لتعليم وتربية أطفالكم
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-emerald-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-right">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-right leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
