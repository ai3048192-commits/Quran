"use client";
import { useState } from "react";
import {
  Calendar,
  X,
  BookOpen,
  Users,
  Award,
  MapPin,
  Mic,
  GraduationCap,
  HeartHandshake,
  ChevronLeft,
  Sparkles,
  Globe,
  Gift,
  Baby,
  Library,
  Flame,
} from "lucide-react";

const ITEMS = [
  {
    id: 1,
    type: "نشاط",
    icon: BookOpen,
    title: "حملة ختم القرآن الكريم",
    date: "15 يونيو 2026",
    place: "جميع الفروع",
    summary: "أكثر من 500 طالب وطالبة شاركوا في ختمة جماعية على مدار الشهر.",
    featured: true,
    body:
      "انطلقت حملة الختمة الكبرى بمشاركة أكثر من 500 طالب وطالبة من جميع الفروع، حيث تم تقسيم المشاركين على مجموعات صغيرة لكل مجموعة معلم متابع. استمرت الحملة طوال الشهر بجلسات يومية للتلاوة والمراجعة، وانتهت بحفل ختام جمع الطلاب وأولياء الأمور لسماع آخر الأجزاء وتكريم المشاركين. الهدف من الحملة هو تحبيب الطلاب في القرآن وتعويدهم على الورد اليومي بشكل جماعي يحفّز الاستمرار.",
  },
  {
    id: 2,
    type: "خبر",
    icon: Award,
    title: "تكريم الحافظ الصغير",
    date: "10 يونيو 2026",
    place: "مقر الإدارة",
    summary: "تكريم طالب أتمّ حفظ القرآن كاملاً في حفل حضره أولياء الأمور.",
    body:
      "في أجواء إيمانية مليئة بالفرحة، أقامت المنصة حفل تكريم لطالب أتمّ حفظ القرآن الكريم كاملاً قبل بلوغه الثانية عشرة من عمره. حضر الحفل أولياء الأمور والمعلمون، وتم تقديم شهادة تقدير وهدية رمزية للطالب وأسرته تقديراً لجهدهما المشترك. هذا التكريم يأتي في إطار برنامج تحفيزي دوري للطلاب المتميزين بهدف تشجيع باقي الطلاب على إكمال مسيرة الحفظ.",
  },
  {
    id: 3,
    type: "نشاط",
    icon: MapPin,
    title: "افتتاح مقرأة جديدة في الرياض",
    date: "05 يونيو 2026",
    place: "الرياض - حي النرجس",
    summary: "فرع جديد لخدمة الطلاب بسعة استيعابية لأكثر من 200 طالب.",
    body:
      "استمراراً لخطة التوسع، تم بحمد الله افتتاح فرع جديد للمقرأة في حي النرجس بالرياض، مجهز بقاعات تحفيظ مكيفة وسعة استيعابية لأكثر من 200 طالب وطالبة في الفترتين الصباحية والمسائية. يأتي هذا الافتتاح تلبية لطلبات متكررة من أهالي المنطقة، ويضم الفرع كادراً من المعلمين المتخصصين في التحفيظ والتلاوة بالأحكام.",
  },
  {
    id: 4,
    type: "خبر",
    icon: Mic,
    title: "ندوة عن آداب طالب القرآن",
    date: "28 مايو 2026",
    place: "قاعة المحاضرات الكبرى",
    summary: "ندوة لأحد المشايخ تناولت آداب التعامل مع كتاب الله وحامله.",
    body:
      "استضافت المنصة ندوة دينية بعنوان \"آداب طالب القرآن\" تحدث فيها أحد المشايخ عن آداب التعامل مع القرآن الكريم من حيث الطهارة والخشوع، وآداب التعامل مع حافظ القرآن واحترام مجالس العلم. حضر الندوة عدد كبير من الطلاب وأولياء الأمور، وأعقبها جلسة أسئلة وأجوبة فتحت المجال للنقاش حول تطبيق هذه الآداب في الحياة اليومية.",
  },
  {
    id: 5,
    type: "نشاط",
    icon: Users,
    title: "مخيم صيفي لطلاب التحفيظ",
    date: "20 مايو 2026",
    place: "استراحة الواحة",
    summary: "ثلاثة أيام جمعت بين التحفيظ والأنشطة الترفيهية الهادفة.",
    body:
      "نظمت المنصة مخيماً صيفياً امتد على ثلاثة أيام لطلاب التحفيظ المتميزين، جمع بين جلسات المراجعة اليومية والأنشطة الترفيهية الهادفة مثل المسابقات القرآنية والألعاب الجماعية وحلقات القصص. هدف المخيم إلى تعزيز الروابط بين الطلاب في بيئة محببة بعيدة عن الدراسة الرسمية، مع الحفاظ على الورد اليومي من القرآن طوال أيام المخيم.",
  },
  {
    id: 6,
    type: "خبر",
    icon: GraduationCap,
    title: "تخريج الدفعة العاشرة من المعلمين",
    date: "12 مايو 2026",
    place: "مركز التدريب",
    summary: "40 معلماً ومعلمة أكملوا برنامج التأهيل لتدريس التحفيظ.",
    body:
      "احتفلت المنصة بتخريج الدفعة العاشرة من برنامج تأهيل معلمي ومعلمات التحفيظ، وضمت الدفعة 40 متدرباً أكملوا برنامجاً مكثفاً شمل أحكام التلاوة وطرق التدريس الحديثة والتعامل مع الفئات العمرية المختلفة. سينضم خريجو هذه الدفعة إلى الفروع القائمة والفروع الجديدة لتغطية الطلب المتزايد على حلقات التحفيظ.",
  },
  {
    id: 7,
    type: "نشاط",
    icon: HeartHandshake,
    title: "قافلة دعوية للقرى النائية",
    date: "02 مايو 2026",
    place: "قرى الشمال",
    summary: "زيارات ميدانية لتوزيع المصاحف وفتح حلقات تحفيظ مؤقتة.",
    body:
      "تحركت قافلة دعوية تطوعية إلى عدد من القرى النائية لتوزيع نسخ من المصحف الشريف وفتح حلقات تحفيظ مؤقتة لأطفال المنطقة خلال فترة الزيارة. شارك في القافلة عدد من المعلمين المتطوعين الذين قدموا جلسات تعليمية مكثفة، إلى جانب التواصل مع الأهالي لبحث إمكانية افتتاح حلقة دائمة في المنطقة مستقبلاً.",
  },
  {
    id: 8,
    type: "خبر",
    icon: Award,
    title: "فوز فريق المنصة بمسابقة إقليمية",
    date: "22 أبريل 2026",
    place: "المسابقة الإقليمية للتحفيظ",
    summary: "ثلاثة طلاب يحققون المراكز الأولى في مسابقة التحفيظ الإقليمية.",
    body:
      "حقق ثلاثة من طلاب المنصة المراكز الأولى في المسابقة الإقليمية لتحفيظ القرآن الكريم، بعد منافسة قوية ضمت مشاركين من عدة جهات تعليمية. جاء هذا الفوز نتيجة تدريب مكثف استمر لعدة أشهر تحت إشراف لجنة من المعلمين المتخصصين، وتم تكريم الطلاب الفائزين في حفل خاص حضره ممثلون عن الجهة المنظمة للمسابقة.",
  },
  {
    id: 9,
    type: "نشاط",
    icon: Baby,
    title: "حلقات تحفيظ لمرحلة الروضة",
    date: "15 أبريل 2026",
    place: "فرع جدة",
    summary: "برنامج جديد لتحبيب القرآن للأطفال من سن 4 إلى 6 سنوات.",
    body:
      "أطلق فرع جدة برنامجاً تعليمياً مبتكراً لتحفيظ القرآن الكريم للأطفال من سن 4 إلى 6 سنوات، يعتمد على أساليب تعليمية محببة مثل الأناشيد والقصص والوسائل البصرية بدلاً من الحفظ التقليدي. صمم البرنامج بالتعاون مع متخصصين في رياض الأطفال لضمان مناسبته للمرحلة العمرية، وحقق تفاعلاً كبيراً من الأهالي منذ إطلاقه.",
  },
  {
    id: 10,
    type: "خبر",
    icon: Library,
    title: "إطلاق مكتبة صوتية للتلاوات",
    date: "30 مارس 2026",
    place: "المنصة الرقمية",
    summary: "أرشيف صوتي مجاني يضم تلاوات الطلاب المتميزين والمعلمين.",
    body:
      "أطلقت المنصة مكتبة صوتية رقمية مجانية تضم تلاوات مختارة لطلابها المتميزين ومعلميها، بهدف توفير مصدر تعليمي يستفيد منه الطلاب في تحسين تلاوتهم والاستماع إلى نماذج صحيحة من القراء المحليين. تتيح المكتبة البحث بحسب السورة أو القارئ، وتُحدَّث بشكل دوري بتلاوات جديدة.",
  },
  {
    id: 11,
    type: "نشاط",
    icon: Globe,
    title: "شراكة تعليمية مع منصات دولية",
    date: "18 مارس 2026",
    place: "عن بُعد",
    summary: "اتفاقية لتبادل الخبرات في تحفيظ القرآن مع مراكز خارج المملكة.",
    body:
      "وقّعت المنصة اتفاقية شراكة تعليمية مع عدد من مراكز تحفيظ القرآن خارج المملكة، تتضمن تبادل الخبرات في المناهج وطرق التدريس وتنظيم لقاءات دورية عن بُعد بين الطلاب من جنسيات مختلفة. تهدف الشراكة إلى تعزيز الروح التعليمية الجماعية وفتح المجال لتبادل أفضل الممارسات في تعليم القرآن.",
  },
  {
    id: 12,
    type: "خبر",
    icon: Gift,
    title: "حقيبة رمضانية للطلاب المحتاجين",
    date: "01 مارس 2026",
    place: "جميع الفروع",
    summary: "توزيع حقائب تحتوي على مصحف وكتب تعليمية للطلاب الأقل حظاً.",
    body:
      "بمناسبة قرب شهر رمضان، نظمت المنصة حملة لتوزيع حقائب تعليمية على الطلاب الأقل حظاً تضم نسخة من المصحف الشريف وكتيبات تعليمية ودفاتر للمتابعة اليومية للورد. جاءت الحملة بدعم من المتبرعين الذين ساهموا في تغطية تكلفة الحقائب، وشملت التوزيع جميع فروع المنصة.",
  },
  {
    id: 13,
    type: "نشاط",
    icon: Flame,
    title: "مسابقة العشر الأوائل من ذي الحجة",
    date: "20 فبراير 2026",
    place: "جميع الفروع",
    summary: "مسابقة يومية في الحفظ والتلاوة بجوائز رمزية للمتفوقين.",
    body:
      "أقامت المنصة مسابقة يومية خلال العشر الأوائل من ذي الحجة شملت اختبارات قصيرة في الحفظ والتلاوة وأحكام التجويد، مع تقديم جوائز رمزية يومية للمتفوقين وجائزة كبرى في نهاية المسابقة. هدفت المسابقة إلى استثمار هذه الأيام المباركة في تحفيز الطلاب على المراجعة والاستمرار في الحفظ.",
  },
  {
    id: 14,
    type: "خبر",
    icon: Users,
    title: "لقاء أولياء الأمور الفصلي",
    date: "05 فبراير 2026",
    place: "مقر الإدارة",
    summary: "جلسة تواصل لمناقشة تقدم الطلاب وجمع ملاحظات الأهالي.",
    body:
      "نظمت المنصة لقاءها الفصلي مع أولياء الأمور لمناقشة مستوى تقدم الطلاب في الحفظ والتلاوة، واستعراض النتائج الدورية لكل طالب بشكل فردي مع معلمه. كما تضمن اللقاء جلسة مفتوحة لجمع ملاحظات الأهالي ومقترحاتهم لتطوير البرنامج التعليمي، حرصاً من المنصة على إشراك الأسرة في رحلة الطالب التعليمية.",
  },
];

