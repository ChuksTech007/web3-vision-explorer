import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './App.css';
import './index.css';
import cryptoImg from "./assets/Blockchain.png";
import cryptoImg2 from "./assets/Crypto.jpg";
import { FaLaptopCode, FaUniversity, FaShieldAlt, FaLightbulb, FaChalkboardTeacher, FaTimes, FaBars, FaTelegramPlane, FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { SiEthereum, SiSolidity, SiPolygon, SiRust, SiReact, SiNextdotjs } from "react-icons/si";

// ⚠️ IMPORTANT: Ensure these image imports are correct and uncommented
import TekCentraImg from './assets/TekCentra.PNG';
import BlockchainAfricaImg from './assets/BlockchainAfrica.JPG';
import PowerHouseImg from './assets/PowerHouse.JPG';

// Import new Metric Widget component
import MetricWidget from "./components/MetricWidget"; 

export default function PrimexBusiness() {
  // REMOVED "stats" from the sections array
  const sections = ["home", "services", "about", "mission", "contact"]; 
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // --- SLIDER STATE & DATA ---
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data for the 3-image slider (Updated to use imported image variables)
  const sliderImages = [
    { id: 1, img: TekCentraImg, title: "TekCentra", desc: "Partnering to build secure enterprise blockchain infrastructure." },
    { id: 2, img: BlockchainAfricaImg, title: "Blockchain Africa", desc: "Driving financial inclusion through decentralized solutions across the continent." },
    { id: 3, img: PowerHouseImg, title: "PowerHouse Energy", desc: "Consulting on tokenization of real-world assets and energy credits." },
  ];

  // Scrollspy logic (unchanged)
  useEffect(() => {
    const observers = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.6, rootMargin: '-84px 0px -50% 0px' } 
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Smooth scroll handler (unchanged)
  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    const onClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.pageYOffsets - 84; 
      window.scrollTo({ top, behavior: "smooth" });
      setIsMobileMenuOpen(false); 
    };
    links.forEach((l) => l.addEventListener("click", onClick));
    return () => links.forEach((l) => l.removeEventListener("click", onClick));
  }, []);

  // AUTO-SLIDER EFFECT (unchanged logic, still cycles 3 images)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(timer);
  }, [sliderImages.length]); 
  // ------------------------------

  // --- DATA ARRAYS (unchanged) ---
  const serviceData = [
    {
      title: "Blockchain Development",
      desc: "Custom smart contracts, DApps, tokens, and seamless Web3 integration.",
      features: [
        "Smart Contract Development",
        "DApp Creation",
        "Token Development",
        "Web3 Integration"
      ],
      icon: <FaLaptopCode className="text-2xl text-cyan-400" />
    },
    {
      title: "Web3 Consulting",
      desc: "Strategy, technology assessment, implementation planning, and risk analysis.",
      features: [
        "Strategy Development",
        "Technology Assessment",
        "Implementation Planning",
        "Risk Analysis"
      ],
      icon: <FaUniversity className="text-2xl text-blue-400" />
    },
    {
      title: "DeFi Solutions",
      desc: "Decentralized finance products: protocol design, liquidity, and governance.",
      features: [
        "DeFi Protocol Design",
        "Yield Farming",
        "Liquidity Solutions",
        "Governance Tokens"
      ],
      icon: <SiEthereum className="text-2xl text-purple-400" />
    },
    {
      title: "Security Audits",
      desc: "Smart contract audits, pen testing, and compliance reviews for peace of mind.",
      features: [
        "Smart Contract Audits",
        "Penetration Testing",
        "Security Best Practices",
        "Compliance Review"
      ],
      icon: <FaShieldAlt className="text-2xl text-red-400" />
    },
    {
      title: "Innovation Labs",
      desc: "Rapid prototyping, POCs and MVPs to validate new Web3 ideas.",
      features: [
        "Proof of Concept",
        "Rapid Prototyping",
        "MVP Development",
        "Technology Research"
      ],
      icon: <FaLightbulb className="text-2xl text-yellow-400" />
    },
    {
      title: "Learning & Training",
      desc: "Workshops and bootcamps to upskill your team in blockchain tech.",
      features: [
        "Web3 Workshops",
        "Blockchain Training",
        "Developer Bootcamps",
        "Executive Education"
      ],
      icon: <FaChalkboardTeacher className="text-2xl text-green-400" />
    }
  ];

  const techLogos = [
    { icon: <SiSolidity className="text-3xl" />, name: "Solidity" },
    { icon: <SiEthereum className="text-3xl" />, name: "Ethereum" },
    { icon: <SiPolygon className="text-3xl" />, name: "Polygon" },
    { icon: <SiRust className="text-3xl" />, name: "Rust" },
    { icon: <SiReact className="text-3xl" />, name: "React" },
    { icon: <SiNextdotjs className="text-3xl" />, name: "Next.js" },
    { icon: <FaShieldAlt className="text-3xl" />, name: "Auditing" },
    { icon: <FaLaptopCode className="text-3xl" />, name: "DApps" },
  ];

  // --- MAIN RENDER ---
  return (
    <div className="min-h-screen font-inter text-gray-100 bg-gradient-to-b from-[#060c18] via-[#01030a] to-[#000000] scroll-smooth relative overflow-hidden">
      {/* Navbar (unchanged) */}
      <header className="fixed w-full top-0 z-50">
        <div className="backdrop-blur-md bg-black/40 border-b border-white/5">
          <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-8 py-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-medium shadow-[0_8px_40px_rgba(67,56,202,0.12)] hover:scale-[1.02] transition-transform"></div>
                <span className="text-xl font-bold text-foreground">Primex Business</span>
              </div>
            </div>

            <ul className="hidden md:flex items-center gap-8">
              {sections.map((id) => (
                <li key={id} className="relative">
                  <a
                    href={`#${id}`}
                    className={`transition-all duration-300 px-1 py-1 ${
                      activeSection === id
                        ? "text-cyan-300 font-semibold"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                  {activeSection === id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-2 h-0.5 w-full bg-cyan-400 rounded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <a href="#contact" className="hidden md:inline-block">
                <button className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-medium shadow-[0_8px_40px_rgba(67,56,202,0.12)] hover:scale-[1.02] transition-transform">
                  Get Started
                </button>
              </a>

              {/* Mobile menu toggle button (unchanged) */}
              <button 
                className="md:hidden text-gray-300 z-50" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile menu overlay with animation (unchanged) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed top-0 left-0 w-full h-screen backdrop-blur-md bg-black/60 z-40"
            >
              <ul className="flex flex-col items-center justify-center space-y-8 pt-24 pb-8">
                {sections.map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className={`text-2xl font-bold transition-all duration-300 ${
                        activeSection === id ? "text-cyan-300" : "text-gray-300 hover:text-white"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#contact">
                    <button className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold shadow-[0_8px_40px_rgba(67,56,202,0.12)] mt-4">
                      Get Started
                    </button>
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
<hr />
      {/* HERO (unchanged) */}
      <main className="pt-6">
        <section id="home" className="py-28 px-6 md:py-36 relative overflow-hidden">
          {/* Background Elements (unchanged) */}
          <motion.img
            src={cryptoImg2}
            alt="Floating crypto pattern"
            className="absolute top-1/2 left-1/2 w-[800px] h-auto object-cover opacity-20 transform -translate-x-1/2 -translate-y-1/2 z-0"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="hero-background-texture"></div>
          {/* Floating Orbs (unchanged) */}
          <motion.div
            className="absolute top-[10%] left-[5%] w-48 h-48 rounded-full mix-blend-screen filter blur-3xl opacity-50"
            style={{ background: "rgba(100, 150, 255, 0.4)" }}
            animate={{
              x: [0, 80, -40, 0],
              y: [0, 60, -80, 0],
              scale: [1, 1.2, 0.9, 1.1, 1],
              rotate: [0, 360],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[20%] right-[15%] w-56 h-56 rounded-full mix-blend-screen filter blur-3xl opacity-50"
            style={{ background: "rgba(255, 100, 200, 0.4)" }}
            animate={{
              x: [0, -60, 100, 0],
              y: [0, -80, 50, 0],
              scale: [1, 0.8, 1.1, 1],
              rotate: [0, -360],
            }}
            transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Main content centered for powerful headline impact (unchanged) */}
          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6 flex flex-col items-center"
            >
              <motion.p 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.8, duration: 0.5 }}
                className="inline-flex items-center gap-3 text-sm text-cyan-300"
              >
                ✨ Leading Web3 Innovation
              </motion.p>
              {/* Massive headline size for Mirrorstat impact (unchanged) */}
              <motion.h1 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.9, duration: 0.5 }}
                className="text-5xl md:text-7xl font-extrabold leading-tight text-white"
              >
                Empowering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-400 to-purple-400">Future of Web3</span> & Blockchain
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 1, duration: 0.5 }}
                className="text-gray-300 max-w-xl"
              >
                At Primex Business, we drive collaboration, innovation, and measurable impact across the Web3 ecosystem - transforming ideas into production-grade blockchain solutions.
              </motion.p>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="#contact">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    animate={{
                      scale: [1, 1.05, 1],
                      transition: { duration: 1.5, repeat: Infinity, repeatType: "loop" }
                    }}
                    className="px-5 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold shadow-[0_12px_40px_rgba(67,56,202,0.12)]"
                  >
                    Start Your Web3 Journey →
                  </motion.button>
                </a>
                <a href="#services">
                  <motion.button whileHover={{ scale: 1.03 }} className="px-5 py-3 rounded-full border border-white/10 text-white/90">
                    Explore Services
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
<hr />
        {/* SERVICES (unchanged card styling) */}
        <section id="services" className="py-20 px-6 bg-[#020617]">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6" 
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.5 }}
            >
              Our Web3 Services
            </motion.h2>
            <p className="text-gray-400 max-w-2xl mb-10">Comprehensive blockchain solutions designed to drive innovation, collaboration, and measurable impact for your business.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceData.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative p-6 rounded-2xl bg-[#041022] border border-white/5 hover:border-cyan-400/50 transition-all hover:scale-[1.02] shadow-[0_12px_50px_rgba(2,6,23,0.6)] group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="transition-colors group-hover:text-white">{s.icon}</div> 
                    <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{s.desc}</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 mb-4">
                    {s.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4">
                    <a href="#contact" className="text-cyan-300 font-medium hover:underline">Learn More</a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a href="#services" className="inline-block px-6 py-3 rounded-full text-white/90 border border-white/5 hover:bg-white/5 transition">Explore All Services</a>
              </div>
          </div>
        </section>
<hr />
        {/* ABOUT (UPDATED WITH 3-IMAGE SLIDER AND NAVIGATION DOT PLACEMENT) */}
        <section id="about" className="py-20 px-6 relative">
          {/* Background Image (unchanged) */}
          <motion.img
            src={cryptoImg2}
            alt="Floating crypto pattern"
            className="absolute top-1/2 left-1/2 w-[800px] h-auto object-cover opacity-20 transform -translate-x-1/2 -translate-y-1/2 z-0"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            
            {/* Left Column (Metrics - unchanged) */}
            {/* ... */}
            <motion.div 
              initial={{ opacity: 0, x: -10 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* ... (Metrics code here) ... */}
              <h2 className="text-3xl font-bold text-white mb-4">Pioneering the Web3 Revolution</h2>
              <p className="text-gray-300 mb-6">At Primex Business, we're not just building technologies — we architect solutions that create measurable impact. We combine blockchain expertise with real-world product experience to deliver reliable outcomes.</p>

              <div className="grid grid-cols-2 gap-4">
                <MetricWidget stat="50+" description="Successful Web3 Projects" delay={0.1} />
                <MetricWidget stat="99.9%" description="Security Score Average" delay={0.2} />
                <MetricWidget stat="12+" description="Years of Expert Experience" delay={0.3} />
                <MetricWidget stat="24/7" description="Dedicated Global Support" delay={0.4} />
              </div>

              <div className="mt-6">
                <a href="#contact" className="inline-block px-5 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold">Partner With Us</a>
              </div>
            </motion.div>
            
            {/* RIGHT COLUMN: 3-IMAGE SLIDER (UPDATED) */}
            <motion.div 
              initial={{ opacity: 0, x: 10 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.5 }} 
              transition={{ delay: 0.2 }}
              className="relative h-[400px] md:h-full min-h-[400px] flex items-center justify-center"
            >
              <div className="relative w-full h-full rounded-2xl shadow-2xl backdrop-blur-md overflow-hidden bg-[#041022] border border-white/5">
                <h4 className="text-lg font-semibold text-white p-6 pb-2 md:pb-0">Trusted Partners & Portfolio Highlights</h4>
                <div className="h-full w-full relative">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.5 }}
                      // Updated class to vertically center content (image + text + dots)
                      className="relative md:absolute inset-x-0 top-6 bottom-0 flex flex-col items-center justify-center p-6 text-center" 
                    >
                      {/* 1. Image */}
                      <img
                        src={sliderImages[currentSlide].img}
                        alt={sliderImages[currentSlide].title}
                        className="w-3/4 h-40 md:h-50 object-cover rounded-lg shadow-xl mb-4 border border-white/10"
                      />
                      
                      {/* 2. Write-up (Title & Description) */}
                      <div className="mb-4"> {/* Added mb-4 for spacing before dots */}
                          <h5 className="text-2xl font-bold text-white mb-2">{sliderImages[currentSlide].title}</h5>
                          <p className="text-gray-400 max-w-xs hidden display:block">{sliderImages[currentSlide].desc}</p>
                      </div>
                      
                      {/* 3. Navigation dots (NOW LOCATED INSIDE THE ANIMATED CONTAINER) */}
                      <div className="flex space-x-2 z-10">
                          {sliderImages.map((_, index) => (
                            <div 
                              key={index}
                              onClick={() => setCurrentSlide(index)}
                              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                                index === currentSlide ? "bg-cyan-400 w-6" : "bg-gray-600 hover:bg-white"
                              }`}
                              aria-label={`Go to slide ${index + 1}`}
                            ></div>
                          ))}
                      </div>

                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* // ❌ REMOVED: Technology & Data Focus (#stats) Section
        // The following section has been deleted per user request.
        // The subsequent section is now MISSION. 
        */}

<hr />
        {/* MISSION (now follows ABOUT) */}
        <section id="mission" className="py-20 px-6 bg-[#020617]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                className="relative p-8 rounded-2xl bg-[#041022] border border-white/5 shadow-[0_20px_60px_rgba(2,6,23,0.6)]"
              >
                <div className="flex items-center gap-4 mb-4 text-cyan-400">
                  <div className="w-10 h-10 rounded-full bg-cyan-400/20 flex items-center justify-center">
                    <FaLightbulb />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  To democratize access to Web3 technology by providing world-class consulting, development, and education. We are dedicated to building a transparent, collaborative, and innovative digital future for everyone.
                </p>
                <ul className="mt-6 space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Fostering widespread adoption of blockchain technology.
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Creating an ecosystem built on trust and security.
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Empowering the next generation of Web3 builders.
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="relative hidden md:block"
              >
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={cryptoImg}
                    alt="Abstract Web3 illustration"
                    className="w-full h-full object-cover animate-pan-background"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                    <h3 className="text-white text-lg font-semibold">Building a Decentralized Future, Together.</h3>
                  </div>
                </div>
              </motion.div>
            </div>
            </div>
        </section>
<hr />
        {/* CTA Banner (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-gradient-to-r from-cyan-600/10 to-purple-600/10 border-y border-cyan-400/20 py-16 px-6"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">Launch Your Vision</span>?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Our team is ready to provide the expertise needed to navigate the complexities of DeFi and blockchain development.
            </p>
            <a href="#contact" className="inline-block">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold shadow-[0_12px_40px_rgba(67,56,202,0.3)] hover:scale-[1.05] transition-transform">
                Get a Free Consultation
              </button>
            </a>
          </div>
        </motion.div>
<hr />
        {/* CONTACT (unchanged) */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-6">Let's Build Something Revolutionary</h2>
            <p className="text-gray-400 text-center mb-8">Reach out to our experts to discuss your project, timelines, and technical requirements.</p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#041022] p-8 rounded-2xl border border-white/5">
              <input className="p-3 rounded bg-transparent border border-white/6 text-gray-200 placeholder-gray-500" placeholder="First Name" />
              <input className="p-3 rounded bg-transparent border border-white/6 text-gray-200 placeholder-gray-500" placeholder="Last Name" />
              <input className="p-3 rounded bg-transparent border border-white/6 text-gray-200 placeholder-gray-500 col-span-2" placeholder="Email" />
              <input className="p-3 rounded bg-transparent border border-white/6 text-gray-200 placeholder-gray-500 col-span-2" placeholder="Phone (WhatsApp)" />
              <input className="p-3 rounded bg-transparent border border-white/6 text-gray-200 placeholder-gray-500 col-span-2" placeholder="Company" />
              <select className="p-3 rounded bg-transparent border border-white/6 text-gray-200 col-span-2">
                <option className="text-gray-700">Select a service</option>
                <option>Blockchain Development</option>
                <option>Web3 Consulting</option>
                <option>DeFi Solutions</option>
                <option>Security Audits</option>
                <option>Innovation Labs</option>
                <option>Learning & Training</option>
              </select>
              <textarea className="p-3 rounded bg-transparent border border-white/6 text-gray-200 col-span-2" rows={4} placeholder="Tell us about your project..."></textarea>
              <button className="col-span-2 mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold hover:scale-[1.02] transition-transform">Send Message</button>
            </form>

            <div className="mt-8 flex justify-center space-x-6">
              <a href="https://www.instagram.com/primexbusiness.agency?igsh=MWY5eHVhdWVzNWw3NQ%3D%3D&utm_source=qr"className="text-gray-500 hover:text-cyan-400 transition-colors">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="https://www.facebook.com/share/1BL1W4iMQY/?mibextid=wwXIfr" className="text-gray-500 hover:text-cyan-400 transition-colors">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="https://x.com/primexconsults?s=21&t=sbMUrJf2d3swpnhJx-YttQ " className="text-gray-500 hover:text-cyan-400 transition-colors">
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </div>
        </section>
<hr />
        {/* FOOTER (unchanged) */}
        <footer className="py-10 px-6 bg-black/40 border-t border-white/5">
          <div className="max-w-6xl mx-auto text-center text-gray-400">
            <div className="mb-4">
              <h3 className="text-white font-semibold">Primex Business</h3>
              <p className="text-sm">Architecting the decentralized future with comprehensive Web3 solutions and expert consulting.</p>
            </div>
            <div className="flex justify-center gap-6 mb-4">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#services" className="hover:text-white">Services</a>
              {/* Removed 'stats' link */}
              <a href="#mission" className="hover:text-white">Mission</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
            <p className="text-sm">Primexconsults@gmail.com</p>
            <p className="text-xs mt-4">© 2025 Primex Business. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}