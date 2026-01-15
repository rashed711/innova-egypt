
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Layers, Phone, Mail, Monitor, 
  Database, Zap, Menu, X, MessageCircle, 
  Rocket, ShieldCheck, Target, TrendingUp, ChevronLeft, ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring, Variants } from 'framer-motion';

const LOGO_URL = "https://a.top4top.io/p_36677u24m1.png";
const WHATSAPP_LINK = "https://wa.me/201288333348";

const HERO_IMAGES = [
  {
    url: "https://i.pinimg.com/736x/db/6c/2e/db6c2e6ece08917d6a1617d9f10c1594.jpg",
    title: "مستقبل رقمي ذكي",
    sub: "نبتكر الحلول التي تمنح أعمالك الأفضلية المطلقة"
  },
  {
    url: "https://i.pinimg.com/1200x/af/d8/f3/afd8f33d32fc367949575dfccf2014c6.jpg",
    title: "بنية تحتية متطورة",
    sub: "نورد أفضل العتاد العالمي لضمان استقرار عملياتك"
  },
  {
    url: "https://i.pinimg.com/736x/04/e4/41/04e4418b93f5abb7a3d843cb0fde3f7f.jpg",
    title: "أمان سيبراني متكامل",
    sub: "حماية بياناتك هي أولويتنا القصوى في عصر التحول الرقمي"
  }
];

const anim = {
  fadeIn: (delay = 0): Variants => ({
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] } 
    }
  }),
  stagger: {
    visible: { transition: { staggerChildren: 0.1 } }
  }
};

