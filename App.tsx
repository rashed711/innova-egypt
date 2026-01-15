
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Layers, 
  Phone, 
  Mail, 
  Monitor, 
  Database, 
  Globe, 
  Settings, 
  ShieldCheck, 
  Zap, 
  Menu, 
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Innova Technology - Brand Identity Edition
 * Fixed Logo visibility and added Company Name in Navbar.
 */

const LOGO_URL = "https://a.top4top.io/p_36677u24m1.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeService, setActiveService] = useState<null | number>(null);

  const slides = [
    {
      url: "https://i.pinimg.com/1200x/33/98/a9/3398a94fd49532f5989e0e71c3b1e4a8.jpg",
      title: "بنية تحتية ذكية",
      sub: "نجمع بين أرقى الأجهزة وأذكى الحلول البرمجية"
    },
    {
      url: "https://i.pinimg.com/736x/10/bd/ce/10bdcee5acece5da5ea77a89d61ee653.jpg",
      title: "أمان واستمرارية",
      sub: "تجهيز مراكز البيانات والشبكات بمعايير عالمية"
    },
    {
      url: "https://i.pinimg.com/736x/c5/3e/e0/c53ee081252602c320c5493822002708.jpg",
      title: "مستقبل أعمالك يبدأ هنا",
      sub: "شريكك الاستراتيجي للتحول الرقمي المتكامل"
    }
  ];

  const servicesData = [
    {
      id: 0,
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      icon: <Layers size={32} />,
      title: "تطوير البرمجيات",
      description: "تطبيقات ويب وموبايل وأنظمة ERP مخصصة تحول رؤيتك إلى واقع رقمي فعال.",
      details: "نحن متخصصون في بناء أنظمة برمجية قابلة للتوسع، تشمل المواقع الإلكترونية التفاعلية، تطبيقات الموبايل (iOS & Android)، وأنظمة إدارة الموارد البشرية والمالية المتكاملة."
    },
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800",
      icon: <Monitor size={32} />,
      title: "توريد العتاد (Hardware)",
      description: "توريد أجهزة الكمبيوتر والسيرفرات من كبرى الماركات العالمية (HP, Dell, Cisco).",
      details: "نوفر لعملائنا أفضل حلول الهاردوير الأصلية، من أجهزة الكمبيوتر المكتبية عالية الأداء، أجهزة اللابتوب الاحترافية، وحتى السيرفرات العملاقة المجهزة للعمل الشاق."
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
      icon: <Database size={32} />,
      title: "البنية التحتية والشبكات",
      description: "تجهيز الشبكات وعقود صيانة سنوية تضمن استقرار عملياتك التشغيلية بالكامل.",
      details: "نقوم بتصميم وتنفيذ شبكات المعلومات المتطورة، تجهيز غرف البيانات (Data Centers)، وتوفير عقود صيانة سنوية تضمن بقاء عملك متصلاً ومحمياً على مدار الساعة."
    }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    const interval = setInterval(() => setCurrentSlide(s => (s + 1) % slides.length), 6000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const primaryCTA = () => window.location.href = "mailto:info@innova-egypt.com";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white" dir="rtl">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo & Company Name Container */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 md:gap-4 cursor-pointer group"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <div className="h-10 md:h-12 flex-shrink-0">
              <img 
                src={LOGO_URL} 
                alt="Innova" 
                className="h-full object-contain transition-transform group-hover:scale-105" 
              />
            </div>
            <div className="flex flex-col items-start leading-tight">
              <span className={`text-xl md:text-2xl font-black transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                إنوفا تكنولوجي
              </span>
              <span className={`text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold transition-colors ${scrolled ? 'text-blue-600' : 'text-blue-400'}`}>
                Innova Technology
              </span>
            </div>
          </motion.div>

          {/* Desktop Links */}
          <div className={`hidden md:flex items-center gap-10 ${scrolled ? 'text-slate-700' : 'text-white'}`}>
            {['الرئيسية', 'عن الشركة', 'خدماتنا', 'اتصل بنا'].map((item, i) => (
              <button 
                key={item}
                onClick={() => i === 0 ? window.scrollTo({top:0, behavior:'smooth'}) : scrollToSection(['solutions', 'services', 'contact'][i-1])}
                className="text-sm font-black hover:text-blue-500 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </button>
            ))}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={primaryCTA}
              className={`px-8 py-3 rounded-full text-sm font-black transition-all ${scrolled ? 'bg-blue-600 text-white shadow-blue-200 shadow-lg' : 'bg-white text-blue-600'}`}
            >
              إبدأ الآن
            </motion.button>
          </div>

          <button className={`${scrolled ? 'text-slate-900' : 'text-white'} md:hidden p-2`} onClick={() => setIsMenuOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[200] bg-slate-950 flex flex-col items-center justify-center p-10"
          >
            <button className="absolute top-8 right-8 text-white p-2" onClick={() => setIsMenuOpen(false)}><X size={40} /></button>
            
            <div className="flex flex-col items-center gap-4 mb-16">
              <img src={LOGO_URL} alt="Logo" className="h-20 object-contain" />
              <div className="text-center">
                <div className="text-2xl font-black text-white">إنوفا تكنولوجي</div>
                <div className="text-[10px] text-blue-400 uppercase tracking-widest font-bold">Innova Technology</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8">
              {['الرئيسية', 'عن الشركة', 'خدماتنا', 'اتصل بنا'].map((item, i) => (
                <button key={item} className="text-3xl font-black text-white hover:text-blue-500 transition-colors" onClick={() => i === 0 ? window.scrollTo({top:0, behavior:'smooth'}) : scrollToSection(['solutions', 'services', 'contact'][i-1])}>{item}</button>
              ))}
            </div>
            
            <button onClick={primaryCTA} className="mt-12 px-12 py-5 bg-blue-600 text-white font-black rounded-full shadow-2xl shadow-blue-600/30 w-full max-w-xs">
              ابدأ مشروعك
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-slate-950">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.7, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img src={slides[currentSlide].url} className="w-full h-full object-cover" alt="Hero background" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl text-right"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/30 backdrop-blur-md border border-white/20 text-white rounded-full text-xs font-bold mb-8 uppercase tracking-widest">
              <Zap size={14} className="text-blue-400 fill-blue-400" />
              Innova.. Innovating Your Digital World
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1]">
              نبتكر لنبني <br/>
              <span className="text-gradient">عالمك الرقمي</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-3xl text-slate-300 mb-12 max-w-2xl font-medium leading-relaxed">
              نحن الشريك الذي يجمع لك بين قوة العتاد وذكاء البرمجيات لتنطلق بأعمالك نحو المستقبل الرقمي الآمن والمتطور.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
              <button onClick={primaryCTA} className="px-12 py-5 bg-blue-600 text-white font-black rounded-full shadow-2xl shadow-blue-600/40 hover:scale-105 transition-transform flex items-center justify-center gap-3 text-lg">
                اطلب استشارتك الآن
                <ArrowLeft size={24} />
              </button>
              <button onClick={() => scrollToSection('services')} className="px-12 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black rounded-full hover:bg-white/20 transition-all text-lg">
                استكشف خدماتنا
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Background Decorations */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-10 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"
        />
      </section>

      {/* Problems/Solutions Section */}
      <section id="solutions" className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-blue-50 rounded-[4rem] -rotate-3"></div>
              <img src="https://i.pinimg.com/736x/33/75/17/3375170b6d543c2704a7f920766ac5c9.jpg" className="relative rounded-[3rem] shadow-2xl z-10 aspect-video object-cover" alt="Enterprise Solution" />
              <div className="absolute -bottom-10 -right-10 glass-panel p-8 rounded-3xl shadow-xl z-20 border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg"><ShieldCheck size={30} /></div>
                  <div>
                    <h4 className="font-black text-xl text-slate-900">موثوقية تامة</h4>
                    <p className="text-slate-500 text-sm">أجهزة أصلية بضمان معتمد</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-8 text-right">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase mb-6 inline-block">التميز الاستراتيجي</span>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">شريكك التقني <span className="text-blue-600">الأكثر ثقة</span></h2>
                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                  في إنوفا تكنولوجي، لا نبيع منتجات فقط، بل نصمم حلولاً متكاملة. نحن ندرك أن استقرار عملك يعتمد على تكامل البنية التحتية الصلبة مع البرمجيات الذكية، لذا وفرنا لك التميز في مكان واحد.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <Settings size={30} />, title: "أنظمة مخصصة", desc: "برمجيات مصممة خصيصاً لتناسب دورة عملك بدقة." },
                  { icon: <Globe size={30} />, title: "توريد معتمد", desc: "أحدث عتاد HP, Dell, Cisco بأفضل الأسعار والضمانات." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all hover:shadow-xl group"
                  >
                    <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="text-xl font-black mb-2 text-slate-900">{item.title}</h4>
                    <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-black mb-8"
            >
              خدمات <span className="text-blue-600">مبتكرة</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 font-medium"
            >
              نقدم منظومة تقنية شاملة تجمع بين دقة الأجهزة وذكاء الأنظمة البرمجية لتحقيق أقصى درجات الكفاءة التشغيلية لمؤسستك.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {servicesData.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setActiveService(idx)}
                className="group bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-100 flex flex-col"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                </div>
                <div className="p-10 -mt-12 relative z-10 flex flex-col items-start">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center shadow-xl mb-8 group-hover:rotate-6 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-blue-600 transition-colors text-slate-900">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium text-right">{service.description}</p>
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-50 text-blue-600 font-black text-xs rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all">
                    عرض التفاصيل <ArrowLeft size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Features Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-slate-950 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600 rounded-full blur-[150px]"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <div className="text-right">
                <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight text-white">أعمالك في <span className="text-blue-400">أيدٍ أمينة</span></h2>
                <div className="space-y-8">
                  {[
                    "فريق هندسي متخصص في بناء الأنظمة المعقدة.",
                    "عقود صيانة سنوية تضمن الاستجابة التقنية الفورية.",
                    "حلول قابلة للتوسع الكامل لمواكبة نمو مؤسستك المستمر."
                  ].map((text, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 items-center justify-start flex-row-reverse"
                    >
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0"><CheckCircle2 size={18} className="text-white" /></div>
                      <p className="text-lg text-slate-300 font-bold">{text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "عميل نشط", val: "+150" },
                  { label: "دعم فني", val: "24/7" },
                  { label: "جودة أصلية", val: "100%" },
                  { label: "عام من الخبرة", val: "+15" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="p-10 bg-white/5 rounded-[2.5rem] border border-white/10 text-center backdrop-blur-sm"
                  >
                    <div className="text-4xl font-black text-blue-400 mb-2">{stat.val}</div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-black">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto glass-panel rounded-[4rem] p-12 md:p-24 text-center border-slate-100 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight">هل أنت مستعد <br/> <span className="text-blue-600">للانطلاق رقمياً؟</span></h2>
            <p className="text-xl md:text-2xl text-slate-500 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">اترك تعقيدات التكنولوجيا لنا، وتفرغ أنت لإدارة وتوسيع نجاحك. فريقنا الهندسي جاهز لبناء منظومتك الخاصة الآن.</p>
            
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={primaryCTA}
                className="px-16 py-6 bg-blue-600 text-white font-black rounded-full shadow-2xl shadow-blue-200 text-xl w-full md:w-auto"
              >
                تواصل مع المبيعات
              </motion.button>
              <div className="flex items-center gap-4 text-slate-900 bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600"><Phone size={32} /></div>
                <div className="text-right">
                  <div className="text-xs font-black text-slate-400 tracking-widest uppercase">تواصل مباشر</div>
                  <div dir="ltr" className="text-3xl font-black tracking-tighter">01288333348</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-950 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-4 gap-16 mb-20 text-right">
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-4 justify-start flex-row-reverse">
                <img src={LOGO_URL} alt="Footer Logo" className="h-16 object-contain" />
                <div className="text-right">
                  <div className="text-2xl font-black text-white">إنوفا تكنولوجي</div>
                  <div className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">Innova Technology</div>
                </div>
              </div>
              <p className="text-slate-400 text-lg max-w-sm font-medium leading-relaxed">إنوفا تكنولوجي للحلول المتكاملة ونظم المعلومات. القائد المبتكر في توريد العتاد العالمي وبناء البرمجيات المتخصصة.</p>
              <div className="flex gap-4 justify-end">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"><Globe size={20} /></div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"><Mail size={20} /></div>
              </div>
            </div>
            <div>
              <h5 className="text-xl font-black mb-8 text-white">استكشف</h5>
              <ul className="space-y-4 text-slate-500 font-bold">
                <li><button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="hover:text-blue-500 transition-colors">الرئيسية</button></li>
                <li><button onClick={() => scrollToSection('solutions')} className="hover:text-blue-500 transition-colors">عن الشركة</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-blue-500 transition-colors">خدماتنا</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-blue-500 transition-colors">اتصل بنا</button></li>
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-black mb-8 text-white">خدماتنا</h5>
              <ul className="space-y-4 text-slate-500 font-bold">
                <li>تطوير برمجيات المؤسسات</li>
                <li>توريد الخوادم والسيرفرات</li>
                <li>حلول الربط الشبكي المتقدم</li>
                <li>عقود الصيانة التقنية</li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 text-center text-slate-600 font-bold text-sm">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} إنوفا تكنولوجي للحلول المتكاملة - Innova Technology
          </div>
        </div>
      </footer>

      {/* Service Modal */}
      <AnimatePresence>
        {activeService !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[4rem] w-full max-w-5xl overflow-hidden relative shadow-2xl"
            >
              <button onClick={() => setActiveService(null)} className="absolute top-8 right-8 z-20 bg-slate-100 hover:bg-red-500 hover:text-white p-4 rounded-full transition-all">
                <X size={28} />
              </button>
              <div className="grid md:grid-cols-2 h-full">
                <div className="h-72 md:h-auto overflow-hidden">
                  <img src={servicesData[activeService].img} className="w-full h-full object-cover" alt={servicesData[activeService].title} />
                </div>
                <div className="p-12 md:p-20 flex flex-col justify-center text-right">
                  <div className="text-blue-600 mb-8">{servicesData[activeService].icon}</div>
                  <h3 className="text-4xl font-black mb-8 text-slate-900">{servicesData[activeService].title}</h3>
                  <p className="text-slate-600 text-xl leading-relaxed mb-12 font-medium">
                    {servicesData[activeService].details}
                  </p>
                  <button onClick={() => { primaryCTA(); setActiveService(null); }} className="w-full py-6 bg-blue-600 text-white font-black rounded-full shadow-2xl shadow-blue-200 text-xl">اطلب الخدمة الآن</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default App;
