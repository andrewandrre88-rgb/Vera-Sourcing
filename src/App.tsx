/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Search, 
  Handshake, 
  ShieldCheck, 
  Truck, 
  Tag, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Mail, 
  QrCode,
  ChevronDown,
  ChevronUp,
  Globe,
  Star,
  Menu,
  X,
  Ship,
  Plane,
  Zap,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { translations, Language } from './translations';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang].nav;

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'ar', label: 'العربية' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-xl">V</div>
          <span className="text-xl font-bold tracking-tight">Vera Sourcing</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-slate-900 transition-colors">{t.services}</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">{t.pricing}</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">{t.about}</a>
          <a href="#how-it-works" className="hover:text-slate-900 transition-colors">{translations[lang].nav.home}</a>
          <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
          
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-slate-900 transition-colors uppercase">
              <Globe size={16} /> {lang}
            </button>
            <div className="absolute right-0 mt-2 w-32 bg-white border border-slate-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={cn(
                    "w-full text-left px-4 py-2 text-sm hover:bg-slate-50 first:rounded-t-xl last:rounded-b-xl",
                    lang === l.code && "font-bold text-slate-900 bg-slate-50"
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <a href="#contact" className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-slate-800 transition-all">{t.quote}</a>
        </div>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl"
          >
            <div className="flex flex-wrap gap-2 mb-4 border-b border-slate-100 pb-4">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setIsOpen(false); }}
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-bold border transition-all",
                    lang === l.code ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-600 border-slate-200"
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <a href="#services" onClick={() => setIsOpen(false)} className="text-lg font-medium">{t.services}</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="text-lg font-medium">{t.pricing}</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-lg font-medium">{t.about}</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="text-lg font-medium">FAQ</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="bg-slate-900 text-white px-6 py-3 rounded-xl text-center font-medium">{t.quote}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ lang }: { lang: Language }) => {
  const t = translations[lang].hero;
  return (
    <section className="pt-40 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-slate-500 uppercase bg-slate-100 rounded-full">
          {t.tag}
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
          {t.title} <br className="hidden md:block" />
          <span className="text-slate-400">{t.subtitle}</span>
        </h1>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          {t.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
            {t.cta_quote} <ArrowRight size={20} className={cn(lang === 'ar' && "rotate-180")} />
          </a>
          <a href="https://wa.me/8618933252679" className="w-full sm:w-auto bg-green-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-600 transition-all flex items-center justify-center gap-2">
            <MessageCircle size={20} /> {t.cta_whatsapp}
          </a>
        </div>
      </motion.div>


      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-20 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
          alt="Logistics and Sourcing" 
          className="rounded-3xl shadow-2xl w-full h-[400px] md:h-[600px] object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
};

const WhyVera = ({ lang }: { lang: Language }) => {
  const t = translations[lang].why;
  const icons = [<Globe className="text-slate-900" />, <Handshake className="text-slate-900" />, <Tag className="text-slate-900" />, <MessageCircle className="text-slate-900" />];

  return (
    <section id="why-vera" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.reasons.map((reason, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutVera = ({ lang }: { lang: Language }) => {
  const t = translations[lang].about_vera;
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">{t.title}</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            {t.bio}
          </p>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-2">{t.mission}</h3>
              <p className="text-slate-600 leading-relaxed">{t.mission_text}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t.experience}</h3>
              <p className="text-slate-600 leading-relaxed">{t.experience_text}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-4xl font-bold text-slate-900 mb-1">200+</p>
              <p className="text-slate-500 uppercase text-xs font-bold tracking-widest">{t.stats_clients}</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-slate-900 mb-1">1000+</p>
              <p className="text-slate-500 uppercase text-xs font-bold tracking-widest">{t.stats_factories}</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
            alt="Vera - Founder" 
            className="rounded-[3rem] shadow-2xl w-full aspect-[4/5] object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-8 rounded-3xl shadow-xl hidden md:block">
            <p className="text-2xl font-bold mb-1">Vera</p>
            <p className="text-slate-400 text-sm">{t.role}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const LogisticsSection = ({ lang }: { lang: Language }) => {
  const t = translations[lang].logistics;
  return (
    <section className="section-padding bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=800" 
              alt="Global Logistics" 
              className="rounded-[3rem] shadow-2xl w-full aspect-video object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">{t.title} <br /><span className="text-slate-500">{t.subtitle}</span></h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">{t.description}</p>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center shrink-0 border border-slate-700">
                  <Ship className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t.sea}</h3>
                  <p className="text-slate-400">{t.sea_desc}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center shrink-0 border border-slate-700">
                  <Truck className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t.express}</h3>
                  <p className="text-slate-400">{t.express_desc}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center shrink-0 border border-slate-700">
                  <ShieldCheck className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t.customs}</h3>
                  <p className="text-slate-400">{t.customs_desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = ({ lang }: { lang: Language }) => {
  const t = translations[lang].services;
  const icons = [<Search size={32} />, <Handshake size={32} />, <ShieldCheck size={32} />, <Truck size={32} />, <Tag size={32} />];

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.title}</h2>
            <p className="text-slate-600 text-lg">{t.subtitle}</p>
          </div>
          <a href="#contact" className="text-slate-900 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            {t.cta} <ArrowRight size={20} className={cn(lang === 'ar' && "rotate-180")} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((service, index) => (
            <div key={index} className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500">
              <div className="mb-8 text-slate-400 group-hover:text-slate-900 transition-colors duration-500">
                {icons[index]}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed text-lg">{service.desc}</p>
            </div>
          ))}
          <div className="p-10 rounded-[2.5rem] bg-slate-900 text-white flex flex-col justify-between">
            <h3 className="text-2xl font-bold">{t.ready}</h3>
            <a href="#contact" className="mt-8 bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-center hover:bg-slate-100 transition-all">
              {t.start}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = ({ lang }: { lang: Language }) => {
  const t = translations[lang].how;

  return (
    <section id="how-it-works" className="section-padding bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-slate-800 z-0" />
          
          {t.steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-2xl font-bold mb-8 border border-slate-700">
                {`0${index + 1}`}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = ({ lang }: { lang: Language }) => {
  const t = translations[lang].testimonials;

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.title}</h2>
          <div className="flex items-center justify-center gap-1 text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
          </div>
          <p className="text-slate-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.items.map((review, index) => (
            <div key={index} className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <p className="text-lg text-slate-700 italic mb-8">"{review.content}"</p>
              <div>
                <p className="font-bold text-slate-900">{review.name}</p>
                <p className="text-sm text-slate-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = ({ lang }: { lang: Language }) => {
  const t = translations[lang].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">{t.title}</h2>
        <div className="space-y-4">
          {t.items.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <button 
                className="w-full p-6 text-left flex items-center justify-between font-bold text-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.q}
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-slate-600 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Contact = ({ lang }: { lang: Language }) => {
  const t = translations[lang].contact;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const product = formData.get('product');
    const message = formData.get('message');

    const whatsappMessage = `Hi Vera! I'm ${name} (${email}). I'm interested in ${product}.
Message: ${message}`;

    const whatsappUrl = `https://wa.me/8618933252679?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-8 md:p-20 text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-800 rounded-full blur-3xl -mr-48 -mt-48 opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-800 rounded-full blur-3xl -ml-48 -mb-48 opacity-50" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">{t.title}</h2>
            <p className="text-xl text-slate-400 mb-12">{t.subtitle}</p>
            
            <div className="space-y-6">
              <a href="https://wa.me/8618933252679" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 group">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">WhatsApp</p>
                  <p className="text-lg font-bold">+86 18933252679</p>
                </div>
                <ArrowRight className={cn("ml-auto text-slate-600 group-hover:text-white transition-all", lang === 'ar' && "rotate-180")} />
              </a>

              <a href="mailto:vera.easterm@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 group">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-lg font-bold">vera.easterm@gmail.com</p>
                </div>
                <ArrowRight className={cn("ml-auto text-slate-600 group-hover:text-white transition-all", lang === 'ar' && "rotate-180")} />
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center">
                  <QrCode size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">WeChat ID</p>
                  <p className="text-lg font-bold">18933252679</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 text-slate-900">
            <h3 className="text-2xl font-bold mb-6">{t.form_title}</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold mb-2">{t.name}</label>
                <input name="name" required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all" placeholder={t.placeholder_name} />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">{t.email}</label>
                <input name="email" required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all" placeholder={t.placeholder_email} />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">{t.product}</label>
                <input name="product" required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all" placeholder={t.placeholder_product} />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">{t.message}</label>
                <textarea name="message" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all h-32" placeholder={t.placeholder_message}></textarea>
              </div>
              <button type="submit" className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-all flex items-center justify-center gap-2">
                {t.submit} <MessageCircle size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ lang }: { lang: Language }) => {
  const t = translations[lang].footer;
  return (
    <footer className="py-12 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold">V</div>
          <span className="font-bold tracking-tight">Vera Sourcing</span>
        </div>
        
        <div className="flex items-center gap-8 text-sm text-slate-500">
          <a href="#" className="hover:text-slate-900">{t.privacy}</a>
          <a href="#" className="hover:text-slate-900">{t.terms}</a>
          <a href="#" className="hover:text-slate-900">{t.cookies}</a>
        </div>

        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Vera Sourcing Co., Ltd. {t.rights}
        </p>
      </div>
    </footer>
  );
};

const Pricing = ({ lang, onPaymentSuccess }: { lang: Language, onPaymentSuccess: (planName: string) => void }) => {
  const t = translations[lang].pricing;
  const plans = [
    {
      name: t.plans.basic,
      price: "199.00",
      description: t.plans.basic_desc,
      features: t.plans.basic_features,
      highlight: false
    },
    {
      name: t.plans.standard,
      price: "499.00",
      description: t.plans.standard_desc,
      features: t.plans.standard_features,
      highlight: true
    },
    {
      name: t.plans.premium,
      price: "999.00",
      description: t.plans.premium_desc,
      features: t.plans.premium_features,
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-[2.5rem] border ${plan.highlight ? 'border-slate-900 ring-4 ring-slate-900/5 shadow-2xl' : 'border-slate-100 shadow-sm'} flex flex-col`}
            >
              {plan.highlight && (
                <span className="bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full self-start mb-6">
                  {t.plans.popular}
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-slate-500">{t.plans.per_project}</span>
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">{plan.description}</p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 size={18} className="text-slate-900 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <PayPalButtons 
                  style={{ layout: "vertical", shape: "pill", label: "pay" }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      intent: "CAPTURE",
                      purchase_units: [
                        {
                          description: `Vera Sourcing - ${plan.name} Plan`,
                          amount: {
                            currency_code: "USD",
                            value: plan.price,
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={async (data, actions) => {
                    if (actions.order) {
                      const details = await actions.order.capture();
                      onPaymentSuccess(plan.name);
                    }
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IntakeForm = ({ lang, onComplete }: { lang: Language, onComplete: () => void }) => {
  const t = translations[lang].intake;
  const tc = translations[lang].contact;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const product = formData.get('product');
    const quantity = formData.get('quantity');
    const price = formData.get('price');
    const country = formData.get('country');
    const requirements = formData.get('requirements');

    const message = `Hi Vera! I'm interested in sourcing:
Product: ${product}
Quantity: ${quantity}
Target Price: ${price}
Shipping Country: ${country}
Requirements: ${requirements}`;

    const whatsappUrl = `https://wa.me/8618933252679?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onComplete();
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-2">{t.title}</h3>
      <p className="text-slate-500 mb-8">{t.subtitle}</p>
      
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold mb-2 text-slate-700">{tc.product}</label>
            <input name="product" required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none" placeholder={t.placeholder_product} />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 text-slate-700">{t.quantity}</label>
            <input name="quantity" required type="number" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none" placeholder={t.placeholder_quantity} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold mb-2 text-slate-700">{t.target_price}</label>
            <input name="price" required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none" placeholder={t.placeholder_price} />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 text-slate-700">{t.shipping_country}</label>
            <input name="country" required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none" placeholder={t.placeholder_country} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold mb-2 text-slate-700">{t.requirements}</label>
          <textarea name="requirements" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none h-32" placeholder={t.placeholder_requirements}></textarea>
        </div>

        <button type="submit" className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-all flex items-center justify-center gap-2">
          {t.submit} <MessageCircle size={20} />
        </button>
      </form>
    </div>
  );
};

const SuccessRedirect = ({ lang }: { lang: Language }) => {
  const t = translations[lang].success;
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center p-12 bg-white rounded-[3rem] shadow-2xl border border-slate-100 max-w-2xl mx-auto"
    >
      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
        <CheckCircle2 size={40} />
      </div>
      <h2 className="text-3xl font-bold mb-4">{t.title}</h2>
      <p className="text-slate-600 mb-10 text-lg">
        {t.subtitle}
      </p>
      <a 
        href="https://wa.me/8618933252679?text=Hi Vera, I just completed my payment and I'm ready to start sourcing!" 
        className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all"
      >
        <MessageCircle size={24} /> {t.cta}
      </a>
    </motion.div>
  );
};

const FloatingWhatsApp = ({ lang }: { lang: Language }) => {
  const t = translations[lang].floating_whatsapp;
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href="https://wa.me/8618933252679"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-all"
      title={t.label}
    >
      <MessageCircle size={32} />
    </motion.a>
  );
};

export default function App() {
  const [view, setView] = useState<'landing' | 'success'>('landing');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [lang, setLang] = useState<Language>('en');

  const handlePaymentSuccess = (planName: string) => {
    setSelectedPlan(planName);
    setView('success');
  };

  if (view === 'success') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <SuccessRedirect lang={lang} />
      </div>
    );
  }

  const ti = translations[lang].intake;

  return (
    <PayPalScriptProvider options={{ 
      clientId: process.env.PAYPAL_CLIENT_ID || "test",
      currency: "USD",
      intent: "capture"
    }}>
      <div 
        className={cn(
          "min-h-screen selection:bg-slate-900 selection:text-white",
          lang === 'ar' ? "font-sans text-right" : "font-sans text-left"
        )}
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        <Navbar lang={lang} setLang={setLang} />
        <main>
          <Hero lang={lang} />
          <WhyVera lang={lang} />
          <AboutVera lang={lang} />
          <Services lang={lang} />
          <LogisticsSection lang={lang} />
          <Pricing lang={lang} onPaymentSuccess={handlePaymentSuccess} />
          <HowItWorks lang={lang} />
          <section className="section-padding bg-slate-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">{ti.title}</h2>
                <p className="text-slate-600">{ti.subtitle}</p>
              </div>
              <IntakeForm lang={lang} onComplete={() => setView('success')} />
            </div>
          </section>
          <Testimonials lang={lang} />
          <FAQ lang={lang} />
          <Contact lang={lang} />
        </main>
        <Footer lang={lang} />
        <FloatingWhatsApp lang={lang} />
      </div>
    </PayPalScriptProvider>
  );
}
