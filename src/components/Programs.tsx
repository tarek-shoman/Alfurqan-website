import { BookOpen} from "lucide-react";
import { Link } from "react-router-dom";

export default function Programs() {
  const programs = [
    { // title: "البرنامج الأول (خاص للفائقين)"
      icon: BookOpen,
      title: "البرنامج الأول (خاص للفائقين)",
      description:
        "برنامج متكامل لتحفيظ القرآن الكريم مع التجويد والتلاوة الصحيحة والمراجعة الدورية",
      features: [
        "حفظ القرآن الكريم كاملاً في عام واحد",
        "حفظ القرآن الكريم كاملاً خلال عامين",
        "حفظ القرآن الكريم كاملاً خلال ثلاثة أعوام",
        "مراجعة دورية",
      ],
      duration:"النظام الفردي: 3 حصص أسبوعياً (زمن الحصة 40 دقيقة).",
      sacondDuration:"نظام المجموعة: 3 حصص أسبوعياً (زمن الحصة ساعة ونصف).",
      price: "النظام الفردي: 900 جنيهاً شهرياً للمصريين / 60 دولار شهرياً لغير المصريين. ",
      secondPrice: "نظام المجموعة 500 جنيهاً شهرياً للمصريين / 40 دولار شهرياً لغير المصريين.",
      color: "emerald",
      ageRange: "كل الأعمار",
    },
    { // title: "البرنامج الثاني"
      icon: BookOpen,
      title: "البرنامج الثاني",
      description:
        "برنامج متكامل لتحفيظ القرآن الكريم مع التجويد والتلاوة الصحيحة",
      features: [
        "حفظ القرآن الكريم كاملاً خلال خمسة أعوام.",
        "حفظ القرآن الكريم كاملاً خلال ستة أعوام.",
        "حفظ القرآن الكريم كاملاً خلال سبعة أعوام.",
      ],
      duration:"النظام الفردي: حصتان في الأسبوع (زمن الحصة 30 دقيقة).",
      sacondDuration:"نظام المجموعة: حصتان في الأسبوع (زمن الحصة ساعة).",
      price: "النظام الفردي: 500 جنيهاً شهرياً للمصريين / 30 دولار شهرياً لغير المصريين. ",
      secondPrice: "نظام المجموعة: 400 جنيهاً شهرياً للمصريين / 20 دولار شهرياً لغير المصريين.",
      color: "amber",
      ageRange: "كل الأعمار",
    },
    { // title: "البرنامج الثالث"
      icon: BookOpen,
      title: "البرنامج الثالث",
      description:
        "برنامج متكامل لتحفيظ القرآن الكريم مع التجويد والتلاوة الصحيحة",
      features: [
        "حفظ القرآن الكريم كاملاً خلال ثمانية أعوام.",
        "حفظ ما تيسر من القرآن الكريم كاملاً.",
        "حفظ منهج القرآن الكريم للأزهر الشريف لطلبة الصفوف الابتدائية والإعدادية والثانوية.",
      ],
      duration:"النظام الفردي: حصتان في الأسبوع (زمن الحصة 30 دقيقة).",
      sacondDuration:"نظام المجموعة: حصتان في الأسبوع (زمن الحصة ساعة).",
      price: "النظام الفردي: 450 جنيهاً شهرياً للمصريين / 30 دولار شهرياً لغير المصريين. ",
      secondPrice: "نظام المجموعة: 300 جنيهاً شهرياً للمصريين / 20 دولار شهرياً لغير المصريين.",
      color: "teal",
      ageRange: "كل الأعمار",
    },
  ];
  const reveiwPrograms = [
    { // title: "البرنامج الأول (خاص للفائقين)"
      icon: BookOpen,
      title: "حلقات مراجعة-البرنامج الأول (خاص للفائقين)",
      description:
        "حلقات مراجعة وتثبيت الحفظ (للرجال - للنساء - للأطفال) يوجد ثلاث برامج أساسية",
      features: [
        "البرنامج الأول (خاص للفائقين): مراجعة وتثبيت حفظ القرآن الكريم كاملاً في 8 شهور.",
        "البرنامج الثاني: مراجعة وتثبيت حفظ القرآن الكريم كاملاً في 10 شهور.",
        "* البرنامج الثالث: مراجعة وتثبيت حفظ القرآن الكريم كاملاً خلال عام.",
      ],
      duration:"النظام الفردي:حصتان أسبوعياً (زمن الحصة 40 دقيقة).",
      sacondDuration:"نظام المجموعة: حصتان أسبوعياً (زمن الحصة ساعة ونصف).",
      price: "النظام الفردي: 750 جنيهاً شهرياً للمصريين / 40 دولار شهرياً لغير المصريين. ",
      secondPrice: "نظام المجموعة 400 جنيهاً شهرياً للمصريين / 30 دولار شهرياً لغير المصريين.",
      color: "emerald",
      ageRange: "كل الأعمار",
    },
    { // title: "البرنامج الثاني"
      icon: BookOpen,
      title: "تصحيح التلاوة وسرد القرآن الكريم (للرجال - للنساء - للأطفال)",
      description:
        "تصحيح التلاوة وسرد القرآن الكريم (للرجال - للنساء - للأطفال) يوجد ثلاث برامج أساسية",
      features: [
        "البرنامج الأول: تصحيح التلاوة مع شرح أحكام التجويد.",
        "البرنامج الثاني: تصحيح التلاوة مع سرد القرآن الكريم كاملاً.",
        "البرنامج الثالث: تصحيح التلاوة مع شرح متون لتعليم لغة القرآن.",
      ],
      duration:"النظام الفردي: حصتان في الأسبوع (زمن الحصة 30 دقيقة).",
      sacondDuration:"نظام المجموعة: حصتان في الأسبوع (زمن الحصة ساعة).",
      price: "النظام الفردي: 500 جنيهاً شهرياً للمصريين / 30 دولار شهرياً لغير المصريين. ",
      secondPrice: "نظام المجموعة: 350 جنيهاً شهرياً للمصريين / 20 دولار شهرياً لغير المصريين.",
      color: "amber",
      ageRange: "كل الأعمار",
    },
    { // title: "البرنامج الثالث"
      icon: BookOpen,
      title: "شرح نور البيان وفتح المنان وأحكام التجويد",
      description:
        "شرح نور البيان وفتح المنان وأحكام التجويد (للرجال - للنساء - للأطفال)",
      features: [
        "المستوى الأول: شرح نور البيان وفتح المنان وأحكام التجويد.",
        "المستوى الثاني: شرح نور البيان وفتح المنان وأحكام التجويد مع إجازة بالسند المتصل للمؤلف.",
      ],
      duration:"النظام الفردي: 8 حصص اسبوعياً (زمن الحصة 30 دقيقة).",
      sacondDuration:"نظام المجموعة: 10 حصص اسبوعياً (زمن الحصة ساعة).",
      price: "النظام الفردي: 1200 جنيهاً شهرياً للمصريين / 50 دولار شهرياً لغير المصريين. ",
      secondPrice: "نظام المجموعة: 500 جنيهاً شهرياً للمصريين / 25 دولار شهرياً لغير المصريين.",
      color: "teal",
      ageRange: "كل الأعمار",
    },
    { // title: "البرنامج الرابع"
      icon: BookOpen,
      title: "حلقات الإجازة بالسند المتصل (للرجال - للنساء - للأطفال) ",
      description:
        "",
      features: [
        "قراءة ختمة كاملة برواية حفص عن عاصم.",
        "قراءة ختمة كاملة برواية شعبة عن عاصم.",
      ],
      duration:"النظام الفردي: حصتان اسبوعياً (زمن الحصة 30 دقيقة).",
      sacondDuration:"نظام المجموعة: حصة واحدة اسبوعياً (زمن الحصة ساعة).",
      price: "النظام الفردي: 800 جنيهاً شهرياً للمصريين / 40 دولار شهرياً لغير المصريين. ",
      secondPrice: "نظام المجموعة: 750 جنيهاً شهرياً للمصريين / 35 دولار شهرياً لغير المصريين.",
      color: "teal",
      ageRange: "كل الأعمار",
    },
    { // title: "البرنامج الخامس"
      icon: BookOpen,
      title: "دراسة شرعية",
      description:
        "دراسة شرعية (لما لا يسع المسلم جهله) (للرجال - للنساء - للأطفال)",
      features: [
        "دراسة العقيدة",
        "دراسة الفقه",
        "دراسة السيرة",
        "دراسة التفسير",
        "دراسة التزكية(التربوي)",
      ],
      duration:"جلسة واحدة أسبوعياً لمدة ساعة",
      sacondDuration:"اختبار شهري لما تم دراسته",
      price: "100 جنيه شهرياً للمصريين.",
      secondPrice: "10 دولار شهرياً لغير المصريين.",
      color: "amber",
      ageRange: "كل الأعمار",
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
                <h6 className="font-bold text-gray-900 mb-4 text-right mt-2">
                  سعر البرنامج:
                </h6>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-right">
                      <div
                        className={`w-2 h-2 rounded-full bg-${program.color}-500 flex-shrink-0`}
                      ></div>
                      <span className="text-gray-700">{program.price}</span>
                    </li>
                    <li className="flex items-center gap-3 text-right">
                      <div
                        className={`w-2 h-2 rounded-full bg-${program.color}-500 flex-shrink-0`}
                      ></div>
                      <span className="text-gray-700">{program.secondPrice}</span>
                    </li>
                  </ul>
                  <h6 className="font-bold text-gray-900 mb-4 text-right mt-2">المواعيد</h6>
                  <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-right">
                      <div
                        className={`w-2 h-2 rounded-full bg-${program.color}-500 flex-shrink-0`}
                      ></div>
                      <span className="text-gray-700">{program.duration}</span>
                    </li>
                  <li className="flex items-center gap-3 text-right">
                      <div
                        className={`w-2 h-2 rounded-full bg-${program.color}-500 flex-shrink-0`}
                      ></div>
                      <span className="text-gray-700">{program.sacondDuration}</span>
                    </li>
                    </ul>
              </div>
            </div>
          ))}
          {/* // reviewPrograms */}
                    {reveiwPrograms.map((reveiwPrograms, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div
                className={`bg-gradient-to-br from-${reveiwPrograms.color}-500 to-${reveiwPrograms.color}-600 p-8`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <reveiwPrograms.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                    {reveiwPrograms.ageRange}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 text-right">
                  {reveiwPrograms.title}
                </h3>
                <p className="text-white/90 text-right leading-relaxed">
                  {reveiwPrograms.description}
                </p>
              </div>

              <div className="p-8">
                <h4 className="font-bold text-gray-900 mb-4 text-right text-lg">
                  مميزات البرنامج:
                </h4>
                <ul className="space-y-3">
                  {reveiwPrograms
                  
                  .features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-right"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-${reveiwPrograms.color}-500 flex-shrink-0`}
                      ></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <h6 className="font-bold text-gray-900 mb-4 text-right mt-2">
                  سعر البرنامج:
                </h6>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-right">
                      <div
                        className={`w-2 h-2 rounded-full bg-${reveiwPrograms.color}-500 flex-shrink-0`}
                      ></div>
                      <span className="text-gray-700">{reveiwPrograms.price}</span>
                    </li>
                    <li className="flex items-center gap-3 text-right">
                      <div
                        className={`w-2 h-2 rounded-full bg-${reveiwPrograms.color}-500 flex-shrink-0`}
                      ></div>
                      <span className="text-gray-700">{reveiwPrograms.secondPrice}</span>
                    </li>
                  </ul>
                  <h6 className="font-bold text-gray-900 mb-4 text-right mt-2">المواعيد</h6>
                  <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-right">
                      <div
                        className={`w-2 h-2 rounded-full bg-${reveiwPrograms.color}-500 flex-shrink-0`}
                      ></div>
                      <span className="text-gray-700">{reveiwPrograms.duration}</span>
                    </li>
                  <li className="flex items-center gap-3 text-right">
                      <div
                        className={`w-2 h-2 rounded-full bg-${reveiwPrograms.color}-500 flex-shrink-0`}
                      ></div>
                      <span className="text-gray-700">{reveiwPrograms.sacondDuration}</span>
                    </li>
                    </ul>
              </div>
            </div>
          ))}
        </div>

    <div className="mt-16 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      

      <div className="mb-8 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md text-gray-700 text-base leading-relaxed">
        <h3 className="text-lg font-bold mb-3 text-gray-800">شروط الالتحاق والتواصل</h3>
        <p>
          1- اجتياز المقابلة الشخصية.
          <br className="sm:hidden" />
          2- سداد الاشتراك.
        </p>
        <p className="mt-3 font-medium text-emerald-700 font-bold">
          *يمكنكم حجز المقابلة الشخصية مجاناً الآن على الواتس*
        </p>
      </div>
      <Link
        to="/contact"
        className="inline-block bg-emerald-600 text-white text-lg px-10 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-xl transform hover:-translate-y-1"
      >
        استفسر عن البرامج
      </Link>

    </div>
      </div>
    </section>
  );
}
