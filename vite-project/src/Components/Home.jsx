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
} from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

 const services = [
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "Android Development",
    desc: "High-performance native Android apps with modern Material Design",
    color: "from-green-500 to-emerald-600", // Android Green
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "iOS Development",
    desc: "Premium iOS applications optimized for iPhone & iPad",
    color: "from-blue-500 to-indigo-600", // iOS Blue
  },
  {
    icon: <Code className="w-10 h-10" />,
    title: "Custom Software",
    desc: "Enterprise-grade custom solutions built for your unique needs",
    color: "from-purple-500 to-violet-600", // Software Purple
  },
  {
    icon: <Monitor className="w-10 h-10" />,
    title: "Website Development",
    desc: "Lightning-fast, SEO-optimized responsive websites",
    color: "from-red-500 to-rose-600", // Web Red
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "Mobile App Development",
    desc: "Cross-platform apps with React Native & Flutter",
    color: "from-cyan-500 to-blue-600", // Mobile Cyan
  },
  {
    icon: <Cloud className="w-10 h-10" />,
    title: "SaaS Development",
    desc: "Scalable cloud platforms that grow with your business",
    color: "from-orange-500 to-amber-600", // Cloud Orange
  },
  {
    icon: <Palette className="w-10 h-10" />,
    title: "Web Design",
    desc: "Stunning UI/UX designs that convert visitors to customers",
    color: "from-pink-500 to-rose-600", // Design Pink
  },

  {
    icon: <Palette className="w-10 h-10" />,
    title: "Logo Design",
    desc: "Memorable brand identities that stand out in the market",
    color: "from-yellow-400 to-orange-500", // Logo Gold
  },
  {icon: <TrendingUp className="w-10 h-10" />, // TrendingUp icon SEO ke liye perfect hai
    title: "Search Engine Optimization (SEO)",
    desc: "Boost your search rankings and drive organic traffic with data-driven SEO strategies",
    color: "from-slate-600 to-slate-500" // Growth Green theme
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
      desc: "skilled developers",
    },

    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Focused",
      desc: "Built for your success",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navbar */}

      {/* Hero Section */}
      <div className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-20 animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fadeInUp">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                Build The
                <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent animate-gradient">
                  Future Today
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-medium">
                Transform your vision into reality with cutting-edge software
                solutions. We deliver excellence in every line of code.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Link to ="/contact" className="group bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center">
                  Start Your Project
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link to="/portfolio" className="border-3 border-orange-500 text-orange-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-orange-50 hover:shadow-xl transition-all">
                  View Portfolio
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="text-center group cursor-pointer">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl text-white mb-3 group-hover:scale-110 transition-transform shadow-lg">
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

            {/* {/* Right Side - Professional Image Mockup */}
<div className="relative lg:h-[600px] hidden lg:flex items-center justify-center">
  {/* Background Glow Decorations */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-200 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
  
  {/* Floating Cards (Professional elements) */}
  <div className="absolute top-20 right-10 z-20 bg-white p-4 rounded-2xl shadow-2xl animate-bounce-slow border border-orange-100">
     <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
           <CheckCircle className="text-green-600 w-6 h-6" />
        </div>
        <div>
           <p className="text-xs text-gray-500 font-bold">Project Status</p>
           <p className="text-sm font-black text-gray-900">Completed</p>
        </div>
     </div>
  </div>

  {/* Main Image Container */}
  <div className="relative z-10 w-full max-w-lg transform hover:scale-105 transition-transform duration-700">
    <div className="relative rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(234,88,12,0.3)] border-8 border-gray-900 bg-gray-900">
      {/* Laptop Screen Style Image */}
      <img 
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" 
        alt="Software Development" 
        className="w-full h-[400px] object-cover opacity-90"
      />
      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>
    
    {/* Floating Code Snippet Card */}
    <div className="absolute -bottom-6 -left-10 z-20 bg-gray-900 text-white p-5 rounded-2xl shadow-2xl font-mono text-xs border border-gray-700 animate-fadeInUp">
       <div className="flex gap-1.5 mb-2">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
       </div>
       <p className="text-orange-400">const</p>
       <p><span className="text-blue-400">webzon</span> = () ={`>`} {'{'}</p>
       <p className="pl-4 text-gray-400">innovate(true);</p>
       <p className="pl-4 text-gray-400">deliver(quality);</p>
       <p>{'}'};</p>
    </div>
  </div>
</div> 
          </div>
        </div>
      </div>

      <section className="py-24 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
  <div className="absolute inset-0 bg-black/10"></div>
  <div className="absolute top-0 left-0 w-full h-full">
    <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
    <div
      className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-float"
      style={{ animationDelay: "1s" }}
    ></div>
    <div
      className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full animate-float"
      style={{ animationDelay: "0.5s" }}
    ></div>
  </div>

  {/* max-w-5xl se items paas-paas rahenge bade screens par bhi */}
  <div className="max-w-5xl mx-auto relative z-10">
    {/* Mobile pe 2 column (grid-cols-2) aur Desktop pe 4 column (lg:grid-cols-4) */}
    <div className="grid grid-cols-4 lg:grid-cols-4 gap-8 md:gap-12 text-center text-white justify-items-center">
      {[
        {
          num: "50+",
          label: "Projects Completed",
          icon: <CheckCircle className="w-12 h-12 mx-auto mb-4" />,
        },
        {
          num: "35+",
          label: "Happy Clients",
          icon: <Users className="w-12 h-12 mx-auto mb-4" />,
        },
        {
          num: "9+",
          label: "Expert Team",
          icon: <Award className="w-12 h-12 mx-auto mb-4" />,
        },
        {
          num: "98%",
          label: "Success Rate",
          icon: <TrendingUp className="w-12 h-12 mx-auto mb-4" />, // Naya icon add kiya
        },
      ].map((stat, idx) => (
        <div
          key={idx}
          className="transform hover:scale-110 transition-all duration-300"
        >
          {stat.icon}
          {/* Size wahi bada text-6xl rakha hai */}
          <h3 className="text-4xl md:text-6xl font-black mb-3">{stat.num}</h3>
          <p className="text-orange-100 text-sm md:text-xl font-semibold">
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
          <div className="text-center mb-20 animate-fadeInUp">
            <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full font-bold text-sm mb-6">
              OUR SERVICES
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              What We{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Comprehensive software solutions powered by the latest
              technologies and industry best practices
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
  <div
    key={index}
    className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-2 border-gray-100 hover:border-opacity-50 overflow-hidden"
    style={{ 
        animationDelay: `${index * 0.1}s`,
        borderColor: 'transparent' // Default state
    }}
  >
    {/* Dynamic Background Glow on Hover */}
    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

    <div className="relative z-10">
      {/* Dynamic Icon Background */}
      <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 text-white shadow-xl`}>
        {service.icon}
      </div>
      
      <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
        {service.title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {service.desc}
      </p>
    </div>
  </div>
))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500 to-orange-600"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Rocket className="w-20 h-20 text-orange-500 mx-auto mb-8 animate-bounce-slow" />
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
            Ready to Build Something
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Amazing Together?
            </span>
          </h2>
          <p className="text-2xl text-gray-300 mb-12 font-medium">
            Let's turn your vision into a powerful digital solution
          </p>
          <Link to="/contact" className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white px-12 py-6 rounded-full font-black text-xl hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center gap-3">
            <span>Start Your Project Now</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Home;
