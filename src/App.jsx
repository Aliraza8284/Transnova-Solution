import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>

          {/* Landing Page */}
          <Route path="/" element={<Home />} />

          {/* Separate About Page */}
          <Route path="/about" element={<About />} />

          {/* Separate Services Page */}
          <Route path="/services" element={<Services />} />

          {/* Other Pages */}
          <Route path="/industries" element={<Industries />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}