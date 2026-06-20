import { useState } from "react";
import {
  BookOpen,
  CalendarCheck,
  Wallet,
  Settings,
  ChevronDown,
} from "lucide-react";
const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const services = [
    {
      title: "إدارة الطلاب",
      desc: "سجل حفظ تفصيلي، تقارير مستوى بيانية، وملف شخصي متكامل للطالب.",
      icon: <BookOpen size={28} />,
    },
    {
      title: "الحضور والمتابعة",
      desc: "سجل حضور ذكي، متابعة فورية، وتنبيهات آلية لأولياء الأمور.",
      icon: <CalendarCheck size={28} />,
    },
    {
      title: "الخدمات المالية",
      desc: "لوحة تحكم للمصروفات والتبرعات مع تقارير شفافية دقيقة.",
      icon: <Wallet size={28} />,
    },
    {
      title: "إدارة النظام",
      desc: "أدوات تحكم شاملة للاختبارات، صلاحيات المعلمين، والإعلانات.",
      icon: <Settings size={28} />,
    },
  ];
  const faqs = [
    {
      q: "هل النظام يدعم المتابعة من الجوال؟",
      a: "نعم، النظام مصمم بالكامل ليعمل بكفاءة عالية على جميع الأجهزة، مما يتيح للمعلمين وأولياء الأمور متابعة التقدم في أي وقت ومن أي مكان.",
    },
    {
      q: "هل بيانات الطلاب مشفرة ومحمية؟",
      a: "بالتأكيد. نحن نستخدم بروتوكولات تشفير عالمية ونخزن البيانات في خوادم مؤمنة بالكامل، مع إجراء نسخ احتياطي دوري لضمان سرية وسلامة البيانات.",
    },
    {
      q: "هل يمكنني طلب نسخة خاصة للجمعية؟",
      a: "نعم، نوفر خدمة تخصيص (Customization) للجهات الكبرى، مع إضافة شعار الجمعية وصلاحيات إضافية حسب احتياجاتكم الإدارية.",
    },
    {
      q: "هل أحتاج لخبرة تقنية لتشغيل النظام؟",
      a: "أبداً. واجهة النظام تم تصميمها لتكون بديهية وسهلة، ستحصل على دليل استخدام بسيط وفريق دعم فني جاهز دائماً.",
    },
    {
      q: "كيف يتم التعامل مع الاشتراكات المالية؟",
      a: "النظام يوفر نظاماً مالياً دقيقاً وشفافاً يتيح لك إصدار تقارير فورية عن التبرعات والمصاريف مع دعم بوابات دفع آمنة.",
    },
  ];
  return (
    <div dir="rtl" className="bg-[#0a0d14] text-white">
      {/* 1. HERO SECTION: الواجهة الترحيبية */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#020408]">
        {/* خلفية تفاعلية بلمسة تقنية */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2070&auto=format&fit=crop"
            alt="Quran"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.15),transparent_70%)]"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl pt-20">
          {/* Badge أنيق */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            نظام رقمي متطور لخدمة أهل القرآن
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tighter leading-[0.9]">
            منصة{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-cyan-500">
              القرآن الكريم
            </span>
          </h1>

          <p className="text-gray-400 text-xl md:text-2xl mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            نظام متكامل لإدارة حلقات التحفيظ ومتابعة مسيرة الطلاب، يجمع بين دقة
            التنظيم وروحانية الخدمة.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-10 py-5 bg-white text-[#020408] font-black rounded-2xl hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              ابدأ رحلتك الآن
            </button>
            <button className="px-10 py-5 bg-transparent border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all">
              تعرف على المنصة
            </button>
          </div>
        </div>

        {/* تأثير "الضوء السفلي" */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#020408] to-transparent"></div>
      </section>

      {/* 2. SERVICES SECTION: قسم الخدمات والمميزات */}
      <section className="relative py-24 px-6 bg-[#0a0d14] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <span className="text-emerald-400 font-bold tracking-widest text-sm uppercase">
              مميزاتنا
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white">
              خدمات المنصة
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              ارتقِ بإدارة حلقتك القرآنية باستخدام أحدث التقنيات الرقمية المدمجة
              في واجهة واحدة.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="group relative bg-[#11141d] p-8 rounded-[2rem] border border-white/5 hover:border-emerald-500/50 transition-all duration-500 flex flex-col items-start"
              >
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/20 mb-8">
                  <div className="text-white">{s.icon}</div>
                </div>
                <h3 className="relative z-10 text-2xl font-bold text-white mb-4">
                  {s.title}
                </h3>
                <p className="relative z-10 text-gray-400 leading-relaxed text-sm flex-grow">
                  {s.desc}
                </p>
                <div className="relative z-10 mt-8 text-emerald-400 font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  استكشف الخدمة <span>←</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 3. SECTION: شركاء النجاح والجهات الموثقة */}
      <section className="py-24 bg-[#020202] relative selection:bg-emerald-500/30">
        {/* تأثيرات الإضاءة الخلفية (Blur Orbs) */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* الهيدر بتنسيق Typography جريء */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                شركاء
                <br />
                <span className="text-emerald-500 italic">النهضة التقنية</span>
              </h2>
            </div>
            <p className="text-gray-400 max-w-sm text-lg border-l-2 border-emerald-500 pl-6">
              نحن فخورون بدعم نخبة من المؤسسات التي غيرت وجه الخدمات القرآنية
              الرقمية.
            </p>
          </div>

          {/* الشبكة العضوية (Bento Grid Style) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[250px]">
            {[
              { name: "جمعية النور", span: "md:col-span-4" },
              { name: "مؤسسة القرآن", span: "md:col-span-4" },
              { name: "الجامع الكبير", span: "md:col-span-4" },
              { name: "وقف الإحسان", span: "md:col-span-12" },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.span} relative group overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.03] backdrop-blur-2xl p-8 flex items-center justify-between transition-all hover:bg-white/[0.05]`}
              >
                {/* تأثير التدرج المتحرك عند الماوس */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="flex items-center gap-6 z-10">
                  <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-2xl font-bold bg-white/5 shadow-inner">
                    {item.name[0]}
                  </div>
                  <div>
                    <h3 className="text-white text-2xl font-bold">
                      {item.name}
                    </h3>
                    <p className="text-emerald-400 text-sm tracking-widest uppercase">
                      شريك استراتيجي
                    </p>
                  </div>
                </div>

                <button className="z-10 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all">
                  →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 5. SECTION: التبرع والمساهمة (Donate Section) */}
      <section className="py-24 px-6 bg-[#020408]">
        <div className="max-w-5xl mx-auto relative">
          {/* تأثير توهج خلفي للبطاقة */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-[3rem] blur-xl opacity-75"></div>

          <div className="relative bg-[#080b14] border border-white/10 rounded-[2.5rem] p-10 md:p-16 overflow-hidden">
            {/* شبكة خلفية خفيفة (Grid Pattern) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

            <div className="relative flex flex-col md:flex-row items-center gap-12">
              {/* نص السكشن */}
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-xs uppercase tracking-widest">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  مشروع قائم ومستمر
                </div>

                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                  اجعل صدقتك <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    نوراً لا ينطفئ
                  </span>
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                  ساهم في بناء أجيال تحفظ كتاب الله. تبرعك يغطي تكاليف
                  الاستضافة، تطوير المنصة، ودعم آلاف الطلاب حول العالم.
                </p>

                {/* شريط التقدم بتصميم متطور */}
                <div className="bg-[#0e121d] p-6 rounded-2xl border border-white/5 shadow-inner">
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-gray-400 text-sm font-medium">
                      التقدم نحو الهدف
                    </span>
                    <span className="text-white text-2xl font-black">
                      75,000{" "}
                      <span className="text-sm font-normal">/ 100,000 ر.س</span>
                    </span>
                  </div>
                  <div className="h-4 w-full bg-[#05080f] rounded-full overflow-hidden p-1">
                    <div className="h-full w-[75%] bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]"></div>
                  </div>
                </div>
              </div>

              {/* زر التبرع الجذاب */}
              <div className="flex-none w-full md:w-72">
                <button className="group relative w-full py-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl text-white text-2xl font-black transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_20px_50px_-12px_rgba(16,185,129,0.5)]">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    تبرع الآن
                    <svg
                      className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </button>
                <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-sm">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" />
                  </svg>
                  تبرع آمن وموثق 100%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-24 px-6 bg-[#020408] relative overflow-hidden"
        dir="rtl"
      >
        {/* خلفية فنية */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-emerald-500/5 to-transparent blur-[100px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              ابدأ رحلتك في <span className="text-emerald-400">3 خطوات</span>
            </h2>
            <p className="text-gray-400 text-lg">
              بساطة في التصميم، قوة في الإدارة.
            </p>
          </div>

          {/* مسار الخطوات */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* الخط الواصل بين الصناديق */}
            <div className="hidden md:block absolute top-[15%] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-emerald-500/20 via-emerald-500/50 to-emerald-500/20" />

            {[
              {
                step: "01",
                title: "سجل حسابك",
                desc: "أدخل بياناتك الأساسية وابدأ فوراً في إدارة حلقتك.",
              },
              {
                step: "02",
                title: "أضف بياناتك",
                desc: "قم بإضافة أسماء الطلاب وتوزيعهم على الحلقات.",
              },
              {
                step: "03",
                title: "ابدأ المتابعة",
                desc: "استمتع بلوحة تحكم ذكية تتابع لك الإنجاز بدقة.",
              },
            ].map((item, i) => (
              <div key={i} className="relative group">
                {/* دائرة التحديد فوق الخط */}
                <div className="absolute -top-[10px] right-[50%] translate-x-1/2 w-6 h-6 rounded-full bg-[#020408] border-2 border-emerald-500 z-20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]" />
                </div>

                <div className="p-8 rounded-[2rem] bg-[#080b14] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)]">
                  <div className="text-5xl font-black text-white/10 mb-6 group-hover:text-emerald-500/20 transition-all">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-[#020408]" dir="rtl">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              أسئلة قد <span className="text-emerald-400">تخطر ببالك</span>
            </h2>
            <p className="text-gray-500">نحن هنا للإجابة على كل استفساراتك.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`group relative rounded-3xl border transition-all duration-500 ${
                    isOpen
                      ? "bg-[#0a0d14] border-emerald-500/30 shadow-[0_0_40px_-10px_rgba(16,185,129,0.15)]"
                      : "bg-[#080b14] border-white/5 hover:border-white/10"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full p-8 flex justify-between items-center text-right"
                  >
                    <span
                      className={`text-lg font-bold transition-colors ${isOpen ? "text-emerald-400" : "text-white group-hover:text-emerald-400"}`}
                    >
                      {item.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${isOpen ? "bg-emerald-500 border-emerald-500 text-white rotate-180" : "bg-white/5 border-white/10 text-gray-400"}`}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-8 pb-8 text-gray-400 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
