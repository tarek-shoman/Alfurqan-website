import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("شكراً لتواصلك معنا! سنتصل بك قريباً");
    setFormData({ name: "", phone: "", email: "", age: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-emerald-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            تواصل معنا
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            نسعد بتواصلكم معنا للاستفسار عن البرامج أو التسجيل لأطفالكم
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-right">
                معلومات التواصل
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1 text-right">
                    <h4 className="font-semibold text-gray-900 mb-1">الهاتف</h4>
                    <p className="text-gray-600 dir-ltr text-right">
                      +20 123 456 7890
                    </p>
                    <p className="text-gray-600 dir-ltr text-right">
                      +20 100 123 4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1 text-right">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      البريد الإلكتروني
                    </h4>
                    <p className="text-gray-600">info@alfurqan.com</p>
                    <p className="text-gray-600">admission@alfurqan.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1 text-right">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      العنوان
                    </h4>
                    <p>شرق المحطة،بجوار مستشفي الايمان، بني مزار</p>
                    <p className="text-gray-600">المنيا، مصر</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1 text-right">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      أوقات العمل
                    </h4>
                    <p className="text-gray-600">
                      السبت - الخميس: 7:00 ص - 5:00 م
                    </p>
                    <p className="text-gray-600">الجمعة: مغلق</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-8 rounded-2xl shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4 text-right">
                احجز موعد زيارة
              </h3>
              <p className="text-emerald-50 mb-6 text-right leading-relaxed">
                يمكنكم زيارة الأكاديمية للتعرف على المكان والبرامج والتحدث مع
                الإدارة. نرحب بكم في أي وقت خلال أوقات العمل
              </p>
              <a
                href="tel:+201234567890"
                className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300"
              >
                اتصل للحجز
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-right">
              نموذج التسجيل
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-right text-gray-700 font-semibold mb-2">
                  اسم ولي الأمر *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors text-right"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div>
                <label className="block text-right text-gray-700 font-semibold mb-2">
                  رقم الهاتف *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors text-right"
                  placeholder="01234567890"
                />
              </div>

              <div>
                <label className="block text-right text-gray-700 font-semibold mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors text-right"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-right text-gray-700 font-semibold mb-2">
                  عمر الطفل *
                </label>
                <input
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors text-right"
                  placeholder="مثال: 5 سنوات"
                />
              </div>

              <div>
                <label className="block text-right text-gray-700 font-semibold mb-2">
                  ملاحظات أو استفسارات
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors text-right resize-none"
                  placeholder="اكتب أي استفسار أو ملاحظات"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                <span>إرسال الطلب</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
