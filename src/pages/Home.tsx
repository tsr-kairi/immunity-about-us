import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from "motion/react";
import Lenis from "lenis";
import { 
  Shield, 
  Server, 
  Monitor, 
  CheckCircle, 
  Users, 
  Award, 
  Target, 
  Eye, 
  History,
  ChevronRight,
  Phone,
  Mail,
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Download,
  Menu,
  X,
  ArrowRight,
  Zap,
  Code,
  Star,
  TrendingUp,
  ShieldCheck,
  Trophy,
  Globe,
  Lightbulb,
  Cpu,
  Lock,
  Briefcase,
  Flag,
  Activity,
  GraduationCap,
  ShoppingBag,
  Factory,
  Hotel,
  Landmark,
  Quote
} from "lucide-react";
import { useState, useEffect, useRef } from "react";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const mvpSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mvpScrollProgress } = useScroll({
    target: mvpSectionRef,
    offset: ["start start", "end end"]
  });

  const [activeMvpIndex, setActiveMvpIndex] = useState(0);
  const [isPhilosophyOpen, setIsPhilosophyOpen] = useState(false);

  useMotionValueEvent(mvpScrollProgress, "change", (latest) => {
    if (latest < 0.33) setActiveMvpIndex(0);
    else if (latest < 0.66) setActiveMvpIndex(1);
    else setActiveMvpIndex(2);
  });

  const mvpData = [
    { 
      title: "Our Mission", 
      subtitle: "Simplifying Secure Networking for Every Enterprise", 
      desc: "To design and deliver powerful networking products that combine performance, security, and simplicity—enabling businesses to operate with confidence and scale without limitations.",
      icon: <Target className="w-8 h-8" />,
      color: "text-primary",
      bg: "bg-primary/5"
    },
    { 
      title: "Our Vision", 
      subtitle: "Redefining Enterprise Connectivity", 
      desc: "To become a global leader in secure networking products by building intelligent, adaptive, and future-ready solutions that transform how enterprises connect, operate, and grow.",
      icon: <Eye className="w-8 h-8" />,
      color: "text-primary",
      bg: "bg-primary/5"
    },
    { 
      title: "Our Approach", 
      subtitle: "Innovation Meets Practical Performance", 
      desc: "We follow a product-first philosophy—where every solution is built with deep technical expertise, real-world insights, and a clear focus on usability.",
      icon: <Zap className="w-8 h-8" />,
      color: "text-black",
      bg: "bg-black/5"
    }
  ];

  const handleMvpTabClick = (index: number) => {
    if (mvpSectionRef.current) {
      const element = mvpSectionRef.current;
      const targetScroll = element.offsetTop + (index * window.innerHeight);
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth"
      });
    }
  };

  const testimonials = [
    {
      text: "We found Immunity Networks team to be extremely professional expert in their domain who flawlessly implemented RSA logger solution at our data centre. Right from product demonstration till complete implementation, the team has been proactive, supportive and delivered as per expectations.",
      author: "AMIT WADKE",
      role: "PROJECT MANAGER",
      company: "TATA Consultancy Services (TCS)",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg"
    },
    {
      text: "The network infrastructure provided by Immunity has been robust and scalable. Their support team is always available to resolve any issues promptly.",
      author: "RAJESH KUMAR",
      role: "CTO",
      company: "Tech Solutions",
      logo: "https://picsum.photos/seed/tech/100/100"
    },
    {
      text: "Implementing PMWANI compliant solutions was seamless with Immunity Networks. Their expertise in the domain is evident in the quality of their products.",
      author: "ANJALI SHARMA",
      role: "Network Manager",
      company: "Global Edu",
      logo: "https://picsum.photos/seed/edu/100/100"
    }
  ];

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      lenis.destroy();
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, [testimonials.length]);

  const stats = [
    { icon: <Monitor className="w-8 h-8" />, value: "30,000+", label: "Endpoints Supported" },
    { icon: <Server className="w-8 h-8" />, value: "1,000+", label: "Network Devices Deployed" },
    { icon: <CheckCircle className="w-8 h-8" />, value: "400+", label: "Completed Contracts" },
    { icon: <Users className="w-8 h-8" />, value: "137+", label: "Happy Clients" },
  ];

  const history = [
    { 
      year: "2026", 
      title: "Dealer Network Expansion", 
      desc: "Strategic expansion of our dealer network to reach more enterprises globally. Immunity Networks was founded with a forward-thinking to be focused on developing high-performance.",
      icon: <Users className="w-8 h-8" />,
      color: "#770026" // Brand Primary
    },
    { 
      year: "2025", 
      title: "OEM Manufacturing Plant Setup", 
      desc: "Established our own state-of-the-art OEM manufacturing facility to ensure superior quality control. We prioritize reliability and consistency, enabling businesses to operate seamlessly.",
      icon: <Server className="w-8 h-8" />,
      color: "#5a001d" // Brand Dark
    },
    { 
      year: "2024", 
      title: "Certifications", 
      desc: "MTCTE, CE, FCC & RoHS Certifications for Immunity Alpha products. Our wide range of products are engineered to meet the evolving demands of businesses.",
      icon: <Shield className="w-8 h-8" />,
      color: "#94103a" // Brand Light
    },
    { 
      year: "2023", 
      title: "Make in India", 
      desc: "Make in India Initiative for Immunity Alpha Products, supporting local manufacturing. We empower enterprises to scale confidently and stay ahead in an evolving digital landscape.",
      icon: <Monitor className="w-8 h-8" />,
      color: "#770026" // Brand Primary
    },
    { 
      year: "2022", 
      title: "Major Deployment", 
      desc: "Immunity Alpha Deployed at Mumbai International Airport Limited (MIAL). Robust protection without compromising speed or efficiency.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "#5a001d" // Brand Dark
    },
    { 
      year: "2021", 
      title: "PMWANI Compliance", 
      desc: "Immunity Alpha Recognised as India's 1st Certified PMWANI compliant AP. Seamless scalability and uninterrupted connectivity for modern enterprises.",
      icon: <Award className="w-8 h-8" />,
      color: "#94103a" // Brand Light
    },
    { 
      year: "2020", 
      title: "Immunity Alpha Series Launch", 
      desc: "Launched our flagship Immunity Alpha series, setting new benchmarks in high-performance networking and security for modern enterprises.",
      icon: <Cpu className="w-8 h-8" />,
      color: "#770026" // Brand Primary
    },
    { 
      year: "2019", 
      title: "Enterprise Security Focus", 
      desc: "Shifted strategic focus towards comprehensive enterprise security solutions, empowering businesses with robust digital defense mechanisms.",
      icon: <Lock className="w-8 h-8" />,
      color: "#5a001d" // Brand Dark
    },
    { 
      year: "2018", 
      title: "Global Strategic Partnerships", 
      desc: "Forged key global partnerships to enhance our technology stack and broaden our solution offerings for international markets.",
      icon: <Globe className="w-8 h-8" />,
      color: "#94103a" // Brand Light
    },
    { 
      year: "2017", 
      title: "R&D Center Establishment", 
      desc: "Established a dedicated Research & Development center to drive innovation in networking protocols and hardware design.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "#770026" // Brand Primary
    },
    { 
      year: "2016", 
      title: "Major Corporate Milestone", 
      desc: "Secured our first major Fortune 500 client, validating our enterprise-grade solutions in high-demand environments.",
      icon: <Briefcase className="w-8 h-8" />,
      color: "#5a001d" // Brand Dark
    },
    { 
      year: "2015", 
      title: "Most Promising Networking & Security", 
      desc: "Recognized as the most promising networking and security company, reflecting our commitment to excellence and innovation.",
      icon: <Star className="w-8 h-8" />,
      color: "#94103a" // Brand Light
    },
    { 
      year: "2014", 
      title: "Ingenious 100 Award", 
      desc: "Received the prestigious Ingenious 100 Award for our innovative approach to solving complex IT challenges for corporates.",
      icon: <Trophy className="w-8 h-8" />,
      color: "#770026" // Brand Primary
    },
    { 
      year: "2013", 
      title: "Crisil Rating Certificate", 
      desc: "Awarded the Crisil Rating Certificate, demonstrating our financial stability and operational excellence in the IT sector.",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "#5a001d" // Brand Dark
    },
    { 
      year: "2012", 
      title: "Premier 100 Channel Company", 
      desc: "Acknowledged as a Premier 100 Channel Company, highlighting our strong market presence and effective distribution network.",
      icon: <Users className="w-8 h-8" />,
      color: "#94103a" // Brand Light
    },
    { 
      year: "2011", 
      title: "Regional Expansion", 
      desc: "Expanded operations to multiple regions across India, establishing a strong presence in key industrial hubs.",
      icon: <MapPin className="w-8 h-8" />,
      color: "#770026" // Brand Primary
    },
    { 
      year: "2010", 
      title: "First Product Prototype", 
      desc: "Successfully developed and tested the first prototype of our intelligent networking switch, laying the foundation for future innovation.",
      icon: <Zap className="w-8 h-8" />,
      color: "#5a001d" // Brand Dark
    },
    { 
      year: "2009", 
      title: "Founding of Immunity Networks", 
      desc: "Founded by Mr. Sumit Garg with a vision to revolutionize enterprise networking through intelligent and efficient solutions.",
      icon: <Flag className="w-8 h-8" />,
      color: "#94103a" // Brand Light
    },
  ];

  const industries = [
    { name: "Hospital & Clinics", icon: <Shield className="w-6 h-6" /> },
    { name: "University & Colleges", icon: <Shield className="w-6 h-6" /> },
    { name: "Mall & Retail Stores", icon: <Shield className="w-6 h-6" /> },
    { name: "Industrial & Tech Companies", icon: <Shield className="w-6 h-6" /> },
    { name: "Hotels & Restaurants", icon: <Shield className="w-6 h-6" /> },
    { name: "Government infrastructure", icon: <Shield className="w-6 h-6" /> },
  ];

  const awards = [
    { title: "Ingenious 100 Award", year: "2014", img: "https://picsum.photos/seed/award1/400/300" },
    { title: "Most Promising Networking & Security", year: "2015", img: "https://picsum.photos/seed/award2/400/300" },
    { title: "Premier 100 Channel Company", year: "2012", img: "https://picsum.photos/seed/award3/400/300" },
    { title: "Crisil Rating Certificate", year: "2013", img: "https://picsum.photos/seed/award4/400/300" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-primary font-display font-black text-2xl tracking-tighter">
              IMMUNITY<span className={scrolled ? "text-gray-400 font-light" : "text-white/50 font-light"}>NETWORKS</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About Us", "Solutions", "Products", "Contact Us"].map((item) => (
              <a 
                key={item} 
                href="#" 
                className={`text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
              >
                {item}
              </a>
            ))}
            <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded font-bold text-sm transition-all transform hover:-translate-y-1 shadow-lg">
              CALL NOW
            </button>
          </div>

          <button className={`md:hidden ${scrolled ? "text-primary" : "text-white"}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="md:hidden bg-white absolute top-full left-0 right-0 shadow-xl p-4 flex flex-col space-y-4"
          >
            {["Home", "About Us", "Solutions", "Products", "Contact Us"].map((item) => (
              <a key={item} href="#" className="text-gray-800 font-semibold uppercase text-sm border-b border-gray-100 pb-2">
                {item}
              </a>
            ))}
            <button className="bg-primary text-white w-full py-3 rounded font-bold">CALL NOW</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-primary">
        {/* Background Image Container - Positioned Right */}
        <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover object-center lg:object-right opacity-40 mix-blend-overlay grayscale"
            alt="Advanced Cyber Technology"
            referrerPolicy="no-referrer"
          />
          {/* Smooth Gradient Overlay to match reference image transition */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent z-10"></div>
        </div>
        
        {/* Mobile Overlay */}
        <div className="absolute inset-0 bg-primary/90 lg:hidden z-10"></div>

        <div className="container mx-auto px-4 lg:px-20 relative z-20">
          <div 
            className="max-w-3xl"
          >
            {/* Breadcrumb - Matching reference style */}
            <div className="flex items-center space-x-2 text-sm text-white/90 mb-8 font-medium">
              <a href="#" className="hover:text-white transition-colors flex items-center">
                <span className="mr-1.5 text-base">🏠</span> Home
              </a>
              <span className="text-white/60 mx-1">»</span>
              <span className="text-white">About Us</span>
            </div>

            {/* Hero Content - Matching reference style */}
            <h1 className="text-5xl md:text-7xl text-white mb-4 font-bold tracking-tight">
              About Us
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-medium tracking-wide">
              Secured. Reliable. Scalable.
            </p>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center z-20"
        >
          <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center p-1.5">
            <div className="w-1 h-1.5 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Section-1: A Product-Driven Technology Company (What We Do) */}
      <section className="py-24 bg-white overflow-hidden relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 transform translate-x-20 z-0"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div 
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8">
                <Zap className="w-3.5 h-3.5 fill-primary" />
                What We Do
              </div>
              <h2 className="text-4xl md:text-6xl mb-8 leading-[1.1] font-black text-gray-900 tracking-tighter">
                A Product-Driven <br />
                <span className="text-primary">Technology Company</span>
              </h2>
              
              <div className="space-y-10">
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  Founded in 2009 by <span className="text-gray-900 font-bold">Mr. Sumit Garg</span>, Immunity Networks is dedicated to developing high-performance, secure, and scalable products for modern enterprises.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Security-First",
                      desc: "Engineered with a security-first approach for robust protection.",
                      icon: <Shield className="w-5 h-5" />
                    },
                    {
                      title: "Seamless Scale",
                      desc: "Enabling businesses to scale confidently in evolving landscapes.",
                      icon: <TrendingUp className="w-5 h-5" />
                    },
                    {
                      title: "Intelligent Design",
                      desc: "Networking shouldn't be complex—it should be efficient.",
                      icon: <Cpu className="w-5 h-5" />
                    },
                    {
                      title: "Product-First",
                      desc: "Built with deep technical expertise and real-world insights.",
                      icon: <Award className="w-5 h-5" />
                    }
                  ].map((item, i) => (
                    <div key={i} className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button 
                    onClick={() => setIsPhilosophyOpen(true)}
                    className="group flex items-center gap-3 text-gray-900 font-black uppercase tracking-widest text-sm hover:text-primary transition-colors"
                  >
                    Learn about our philosophy
                    <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-primary transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div 
              className="lg:w-1/2 sticky top-32"
            >
              <div className="relative">
                {/* Main Image with decorative frame */}
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
                    alt="Technology Innovation"
                    className="w-full h-[600px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-10 left-10 right-10 text-white">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <Zap className="w-6 h-6 fill-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-black tracking-tighter">ESTD. 2009</div>
                        <div className="text-xs font-bold uppercase tracking-widest opacity-80">A Legacy of Innovation</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Stats Card */}
                <div 
                  className="absolute -bottom-10 -right-6 md:right-0 bg-white p-8 rounded-3xl shadow-2xl z-20 border border-gray-100 max-w-[240px]"
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shadow-inner">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-4xl font-black text-gray-900 tracking-tighter">15+</div>
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">Years of Excellence</div>
                    </div>
                    <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-green-500 origin-left animate-progress"></div>
                    </div>
                  </div>
                </div>

                {/* Decorative dots */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[radial-gradient(#770026_2px,transparent_2px)] [background-size:24px_24px] opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section-2: Building networks that scale */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Decorative background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-gray-200/20 select-none pointer-events-none whitespace-nowrap">
          INNOVATION
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl mb-6 font-bold text-gray-900">Building networks <span className="text-primary">that scale</span></h2>
            <p className="text-xl text-gray-600">We combine cutting-edge technology with intuitive design to deliver networking solutions that grow with your business.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                title: "Simplicity in Design", 
                desc: "We create intuitive, easy-to-deploy products that reduce complexity with flexibility.",
                icon: <Monitor className="w-12 h-12" />,
                accent: "bg-blue-50 text-blue-600"
              },
              { 
                title: "Strength in Security", 
                desc: "Built with advanced, multi-layer protection to safeguard from evolving threats.",
                icon: <Shield className="w-12 h-12" />,
                accent: "bg-red-50 text-red-600"
              },
              { 
                title: "Stability in Performance", 
                desc: "Engineered for consistent & high-speed operation to ensure reliable network performance.",
                icon: <Server className="w-12 h-12" />,
                accent: "bg-green-50 text-green-600"
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                {/* Hover accent background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>
                
                <div className={`w-20 h-20 ${item.accent} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl mb-4 font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{item.desc}</p>
                
                <div className="mt-8 flex items-center text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Learn More <TrendingUp className="ml-2 w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section-3: Mission, Vision, Approach (Sticky Scroll Redesign) */}
      <section ref={mvpSectionRef} className="relative h-[300vh] bg-white">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
            {/* Left Side: Content */}
            <div className="w-full md:w-3/5">
              <div
                className="max-w-2xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 ${mvpData[activeMvpIndex].bg} rounded-2xl flex items-center justify-center ${mvpData[activeMvpIndex].color}`}>
                    {mvpData[activeMvpIndex].icon}
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase">
                    {mvpData[activeMvpIndex].title.split(' ')[1]}
                  </h2>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-primary mb-8 leading-tight">
                  {mvpData[activeMvpIndex].subtitle}
                </h4>
                <p className="text-xl text-gray-500 leading-relaxed font-medium">
                  {mvpData[activeMvpIndex].desc}
                </p>
              </div>
            </div>

            {/* Right Side: Tabs */}
            <div className="w-full md:w-2/5 flex flex-col gap-4">
              {mvpData.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleMvpTabClick(idx)}
                  className={`group relative p-6 rounded-2xl border-2 transition-all duration-500 flex items-center gap-6 text-left ${
                    activeMvpIndex === idx 
                      ? "border-primary bg-primary/5 shadow-lg shadow-primary/10" 
                      : "border-gray-100 bg-white hover:border-gray-200"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-500 ${
                    activeMvpIndex === idx ? "bg-primary text-white" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <span className={`text-xs font-black uppercase tracking-widest block mb-1 transition-colors duration-500 ${
                      activeMvpIndex === idx ? "text-primary" : "text-gray-400"
                    }`}>
                      Phase 0{idx + 1}
                    </span>
                    <h3 className={`text-xl font-black transition-colors duration-500 ${
                      activeMvpIndex === idx ? "text-gray-900" : "text-gray-400"
                    }`}>
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Active Indicator Line */}
                  {activeMvpIndex === idx && (
                    <div 
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-primary rounded-r-full"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Section-4: Our Transformation Journey (Robust Grid Implementation) */}
      <section className="py-32 bg-[#f8f9fa] relative overflow-hidden font-sans">
        {/* Parallax Background Elements */}
        <motion.div 
          style={{ y: useTransform(useScroll().scrollYProgress, [0, 1], [0, -150]) }}
          className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-20"
        ></motion.div>
        <motion.div 
          style={{ y: useTransform(useScroll().scrollYProgress, [0, 1], [0, 100]) }}
          className="absolute -left-20 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        ></motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-32">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold uppercase tracking-widest mb-4"
            >
              Milestones That Define Us
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
            >
              Our Transformation Journey
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-500 mb-8"
            >
              Immunity Network: Vision to Powerful Products
            </motion.p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-2 bg-primary mx-auto rounded-full"
            ></motion.div>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Central Vertical Line - Desktop Only with Parallax */}
            <motion.div 
              style={{ scaleY: useTransform(useScroll().scrollYProgress, [0.3, 0.6], [0, 1]) }}
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 hidden md:block origin-top"
            ></motion.div>

            <div className="space-y-24 md:space-y-0">
              {history.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className="relative">
                    {/* Desktop Grid Layout */}
                    <div className="hidden md:grid grid-cols-[1fr_120px_1fr] items-center min-h-[300px]">
                      
                      {/* Left Side */}
                      <div className={`px-12 ${isEven ? 'text-right' : 'flex justify-center'}`}>
                        {isEven ? (
                          <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative"
                          >
                            <div className="absolute top-1/2 -translate-y-1/2 -right-16 flex gap-1.5">
                              {[1, 2, 3].map(i => (
                                <motion.div 
                                  key={i} 
                                  initial={{ scale: 0 }}
                                  whileInView={{ scale: 1 }}
                                  transition={{ delay: 0.5 + (i * 0.1) }}
                                  className="w-2.5 h-2.5 rounded-full" 
                                  style={{ backgroundColor: item.color, opacity: 0.4 }}
                                ></motion.div>
                              ))}
                            </div>
                            <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter" style={{ color: item.color }}>
                              {item.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-base font-medium ml-auto max-w-sm">
                              {item.desc}
                            </p>
                          </motion.div>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="w-40 h-40 rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] flex items-center justify-center border-[8px] relative group"
                            style={{ borderColor: item.color }}
                          >
                            <div className="absolute top-1/2 -translate-y-1/2 -right-12 w-12 h-0.5 bg-gray-300"></div>
                            <div style={{ color: '#333' }} className="transform scale-150 group-hover:scale-175 transition-transform duration-500">
                              {item.icon}
                            </div>
                          </motion.div>
                        )}
                      </div>

                      {/* Center Column (Year Capsule) */}
                      <div className="flex justify-center relative z-20">
                        <motion.div 
                          initial={{ scale: 0, opacity: 0, y: 50 }}
                          whileInView={{ scale: 1, opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                          className="w-16 h-44 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
                          style={{ backgroundColor: item.color }}
                        >
                          <span className="text-white font-black text-4xl tracking-tighter transform -rotate-90 whitespace-nowrap select-none">
                            {item.year}
                          </span>
                          <div className={`absolute top-1/2 -translate-y-1/2 w-14 h-14 opacity-20 bg-white rotate-45 ${isEven ? '-left-7' : '-right-7'}`}></div>
                        </motion.div>
                        
                        <motion.div 
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 }}
                          className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-[20px] border-y-transparent ${isEven ? 'border-l-[25px] -right-6' : 'border-r-[25px] -left-6'}`}
                          style={{ 
                            borderLeftColor: isEven ? item.color : 'transparent', 
                            borderRightColor: !isEven ? item.color : 'transparent' 
                          }}
                        ></motion.div>
                      </div>

                      {/* Right Side */}
                      <div className={`px-12 ${!isEven ? 'text-left' : 'flex justify-center'}`}>
                        {!isEven ? (
                          <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative"
                          >
                            <div className="absolute top-1/2 -translate-y-1/2 -left-16 flex gap-1.5">
                              {[1, 2, 3].map(i => (
                                <motion.div 
                                  key={i} 
                                  initial={{ scale: 0 }}
                                  whileInView={{ scale: 1 }}
                                  transition={{ delay: 0.5 + (i * 0.1) }}
                                  className="w-2.5 h-2.5 rounded-full" 
                                  style={{ backgroundColor: item.color, opacity: 0.4 }}
                                ></motion.div>
                              ))}
                            </div>
                            <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter" style={{ color: item.color }}>
                              {item.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-base font-medium max-w-sm">
                              {item.desc}
                            </p>
                          </motion.div>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="w-40 h-40 rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] flex items-center justify-center border-[8px] relative group"
                            style={{ borderColor: item.color }}
                          >
                            <div className="absolute top-1/2 -translate-y-1/2 -left-12 w-12 h-0.5 bg-gray-300"></div>
                            <div style={{ color: '#333' }} className="transform scale-150 group-hover:scale-175 transition-transform duration-500">
                              {item.icon}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden flex flex-col items-center text-center space-y-6">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-16 h-40 rounded-full flex items-center justify-center shadow-xl" 
                        style={{ backgroundColor: item.color }}
                      >
                        <span className="text-white font-black text-3xl tracking-tighter transform -rotate-90">
                          {item.year}
                        </span>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center border-[6px]" 
                        style={{ borderColor: item.color }}
                      >
                        <div style={{ color: '#333' }} className="transform scale-125">
                          {item.icon}
                        </div>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="px-4"
                      >
                        <h3 className="text-2xl font-black mb-2 uppercase" style={{ color: item.color }}>
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm font-medium">
                          {item.desc}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section-4.5: Transparency & Stats */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Transparency That Shows Our True Strength</h2>
            <p className="text-xl text-white/80">Our numbers speak for our commitment to excellence and client satisfaction.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-white/70 font-bold uppercase tracking-widest text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section-5: Our Expertise */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div 
              className="lg:w-1/2"
            >
              <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                Our Expertise
              </div>
              <h2 className="text-4xl md:text-6xl mb-8 font-bold text-gray-900 leading-tight">
                Engineered for <span className="text-primary">Excellence</span>
              </h2>
              <p className="text-gray-600 text-xl mb-12 leading-relaxed">
                We provide the foundation for modern digital transformation. Our expertise lies in creating resilient infrastructures that adapt to your growth and protect your assets.
              </p>
              <div className="grid gap-6">
                {[
                  { 
                    title: "Intelligent Design", 
                    desc: "Smart networking solutions that learn and adapt to your traffic patterns.",
                    icon: <Lightbulb className="w-6 h-6" />
                  },
                  { 
                    title: "Unmatched Reliability", 
                    desc: "99.9% uptime guaranteed with our enterprise-grade hardware.",
                    icon: <ShieldCheck className="w-6 h-6" />
                  },
                  { 
                    title: "Global Standards", 
                    desc: "Products certified by international bodies for safety and performance.",
                    icon: <Globe className="w-6 h-6" />
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex gap-6 p-6 rounded-2xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div 
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=600" 
                    className="rounded-3xl shadow-2xl w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500" 
                    alt="Data Center" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="bg-primary p-8 rounded-3xl text-white shadow-xl">
                    <div className="text-4xl font-bold mb-2">99.9%</div>
                    <div className="text-sm opacity-80 uppercase tracking-widest font-bold">Uptime Guaranteed</div>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="bg-gray-900 p-8 rounded-3xl text-white shadow-xl">
                    <div className="text-4xl font-bold mb-2">24/7</div>
                    <div className="text-sm opacity-80 uppercase tracking-widest font-bold">Expert Support</div>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600" 
                    className="rounded-3xl shadow-2xl w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500" 
                    alt="Network Security" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
              </div>
              {/* Decorative background element */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>


      {/* Section-6: Industries We Empower */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <div 
              className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4"
            >
              Designed for Diverse Enterprise Needs
            </div>
            <h2 
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter"
            >
              Industries We <span className="text-primary">Empower</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
            {[
              { 
                name: "Hospital & Clinics", 
                icon: <Activity className="w-6 h-6" />,
                desc: "Ensuring 24/7 uptime for critical healthcare systems and secure patient data management.",
                img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
              },
              { 
                name: "University & Colleges", 
                icon: <GraduationCap className="w-6 h-6" />,
                desc: "High-density Wi-Fi and secure campus-wide networking for thousands of students and faculty.",
                img: "https://images.unsplash.com/photo-1541339907198-e08756edd811?auto=format&fit=crop&q=80&w=800"
              },
              { 
                name: "Mall & Retail Stores", 
                icon: <ShoppingBag className="w-6 h-6" />,
                desc: "Seamless POS connectivity and customer analytics through intelligent retail networking.",
                img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
              },
              { 
                name: "Industrial & Tech Companies", 
                icon: <Factory className="w-6 h-6" />,
                desc: "Robust networking for smart manufacturing and high-performance computing environments.",
                img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
              },
              { 
                name: "Hotels & Restaurants", 
                icon: <Hotel className="w-6 h-6" />,
                desc: "Premium guest Wi-Fi experiences and secure hospitality management systems.",
                img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
              },
              { 
                name: "Government Infrastructure", 
                icon: <Landmark className="w-6 h-6" />,
                desc: "Highly secure, compliant networking solutions for public sector and mission-critical services.",
                img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800"
              },
            ].map((industry, idx) => (
              <div 
                key={idx}
                className="relative group"
              >
                {/* Image Container */}
                <div className="relative h-64 rounded-[2.5rem] overflow-hidden shadow-2xl z-0">
                  <img 
                    src={industry.img} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={industry.name}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                </div>

                {/* Overlapping Content Box */}
                <div className="absolute -bottom-12 left-6 right-6 bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/20 z-10 transform group-hover:-translate-y-2 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {industry.icon}
                    </div>
                    <h4 className="text-xl font-black text-gray-900 leading-tight tracking-tight">{industry.name}</h4>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">{industry.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section-7: Awards & Get in Touch Combined */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Awards Grid */}
            <div>
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-black title-effect">Awards & Recognitions</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {awards.map((award, idx) => (
                  <div 
                    key={idx}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-xl mb-4 aspect-video shadow-md">
                      <img src={award.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={award.title} referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Award className="text-white w-12 h-12" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold group-hover:text-primary transition-colors">{award.title}</h4>
                    <p className="text-gray-400 text-sm">{award.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Get in Touch Form */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl">
              <div className="mb-10">
                <h2 className="text-4xl font-black mb-4 text-gray-900">Get in Touch</h2>
                <p className="text-gray-500 font-medium">
                  Have a query or need a custom solution? Our experts are here to help you scale your enterprise networking.
                </p>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Your Name</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl bg-white border border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium" placeholder="Full Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Email Address</label>
                    <input type="email" className="w-full px-5 py-4 rounded-xl bg-white border border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium" placeholder="email@company.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Subject</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl bg-white border border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Message</label>
                  <textarea className="w-full px-5 py-4 rounded-xl bg-white border border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all h-32 resize-none font-medium" placeholder="Describe your requirements..."></textarea>
                </div>
                <button className="w-full bg-primary hover:bg-primary-dark text-white font-black py-5 rounded-xl transition-all transform hover:-translate-y-1 shadow-xl uppercase tracking-widest text-sm">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section-6: Voices of Trust */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Carousel */}
            <div className="flex flex-col">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-3">
                  <Star className="w-3.5 h-3.5 fill-primary" />
                  Client Testimonials
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-3 tracking-tighter text-gray-900 leading-[0.9]">
                  What Our <span className="text-primary">Clients Say</span>
                </h2>
                <p className="text-base text-gray-400 font-medium max-w-md">Our clients' success stories speak louder than words.</p>
              </div>

              <div className="relative flex-grow flex flex-col">
                <div className="relative h-[340px] w-full">
                  <div
                    key={activeTestimonial}
                    className="absolute inset-0 w-full h-full"
                  >
                    <div className="h-full bg-white p-6 md:p-10 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between relative group overflow-hidden">
                      {/* Background Quote Mark */}
                      <div className="absolute -top-4 -left-4 opacity-[0.02] text-primary select-none pointer-events-none">
                        <Quote size={150} />
                      </div>

                      <div className="relative z-10">
                        <div className="mb-4">
                          <Quote className="w-10 h-10 text-primary/20 fill-primary/5" />
                        </div>
                        
                        <p className="text-base md:text-lg text-gray-800 leading-snug font-bold tracking-tight italic">
                          "{testimonials[activeTestimonial].text}"
                        </p>
                      </div>

                      <div className="relative z-10 mt-6 flex items-end justify-between">
                        <div className="flex flex-col">
                          <div className="text-base font-black text-gray-900 tracking-tighter uppercase flex items-center gap-2">
                            <span className="w-6 h-1 bg-primary rounded-full"></span>
                            {testimonials[activeTestimonial].author}
                          </div>
                          <div className="text-gray-400 font-bold text-[9px] uppercase tracking-[0.2em] mt-0.5 ml-8">
                            {testimonials[activeTestimonial].role} <span className="mx-1 text-gray-200">|</span> <span className="text-primary/70">{testimonials[activeTestimonial].company}</span>
                          </div>
                        </div>
                        
                        {/* Logo Circle */}
                        <div className="w-16 h-16 rounded-full bg-white border-[4px] border-gray-50 shadow-lg flex items-center justify-center p-3 transform translate-x-2 translate-y-2 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700 overflow-hidden">
                          <img 
                            src={testimonials[activeTestimonial].logo} 
                            alt={testimonials[activeTestimonial].company} 
                            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700" 
                            referrerPolicy="no-referrer" 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar & Controls */}
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-2">
                      {testimonials.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveTestimonial(idx)}
                          className="group relative py-1"
                        >
                          <div className={`h-1 rounded-full transition-all duration-700 ${activeTestimonial === idx ? 'w-10 bg-primary' : 'w-2 bg-gray-200 group-hover:bg-gray-300'}`} />
                        </button>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                        className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 group"
                      >
                        <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-0.5 transition-transform" />
                      </button>
                      <button 
                        onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                        className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 group"
                      >
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="h-0.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary/20 w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Video Testimonial */}
            <div className="flex flex-col">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-3">
                  <Zap className="w-3.5 h-3.5 fill-primary" />
                  Video Testimonial
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-3 tracking-tighter text-gray-900 leading-[0.9]">
                  Voices of <span className="text-primary">Trust</span>
                </h2>
                <p className="text-base text-gray-400 font-medium max-w-md">Real feedback from Enterprises owners</p>
              </div>

              <div 
                className="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden flex-grow flex flex-col group"
              >
                <div className="aspect-video relative bg-black overflow-hidden">
                  <iframe 
                    className="w-full h-full scale-105 group-hover:scale-100 transition-transform duration-1000"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    title="Client Testimonial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity pointer-events-none duration-700"></div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-[0.2em] mb-2">
                    <Zap className="w-3.5 h-3.5 fill-primary" />
                    Featured Review
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tighter">Shri. Prakash Patil</h3>
                  <p className="text-gray-500 leading-relaxed font-medium text-base tracking-tight mb-6">
                    A visionary at Kandivali, Shri. Prakash Patil is one of the first adopters of PMWANI in Mumbai City. His smart planning and vision enabled him to tap a key corner with heavy movement at Kandivali area.
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[1rem] bg-primary/5 flex items-center justify-center text-primary">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-black text-gray-900 text-base tracking-tighter uppercase">Society Resident</div>
                      <div className="text-gray-400 font-bold text-[9px] uppercase tracking-[0.2em] mt-0.5">PM-WANI Review</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy Drawer */}
      {isPhilosophyOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsPhilosophyOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          {/* Drawer */}
          <div
            className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-white z-[101] shadow-2xl overflow-y-auto"
          >
              <div className="relative">
                {/* Header Image */}
                <div className="h-[300px] relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-full object-cover"
                    alt="Philosophy Header"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <button 
                    onClick={() => setIsPhilosophyOpen(false)}
                    className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all border border-white/20"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-8 left-8">
                    <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Our Philosophy</h2>
                    <p className="text-white/70 font-medium">Building the Future of Networking</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 space-y-12">
                  <section>
                    <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                      <div className="w-2 h-8 bg-primary rounded-full"></div>
                      The Core Principles
                    </h3>
                    <div className="grid gap-6">
                      {[
                        { title: "Security First", desc: "Every line of code and every hardware component is designed with a security-first mindset. We don't just add security; we build it in." },
                        { title: "Radical Simplicity", desc: "Complexity is the enemy of security. We strive to make the most advanced networking technology accessible and easy to manage." },
                        { title: "Continuous Innovation", desc: "The digital landscape never stops evolving, and neither do we. Our R&D team is constantly pushing the boundaries of what's possible." }
                      ].map((item, i) => (
                        <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                          <h4 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                      <div className="w-2 h-8 bg-primary rounded-full"></div>
                      Our Product Philosophy
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      At Immunity Networks, we believe that networking hardware should be as intelligent as the software it runs. Our Alpha series represents the pinnacle of this belief—combining rugged durability with cutting-edge processing power.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <img 
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=600" 
                        className="rounded-2xl h-40 w-full object-cover"
                        alt="Tech 1"
                        referrerPolicy="no-referrer"
                      />
                      <img 
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600" 
                        className="rounded-2xl h-40 w-full object-cover"
                        alt="Tech 2"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </section>

                  <section className="bg-primary p-8 rounded-3xl text-white">
                    <Quote className="w-10 h-10 mb-6 opacity-50" />
                    <p className="text-xl font-medium italic leading-relaxed mb-6">
                      "We don't just build products; we build the infrastructure that empowers enterprises to dream bigger and scale faster."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                      <div>
                        <p className="font-bold">Sumit Garg</p>
                        <p className="text-white/60 text-sm">Founder, Immunity Networks</p>
                      </div>
                    </div>
                  </section>
                </div>

                {/* Footer Action */}
                <div className="p-10 border-t border-gray-100">
                  <button 
                    onClick={() => setIsPhilosophyOpen(false)}
                    className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all"
                  >
                    Close Philosophy
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      {/* Section-8: Footer CTA */}
      <section className="bg-[#7a0026] py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-white text-2xl md:text-3xl font-bold max-w-4xl leading-tight text-center md:text-left">
            "Internet Runs the world today - Immunity networks will Run Internet at your business. Contact us"
          </h2>
          <button className="border-2 border-white text-white px-8 py-3 font-bold hover:bg-white hover:text-[#7a0026] transition-all flex items-center gap-2 whitespace-nowrap">
            CONTACT US <Download className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-gray-400 py-20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <h4 className="text-white mb-8 uppercase tracking-widest text-sm font-black">Navigation</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Clients</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-8 uppercase tracking-widest text-sm font-black">Useful Link</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li><a href="#" className="hover:text-primary transition-colors">Terms & Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Refund Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">E Waste</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-8 uppercase tracking-widest text-sm font-black">Contact Us</h4>
              <ul className="space-y-6 text-sm font-bold">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span className="leading-relaxed">Address: 804, DLH Park, Rani Sati Nagar, S.V.Road, Goregaon West, Mumbai 400064</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>(022) 46041626 / 46013641</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span>Email: contactus@immunitynetworks.com</span>
                </li>
              </ul>
              <button className="mt-8 bg-white text-[#7a0026] px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-100 transition-all">
                COMPANY BROCHURE <Download className="w-4 h-4" />
              </button>
            </div>

            <div>
              <h4 className="text-white mb-8 uppercase tracking-widest text-sm font-black">Join Our Newsletter</h4>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white text-gray-900 px-6 py-3 rounded-full outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white text-gray-900 px-6 py-3 rounded-full outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                <div className="flex justify-end">
                  <div className="w-1 h-24 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm font-bold">
              &copy;Copyright {new Date().getFullYear()} <span className="text-[#7a0026]">Immunity Networks</span> All Rights Reserved
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
