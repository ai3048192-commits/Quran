"use client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import DonationPage from "./pages/DonationPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage"; // ضفنا صفحة تواصل معنا هنا الفاجرة

function App() {
  return (
    <Router>
      {/* الخلفية السوداء الفاخرة الموحدة للسيستم بالكامل */}
      <div className="min-h-screen bg-[#050505] flex flex-col text-white antialiased selection:bg-emerald-500 selection:text-black">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/donate" element={<DonationPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} /> {/* مسار تواصل معنا الجديد */}

            {/* إعادة توجيه لأي مسار غير موجود للرئيسية */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;