
import React, { useEffect, useRef } from 'react';
import { Download, ArrowRight, ChevronRight, Zap, Globe, ShieldCheck, Activity, Users, Leaf, BarChart3, Layers, Target, Database, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import MineralBackground from '../components/MineralBackground';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Home: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Staggered Entry for Hero
      gsap.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "expo.out"
      });

      // Section Fade-In on Scroll
      gsap.utils.toArray(".reveal-up").forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });

      // Roadmap Animation
      gsap.from(".roadmap-node", {
        scrollTrigger: {
          trigger: ".roadmap-container",
          start: "top 70%",
        },
        scale: 0,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: "back.out(1.7)"
      });

      // Horizontal Ticker Flow
      gsap.to(".ticker-track", {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "none"
      });

      // Floating Animation for Blueprint Elements
      gsap.to(".blueprint-float", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="bg-[#050505] text-white">
      <MineralBackground />

      {/* LUXURY HERO */}
      <section className="relative min-h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover opacity-40 scale-105"
            autoPlay muted loop playsInline
            src="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2025/10/08180842/W225-10_Video-1.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
        </div>

        <div className="container relative z-10 px-6 text-center">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-1.5 mb-8 border border-brand-orange/30 hero-line">
            <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></span>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.3em]">TSXV: PTX | OTCQB: PANXF | Frankfurt: 9PX</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold uppercase tracking-tighter leading-[0.85] mb-6 md:mb-10 hero-line">
            The New Era of <br /> <span className="text-brand-orange">Critical Discovery.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12 hero-line">
            Advancing high-value Copper, Nickel, PGE, and Gold assets in the world-class mining camps of Northern Ontario.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 hero-line">
            <Link to="/projects/w2" className="bg-brand-orange text-white px-12 py-5 font-extrabold uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[0_0_50px_rgba(229,100,23,0.3)]">
              Explore Flagship Projects
            </Link>
            <Link to="/investors" className="glass px-12 py-5 font-extrabold uppercase tracking-widest hover:bg-brand-orange/10 transition-all">
              Investor Center
            </Link>
          </div>
        </div>
      </section>

      {/* GLOBAL TICKER BAR */}
      <section className="bg-brand-orange py-4 border-y border-white/10 overflow-hidden relative z-20">
        <div className="ticker-track flex whitespace-nowrap space-x-6 sm:space-x-12 md:space-x-20 font-extrabold uppercase text-[11px] tracking-[0.4em]">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="flex space-x-6 sm:space-x-12 md:space-x-20 items-center">
              <span className="flex items-center"><Zap size={14} className="mr-2" /> TSXV: PTX</span>
              <span className="flex items-center"><Zap size={14} className="mr-2" /> Frankfurt: 9PX</span>
              <span className="flex items-center"><Zap size={14} className="mr-2" /> OTCQB: PANXF</span>
              <span className="flex items-center"><Zap size={14} className="mr-2" /> GATEWAY TO RING OF FIRE</span>
              <span className="flex items-center"><Zap size={14} className="mr-2" /> W2 CU-NI-PGE PROJECT</span>
            </div>
          ))}
        </div>
      </section>

      {/* ESG & COMMUNITY IMPACT */}
      <section className="py-16 md:py-28 lg:py-40 bg-white text-black reveal-up">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <span className="h-1 w-12 bg-brand-orange"></span>
                <span className="text-brand-orange font-black uppercase text-xs tracking-widest">Responsible Stewardship</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6 md:mb-10">Mining With <br /> <span className="text-brand-orange">Purpose.</span></h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group cursor-pointer">
                  <div className="p-4 bg-gray-50 rounded-xl group-hover:bg-brand-orange transition-all duration-300">
                    <Users className="text-brand-orange group-hover:text-white transition-colors duration-300" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-tight text-lg group-hover:text-brand-orange transition-colors">First Nations Partnerships</h4>
                    <p className="text-gray-500 mt-1">Formal Cooperation Agreement with Webequie First Nation (Dec 2025). 15-month consultation process with community-informed conditions. Early-Stage Exploration Committee established in 2026.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group cursor-pointer">
                  <div className="p-4 bg-gray-50 rounded-xl group-hover:bg-brand-orange transition-all duration-300">
                    <Leaf className="text-brand-orange group-hover:text-white transition-colors duration-300" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-tight text-lg group-hover:text-brand-orange transition-colors">Environmental Oversight</h4>
                    <p className="text-gray-500 mt-1">Permitted programs aligned with Ontario's regulatory framework. Environmental safeguards, seasonal activity restrictions, and post-program site inspections.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group cursor-pointer">
                  <div className="p-4 bg-gray-50 rounded-xl group-hover:bg-brand-orange transition-all duration-300">
                    <Activity className="text-brand-orange group-hover:text-white transition-colors duration-300" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-tight text-lg group-hover:text-brand-orange transition-colors">Local Economic Impact</h4>
                    <p className="text-gray-500 mt-1">Employment and contracting opportunities for First Nations communities. Community-provided services and logistics with potential equity participation discussions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-6 md:p-10 lg:p-12 flex flex-col justify-between overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8">
                <ShieldCheck size={120} className="text-brand-orange opacity-10" />
              </div>
              <div className="relative z-10">
                <p className="text-3xl font-light italic text-gray-700 leading-relaxed">
                  "PTX is building assets the right way, the Canadian way. Our approach emphasizes transparency, steady progress, and a long-term commitment to Ontario's North."
                </p>
                <div className="mt-8">
                  <span className="font-black uppercase tracking-widest text-sm">Greg Ferron</span>
                  <span className="block text-gray-400 text-xs font-bold uppercase tracking-widest">CEO, PTX Metals</span>
                </div>
              </div>
              <Link to="/esg" className="mt-12 bg-brand-dark text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-brand-orange transition-all w-fit inline-block">
                View ESG Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE INVESTMENT THESIS (REVEAL) */}
      <section className="py-20 md:py-40 lg:py-60 bg-white text-black relative reveal-up overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 text-brand-orange mb-12">
            <Layers size={24} />
            <span className="font-black uppercase text-sm tracking-[0.4em]">The PTX Edge</span>
          </div>
          <h2 className="text-[12vw] font-black uppercase tracking-tighter leading-[0.75] mb-20 text-black/5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">ASSEMBLING VALUE</h2>
          <div className="max-w-5xl mx-auto relative z-10">
            <p className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-12">
              Major scale potential. <br />
              <span className="text-brand-orange">Tier 1 jurisdictions.</span> <br />
              Expert capital allocation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mt-10 md:mt-20 border-t border-black/10 pt-8 md:pt-16">
              <div className="space-y-4 group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                <Target size={32} className="mx-auto text-brand-orange group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-xl font-black uppercase text-black">Massive Upside</h4>
                <p className="text-gray-500 text-sm font-light">Targeting district-scale anomalies in the world-class Ring of Fire region.</p>
              </div>
              <div className="space-y-4 group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                <ShieldCheck size={32} className="mx-auto text-brand-orange group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-xl font-black uppercase text-black">Tier-1 Jurisdiction</h4>
                <p className="text-gray-500 text-sm font-light">Operating in Ontario, one of the most prolific and well-regulated mining jurisdictions globally.</p>
              </div>
              <div className="space-y-4 group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                <Database size={32} className="mx-auto text-brand-orange group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-xl font-black uppercase text-black">Data Driven</h4>
                <p className="text-gray-500 text-sm font-light">Exploration programs supported by modern geophysical surveys including magnetics, IP, and airborne data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE COMMODITY MATRIX */}
      <section className="py-16 md:py-28 lg:py-40 bg-black relative overflow-hidden reveal-up">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-10 md:mb-20 gap-6 md:gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-orange font-black uppercase text-xs tracking-widest mb-4 block">Asset Diversification</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">The Four Pillars of <br /><span className="text-white/40">Future Supply.</span></h2>
            </div>
            <p className="md:max-w-xs text-gray-500 font-light text-sm leading-relaxed">
              Strategically positioned across the most vital mineral categories required for global electrification and value preservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { metal: 'Copper', role: 'Electrification', stat: 'Critical Shortage', color: 'border-orange-500', desc: 'EVs require 4x more copper than traditional vehicles. Essential for charging infrastructure and renewable energy grids.' },
              { metal: 'Nickel', role: 'Energy Storage', stat: 'Class 1 Focus', color: 'border-gray-500', desc: 'High-purity nickel is critical for next-generation EV batteries, enabling longer range and faster charging.' },
              { metal: 'PGEs', role: 'Industrial Tech', stat: 'Rare Discovery', color: 'border-white', desc: 'Platinum, Palladium, Rhodium - essential for catalytic converters, hydrogen fuel cells, and green energy technologies.' },
              { metal: 'Gold', role: 'Store of Value', stat: 'District Scale', color: 'border-yellow-600', desc: 'District-scale exposure in the Abitibi, the world\'s premier gold camp. Traditional hedge against economic uncertainty.' }
            ].map((p, i) => (
              <div key={i} className={`group relative p-6 md:p-10 border-t-2 ${p.color} bg-white/5 hover:bg-brand-orange hover:shadow-[0_0_30px_rgba(229,100,23,0.4)] transition-all duration-500 cursor-default h-auto min-h-[280px] md:h-[350px] flex flex-col justify-between overflow-hidden`} style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 group-hover:rotate-12 transition-all duration-700">
                  <Sparkles size={180} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 group-hover:text-white/70">{p.role}</span>
                  <h4 className="text-4xl font-black uppercase mt-2 group-hover:text-white text-white">{p.metal}</h4>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-gray-400 group-hover:text-white/80 leading-relaxed font-light">{p.desc}</p>
                  <div className="flex items-center text-brand-orange group-hover:text-white font-black text-xs uppercase tracking-widest">
                    {p.stat} <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 group-hover:animate-bounce transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC OVERVIEW */}
      <section className="py-16 md:py-28 lg:py-40 bg-white text-black relative reveal-up">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="space-y-6 md:space-y-10">
              <div className="flex items-center space-x-4">
                <span className="h-1 w-12 bg-brand-orange"></span>
                <span className="text-brand-orange font-black uppercase text-xs tracking-widest">About PTX Metals</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-black">Discovery <br /> Without Limits.</h2>
              <p className="text-2xl text-gray-600 font-light leading-relaxed">
                PTX Metals is a mineral exploration company focused on high-quality critical minerals projects, situated in northern Ontario—renowned as a <span className="text-black font-bold underline decoration-brand-orange">best-in-class mining jurisdiction</span> with stable governance, proven infrastructure, and a skilled workforce.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-6">
                <div className="group cursor-pointer transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl font-black mb-1 text-black">22,700+</div>
                  <div className="text-[10px] font-bold uppercase text-gray-400 tracking-widest group-hover:text-brand-orange transition-colors">Hectares at W2</div>
                </div>
                <div className="group cursor-pointer transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl font-black mb-1 text-black">5,000m</div>
                  <div className="text-[10px] font-bold uppercase text-gray-400 tracking-widest group-hover:text-brand-orange transition-colors">2025-2026 Drill Program</div>
                </div>
                <div className="group cursor-pointer transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl font-black mb-1 text-black">4</div>
                  <div className="text-[10px] font-bold uppercase text-gray-400 tracking-widest group-hover:text-brand-orange transition-colors">Strategic Projects</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-orange translate-x-4 translate-y-4 -z-10"></div>
              <img src="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/05/07152333/home-main-bg-3.jpg" className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700" alt="Drilling" />
            </div>
          </div>
        </div>
      </section>

      {/* MIND-BLOWING SECTION 2: GEOSCIENCE BLUEPRINT */}
      <section className="py-16 md:py-28 lg:py-40 bg-brand-dark relative overflow-hidden reveal-up">
        <div className="absolute inset-0 blueprint-grid opacity-10 sm:opacity-20 md:opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-12">
              <div className="inline-flex items-center px-4 py-2 glass border border-brand-orange/30 rounded-full text-brand-orange text-[10px] font-black uppercase tracking-widest">
                <Layers size={14} className="mr-2" /> New Geological Model
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85]">Targeting <br /><span className="text-brand-orange">Deep Value.</span></h2>
              <p className="text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
                Advanced 3D magnetic inversion modeling and high-resolution geophysics reveal previously undetected massive sulphide targets. Our 5,000m (2025-2026) diamond drilling campaign will test zones never before reached.
              </p>
              <div className="flex gap-4 flex-wrap">
                <div className="p-6 glass border-l-2 border-brand-orange rounded-r-xl group cursor-pointer hover:bg-brand-orange/10 transition-all duration-300 hover:-translate-y-1">
                  <h5 className="text-brand-orange font-black uppercase text-xs mb-2 group-hover:text-white transition-colors">Central Target</h5>
                  <p className="text-lg font-bold">5,000m (2025-2026)</p>
                </div>
                <div className="p-6 glass border-l-2 border-brand-orange rounded-r-xl group cursor-pointer hover:bg-brand-orange/10 transition-all duration-300 hover:-translate-y-1">
                  <h5 className="text-brand-orange font-black uppercase text-xs mb-2 group-hover:text-white transition-colors">3D Modeling</h5>
                  <p className="text-lg font-bold">Inversion Verified</p>
                </div>
                <div className="p-6 glass border-l-2 border-brand-orange rounded-r-xl group cursor-pointer hover:bg-brand-orange/10 transition-all duration-300 hover:-translate-y-1">
                  <h5 className="text-brand-orange font-black uppercase text-xs mb-2 group-hover:text-white transition-colors">Target Depth</h5>
                  <p className="text-lg font-bold">Massive Sulphides</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 p-4 glass rounded-3xl overflow-hidden border border-white/10 blueprint-float group cursor-pointer">
                <img src="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2025/12/01070922/Picture1-FINAL-1.png" className="w-full rounded-2xl grayscale brightness-125 contrast-125 mix-blend-screen group-hover:scale-105 transition-transform duration-700" alt="Geophysics" />
                <div className="absolute inset-0 bg-brand-orange/10 mix-blend-overlay" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-orange/5 blur-3xl -z-10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP SECTION */}
      <section className="py-16 md:py-28 lg:py-40 bg-brand-dark overflow-hidden reveal-up">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">Strategic <span className="text-brand-orange">Milestones</span></h2>
            <p className="text-gray-400 font-light mb-8">A clear path to value creation through methodical exploration and strategic partnerships.</p>
            <Link to="/milestones" className="inline-flex items-center text-brand-orange font-black uppercase text-sm tracking-widest hover:text-white transition-colors group">
              View Full Roadmap <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="relative roadmap-container">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

            <div className="space-y-12 md:space-y-24">
              {[
                { year: '2024', title: 'Asset Consolidation', desc: 'Completion of strategic claim acquisitions at W2 and formation of the South Timmins JV.', icon: Globe },
                { year: '2025', title: 'Drill Program Launch', desc: 'Mobilization of Cyr Drilling for 5,000m diamond drilling at Central Target.', icon: Activity, active: true },
                { year: '2026', title: 'Resource Expansion', desc: 'Resource modeling and paragenesis study completion for W2 complex.', icon: BarChart3 }
              ].map((step, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-10 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 roadmap-node">
                    <div className={idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}>
                      <span className={`text-4xl font-black ${step.active ? 'text-brand-orange' : 'text-white/20'}`}>{step.year}</span>
                      <h4 className="text-xl font-bold uppercase mt-2">{step.title}</h4>
                      <p className={`text-gray-500 mt-2 max-w-sm ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>{step.desc}</p>
                    </div>
                  </div>
                  <div className="z-10 bg-brand-orange rounded-full p-4 shadow-[0_0_30px_rgba(229,100,23,0.5)]">
                    <step.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOARDROOM INSIGHT */}
      <section className="py-16 md:py-28 lg:py-40 bg-brand-dark relative overflow-hidden reveal-up">
        <div className="absolute inset-0 z-0 grayscale opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/03/08103739/Ronda-Stripping-5.jpg')" }} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-6 md:mb-8">Decades of <span className="text-brand-orange">Expertise.</span></h2>
                <p className="text-2xl text-gray-300 font-light leading-relaxed mb-10">
                  PTX's Management Team, Board of Directors, and Technical Committee bring over 100 years of combined experience in orchestrating multi-billion dollar M&A transactions and leading major gold and base metal discoveries globally.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 border-t border-white/10 pt-6 md:pt-10">
                  <div className="group cursor-pointer transition-all duration-300 hover:-translate-y-1">
                    <div className="text-4xl font-black text-brand-orange mb-1 group-hover:scale-110 transition-transform">20+</div>
                    <div className="text-[10px] font-bold uppercase text-gray-500 tracking-widest group-hover:text-gray-300 transition-colors">Years CEO Experience</div>
                  </div>
                  <div className="group cursor-pointer transition-all duration-300 hover:-translate-y-1">
                    <div className="text-4xl font-black text-brand-orange mb-1 group-hover:scale-110 transition-transform">$30B+</div>
                    <div className="text-[10px] font-bold uppercase text-gray-500 tracking-widest group-hover:text-gray-300 transition-colors">M&A Involvement</div>
                  </div>
                  <div className="hidden md:block group cursor-pointer transition-all duration-300 hover:-translate-y-1">
                    <div className="text-4xl font-black text-brand-orange mb-1 group-hover:scale-110 transition-transform">100+</div>
                    <div className="text-[10px] font-bold uppercase text-gray-500 tracking-widest group-hover:text-gray-300 transition-colors">Years of Combined Experience</div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4">
                <Link to="/management" className="group w-full aspect-square glass flex flex-col items-center justify-center p-6 md:p-12 hover:bg-brand-orange transition-all">
                  <Users size={48} className="mb-6 text-brand-orange group-hover:text-white transition-colors" />
                  <span className="text-center font-black uppercase tracking-widest text-sm">Meet the Executive Team</span>
                  <ArrowRight className="mt-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="mt-8 max-w-4xl">
              <p className="text-xs text-gray-500 italic">
                * Estimates based on forward-looking statements. Please refer to our <Link to="/investors/financials" className="text-brand-orange hover:text-white underline transition-colors">tactical reports</Link> and <Link to="/investors/cautionary" className="text-brand-orange hover:text-white underline transition-colors">cautionary notes</Link> for complete disclosure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FLAGSHIP PROJECTS GRID */}
      <section className="reveal-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] lg:min-h-screen">
          {/* W2 Project - LEFT */}
          <div className="relative group overflow-hidden flex items-end p-6 sm:p-10 lg:p-24 border-r border-white/5">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105 group-hover:scale-100" style={{ backgroundImage: "url('https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/05/07152333/project1-bg.jpg')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
            <div className="relative z-10 w-full">
              <span className="text-brand-orange font-bold uppercase text-xs tracking-[0.3em] mb-4 block drop-shadow-lg">Gateway to Ring of Fire</span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4 md:mb-6 leading-none drop-shadow-2xl">W2 Copper <br /> Nickel PGE</h3>
              <p className="text-white max-w-md text-lg font-light mb-6 drop-shadow-lg">Exploration Target*: 60-135Mt @ 0.5-0.78% CuEq. The potential quantity and grade is conceptual in nature and there has been insufficient exploration to define a mineral resource.</p>
              <div className="flex items-center gap-3 mb-10">
                <span className="glass text-[10px] font-black uppercase tracking-widest px-3 py-1.5 text-brand-orange border border-brand-orange/30 drop-shadow-lg">Webequie FN Agreement</span>
                <span className="glass text-[10px] font-black uppercase tracking-widest px-3 py-1.5 text-white border border-white/20 drop-shadow-lg">Currently Drilling</span>
              </div>
              <Link to="/projects/w2" className="bg-brand-orange text-white px-10 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl inline-block">Project Specs</Link>
            </div>
          </div>

          {/* South Timmins - RIGHT */}
          <div className="relative group overflow-hidden flex items-end p-6 sm:p-10 lg:p-24">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105 group-hover:scale-100" style={{ backgroundImage: "url('https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/05/07152333/project2-bg.jpg')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
            <div className="relative z-10 w-full">
              <span className="text-brand-orange font-bold uppercase text-xs tracking-[0.3em] mb-4 block drop-shadow-lg">Abitibi Gold Belt</span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4 md:mb-6 leading-none drop-shadow-2xl">South Timmins <br /> Gold Projects</h3>
              <p className="text-white max-w-md text-lg font-light mb-6 drop-shadow-lg">28,000 ha consolidated land package. Direct neighbor to IAMGold Côté Gold and Aris Mining Juby deposit (2.3Moz Au). Part of South Timmins JV.</p>
              <div className="flex items-center gap-3 mb-10">
                <span className="glass text-[10px] font-black uppercase tracking-widest px-3 py-1.5 text-white border border-white/20 drop-shadow-lg">5 Mines Within 100km</span>
              </div>
              <Link to="/projects/shining-tree" className="bg-white text-black px-10 py-4 font-black uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all shadow-xl inline-block">Project Specs</Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS & INVESTOR RESOURCES */}
      <section className="py-16 md:py-28 lg:py-40 bg-white text-black reveal-up">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none text-black">News & <span className="text-brand-orange">Updates</span></h2>
            <Link to="/news" className="inline-flex items-center text-brand-orange font-black uppercase text-xs tracking-widest hover:text-black transition-colors group">
              View All News <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Link to="/news" className="group p-8 md:p-12 bg-gray-50 hover:bg-brand-orange transition-all duration-300 cursor-pointer">
              <BarChart3 size={40} className="text-brand-orange group-hover:text-white mb-6 transition-colors" />
              <h4 className="text-xl font-black uppercase tracking-tight group-hover:text-white transition-colors">News Releases</h4>
              <p className="text-gray-500 group-hover:text-white/80 mt-3 font-light text-sm transition-colors">Latest press releases and corporate announcements filed on SEDAR+.</p>
              <span className="inline-flex items-center mt-6 text-brand-orange group-hover:text-white font-black uppercase text-xs tracking-widest transition-colors">
                Read More <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
            <Link to="/investors/presentations" className="group p-8 md:p-12 bg-gray-50 hover:bg-brand-orange transition-all duration-300 cursor-pointer">
              <Download size={40} className="text-brand-orange group-hover:text-white mb-6 transition-colors" />
              <h4 className="text-xl font-black uppercase tracking-tight group-hover:text-white transition-colors">Corporate Presentation</h4>
              <p className="text-gray-500 group-hover:text-white/80 mt-3 font-light text-sm transition-colors">Download our latest corporate presentation with project overviews and key data.</p>
              <span className="inline-flex items-center mt-6 text-brand-orange group-hover:text-white font-black uppercase text-xs tracking-widest transition-colors">
                Download PDF <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
            <Link to="/investors/fact-sheet" className="group p-8 md:p-12 bg-gray-50 hover:bg-brand-orange transition-all duration-300 cursor-pointer">
              <Layers size={40} className="text-brand-orange group-hover:text-white mb-6 transition-colors" />
              <h4 className="text-xl font-black uppercase tracking-tight group-hover:text-white transition-colors">Fact Sheet</h4>
              <p className="text-gray-500 group-hover:text-white/80 mt-3 font-light text-sm transition-colors">Company overview, share structure, and project summary in a single page.</p>
              <span className="inline-flex items-center mt-6 text-brand-orange group-hover:text-white font-black uppercase text-xs tracking-widest transition-colors">
                View Details <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* MARKET INTELLIGENCE / STATS */}
      <section className="py-16 md:py-28 lg:py-40 blueprint-grid reveal-up">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            <div className="glass p-6 md:p-10 lg:p-12 space-y-6 hover-lift border-t-2 border-brand-orange transition-all duration-300 hover:border-t-4 group" style={{ transitionDelay: '0ms' }}>
              <Activity className="text-brand-orange group-hover:scale-110 transition-transform" size={40} />
              <h4 className="text-xl font-bold uppercase tracking-tight">Market Position</h4>
              <div className="space-y-4 font-bold">
                <div className="flex justify-between border-b border-white/5 pb-2"><span>TSXV</span><span>PTX</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>Frankfurt</span><span>9PX</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>OTCQB</span><span>PANXF</span></div>
              </div>
            </div>
            <div className="glass p-6 md:p-10 lg:p-12 space-y-6 hover-lift transition-all duration-300 hover:shadow-xl group" style={{ transitionDelay: '100ms' }}>
              <Globe className="text-brand-orange group-hover:scale-110 transition-transform" size={40} />
              <h4 className="text-xl font-bold uppercase tracking-tight">Share Structure</h4>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">As of October 2025</p>
              <div className="space-y-4 text-xs font-bold text-gray-400">
                <div className="flex justify-between"><span>Issued</span><span className="text-white">171.2M</span></div>
                <div className="flex justify-between"><span>Warrants</span><span className="text-white">39.3M</span></div>
                <div className="flex justify-between"><span>Options</span><span className="text-white">8.3M</span></div>
                <div className="flex justify-between text-brand-orange pt-2 border-t border-white/5"><span>Fully Diluted</span><span>218.7M</span></div>
              </div>
            </div>
            <div className="glass p-6 md:p-10 lg:p-12 space-y-6 hover-lift transition-all duration-300 hover:shadow-xl group" style={{ transitionDelay: '200ms' }}>
              <ShieldCheck className="text-brand-orange group-hover:scale-110 transition-transform" size={40} />
              <h4 className="text-xl font-bold uppercase tracking-tight">Governance</h4>
              <ul className="space-y-3 text-sm font-semibold text-gray-300">
                <li><Link to="/management" className="flex items-center hover:text-white transition-colors"><ChevronRight size={14} className="text-brand-orange mr-2" /> Management</Link></li>
                <li><Link to="/board" className="flex items-center hover:text-white transition-colors"><ChevronRight size={14} className="text-brand-orange mr-2" /> Board of Directors</Link></li>
                <li><Link to="/advisors" className="flex items-center hover:text-white transition-colors"><ChevronRight size={14} className="text-brand-orange mr-2" /> Technical Committee</Link></li>
              </ul>
            </div>
            <div className="bg-brand-orange p-6 md:p-10 lg:p-12 space-y-6 flex flex-col justify-center shadow-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(229,100,23,0.6)] hover:-translate-y-1 group" style={{ transitionDelay: '300ms' }}>
              <h4 className="text-2xl font-black uppercase tracking-tighter">Fact Sheet <br /> Feb 2026</h4>
              <p className="text-xs font-bold uppercase tracking-widest text-white/70">Download our latest corporate presentation</p>
              <Link to="/investors/presentations" className="bg-black text-white py-4 font-bold uppercase tracking-widest text-xs flex items-center justify-center hover:bg-brand-dark transition-all group-hover:scale-105">
                Download PDF <Download size={14} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LUXURY SUBSCRIPTION */}
      <section className="bg-brand-orange py-12 md:py-20 lg:py-24 reveal-up">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none">Get the <br /> Drill Data.</h2>
              <p className="text-white/80 mt-4 font-light text-sm leading-relaxed">Direct updates to your terminal. Stay ahead with real-time exploration insights.</p>
            </div>
            <div className="lg:w-2/3 w-full">
              <form
                action="https://ptxmetals.us2.list-manage.com/subscribe/post?u=e0280a0726e88400a5fb6a8b3&amp;id=18a345d216&amp;f_id=00239fe3f0"
                method="post"
                target="_blank"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <input name="FNAME" type="text" placeholder="First Name" className="bg-white/10 border-b-2 border-white/30 text-white placeholder-white/50 p-4 focus:outline-none focus:border-white font-bold transition-all" />
                <input name="EMAIL" type="email" required placeholder="Corporate Email" className="bg-white/10 border-b-2 border-white/30 text-white placeholder-white/50 p-4 focus:outline-none focus:border-white font-bold transition-all" />
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="b_e0280a0726e88400a5fb6a8b3_18a345d216" tabIndex={-1} defaultValue="" />
                </div>
                <button type="submit" className="md:col-span-2 bg-black text-white py-5 font-black uppercase tracking-[0.3em] hover:bg-brand-dark transition-all">
                  Subscribe to Updates
                </button>
              </form>
              <p className="text-white/50 text-xs mt-4 text-center">We respect your privacy. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
