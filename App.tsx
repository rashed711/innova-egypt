
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ArrowRight, Layers, Phone, Mail, Monitor, 
  Database, Zap, Menu, X, MessageCircle, 
  ShieldCheck, Target, ExternalLink, Sparkles, Globe
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring, Variants } from 'framer-motion';

const LOGO_URL = "https://a.top4top.io/p_36677u24m1.png";
const WHATSAPP_LINK = "https://wa.me/201288333348";

const translations = {
  en: {
    dir: 'ltr',
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      contact: 'Contact Us',
      startProject: 'Start Project'
    },
    hero: [
      {
        badge: 'Innova Prestige Edition',
        title: 'Smart Digital Future',
        sub: 'We innovate solutions that give your business the absolute edge in a constantly changing market.'
      },
      {
        badge: 'Advanced Infrastructure',
        title: 'Cutting-edge Technology',
        sub: 'We supply the finest global hardware to ensure your operations stay stable with the latest tech.'
      },
      {
        badge: 'Integrated Cyber Security',
        title: 'Safe Data Environment',
        sub: 'Your data security is our top priority to ensure safe and sustainable growth for your organization.'
      }
    ],
    heroButtons: {
      start: 'Start Now',
      explore: 'Explore Solutions'
    },
    about: {
      badge: 'About Us',
      title: 'Technical Excellence Starts Here',
      desc: 'We are not just a technology company, but success partners who believe that innovation is the only key to leadership. We combine deep engineering expertise with the latest software technologies.',
      cards: [
        { title: 'Sharp Vision', desc: 'We analyze your needs precisely to map out the path to success.' },
        { title: 'Total Reliability', desc: 'We commit to the highest international security and quality standards.' }
      ],
      stats: 'Years of Experience'
    },
    services: {
      badge: 'Our Solutions',
      title: 'Covering All Digital Requirements',
      sub: 'An integrated ecosystem of technical services designed specifically to support your organization\'s growth.',
      list: [
        { 
          title: 'Software Solutions', 
          desc: 'Developing advanced ERP systems and innovative mobile apps focused on user experience.'
        },
        { 
          title: 'Infrastructure', 
          desc: 'Supplying the finest types of servers and workstations from major global companies.'
        },
        { 
          title: 'Data Management', 
          desc: 'Designing and implementing data centers and equipping networks with the highest levels of efficiency.'
        }
      ],
      cta: 'Get Consultation',
      premium: 'Premium Service'
    },
    cta: {
      badge: "Let's Talk Business",
      title: 'Ready to Launch Your Digital Future?',
      sub: 'Contact us today to receive a complete technical study for your project by industry experts.',
      button: 'Book Your Appointment',
      phoneLabel: 'Direct Phone Call'
    },
    footer: {
      desc: 'We are redefining the concept of integrated solutions, where cutting-edge technology meets creative vision to create real value for your business.',
      browse: 'Browse',
      hq: 'Headquarters',
      address: 'Cairo, Egypt \r\n Fifth Settlement',
      copyright: '',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      enjaz: 'Designed by Enjaz Smart Solutions'
    }
  },
  ar: {
    dir: 'rtl',
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      contact: 'تواصل معنا',
      startProject: 'إبدأ مشروعك'
    },
    hero: [
      {
        badge: 'إصدار إنوفا المتميز',
        title: 'مستقبل رقمي ذكي',
        sub: 'نبتكر الحلول التي تمنح أعمالك الأفضلية المطلقة في سوق دائم التغير.'
      },
      {
        badge: 'بنية تحتية متطورة',
        title: 'تكنولوجيا متقدمة',
        sub: 'نورد أفضل العتاد العالمي لضمان استقرار عملياتك بأحدث التكنولوجيات.'
      },
      {
        badge: 'أمان سيبراني متكامل',
        title: 'بيئة بيانات آمنة',
        sub: 'حماية بياناتك هي أولويتنا القصوى لضمان نمو آمن ومستدام لمؤسستك.'
      }
    ],
    heroButtons: {
      start: 'إبدأ الآن',
      explore: 'استكشف حلولنا'
    },
    about: {
      badge: 'من نحن',
      title: 'التميز التقني يبدأ من هنا',
      desc: 'نحن لسنا مجرد شركة تقنية، بل شركاء نجاح نؤمن بأن الابتكار هو المفتاح الوحيد للريادة. نجمع بين الخبرة الهندسية العميقة وأحدث التقنيات البرمجية.',
      cards: [
        { title: 'رؤية ثاقبة', desc: 'نحلل احتياجاتك بدقة لنرسم طريق النجاح.' },
        { title: 'موثوقية تامة', desc: 'نلتزم بأعلى معايير الأمان والجودة العالمية.' }
      ],
      stats: 'سنة من الخبرة'
    },
    services: {
      badge: 'حلولنا',
      title: 'نغطي كافة المتطلبات الرقمية',
      sub: 'منظومة متكاملة من الخدمات التقنية المصممة خصيصاً لدعم نمو مؤسستك.',
      list: [
        { 
          title: 'الحلول البرمجية', 
          desc: 'تطوير أنظمة متطورة وتطبيقات جوال مبتكرة تركز على تجربة المستخدم.'
        },
        { 
          title: 'البنية التحتية', 
          desc: 'توريد أرقى أنواع السيرفرات ومحطات العمل من كبرى الشركات العالمية.'
        },
        { 
          title: 'إدارة البيانات', 
          desc: 'تصميم وتنفيذ مراكز البيانات وتجهيز الشبكات بأعلى درجات الكفاءة والأمان.'
        }
      ],
      cta: 'احصل على استشارة',
      premium: 'خدمة متميزة'
    },
    cta: {
      badge: "دعنا نتحدث عن عملك",
      title: 'جاهز لتدشين مستقبلك الرقمي؟',
      sub: 'تواصل معنا اليوم لتحصل على دراسة تقنية متكاملة لمشروعك بأيدي خبراء الصناعة.',
      button: 'احجز موعدك الآن',
      phoneLabel: 'اتصال هاتفي مباشر'
    },
    footer: {
      desc: 'نحن نعيد تعريف مفهوم الحلول المتكاملة، حيث تجتمع التكنولوجيا المتطورة مع الرؤية الإبداعية لخلق قيمة حقيقية لأعمالكم.',
      browse: 'تصفح',
      hq: 'المقر الرئيسي',
      address: 'القاهرة، جمهورية مصر العربية \r\n التجمع الخامس',
      copyright: 'صُنع للتميز.',
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
                {lang === 'ar' ? 'تطور رقمي' : 'Digital Evolution'}
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

      {/* About Section */}
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
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=100&w=1000" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Office" />
                <div className="absolute inset-0 bg-blue-600/10 group-hover:opacity-0 transition-opacity duration-500" />
              </div>
              <div className={`absolute -bottom-10 ${lang === 'ar' ? '-right' : '-left'}-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-50 hidden md:block`}>
                <div className="text-4xl font-black text-blue-600 mb-1">+15</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t.about.stats}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
                      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
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
                    {i === 0 ? <Layers size={36} /> : i === 1 ? <Monitor size={36} /> : <Database size={36} />}
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

      {/* CTA Section */}
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

      {/* Footer */}
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
                    {lang === 'ar' ? 'تحفة رقمية' : 'Digital Masterpiece'}
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
            <div className={`flex flex-col items-center md:items-${lang === 'ar' ? 'start' : 'start'} gap-2`}>
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
