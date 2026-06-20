const Footer = () => {
  return (
    <footer className="bg-[#05080f] pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* العمود الأول: نبذة */}
        <div className="col-span-1 md:col-span-2 space-y-4">
          <h2 className="text-2xl font-black text-white">منصة <span className="text-emerald-400">القرآن الكريم</span></h2>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            نظام تقني متكامل يهدف لخدمة كتاب الله وتسهيل إدارة حلقات التحفيظ باستخدام أحدث التقنيات الرقمية.
          </p>
        </div>

        {/* العمود الثاني: روابط */}
        <div>
          <h4 className="text-white font-bold mb-6">روابط سريعة</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">الرئيسية</li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">الخدمات</li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">عن المنصة</li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">تواصل معنا</li>
          </ul>
        </div>

        {/* العمود الثالث: التواصل */}
        <div>
          <h4 className="text-white font-bold mb-6">اتصل بنا</h4>
          <ul className="space-y-4 text-gray-400">
            <li>info@quranplatform.com</li>
            <li>الرياض، المملكة العربية السعودية</li>
            <li className="flex gap-4 mt-4">
              {/* أيقونات اجتماعية بسيطة */}
              <div className="w-10 h-10 rounded-full bg-[#11141d] flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all cursor-pointer">ت</div>
              <div className="w-10 h-10 rounded-full bg-[#11141d] flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all cursor-pointer">و</div>
              <div className="w-10 h-10 rounded-full bg-[#11141d] flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all cursor-pointer">ف</div>
            </li>
          </ul>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="text-center pt-10 border-t border-white/5 text-gray-500 text-sm">
        © 2026 جميع الحقوق محفوظة لمنصة القرآن الكريم.
      </div>
    </footer>
  );
};

export default Footer;