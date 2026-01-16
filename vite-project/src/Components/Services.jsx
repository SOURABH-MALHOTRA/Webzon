import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Smartphone,
  Code,
  Monitor,
  Cloud,
  Palette,
  Database,
  CheckCircle,
  ArrowRight,
  Rocket,
  Zap,
  Users,
  TrendingUp,
  Star,
  Settings,
  Package,
  Layers,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gradients updated to match Blue-Green Logo Theme
  const services = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Android Development",
      shortDesc: "Native Android apps with cutting-edge features",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "iOS Development",
      shortDesc: "Premium iOS applications for Apple ecosystem",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Custom Software Development",
      shortDesc: "Tailored enterprise solutions for unique needs",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Website Development",
      shortDesc: "Lightning-fast, SEO-optimized responsive websites",
      gradient: "from-blue-600 to-green-500",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      shortDesc: "Cross-platform apps that work everywhere",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "SaaS Development",
      shortDesc: "Scalable cloud platforms that grow with you",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Web Design",
      shortDesc: "Beautiful UI/UX that converts",
      gradient: "from-blue-400 to-green-400",
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Logo Design",
      shortDesc: "Memorable brand identities",
      gradient: "from-blue-700 to-blue-900",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Search Engine Optimization (SEO)",
      shortDesc: "Rank higher and drive organic growth with data-driven SEO",
      gradient: "from-slate-600 to-slate-500",
    },
  ];

  const process = [
    {
      num: "01",
      title: "Discovery",
      desc: "Understanding your vision, goals, and requirements",
      icon: <Users className="w-8 h-8" />,
    },
    {
      num: "02",
      title: "Planning",
      desc: "Creating roadmap, timeline, and technical architecture",
      icon: <Settings className="w-8 h-8" />,
    },
    {
      num: "03",
      title: "Design",
      desc: "Crafting beautiful, intuitive user interfaces",
      icon: <Palette className="w-8 h-8" />,
    },
    {
      num: "04",
      title: "Development",
      desc: "Building with clean code and best practices",
      icon: <Code className="w-8 h-8" />,
    },
    {
      num: "05",
      title: "Testing",
      desc: "Rigorous QA to ensure flawless performance",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      num: "06",
      title: "Launch",
      desc: "Deploying to production and ongoing support",
      icon: <Rocket className="w-8 h-8" />,
    },
  ];

  const whyChooseUs = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Fast Delivery",
      desc: "Quick turnaround without compromising quality",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Expert Team",
      desc: "50+ skilled professionals at your service",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Proven Results",
      desc: "500+ successful projects delivered",
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: "Client Satisfaction",
      desc: "98% client retention rate",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
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
            <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full font-bold text-sm mb-6 shadow-lg">
              OUR SERVICES
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Complete Digital
              <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-green-500 bg-clip-text text-transparent pb-2">
                Solutions Suite
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-medium">
              From mobile apps to enterprise software, we deliver cutting-edge
              solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-gray-100 hover:border-blue-200 overflow-hidden cursor-pointer"
                onClick={() => setActiveService(index)}
              >
                <div
                  className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>

                <div className="p-8 relative z-10">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 text-white shadow-xl`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-bold text-sm mb-6">
              HOW WE WORK
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Development Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures quality, transparency, and
              timely delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all border-2 border-gray-100 hover:border-blue-200">
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl">
                    {step.num}
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 text-white ml-auto group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-6 py-2 rounded-full font-bold text-sm mb-6">
              WHY WEBZON
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Us
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all border-2 border-blue-100 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Fixed clipping and colors */}
      {/* Service CTA - Midnight Blue */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#0a192f] rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl border border-white/5 text-center">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Need a <span className="text-blue-400">Custom Solution?</span>
              </h2>
              <p className="text-lg text-blue-100/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                If you have specific requirements that don't fit into these
                categories, we specialize in custom software development
                tailored to your needs.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-blue-500 to-green-500 text-white px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse-slow { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.08); } }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Services;
