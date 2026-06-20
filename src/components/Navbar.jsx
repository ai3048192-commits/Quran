import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { BookOpen, LogIn, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menu = [
    { name: "تواصل معنا", path: "/contact" },
    { name: "الأخبار والأنشطة", path: "/news" },
    { name: "التبرعات", path: "/donate" }, // يجب أن يطابق ما في App.js    { name: "خدماتنا", path: "/services" },

    { name: "عن المنصة", path: "/about-us" },
    { name: "خدماتنا ", path: "/services" },

    { name: "الرئيسية", path: "/" },
  ];
  return (
    <nav className="bg-[#0b1220]/90 backdrop-blur-lg border-b border-gray-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20 flex-row-reverse">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-700 rounded-xl group-hover:rotate-6 transition-transform">
              <BookOpen size={24} className="text-white" />
            </div>
            <span className="text-2xl font-black tracking-tight text-white">
              Quran
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 bg-gray-900/50 p-1.5 rounded-full border border-gray-800">
            {menu.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all duration-300
                    ${active ? "bg-emerald-600 text-white" : "text-gray-400 hover:text-white hover:bg-white/10"}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Login Button - Green Theme */}
          <Link
            to="/login"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            تسجيل الدخول <LogIn size={18} />
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu - Improved */}
        <div
          className={`md:hidden transition-all duration-400 overflow-hidden ${isOpen ? "max-h-[500px] pb-6" : "max-h-0"}`}
        >
          <div className="flex flex-col gap-1.5 pt-4 border-t border-gray-800">
            {menu.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-base font-medium text-gray-200 hover:bg-white/10 rounded-2xl transition-all"
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="mt-3 mx-2 flex justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 font-bold text-lg"
            >
              تسجيل الدخول <LogIn size={20} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
