
import React, { useEffect, useRef } from 'react';
import { Twitter, Facebook, Linkedin, Download, ArrowRight, ExternalLink, ChevronRight, Zap, Globe, ShieldCheck, Activity, Award, Users, Leaf, PlayCircle, BarChart3, Clock, Layers, Target, Database, Radio, Sparkles, Cpu } from 'lucide-react';
import { useNavigation } from '../components/NavigationContext';
import MineralBackground from '../components/MineralBackground';

declare const gsap: any;
declare const ScrollTrigger: any;

const Home: React.FC = () => {
  const { navigateTo } = useNavigation();
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
            <span className="text-[10px] font-extrabold uppercase tracking-[0.3em]">TSXV: PTX | OTCQB: PANXF</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tighter leading-[0.85] mb-10 hero-line">
            The New Era of <br/> <span className="text-brand-orange">Critical Discovery.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12 hero-line">
            Strategically advancing high-yield Copper, Nickel, and Gold assets in the world-class mining camps of Northern Ontario.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 hero-line">
            <button onClick={() => navigateTo('projects-w2')} className="bg-brand-orange text-white px-12 py-5 font-extrabold uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[0_0_50px_rgba(229,100,23,0.3)]">
                Explore Flagship Projects
            </button>
            <button onClick={() => navigateTo('investors')} className="glass px-12 py-5 font-extrabold uppercase tracking-widest hover:bg-brand-orange/10 transition-all">
                Investor Center
            </button>
          </div>
        </div>
      </section>

      {/* GLOBAL TICKER BAR */}
      <section className="bg-brand-orange py-4 border-y border-white/10 overflow-hidden relative z-20">
        <div className="ticker-track flex whitespace-nowrap space-x-20 font-extrabold uppercase text-[11px] tracking-[0.4em]">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="flex space-x-20 items-center">
                <span className="flex items-center"><Zap size={14} className="mr-2"/> TSXV: PTX</span>
                <span className="flex items-center"><Zap size={14} className="mr-2"/> Frankfurt: 9PX</span>
                <span className="flex items-center"><Zap size={14} className="mr-2"/> OTCQB: PANXF</span>
                <span className="flex items-center"><Zap size={14} className="mr-2"/> RING OF FIRE: W2 PROJECT</span>
                <span className="flex items-center"><Zap size={14} className="mr-2"/> ABITIBI: SOUTH TIMMINS JV</span>
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
              <h2 className="text-6xl font-black uppercase tracking-tighter leading-none mb-10">Mining With <br/> <span className="text-brand-orange">Integrity.</span></h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <Users className="text-brand-orange" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-tight text-lg">First Nations Partnership</h4>
                    <p className="text-gray-500 mt-1">Deep collaboration with Webequie First Nation (WFN) for support services and shared prosperity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <Leaf className="text-brand-orange" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-tight text-lg">Environmental Oversight</h4>
                    <p className="text-gray-500 mt-1">LIDAR orthophoto surveys and paragenesis studies to minimize footprint and maximize data efficiency.</p>
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
                  "Our goal is not just to discover minerals, but to build a legacy of responsible development that benefits all stakeholders in Northern Ontario."
                </p>
                <div className="mt-8">
                  <span className="font-black uppercase tracking-widest text-sm">Greg Ferron</span>
                  <span className="block text-gray-400 text-xs font-bold uppercase tracking-widest">CEO, PTX Metals</span>
                </div>
              </div>
              <button className="mt-12 bg-brand-dark text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-brand-orange transition-all w-fit">
                View ESG Policy
              </button>
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
              Major scale potential. <br/>
              <span className="text-brand-orange">Tier 1 jurisdictions.</span> <br/>
              Expert capital allocation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 border-t border-black/10 pt-16">
              <div className="space-y-4">
                <Target size={32} className="mx-auto text-brand-orange" />
                <h4 className="text-xl font-black uppercase">Massive Upside</h4>
                <p className="text-gray-500 text-sm font-light">Targeting district-scale anomalies in the world-class Ring of Fire region.</p>
              </div>
              <div className="space-y-4">
                <ShieldCheck size={32} className="mx-auto text-brand-orange" />
                <h4 className="text-xl font-black uppercase">Low Risk</h4>
                <p className="text-gray-500 text-sm font-light">Operating in Ontario, one of the safest and most prolific mining jurisdictions globally.</p>
              </div>
              <div className="space-y-4">
                <Database size={32} className="mx-auto text-brand-orange" />
                <h4 className="text-xl font-black uppercase">Data Driven</h4>
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
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">The Four Pillars of <br/><span className="text-white/40">Future Supply.</span></h2>
            </div>
            <p className="md:max-w-xs text-gray-500 font-light text-sm leading-relaxed">
              Strategically positioned across the most vital mineral categories required for global electrification and value preservation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { metal: 'Copper', role: 'Electrification', stat: 'Critical Shortage', color: 'border-orange-500', desc: 'The backbone of global EV infrastructure and renewable energy grids.' },
              { metal: 'Nickel', role: 'Energy Storage', stat: 'Class 1 Focus', color: 'border-gray-500', desc: 'Essential component for high-performance battery cathodes.' },
              { metal: 'PGEs', role: 'Industrial Tech', stat: 'Rare Discovery', color: 'border-white', desc: 'Critical for catalytic converters and green hydrogen production.' },
              { metal: 'Gold', role: 'Store of Value', stat: 'Tier 1 Potential', color: 'border-yellow-600', desc: 'District-scale exposure in the Abitibi, the world\'s premiere gold camp.' }
            ].map((p, i) => (
              <div key={i} className={`group relative p-10 border-t-2 ${p.color} bg-white/5 hover:bg-brand-orange transition-all duration-500 cursor-default h-[350px] flex flex-col justify-between overflow-hidden`}>
                <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Sparkles size={180} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 group-hover:text-white/70">{p.role}</span>
                  <h4 className="text-4xl font-black uppercase mt-2 group-hover:text-white">{p.metal}</h4>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-gray-400 group-hover:text-white/80 leading-relaxed font-light">{p.desc}</p>
                  <div className="flex items-center text-brand-orange group-hover:text-white font-black text-xs uppercase tracking-widest">
                    {p.stat} <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
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
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">Discovery <br/> Without Limits.</h2>
                <p className="text-2xl text-gray-600 font-light leading-relaxed">
                    PTX Metals is a mineral exploration company focused on high-quality critical minerals projects, situated in northern Ontario—renowned as a <span className="text-black font-bold underline decoration-brand-orange">world-class mining jurisdiction</span>.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6">
                    <div>
                        <div className="text-4xl font-black mb-1">100%</div>
                        <div className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Ownership of W2 Claims</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black mb-1">5,000m</div>
                        <div className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">2025 Drill Program</div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="absolute inset-0 bg-brand-orange translate-x-4 translate-y-4 -z-10"></div>
                <img src="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/05/07152333/home-main-bg-3.jpg" className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Drilling" />
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
                <Cpu size={14} className="mr-2" /> Lansdowne House Geoscience
              </div>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">Targeting <br/><span className="text-brand-orange">Deep Value.</span></h2>
              <p className="text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
                Utilizing high-resolution 3D magnetic inversion modeling and Maxwell Plate geophysics to guide our 5,000m diamond drilling campaign. We are testing interpreted massive sulphide zones never before reached.
              </p>
              <div className="flex gap-4">
                <div className="p-6 glass border-l-2 border-brand-orange rounded-r-xl">
                  <h5 className="text-brand-orange font-black uppercase text-xs mb-2">Central Target</h5>
                  <p className="text-lg font-bold">5,000m Drill Scope</p>
                </div>
                <div className="p-6 glass border-l-2 border-brand-orange rounded-r-xl">
                  <h5 className="text-brand-orange font-black uppercase text-xs mb-2">Structural Regime</h5>
                  <p className="text-lg font-bold">3D Inversion Verified</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 p-4 glass rounded-3xl overflow-hidden border border-white/10 blueprint-float">
                <img src="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2025/12/01070922/Picture1-FINAL-1.png" className="w-full rounded-2xl grayscale brightness-125 contrast-125 mix-blend-screen" alt="Geophysics" />
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
            <p className="text-gray-400 font-light">A clear path to value creation through methodical exploration and strategic partnerships.</p>
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
                  <div className="flex-1 text-center md:text-right roadmap-node">
                    <div className={idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}>
                      <span className={`text-4xl font-black ${step.active ? 'text-brand-orange' : 'text-white/20'}`}>{step.year}</span>
                      <h4 className="text-xl font-bold uppercase mt-2">{step.title}</h4>
                      <p className="text-gray-500 mt-2 max-w-sm mx-auto md:mx-0">{step.desc}</p>
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
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Live Exploration Feed</span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 space-y-8">
                <h3 className="text-4xl font-black uppercase tracking-tighter">Mission <br/><span className="text-brand-orange">Control.</span></h3>
                <p className="text-gray-400 font-light leading-relaxed">Active status of the 2025 W2 Diamond Drill Program. Real-time updates from the Lansdowne House Camp.</p>
                <div className="space-y-4">
                  {[
                    { label: 'Mobilization', status: 'Complete', val: '100%' },
                    { label: 'Central Target Phase 1', status: 'In Progress', val: '22%' },
                    { label: 'Core Logging & Assays', status: 'Queued', val: '0%' }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                        <span className="text-gray-500">{stat.label}</span>
                        <span className="text-brand-orange">{stat.status}</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-orange transition-all duration-1000" style={{ width: stat.val }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass p-8 bg-brand-orange/5 border-brand-orange/20 flex flex-col justify-between group hover:bg-brand-orange/10 transition-all">
                  <Radio size={32} className="text-brand-orange mb-4" />
                  <h4 className="text-xl font-black uppercase">Drill Hole CA1-25</h4>
                  <p className="text-sm text-gray-500 font-light mt-2 mb-6">Targeting high-resolution magnetic anomaly at 450m depth.</p>
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Status: Drilling at 312m</span>
                </div>
                <div className="glass p-8 bg-white/5 border-white/10 flex flex-col justify-between group hover:bg-white/10 transition-all">
                  <Database size={32} className="text-gray-400 mb-4" />
                  <h4 className="text-xl font-black uppercase">AP Zone Update</h4>
                  <p className="text-sm text-gray-500 font-light mt-2 mb-6">Secondary rig staging for step-out holes within mineralization envelope.</p>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Status: Site Prepped</span>
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
                  PTX's management team has orchestrated multi-billion dollar M&A transactions and led major gold and base metal discoveries globally.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10 border-t border-white/10 pt-10">
                  <div>
                    <div className="text-4xl font-black text-brand-orange mb-1">20+</div>
                    <div className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">Years CEO Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-brand-orange mb-1">$30B+</div>
                    <div className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">M&A Involvement</div>
                  </div>
                  <div className="hidden md:block">
                    <div className="text-4xl font-black text-brand-orange mb-1">100+</div>
                    <div className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">Combined Mining Tenure</div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4">
                <button onClick={() => navigateTo('management')} className="group w-full aspect-square glass flex flex-col items-center justify-center p-12 hover:bg-brand-orange transition-all">
                  <Users size={48} className="mb-6 text-brand-orange group-hover:text-white transition-colors" />
                  <span className="text-center font-black uppercase tracking-widest text-sm">Meet the Executive Team</span>
                  <ArrowRight className="mt-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLAGSHIP PROJECTS GRID */}
      <section className="reveal-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            <div className="relative group overflow-hidden flex items-end p-12 lg:p-24 border-r border-white/5">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105 group-hover:scale-100" style={{ backgroundImage: "url('https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/05/07152333/project2-bg.jpg')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="relative z-10 w-full">
                    <span className="text-brand-orange font-bold uppercase text-xs tracking-[0.3em] mb-4 block">Abitibi Gold Belt</span>
                    <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">South Timmins <br/> Mining JV</h3>
                    <p className="text-gray-300 max-w-md text-lg font-light mb-10">Strategic gold exposure through Shining Tree and Heenan Mallard projects in a Tier 1 jurisdiction.</p>
                    <button onClick={() => navigateTo('projects-shining')} className="bg-white text-black px-10 py-4 font-black uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all">Project Specs</button>
                </div>
            </div>
            <div className="relative group overflow-hidden flex items-end p-12 lg:p-24">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105 group-hover:scale-100" style={{ backgroundImage: "url('https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/05/07152333/project1-bg.jpg')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-orange/40 via-[#e56417]/20 to-transparent"></div>
                <div className="relative z-10 w-full">
                    <span className="text-white font-bold uppercase text-xs tracking-[0.3em] mb-4 block">Ring of Fire Proximity</span>
                    <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">W2 Copper <br/> Nickel PGE</h3>
                    <p className="text-white/80 max-w-md text-lg font-light mb-10">Large scale potential 50km from the Ring of Fire. Massive sulphide targets in the Lansdowne Complex.</p>
                    <button onClick={() => navigateTo('projects-w2')} className="bg-brand-dark text-white px-10 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Project Specs</button>
                </div>
            </div>
        </div>
      </section>

      {/* MEDIA DISCOVERY HUB */}
      <section className="py-40 bg-white text-black reveal-up">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-5xl font-black uppercase tracking-tighter leading-none">Investor <span className="text-brand-orange">Insight</span> Hub</h2>
            <div className="flex gap-4">
              <button className="p-3 border border-black rounded-full hover:bg-black hover:text-white transition-all"><ArrowRight size={20} className="rotate-180"/></button>
              <button className="p-3 border border-black rounded-full hover:bg-black hover:text-white transition-all"><ArrowRight size={20}/></button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { type: 'Presentation', title: 'W2 Drilling Update: Winter 2025 Program', date: 'Jan 15, 2026', img: 'https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/05/07152333/home-main-bg-3.jpg' },
              { type: 'Podcast', title: 'Critical Minerals in the Ring of Fire Corridor', date: 'Dec 20, 2025', img: 'https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/04/07152334/NW-Ont-W2-Infrastructure-4M-040324.jpg' },
              { type: 'Webinar', title: 'Gold Targets at South Timmins JV', date: 'Nov 05, 2025', img: 'https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/03/08103739/Ronda-Stripping-5.jpg' }
            ].map((media, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-[250px] overflow-hidden rounded-2xl mb-6">
                  <img src={media.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <PlayCircle size={64} className="text-white" />
                  </div>
                  <div className="absolute top-4 left-4 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                    {media.type}
                  </div>
                </div>
                <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">{media.date}</span>
                <h4 className="text-xl font-bold uppercase mt-2 group-hover:text-brand-orange transition-colors">{media.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKET INTELLIGENCE / STATS */}
      <section className="py-40 blueprint-grid reveal-up">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                <div className="glass p-12 space-y-6 hover-lift border-t-2 border-brand-orange">
                    <Activity className="text-brand-orange" size={40} />
                    <h4 className="text-xl font-bold uppercase tracking-tight">Market Position</h4>
                    <div className="space-y-4 font-bold">
                        <div className="flex justify-between border-b border-white/5 pb-2"><span>TSXV</span><span>PTX</span></div>
                        <div className="flex justify-between border-b border-white/5 pb-2"><span>Frankfurt</span><span>9PX</span></div>
                        <div className="flex justify-between border-b border-white/5 pb-2"><span>OTCQB</span><span>PANXF</span></div>
                    </div>
                </div>
                <div className="glass p-12 space-y-6 hover-lift">
                    <Globe className="text-brand-orange" size={40} />
                    <h4 className="text-xl font-bold uppercase tracking-tight">Share Structure</h4>
                    <div className="space-y-4 text-xs font-bold text-gray-400">
                        <div className="flex justify-between"><span>Issued</span><span className="text-white">118.7M</span></div>
                        <div className="flex justify-between"><span>Warrants</span><span className="text-white">17.3M</span></div>
                        <div className="flex justify-between"><span>Options</span><span className="text-white">9.4M</span></div>
                        <div className="flex justify-between text-brand-orange pt-2 border-t border-white/5"><span>Fully Diluted</span><span>145.5M</span></div>
                    </div>
                </div>
                <div className="glass p-12 space-y-6 hover-lift">
                    <ShieldCheck className="text-brand-orange" size={40} />
                    <h4 className="text-xl font-bold uppercase tracking-tight">Governance</h4>
                    <ul className="space-y-3 text-sm font-semibold text-gray-300">
                        <li className="flex items-center"><ChevronRight size={14} className="text-brand-orange mr-2"/> Management</li>
                        <li className="flex items-center"><ChevronRight size={14} className="text-brand-orange mr-2"/> Board of Directors</li>
                        <li className="flex items-center"><ChevronRight size={14} className="text-brand-orange mr-2"/> Tech Advisors</li>
                    </ul>
                </div>
                <div className="bg-brand-orange p-12 space-y-6 flex flex-col justify-center shadow-2xl">
                    <h4 className="text-2xl font-black uppercase tracking-tighter">Fact Sheet <br/> 2025</h4>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/70">Download our current corporate overview</p>
                    <button className="bg-black text-white py-4 font-bold uppercase tracking-widest text-xs flex items-center justify-center hover:bg-brand-dark transition-all">
                        Download PDF <Download size={14} className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* LUXURY SUBSCRIPTION */}
      <section className="bg-brand-orange py-24 reveal-up">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
                <h2 className="text-5xl font-black uppercase tracking-tighter text-white leading-none">Get the <br/> Drill Data.</h2>
                <p className="text-white/60 mt-4 font-bold uppercase text-xs tracking-widest">Direct updates to your terminal.</p>
            </div>
            <div className="lg:w-2/3 w-full">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="First Name" className="bg-white/10 border-b-2 border-white/30 text-white placeholder-white/50 p-4 focus:outline-none focus:border-white font-bold transition-all" />
                    <input type="email" placeholder="Corporate Email" className="bg-white/10 border-b-2 border-white/30 text-white placeholder-white/50 p-4 focus:outline-none focus:border-white font-bold transition-all" />
                    <button className="md:col-span-2 bg-black text-white py-5 font-black uppercase tracking-[0.3em] hover:bg-brand-dark transition-all">
                        Subscribe to Updates
                    </button>
                </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
