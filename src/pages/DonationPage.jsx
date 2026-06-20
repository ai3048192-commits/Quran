"use client";
import { useState, useMemo } from "react";
import {
  Copy,
  Check,
  Smartphone,
  Wallet,
  CreditCard,
  ArrowLeft,
  Sparkles,
  MousePointerClick,
  Banknote,
  Send,
  ShieldCheck,
  ReceiptText,
  HeartHandshake,
} from "lucide-react";

const BENEFICIARIES = [
  { id: 1, name: "حلقات النور", cat: "تعليم", phone: "01012345678", instapay: "noor@instapay" },
  { id: 2, name: "كفالة معلم", cat: "تعليم", phone: "01122334455", instapay: "teacher@instapay" },
  { id: 3, name: "وقف المصحف", cat: "وقف", phone: "01233445566", instapay: "moshaf@instapay" },
  { id: 4, name: "بناء مقرأة", cat: "بناء", phone: "01544556677", instapay: "maqra@instapay" },
  { id: 5, name: "كسوة العيد", cat: "إغاثة", phone: "01655667788", instapay: "eid@instapay" },
  { id: 6, name: "سقيا الماء", cat: "وقف", phone: "01766778899", instapay: "water@instapay" },
  { id: 7, name: "إفطار صائم", cat: "إغاثة", phone: "01877889900", instapay: "iftar@instapay" },
  { id: 8, name: "دعم أيتام", cat: "رعاية", phone: "01988990011", instapay: "orphan@instapay" },
  { id: 9, name: "طباعة كتب", cat: "تعليم", phone: "01099001122", instapay: "books@instapay" },
  { id: 10, name: "علاج مرضى", cat: "رعاية", phone: "01100112233", instapay: "medical@instapay" },
  { id: 11, name: "ترميم مسجد", cat: "بناء", phone: "01211223344", instapay: "masjid@instapay" },
  { id: 12, name: "حفر بئر", cat: "وقف", phone: "01322334455", instapay: "well@instapay" },
];

const ALL_CATS = ["الكل", ...Array.from(new Set(BENEFICIARIES.map((b) => b.cat)))];

const PAYMENT_METHODS = [
  { id: "vodafone", name: "فودافون كاش", icon: Smartphone },
  { id: "instapay", name: "إنستا باي", icon: Wallet },
  { id: "visa", name: "فيزا", icon: CreditCard },
];

const PRESET_AMOUNTS = [50, 100, 250, 500];

