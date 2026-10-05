import React, { useState, useEffect } from 'react';

// Custom Self-Contained SVG Icon Components (No external npm packages required)
const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const TelegramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const EnvelopeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const CodeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const LaptopIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const MobileIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const PaletteIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343a2 2 0 01-1.414-.586l-1.414-1.414A2 2 0 0011.414 12H9" />
  </svg>
);

const ExternalLinkIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ArrowUpIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
);

const MenuIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const CheckCircleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TerminalIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const RocketIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 0112.728 0" />
  </svg>
);

const ChevronRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  
  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Typing Effect State for Hero Section
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "Frontend Developer",
    "React Specialist",
    "UI/UX Architecture Enthusiast",
    "Modern Web Creator"
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      const sections = ['home', 'about', 'skills', 'projects', 'services', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveTab(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const currentRole = roles[textIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2000;
      const timeout = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 500;
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 1200);
  };

  const skillsData = [
    { name: "HTML5 / Semantic Web", level: 95, color: "from-orange-500 to-amber-500" },
    { name: "CSS3 / Modern Styling (Tailwind)", level: 92, color: "from-blue-500 to-cyan-400" },
    { name: "JavaScript (ES6+)", level: 88, color: "from-yellow-400 to-amber-500" },
    { name: "React.js Ecosystem", level: 86, color: "from-cyan-400 to-blue-600" },
    { name: "Vite & Modern Tooling", level: 85, color: "from-purple-500 to-indigo-500" },
    { name: "Git & GitHub Workflow", level: 82, color: "from-rose-500 to-red-600" },
    { name: "Responsive / Mobile Layouts", level: 95, color: "from-teal-400 to-emerald-500" },
    { name: "UI/UX & Glassmorphism", level: 84, color: "from-purple-400 to-pink-500" }
  ];

  const projectsData = [
    {
      title: "E-Commerce Frontend App",
      description: "Zamonaviy internet magazin interfeysi. Filtratsiya, xarid savatchasi state boshqaruvi va responsive modal oynalar bilan jihozlangan.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Vite"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
      live: "#",
      github: "https://github.com"
    },
    {
      title: "Crypto & Fintech Dashboard",
      description: "Real-vaqt rejimida kriptovalyutalar dinamikasi va analitika paneli. Tungi rejim va ultra-interaktiv grafiklar mavjud.",
      tech: ["React", "Recharts", "Context API", "CSS Modules"],
      image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80",
      live: "#",
      github: "https://github.com"
    },
    {
      title: "Interactive Traffic System & Game",
      description: "Chorrahadagi svetoforlar va avtomobillar harakatini simulyatsiya qiluvchi interaktiv va animatsiyali React dasturi.",
      tech: ["React", "State Management", "Keyframes CSS"],
      image: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80",
      live: "#",
      github: "https://github.com"
    },
    {
      title: "Movie Stream & Portal",
      description: "Kino va seriallar qidirish, tavsiyalar olish hamda treylerlarni ko'rish imkonini beruvchi media platforma.",
      tech: ["React", "REST API", "Tailwind CSS", "Axios"],
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80",
      live: "#",
      github: "https://github.com"
    },
    {
      title: "Task & Productivity Suite",
      description: "Kunlik vazifalarni rejalashtirish, Kanban doskasi va vaqtni unumli boshqarish uchun mo'ljallangan qulay servis.",
      tech: ["React", "LocalStorage", "Drag & Drop", "Tailwind"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
      live: "#",
      github: "https://github.com"
    },
    {
      title: "SaaS Product Landing Page",
      description: "SaaS loyihasi uchun mo'ljallangan yuqori konversiyali, neon glassmorphism uslubidagi vizual sahifa.",
      tech: ["React", "Vite", "Framer-Style CSS", "UI/UX"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      live: "#",
      github: "https://github.com"
    }
  ];

  const servicesData = [
    {
      icon: <LaptopIcon className="w-10 h-10 text-purple-400" />,
      title: "Web Development",
      desc: "Zamonaviy, xavfsiz va yuqori tezlikda ishlovchi veb-saytlarni noldan yaratish."
    },
    {
      icon: <CodeIcon className="w-10 h-10 text-blue-400" />,
      title: "React Application Dev",
      desc: "Komponentlar asosida qurilgan murakkab va interaktiv Single Page Application (SPA) lar."
    },
    {
      icon: <MobileIcon className="w-10 h-10 text-cyan-400" />,
      title: "Responsive Design",
      desc: "Saytingiz barcha turdagi qurilmalarda (Telefon, Planshet, Desktop) birdek mukammal ko'rinishi."
    },
    {
      icon: <PaletteIcon className="w-10 h-10 text-pink-400" />,
      title: "UI/UX Development",
      desc: "Foydalanuvchilar uchun qulay, jozibador va tushunarli zamonaviy grafik interfeyslar."
    }
  ];

  return (
    <div className="bg-[#0b0c10] text-gray-200 min-h-screen font-sans selection:bg-purple-500 selection:text-white relative overflow-x-hidden">
      
      {/* Background Animated Neon Glow Blobs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

      {/* 1. NAVBAR SECTION */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0b0c10]/80 backdrop-blur-md border-b border-white/10 py-4 shadow-xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 hover:opacity-90 transition">
            BEKZOD<span className="text-purple-400">.dev</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {['home', 'about', 'skills', 'projects', 'services', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors duration-300 hover:text-purple-400 relative py-1 ${activeTab === item ? 'text-purple-400 font-semibold' : 'text-gray-300'}`}
              >
                {item}
                {activeTab === item && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-2xl text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#12121e]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl transition-all">
            {['home', 'about', 'skills', 'projects', 'services', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left text-lg capitalize py-2 hover:text-purple-400 transition ${activeTab === item ? 'text-purple-400 font-bold' : 'text-gray-300'}`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="min-h-screen pt-28 pb-16 flex items-center justify-center relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-semibold tracking-wide">
              Welcome to my portfolio
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Salom, Men <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Bekzod</span>
            </h1>

            <div className="text-2xl sm:text-3xl font-bold text-gray-300 h-10 flex items-center justify-center lg:justify-start">
              <span className="text-purple-400">{roles[textIndex].substring(0, charIndex)}</span>
              <span className="w-1 h-8 bg-blue-400 ml-1 animate-ping"></span>
            </div>

            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Men zamonaviy, tezkor va foydalanuvchilar uchun juda qulay bo'lgan veb-interfeyslarni yaratishga ixtisoslashgan Frontend dasturchiman. Kodning toza va tez ishlashiga alohida e'tibor beraman.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold shadow-lg shadow-purple-500/25 transition-all transform hover:-translate-y-0.5"
              >
                Loyihalarni ko'rish
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 text-gray-200 font-semibold backdrop-blur-md transition-all transform hover:-translate-y-0.5"
              >
                Bog'lanish
              </button>
            </div>

            {/* Social Quick Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-6 text-gray-400 text-xl">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition"><GithubIcon /></a>
              <a href="https://t.me" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition"><TelegramIcon /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition"><InstagramIcon /></a>
            </div>
          </div>

          {/* Right Visual / Terminal Code Card */}
          <div className="flex justify-center relative">
            <div className="w-full max-w-md bg-[#12121e]/80 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl relative group hover:border-purple-500/50 transition-all duration-500">
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs text-gray-500 font-mono flex items-center">
                  <TerminalIcon className="mr-2 text-purple-400" /> developer.js
                </div>
              </div>

              {/* Code Blocks */}
              <pre className="font-mono text-xs sm:text-sm text-gray-300 space-y-2 overflow-x-auto">
                <code>
                  <span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> = &#123;<br/>
                  &nbsp;&nbsp;name: <span className="text-green-400">'Bekzod'</span>,<br/>
                  &nbsp;&nbsp;role: <span className="text-green-400">'Frontend Developer'</span>,<br/>
                  &nbsp;&nbsp;stack: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'JS'</span>, <span className="text-green-400">'Vite'</span>, <span className="text-green-400">'Tailwind'</span>],<br/>
                  &nbsp;&nbsp;passion: <span className="text-green-400">'Clean Code & Great UI'</span>,<br/>
                  &nbsp;&nbsp;availableForHire: <span className="text-blue-400">true</span><br/>
                  &#125;;<br/><br/>
                  <span className="text-purple-400">function</span> <span className="text-blue-400">buildFuture</span>() &#123;<br/>
                  &nbsp;&nbsp;<span className="text-purple-400">return</span> developer.stack.<span className="text-yellow-300">createMagic</span>();<br/>
                  &#125;
                </code>
              </pre>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -right-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold py-2 px-4 rounded-xl shadow-lg flex items-center gap-2">
                <RocketIcon /> Fast Performance
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. ABOUT ME SECTION */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Men Haqimda
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Bio Text */}
            <div className="lg:col-span-7 space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                Men veb-dasturlash sohasiga chuqur qiziqishi bor va doimiy ravishda o'z ustida ishlaydigan <strong className="text-purple-400">Frontend Developer</strong> man. Zamonaviy JavaScript hamda React texnologiyalaridan foydalanib, foydalanuvchilar uchun qulay va vizual jozibador interfeyslarni yarataman.
              </p>
              <p>
                Har bir loyihamda kod strukturasining tozaligi, responsive komponentlar yaratish va sayt tezligini (performance) oshirish asosiy maqsadim hisoblanadi. Vite va Tailwind kabi zamonaviy asboblardan samarali foydalanaman.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 text-sm font-semibold">
                <div className="flex items-center space-x-2 text-purple-300">
                  <CheckCircleIcon className="text-purple-500" />
                  <span>Clean Architecture</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-300">
                  <CheckCircleIcon className="text-purple-500" />
                  <span>Pixel-Perfect Layouts</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-300">
                  <CheckCircleIcon className="text-purple-500" />
                  <span>Fast Loading Time</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-300">
                  <CheckCircleIcon className="text-purple-500" />
                  <span>Modern Glassmorphism</span>
                </div>
              </div>
            </div>

            {/* Interactive Stats Cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-6 bg-[#12121e]/60 border border-white/10 rounded-2xl backdrop-blur-md hover:border-purple-500/50 transition-all text-center group">
                <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 group-hover:scale-105 transition-transform">
                  15+
                </h3>
                <p className="text-sm text-gray-400 mt-2">Bajarilgan Loyihalar</p>
              </div>

              <div className="p-6 bg-[#12121e]/60 border border-white/10 rounded-2xl backdrop-blur-md hover:border-blue-500/50 transition-all text-center group">
                <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:scale-105 transition-transform">
                  8+
                </h3>
                <p className="text-sm text-gray-400 mt-2">O'zlashtirilgan Texnologiyalar</p>
              </div>

              <div className="p-6 bg-[#12121e]/60 border border-white/10 rounded-2xl backdrop-blur-md hover:border-purple-500/50 transition-all text-center group col-span-2">
                <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 group-hover:scale-105 transition-transform">
                  2+ Yil
                </h3>
                <p className="text-sm text-gray-400 mt-2">Amaliy Tajriba va Dasturlash Bilimi</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SKILLS SECTION */}
      <section id="skills" className="py-24 bg-[#08090d]/60 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Mening Ko'nikmalarim
            </h2>
            <p className="text-gray-400 mt-2">Texnologiyalar va amaliy bilim darajam</p>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData.map((skill, index) => (
              <div key={index} className="p-5 bg-[#12121e]/50 border border-white/10 rounded-2xl backdrop-blur-md hover:border-white/20 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-200">{skill.name}</span>
                  <span className="text-sm font-bold text-purple-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800/80 rounded-full h-3 overflow-hidden p-0.5 border border-white/5">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROJECTS SECTION */}
      <section id="projects" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Saralangan Loyihalar
            </h2>
            <p className="text-gray-400 mt-2">Yaratilgan so'nggi va eng yaxshi ishlarim</p>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((proj, idx) => (
              <div 
                key={idx} 
                className="bg-[#12121e]/70 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 flex flex-col group hover:-translate-y-2 shadow-lg"
              >
                {/* Project Image Box */}
                <div className="relative overflow-hidden h-48 bg-gray-900">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12121e] via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 group-hover:text-purple-400 transition">
                      {proj.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                    <a 
                      href={proj.live} 
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold hover:opacity-90 transition"
                    >
                      Demo <ExternalLinkIcon />
                    </a>
                    <a 
                      href={proj.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 text-xs font-semibold transition"
                    >
                      GitHub <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICES SECTION */}
      <section id="services" className="py-24 bg-[#08090d]/60 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Xizmatlar
            </h2>
            <p className="text-gray-400 mt-2">Sizga taklif qila oladigan professional yechimlarim</p>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service, i) => (
              <div 
                key={i}
                className="p-8 bg-[#12121e]/50 border border-white/10 rounded-2xl backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10 inline-block group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-purple-400 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center text-xs font-bold text-purple-400 group-hover:translate-x-1 transition-transform">
                  Batafsil <ChevronRightIcon className="ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Bog'lanish
            </h2>
            <p className="text-gray-400 mt-2">Loyiha bo'yicha takliflar va savollar uchun murojaat qiling</p>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl font-bold text-gray-100">Birgalikda yangi loyiha yaratamiz!</h3>
              <p className="text-gray-400 leading-relaxed">
                Menga xabar qoldiring yoki ijtimoiy tarmoqlar orqali bevosita bog'laning. Doimo yangi imkoniyatlar uchun ochiqman.
              </p>

              <div className="space-y-4 pt-4">
                <a href="mailto:bekzod@example.com" className="flex items-center space-x-4 p-4 rounded-xl bg-[#12121e]/60 border border-white/10 hover:border-purple-500/50 transition">
                  <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg"><EnvelopeIcon className="w-6 h-6" /></div>
                  <div>
                    <p className="text-xs text-gray-400">Email Address</p>
                    <p className="text-sm font-semibold text-gray-200">bekzod.dev@example.com</p>
                  </div>
                </a>

                <a href="https://t.me" target="_blank" rel="noreferrer" className="flex items-center space-x-4 p-4 rounded-xl bg-[#12121e]/60 border border-white/10 hover:border-blue-500/50 transition">
                  <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg"><TelegramIcon className="w-6 h-6" /></div>
                  <div>
                    <p className="text-xs text-gray-400">Telegram Username</p>
                    <p className="text-sm font-semibold text-gray-200">@bekzod_dev</p>
                  </div>
                </a>

                <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center space-x-4 p-4 rounded-xl bg-[#12121e]/60 border border-white/10 hover:border-purple-500/50 transition">
                  <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg"><GithubIcon className="w-6 h-6" /></div>
                  <div>
                    <p className="text-xs text-gray-400">GitHub Profile</p>
                    <p className="text-sm font-semibold text-gray-200">github.com/bekzod</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7 bg-[#12121e]/70 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircleIcon className="w-16 h-16 text-green-400 mx-auto animate-bounce" />
                  <h4 className="text-2xl font-bold text-gray-100">Xabaringiz Yuborildi!</h4>
                  <p className="text-gray-400">Rahmat! Tez orada siz bilan bog'lanaman.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Ismingiz</label>
                    <input 
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Masalan: Ali Valiyev"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 focus:outline-none focus:border-purple-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Emailingiz</label>
                    <input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="ali@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 focus:outline-none focus:border-purple-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Xabaringiz</label>
                    <textarea 
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Loyiha haqida batafsil yozing..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-200 focus:outline-none focus:border-purple-500 transition"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold shadow-lg shadow-purple-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Yuborilmoqda..." : "Xabarni Yuborish"}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="border-t border-white/10 py-8 bg-[#08090d]/80 text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          <div>
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              BEKZOD
            </span>
            <p className="text-xs text-gray-500 mt-1">© {new Date().getFullYear()} Bekzod. Barcha huquqlar himoyalangan.</p>
          </div>

          <div className="flex space-x-6 text-gray-400 text-lg">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition"><GithubIcon /></a>
            <a href="https://t.me" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition"><TelegramIcon /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition"><InstagramIcon /></a>
          </div>
        </div>
      </footer>

      {showBackToTop && (
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 rounded-full border border-white/10 bg-purple-600 p-3 text-white shadow-lg transition hover:bg-purple-500"
        >
          <ArrowUpIcon />
        </button>
      )}
    </div>
  );
}