const Button = ({ children, variant = 'primary', onClick, className = '' }: any) => {
  const base = "px-8 py-4 rounded-xl font-black transition-all duration-300 flex items-center justify-center gap-3 text-base active:scale-95";
  const variants: any = {
    primary: "bg-blue-600 text-white shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:shadow-blue-600/40",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:border-blue-500 hover:text-blue-600",
    outline: "border-2 border-white text-white hover:bg-white hover:text-blue-600"
  };
  return (
    <motion.button 
      whileHover={{ y: -4 }}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

const SectionHeading = ({ badge, title, sub, light = false }: any) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={anim.stagger}
    className="text-center max-w-3xl mx-auto mb-20"
  >
    <motion.span variants={anim.fadeIn()} className={`inline-block px-4 py-1 rounded-full text-[11px] font-black uppercase tracking-widest mb-4 ${light ? 'bg-white/10 text-blue-300 border border-white/10' : 'bg-blue-50 text-blue-600'}`}>
      {badge}
    </motion.span>
    <motion.h2 variants={anim.fadeIn(0.1)} className={`h-lg font-black mb-6 leading-tight ${light ? 'text-white' : 'text-slate-950'}`}>
      {title}
    </motion.h2>
    <motion.p variants={anim.fadeIn(0.2)} className={`p-lg font-bold opacity-70 leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>
      {sub}
    </motion.p>
  </motion.div>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white overflow-x-hidden" dir="rtl">
      
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[1000] origin-right" style={{ scaleX }} />

      {/* Header */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="flex items-center gap-4 cursor-pointer group">
            <img src={LOGO_URL} alt="Logo" className="h-8 md:h-10 transition-transform group-hover:scale-105" />
            <div className="hidden sm:block border-r-2 border-blue-500/20 pr-4 leading-none">
              <div className={`text-xl font-black ${scrolled ? 'text-slate-900' : 'text-white'}`}>إنوفا تكنولوجي</div>
              <div className={`text-[9px] font-black uppercase tracking-widest mt-1 ${scrolled ? 'text-blue-600' : 'text-blue-400'}`}>Digital Solutions</div>
            </div>
          </div>

          <div className={`hidden lg:flex items-center gap-10 ${scrolled ? 'text-slate-700' : 'text-white'}`}>
            {['الرئيسية', 'من نحن', 'خدماتنا', 'تواصل معنا'].map((item, i) => (
              <button 
                key={item} 
                onClick={() => i === 0 ? window.scrollTo({top:0, behavior:'smooth'}) : scrollTo(['about', 'services', 'contact'][i-1])}
                className="text-sm font-black hover:text-blue-600 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
              </button>
            ))}
            <Button variant={scrolled ? 'primary' : 'outline'} onClick={() => window.open(WHATSAPP_LINK)}>ابدأ الآن</Button>
          </div>

          <button className={`${scrolled ? 'text-slate-900 bg-slate-100' : 'text-white bg-white/10'} lg:hidden p-3 rounded-xl transition-all`} onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Interactive Hero Slider */}
      <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden pt-20">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={HERO_IMAGES[currentSlide].url} 
              className="w-full h-full object-cover opacity-60" 
              alt="Tech Background" 
            />
            <div className="absolute inset-0 bg-gradient-to-l from-slate-950 via-slate-950/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
          </motion.div>
        </AnimatePresence>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl text-right">
            <motion.div 
              key={`badge-${currentSlide}`}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-200 rounded-lg text-xs font-black uppercase tracking-widest mb-8 backdrop-blur-sm"
            >
              <Zap size={14} className="fill-blue-500" />
              Innova Technology Prestige
            </motion.div>
            
            <motion.h1 
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              className="h-xl font-black text-white mb-8 leading-[1.1]"
            >
              {HERO_IMAGES[currentSlide].title.split(' ').map((word, i) => 
                i === 2 ? <span key={i} className="text-gradient"> {word} </span> : ` ${word} `
              )}
            </motion.h1>

            <motion.p 
              key={`sub-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-lg text-slate-300 mb-12 max-w-2xl font-bold opacity-90 leading-relaxed"
            >
              {HERO_IMAGES[currentSlide].sub}
            </motion.p>

            <div className="flex flex-wrap gap-5">
              <Button onClick={() => window.open(WHATSAPP_LINK)} className="group">
                ابدأ رحلتك معنا
                <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
              </Button>
              <Button variant="outline" onClick={() => scrollTo('services')}>استكشف حلولنا</Button>
            </div>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-12 right-12 flex gap-3 z-20">
          {HERO_IMAGES.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${currentSlide === i ? 'w-12 bg-blue-500' : 'w-4 bg-white/20'}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-40 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={anim.fadeIn()} className="space-y-8">
              <div className="space-y-4">
                <span className="text-blue-600 font-black text-xs uppercase tracking-widest">من نحن</span>
                <h2 className="h-lg font-black text-slate-950 leading-tight">شريكك التقني في رحلة النجاح</h2>
                <p className="p-lg text-slate-600 font-bold opacity-80 leading-relaxed">
                  نحن في إنوفا تكنولوجي نجمع بين توريد أرقى الأجهزة العالمية وتطوير البرمجيات الأكثر ذكاءً لنبني لك بيئة عمل متكاملة.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Target className="text-blue-600" />, title: "دقة التنفيذ", desc: "نهتم بأدق التفاصيل الهندسية." },
                  { icon: <ShieldCheck className="text-blue-600" />, title: "أمان وثقة", desc: "نضمن استقرار وحماية أنظمتك." }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="mb-4">{item.icon}</div>
                    <h4 className="text-lg font-black mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-bold">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={anim.fadeIn(0.3)} className="relative">
              <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] -rotate-2" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=100&w=1000" className="w-full h-full object-cover" alt="Corporate" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-40 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading 
            badge="خدماتنا"
            title={<>حلول <span className="text-blue-600">هندسية وبرمجية</span> متكاملة</>}
            sub="نغطي كافة احتياجات مؤسستك التقنية من الألف إلى الياء."
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Layers size={32} />, 
                title: "تطوير البرمجيات", 
                desc: "أنظمة ERP مخصصة وتطبيقات موبايل تخدم أهدافك التجارية.",
                img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
              },
              { 
                icon: <Monitor size={32} />, 
                title: "توريد الأجهزة", 
                desc: "سيرفرات وأجهزة كمبيوتر من كبرى العلامات العالمية (HP, Dell, Cisco).",
                img: "https://i.pinimg.com/1200x/97/dc/76/97dc76f78aadddc25ea19d11ac39e864.jpg"
              },
              { 
                icon: <Database size={32} />, 
                title: "الشبكات والسيرفرات", 
                desc: "تصميم وتنفيذ غرف البيانات وشبكات الربط بأعلى كفاءة.",
                img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
              }
            ].map((service, i) => (
              <motion.div 
                key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={anim.fadeIn(i * 0.1)}
                className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="h-60 overflow-hidden relative">
                  <img src={service.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={service.title} />
                  <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-all" />
                </div>
                <div className="p-10 text-right">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-500 font-bold text-sm leading-relaxed mb-8">{service.desc}</p>
                  <button onClick={() => window.open(WHATSAPP_LINK)} className="flex items-center gap-3 text-blue-600 font-black text-xs uppercase tracking-widest hover:gap-5 transition-all">
                    احصل على عرض سعر <ArrowLeft size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Geometric Background */}
      <footer className="footer-geometric py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-4 gap-16 mb-20 text-right">
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-4">
                <img src={LOGO_URL} alt="Footer Logo" className="h-10" />
                <div className="border-r-2 border-blue-500/30 pr-4">
                  <div className="text-2xl font-black text-white">إنوفا تكنولوجي</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-blue-400 mt-1">Digital Excellence</div>
                </div>
              </div>
              <p className="text-slate-400 font-bold leading-relaxed max-w-md">
                القائد المبتكر في توريد العتاد العالمي وبناء البرمجيات المتخصصة. نضع خبراتنا التقنية بين يديك لتحويل رؤيتك إلى واقع رقمي ملموس.
              </p>
              <div className="flex gap-4">
                <Button variant="primary" onClick={() => window.open(WHATSAPP_LINK)} className="px-6 py-3 text-sm">تحدث مع خبير</Button>
                <div className="flex items-center gap-3 text-white/60">
                  <Phone size={18} />
                  <span dir="ltr" className="font-black">01288333348</span>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-black mb-8 text-white">روابط سريعة</h5>
              <ul className="space-y-4 text-slate-400 font-bold text-sm">
                <li><button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="hover:text-blue-400 transition-all">الرئيسية</button></li>
                <li><button onClick={() => scrollTo('about')} className="hover:text-blue-400 transition-all">من نحن</button></li>
                <li><button onClick={() => scrollTo('services')} className="hover:text-blue-400 transition-all">خدماتنا</button></li>
                <li><button onClick={() => scrollTo('about')} className="hover:text-blue-400 transition-all">سياسة الخصوصية</button></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-black mb-8 text-white">تواصل مباشر</h5>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer justify-end md:justify-start">
                  <span className="text-slate-400 font-bold text-sm">info@innova-egypt.com</span>
                  <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all"><Mail size={18} /></div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer justify-end md:justify-start">
                  <span className="text-lg font-black text-white" dir="ltr">القاهرة، مصر</span>
                  <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all"><Target size={18} /></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 text-center text-slate-500 font-bold text-[10px] uppercase tracking-[0.4em]">
            &copy; {new Date().getFullYear()} Innova Technology Solutions. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <motion.button 
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open(WHATSAPP_LINK)}
        className="fixed bottom-10 left-10 z-[500] w-16 h-16 bg-[#25D366] text-white rounded-2xl shadow-2xl flex items-center justify-center shadow-[#25D366]/40"
      >
        <MessageCircle size={32} />
      </motion.button>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[200] bg-slate-950 p-8 flex flex-col items-center justify-center space-y-8"
          >
            <button className="absolute top-8 right-8 text-white" onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            {['الرئيسية', 'من نحن', 'خدماتنا', 'تواصل معنا'].map((item, i) => (
              <button key={item} className="text-3xl font-black text-white" onClick={() => i === 0 ? window.scrollTo({top:0, behavior:'smooth'}) : scrollTo(['about', 'services', 'contact'][i-1])}>{item}</button>
            ))}
            <Button className="w-full max-w-xs" onClick={() => window.open(WHATSAPP_LINK)}>ابدأ الآن</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
