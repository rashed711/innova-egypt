
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ArrowRight, Layers, Phone, Mail, Monitor, 
  Database, Zap, Menu, X, MessageCircle, 
  ShieldCheck, Target, ExternalLink, Sparkles, Globe, Settings, Cpu, HardDrive
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring, Variants } from 'framer-motion';

const LOGO_URL = "https://a.top4top.io/p_36677u24m1.png";
const WHATSAPP_LINK = "https://wa.me/201288333348";

const translations = {
  en: {
    dir: 'ltr',
    nav: {
      home: 'Home',
      about: 'Strategy',
      services: 'Services',
      contact: 'Consultation',
      startProject: 'Get Started'
    },
    hero: [
      {
        badge: 'Strategic IT Partner',
        title: 'Innova.. Innovating Your Digital World',
        sub: 'Bridging the gap between growing business needs and advanced technology through a unique integrated solutions model in Egypt.'
      },
      {
        badge: 'Enterprise Infrastructure',
        title: 'Robust Hardware & Global Standards',
        sub: 'Supplying high-quality workstations, servers, and storage solutions from global brands to ensure your operational stability.'
      },
      {
        badge: 'Digital Transformation',
        title: 'Bespoke Software & Management Systems',
        sub: 'Custom-built web and mobile applications designed to enhance efficiency and drive scalable digital growth.'
      }
    ],
    heroButtons: {
      start: 'Partner With Us',
      explore: 'View Services'
    },
    about: {
      badge: 'Company Positioning',
      title: 'Not Just a Vendor, But a Long-term Partner',
      desc: 'Innova Technology is a strategic IT partner focused on business continuity. We combine custom software development, hardware supply, and infrastructure under one roof to empower Egyptian institutions.',
      cards: [
        { title: 'Vision', desc: 'To be the first-choice IT partner for digital transformation in Egypt.' },
        { title: 'Mission', desc: 'Building smart, reliable technical environments through tailored solutions and robust hardware.' }
      ],
      stats: 'Years of Strategy'
    },
    services: {
      badge: 'Core Services',
      title: 'One-Stop Integrated IT Solutions',
      sub: 'Comprehensive technology ecosystems designed to ensure operational stability and business efficiency.',
      list: [
        { 
          title: 'Software Development', 
          desc: 'Web applications, iOS/Android mobile apps, and custom management systems built to modern standards.'
        },
        { 
          title: 'Hardware Supply', 
          desc: 'High-quality computers, workstations, servers, and networking essentials from leading global brands.'
        },
        { 
          title: 'Consulting & Support', 
          desc: 'Strategic technical consulting, system setup, maintenance contracts, and ongoing technical support.'
        }
      ],
      cta: 'Explore Solutions',
      premium: 'Integrated Model'
    },
    cta: {
      badge: "Secure Your Digital Growth",
      title: 'Ready to Stabilize Your Technical Environment?',
      sub: 'Join the businesses across Egypt that trust Innova for efficiency and scalable growth. Request your technical study today.',
      button: 'Request Consultation',
      phoneLabel: 'B2B Priority Line'
    },
    footer: {
      desc: 'Innova Technology for Integrated Solutions & IT. A long-term technology partner focused on business continuity and digital growth in the Egyptian market.',
      browse: 'Navigation',
      hq: 'Headquarters',
      address: 'Cairo, Egypt \r\n Fifth Settlement',
      copyright: 'Innovating Your Digital World.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      enjaz: 'Designed by Enjaz Smart Solutions'
    }
  },
  ar: {
    dir: 'rtl',
    nav: {
      home: 'الرئيسية',
      about: 'الاستراتيجية',
      services: 'خدماتنا',
      contact: 'طلب استشارة',
      startProject: 'إبدأ الآن'
    },
    hero: [
      {
        badge: 'شريك تقني استراتيجي',
        title: 'إنوفا.. نبتكر عالمك الرقمي',
        sub: 'نسد الفجوة بين احتياجات الأعمال المتنامية والتكنولوجيا المتقدمة من خلال نموذج الحلول المتكاملة في مصر.'
      },
      {
        badge: 'البنية التحتية للمؤسسات',
        title: 'عتاد قوي ومعايير عالمية',
        sub: 'تجهيز بيئات العمل بأرقى السيرفرات ومحطات العمل العالمية لضمان استقرار عملياتك التشغيلية.'
      },
      {
        badge: 'التحول الرقمي',
        title: 'برمجيات مخصصة وأنظمة إدارية',
        sub: 'تطوير تطبيقات الويب والجوال المبتكرة المصممة لتعزيز الكفاءة ودفع عجلة النمو الرقمي.'
      }
    ],
    heroButtons: {
      start: 'كن شريكنا',
      explore: 'استكشف الخدمات'
    },
    about: {
      badge: 'مكانة الشركة',
      title: 'لسنا مجرد مورد، نحن شريك نجاح',
      desc: 'إنوفا تكنولوجي هي شريك تقني استراتيجي يركز على استمرارية الأعمال. نجمع بين تطوير البرمجيات، توريد الأجهزة، والبنية التحتية تحت سقف واحد لتمكين المؤسسات المصرية.',
      cards: [
        { title: 'الرؤية', desc: 'أن نكون الخيار الأول والشركاء الأكثر ثقة للتحول الرقمي في مصر.' },
        { title: 'المهمة', desc: 'بناء بيئات تقنية ذكية وموثوقة عبر حلول برمجية مخصصة وعتاد قوي يضمن الاستقرار.' }
      ],
      stats: 'سنة من الاستراتيجية'
    },
    services: {
      badge: 'الخدمات الجوهرية',
      title: 'منظومة الحلول التقنية المتكاملة',
      sub: 'أنظمة تكنولوجية شاملة مصممة لضمان استقرار العمليات وكفاءة الأعمال التشغيلية.',
      list: [
        { 
          title: 'تطوير البرمجيات', 
          desc: 'تطبيقات الويب، الجوال (iOS/Android)، وأنظمة الإدارة الرقمية وفق أحدث المعايير العالمية.'
        },
        { 
          title: 'توريد الأجهزة والعتاد', 
          desc: 'أجهزة الكمبيوتر، السيرفرات، وحدات التخزين، ومستلزمات الشبكات من كبرى العلامات العالمية.'
        },
        { 
          title: 'الاستشارات والدعم', 
          desc: 'استشارات تقنية، إعداد الأنظمة، عقود الصيانة، والدعم الفني المستمر لضمان استمرارية العمل.'
        }
      ],
      cta: 'استكشف الحلول',
      premium: 'نموذج متكامل'
    },
    cta: {
      badge: "أمن نموك الرقمي",
      title: 'جاهز لضمان استقرار بيئتك التقنية؟',
      sub: 'انضم للمؤسسات التي تثق في إنوفا لرفع الكفاءة وتحقيق نمو قابل للتوسع. اطلب دراستك التقنية اليوم.',
      button: 'اطلب استشارة فنية',
      phoneLabel: 'خط تواصل الشركات المباشر'
    },
    footer: {
      desc: 'إنوفا تكنولوجي للحلول المتكاملة وتكنولوجيا المعلومات. شريك تكنولوجي طويل الأمد يركز على استمرارية الأعمال والنمو الرقمي في السوق المصري.',
      browse: 'تصفح',
      hq: 'المقر الرئيسي',
      address: 'القاهرة، جمهورية مصر العربية \r\n التجمع الخامس',
      copyright: 'نبتكر عالمك الرقمي.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      enjaz: 'تم التصميم بواسطة شركة إنجاز للحلول الذكية'
    }
  }
};

