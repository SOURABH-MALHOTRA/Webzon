import React, { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import webzon from "../assets/webzon.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 px-3 sm:px-4 md:px-6 pt-3`}
    >
      <div
        className={`max-w-7xl mx-auto rounded-2xl sm:rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-xl border border-gray-100"
            : "bg-white/80 backdrop-blur-md shadow-md"
        }`}
      >
        <div className="px-3 sm:px-5 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo Section */}
            <Link to="/" className="flex items-center h-full py-2 group shrink-0">
              <img
                src={webzon}
                alt="Webzon Logo"
                width="180"
                height="64"
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-1">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-600 to-cyan-500 px-4 lg:px-5 py-2.5 rounded-full transition-all font-semibold text-sm lg:text-base whitespace-nowrap"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>

            {/* Desktop CTA */}
            <Link
              to="/contact"
              className={`hidden lg:flex items-center gap-2 px-5 lg:px-7 py-2.5 lg:py-3 rounded-full font-bold transform transition-all duration-500 shadow-lg shrink-0 ${
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
              <span className="text-sm lg:text-base">Get Started</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors shrink-0"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation-menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 sm:w-7 sm:h-7" />
              ) : (
                <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          id="mobile-navigation-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-3 sm:px-5 pb-5 pt-2 flex flex-col space-y-2 border-t border-gray-100 mx-2">
            {["Home", "About", "Services", "Portfolio", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 rounded-xl transition-all font-semibold text-base block"
                >
                  {item}
                </Link>
              )
            )}
            <div className="pt-3">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-bold shadow-lg transition-all duration-500 transform ${
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
      </div>
    </nav>
  );
};

export default Header;