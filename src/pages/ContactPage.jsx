"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, Sparkles, Clock, Globe, Award, ChevronRight } from "lucide-react";

export default function EnhancedContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", subject: "استفسار تقني", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section dir="rtl" className="min-h-screen bg-[#020202] text-white py-24 px-6 relative overflow-hidden">
      {/* خلفية جمالية */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,_rgba(16,185,129,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* هيدر الصفحة */}
        <div className="mb-20">
          <h1 className="text-7xl font-black mb-6">اتصل <span className="text-emerald-500">بنا</span></h1>
          <p className="text-white/40 text-xl max-w-2xl">
            نحن هنا لنصنع أثراً مستداماً معاً. ابدأ رحلتك معنا بالتواصل، وفريقنا سيرافقك في كل خطوة.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* العمود الأيسر: بيانات تفصيلية */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] space-y-8">
              <h3 className="text-xl font-bold border-b border-white/10 pb-4">معلومات التواصل</h3>
              
              <div className="space-y-6">
                {[ 
                  { icon: Mail, title: "البريد الإلكتروني", info: "support@fal.org", sub: "رد سريع خلال ساعات" },
                  { icon: Phone, title: "مركز خدمة العملاء", info: "920001234", sub: "متاح من 9ص إلى 9م" },
                  { icon: MapPin, title: "المكتب الرئيسي", info: "الرياض، حي النرجس", sub: "مبنى الإبداع التقني، الدور 3" },
                  { icon: Clock, title: "ساعات العمل", info: "السبت - الخميس", sub: "جمعة مباركة" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500 transition-colors">
                      <item.icon size={20} className="text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/30 uppercase tracking-widest">{item.title}</p>
                      <p className="font-bold">{item.info}</p>
                      <p className="text-xs text-emerald-400/70">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* بطاقة إضافية للأثر */}
            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-500/10">
              <Award className="text-emerald-500 mb-4" />
              <h4 className="font-bold mb-2">ثقة أكثر من 5000+</h4>
              <p className="text-sm text-white/50">انضم لمجتمعنا وساهم في نشر الخير عبر تقنياتنا الحديثة.</p>
            </div>
          </div>

          {/* العمود الأيمن: نموذج متطور */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="bg-[#050505] p-10 rounded-[3rem] border border-white/[0.05] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input required placeholder="الاسم الكريم" className="w-full bg-[#0a0a0a] p-5 rounded-2xl border border-white/5 focus:border-emerald-500 outline-none" />
                <input required placeholder="رقم الجوال" className="w-full bg-[#0a0a0a] p-5 rounded-2xl border border-white/5 focus:border-emerald-500 outline-none" />
              </div>
              
              <select className="w-full bg-[#0a0a0a] p-5 rounded-2xl border border-white/5 focus:border-emerald-500 outline-none mb-6">
                <option>استفسار عن التبرعات</option>
                <option>طلب انضمام كمعلم</option>
                <option>دعم تقني</option>
              </select>

              <textarea required rows={5} placeholder="كيف يمكننا خدمتك اليوم؟..." className="w-full bg-[#0a0a0a] p-5 rounded-2xl border border-white/5 focus:border-emerald-500 outline-none mb-8 resize-none" />

              <button className="w-full py-6 bg-emerald-600 rounded-2xl font-black text-lg hover:bg-emerald-500 transition-all flex items-center justify-center gap-2">
                {sent ? "تم الإرسال بنجاح ✅" : <>إرسال الطلب الآن <ChevronRight size={20} /></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}