function DonationCenter() {
  const [step, setStep] = useState(1);
  const [activeCats, setActiveCats] = useState(["الكل"]);
  const [selected, setSelected] = useState([]);
  const [amount, setAmount] = useState(100);
  const [method, setMethod] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const filtered = useMemo(() => {
    if (activeCats.includes("الكل")) return BENEFICIARIES;
    return BENEFICIARIES.filter((b) => activeCats.includes(b.cat));
  }, [activeCats]);

  const toggleCat = (c) => {
    if (c === "الكل") {
      setActiveCats(["الكل"]);
      return;
    }
    setActiveCats((prev) => {
      const withoutAll = prev.filter((x) => x !== "الكل");
      const next = withoutAll.includes(c)
        ? withoutAll.filter((x) => x !== c)
        : [...withoutAll, c];
      return next.length === 0 ? ["الكل"] : next;
    });
  };

  const toggleBeneficiary = (b) => {
    setSelected((prev) =>
      prev.find((i) => i.id === b.id) ? prev.filter((i) => i.id !== b.id) : [...prev, b]
    );
  };

  const copyToClipboard = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const restart = () => {
    setSelected([]);
    setMethod(null);
    setActiveCats(["الكل"]);
    setStep(1);
  };

  const totalAmount = Math.round(parseFloat(amount) || 0) * (selected.length || 1);

  return (
    <div
      dir="rtl"
      className="w-full max-w-2xl mx-auto rounded-[32px] border border-white/10 bg-[#030303] p-5 sm:p-7 lg:p-9 text-white shadow-[0_0_120px_-30px_rgba(16,185,129,0.35)] relative overflow-hidden"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-64 h-64 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Header */}
      <div className="relative flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/15 flex items-center justify-center">
            <Sparkles size={15} className="text-emerald-400" />
          </div>
          <h2 className="text-lg font-black">
            منصة <span className="text-emerald-500">الخير</span>
          </h2>
        </div>
        <div className="flex gap-1.5">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                step >= i ? "w-8 bg-emerald-500" : "w-2.5 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Step 1: category filter + multi-select beneficiaries */}
      {step === 1 && (
        <div className="relative space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-white/40 mb-2.5 font-bold">
              فلتر بالفئة · اختر أكثر من واحدة
            </p>
            <div className="flex flex-wrap gap-2">
              {ALL_CATS.map((c) => {
                const isOn = activeCats.includes(c);
                return (
                  <button
                    key={c}
                    onClick={() => toggleCat(c)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                      isOn
                        ? "bg-emerald-500 text-black"
                        : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 max-h-96 overflow-auto pr-1 -mr-1">
            {filtered.map((b) => {
              const isSel = selected.some((s) => s.id === b.id);
              return (
                <button
                  key={b.id}
                  onClick={() => toggleBeneficiary(b)}
                  className={`relative text-right p-3.5 rounded-2xl text-sm transition-all ${
                    isSel
                      ? "border border-emerald-500 bg-emerald-500/10"
                      : "border border-white/5 bg-white/[0.03] hover:bg-white/[0.06]"
                  }`}
                >
                  {isSel && (
                    <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                      <Check size={10} className="text-black" />
                    </div>
                  )}
                  <div className="font-bold">{b.name}</div>
                  <div className="text-[10px] text-white/40 mt-1">{b.cat}</div>
                </button>
              );
            })}
          </div>

          <button
            disabled={selected.length === 0}
            onClick={() => setStep(2)}
            className="w-full py-4 rounded-2xl bg-emerald-600 font-black disabled:opacity-20 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 hover:bg-emerald-500"
          >
            التالي {selected.length > 0 && `(${selected.length})`}
          </button>
        </div>
      )}

      {/* Step 2: amount */}
      {step === 2 && (
        <div className="relative space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
          <p className="text-[11px] uppercase tracking-wider text-white/40 font-bold">قيمة التبرع للفرد</p>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-5 sm:p-7 text-center">
            <div className="flex items-baseline justify-center gap-2">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-transparent text-center text-4xl sm:text-5xl font-black w-36 sm:w-44 outline-none text-emerald-400"
              />
              <span className="text-sm text-white/40 font-bold">جنيه</span>
            </div>
            <input
              type="range"
              min={10}
              max={2000}
              step={10}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full mt-5 accent-emerald-500"
            />
            {selected.length > 1 && (
              <p className="text-[11px] text-white/40 mt-3">
                الإجمالي لـ {selected.length} جهات ·{" "}
                <span className="text-emerald-400 font-bold">{totalAmount.toLocaleString()} جنيه</span>
              </p>
            )}
          </div>

          <div className="flex gap-2">
            {PRESET_AMOUNTS.map((v) => (
              <button
                key={v}
                onClick={() => setAmount(v)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  Number(amount) === v
                    ? "bg-emerald-500 text-black"
                    : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10"
                }`}
              >
                {v}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={() => setStep(3)}
              className="w-full sm:flex-1 py-4 rounded-2xl bg-emerald-600 font-black hover:bg-emerald-500 transition-all"
            >
              التالي
            </button>
            <button
              onClick={() => setStep(1)}
              className="w-full sm:flex-1 py-3.5 rounded-2xl border border-white/10 text-white/60 font-bold flex items-center justify-center gap-1.5 hover:bg-white/5"
            >
              <ArrowLeft size={14} /> رجوع
            </button>
          </div>
        </div>
      )}

      {/* Step 3: payment method + summary */}
      {step === 3 && (
        <div className="relative space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
          <p className="text-[11px] uppercase tracking-wider text-white/40 font-bold">اختر وسيلة الدفع</p>

          <div className="grid grid-cols-3 gap-2.5">
            {PAYMENT_METHODS.map((m) => {
              const Icon = m.icon;
              const isActive = method?.id === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setMethod(m)}
                  className={`flex flex-col items-center gap-2 py-4 rounded-2xl transition-all ${
                    isActive
                      ? "border border-emerald-500 bg-emerald-500/10"
                      : "border border-white/5 bg-white/[0.03] hover:bg-white/[0.06]"
                  }`}
                >
                  <Icon size={20} className={isActive ? "text-emerald-400" : "text-white/60"} />
                  <span className="text-[10px] font-bold">{m.name}</span>
                </button>
              );
            })}
          </div>

          {method && (
            <div className="grid sm:grid-cols-2 gap-2.5">
              {selected.map((item) => {
                const value =
                  method.id === "vodafone"
                    ? item.phone
                    : method.id === "instapay"
                    ? item.instapay
                    : "سيتم التحويل لصفحة الدفع الآمنة";
                const amt = Math.round(parseFloat(amount) || 0);
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-3 p-4 rounded-2xl border border-white/10 bg-white/[0.03]"
                  >
                    <div>
                      <p className="font-bold text-sm">{item.name}</p>
                      <p className="text-[10px] text-white/40 mt-0.5">{amt.toLocaleString()} جنيه</p>
                      <p className="font-black text-lg tracking-widest mt-1.5 text-emerald-400">
                        {value}
                      </p>
                    </div>
                    {method.id !== "visa" && (
                      <button
                        onClick={() => copyToClipboard(item.id, value)}
                        className="p-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition-all"
                      >
                        {copiedId === item.id ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={restart}
              className="w-full sm:flex-1 py-4 rounded-2xl bg-emerald-600 font-black hover:bg-emerald-500 transition-all"
            >
              إتمام تبرع آخر
            </button>
            <button
              onClick={() => setStep(2)}
              className="w-full sm:flex-1 py-3.5 rounded-2xl border border-white/10 text-white/60 font-bold flex items-center justify-center gap-1.5 hover:bg-white/5"
            >
              <ArrowLeft size={14} /> رجوع
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const STEPS_EXPLAINER = [
  {
    icon: MousePointerClick,
    title: "تختار وتحدد",
    desc: "تفلتر بالفئة وتختار جهة أو أكتر، وتحدد القيمة الا تحبها.",
  },
  {
    icon: Send,
    title: "تحول المبلغ",
    desc: "تختار وسيلة الدفع وتحول من حسابك لرقم أو حساب الجهة مباشرة.",
  },
  {
    icon: ReceiptText,
    title: "تتأكد وتاخد إيصال",
    desc: "الجهة بتأكد استلام التحويل، وممكن تطلب إيصال أو سند قبض.",
  },
  {
    icon: HeartHandshake,
    title: "تبرعك يوصل",
    desc: "المبلغ بيتوجه مباشرة للمشروع أو الحالة الا اخترتها بدون وسيط.",
  },
];

const FAQ_EXPLAINER = [
  {
    q: "تبرعي بيروح فين بالظبط؟",
    a: "بيروح مباشرة لحساب الجهة الا اخترتها، مفيش وسيط بياخد نسبة أو يأجل التحويل.",
  },
  {
    q: "هل التحويل آمن؟",
    a: "كل الأرقام والحسابات الموجودة متأكد منها ومراجعة، والتحويل بيتم بنفس وسيلة الدفع الا تستخدمها عادي.",
  },
  {
    q: "هل أقدر أتبرع لأكتر من جهة مرة واحدة؟",
    a: "أكيد، تقدر تختار أكتر من جهة في نفس المرة وكل واحدة هيظهر ليها رقمها لوحدها.",
  },
  {
    q: "هل فيه حد أدنى للتبرع؟",
    a: "لا، تقدر تكتب أي قيمة تناسبك، وفيه قيم جاهزة لو حابب تختار بسرعة.",
  },
];

function HowItWorks() {
  return (
    
    <div
      dir="rtl"
      className="w-full max-w-2xl mx-auto mt-6 rounded-[32px] border border-white/10 bg-[#030303] p-5 sm:p-7 lg:p-9 text-white relative overflow-hidden"
    >

    
      <div className="pointer-events-none absolute -top-20 right-0 w-56 h-56 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative flex items-center gap-2 mb-1">
        <div className="w-8 h-8 rounded-xl bg-emerald-500/15 flex items-center justify-center">
          <ShieldCheck size={15} className="text-e
          merald-400" />
        </div>
        <h3 className="text-lg font-black ">إزاي تبرعك بيحصل؟</h3>
      </div>
      <p className="relative text-xs text-white/40 mb-6">
        خطوات بسيطة من اختيارك للجهة لحد ما المبلغ يوصل
      </p>

      {/* Steps timeline */}
      <div className="relative space-y-0">
        {STEPS_EXPLAINER.map((s, i) => {
          const Icon = s.icon;
          const isLast = i === STEPS_EXPLAINER.length - 1;
          return (
            <div key={s.title} className="relative flex gap-4 pb-6 last:pb-0">
              {!isLast && (
                <div className="absolute right-[19px] top-10 bottom-0 w-px bg-gradient-to-b from-emerald-500/40 to-transparent" />
              )}
              <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <Icon size={17} className="text-emerald-400" />
              </div>
              <div className="pt-1">
                <p className="font-bold text-sm">{s.title}</p>
                <p className="text-xs text-white/50 mt-1 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust strip */}
      <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-2 mt-7 mb-7">
        {[
          { icon: Banknote, label: "بدون وسيط" },
          { icon: ShieldCheck, label: "بيانات موثقة" },
          { icon: ReceiptText, label: "سند لكل تبرع" },
        ].map((t) => {
          const Icon = t.icon;
          return (
            <div
              key={t.label}
              className="flex flex-col items-center gap-2 py-4 rounded-2xl border border-white/5 bg-white/[0.03]"
            >
              <Icon size={16} className="text-emerald-400" />
              <span className="text-[10px] text-white/60 text-center font-bold">{t.label}</span>
            </div>
          );
        })}
      </div>

      {/* FAQ */}
      <div className="relative space-y-2">
        {FAQ_EXPLAINER.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3.5 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex items-center justify-between cursor-pointer text-sm font-bold list-none">
              {f.q}
              <span className="text-emerald-400 text-base transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="text-xs text-white/50 mt-2.5 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

export default function DonationPage() {
  return (
    <div className="px-4 sm:px-6 py-6 space-y-6">
      <DonationCenter />
      <HowItWorks />
    </div>
  );
}