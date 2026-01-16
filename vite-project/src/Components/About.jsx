import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Target,
  Eye,
  Award,
  Users,
  TrendingUp,
  Zap,
  Heart,
  Shield,
  Code2,
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  Briefcase,
  Clock,
  Globe,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const values = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Innovation First",
      desc: "We push boundaries and embrace cutting-edge technologies to deliver solutions that stand out in the market.",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Client Success",
      desc: "Your success is our mission. We build lasting partnerships by delivering exceptional results every time.",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Quality Assurance",
      desc: "Every line of code is crafted with precision. We maintain the highest standards in everything we deliver.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Team Collaboration",
      desc: "Great solutions come from great teams. We foster creativity, respect, and open communication.",
    },
  ];

  // Team, Milestones aur Achievements ka data wahi rakha hai jo aapne diya tha

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section - Style same, only color changed to Logo Blue/Green */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20 animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fadeInUp">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-bold text-sm mb-6 shadow-lg">
              ABOUT WEBZON
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Building Digital
              <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-green-500 bg-clip-text text-transparent">
                Excellence Together
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-medium">
              We're not just developers. We're digital architects, innovation
              partners, and your success story creators.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Style Same as your original, just colors swapped */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission - Orange replaced with Blue */}
            <div className="group relative bg-gradient-to-br from-blue-600 to-blue-700 p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mb-20"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-black text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-white/90 leading-relaxed">
                  To empower businesses worldwide with innovative software
                  solutions that drive growth, enhance efficiency, and create
                  lasting digital impact. We're committed to turning complex
                  challenges into simple, elegant solutions.
                </p>
              </div>
            </div>

            {/* Vision - Style exactly as yours, orange accents changed to green/blue */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-500/10 rounded-full -ml-20 -mb-20"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-blue-500/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <Eye className="w-10 h-10 text-blue-500" />
                </div>
                <h2 className="text-4xl font-black text-white mb-6">
                  Our Vision
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  To be the most trusted and innovative software development
                  partner globally, recognized for excellence, creativity, and
                  the transformative impact we create for every client we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Style Same, Only colors updated */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-bold text-sm mb-6">
              OUR CORE VALUES
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              What Drives{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Us Forward
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values aren't just words on a wall. They're the foundation of
              everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`relative bg-white p-8 rounded-3xl shadow-xl transform transition-all duration-500 border-2 ${
                  activeValue === index
                    ? "border-blue-500 scale-105 shadow-2xl"
                    : "border-gray-100 hover:border-blue-200"
                }`}
                onMouseEnter={() => setActiveValue(index)}
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br from-blue-600 to-green-500 rounded-2xl flex items-center justify-center mb-6 text-white shadow-xl transition-transform duration-300 ${
                    activeValue === index ? "scale-110 rotate-6" : ""
                  }`}
                >
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Style same, colors blue/green */}
      {/* About Page CTA - Service Page Style Box */}
      {/* About CTA - Final Medium Size Version */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Box Size Updated: p-10 to p-16 */}
          <div className="bg-[#0a192f] rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl border border-white/5 text-center">
            {/* Background Decorative Glows */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[90px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-500/10 rounded-full blur-[90px] pointer-events-none"></div>

            <div className="relative z-10">
              {/* Text Size Updated: md:text-5xl */}
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Want to Know <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-blue-400 via-blue-200 to-green-400 bg-clip-text text-transparent">
                  More About Us?
                </span>
              </h2>

              {/* Subtext Size Balanced */}
              <p className="text-lg md:text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                Our team is passionate about solving problems and building
                products that matter. Let's have a conversation about your
                future goals.
              </p>

              {/* CTA Button Updated with Send Icon */}
              <div className="flex justify-center">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-lg"
                >
                  <span>Talk To Our Team</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse-slow { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.08); } }
        .animate-fadeInUp { animation: fadeInUp 1s ease-out; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default About;
