// src/components/common/Navbar.jsx
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, 
  Info, 
  Wrench, 
  Factory, 
  Briefcase, 
  Mail, 
  ChevronRight, 
  X, 
  Truck, 
  DollarSign, 
  FileText, 
  HelpCircle 
} from "lucide-react";

const menuItems = [
  {
    label: "𝑯𝒐𝒎𝒆",
    path: "/",
    icon: Home,
  },
   {
    label: "𝑨𝒃𝒐𝒖𝒕 𝑼𝒔",
    path: "/about",
    icon: Info,
  },
  {
    label: "𝑺𝒆𝒓𝒗𝒊𝒄𝒆𝒔",
    path: "/services",
    icon: Wrench,
  },
  {
    label: "𝑰𝒏𝒅𝒖𝒔𝒕𝒓𝒊𝒆𝒔",
    path: "/industries",
    icon: Factory,
  },
  {
    label: "𝑻𝒓𝒖𝒄𝒌 𝑻𝒚𝒑𝒆𝒔",
    path: "/truck-types",
    icon: Truck,
  },
  {
    label: "𝑷𝒓𝒊𝒄𝒊𝒏𝒈",
    path: "/pricing",
    icon: DollarSign,
  },
  {
    label: "𝑪𝒂𝒓𝒆𝒆𝒓𝒔",
    path: "/careers",
    icon: Briefcase,
  },
 
  {
    label: "𝑩𝒍𝒐𝒈",
    path: "/blog",
    icon: FileText,
  },
  {
    label: "𝑭𝑨𝑸",
    path: "/faqs",
    icon: HelpCircle,
  },
  {
    label: "𝑪𝒐𝒏𝒕𝒂𝒄𝒕 𝑼𝒔",
    path: "/contact",
    icon: Mail,
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldBeWhite = isScrolled || !isHome;

  const getNavbarBg = () => {
    if (shouldBeWhite) {
      return 'bg-[#1A1A1A]/95 backdrop-blur-md shadow-lg shadow-black/30';
    } else {
      return 'bg-transparent';
    }
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${getNavbarBg()}`}
        style={{
          transform: isScrolled ? 'translateY(4px)' : 'translateY(0)',
          boxShadow: shouldBeWhite
            ? '0 8px 30px rgba(0,0,0,0.3), 0 2px 10px rgba(0,0,0,0.15)'
            : 'none',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <div className="mx-auto flex h-[56px] sm:h-[60px] w-full items-center justify-between px-3 sm:px-6 lg:px-8">

          {/* LOGO - Responsive */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="relative flex h-full items-center gap-1.5 sm:gap-2 flex-shrink-0"
          >
            <img
              src="/alogo.png"
              alt="Transnova logo"
              className="pointer-events-none h-[28px] sm:h-[32px] w-auto object-contain"
            />

            <div className="flex items-center leading-none whitespace-nowrap">
              <span className="text-[14px] sm:text-[17px] font-bold tracking-[-0.5px] text-white">
                𝑻𝑹𝑨𝑵𝑺
              </span>

              <span className="ml-0.5 sm:ml-1 text-[14px] sm:text-[17px] font-bold tracking-[-0.5px] text-[#FF6B35]">
                𝑵𝑶𝑽𝑨
              </span>

              <span className="ml-1.5 sm:ml-2 text-[14px] sm:text-[17px] font-bold tracking-[-0.5px] text-white">
                𝑺𝑶𝑳𝑼𝑻𝑰𝑶𝑵𝑺
              </span>
            </div>
          </NavLink>

          {/* DESKTOP MENU - With proper gaps */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-center h-full items-center">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `group relative mx-1.5 xl:mx-2 py-1 text-[13px] xl:text-[14px] font-medium transition-colors duration-300 ${
                    isActive ? 'text-[#FF6B35]' : 'text-white hover:text-[#FF6B35]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="whitespace-nowrap font-serif" style={{ fontFamily: "'Brush Script MT', cursive, serif" }}>
                      {item.label}
                    </span>
                    <span
                      className={`absolute bottom-[-2px] left-0 h-[2px] w-full rounded-full bg-[#FF6B35] transition-transform duration-200 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* GET A QUOTE BUTTON - Desktop - Links to Fleet Services */}
          <div className="hidden lg:block">
            <NavLink
              to="/Outlet"
              className="rounded-full border-2 border-[#FF6B35] px-5 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-[#FF6B35] hover:text-white"
            >
              𝑮𝒆𝒕 𝒂 𝑸𝒖𝒐𝒕𝒆
            </NavLink>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full transition-colors duration-300 lg:hidden flex-shrink-0 text-white hover:bg-white/10"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* MOBILE MENU SIDEBAR - Full height right drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-[280px] max-w-[85vw] flex-col bg-[#1A1A1A] shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header - Mobile Menu Logo */}
        <div className="flex h-[64px] shrink-0 items-center justify-between border-b border-white/10 px-4 sm:px-6">
          <NavLink to="/" onClick={closeMenu} className="flex items-center gap-2">
            <img
              src="/alogo.png"
              alt="Transnova logo"
              className="h-[26px] w-auto object-contain"
            />
            <div className="flex items-baseline">
              <span className="text-[18px] font-bold text-white">𝑻𝑹𝑨𝑵𝑺</span>
              <span className="ml-[1px] text-[18px] font-bold text-[#FF6B35]">
                𝑵𝑶𝑽𝑨
              </span>
            </div>
          </NavLink>

          <button
            type="button"
            onClick={closeMenu}
            className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
            aria-label="Close navigation"
          >
            <X className="h-5 w-5" strokeWidth={1.8} />
          </button>
        </div>

        {/* Nav items */}
        <div className="flex-1 overflow-y-auto px-3 py-4 sm:px-4 sm:py-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `group mb-1 flex items-center justify-between rounded-xl px-3 py-3 sm:px-4 sm:py-3.5 transition-all duration-200 ${
                    isActive
                      ? "bg-[#FF6B35] text-white shadow-md shadow-[#FF6B35]/30"
                      : "text-white hover:bg-white/10"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="flex items-center gap-2.5 sm:gap-3">
                      {Icon && (
                        <Icon
                          className={`h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] ${
                            isActive ? "text-white" : "text-[#FF6B35]"
                          }`}
                          strokeWidth={1.8}
                        />
                      )}
                      <span className="text-[14px] sm:text-[15px] font-medium text-white font-serif" style={{ fontFamily: "'Brush Script MT', cursive, serif" }}>
                        {item.label}
                      </span>
                    </span>
                    <ChevronRight
                      className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-200 ${
                        isActive ? "text-white" : "text-white/50 group-hover:translate-x-0.5"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Get a Quote - Mobile - Links to Fleet Services */}
        <div className="shrink-0 border-t border-white/10 p-3 sm:p-4">
          <NavLink
            to="/Outlet"
            onClick={closeMenu}
            className="flex w-full items-center justify-center rounded-full bg-[#FF6B35] px-4 py-3 sm:px-6 sm:py-3.5 text-center text-[14px] sm:text-[15px] font-semibold text-white shadow-md transition-all hover:bg-[#E85C2D] hover:shadow-lg active:scale-95"
          >
            𝑮𝒆𝒕 𝒂 𝑸𝒖𝒐𝒕𝒆
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default Navbar;