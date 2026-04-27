import React, { useState, useEffect } from "react";
import {
  DollarSign,
  Layers,
  Clock,
  Zap,
  UserCheck,
  TrendingUp,
  Smartphone,
  Layout,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Plus,
  Minus,
  MessageSquare,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CAMPAIGN_DATA } from "../data/campaign";

const IconMap = {
  DollarSign,
  Layers,
  Clock,
  Zap,
  UserCheck,
  TrendingUp,
  Smartphone,
  Layout,
  Briefcase,
};

const Section = ({ children, className = "", id = "" }) => (
  <section
    id={id}
    className={`py-12 md:py-20 px-4 md:px-12 lg:px-24 ${className}`}
  >
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F2EAE7]/95 backdrop-blur-md border-b border-[#7A726C]/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-18 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img
            src="https://ucarecdn.com/2ce46427-a7b0-4c15-8715-9bb63af5bda9/-/format/auto/"
            alt="SolutionBowl"
            className="h-[32px] md:h-[38px] w-auto"
          />
        </a>
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#7A726C]">
          <a href="#offer" className="hover:text-[#C25A2F] transition-colors">
            The Offer
          </a>
          <a href="#process" className="hover:text-[#C25A2F] transition-colors">
            Process
          </a>
          <a
            href="#benefits"
            className="hover:text-[#C25A2F] transition-colors"
          >
            Benefits
          </a>
          <a href="#faq" className="hover:text-[#C25A2F] transition-colors">
            FAQ
          </a>
        </div>
        <button className="hidden md:block bg-[#C25A2F] hover:bg-[#A84923] text-white px-4 lg:px-5 py-2 rounded-full text-sm font-semibold transition-all">
          Book a Call
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#201F20]"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F2EAE7] border-t border-[#7A726C]/20"
          >
            <div className="px-4 py-4 space-y-3">
              <a
                href="#offer"
                className="block py-3 text-[#7A726C] hover:text-[#C25A2F] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                The Offer
              </a>
              <a
                href="#process"
                className="block py-3 text-[#7A726C] hover:text-[#C25A2F] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Process
              </a>
              <a
                href="#benefits"
                className="block py-3 text-[#7A726C] hover:text-[#C25A2F] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefits
              </a>
              <a
                href="#faq"
                className="block py-3 text-[#7A726C] hover:text-[#C25A2F] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <button className="w-full bg-[#C25A2F] hover:bg-[#A84923] text-white px-5 py-3 rounded-full text-sm font-semibold transition-all mt-2">
                Book a Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <Section className="pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
    <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
      <div className="flex-1 text-center lg:text-left">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-[#C25A2F]/10 text-[#C25A2F] rounded-full"
        >
          {CAMPAIGN_DATA.hero.badge}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#201F20] leading-[1.1] mb-4 md:mb-6"
        >
          {CAMPAIGN_DATA.hero.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg lg:text-xl text-[#7A726C] mb-6 md:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 md:px-0"
        >
          {CAMPAIGN_DATA.hero.subheadline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 justify-center lg:justify-start px-2 md:px-0"
        >
          <button className="w-full sm:w-auto bg-[#C25A2F] text-white px-6 md:px-8 py-3.5 md:py-4 rounded-2xl font-bold text-base md:text-lg hover:bg-[#A84923] hover:shadow-xl transition-all flex items-center justify-center gap-2">
            {CAMPAIGN_DATA.hero.primaryCTA}
            <ArrowRight size={18} className="md:hidden" />
            <ArrowRight size={20} className="hidden md:block" />
          </button>
          <button className="w-full sm:w-auto bg-white border-2 border-[#7A726C]/20 text-[#201F20] px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold text-base md:text-lg hover:border-[#7A726C]/40 transition-all">
            {CAMPAIGN_DATA.hero.secondaryCTA}
          </button>
        </motion.div>
      </div>
      <div className="flex-1 relative w-full mt-8 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-[280px] sm:max-w-[350px] md:max-w-[500px] mx-auto lg:ml-auto"
        >
          {/* Mobile-optimized app mockup with smaller borders and padding on mobile */}
          <div className="bg-[#201F20] rounded-[2rem] md:rounded-[3rem] p-2 md:p-4 shadow-2xl border-[8px] md:border-[12px] border-[#201F20] aspect-[9/19.5]">
            <div className="bg-[#F2EAE7] h-full rounded-[2rem] overflow-hidden relative flex flex-col">
              <div className="h-6 w-1/3 bg-[#7A726C]/20 mx-auto mt-4 rounded-full" />
              <div className="p-6">
                <div className="w-12 h-12 bg-[#C25A2F]/10 rounded-xl mb-4" />
                <div className="h-4 w-3/4 bg-[#7A726C]/10 rounded mb-2" />
                <div className="h-4 w-1/2 bg-[#7A726C]/10 rounded mb-8" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 bg-[#7A726C]/5 rounded-2xl" />
                  <div className="h-32 bg-[#7A726C]/5 rounded-2xl" />
                </div>
              </div>
              <div className="mt-auto p-6 flex justify-between border-t border-[#7A726C]/10">
                <div className="w-6 h-6 bg-[#7A726C]/20 rounded-full" />
                <div className="w-6 h-6 bg-[#C25A2F] rounded-full" />
                <div className="w-6 h-6 bg-[#7A726C]/20 rounded-full" />
              </div>
            </div>
          </div>
          {/* Floating elements hidden on small mobile for cleaner look */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="hidden sm:block absolute -top-6 md:-top-10 -left-6 md:-left-10 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl border border-[#7A726C]/10"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider font-bold text-[#7A726C]">
                  Design System
                </p>
                <p className="font-bold text-sm text-[#201F20]">
                  Tokenized Colors
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 bg-[#C25A2F] text-white p-4 rounded-2xl shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Layers size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider font-bold text-white/80">
                  UX Flow
                </p>
                <p className="font-bold text-sm">32 Screens Mapped</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        {/* Background Decorative Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#C25A2F]/5 rounded-full blur-3xl -z-10" />
      </div>
    </div>
  </Section>
);

const TrustBar = () => (
  <Section className="bg-[#F2EAE7] py-12">
    <div className="text-center mb-8">
      <p className="text-sm font-semibold text-[#7A726C]/70 uppercase tracking-widest">
        {CAMPAIGN_DATA.trustBar.label}
      </p>
    </div>
    <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-70 grayscale">
      {/* Logos would go here */}
      <span className="text-2xl font-black text-[#7A726C]/50 tracking-tighter">
        TECHSTAR
      </span>
      <span className="text-2xl font-black text-[#7A726C]/50 tracking-tighter">
        NEXTER
      </span>
      <span className="text-2xl font-black text-[#7A726C]/50 tracking-tighter">
        FLOWCORE
      </span>
      <span className="text-2xl font-black text-[#7A726C]/50 tracking-tighter">
        AERO
      </span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 border-t border-[#7A726C]/20 pt-12">
      {CAMPAIGN_DATA.trustBar.stats.map((stat, i) => (
        <div key={i} className="text-center">
          <p className="text-4xl font-black text-[#201F20] mb-1">
            {stat.value}
          </p>
          <p className="text-sm font-medium text-[#7A726C]">{stat.label}</p>
        </div>
      ))}
    </div>
  </Section>
);

const Problem = () => (
  <Section className="bg-white">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-[#201F20] mb-4">
        {CAMPAIGN_DATA.problem.title}
      </h2>
      <div className="w-16 h-1.5 bg-[#C25A2F] mx-auto rounded-full" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {CAMPAIGN_DATA.problem.cards.map((card, i) => {
        const Icon = IconMap[card.icon];
        return (
          <div
            key={i}
            className="group p-8 rounded-3xl border border-[#7A726C]/10 hover:border-[#C25A2F]/20 hover:bg-[#C25A2F]/5 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-[#C25A2F]/10 text-[#C25A2F] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#201F20] mb-3">
              {card.title}
            </h3>
            <p className="text-[#7A726C] leading-relaxed">{card.description}</p>
          </div>
        );
      })}
    </div>
  </Section>
);

const Solution = () => (
  <Section className="bg-[#F2EAE7]/50">
    <div className="flex flex-col lg:flex-row gap-16 items-center">
      <div className="lg:w-1/2">
        <h2 className="text-2xl md:text-3xl font-black text-[#201F20] mb-6">
          {CAMPAIGN_DATA.solution.title}
        </h2>
        <p className="text-[#7A726C] text-lg mb-10 leading-relaxed">
          {CAMPAIGN_DATA.solution.description}
        </p>
        <div className="space-y-8">
          {CAMPAIGN_DATA.solution.features.map((f, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C25A2F]/10 text-[#C25A2F] flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <div>
                <h4 className="font-bold text-[#201F20] mb-1">{f.title}</h4>
                <p className="text-sm text-[#7A726C] leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="h-48 bg-white rounded-3xl shadow-sm border border-[#7A726C]/10 flex items-center justify-center p-8">
            <div className="w-full h-full bg-[#F2EAE7] rounded-2xl flex items-center justify-center">
              <Smartphone className="text-[#C25A2F]" size={40} />
            </div>
          </div>
          <div className="h-64 bg-[#201F20] rounded-3xl shadow-xl flex flex-col justify-end p-8">
            <div className="h-1 w-12 bg-[#C25A2F] rounded-full mb-4" />
            <p className="text-white font-bold">
              Native
              <br />
              Performance
            </p>
          </div>
        </div>
        <div className="pt-8 space-y-4">
          <div className="h-64 bg-[#C25A2F] rounded-3xl shadow-xl flex flex-col justify-end p-8">
            <div className="h-1 w-12 bg-white rounded-full mb-4" />
            <p className="text-white font-bold">
              Modern
              <br />
              Architecture
            </p>
          </div>
          <div className="h-48 bg-white rounded-3xl shadow-sm border border-[#7A726C]/10 flex items-center justify-center p-8">
            <div className="w-full h-full bg-[#F2EAE7] rounded-2xl flex items-center justify-center">
              <Layout className="text-[#7A726C]/40" size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const Offer = () => (
  <Section
    id="offer"
    className="bg-[#201F20] text-white rounded-[3rem] my-10 overflow-hidden relative"
  >
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C25A2F]/10 to-transparent pointer-events-none" />
    <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
      <div className="flex-1">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-[#C25A2F]/20 text-[#FF8A5B] border border-[#C25A2F]/30 rounded-full">
          Exclusive Integration Bonus
        </div>
        <h2 className="text-2xl md:text-3xl font-black mb-6 leading-tight">
          {CAMPAIGN_DATA.offer.highlight}
        </h2>
        <p className="text-[#FF8A5B] text-xl font-bold mb-8">
          {CAMPAIGN_DATA.offer.valueAnchor}
        </p>
        <p className="text-[#85A1AD] text-lg mb-10 leading-relaxed max-w-xl">
          {CAMPAIGN_DATA.offer.reasoning}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CAMPAIGN_DATA.offer.includes.map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-[#F2EAE7]">
              <div className="text-[#FF8A5B]">
                <CheckCircle2 size={18} />
              </div>
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-1/3 w-full">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl">
          <div className="mb-6 text-center">
            <p className="text-sm font-bold text-[#FF8A5B] uppercase tracking-widest mb-2">
              Next Step
            </p>
            <h3 className="text-2xl font-bold">Start Your App</h3>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#FF8A5B] transition-all placeholder:text-[#85A1AD] text-white"
            />
            <input
              type="email"
              placeholder="Work Email"
              className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#FF8A5B] transition-all placeholder:text-[#85A1AD] text-white"
            />
            <button className="w-full bg-[#C25A2F] hover:bg-[#A84923] py-4 rounded-xl font-bold transition-all text-lg shadow-lg shadow-[#C25A2F]/20">
              Claim This Offer
            </button>
            <p className="text-[10px] text-center text-[#85A1AD] uppercase tracking-widest font-bold pt-2 flex items-center justify-center gap-2">
              <ShieldCheck size={12} /> Secure 256-bit encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const Process = () => (
  <Section id="process">
    <div className="text-center mb-16">
      <h2 className="text-2xl md:text-3xl font-black text-[#201F20] mb-4">
        {CAMPAIGN_DATA.process.title}
      </h2>
      <p className="text-[#7A726C] text-lg">
        A clear roadmap from first call to App Store release.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
      {/* Decorative Line (Hidden on mobile) */}
      <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-[#7A726C]/20 -z-10" />
      {CAMPAIGN_DATA.process.steps.map((step, i) => (
        <div
          key={i}
          className="flex flex-col items-center md:items-start text-center md:text-left bg-white p-6 rounded-3xl group border border-[#7A726C]/10"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#F2EAE7] text-[#7A726C] font-black text-xl flex items-center justify-center mb-6 group-hover:bg-[#C25A2F] group-hover:text-white transition-all duration-300">
            {step.id}
          </div>
          <h3 className="font-bold text-[#201F20] mb-2">{step.title}</h3>
          <p className="text-sm text-[#7A726C] leading-relaxed">{step.desc}</p>
        </div>
      ))}
    </div>
  </Section>
);

const Benefits = () => (
  <Section id="benefits" className="bg-[#F2EAE7] rounded-[3rem] my-20">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {CAMPAIGN_DATA.benefits.map((benefit, i) => {
        const Icon = IconMap[benefit.icon];
        return (
          <div
            key={i}
            className="p-8 bg-white rounded-3xl border border-[#7A726C]/10 hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="w-10 h-10 bg-[#C25A2F]/10 text-[#C25A2F] rounded-lg flex items-center justify-center mb-6">
              <Icon size={20} />
            </div>
            <h3 className="text-lg font-bold text-[#201F20] mb-2">
              {benefit.title}
            </h3>
            <p className="text-[#7A726C] text-sm leading-relaxed">
              {benefit.desc}
            </p>
          </div>
        );
      })}
    </div>
  </Section>
);

const Comparison = () => (
  <Section className="bg-white">
    <div className="text-center mb-16">
      <h2 className="text-2xl md:text-3xl font-black text-[#201F20] mb-4">
        The SolutionBowl Edge
      </h2>
      <p className="text-[#7A726C]">
        Why top founders choose our integrated model.
      </p>
    </div>
    <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead>
          <tr className="border-b border-[#7A726C]/20">
            {CAMPAIGN_DATA.comparison.headers.map((h, i) => (
              <th
                key={i}
                className={`py-4 md:py-6 px-3 md:px-4 font-bold text-[#201F20] text-sm md:text-base ${i === 2 ? "text-[#C25A2F] bg-[#C25A2F]/5 rounded-t-xl" : ""}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {CAMPAIGN_DATA.comparison.rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-[#7A726C]/10 group hover:bg-[#F2EAE7]/50 transition-colors"
            >
              <td className="py-4 md:py-6 px-3 md:px-4 font-medium text-[#7A726C]">
                {row[0]}
              </td>
              <td className="py-4 md:py-6 px-3 md:px-4 text-[#7A726C]/70">
                {row[1]}
              </td>
              <td
                className={`py-4 md:py-6 px-3 md:px-4 font-bold text-[#201F20] ${i === CAMPAIGN_DATA.comparison.rows.length - 1 ? "rounded-b-xl" : ""} bg-[#C25A2F]/5`}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  {row[2]}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Section>
);

const Testimonials = () => (
  <Section className="bg-[#201F20] py-32 rounded-t-[4rem]">
    <div className="text-center mb-20">
      <h2 className="text-4xl font-black text-white">Loved by Founders</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {CAMPAIGN_DATA.testimonials.map((t, i) => (
        <div
          key={i}
          className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <MessageSquare size={80} className="text-white" />
          </div>
          <p className="text-xl text-[#F2EAE7] mb-8 font-medium italic relative z-10 leading-relaxed">
            "{t.content}"
          </p>
          <div className="flex items-center justify-between mt-auto relative z-10">
            <div>
              <h4 className="font-bold text-white text-lg">{t.name}</h4>
              <p className="text-[#FF8A5B] text-sm font-bold uppercase tracking-widest">
                {t.role}
              </p>
            </div>
            <div className="px-4 py-1.5 bg-green-500/20 text-green-300 rounded-full text-xs font-black uppercase tracking-widest">
              {t.metric}
            </div>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const FAQItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#7A726C]/20 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold text-[#201F20] group-hover:text-[#C25A2F] transition-colors">
          {q}
        </span>
        <div
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <Plus
            size={20}
            className={isOpen ? "hidden" : "block text-[#7A726C]"}
          />
          <Minus
            size={20}
            className={isOpen ? "block" : "hidden text-[#C25A2F]"}
          />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[#7A726C] leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => (
  <Section id="faq" className="max-w-4xl">
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-black text-[#201F20] mb-4">
        Frequently Asked Questions
      </h2>
    </div>
    <div className="bg-white p-8 rounded-[2rem] border border-[#7A726C]/10">
      {CAMPAIGN_DATA.faq.map((item, i) => (
        <FAQItem key={i} q={item.q} a={item.a} />
      ))}
    </div>
  </Section>
);

const Footer = () => (
  <footer className="bg-[#F2EAE7] py-20 px-6 border-t border-[#7A726C]/20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div className="col-span-1 md:col-span-1">
        <a href="#" className="inline-block mb-6">
          <img
            src="https://ucarecdn.com/2ce46427-a7b0-4c15-8715-9bb63af5bda9/-/format/auto/"
            alt="SolutionBowl"
            className="h-12 w-auto"
          />
        </a>
        <p className="text-[#7A726C] text-sm leading-relaxed mb-6">
          Modern mobile development for ambitious startups. Free UI/UX design
          with every project.
        </p>
      </div>
      <div>
        <h4 className="font-bold text-[#201F20] mb-6">Company</h4>
        <ul className="space-y-4 text-sm text-[#7A726C]">
          <li>
            <a href="#" className="hover:text-[#C25A2F]">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#C25A2F]">
              Work
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#C25A2F]">
              Careers
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-[#201F20] mb-6">Services</h4>
        <ul className="space-y-4 text-sm text-[#7A726C]">
          <li>
            <a href="#" className="hover:text-[#C25A2F]">
              Mobile Development
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#C25A2F]">
              UI/UX Design
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#C25A2F]">
              Product Strategy
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-[#201F20] mb-6">Legal</h4>
        <ul className="space-y-4 text-sm text-[#7A726C]">
          <li>
            <a href="#" className="hover:text-[#C25A2F]">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#C25A2F]">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-8 border-t border-[#7A726C]/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-[#7A726C]/70 uppercase tracking-widest">
      <p>© 2026 SolutionBowl_AI. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-[#201F20] transition-colors">
          Twitter
        </a>
        <a href="#" className="hover:text-[#201F20] transition-colors">
          LinkedIn
        </a>
        <a href="#" className="hover:text-[#201F20] transition-colors">
          Instagram
        </a>
      </div>
    </div>
  </footer>
);

const BonusSection = () => (
  <Section className="bg-[#C25A2F]/5 mt-20 rounded-[3rem]">
    <div className="text-center mb-12">
      <h2 className="text-2xl font-black text-[#201F20] mb-2">
        Campaign Strategy Extras
      </h2>
      <p className="text-[#C25A2F] font-medium italic">
        Internal use only for marketing team
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-6 bg-white rounded-2xl border border-[#C25A2F]/20 shadow-sm">
        <h4 className="font-black text-sm uppercase tracking-widest text-[#201F20] mb-4">
          Headline Variations
        </h4>
        <ul className="space-y-3 text-sm text-[#7A726C] font-medium">
          {CAMPAIGN_DATA.bonus.headlines.map((h, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-[#C25A2F]">{i + 1}.</span> {h}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 bg-white rounded-2xl border border-[#C25A2F]/20 shadow-sm">
        <h4 className="font-black text-sm uppercase tracking-widest text-[#201F20] mb-4">
          CTA Variations
        </h4>
        <ul className="space-y-3 text-sm text-[#7A726C] font-medium">
          {CAMPAIGN_DATA.bonus.ctas.map((c, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-[#C25A2F]">{i + 1}.</span> {c}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 bg-white rounded-2xl border border-[#C25A2F]/20 shadow-sm">
        <h4 className="font-black text-sm uppercase tracking-widest text-[#201F20] mb-4">
          A/B Test Ideas
        </h4>
        <ul className="space-y-3 text-sm text-[#7A726C] font-medium">
          {CAMPAIGN_DATA.bonus.abTests.map((t, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-[#C25A2F]">•</span> {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#C25A2F]/20 selection:text-[#201F20]">
      <Navbar />
      <Hero />
      <TrustBar />
      <Problem />
      <Solution />
      <Offer />
      <Process />
      <Benefits />
      <Comparison />
      <Testimonials />
      <FAQ />

      {/* Final High-Conversion CTA */}
      <Section className="py-16 md:py-32">
        <div className="bg-[#C25A2F] text-white rounded-2xl md:rounded-[3rem] p-8 md:p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8 relative z-10 leading-tight px-4">
            Ready to build your app?
            <br className="hidden sm:block" />
            Get your{" "}
            <span className="text-white underline decoration-[#FF8A5B] underline-offset-4 md:underline-offset-8">
              Free UI/UX Design
            </span>{" "}
            today.
          </h2>
          <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto font-medium relative z-10">
            Limited slots available for April 2026 projects. Secure your spot in
            our development queue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <button className="w-full sm:w-auto bg-white text-[#C25A2F] px-10 py-5 rounded-2xl font-black text-xl hover:shadow-2xl hover:scale-105 transition-all shadow-xl shadow-[#201F20]/20">
              Book Your Free Call
            </button>
            <div className="flex items-center gap-2 text-white/90 font-bold uppercase tracking-widest text-sm">
              <div
                className="w-2 h-2 bg-green-300 rounded-full"
                style={{
                  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                }}
              />
              3 Slots Left
            </div>
          </div>
        </div>
      </Section>

      <Footer />

      {/* Bonus Output Section for Developer Reference */}
      <div className="max-w-7xl mx-auto pb-20 border-t border-[#7A726C]/10 pt-10 px-6">
        <BonusSection />
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}