const HERO_IMAGES = [
  "https://i.pinimg.com/736x/db/6c/2e/db6c2e6ece08917d6a1617d9f10c1594.jpg",
  "https://i.pinimg.com/1200x/af/d8/f3/afd8f33d32fc367949575dfccf2014c6.jpg",
  "https://i.pinimg.com/736x/04/e4/41/04e4418b93f5abb7a3d843cb0fde3f7f.jpg"
];

const anim = {
  reveal: (delay = 0): Variants => ({
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] } 
    }
  }),
  stagger: {
    visible: { transition: { staggerChildren: 0.15 } }
  }
};

const Button = ({ children, variant = 'primary', onClick, className = '' }: any) => {
  const variants: any = {
    primary: "bg-blue-600 text-white shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:shadow-blue-600/40",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:border-blue-500 hover:text-blue-600 shadow-sm",
    outline: "border-2 border-white/30 text-white hover:bg-white hover:text-blue-600 backdrop-blur-md"
  };
  return (
    <motion.button 
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-8 py-4 rounded-xl font-black transition-all duration-300 flex items-center justify-center gap-3 text-base ${variants[variant]} ${className}`}
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
    <motion.div variants={anim.reveal()} className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest mb-6 ${light ? 'bg-white/10 text-blue-300 border border-white/10' : 'bg-blue-50 text-blue-600'}`}>
      <Sparkles size={12} />
      {badge}
    </motion.div>
    <motion.h2 variants={anim.reveal(0.1)} className={`h-lg font-black mb-6 leading-tight ${light ? 'text-white' : 'text-slate-950'}`}>
      {title}
    </motion.h2>
    <motion.p variants={anim.reveal(0.2)} className={`p-lg font-bold opacity-70 leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>
      {sub}
    </motion.p>
  </motion.div>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 7000);
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

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');

  return (
    <div className={`min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white overflow-x-hidden font-['Cairo']`} dir={t.dir}>
      
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[1000] origin-right" style={{ scaleX }} />

      {/* Header */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }} animate={{ opacity: 1, x: 0 }}
            onClick={() => window.scrollTo({top:0, behavior:'smooth'})} 
            className="flex items-center gap-4 cursor-pointer group"
          >
            <img src={LOGO_URL} alt="Logo" className="h-8 md:h-11 transition-all duration-500 group-hover:rotate-[10deg]" />
            <div className={`hidden sm:block border-${lang === 'ar' ? 'r' : 'l'}-2 border-blue-500/20 p${lang === 'ar' ? 'r' : 'l'}-4 leading-none`}>
              <div className={`text-xl font-black transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                {lang === 'ar' ? 'إنوفا تكنولوجي' : 'Innova Technology'}
              </div>
              <div className={`text-[9px] font-black uppercase tracking-widest mt-1 ${scrolled ? 'text-blue-600' : 'text-blue-400'}`}>
                {lang === 'ar' ? 'نبتكر عالمك الرقمي' : 'Innovating Your Digital World'}
              </div>
            </div>
          </motion.div>

          <div className={`hidden lg:flex items-center gap-8 ${scrolled ? 'text-slate-700' : 'text-white'}`}>
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-blue-500/10 transition-all font-black text-xs uppercase"
            >
              <Globe size={16} />
              {lang === 'en' ? 'العربية' : 'English'}
            </button>
            {[
              { n: t.nav.home, id: 'home' }, 
              { n: t.nav.about, id: 'about' }, 
              { n: t.nav.services, id: 'services' }, 
              { n: t.nav.contact, id: 'contact' }
            ].map((item, i) => (
              <button 
                key={item.n} 
                onClick={() => item.id === 'home' ? window.scrollTo({top:0, behavior:'smooth'}) : scrollTo(item.id)}
                className="text-sm font-black hover:text-blue-500 transition-all relative group"
              >
                {item.n}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-blue-500 transition-all duration-500 group-hover:w-full" />
              </button>
            ))}
            <Button variant={scrolled ? 'primary' : 'outline'} onClick={() => window.open(WHATSAPP_LINK)}>
              {t.nav.startProject}
            </Button>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <button 
              onClick={toggleLang}
              className={`${scrolled ? 'text-slate-900 bg-slate-100' : 'text-white bg-white/10'} p-2.5 rounded-xl transition-all font-black text-xs`}
            >
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
            <button className={`${scrolled ? 'text-slate-900 bg-slate-100' : 'text-white bg-white/10'} p-3 rounded-xl transition-all active:scale-90`} onClick={() => setIsMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-slate-950/40 z-10" />
            <img 
              src={HERO_IMAGES[currentSlide]} 
              className="w-full h-full object-cover" 
              alt="Slide" 
            />
            <div className={`absolute inset-0 bg-gradient-to-${lang === 'ar' ? 'l' : 'r'} from-slate-950 via-slate-950/60 to-transparent z-10`} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90 z-10" />
          </motion.div>
        </AnimatePresence>

        <div className="container mx-auto px-6 lg:px-12 relative z-20">
          <div className={`max-w-4xl text-${lang === 'ar' ? 'right' : 'left'}`}>
            <motion.div 
              key={`badge-${currentSlide}-${lang}`}
              initial={{ opacity: 0, x: lang === 'ar' ? 30 : -30 }} animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-blue-600/20 border border-blue-500/30 text-blue-200 rounded-xl text-xs font-black uppercase tracking-[0.2em] mb-8 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {t.hero[currentSlide].badge}
            </motion.div>
            
            <motion.h1 
              key={`title-${currentSlide}-${lang}`}
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-xl font-black text-white mb-8 leading-[1.05]"
            >
              {t.hero[currentSlide].title}
            </motion.h1>

            <motion.p 
              key={`sub-${currentSlide}-${lang}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`p-lg text-slate-200 mb-12 max-w-2xl font-bold opacity-80 leading-relaxed border-${lang === 'ar' ? 'r' : 'l'}-4 border-blue-600 p${lang === 'ar' ? 'r' : 'l'}-6`}
            >
              {t.hero[currentSlide].sub}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-5"
            >
              <Button onClick={() => window.open(WHATSAPP_LINK)} className="group relative overflow-hidden">
                {t.heroButtons.start}
                {lang === 'ar' ? <ArrowLeft className="group-hover:-translate-x-2 transition-transform" /> : <ArrowRight className="group-hover:translate-x-2 transition-transform" />}
              </Button>
              <Button variant="outline" onClick={() => scrollTo('services')}>{t.heroButtons.explore}</Button>
            </motion.div>
          </div>
        </div>

        {/* Indicators */}
        <div className={`absolute bottom-12 ${lang === 'ar' ? 'right' : 'left'}-12 flex items-end gap-3 z-30`}>
          {HERO_IMAGES.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentSlide(i)}
              className="group relative h-12 w-1.5 overflow-hidden rounded-full bg-white/20 transition-all"
            >
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-blue-500"
                initial={{ height: 0 }}
                animate={{ height: currentSlide === i ? "100%" : "0%" }}
                transition={{ duration: 0.5 }}
              />
            </button>
          ))}
          <div className={`m${lang === 'ar' ? 'r' : 'l'}-4 text-white/40 font-black text-xs vertical-text tracking-widest uppercase`}>
            Scroll
          </div>
        </div>
      </section>

      {/* About Section - Strategy & Positioning */}
      <section id="about" className="py-24 lg:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={anim.stagger}
              className="space-y-10"
            >
              <div className="space-y-6">
                <motion.span variants={anim.reveal()} className="text-blue-600 font-black text-xs uppercase tracking-[0.3em]">{t.about.badge}</motion.span>
                <motion.h2 variants={anim.reveal(0.1)} className="h-lg font-black text-slate-950 leading-tight">
                  {t.about.title}
                </motion.h2>
                <motion.p variants={anim.reveal(0.2)} className="p-lg text-slate-600 font-bold leading-relaxed">
                  {t.about.desc}
                </motion.p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {t.about.cards.map((item, i) => (
                  <motion.div 
                    key={i} variants={anim.reveal(0.3 + i * 0.1)}
                    className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:bg-white transition-all duration-500 group"
                  >
                    <div className="mb-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      {i === 0 ? <Target className="text-blue-600" /> : <ShieldCheck className="text-blue-600" />}
                    </div>
                    <h4 className="text-xl font-black mb-3 text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-bold leading-loose">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: lang === 'ar' ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-blue-600/5 rounded-[4rem] -rotate-3 blur-2xl animate-pulse" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=100&w=1000" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Strategic Partnership" />
                <div className="absolute inset-0 bg-blue-600/10 group-hover:opacity-0 transition-opacity duration-500" />
              </div>
              <div className={`absolute -bottom-10 ${lang === 'ar' ? '-right' : '-left'}-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-50 hidden md:block`}>
                <div className="text-4xl font-black text-blue-600 mb-1">+12</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t.about.stats}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Core Offerings */}
      <section id="services" className="py-24 lg:py-48 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <SectionHeading 
            badge={t.services.badge}
            title={t.services.title}
            sub={t.services.sub}
          />

          <div className="grid lg:grid-cols-3 gap-10">
            {t.services.list.map((service, i) => (
              <motion.div 
                key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={anim.reveal(i * 0.15)}
                whileHover={{ y: -15 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={[
                      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
                      "https://i.pinimg.com/1200x/97/dc/76/97dc76f78aadddc25ea19d11ac39e864.jpg",
                      "https://i.pinimg.com/1200x/f9/b7/3a/f9b73a99e3c85c768de3a5717b156ed7.jpg"
                    ][i]} 
                    className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110 group-hover:rotate-1" 
                    alt={service.title} 
                  />
                  <div className={`absolute top-6 ${lang === 'ar' ? 'left' : 'right'}-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-blue-600 text-[10px] font-black uppercase tracking-widest shadow-lg`}>
                    {t.services.premium}
                  </div>
                </div>
                <div className={`p-10 text-${lang === 'ar' ? 'right' : 'left'}`}>
                  <div className={`w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700`}>
                    {i === 0 ? <Settings size={36} /> : i === 1 ? <Cpu size={36} /> : <HardDrive size={36} />}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-5">{service.title}</h3>
                  <p className="text-slate-500 font-bold text-sm leading-relaxed mb-10 opacity-80 group-hover:opacity-100 transition-opacity">{service.desc}</p>
                  <button onClick={() => window.open(WHATSAPP_LINK)} className="flex items-center gap-4 text-blue-600 font-black text-xs uppercase tracking-[0.2em] group/btn">
                    <span>{t.services.cta}</span>
                    <div className="w-10 h-10 rounded-full border border-blue-100 flex items-center justify-center group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-all">
                      {lang === 'ar' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Outcome Focused */}
      <section id="contact" className="py-24 lg:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-blue-600 rounded-[4rem] p-12 lg:p-32 text-center relative overflow-hidden shadow-3xl shadow-blue-600/40"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/10 rounded-full blur-[120px] -mr-[20rem] -mt-[20rem]" 
            />
            
            <div className="relative z-20 max-w-4xl mx-auto space-y-12">
              <div className="inline-block px-6 py-2 bg-white/10 border border-white/20 rounded-full text-white text-[10px] font-black uppercase tracking-[0.4em]">
                {t.cta.badge}
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">{t.cta.title}</h2>
              <p className="text-xl md:text-2xl text-blue-100 font-bold opacity-90 max-w-2xl mx-auto leading-relaxed">
                {t.cta.sub}
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <Button variant="secondary" onClick={() => window.open(WHATSAPP_LINK)} className="px-14 py-6 text-xl shadow-2xl">
                  {t.cta.button}
                  <ExternalLink size={20} />
                </Button>
                <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.location.href='tel:01288333348'}>
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white backdrop-blur-md border border-white/20 group-hover:bg-white group-hover:text-blue-600 transition-all duration-500 shadow-xl"
                  >
                    <Phone size={28} />
                  </motion.div>
                  <div className={`text-${lang === 'ar' ? 'right' : 'left'}`}>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200 opacity-60">{t.cta.phoneLabel}</div>
                    <div className="text-2xl font-black text-white tracking-widest" dir="ltr">01288333348</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Branding & Reliability */}
      <footer className={`footer-geometric py-24 relative overflow-hidden text-${lang === 'ar' ? 'right' : 'left'}`}>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-4 gap-20 mb-20">
            <div className="lg:col-span-2 space-y-10">
              <div className="flex items-center gap-5">
                <img src={LOGO_URL} alt="Footer Logo" className="h-12" />
                <div className={`border-${lang === 'ar' ? 'r' : 'l'}-2 border-blue-500/30 p${lang === 'ar' ? 'r' : 'l'}-5`}>
                  <div className="text-3xl font-black text-white">
                    {lang === 'ar' ? 'إنوفا تكنولوجي' : 'Innova Technology'}
                  </div>
                  <div className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-400 mt-2">
                    {lang === 'ar' ? 'نبتكر عالمك الرقمي' : 'Innovating Your Digital World'}
                  </div>
                </div>
              </div>
              <p className="text-slate-400 font-bold text-lg leading-relaxed max-w-lg">
                {t.footer.desc}
              </p>
            </div>
            
            <div>
              <h5 className="text-xl font-black mb-10 text-white relative inline-block">
                {t.footer.browse}
                <span className={`absolute -bottom-2 ${lang === 'ar' ? 'right' : 'left'}-0 w-8 h-1 bg-blue-600 rounded-full`} />
              </h5>
              <ul className="space-y-5 text-slate-400 font-bold text-sm">
                <li><button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className={`hover:text-blue-400 transition-all hover:p${lang === 'ar' ? 'r' : 'l'}-3`}>{t.nav.home}</button></li>
                <li><button onClick={() => scrollTo('about')} className={`hover:text-blue-400 transition-all hover:p${lang === 'ar' ? 'r' : 'l'}-3`}>{t.nav.about}</button></li>
                <li><button onClick={() => scrollTo('services')} className={`hover:text-blue-400 transition-all hover:p${lang === 'ar' ? 'r' : 'l'}-3`}>{t.nav.services}</button></li>
                <li><button onClick={() => scrollTo('contact')} className={`hover:text-blue-400 transition-all hover:p${lang === 'ar' ? 'r' : 'l'}-3`}>{t.nav.contact}</button></li>
              </ul>
            </div>
            
            <div className="space-y-10">
              <div>
                <h5 className="text-xl font-black mb-10 text-white relative inline-block">
                  {t.footer.hq}
                  <span className={`absolute -bottom-2 ${lang === 'ar' ? 'right' : 'left'}-0 w-8 h-1 bg-blue-600 rounded-full`} />
                </h5>
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="text-slate-400 font-bold text-sm leading-relaxed group-hover:text-white transition-colors">
                    {t.footer.address}
                  </div>
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
                    <Target size={22} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className={`flex flex-col items-center md:items-start gap-2`}>
              <div className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.5em]">
                &copy; {new Date().getFullYear()} Innova Technology. {t.footer.copyright}
              </div>
              <div className="text-slate-400 font-bold text-[11px] flex items-center gap-2">
                <a 
                  href="https://Enjaz.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 hover:text-blue-400 transition-all duration-300 hover:scale-105 inline-block border-b border-transparent hover:border-blue-400"
                >
                  {t.footer.enjaz}
                </a>
              </div>
            </div>
            <div className="flex gap-8 text-[9px] font-black uppercase tracking-widest text-slate-600">
              <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <motion.button 
        whileHover={{ scale: 1.15, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open(WHATSAPP_LINK)}
        className={`fixed bottom-10 ${lang === 'ar' ? 'left' : 'right'}-10 z-[500] w-16 h-16 bg-[#25D366] text-white rounded-3xl shadow-3xl flex items-center justify-center shadow-[#25D366]/40 group`}
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-3xl animate-ping opacity-25" />
        <MessageCircle size={32} />
      </motion.button>

      {/* Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[1000] bg-slate-950/95 backdrop-blur-2xl p-10 flex flex-col items-center justify-center"
          >
            <button className={`absolute top-10 ${lang === 'ar' ? 'right' : 'left'}-10 text-white/50 hover:text-white transition-colors`} onClick={() => setIsMenuOpen(false)}>
              <X size={48} strokeWidth={1} />
            </button>
            <div className="space-y-10 text-center">
              {[
                { n: t.nav.home, id: 'home' }, 
                { n: t.nav.about, id: 'about' }, 
                { n: t.nav.services, id: 'services' }, 
                { n: t.nav.contact, id: 'contact' }
              ].map((item, i) => (
                <motion.button 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.n} 
                  className="block text-4xl md:text-6xl font-black text-white hover:text-blue-500 transition-all active:scale-90" 
                  onClick={() => item.id === 'home' ? window.scrollTo({top:0, behavior:'smooth'}) : scrollTo(item.id)}
                >
                  {item.n}
                </motion.button>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-col gap-6">
                <Button className="px-12 py-5" onClick={() => window.open(WHATSAPP_LINK)}>{t.nav.startProject}</Button>
                <button onClick={toggleLang} className="text-white font-black text-xl uppercase underline decoration-blue-600 underline-offset-8">
                  {lang === 'en' ? 'Arabic' : 'English'}
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
