// ==========================================
// 1. ROUTER IMPORTS
// ==========================================

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

// ==========================================
// 2. LAYOUT & UTILITIES
// ==========================================

import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./utils/ScrollToTop";

// ==========================================
// 3. MAIN PAGES
// ==========================================

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";  // ← Blog component (contains both list and article)
import CaseStudies from "./pages/CaseStudies";
import FAQs from "./pages/FAQs";
import TruckTypes from "./pages/TruckTypes";
import Pricing from "./pages/Pricing";

// ==========================================
// 4. LEGAL PAGES
// ==========================================

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

// ==========================================
// 5. DRIVE WITH TLS PAGE
// ==========================================

import DriveWithTLS from "./pages/Outlet";

// ==========================================
// 6. APP COMPONENT
// ==========================================

export default function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollToTop />

      <Routes>

        <Route element={<MainLayout />}>

          {/* HOME */}
          <Route index element={<Home />} />

          {/* ABOUT */}
          <Route path="/about" element={<About />} />

          {/* SERVICES */}
          <Route path="/services" element={<Services />} />

          {/* FLEET SERVICES / DRIVE WITH TLS */}
          <Route path="/Outlet" element={<DriveWithTLS />} />

          {/* INDUSTRIES */}
          <Route path="/industries" element={<Industries />} />

          {/* CAREERS */}
          <Route path="/careers" element={<Careers />} />

          {/* CONTACT */}
          <Route path="/contact" element={<Contact />} />

          {/* BLOG - Both list and single article */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />  {/* ← IMPORTANT: Add this line */}

          {/* CASE STUDIES */}
          <Route path="/case-studies" element={<CaseStudies />} />

          {/* FAQs */}
          <Route path="/faqs" element={<FAQs />} />

          {/* TRUCK TYPES */}
          <Route path="/truck-types" element={<TruckTypes />} />

          {/* PRICING */}
          <Route path="/pricing" element={<Pricing />} />

          {/* PRIVACY POLICY */}
          <Route path="/privacy" element={<PrivacyPolicy />} />

          {/* TERMS & CONDITIONS */}
          <Route path="/terms" element={<TermsConditions />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}