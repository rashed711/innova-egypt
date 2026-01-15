
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Layers, 
  Phone, 
  Mail, 
  Rocket, 
  Server, 
  ShieldCheck, 
  Zap, 
  Menu, 
  X,
  Monitor,
  Database,
  Globe,
  Settings,
  ChevronDown
} from 'lucide-react';

/**
 * Innova Technology - Final Corporate Version
 * - Enhanced Hero Image Clarity
 * - Full Link Activation
 * - Professional Logo & Header States
 * - Interactive Service Modals
 * - Enhanced RTL Typography
 */

const LOGO_URL = "https://a.top4top.io/p_36677u24m1.png";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeService, setActiveService] = useState<null | number>(null);

  const slides = [
    {
      url: "https://i.pinimg.com/1200x/33/98/a9/3398a94fd49532f5989e0e71c3b1e4a8.jpg",
      title: "حلول تقنية متكاملة",
      sub: "نحن نربط بين ذكاء البرمجيات وقوة العتاد"
    },
    {
      url: "https://i.pinimg.com/736x/10/bd/ce/10bdcee5acece5da5ea77a89d61ee653.jpg",
      title: "بنية تحتية عالمية",
      sub: "تجهيز مراكز البيانات والشبكات بأعلى المعايير"
    },
    {
      url: "https://i.pinimg.com/736x/c5/3e/e0/c53ee081252602c320c5493822002708.jpg",
      title: "تمكين التحول الرقمي",
      sub: "شريكك الاستراتيجي للنمو في الاقتصاد الرقمي"
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(slideInterval);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const primaryCTA = () => {
    window.location.href = "mailto:info@innova-egypt.com";
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden text-right" dir="rtl">
      
      {/* Navigation Header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-xl py-2' : 'bg-transparent py-5'}`}>
        {!scrolled && <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 to-transparent pointer-events-none -z-10"></div>}
        
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="h-14 w-auto flex items-center transition-transform group-hover:scale-105 duration-300">
              <img src={LOGO_URL} alt="Innova Technology" className="h-full object-contain" />
            </div>
          </div>

          {/* Links */}
          <div className={`hidden md:flex items-center gap-8 ${scrolled ? 'text-slate-700' : 'text-white'}`}>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-sm font-bold hover:text-blue-500 transition-colors">الرئيسية</button>
            <button onClick={() => scrollToSection('solutions')} className="text-sm font-bold hover:text-blue-500 transition-colors">عن الشركة</button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-bold hover:text-blue-500 transition-colors">خدماتنا</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-bold hover:text-blue-500 transition-colors">اتصل بنا</button>
            
            <button 
              onClick={primaryCTA}
              className={`px-6 py-2.5 rounded-full text-sm font-black transition-all shadow-lg active:scale-95 border-2 ${scrolled ? 'bg-blue-600 border-blue-600 text-white hover:bg-slate-900 hover:border-slate-900' : 'bg-white border-white text-blue-600 hover:bg-transparent hover:text-white'}`}
            >
              اطلب استشارة مجانية
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className={`${scrolled ? 'text-slate-900' : 'text-white'} md:hidden p-2 rounded-lg bg-black/10`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 bg-slate-900 z-[60] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
          <button className="absolute top-6 right-6 text-white p-4" onClick={() => setIsMenuOpen(false)}>
            <X size={40} />
          </button>
          <img src={LOGO_URL} alt="Innova" className="h-20 mb-8 brightness-0 invert" />
          <button onClick={() => { scrollToSection('home'); window.scrollTo({top:0, behavior:'smooth'}); setIsMenuOpen(false); }} className="text-2xl font-bold text-white">الرئيسية</button>
          <button onClick={() => scrollToSection('solutions')} className="text-2xl font-bold text-white">عن الشركة</button>
          <button onClick={() => scrollToSection('services')} className="text-2xl font-bold text-white">خدماتنا</button>
          <button onClick={() => scrollToSection('contact')} className="text-2xl font-bold text-white">اتصل بنا</button>
          <button onClick={primaryCTA} className="px-10 py-4 bg-blue-600 text-white font-black rounded-full mt-4">تواصل الآن</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-slate-950">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-80 scale-100' : 'opacity-0 scale-105'}`}
          >
            <img src={slide.url} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-slate-950/40 via-transparent to-transparent hidden lg:block"></div>
          </div>
        ))}
        
        <div className="container mx-auto px-6 relative z-10 pt-16">
          <div className="max-w-4xl text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/40 backdrop-blur-md text-white rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">
              <Zap size={14} className="text-blue-400" fill="currentColor" />
              Innova.. Innovating Your Digital World
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
              بنيتك التحتية <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-cyan-300">في منظومة واحدة</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-100 mb-10 max-w-2xl leading-relaxed font-bold drop-shadow-lg">
              إنوفا تكنولوجي تدمج أرقى أجهزة الهاردوير مع أذكى الحلول البرمجية لبناء بيئة عمل رقمية تضمن لك السيادة والاستمرارية.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={primaryCTA}
                className="group px-10 py-5 bg-blue-600 text-white font-black rounded-full hover:bg-white hover:text-blue-600 transition-all shadow-2xl shadow-blue-600/40 flex items-center justify-center gap-3 text-lg"
              >
                اطلب عرض سعر متكامل
                <ArrowLeft size={24} className="group-hover:-translate-x-2 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="px-10 py-5 bg-white/20 backdrop-blur-md text-white font-bold rounded-full border border-white/30 hover:bg-white/40 transition-all flex items-center justify-center gap-2 text-lg"
              >
                استكشف خدماتنا
              </button>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-12 bg-blue-500' : 'w-3 bg-white/30 hover:bg-white/50'}`}
            ></button>
          ))}
        </div>
      </section>

      {/* Solutions / About Section */}
      <section id="solutions" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
              <img 
                src="https://i.pinimg.com/736x/33/75/17/3375170b6d543c2704a7f920766ac5c9.jpg" 
                alt="Infrastructure" 
                className="relative rounded-[3rem] shadow-2xl z-10 w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl z-20 hidden md:block border border-slate-50">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
                    <ShieldCheck size={28} />
                  </div>
                  <div className="text-xl font-black text-slate-900">أمان وموثوقية</div>
                </div>
                <p className="text-slate-500 text-sm">ضمان 100% على كافة الأجهزة والأنظمة.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase">لماذا إنوفا؟</div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">شريكك الرقمي <span className="text-blue-600">من الألف إلى الياء</span></h2>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                نحن لسنا مجرد شركة برمجيات، بل مطور تقني متكامل. نوفر لك الأجهزة الأصلية، ونصمم لك النظام الذي يديرها، ونضمن استقرارها بعقود صيانة احترافية.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all group">
                  <Settings size={32} className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-black text-lg mb-2">حلول مخصصة</h4>
                  <p className="text-slate-500 text-sm">أنظمة ERP وبرمجيات مصممة خصيصاً لحجم وطبيعة عملك.</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all group">
                  <Globe size={32} className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-black text-lg mb-2">توريد عالمي</h4>
                  <p className="text-slate-500 text-sm">نورد أحدث أجهزة Dell, HP و Cisco بأفضل الأسعار الرسمية.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">خدماتنا <span className="text-blue-600">المتكاملة</span></h2>
          <p className="text-slate-600 text-xl font-medium max-w-3xl mx-auto mb-16">باقة شاملة من الحلول الرقمية التي تغطي كافة احتياجات البنية التحتية والبرمجية لمؤسستك.</p>
          
          <div className="grid md:grid-cols-3 gap-10">
            {servicesData.map((service, idx) => (
              <div 
                key={idx} 
                onClick={() => setActiveService(idx)}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-slate-100 flex flex-col cursor-pointer"
              >
                <div className="h-56 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                </div>
                <div className="p-8 pt-0 flex flex-col items-start text-right -mt-10 relative z-10">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-8 font-medium text-sm">{service.description}</p>
                  
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-600 font-black text-sm rounded-full transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-200">
                    اكتشف المزيد 
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">الريادة تبدأ باختيار <br/><span className="text-blue-400">الشريك الصح</span></h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle2 size={24} className="text-blue-400 flex-shrink-0" />
                    <p className="text-slate-300 font-medium">مورد رسمي معتمد لأكبر العلامات التجارية العالمية.</p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 size={24} className="text-blue-400 flex-shrink-0" />
                    <p className="text-slate-300 font-medium">فريق برمجيات متخصص في بناء أنظمة ERP ضخمة.</p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 size={24} className="text-blue-400 flex-shrink-0" />
                    <p className="text-slate-300 font-medium">دعم فني واستجابة سريعة للأعطال على مدار الساعة.</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-all">
                  <div className="text-4xl font-black text-blue-400 mb-2">+100</div>
                  <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">عميل سعيد</div>
                </div>
                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-all">
                  <div className="text-4xl font-black text-blue-400 mb-2">24/7</div>
                  <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">دعم فني</div>
                </div>
                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-all">
                  <div className="text-4xl font-black text-blue-400 mb-2">100%</div>
                  <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">جودة أصلية</div>
                </div>
                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-all">
                  <div className="text-4xl font-black text-blue-400 mb-2">+15</div>
                  <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">سنة خبرة</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-slate-50 rounded-[3rem] p-10 md:p-20 text-center border border-slate-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-600/10 rounded-full blur-3xl"></div>
            
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">ابدأ تحولك <span className="text-blue-600">الرقمي الآن</span></h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">فريق مبيعاتنا متاح للرد على استفساراتكم وتقديم عرض سعر مجاني مخصص لاحتياجاتكم.</p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
              <button onClick={primaryCTA} className="px-12 py-5 bg-blue-600 text-white font-black rounded-full hover:scale-105 transition-all shadow-xl shadow-blue-200 text-xl">تواصل معنا بريدياً</button>
              <div className="flex items-center gap-4 text-slate-900">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-blue-600 border border-slate-100">
                  <Phone size={28} />
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">مبيعات ودعم</div>
                  <div dir="ltr" className="text-2xl font-black tracking-tight">01288333348</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-10">
              <div className="flex items-center gap-2 text-slate-500 text-sm font-bold">
                <Mail size={18} />
                info@innova-egypt.com
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12 mb-16 border-b border-white/5 pb-16">
            <div className="lg:col-span-2 space-y-6">
              <img src={LOGO_URL} alt="Logo" className="h-16 brightness-0 invert" />
              <p className="text-slate-400 font-medium max-w-sm leading-relaxed">إنوفا تكنولوجي للحلول المتكاملة ونظم المعلومات. القائد في توريد العتاد وبناء البرمجيات المتخصصة في مصر.</p>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600 transition-all flex items-center justify-center"><Globe size={20} /></button>
                <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600 transition-all flex items-center justify-center"><Mail size={20} /></button>
              </div>
            </div>
            <div className="space-y-6">
              <h5 className="font-black text-xl">روابط سريعة</h5>
              <div className="flex flex-col gap-4 text-slate-400 font-bold">
                <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="hover:text-white transition-colors text-right text-sm">الرئيسية</button>
                <button onClick={() => scrollToSection('solutions')} className="hover:text-white transition-colors text-right text-sm">عن الشركة</button>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors text-right text-sm">خدماتنا</button>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors text-right text-sm">اتصل بنا</button>
              </div>
            </div>
            <div className="space-y-6">
              <h5 className="font-black text-xl">خدماتنا</h5>
              <div className="flex flex-col gap-4 text-slate-400 font-bold">
                <button onClick={() => { scrollToSection('services'); setActiveService(0); }} className="hover:text-white transition-colors text-right text-sm">تطوير البرمجيات</button>
                <button onClick={() => { scrollToSection('services'); setActiveService(1); }} className="hover:text-white transition-colors text-right text-sm">توريد العتاد</button>
                <button onClick={() => { scrollToSection('services'); setActiveService(2); }} className="hover:text-white transition-colors text-right text-sm">الشبكات والربط</button>
              </div>
            </div>
          </div>
          <div className="text-center text-slate-500 font-bold text-sm">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} إنوفا تكنولوجي - Innova Technology
          </div>
        </div>
      </footer>

      {/* Service Modal */}
      {activeService !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-slate-950/80 animate-in fade-in duration-300">
          <div className="bg-white rounded-[3rem] w-full max-w-4xl overflow-hidden relative shadow-2xl animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setActiveService(null)} 
              className="absolute top-6 right-6 z-20 bg-slate-100 hover:bg-red-500 hover:text-white p-3 rounded-full transition-all"
            >
              <X size={24} />
            </button>
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto overflow-hidden">
                <img src={servicesData[activeService].img} alt={servicesData[activeService].title} className="w-full h-full object-cover" />
              </div>
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <div className="text-blue-600 mb-6">{servicesData[activeService].icon}</div>
                <h3 className="text-3xl font-black mb-6">{servicesData[activeService].title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                  {servicesData[activeService].details}
                </p>
                <button 
                  onClick={() => { primaryCTA(); setActiveService(null); }}
                  className="w-full py-5 bg-blue-600 text-white font-black rounded-full hover:bg-slate-900 transition-all shadow-xl shadow-blue-200"
                >
                  اطلب استشارة حول هذه الخدمة
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;
