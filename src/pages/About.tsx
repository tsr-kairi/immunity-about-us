import { motion, useScroll, useTransform } from "motion/react";
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
  Quote,
  Instagram,
  HomeIcon
} from "lucide-react";
import { useState, useEffect } from "react";
import SectionTitle from "../_component/common/TitleEffect";


export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

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

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleChange((index + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const handleChange = (i) => {
    setFade(false);
    setTimeout(() => {
      setIndex(i);
      setFade(true);
    }, 200);
  };

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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3" : "bg-white py-5"}`}>
        <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-primary font-display font-black text-2xl tracking-tighter">
              <a href="index.html"><img id="imx-logo_img" src="https://immunitynetworks.com/images/immunity.png" alt="logo"/> </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About Us", "Solutions", "Products", "Contact Us"].map((item) => (
              <a 
                key={item} 
                href="#" 
                className={`text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors ${scrolled ? "text-gray-800" : "text-gray-800"}`}
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

        <div className="container max-w-6xl mx-auto px-4 relative z-20 mt-32">
          <div 
            className="max-w-3xl"
          >
            {/* Breadcrumb - Matching reference style */}
            <div className="flex items-center space-x-2 text-sm text-white/90 mb-2 font-medium">
              <a href="/" className="hover:text-white text-gray-400 transition-colors flex items-center">
                <span className="mr-1.5 text-[12px] md:text-[14px] "></span> <HomeIcon className="w-4 h-4 mr-2" /> Home
              </a>
              <span className="text-white/60 mx-1">»</span>
              <span className="text-white text-[12px] md:text-[14px]">About Us</span>
            </div>

            {/* Hero Content - Matching reference style */}
            <h1 className="text-[28px] md:text-[36px] text-white mb-4 font-bold tracking-tight">
              About Us
            </h1>
            
            <p className="text-[14px] md:text-[18px] text-white/90 font-medium tracking-wide">
              Secured. Reliable. Scalable.
            </p>
          </div>
        </div>
      </section>

      {/* Section-1: A Product-Driven Technology Company (What We Do) */}
      <section className="bg-[#f5f5f5] py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 lg:px-20">

    {/* Top Grid */}
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Left Image */}
      <div className="w-full h-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1671028545797-cc0b7b6e765c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hhdCUyMHdlJTIwZG98ZW58MHx8MHx8fDA%3D"
          alt="Workspace"
          className="w-full h-full object-cover rounded-md shadow-md"
        />
      </div>

      {/* Right Content */}
      <div>
        <SectionTitle subheading="A Product-Driven Technology Company" size="text-4xl" className="mb-6" title="What We Do" />

        <p className="text-gray-600 mb-5 leading-relaxed">
          Immunity Networks was founded by Mr. Sumit Garg in 2009 with a
          forward-thinking approach focused on developing high-performance,
          secure, and scalable products for modern enterprises.
        </p>

        <p className="text-gray-600 mb-5 leading-relaxed">
          After extensive research and innovation, we have developed solutions
          engineered with a security-first approach, ensuring robust protection
          without compromising speed or efficiency.
        </p>

        <p className="text-gray-600 leading-relaxed">
          We prioritize reliability and consistency, enabling businesses to
          operate seamlessly in demanding environments while staying ahead in an
          evolving digital landscape.
        </p>
      </div>
    </div>

    {/* Bottom Full Width Content */}
    <div className="mt-10 space-y-5">
      <p className="text-gray-600 leading-relaxed">
        Our wide range of products are engineered to meet the evolving demands
        of businesses that require uninterrupted connectivity, robust security,
        and seamless scalability — all in one integrated ecosystem.
      </p>

      <p className="text-gray-600 leading-relaxed">
        We believe networking should not be complex — it should be intelligent,
        efficient, and built to perform since 2009.
      </p>
      <p className="text-gray-600 leading-relaxed">
        We also follow a product-first philosophy—where every solution is built with deep technical expertise, real-world insights, and a clear focus on usability.
      </p>
    </div>

  </div>
</section>

      {/* Section-2: Building networks that scale */}
      <section className="bg-[#f5f5f5] py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-4 lg:px-20 text-center">

    <SectionTitle subheading="What Drives Us" size="text-4xl" className="mb-6" align="center" title="Building networks that scale" />
    <p className="text-gray-600 max-w-3xl mx-auto mb-14 leading-relaxed">
      We focus on delivering solutions that are simple to use, secure by design,
      and optimized for performance — ensuring businesses can scale confidently
      without complexity.
    </p>

    {/* Features Grid */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* Card 1 */}
      <div className="flex flex-col items-center text-center px-4">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#7a0026]/10 mb-5">
          <img src="https://immunitynetworks.com/images/home/Scalable-Archite.png" alt="logo" />
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Simplicity in Design
        </h3>

        <p className="text-gray-600 leading-relaxed">
          We create intuitive, easy-to-deploy products that reduce complexity
          with flexibility.
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center text-center px-4">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#7a0026]/10 mb-5">
            <img src="https://immunitynetworks.com/images/home/Scalable-Archite.png" alt="logo" />
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Strength in Security
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Built with advanced, multi-layer protection to safeguard from evolving
          threats.
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center text-center px-4">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#7a0026]/10 mb-5">
          <img src="https://immunitynetworks.com/images/home/Scalable-Archite.png" alt="logo" />
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Stability in Performance
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Engineered for consistent & high-speed operation to ensure reliable
          network performance.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* Section-3: Mission, Vision, Approach (Sticky Scroll Redesign) */}
      <section className="w-full">
  <div className="grid lg:grid-cols-3">

    {/* Card 1 */}
    <div className="relative group h-[420px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475"
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        alt="Mission"
      />

      <div className="absolute inset-0 bg-primary/60"></div>

      <div className="absolute inset-0 flex flex-col justify-center px-8 text-white z-10">
        <div className="mb-4 text-[#7a0026] text-3xl">🎯</div>

        <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
        <h4 className="text-xl font-light mb-4">
          Simplifying Secure Networking for Every Enterprise
        </h4>

        <p className="text-sm text-white/80 mb-6">
          To design and deliver powerful networking products that combine
          performance, security, and simplicity—enabling businesses to operate
          with confidence and scale without limitations.
        </p>

        {/* Read More */}
        <a href="#" className="flex items-center gap-2 group-hover:text-white font-semibold tracking-wide group-hover:gap-3 transition-all hidden group-hover:block cursor-pointer">
          READ MORE
          <span className="inline-flex items-center justify-center w-6 h-6 border group-hover:border-white rounded-full text-xs group-hover:translate-x-1 group-hover:scale-110 transition-all">
            →
          </span>
        </a>
      </div>
    </div>

    {/* Card 2 */}
    <div className="relative group h-[420px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        alt="Vision"
      />

      <div className="absolute inset-0 bg-primary/60"></div>

      <div className="absolute inset-0 flex flex-col justify-center px-8 text-white z-10">
        <div className="mb-4 text-[#7a0026] text-3xl">👁️</div>

        <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
        <h4 className="text-xl font-light mb-4">
          Redefining Enterprise Connectivity
        </h4>

        <p className="text-sm text-white/80 mb-6">
          To become a global leader in secure networking products by building
          intelligent, adaptive, and future-ready solutions that transform how
          enterprises connect, operate, and grow.
        </p>

        {/* Read More */}
        <a href="#" className="flex items-center gap-2 group-hover:text-white font-semibold tracking-wide group-hover:gap-3 transition-all hidden group-hover:block cursor-pointer">
          READ MORE
          <span className="inline-flex items-center justify-center w-6 h-6 border group-hover:border-white rounded-full text-xs group-hover:translate-x-1 group-hover:scale-110 transition-all">
            →
          </span>
        </a>
      </div>
    </div>

    {/* Card 3 */}
    <div className="relative group h-[420px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1551434678-e076c223a692"
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        alt="Approach"
      />

      <div className="absolute inset-0 bg-black/80"></div>

      <div className="absolute inset-0 flex flex-col justify-center px-8 text-white z-10">
        <div className="mb-4 text-black text-3xl">⚙️</div>

        <h3 className="text-2xl font-semibold mb-2">Our Approach</h3>
        <h4 className="text-xl font-light mb-4">
          Innovation Meets Practical Performance
        </h4>

        <p className="text-sm text-white/80 mb-6">
          We follow a product-first philosophy—where every solution is built with
          deep technical expertise, real-world insights, and a clear focus on usability.
        </p>

        {/* Read More */}
        <a href="#" className="flex items-center gap-2 group-hover:text-white font-semibold tracking-wide group-hover:gap-3 transition-all hidden group-hover:block cursor-pointer">
          READ MORE
          <span className="inline-flex items-center justify-center w-6 h-6 border group-hover:border-white rounded-full text-xs group-hover:translate-x-1 group-hover:scale-110 transition-all">
            →
          </span>
        </a>
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
          <SectionTitle subheading="Our Transformation Journey" size="text-4xl" className="mb-6" align="center" title={`Immunity Network:\nVision to Powerful Products`} />

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

      {/* Section-4.5: Testimonials & Success Stories */}
      <section className="bg-[#f5f5f5] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-20 grid lg:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div>
        <SectionTitle subheading="What Our Clients Say" size="text-3xl" className="mb-6" align="left" title={`Our clients' success stories\nspeak louder than words.`} />

        {/* Card */}
        <div className="relative bg-[#ededed] p-12 rounded-sm min-h-[320px] flex items-center justify-center">

          {/* Quote Top Left */}
          <div className="absolute top-6 left-8 text-[#7a0026] text-6xl leading-none">
            “
          </div>

          {/* Content */}
          <div
            className={`max-w-3xl transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {testimonials[index].text}
            </p>

            <p className="text-gray-800 font-semibold text-lg">
              - {testimonials[index].role},{" "}
              <span className="text-[#7a0026]">
                {testimonials[index].company}
              </span>
            </p>
          </div>

          {/* Logo Bottom Left (ABSOLUTE CIRCLE) */}
          <div className="absolute -bottom-10 left-10 w-24 h-24 rounded-full border-[6px] border-[#7a0026] bg-white flex items-center justify-center shadow-md">
            <img
              src={testimonials[index].logo}
              alt=""
              className="w-14"
            />
          </div>
        </div>

        {/* Dots (Clickable) */}
        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleChange(i)}
              className={`w-3 h-3 cursor-pointer rounded-sm transition-all ${
                i === index
                  ? "bg-[#7a0026] w-4"
                  : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>

      </div>

        {/* RIGHT SIDE */}
        <div>
          <SectionTitle subheading="Voices of Trust" size="text-3xl" className="mb-6" align="left" title={`Real feedback from Enterprises owners`} />

          <div className="bg-white rounded-md shadow-sm overflow-hidden">
            <iframe
              className="w-full h-[250px] lg:h-[280px]"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Client Testimonial"
              allowFullScreen
            ></iframe>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Shri. Prakash Patil
              </h3>

              <p className="text-gray-600 leading-relaxed">
                A visionary at Kandivali, Shri. Prakash Patil is one of the first
                adopters of PMWANI in Mumbai City. His smart planning and vision
                enabled him to tap a key corner with heavy movement at Kandivali
                area.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>


      {/* Section-6: Industries We Empower */}
     <section className="bg-[#f5f5f5] py-20 pb-32">
  <div className="max-w-[1600px] mx-auto px-4 text-center">

    <SectionTitle subheading="Designed for Diverse Enterprise Needs" size="text-4xl" className="mb-14" align="center" title={`Industries We Empower`} />

    {/* Cards Row */}
    <div className="flex justify-center gap-6 flex-wrap lg:flex-nowrap">

      {[
        {
          title: "Hospital & Clinics",
          subtitle: "We empower hospitals and clinics to deliver quality care and services.",
          img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
        },
        {
          title: "University & Colleges",
          subtitle: "We support universities and colleges to advance knowledge and education.",
          img: "https://images.unsplash.com/photo-1562774053-701939374585",
        },
        {
          title: "Mall & Retail Stores",
          subtitle: "We help retail stores expand their reach and customer base.",
          img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
        },
        {
          title: "Industrial & Tech Companies",
          subtitle: "We support industrial companies in leveraging technology for growth.",
          img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        },
        {
          title: "Hotels & Restaurants",
          subtitle: "We help hotels and restaurants expand their reach and customer base.",
          img: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee",
        },
        {
          title: "Government Infrastructure",
          subtitle: "We support government infrastructure projects to drive development and progress.",
          img: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="relative w-[340px] h-[200px] group"
        >
          {/* Image */}
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500 rounded-md"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/25 rounded-md"></div>

          {/* Bottom Floating Card */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[85%] bg-white py-3 px-2 rounded-md shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 leading-tight">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

      {/* Section-7: Awards & Get in Touch Combined */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Awards Grid */}
            <div>
              <SectionTitle size="text-4xl" className="mb-12" align="left" title={`Awards & Recognitions`} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {awards.map((award, idx) => (
                  <div 
                    key={idx}
                    className="group cursor-pointer shadow-md"
                  >
                    <div className="relative overflow-hidden mb-4 aspect-video">
                      <img src={award.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={award.title} referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Award className="text-white w-12 h-12" />
                      </div>
                    </div>
                    <div className="text-left px-4 pb-4">
                      <h4 className="text-lg font-bold group-hover:text-primary transition-colors">{award.title}</h4>
                      <p className="text-gray-400 text-sm">{award.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Get in Touch Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Phone</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl bg-white border border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium" placeholder="Phone Number" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Website URL</label>
                    <input type="url" className="w-full px-5 py-4 rounded-xl bg-white border border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium" placeholder="Website Url" />
                  </div>
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
      {/* Section-8: Footer CTA */}
      <section className="bg-[#7a0026] py-12">
        <div className="container pl-0 lg:pl-[270px] w-full mr-0 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-white text-2xl md:text-2xl font-bold max-w-4xl leading-tight text-center md:text-left">
            "Internet Runs the world today - Immunity networks will Run Internet at your business. Contact us"
          </h2>
          <button className="border-2 border-white text-white cursor-pointer px-8 py-3 font-bold hover:bg-white hover:text-[#7a0026] transition-all flex items-center gap-2 whitespace-nowrap">
            CONTACT US <Download className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-gray-400 relative">

      {/* MAIN FOOTER */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* NAVIGATION */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wide">
            NAVIGATION
          </h3>
          <ul className="space-y-3">
            <li>Blog</li>
            <li>Careers</li>
            <li>Support</li>
            <li>Clients</li>
          </ul>
        </div>

        {/* USEFUL LINK */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wide">
            USEFUL LINK
          </h3>
          <ul className="space-y-3">
            <li>Terms & Service</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>E Waste</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wide">
            CONTACT US
          </h3>

          <div className="space-y-4 text-sm leading-relaxed">

            <div className="flex gap-3">
              <span>📍</span>
              <p>
                Address: 804, DLH Park, Rani Sati Nagar, S.V.Road,
                Goregaon West, Mumbai 400064
              </p>
            </div>

            <div className="flex gap-3">
              <span>📞</span>
              <p>(022) 46041626 / 46013641</p>
            </div>

            <div className="flex gap-3">
              <span>✉️</span>
              <p>contactus@immunitynetworks.com</p>
            </div>

          </div>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wide">
            NEWSLETTER
          </h3>

          <p className="text-sm">
            Subscribe to our newsletter for updates
          </p>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-800 mx-6"></div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row justify-between items-center gap-4 text-sm">

        <p>
          ©Copyright 2026{" "}
          <span className="text-[#7a0026]">
            Immunity Networks
          </span>{" "}
          All Rights Reserved
        </p>

        {/* SOCIAL */}
        <div className="flex gap-6 text-lg text-gray-500">
          <a href="https://www.facebook.com/immunitynetworks/" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer">
            <Facebook className="w-4 h-4 cursor-pointer" />
          </a>
          <a href="https://twitter.com/immunitynetworks" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer">
            <Twitter className="w-4 h-4 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/immunitynetworks/" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer">
            <Instagram className="w-4 h-4 cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/company/immunity-networks/" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer">
            <Linkedin className="w-4 h-4 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* SCROLL TO TOP BUTTON */}
      <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-5 bottom-10 bg-[#7a0026] text-white px-3 py-2 rounded-md shadow-lg text-xs flex flex-col items-center transition-all duration-300
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
    >
      ↑
      <span className="text-[10px]">TOP</span>
      </button>

    </footer>
    </div>
  );
}
