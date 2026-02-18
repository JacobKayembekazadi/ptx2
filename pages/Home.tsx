
import React, { useEffect, useRef } from 'react';
import { Download, ArrowRight, ChevronRight, Zap, Globe, ShieldCheck, Activity, Users, Leaf, PlayCircle, BarChart3, Layers, Target, Database, Radio, Sparkles, MapPin, DollarSign, TrendingUp } from 'lucide-react';
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tighter leading-[0.85] mb-10 hero-line">
            The Gateway to the <br /> <span className="text-brand-orange">Ring of Fire.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12 hero-line">
            100% Canadian-owned. Advancing high-value Copper, Nickel, PGE, and Gold assets in the world-class mining camps of Northern Ontario.
          </p>
          {/* Quick Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 hero-line">
            {[
              { icon: <DollarSign size={16} />, label: 'Market Cap', value: '~$20M' },
              { icon: <TrendingUp size={16} />, label: 'Cash', value: '~$6M' },
              { icon: <ShieldCheck size={16} />, label: 'Debt', value: 'Zero' },
              { icon: <MapPin size={16} />, label: 'Jurisdiction', value: 'Ontario (Tier-1)' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2 glass rounded-full px-4 py-2 border border-white/10">
                <span className="text-brand-orange">{stat.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{stat.label}:</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-white">{stat.value}</span>
              </div>
            ))}
          </div>
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
        <div className="ticker-track flex whitespace-nowrap space-x-20 font-extrabold uppercase text-[11px] tracking-[0.4em]">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="flex space-x-20 items-center">
              <span className="flex items-center"><Zap size={14} className="mr-2" /> TSXV: PTX</span>
              <span className="flex items-center"><Zap size={14} className="mr-2" /> Frankfurt: 9PX</span>
              <span className="flex items-center"><Zap size={14} className="mr-2" /> OTCQB: PANXF</span>
              <span className="flex items-center"><Zap size={14} className="mr-2" /> 100% CANADIAN OWNED</span>
              <span className="flex items-center"><Zap size={14} className="mr-2" /> GATEWAY TO RING OF FIRE</span>
              <span className="flex items-center"><Zap size={14} className="mr-2" /> 135Mt EXPLORATION TARGET</span>
            </div>
          ))}
        </div>
      </section>

      {/* ESG & COMMUNITY IMPACT */}
      <section className="py-40 bg-white text-black reveal-up">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <span className="h-1 w-12 bg-brand-orange"></span>
                <span className="text-brand-orange font-black uppercase text-xs tracking-widest">Responsible Stewardship</span>
              </div>
              <h2 className="text-6xl font-black uppercase tracking-tighter leading-none mb-10">Mining With <br /> <span className="text-brand-orange">Purpose.</span></h2>
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
            <div className="bg-gray-100 rounded-2xl p-12 flex flex-col justify-between overflow-hidden relative">
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
      <section className="py-60 bg-white text-black relative reveal-up overflow-hidden">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 border-t border-black/10 pt-16">
              <div className="space-y-4 group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                <Target size={32} className="mx-auto text-brand-orange group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-xl font-black uppercase text-black">Massive Upside</h4>
                <p className="text-gray-500 text-sm font-light">Targeting district-scale anomalies in the world-class Ring of Fire region.</p>
              </div>
              <div className="space-y-4 group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                <ShieldCheck size={32} className="mx-auto text-brand-orange group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-xl font-black uppercase text-black">Low Risk</h4>
                <p className="text-gray-500 text-sm font-light">Operating in Ontario, one of the safest and most prolific mining jurisdictions globally.</p>
              </div>
              <div className="space-y-4 group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                <Database size={32} className="mx-auto text-brand-orange group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-xl font-black uppercase text-black">Data Driven</h4>
                <p className="text-gray-500 text-sm font-light">Every drill hole is backed by modern high-resolution geophysics and LIDAR mapping.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE COMMODITY MATRIX */}
      <section className="py-40 bg-black relative overflow-hidden reveal-up">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-orange font-black uppercase text-xs tracking-widest mb-4 block">Asset Diversification</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">The Four Pillars of <br /><span className="text-white/40">Future Supply.</span></h2>
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
              { metal: 'Gold', role: 'Store of Value', stat: 'Tier 1 Potential', color: 'border-yellow-600', desc: 'District-scale exposure in the Abitibi, the world\'s premiere gold camp. Proven hedge against economic uncertainty.' }
            ].map((p, i) => (
              <div key={i} className={`group relative p-10 border-t-2 ${p.color} bg-white/5 hover:bg-brand-orange hover:shadow-[0_0_30px_rgba(229,100,23,0.4)] transition-all duration-500 cursor-default h-[350px] flex flex-col justify-between overflow-hidden`} style={{ transitionDelay: `${i * 50}ms` }}>
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
      <section className="py-40 bg-white text-black relative reveal-up">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="flex items-center space-x-4">
                <span className="h-1 w-12 bg-brand-orange"></span>
                <span className="text-brand-orange font-black uppercase text-xs tracking-widest">About PTX Metals</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-black">Discovery <br /> Without Limits.</h2>
              <p className="text-2xl text-gray-600 font-light leading-relaxed">
                PTX Metals is a mineral exploration company focused on high-quality critical minerals projects, situated in northern Ontario—renowned as a <span className="text-black font-bold underline decoration-brand-orange">best-in-class mining jurisdiction</span> with stable governance, proven infrastructure, and a skilled workforce.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-6">
                <div className="group cursor-pointer transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl font-black mb-1 text-black">100%</div>
                  <div className="text-[10px] font-bold uppercase text-gray-400 tracking-widest group-hover:text-brand-orange transition-colors">Ownership of W2 Claims</div>
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
              <img src="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/05/07152333/home-main-bg-3.jpg" className="w-full h-[600px] object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700" alt="Drilling" />
            </div>
          </div>
        </div>
      </section>

      {/* MIND-BLOWING SECTION 2: GEOSCIENCE BLUEPRINT */}
      <section className="py-40 bg-brand-dark relative overflow-hidden reveal-up">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-12">
              <div className="inline-flex items-center px-4 py-2 glass border border-brand-orange/30 rounded-full text-brand-orange text-[10px] font-black uppercase tracking-widest">
                <Layers size={14} className="mr-2" /> New Geological Model
              </div>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">Targeting <br /><span className="text-brand-orange">Deep Value.</span></h2>
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
      <section className="py-40 bg-brand-dark overflow-hidden reveal-up">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">Strategic <span className="text-brand-orange">Milestones</span></h2>
            <p className="text-gray-400 font-light mb-8">A clear path to value creation through methodical exploration and strategic partnerships.</p>
            <Link to="/milestones" className="inline-flex items-center text-brand-orange font-black uppercase text-sm tracking-widest hover:text-white transition-colors group">
              View Full Roadmap <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="relative roadmap-container">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

            <div className="space-y-24">
              {[
                { year: '2024', title: 'Asset Consolidation', desc: 'Completion of strategic claim acquisitions at W2 and formation of the South Timmins JV.', icon: Globe },
                { year: '2025', title: 'Drill Program Launch', desc: 'Mobilization of Cyr Drilling for 5,000m diamond drilling at Central Target.', icon: Activity, active: true },
                { year: '2026', title: 'Resource Expansion', desc: 'Resource modeling and paragenesis study completion for LHIC complex.', icon: BarChart3 }
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

      {/* MISSION CONTROL (DRILL TRACKER) */}
      <section className="py-40 bg-black relative overflow-hidden reveal-up">
        <div className="container mx-auto px-6">
          <div className="glass p-12 rounded-3xl border border-white/5 relative">
            <div className="absolute top-8 right-12 flex items-center space-x-2 text-brand-orange">
              <div className="w-2 h-2 bg-brand-orange rounded-full animate-ping" />
              <div className="w-2 h-2 bg-brand-orange rounded-full absolute left-0" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Live Exploration Feed</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 space-y-8">
                <h3 className="text-4xl font-black uppercase tracking-tighter">Mission <br /><span className="text-brand-orange">Control.</span></h3>
                <p className="text-gray-400 font-light leading-relaxed">Mobilization of Cyr Drilling for 5,000m (2025-2026) diamond drilling campaign at Central Target. Derisking 135Mt Exploration Target toward Mineral Resource. Real-time updates from W2 Project.</p>
                <div className="space-y-4">
                  {[
                    { label: 'Mobilization', status: 'Complete', val: '100%' },
                    { label: 'Central Target Phase 1', status: 'In Progress', val: '22%' },
                    { label: 'Core Logging & Assays', status: 'Queued', val: '0%' }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-2 group cursor-pointer">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                        <span className="text-gray-500 group-hover:text-gray-300 transition-colors">{stat.label}</span>
                        <span className="text-brand-orange group-hover:text-white transition-colors">{stat.status}</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden group-hover:h-1.5 transition-all">
                        <div className="h-full bg-brand-orange transition-all duration-1000 group-hover:shadow-[0_0_10px_rgba(229,100,23,0.8)]" style={{ width: stat.val }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass p-8 bg-brand-orange/5 border-brand-orange/20 flex flex-col justify-between group hover:bg-brand-orange/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <Radio size={32} className="text-brand-orange mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-black uppercase group-hover:text-brand-orange transition-colors">Drill Hole CA1-25</h4>
                  <p className="text-sm text-gray-500 font-light mt-2 mb-6">Targeting high-resolution magnetic anomaly at 450m depth.</p>
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Status: Drilling at 312m</span>
                </div>
                <div className="glass p-8 bg-white/5 border-white/10 flex flex-col justify-between group hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer" style={{ transitionDelay: '50ms' }}>
                  <Database size={32} className="text-gray-400 mb-4 group-hover:scale-110 group-hover:text-white transition-all" />
                  <h4 className="text-xl font-black uppercase group-hover:text-white transition-colors">AP Zone Update</h4>
                  <p className="text-sm text-gray-500 font-light mt-2 mb-6">Secondary rig staging for step-out holes within mineralization envelope.</p>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">Status: Site Prepped</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOARDROOM INSIGHT */}
      <section className="py-40 bg-brand-dark relative overflow-hidden reveal-up">
        <div className="absolute inset-0 z-0 grayscale opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/03/08103739/Ronda-Stripping-5.jpg')" }} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-8">
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">Decades of <span className="text-brand-orange">Expertise.</span></h2>
                <p className="text-2xl text-gray-300 font-light leading-relaxed mb-10">
                  PTX's Management Team, Board of Directors, and Technical Committee bring over 100 years of combined experience in orchestrating multi-billion dollar M&A transactions and leading major gold and base metal discoveries globally.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10 border-t border-white/10 pt-10">
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
                <Link to="/management" className="group w-full aspect-square glass flex flex-col items-center justify-center p-12 hover:bg-brand-orange transition-all">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* W2 Project - LEFT */}
          <div className="relative group overflow-hidden flex items-end p-12 lg:p-24 border-r border-white/5">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105 group-hover:scale-100" style={{ backgroundImage: "url('https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/05/07152333/project1-bg.jpg')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
            <div className="relative z-10 w-full">
              <span className="text-brand-orange font-bold uppercase text-xs tracking-[0.3em] mb-4 block drop-shadow-lg">Gateway to Ring of Fire</span>
              <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none drop-shadow-2xl">W2 Copper <br /> Nickel PGE</h3>
              <p className="text-white max-w-md text-lg font-light mb-6 drop-shadow-lg">Exploration Target: 135Mt @ 0.78% CuEq. 2.3 billion lbs copper equivalent across all metals. 100% owned, open-pit potential.</p>
              <div className="flex items-center gap-3 mb-10">
                <span className="glass text-[10px] font-black uppercase tracking-widest px-3 py-1.5 text-brand-orange border border-brand-orange/30 drop-shadow-lg">Webequie FN Agreement</span>
                <span className="glass text-[10px] font-black uppercase tracking-widest px-3 py-1.5 text-white border border-white/20 drop-shadow-lg">Currently Drilling</span>
              </div>
              <Link to="/projects/w2" className="bg-brand-orange text-white px-10 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl inline-block">Project Specs</Link>
            </div>
          </div>

          {/* South Timmins - RIGHT */}
          <div className="relative group overflow-hidden flex items-end p-12 lg:p-24">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105 group-hover:scale-100" style={{ backgroundImage: "url('https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/05/07152333/project2-bg.jpg')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
            <div className="relative z-10 w-full">
              <span className="text-brand-orange font-bold uppercase text-xs tracking-[0.3em] mb-4 block drop-shadow-lg">Abitibi Gold Belt</span>
              <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none drop-shadow-2xl">South Timmins <br /> Gold Projects</h3>
              <p className="text-white max-w-md text-lg font-light mb-6 drop-shadow-lg">28,000 ha consolidated land package. Direct neighbor to IAMGold Côté Gold (20Moz Au) and Aris Mining Juby (4Moz Au). 75% PTX ownership.</p>
              <div className="flex items-center gap-3 mb-10">
                <span className="glass text-[10px] font-black uppercase tracking-widest px-3 py-1.5 text-white border border-white/20 drop-shadow-lg">5 Mines Within 100km</span>
              </div>
              <Link to="/projects/shining-tree" className="bg-white text-black px-10 py-4 font-black uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all shadow-xl inline-block">Project Specs</Link>
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA DISCOVERY HUB */}
      <section className="py-40 bg-white text-black reveal-up">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-5xl font-black uppercase tracking-tighter leading-none text-black">Investor <span className="text-brand-orange">Insight</span> Hub</h2>
            <Link to="/news" className="inline-flex items-center text-brand-orange font-black uppercase text-xs tracking-widest hover:text-black transition-colors group">
              View All <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { type: 'Presentation', title: 'W2 Drilling Update: Winter 2025 Program', date: 'Jan 15, 2025', img: 'https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/05/07152333/home-main-bg-3.jpg', color: 'bg-brand-orange' },
              { type: 'Podcast', title: 'Critical Minerals in the Ring of Fire Corridor', date: 'Dec 20, 2024', img: 'https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/04/07152334/NW-Ont-W2-Infrastructure-4M-040324.jpg', color: 'bg-blue-600' },
              { type: 'Webinar', title: 'Gold Targets at South Timmins JV', date: 'Nov 05, 2024', img: 'https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/03/08103739/Ronda-Stripping-5.jpg', color: 'bg-green-600' }
            ].map((media, idx) => (
              <div key={idx} className="group cursor-pointer transition-all duration-300 hover:-translate-y-2" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="relative h-[250px] overflow-hidden rounded-2xl mb-6 shadow-lg group-hover:shadow-2xl transition-shadow">
                  <img src={media.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <PlayCircle size={64} className="text-white group-hover:scale-110 group-hover:animate-pulse transition-transform" />
                  </div>
                  <div className={`absolute top-4 left-4 ${media.color} text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded shadow-lg`}>
                    {media.type}
                  </div>
                </div>
                <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">{media.date}</span>
                <h4 className="text-xl font-bold uppercase mt-2 group-hover:text-brand-orange transition-colors">{media.title}</h4>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/news" className="inline-flex items-center bg-brand-orange text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-brand-dark transition-all group">
              View All Media <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* MARKET INTELLIGENCE / STATS */}
      <section className="py-40 blueprint-grid reveal-up">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="glass p-12 space-y-6 hover-lift border-t-2 border-brand-orange transition-all duration-300 hover:border-t-4 group" style={{ transitionDelay: '0ms' }}>
              <Activity className="text-brand-orange group-hover:scale-110 transition-transform" size={40} />
              <h4 className="text-xl font-bold uppercase tracking-tight">Market Position</h4>
              <div className="space-y-4 font-bold">
                <div className="flex justify-between border-b border-white/5 pb-2"><span>TSXV</span><span>PTX</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>Frankfurt</span><span>9PX</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>OTCQB</span><span>PANXF</span></div>
              </div>
            </div>
            <div className="glass p-12 space-y-6 hover-lift transition-all duration-300 hover:shadow-xl group" style={{ transitionDelay: '100ms' }}>
              <Globe className="text-brand-orange group-hover:scale-110 transition-transform" size={40} />
              <h4 className="text-xl font-bold uppercase tracking-tight">Share Structure</h4>
              <div className="space-y-4 text-xs font-bold text-gray-400">
                <div className="flex justify-between"><span>Issued</span><span className="text-white">171.2M</span></div>
                <div className="flex justify-between"><span>Warrants</span><span className="text-white">39.3M</span></div>
                <div className="flex justify-between"><span>Options</span><span className="text-white">8.3M</span></div>
                <div className="flex justify-between text-brand-orange pt-2 border-t border-white/5"><span>Fully Diluted</span><span>218.7M</span></div>
              </div>
            </div>
            <div className="glass p-12 space-y-6 hover-lift transition-all duration-300 hover:shadow-xl group" style={{ transitionDelay: '200ms' }}>
              <ShieldCheck className="text-brand-orange group-hover:scale-110 transition-transform" size={40} />
              <h4 className="text-xl font-bold uppercase tracking-tight">Governance</h4>
              <ul className="space-y-3 text-sm font-semibold text-gray-300">
                <li><Link to="/management" className="flex items-center hover:text-white transition-colors"><ChevronRight size={14} className="text-brand-orange mr-2" /> Management</Link></li>
                <li><Link to="/board" className="flex items-center hover:text-white transition-colors"><ChevronRight size={14} className="text-brand-orange mr-2" /> Board of Directors</Link></li>
                <li><Link to="/advisors" className="flex items-center hover:text-white transition-colors"><ChevronRight size={14} className="text-brand-orange mr-2" /> Technical Committee</Link></li>
              </ul>
            </div>
            <div className="bg-brand-orange p-12 space-y-6 flex flex-col justify-center shadow-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(229,100,23,0.6)] hover:-translate-y-1 group" style={{ transitionDelay: '300ms' }}>
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
      <section className="bg-brand-orange py-24 reveal-up">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-5xl font-black uppercase tracking-tighter text-white leading-none">Get the <br /> Drill Data.</h2>
              <p className="text-white/80 mt-4 font-light text-sm leading-relaxed">Direct updates to your terminal. Stay ahead with real-time exploration insights.</p>
            </div>
            <div className="lg:w-2/3 w-full">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" className="bg-white/10 border-b-2 border-white/30 text-white placeholder-white/50 p-4 focus:outline-none focus:border-white font-bold transition-all" />
                <input type="email" placeholder="Corporate Email" className="bg-white/10 border-b-2 border-white/30 text-white placeholder-white/50 p-4 focus:outline-none focus:border-white font-bold transition-all" />
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
