// ==========================================
// 1. ROUTER IMPORTS
// ==========================================

import {
  BrowserRouter,
  Routes,
  Route,
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
import Blog from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies";
import FAQs from "./pages/FAQs";

// ==========================================
// 4. LEGAL PAGES
// ==========================================

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

// ==========================================
// 5. APP COMPONENT
// ==========================================

export default function App() {
  return (
    <BrowserRouter>

      {/* Scroll page to top on route change */}
      <ScrollToTop />

      <Routes>

        {/* ==========================================
            MAIN WEBSITE LAYOUT
           ========================================== */}

        <Route element={<MainLayout />}>

          {/* HOME */}
          <Route
            index
            element={<Home />}
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* SERVICES */}
          <Route
            path="/services"
            element={<Services />}
          />

          {/* INDUSTRIES */}
          <Route
            path="/industries"
            element={<Industries />}
          />

          {/* CAREERS */}
          <Route
            path="/careers"
            element={<Careers />}
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* BLOG */}
          <Route
            path="/blog"
            element={<Blog />}
          />

          {/* CASE STUDIES */}
          <Route
            path="/case-studies"
            element={<CaseStudies />}
          />

          {/* FAQs */}
          <Route
            path="/faqs"
            element={<FAQs />}
          />

          {/* PRIVACY POLICY */}
          <Route
            path="/privacy"
            element={<PrivacyPolicy />}
          />

          {/* TERMS & CONDITIONS */}
          <Route
            path="/terms"
            element={<TermsConditions />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}