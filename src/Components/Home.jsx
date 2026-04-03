import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Code,
  Smartphone,
  Palette,
  Database,
  Cloud,
  Monitor,
  Zap,
  Users,
  Award,
  TrendingUp,
  Star,
  CheckCircle,
  Rocket,
  Code2,
  Send,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Missing state added
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Android Development",
      desc: "High-performance native Android apps with modern Material Design",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "iOS Development",
      desc: "Premium iOS applications optimized for iPhone & iPad",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Custom Software",
      desc: "Enterprise-grade custom solutions built for your unique needs",
      color: "from-blue-700 to-green-600",
    },
    {
      icon: <Monitor className="w-10 h-10" />,
      title: "Website Development",
      desc: "Lightning-fast, SEO-optimized responsive websites",
      color: "from-green-500 to-green-700",
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile App Development",
      desc: "Cross-platform apps with React Native & Flutter",
      color: "from-blue-600 to-green-500",
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "SaaS Development",
      desc: "Scalable cloud platforms that grow with your business",
      color: "from-blue-800 to-blue-600",
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Web Design",
      desc: "Stunning UI/UX designs that convert visitors to customers",
      color: "from-green-400 to-green-600",
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Logo Design",
      desc: "Memorable brand identities that stand out in the market",
      color: "from-blue-500 to-green-400",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Search Engine Optimization (SEO)",
      desc: "Boost your search rankings and drive organic traffic.",
      color: "from-green-600 to-blue-600",
    },
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Performance",
      desc: "Fast & scalable solutions",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      desc: "Skilled developers",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Focused",
      desc: "Built for your success",
    },
  ];

  const testimonials = [
  {
    name: "Ayush Verma",
    role: "Founder, Faith & Fast",
    content:
      "Webzon transformed our vision for Faith & Fast into a high converting e-commerce store. The seamless shopping experience they built for our clothing brand has significantly improved our customer retention.",
  },
  {
    name: "Ankit Malhotra",
    role: "Managing Director, Malhotra Associates",
    content:
      "As an architectural firm, aesthetics are everything. Webzon created a sophisticated portfolio website for Malhotra Associates that perfectly showcases our projects with a premium and modern touch.",
  },
  {
    name: "Parul Nagpal",
    role: "Founder, Home Essentials by TFB",
    content:
      "The team developed a robust and user friendly platform for our home essentials business. The catalog management and secure payment integration have made running our online store incredibly easy.",
  },
  {
    name: "Sandeep Kumar",
    role: "Founder, Pump Nation Gym",
    content:
      "Our online presence has reached a new level with Webzon. The Pump Nation Gym website is fast, mobile responsive, and helps us manage new memberships and inquiries effortlessly.",
  },
  {
    name: "Ranjit Singh",
    role: "CEO, Ranjit Bros Taxi Services",
    content:
      "Managing a fleet was a challenge until we got our new website. The automated booking system they built for Ranjit Bros Taxi Services is reliable and has streamlined our entire rental process.",
  },
];

  // Missing logic functions added
  const nextSlide = () =>
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20 animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fadeInUp">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                Build The
                <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-green-500 bg-clip-text text-transparent animate-gradient">
                  Future Today
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-medium">
                Transform your vision into reality with cutting-edge software
                solutions. We deliver excellence in every line of code.
              </p>

              <div className="flex sm:grid-cols-2 sm:flex-row gap-5">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-blue-600 via-blue-700 to-green-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="border-3 border-blue-600 text-blue-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 hover:shadow-xl transition-all"
                >
                  View Portfolio
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="text-center group cursor-pointer">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-2xl text-white mb-3 group-hover:scale-110 transition-transform shadow-lg">
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:h-[600px] hidden lg:flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] opacity-30 animate-pulse"></div>

              <div className="absolute top-20 right-10 z-20 bg-white p-4 rounded-2xl shadow-2xl animate-bounce-slow border border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold">
                      Project Status
                    </p>
                    <p className="text-sm font-black text-gray-900">
                      Completed
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 w-full max-w-lg transform hover:scale-105 transition-transform duration-700">
                <div className="relative rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,82,204,0.3)] border-8 border-gray-900 bg-gray-900">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                    alt="Software Development"
                    className="w-full h-[400px] object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                <div className="absolute -bottom-6 -left-10 z-20 bg-gray-900 text-white p-5 rounded-2xl shadow-2xl font-mono text-xs border border-gray-700 animate-fadeInUp">
                  <div className="flex gap-1.5 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-blue-400">const</p>
                  <p>
                    <span className="text-green-400">webzon</span> = () ={`>`}{" "}
                    {"{"}
                  </p>
                  <p className="pl-4 text-gray-400">innovate(true);</p>
                  <p className="pl-4 text-gray-400">deliver(quality);</p>
                  <p>{"}"};</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-blue-700 via-blue-600 to-green-600 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-4 lg:grid-cols-4 gap-8 md:gap-12 text-center text-white justify-items-center">
            {[
              {
                num: "30+",
                label: "Projects Done",
                icon: <CheckCircle className="w-10 h-10 mx-auto mb-4" />,
              },
              {
                num: "25+",
                label: "Happy Clients",
                icon: <Users className="w-10 h-10 mx-auto mb-4" />,
              },
              {
                num: "8+",
                label: "Expert Team",
                icon: <Award className="w-10 h-10 mx-auto mb-4" />,
              },
              {
                num: "98%",
                label: "Success Rate",
                icon: <TrendingUp className="w-10 h-10 mx-auto mb-4" />,
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="transform hover:scale-110 transition-all duration-300"
              >
                {stat.icon}
                <h3 className="text-4xl md:text-5xl font-black mb-2">
                  {stat.num}
                </h3>
                <p className="text-blue-100 text-sm md:text-lg font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="py-24 bg-white px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-blue-50 text-blue-600 px-6 py-2 rounded-full font-bold text-sm mb-6 uppercase tracking-widest">
              Our Expertise
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              What We{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-5 bg-gradient-to-b from-white to-blue-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6  ">
            <div className="inline-block bg-green-50 text-green-600 px-6 py-2 rounded-full font-bold text-sm mb-4 uppercase tracking-widest">
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Client <span className="text-blue-600">Success Stories</span>
            </h2>
          </div>

          {/* --- SLIDER WITH BUTTONS ON ENDS --- */}
          <div className="relative group max-w-5xl mx-auto px-4 md:px-12">
            {/* Testimonial Card Container */}
            <div className="relative overflow-hidden h-[450px] md:h-[350px]">
              {testimonials.map((t, id) => (
                <div
                  key={id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform flex items-center justify-center ${
                    id === activeSlide
                      ? "opacity-100 translate-x-0 scale-100"
                      : "opacity-0 translate-x-full scale-95"
                  }`}
                >
                  <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:border-blue-200 transition-all text-center flex flex-col items-center max-w-2xl mx-auto">
                    <div className="flex gap-1 mb-4 text-blue-600">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <Quote className="w-10 h-10 text-blue-100 mb-4" />
                    <p className="text-gray-700 italic mb-8 leading-relaxed text-lg md:text-xl">
                      "{t.content}"
                    </p>
                    <div className="flex items-center justify-center text-center">
                      <div>
                        <h4 className="font-black text-gray-900 text-base">
                          {t.name}
                        </h4>
                        <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mt-1">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Buttons on Ends */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-white p-3 rounded-full shadow-xl text-blue-600 hover:bg-blue-600 hover:text-white transition-all z-20 border border-blue-50 opacity-0 group-hover:opacity-100 md:opacity-100"
            >
              <ChevronLeft size={28} strokeWidth={3} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 bg-white p-3 rounded-full shadow-xl text-blue-600 hover:bg-blue-600 hover:text-white transition-all z-20 border border-blue-50 opacity-0 group-hover:opacity-100 md:opacity-100"
            >
              <ChevronRight size={28} strokeWidth={3} />
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${activeSlide === i ? "w-8 bg-blue-600" : "w-2 bg-blue-200"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#0a192f] rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl border border-white/5">
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[90px]"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Let's Start Your <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Success Story
                </span>
              </h2>
              <p className="text-lg text-blue-100/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                Have a project in mind? We'd love to hear from you. Let's
                discuss how we can help bring your vision to life.
              </p>
              <div className="flex justify-center">
                <Link
                  to="/contact"
                  className="group flex items-center gap-3 bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-lg hover:scale-105"
                >
                  <span>Get In Touch</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .animate-gradient { background-size: 200% 200%; animation: gradient 4s ease infinite; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-pulse-slow { animation: pulse 6s infinite; }
        .animate-bounce-slow { animation: float 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Home;