const TYPES = ["الكل", "خبر", "نشاط"];

export default function NewsPage() {
  const [activeType, setActiveType] = useState("الكل");
  const [openItem, setOpenItem] = useState(null);

  const featured = ITEMS.find((i) => i.featured);
  const rest = ITEMS.filter((i) => !i.featured);
  const filtered =
    activeType === "الكل" ? rest : rest.filter((i) => i.type === activeType);



  return (
    <section dir="rtl" className="min-h-screen bg-[#050505] text-white py-14 px-4 sm:px-6 relative overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <Sparkles size={13} className="text-emerald-400" />
            <span className="text-[11px] font-bold text-emerald-400">منصة الخير</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-3">
            الأخبار <span className="text-emerald-500">والأنشطة</span>
          </h1>
          <p className="text-white/40 text-sm max-w-md mx-auto">
            كل جديد عن القرآن الكريم وأثره في طلابنا ومجتمعنا
          </p>
        </div>

      

        {/* Featured */}
        {featured && (
          <button
            onClick={() => setOpenItem(featured)}
            className="group w-full text-right mb-10 rounded-[28px] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-white/[0.02] to-transparent p-6 sm:p-9 relative overflow-hidden hover:border-emerald-500/40 transition-all"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-emerald-500/20 blur-3xl" />
            <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-500 text-black mb-5">
              الأبرز الآن
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-3 group-hover:text-emerald-400 transition-colors">
              {featured.title}
            </h2>
            <p className="text-sm text-white/50 max-w-lg leading-relaxed mb-5">
              {featured.summary}
            </p>
            <div className="flex items-center gap-4 text-xs text-white/40">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} /> {featured.date}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} /> {featured.place}
              </span>
            </div>
            <span className="absolute bottom-6 left-6 flex items-center gap-1 text-emerald-400 font-bold text-sm group-hover:gap-2 transition-all">
              اقرأ التفاصيل <ChevronLeft size={16} />
            </span>
          </button>
        )}

        {/* Filter */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-sm text-white/60">كل الأخبار والأنشطة</h3>
          <div className="flex gap-2">
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeType === t
                    ? "bg-emerald-500 text-black"
                    : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setOpenItem(item)}
                className="group text-right rounded-[24px] border border-white/5 bg-white/[0.03] p-5 hover:border-emerald-500/40 hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                    <Icon size={16} className="text-emerald-400 group-hover:text-black" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/5 text-white/50">
                    {item.type}
                  </span>
                </div>
                <p className="font-bold text-sm leading-snug mb-2 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </p>
                <p className="text-xs text-white/40 leading-relaxed mb-4 line-clamp-2">
                  {item.summary}
                </p>
                <div className="flex items-center justify-between text-[11px] text-white/30">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} /> {item.date}
                  </span>
                  <ChevronLeft
                    size={15}
                    className="text-white/20 group-hover:text-emerald-400 group-hover:-translate-x-1 transition-all"
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail overlay */}
      {openItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpenItem(null)}
        >
          <div
            dir="rtl"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-[28px] border border-emerald-500/20 bg-[#0a0a0a] p-6 sm:p-8 max-h-[85vh] overflow-auto"
          >
            <div className="pointer-events-none absolute -top-16 -left-16 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl" />

            <button
              onClick={() => setOpenItem(null)}
              className="absolute top-5 left-5 w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 z-10"
              aria-label="إغلاق"
            >
              <X size={16} />
            </button>

            <div className="relative w-12 h-12 rounded-2xl bg-emerald-500/15 flex items-center justify-center mb-5">
              {(() => {
                const Icon = openItem.icon;
                return <Icon size={20} className="text-emerald-400" />;
              })()}
            </div>

            <div className="relative flex flex-wrap items-center gap-2 mb-3">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400">
                {openItem.type}
              </span>
              <span className="flex items-center gap-1 text-xs text-white/40">
                <Calendar size={13} /> {openItem.date}
              </span>
              <span className="flex items-center gap-1 text-xs text-white/40">
                <MapPin size={13} /> {openItem.place}
              </span>
            </div>

            <h2 className="relative text-2xl font-black mb-4">{openItem.title}</h2>
            <p className="relative text-sm text-white/60 leading-relaxed">{openItem.body}</p>
          </div>
        </div>
      )}
    </section>
  );
}