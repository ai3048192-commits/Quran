import { Zap, Target, BarChart3, ShieldCheck } from "lucide-react";

const AboutPlatform = () => {
  const features = [
    { label: "حلقات تفاعلية", val: "سلسة", icon: <Zap size={24} /> },
    { label: "نظام تتبع", val: "دقيق", icon: <Target size={24} /> },
    { label: "تحليلات أداء", val: "لحظية", icon: <BarChart3 size={24} /> },
    { label: "بيئة آمنة", val: "مشفرة", icon: <ShieldCheck size={24} /> },
  ];

  const stats = [
    { title: "حلقة قرآنية", count: "500+" },
    { title: "ساعة إقراء", count: "10k+" },
    { title: "دولة حول العالم", count: "20+" },
  ];

  return (
    <section
      className="py-24 bg-[#050505] text-white relative overflow-hidden"
      dir="rtl"
    >
      {/* خلفية بتوهج خفيف */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* الجزء الأول: القسم التعريفي والمميزات */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 relative">
          {/* تأثير توهج خلفي درامي */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-[150px]" />

          {/* الجزء الأيسر: النص */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-[10px] font-bold mb-8 uppercase tracking-[0.3em]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              متاح للجميع
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tight text-white">
              مستقبلك الرقمي <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-800">
                للتحفيظ
              </span>
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-10 border-r-4 border-emerald-500 pr-8">
              صممنا منصة "فل" لتكون الجسر الرقمي الأول الذي يربط الحلقات
              القرآنية بأحدث تقنيات العصر، لبناء جيل حافظٍ متقن.
            </p>

            <div className="flex gap-4">
              <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                ابدأ رحلتك الآن
              </button>
            </div>
          </div>

          {/* الجزء الأيمن: الـ Features بستايل Floating Cards */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((item, i) => (
              <div
                key={i}
                className={`group p-8 bg-[#0a0a0a] rounded-[2rem] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 
        ${i % 2 !== 0 ? "lg:mt-16" : "lg:mt-0"}`}
              >
                <div className="mb-6 p-4 w-fit bg-emerald-500/10 rounded-2xl text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="text-3xl font-black text-white mb-1">
                  {item.val}
                </div>
                <div className="text-gray-500 font-medium tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative py-40 flex flex-col items-center text-center px-6 overflow-hidden">
          {/* تأثير التوهج في الخلفية (Background Glow) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/20 blur-[150px] rounded-full pointer-events-none"></div>

          <div className="relative max-w-3xl z-10">
            {/* زخرفة إسلامية خفيفة جداً (اختياري) */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none">
              <svg
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L14.39 9.26L22 9.26L15.81 13.74L18.2 21L12 16.5L5.8 21L8.19 13.74L2 9.26L9.61 9.26L12 2Z" />
              </svg>
            </div>

            <h2 className="text-6xl md:text-9xl font-black text-white mb-20 tracking-tighter drop-shadow-2xl">
              القرآن.. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-600 italic">
                عهدٌ باقٍ
              </span>
            </h2>

            <div className="grid gap-10 text-2xl md:text-3xl font-light text-gray-400">
              <p className="hover:text-white transition-colors duration-500 cursor-default">
                نحن لا نبيعُ خدماتٍ رقمية.
              </p>
              <p className="text-white font-bold text-3xl md:text-4xl py-6 border-y border-emerald-500/20">
                "نحن نمهّد الطريقَ لجيلٍ يقرأُ القرآنَ بإتقان"
              </p>
              <p className="hover:text-white transition-colors duration-500 cursor-default">
                التقنيةُ وسيلة، والهدفُ هو الارتقاء.
              </p>
            </div>

            {/* خط فاصل مع تأثير نبض بسيط */}
            <div className="mt-20 flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.05] pt-24 mb-24">
          {/* الإحصائيات بتصميم Bento-Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group relative p-10 bg-[#050505] rounded-[2.5rem] border border-white/5 overflow-hidden transition-all duration-700 hover:border-emerald-500/30 hover:bg-[#080808]"
              >
                {/* تأثير التوهج المحيطي (Glow) عند التحويم */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem]" />

                <div className="relative z-10">
                  {/* الرقم مع تأثير تباين حاد */}
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2 tracking-tighter">
                    {stat.count}
                  </div>

                  {/* العنوان */}
                  <div className="text-emerald-500 font-bold text-xs tracking-[0.3em] uppercase">
                    {stat.title}
                  </div>
                </div>

                {/* الزخرفة الرقمية (الآن أضفنا لها تأثير Motion خفيف عند التحويم) */}
                <div className="absolute -bottom-8 -right-4 text-white/[0.03] text-[10rem] font-black italic transition-transform duration-700 group-hover:translate-x-4">
                  {stat.count.toString().slice(0, 1)}
                </div>
              </div>
            ))}
          </div>

          {/* قسم الرسالة (Glassmorphism Pro) */}
          <div className="relative overflow-hidden rounded-[3rem] bg-[#020202] border border-white/10 p-12 lg:p-20">
            {/* تأثير إضاءة خلفية درامي */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-xs uppercase tracking-widest mb-6">
                  رسالة المنصة
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                  "خيركم من تعلم <br />{" "}
                  <span className="text-emerald-500 italic">القرآن وعلمه"</span>
                </h3>
                <p className="text-gray-400 text-lg">
                  نحن هنا لنسهل هذه الرحلة المباركة بأحدث التقنيات الرقمية.
                </p>
              </div>

              {/* أزرار المنصات بتصميم Neo-Brutalism */}
              <div className="flex flex-col gap-4 w-full lg:w-auto">
                <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] text-center lg:text-right">
                  تحميل التطبيق
                </span>
                <div className="flex gap-4 justify-center">
                  {["Web", "Android", "iOS"].map((p) => (
                    <button
                      key={p}
                      className="px-8 py-4 bg-white/5 hover:bg-white text-white hover:text-black font-black rounded-2xl transition-all duration-500 border border-white/10 backdrop-blur-md"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-32 px-6 relative">
          <div className="text-center mb-24 relative">
            {/* تأثير "هالة الضوء" خلف العنوان لتعزيز العمق */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" />

            <h2 className="relative text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter drop-shadow-2xl">
              رحلة <br className="md:hidden" />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-500 hover:scale-[1.02] transition-transform duration-500">
                الإتقان
                {/* انعكاس خفيف للنص لزيادة الفخامة */}
                <span className="absolute -bottom-2 left-0 w-full h-full bg-gradient-to-b from-emerald-500/10 to-transparent blur-md -z-10" />
              </span>
            </h2>

            {/* خط سفلي متوهج بتأثير نبضي خفيف */}
            <div className="w-48 h-1 mx-auto rounded-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent shadow-[0_0_20px_rgba(16,185,129,0.5)] animate-pulse" />
          </div>
          {/* الشبكة التفاعلية */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* خط المسار (الذي يتوهج عند التحويم) */}
            <div className="absolute top-[60px] left-[15%] right-[15%] h-[1px] bg-white/10 hidden md:block" />

            {[
              {
                step: "01",
                title: "البداية",
                desc: "بيئة رقمية تركز على الطالب وتمنع التشتت.",
              },
              {
                step: "02",
                title: "التحول",
                desc: "جسر رقمي يربط النخبة من المعلمين بالطلاب.",
              },
              {
                step: "03",
                title: "التمكين",
                desc: "أدوات تتبع لحظية تجعل الإنجاز ملموساً.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative flex flex-col items-center"
              >
                {/* الدائرة التفاعلية (The Energy Node) */}
                <div className="relative mb-10 w-24 h-24 flex items-center justify-center rounded-full bg-[#050505] border border-white/5 transition-all duration-700 group-hover:border-emerald-500 group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                  <span className="text-2xl font-black text-white group-hover:text-emerald-400 transition-colors duration-500">
                    {item.step}
                  </span>

                  {/* نقطة التوهج */}
                  <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-ping opacity-0 group-hover:opacity-100" />
                </div>

                {/* الكارت (بأسلوب الزجاج المشمّع) */}
                <div className="w-full p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-4 hover:bg-white/[0.04] hover:border-emerald-500/30">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* مؤشر بصري سفلي */}
                  <div className="mt-8 h-1 w-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-700 group-hover:w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 p-8">
          {[
            {
              old: "بحث مُرهق",
              new: "تخصيص ذكي",
              desc: "وفرنا عليك ساعات البحث عن المعلم المناسب.",
            },
            {
              old: "تتبع غامض",
              new: "تحليل لحظي",
              desc: "أرقام دقيقة توضح مستوى إتقانك لكل سورة.",
            },
            {
              old: "عزلة",
              new: "مجتمع عالمي",
              desc: "حلقات تجمعك بطلاب من 20 دولة حول العالم.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative p-8 bg-[#050505] rounded-[2rem] border border-white/5 transition-all duration-500 hover:border-emerald-500/50 hover:bg-[#080808]"
            >
              {/* تأثير التوهج الخلفي المحسن */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-[10px] font-bold uppercase text-gray-700 line-through decoration-gray-800 decoration-2 transition-all group-hover:text-gray-500">
                    {item.old}
                  </div>
                  <div className="h-px w-8 bg-gradient-to-l from-emerald-500/50 to-gray-800" />
                  <div className="text-xs font-black uppercase text-emerald-400 tracking-wider">
                    {item.new}
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>

                {/* أيقونة أكثر أناقة عند الـ Hover */}
                <div className="mt-auto self-end text-emerald-500/10 group-hover:text-emerald-500/30 transition-all duration-500 group-hover:translate-x-2">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* الجزء الثالث: نموذج التواصل والتعليقات */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* الفورم بستايل Dark Glassmorphism */}
          <div className="bg-[#050505] p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
            {/* تأثير إضاءة خفيفة داخل الفورم */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />

            <div className="relative z-10">
              <h3 className="text-3xl font-black text-white mb-2">
                شاركنا تجربتك
              </h3>
              <p className="text-gray-500 mb-10 text-sm font-medium">
                رسالتك تهمنا، كن جزءاً من رحلتنا.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="الاسم"
                    className="w-full p-4 bg-[#0a0a0a] border border-white/5 rounded-2xl text-white outline-none focus:border-emerald-500 transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="الهاتف"
                    className="w-full p-4 bg-[#0a0a0a] border border-white/5 rounded-2xl text-white outline-none focus:border-emerald-500 transition-all"
                  />
                </div>
                <textarea
                  rows="4"
                  placeholder="اكتب رسالتك..."
                  className="w-full p-4 bg-[#0a0a0a] border border-white/5 rounded-2xl text-white outline-none focus:border-emerald-500 transition-all"
                ></textarea>
                <button className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl transition-all shadow-[0_10px_20px_-5px_rgba(16,185,129,0.3)]">
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>

          {/* قسم آخر الرسائل بستايل "البطاقات المضيئة" */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-8 text-white">آخر الرسائل</h3>
            {[1, 2].map((i) => (
              <div
                key={i}
                className="group relative p-1 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent hover:from-emerald-500/20 transition-all duration-500"
              >
                <div className="p-8 bg-[#050505] rounded-[1.9rem] border border-white/5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-emerald-500 font-black">
                      م
                    </div>
                    <h4 className="font-bold text-white">محمد أحمد</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed italic">
                    "تجربة رائعة جداً، التصميم سهل والاستخدام بسيط. بارك الله
                    فيكم على هذا المجهود الطيب."
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPlatform;
