import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" }, // 메인
    { path: "/info", label: "Philosophy" }, // Philosophy를 /info로 연결
    { path: "/programs", label: "Programs" }, // 프로그램 목록
    { path: "/contents", label: "Contents" },
    { path: "/projects", label: "Projects" },
    { path: "/customer", label: "Customer Service" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-[80px] flex items-center ${
        isScrolled
          ? "bg-rootBeige/90 backdrop-blur-lg border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-serif font-black tracking-tighter text-rootGreen"
        >
          ROOT<span className="text-rootGold">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.2em]">
          <div className="flex items-center gap-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition-all hover:text-rootGreen relative py-1 ${
                    isActive
                      ? "text-rootGreen after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-rootGreen"
                      : "text-rootCharcoal/50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <Link
            to="/booking"
            className="bg-rootGreen text-white px-8 py-3 hover:bg-black transition-all shadow-xl shadow-rootGreen/10 active:scale-95 flex items-center justify-center h-fit"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-rootGreen"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-16 bg-rootBeige z-40 md:hidden p-8 flex flex-col gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-3xl font-serif font-bold text-rootCharcoal"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/booking"
              className="text-3xl font-serif font-bold text-rootGreen border-t border-black/10 pt-8"
            >
              Apply Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
