import React, { useEffect, useRef, useState } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import webzon from "../assets/webzon.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const mobilePanelRef = useRef(null);
  const navItems = ["Home", "About", "Services", "Portfolio", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap || !navRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-header-logo]", {
        y: -18,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });
      gsap.from("[data-header-nav-item]", {
        y: -14,
        opacity: 0,
        stagger: 0.08,
        duration: 0.45,
        delay: 0.1,
        ease: "power2.out",
      });
      gsap.from("[data-header-cta]", {
        y: -12,
        opacity: 0,
        duration: 0.5,
        delay: 0.28,
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap || !mobilePanelRef.current) return;

    if (isMenuOpen) {
      gsap.fromTo(
        mobilePanelRef.current,
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.32, ease: "power2.out" }
      );
      gsap.fromTo(
        "[data-mobile-nav-item]",
        { y: -8, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.06, duration: 0.24, delay: 0.05 }
      );
    }
  }, [isMenuOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-blue-100/70"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section - Ab sirf Image hai jo poori height cover karegi */}
          <Link to="/" data-header-logo className="flex items-center h-full py-2 group">
            <img
              src={webzon}
              alt="Webzon Logo"
              width="180"
              height="64"
              className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 rounded-full border border-blue-100 bg-white/80 px-2 py-2 shadow-sm">
            {navItems.map((item) => (
                <NavLink
                  data-header-nav-item
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full transition-all font-semibold text-sm lg:text-base ${
                      isActive
                        ? "text-white bg-gradient-to-r from-blue-600 to-green-500 shadow-lg"
                        : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                    }`
                  }
                >
                  {item}
                </NavLink>
              ))}
          </div>

          {/* Desktop CTA */}
          <Link
            data-header-cta
            to="/contact"
            className={`hidden md:flex items-center gap-2 px-7 py-3 rounded-full font-bold transform transition-all duration-500 shadow-lg ${
              scrolled
                ? "bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white shadow-green-500/30 scale-105"
                : "bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-blue-500/20"
            } hover:scale-110 active:scale-95`}
          >
            <Rocket
              className={`w-4 h-4 ${
                scrolled ? "animate-bounce" : "animate-pulse"
              }`}
            />
            <span>Get Started</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation-menu"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div
          ref={mobilePanelRef}
          id="mobile-navigation-menu"
          className="md:hidden bg-white border-t border-blue-100 shadow-2xl absolute w-full left-0 top-20"
        >
          <div className="px-4 py-6 flex flex-col space-y-3">
            {navItems.map((item) => (
                <NavLink
                  data-mobile-nav-item
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-6 py-3 rounded-xl transition-all font-semibold text-base block ${
                      isActive
                        ? "text-white bg-gradient-to-r from-blue-600 to-green-500"
                        : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                    }`
                  }
                >
                  {item}
                </NavLink>
              ))}
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl font-bold shadow-lg transition-all duration-500 transform ${
                  scrolled
                    ? "bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white shadow-green-500/30"
                    : "bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-blue-500/20"
                } active:scale-95`}
              >
                <Rocket
                  className={`w-5 h-5 ${
                    scrolled ? "animate-bounce" : "animate-pulse"
                  }`}
                />
                <span>Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
