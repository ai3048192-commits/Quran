import { useState } from "react";

import { Lock, Mail, Eye, EyeOff, User, Phone, BookOpen } from "lucide-react";



const LoginPage = () => {

  const [mode, setMode] = useState("login"); // "login" or "register"

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);



  return (

    <div className="min-h-screen bg-[#05080f] flex items-center justify-center p-4 " dir="rtl">

      <div className="w-full max-w-md">

        

        <div className="flex justify-center mb-8">

          <div className="flex items-center gap-3">

            <BookOpen size={42} className="text-emerald-400" />

            <span className="text-4xl font-black text-white">QuranSys</span>

          </div>

        </div>



        <div className="bg-[#0b1220] border border-gray-700/50 rounded-3xl shadow-2xl p-8">

          <h1 className="text-3xl font-black text-white text-center mb-2">

            {mode === "login" ? "تسجيل الدخول" : "إنشاء حساب جديد"}

          </h1>

          <p className="text-gray-400 text-center mb-8">

            {mode === "login" ? "أهلاً بك مرة أخرى" : "انضم إلينا وابدأ رحلتك"}

          </p>



          <form className="space-y-5">

            {mode === "register" && (

              <>

                <div className="relative">

                  <User className="absolute right-4 top-4 text-gray-500" size={22} />

                  <input type="text" placeholder="الاسم الكامل" className="w-full bg-[#111827] border border-gray-700 pr-12 py-4 rounded-2xl text-white outline-none" />

                </div>



                <div className="relative">

                  <Phone className="absolute right-4 top-4 text-gray-500" size={22} />

                  <input type="tel" placeholder="رقم الجوال" className="w-full bg-[#111827] border border-gray-700 pr-12 py-4 rounded-2xl text-white outline-none" />

                </div>



                <select className="w-full bg-[#111827] border border-gray-700 py-4 rounded-2xl text-white outline-none">

                  <option value="">اختر نوع الحساب</option>

                  <option value="admin">أدمن</option>

                  <option value="teacher">مدرس</option>

                  <option value="student">طالب</option>

                </select>

              </>

            )}



            <div className="relative">

              <Mail className="absolute right-4 top-4 text-gray-500" size={22} />

              <input type="email" placeholder="البريد الإلكتروني" className="w-full bg-[#111827] border border-gray-700 pr-12 py-4 rounded-2xl text-white outline-none" />

            </div>



            <div className="relative">

              <Lock className="absolute right-4 top-4 text-gray-500" size={22} />

              <input 

                type={showPassword ? "text" : "password"} 

                placeholder="كلمة المرور" 

                className="w-full bg-[#111827] border border-gray-700 pr-12 py-4 rounded-2xl text-white outline-none" 

              />

              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute left-4 top-4 text-gray-500">

                {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}

              </button>

            </div>



            {mode === "register" && (

              <div className="relative">

                <Lock className="absolute right-4 top-4 text-gray-500" size={22} />

                <input 

                  type={showConfirmPassword ? "text" : "password"} 

                  placeholder="تأكيد كلمة المرور" 

                  className="w-full bg-[#111827] border border-gray-700 pr-12 py-4 rounded-2xl text-white outline-none" 

                />

                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute left-4 top-4 text-gray-500">

                  {showConfirmPassword ? <EyeOff size={22} /> : <Eye size={22} />}

                </button>

              </div>

            )}



            <button type="submit" className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 py-4 rounded-2xl font-bold text-lg">

              {mode === "login" ? "دخول النظام" : "إنشاء الحساب"}

            </button>

          </form>



         <button
  className="w-full mt-5 flex items-center justify-center gap-3 py-4 rounded-2xl
  bg-white text-gray-900 font-semibold border border-gray-200
  shadow-sm hover:shadow-md hover:bg-gray-50
  active:scale-[0.98] transition-all duration-200"
>
  {/* Google Icon */}
  <div className="w-5 h-5 flex items-center justify-center">
    <img
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      alt="Google"
      className="w-full h-full"
    />
  </div>

  <span className="text-sm md:text-base">
    {mode === "login" ? "تسجيل الدخول" : "إنشاء حساب"} باستخدام Google
  </span>
</button>


          <div className="text-center mt-6 text-gray-400">

            {mode === "login" ? (

              <button onClick={() => setMode("register")} className="hover:text-emerald-400">

                ليس لديك حساب؟ <span className="text-emerald-400">إنشاء حساب</span>

              </button>

            ) : (

              <button onClick={() => setMode("login")} className="hover:text-emerald-400">

                لديك حساب؟ <span className="text-emerald-400">تسجيل الدخول</span>

              </button>

            )}

          </div>

        </div>

      </div>

    </div>

  );

};



export default LoginPage;