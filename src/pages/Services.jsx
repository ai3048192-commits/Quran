import {
  BrainCircuit,
  Landmark,
  LayoutDashboard,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { BookOpenText, CalendarDays, Mic, Award } from "lucide-react";
const Services = () => {
  const services = [
    {
      title: "منصات التعلّم الذكي",
      desc: "بيئات رقمية تفاعلية للقرآن الكريم مع تتبع لحظي.",
      icon: <BrainCircuit size={32} />,
      span: "md:col-span-2 lg:col-span-1",
    },
    {
      title: "حلول التبرع الرقمي",
      desc: "أنظمة دفع عالمية مؤمنة وشفافة بالكامل.",
      icon: <Landmark size={32} />,
      span: "md:col-span-2 lg:col-span-1",
    },
    {
      title: "إدارة العمليات (ERP)",
      desc: "ربط المعلمين والطلاب والمتبرعين في منظومة ذكية.",
      icon: <LayoutDashboard size={32} />,
      span: "md:col-span-1 lg:col-span-1",
    },
    {
      title: "التحول الرقمي",
      desc: "تطبيقات هواتف ذكية (iOS/Android) بأداء فائق.",
      icon: <Smartphone size={32} />,
      span: "md:col-span-1 lg:col-span-1",
    },
  ];

  return (
    <div className="w-full bg-[#050505] text-white
    " dir="rtl">
      {/* القسم الأول */}
    <section className="py-32 overflow-hidden relative bg-[#020202]">
  {/* توهج خلفي محيطي */}
  <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

  <div className="max-w-7xl mx-auto px-6">
    {/* العنوان العلوي */}
    <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
      <div>
        <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white">
          حلولنا التقنية <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 italic">للمستقبل</span>
        </h2>
        <p className="text-gray-500 max-w-sm text-lg font-medium">
          نبتكر حلولاً رقمية تحول المؤسسات الخيرية إلى كيانات تقنية رائدة.
        </p>
      </div>
      
      <button className="group flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black hover:bg-emerald-500 transition-all duration-300 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
        اطلب استشارتك الآن 
        <div className="bg-black/10 p-1.5 rounded-full group-hover:rotate-45 transition-transform">
          <ArrowRight size={18} />
        </div>
      </button>
    </div>

    {/* شبكة الخدمات (Bento Grid) */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((s, i) => (
        <div
          key={i}
          className={`group relative p-1 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent hover:from-emerald-500/50 hover:to-transparent transition-all duration-700 ${s.span}`}
        >
          <div className="h-full p-8 rounded-[2.4rem] bg-[#050505] border border-white/5 flex flex-col justify-between">
            <div>
              <div className="mb-8 p-4 w-fit rounded-3xl bg-white/5 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{s.desc}</p>
            </div>
            
            <div className="mt-10 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all">
              <ArrowRight size={20} className="text-white group-hover:rotate-45 transition-transform" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* القسم الثاني */}
     <div className="max-w-7xl mx-auto px-6 mb-32">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/[0.08] rounded-[2rem] overflow-hidden border border-white/[0.08] shadow-[0_0_50px_rgba(0,0,0,0.3)]">
    {[
      { val: "99.9%", text: "معدل استقرار الأنظمة" },
      { val: "10x", text: "زيادة في كفاءة الإدارة" },
      { val: "24/7", text: "دعم فني استباقي" },
    ].map((item, i) => (
      <div
        key={i}
        className="relative p-12 bg-[#020202] hover:bg-[#050505] transition-all duration-700 group cursor-default"
      >
        {/* تأثير إضاءة "تتبع الماوس" (Soft Spotlight) */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative z-10">
          {/* الأرقام بتصميم الـ Monospace لتبدو تقنية أكثر */}
          <h3 className="text-6xl font-black mb-4 tracking-tighter text-white group-hover:text-emerald-400 transition-colors duration-500 font-mono">
            {item.val}
          </h3>
          
          {/* خط علوي يظهر فقط عند التحويم كنوع من التفاعل البصري */}
          <div className="w-12 h-0.5 bg-emerald-500 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0" />
          
          <p className="text-gray-500 font-bold tracking-[0.2em] uppercase text-[11px] group-hover:text-white transition-colors duration-500">
            {item.text}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
      {/* القسم الثالث */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative rounded-[3rem] p-16 bg-[#030303] border border-white/[0.05] overflow-hidden">
          {/* خلفية دائرية انسيابية */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-emerald-500/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-emerald-500/10 rounded-full animate-spin-slow" />

          <h3 className="text-4xl md:text-5xl font-black mb-20 text-center relative z-10">
            رحلتك في <span className="text-emerald-500">حفظ القرآن</span>
          </h3>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {[
              {
                step: "الاستكشاف",
                desc: "تحديد مستوى الحفظ",
                icon: <BookOpenText size={40} />,
              },
              {
                step: "الخطط",
                desc: "بناء منهجك الشخصي",
                icon: <CalendarDays size={40} />,
              },
              {
                step: "التسميع",
                desc: "تسميع صوتي ذكي",
                icon: <Mic size={40} />,
              },
              {
                step: "الإتقان",
                desc: "قياس دقة التلاوة",
                icon: <Award size={40} />,
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
                  {/* الإطار الدائري الخارجي */}
                  <div className="absolute inset-0 border-[3px] border-dashed border-emerald-500/20 rounded-full" />

                  {/* الأيقونة التي تدور 360 درجة */}
                  <div className="text-emerald-500 transition-all duration-1000 group-hover:rotate-[360deg] group-hover:text-white">
                    {item.icon}
                  </div>
                </div>

                <h4 className="font-bold text-lg mb-2">{item.step}</h4>
                <p className="text-gray-500 text-sm text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pb-32">
  <div className="text-center mb-20">
    <h3 className="text-6xl font-black text-white mb-6 tracking-tighter">قصص <span className="text-emerald-500 italic">نجاح</span></h3>
    <p className="text-gray-500 text-lg">تحويل التحديات إلى أرقام تتحدث.</p>
  </div>

  <div className="grid lg:grid-cols-2 gap-8">
    {[
      { title: "معهد النور القرآني", problem: "صعوبة في تتبع تقدم الطلاب يدوياً.", result: "40%", desc: "رفع كفاءة التحفيظ عبر أتمتة ذكية.", color: "from-emerald-500/20" },
      { title: "منصة التكافل", problem: "تأخر في معالجة طلبات المتبرعين.", result: "70%", desc: "تقليل زمن العمليات عبر بوابة دفع مؤتمتة.", color: "from-blue-500/20" },
    ].map((item, i) => (
      <div key={i} className="group relative p-10 bg-[#050505] rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden">
        {/* تأثير إضاءة خلفية عند التحويم */}
        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-12">
            <h4 className="text-2xl font-black text-white">{item.title}</h4>
            <div className="text-5xl font-black text-emerald-500">{item.result}</div>
          </div>

          <div className="space-y-6 mb-10">
            <div>
              <p className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">التحدي</p>
              <p className="text-gray-400 text-sm leading-relaxed">{item.problem}</p>
            </div>
            <div className="h-px w-full bg-white/5" />
            <div>
              <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2">النتيجة</p>
              <p className="text-white font-bold text-lg">{item.desc}</p>
            </div>
          </div>

          <button className="flex items-center gap-2 text-sm font-black text-white bg-white/5 px-6 py-3 rounded-full hover:bg-emerald-500 transition-all duration-300">
            عرض التفاصيل
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default Services;
