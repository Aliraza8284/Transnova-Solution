import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Services",
    path: "/services",
    dropdown: true,
  },
  {
    label: "Industries",
    path: "/industries",
  },
  {
    label: "Careers",
    path: "/careers",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

const serviceItems = [
  {
    label: "Consulting",
    path: "/services/consulting",
  },
  {
    label: "Development",
    path: "/services/development",
  },
  {
    label: "Support",
    path: "/services/support",
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <nav className="relative z-50 w-full bg-[#FAF9F6] shadow-sm">
        <div className="mx-auto flex h-[50px] w-full items-center justify-between px-4 sm:px-6 lg:px-8">
          <NavLink
            to="/"
            onClick={closeMenu}
            className="relative flex h-full items-center"
          >
            <img
              src="/alogo.png"
              alt="Transnova logo"
              className="pointer-events-none relative h-[35px] w-auto object-contain mt-2.5 mr-3"
            />

            <div className="relative z-10 flex flex-col leading-none ml-0">
              <div className="flex items-baseline">
                <span className="text-[18px] font-bold tracking-[-0.5px] text-[#111111] sm:text-[20px]">
                  TRANS
                </span>
                <span className="ml-[1px] text-[18px] font-bold tracking-[-0.5px] text-[#FF6B35] sm:text-[20px]">
                  NOVA
                </span>
              </div>

              <div className="mt-[1px] flex items-baseline">
                <span className="text-[9px] font-medium tracking-[0.5px] text-[#9B948A] sm:text-[11px]">
                  SOLUTIONS
                </span>
                <span className="ml-1.5 text-[7px] font-medium text-[#9B948A] sm:text-[10px]">
                  LTD
                </span>
              </div>
            </div>
          </NavLink>

          <div className="hidden gap-4 h-full items-center lg:flex lg:flex-1 lg:justify-center">
            {menuItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div
                    key={item.path}
                    className="relative mx-1 flex h-full items-center"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <NavLink
                      to={item.path}
                      className="group relative py-1 text-[13px] font-normal text-[#111111] transition-colors hover:text-[#FF6B35]"
                    >
                      <span>Services</span>
                      <span
                        className={`absolute bottom-[-2px] left-0 h-[2px] w-full origin-left rounded-full bg-[#FF6B35] transition-transform duration-200 ${
                          servicesOpen
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </NavLink>

                    <svg
                      className={`ml-1 h-3 w-3 text-[#9B948A] transition-transform duration-200 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m6 9 6 6 6-6"
                      />
                    </svg>

                    {servicesOpen && (
                      <div className="absolute left-0 top-full mt-2 w-48 rounded-xl border border-[#EDEAE4] bg-[#FAF9F6] p-2 shadow-xl">
                        {serviceItems.map((service) => (
                          <NavLink
                            key={service.path}
                            to={service.path}
                            onClick={closeMenu}
                            className="block rounded-lg px-4 py-2.5 text-sm font-normal text-[#9B948A] transition-colors hover:bg-[#EDEAE4] hover:text-[#111111]"
                          >
                            {service.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="group relative mx-1 py-1 text-[13px] font-normal text-[#111111] transition-colors hover:text-[#FF6B35]"
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={
                          isActive
                            ? "text-[#111111]"
                            : "text-[#111111] group-hover:text-[#FF6B35]"
                        }
                      >
                        {item.label}
                      </span>
                      <span
                        className={`absolute bottom-[-2px] left-0 h-[2px] w-full rounded-full bg-[#FF6B35] transition-transform duration-200 ${
                          item.label === "Home"
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <NavLink
              to="/quote"
              className="rounded-full bg-[#FF6B35] px-5 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-[#E85C2D]"
            >
              Get a Quote
            </NavLink>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#111111] transition-colors hover:bg-[#EDEAE4] lg:hidden"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
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

      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 flex h-[80vh] max-h-[500px] w-[280px] max-w-[80vw] flex-col bg-[#FAF9F6] rounded-2xl shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-[60px] items-center justify-between border-b border-[#EDEAE4] px-6 bg-white/50 backdrop-blur-sm rounded-t-2xl">
          <NavLink to="/" onClick={closeMenu} className="flex items-baseline">
            <span className="text-[20px] font-bold text-[#111111]">TRANS</span>
            <span className="ml-[2px] text-[20px] font-bold text-[#FF6B35]">
              NOVA
            </span>
          </NavLink>

          <button
            type="button"
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EDEAE4] text-[#111111] transition-colors hover:bg-[#DCD8D0]"
            aria-label="Close navigation"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `group relative flex items-center rounded-xl px-4 py-3 mb-1 text-[15px] font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#FF6B35]/10 text-[#111111]"
                    : "text-[#9B948A] hover:bg-[#EDEAE4] hover:text-[#111111]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  <span
                    className={`absolute right-4 h-2 w-2 rounded-full bg-[#FF6B35] transition-all duration-200 ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}

          <NavLink
            to="/quote"
            onClick={closeMenu}
            className="mt-6 block w-full rounded-full bg-[#FF6B35] px-6 py-3 text-center text-[15px] font-semibold text-white shadow-md transition-all hover:bg-[#E85C2D] hover:shadow-lg active:scale-95 flex items-center justify-center"
          >
            Get a Quote
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default Navbar;