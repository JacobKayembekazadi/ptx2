
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Download, MapPin, Layers, History, Shield, FileText, PlayCircle, TrendingUp,
  Coins, Compass, Globe2, Target, BarChart3, Pickaxe, ChevronRight, Zap,
  FlaskConical, ArrowRight, Mountain, Gem, Clock, CheckCircle2, AlertCircle,
  Atom, DollarSign
} from 'lucide-react';

// ─── PROJECTS OVERVIEW ───────────────────────────────────────────────────────

export const ProjectsOverview: React.FC = () => {
  const projects = [
    {
      title: "W2 Cu-Ni-PGE Project",
      location: "Ring of Fire, Ontario",
      desc: "22,700+ hectare land package. Exploration Target of 60-135Mt @ 0.5-0.78% CuEq*. Currently drilling 5,000m program.",
      path: "/projects/w2",
      image: "https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2025/10/08180223/2025-03-11-12-15-46-831.png",
      highlight: "Flagship Asset",
      color: "from-brand-orange to-orange-600",
      stats: ['60-135Mt Target*', '22,700+ ha', 'Drilling Active'],
    },
    {
      title: "Shining Tree Gold",
      location: "Abitibi Greenstone Belt",
      desc: "28,000 ha consolidated land package in the South Timmins Mining JV. Direct neighbor to IAMGOLD's Côté Gold Mine.",
      path: "/projects/shining-tree",
      image: "https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/04/05104654/STJV-PTX-FNC-Neighbours-265k-no-nameplate-legend-LS-010624-scaled.jpg",
      highlight: "Major Consolidation",
      color: "from-yellow-500 to-amber-600",
      stats: ['28,000 ha', '75% PTX', '5 Nearby Mines'],
    },
    {
      title: "Heenan-Mallard Gold",
      location: "Swayze Greenstone Belt",
      desc: "High-grade gold discovery at surface. Located 45km from Côté Gold Mine. Part of South Timmins JV.",
      path: "/projects/heenan",
      image: "https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/03/08103739/Ronda-Stripping-5.jpg",
      highlight: "New Discovery",
      color: "from-emerald-500 to-green-600",
      stats: ['4.05 g/t Surface', '45km to Côté', 'JV 75/25'],
    },
    {
      title: "Royalty Portfolio",
      location: "Global Assets",
      desc: "Portfolio of NSR royalties and equity positions including a 52% stake in Green Canada Co. (Uranium).",
      path: "/projects/royalty",
      image: "https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/01/16170408/projects-bg.jpg",
      highlight: "Non-Dilutive Value",
      color: "from-blue-500 to-indigo-600",
      stats: ['52% Green Canada', '7 NSR Royalties', 'Global Reach'],
    }
  ];

  return (
    <div className="bg-gray-50 text-black min-h-screen">
      {/* Hero */}
      <div className="relative h-[75vh] min-h-[400px] md:min-h-[600px] w-full flex items-end pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2025/10/08180223/2025-03-11-12-15-46-831.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-transparent to-transparent" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(229,100,23,0.06) 1px, transparent 0)', backgroundSize: '30px 30px' }} />

        <div className="container relative mx-auto px-6 z-10">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-6">
              <span className="bg-brand-orange/20 backdrop-blur-sm text-brand-orange text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-brand-orange/30">
                <Mountain size={12} className="inline mr-2 -mt-0.5" />
                Project Portfolio
              </span>
              <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">Northern Ontario, Canada</span>
            </div>
            <div className="border-l-4 border-brand-orange pl-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.95] mb-6">
                Tier-1 Assets in<br />
                <span className="text-brand-orange">World-Class</span> Jurisdictions
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
                Cu-Ni-PGE and gold projects anchored by the district-scale W2 Project at the gateway to the Ring of Fire, plus consolidated South Timmins gold assets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { value: '4', label: 'Active Projects', icon: Target },
              { value: '50,000+', label: 'Hectares', icon: MapPin },
              { value: '60-135Mt', label: 'W2 Target*', icon: Gem },
              { value: '7+', label: 'NSR Royalties', icon: Coins },
            ].map((s, i) => (
              <div key={i} className="py-8 px-6 text-center">
                <s.icon size={18} className="text-brand-orange mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-black text-gray-900">{s.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Cards */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <Link
              key={i}
              to={project.path}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-brand-orange/20 shadow-sm hover:shadow-2xl hover:shadow-brand-orange/5 transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className={`bg-gradient-to-r ${project.color} text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg`}>
                    {project.highlight}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex gap-2">
                  {project.stats.map((stat, j) => (
                    <span key={j} className="bg-black/40 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10">
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-2 mb-3 text-brand-orange">
                  <MapPin size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{project.location}</span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-3 text-gray-900 group-hover:text-brand-orange transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-6">{project.desc}</p>
                <div className="flex items-center text-brand-orange font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Explore Project <ArrowRight size={14} className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-6 pb-24">
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-3xl overflow-hidden p-6 md:p-16 text-center">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(229,100,23,0.08) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px]" />
          <div className="relative z-10">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">
              Interested in Our Portfolio?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              View our latest corporate presentation or contact investor relations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/investors/presentations" className="inline-flex items-center bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-orange-600 transition-colors">
                Corporate Presentation <ArrowRight size={14} className="ml-2" />
              </Link>
              <Link to="/contact" className="inline-flex items-center bg-white/10 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-colors border border-white/10">
                Contact IR <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-[11px] text-gray-400 mt-6 leading-relaxed max-w-4xl">
          * The Exploration Target is conceptual in nature. The potential quantity and grade is conceptual and there has been insufficient exploration to define a mineral resource. It is uncertain if further exploration will result in the target being delineated as a mineral resource. See the <Link to="/investors/cautionary" className="text-brand-orange hover:underline">Cautionary Notes</Link> page for full disclosure. Neighbouring project resources cited are as reported by their respective operators and are not indicative of mineralization on PTX properties.
        </p>
      </div>
    </div>
  );
};

// ─── W2 PROJECT ──────────────────────────────────────────────────────────────

export const ProjectW2: React.FC = () => {
  return (
    <div className="bg-gray-50 text-black min-h-screen">
      {/* Hero */}
      <div className="relative h-[70vh] min-h-[350px] md:min-h-[550px] w-full flex items-end pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2025/10/08180223/2025-03-11-12-15-46-831.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-transparent to-transparent" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(229,100,23,0.07) 1px, transparent 0)', backgroundSize: '30px 30px' }} />

        <div className="container relative mx-auto px-6 z-10">
          <Link to="/projects" className="inline-flex items-center text-white/60 hover:text-brand-orange transition-colors font-bold uppercase text-[10px] tracking-[0.2em] mb-6 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-brand-orange/50">
            <ChevronRight size={12} className="mr-1 rotate-180" /> All Projects
          </Link>
          <div className="max-w-4xl border-l-4 border-brand-orange pl-8">
            <div className="flex items-center flex-wrap gap-3 mb-4">
              <span className="bg-brand-orange/20 backdrop-blur-sm text-brand-orange text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-brand-orange/30">
                <Gem size={12} className="inline mr-2 -mt-0.5" />
                Flagship Asset
              </span>
              <span className="bg-green-500/20 backdrop-blur-sm text-green-400 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-green-500/30 flex items-center">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Currently Drilling
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.95] mb-4">
              W2 <span className="text-brand-orange">Cu-Ni-PGE</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
              Gateway to the Ring of Fire — 60-135Mt Exploration Target* across 22,700+ hectares.
            </p>
          </div>
        </div>
      </div>

      {/* Key Metrics Bar */}
      <div className="bg-white border-b border-gray-100 shadow-sm sticky top-[80px] z-40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 md:grid-cols-6 divide-x divide-gray-100">
            {[
              { value: '60-135Mt', label: 'Target*' },
              { value: '0.5-0.78%', label: 'CuEq' },
              { value: 'Up to 2.3B lbs', label: 'Cu Equiv' },
              { value: '22,700 ha', label: 'Land' },
              { value: 'Active', label: 'Status' },
              { value: '5,000m', label: 'Drilling' },
            ].map((m, i) => (
              <div key={i} className="py-4 px-3 text-center">
                <div className="text-lg md:text-xl font-black text-gray-900">{m.value}</div>
                <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 space-y-24">
        {/* Video Hero */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
          <video
            className="w-full h-full object-cover"
            autoPlay muted loop playsInline
            src="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2025/10/08180842/W225-10_Video-1.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/20 flex flex-col items-center justify-center text-center p-8">
            <div className="p-5 rounded-full bg-brand-orange/90 text-white mb-4 shadow-lg shadow-brand-orange/30">
              <PlayCircle size={48} />
            </div>
            <h2 className="text-white text-3xl font-black uppercase tracking-tighter mb-2">Discovery in Motion</h2>
            <p className="text-white/70 max-w-lg font-light">Visualizing high-priority targets within the W2 Cu-Ni-PGE Property.</p>
          </div>
        </div>

        {/* Key Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-black uppercase tracking-tight mb-5 text-gray-900 flex items-center gap-3">
              <Target size={20} className="text-brand-orange" /> Target Commodities
            </h3>
            <ul className="space-y-3">
              {['Copper-Nickel', 'PGEs (Platinum Group Elements)', 'Gold & Cobalt'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-600 font-medium">
                  <span className="w-2 h-2 bg-brand-orange rounded-full mr-3 flex-shrink-0"></span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl text-white">
            <h3 className="font-black uppercase tracking-tight mb-5 text-brand-orange flex items-center gap-3">
              <MapPin size={20} /> Land Position
            </h3>
            <div className="space-y-4 text-sm">
              <div><span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Operator</span><p className="font-bold text-gray-200">PTX Metals Corp.</p></div>
              <div><span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Total Area</span><p className="font-bold text-gray-200">&gt;22,700 Hectares</p></div>
              <div><span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Jurisdiction</span><p className="font-bold text-gray-200">Ring of Fire, Ontario</p></div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl text-white">
            <h3 className="font-black uppercase tracking-tight mb-5 text-brand-orange flex items-center gap-3">
              <Shield size={20} /> Community
            </h3>
            <div className="space-y-4 text-sm">
              <div><span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">First Nations</span><p className="font-bold text-gray-200">Cooperation Agreement with Webequie FN (Dec 2025)</p></div>
              <div><span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Status</span><p className="font-bold text-gray-200">Currently Drilling — 5,000m Program</p></div>
            </div>
          </div>
        </div>

        {/* Exploration Target */}
        <section>
          <div className="flex items-center space-x-4 mb-8">
            <span className="h-px w-12 bg-brand-orange"></span>
            <span className="text-brand-orange font-black uppercase text-[10px] tracking-[0.2em]">Exploration Target</span>
          </div>
          <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {[
                { value: '60-135Mt', sub: '@ 0.5-0.78% CuEq (0.5% Cut-off)' },
                { value: 'Up to 2.3B lbs', sub: 'Copper Equivalent (All Metals)' },
                { value: 'Near Surface', sub: 'Shallow Geometry Identified' },
              ].map((t, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-black text-brand-orange">{t.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">{t.sub}</div>
                </div>
              ))}
            </div>
            <h4 className="font-black uppercase text-xs tracking-widest text-gray-500 mb-4">Grade Breakdown (0.50% CuEq Cut-off)</h4>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {[
                { metal: 'Cu', grade: '0.22%' },
                { metal: 'Ni', grade: '0.18%' },
                { metal: 'Co', grade: '0.016%' },
                { metal: 'Au', grade: '0.07 g/t' },
                { metal: 'Pt', grade: '0.11 g/t' },
                { metal: 'Pd', grade: '0.28 g/t' },
              ].map((m, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100">
                  <div className="text-lg font-black text-brand-orange">{m.grade}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">{m.metal}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { zone: 'CA1 Zone', lbs: '688M lbs Cu+Ni', oz: '0.68 Moz Au+Pt+Pd' },
              { zone: 'CA2 Zone', lbs: '82M lbs Cu+Ni', oz: '0.13 Moz Au+Pt+Pd' },
              { zone: 'AP East', lbs: '718M lbs Cu+Ni', oz: '1.1 Moz Au+Pt+Pd' },
            ].map((z, i) => (
              <div key={i} className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                <h4 className="font-black uppercase text-sm tracking-tight text-brand-orange mb-2">{z.zone}</h4>
                <p className="text-sm font-bold text-gray-700">{z.lbs}</p>
                <p className="text-sm font-bold text-gray-500">{z.oz}</p>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-gray-400 mt-6 leading-relaxed max-w-4xl">The potential grade and tonnage of the exploration target model is conceptual in nature. More work and information, including drilling, are required before fulfilling CIM requirements for the disclosure of an eventual mineral resource. It is uncertain if further exploration will result in the Exploration Target being delineated as a Mineral Resource.</p>
        </section>

        {/* 2025 Drilling Highlights */}
        <section>
          <div className="flex items-center space-x-4 mb-8">
            <span className="h-px w-12 bg-brand-orange"></span>
            <span className="text-brand-orange font-black uppercase text-[10px] tracking-[0.2em]">2025 Drilling Highlights</span>
          </div>
          <div className="space-y-4">
            {[
              { hole: 'W225-09', result: '93.8m @ 0.74% CuEq', incl: 'incl. 46m @ 1.08% CuEq', note: 'PTX 2025' },
              { hole: 'W225-10', result: '220.14m @ 0.55% CuEq', incl: 'incl. 7m @ 1.03% CuEq', note: 'PTX 2025' },
              { hole: 'W225-14', result: 'Step out 200m north — hit mineralization', incl: '', note: 'Expansion' },
            ].map((d, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-brand-orange">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-black uppercase text-sm tracking-tight">{d.hole}</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{d.note}</span>
                </div>
                <p className="text-lg font-bold text-gray-800">{d.result}</p>
                {d.incl && <p className="text-sm font-bold text-brand-orange mt-1">{d.incl}</p>}
              </div>
            ))}
          </div>
          <div className="mt-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl">
            <h4 className="font-black uppercase text-xs tracking-widest text-brand-orange mb-4">Historical High-Grade Intercepts</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div><span className="font-bold text-gray-200">46.6m @ 1.75% CuEq</span> <span className="text-gray-500">(Historic)</span></div>
              <div><span className="font-bold text-gray-200">61m @ 1.03% CuEq</span> <span className="text-gray-500">incl. 13.5m @ 2.37%</span></div>
              <div><span className="font-bold text-gray-200">62m @ 0.88% CuEq</span> <span className="text-gray-500">incl. 16m @ 1.75%</span></div>
            </div>
          </div>
        </section>

        {/* Location & Geology */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <MapPin size={20} className="text-brand-orange" />
              <h3 className="text-xl font-black uppercase tracking-tight">Location & Access</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              W2 is uniquely positioned closer to existing infrastructure than many Ring of Fire projects, located approximately 475 km northeast of Thunder Bay. Existing access via established winter road from Pickle Lake. Road studies underway to convert to all-season access.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Layers size={20} className="text-brand-orange" />
              <h3 className="text-xl font-black uppercase tracking-tight">Geology</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              The W2 Project covers a layered mafic-ultramafic intrusive complex — highly prospective for Cu-Ni and reef-type PGE deposits. Past exploration totaling ~$25M by Inco, KWG, and Aurora Platinum with ~20,000m of drilling.
            </p>
          </div>
        </div>

        {/* Strategy */}
        <section>
          <div className="flex items-center space-x-4 mb-8">
            <span className="h-px w-12 bg-brand-orange"></span>
            <span className="text-brand-orange font-black uppercase text-[10px] tracking-[0.2em]">Big Picture Strategy</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { num: '01', text: 'Expansion drilling to test large tonnage near-surface potential with step-out and confirmation drilling' },
              { num: '02', text: 'Target massive sulphide zones — historical grab samples returned up to 14% Cu, 11 g/t Au, 2% Ni, 4 g/t PGEs (not representative of bulk mineralization)' },
              { num: '03', text: 'Three-tiered exploration: confirmation → expansion → regional discovery' },
              { num: '04', text: 'Exit strategy as camp develops further with infrastructure and road access' },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-5 p-6 bg-white rounded-xl border border-gray-100 shadow-sm group hover:border-brand-orange/20 transition-all">
                <span className="text-3xl font-black text-brand-orange/30 group-hover:text-brand-orange transition-colors">{s.num}</span>
                <p className="text-gray-600 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Work Program */}
        <section>
          <div className="flex items-center space-x-4 mb-8">
            <span className="h-px w-12 bg-brand-orange"></span>
            <span className="text-brand-orange font-black uppercase text-[10px] tracking-[0.2em]">Work Program Status</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { item: 'Metallurgy — Floatation Test', status: 'In Process', icon: Clock, color: 'text-yellow-500' },
              { item: '3D Inversion Geophysics', status: 'Completed', icon: CheckCircle2, color: 'text-green-500' },
              { item: 'Age Dating on Gabbro', status: 'Completed', icon: CheckCircle2, color: 'text-green-500' },
              { item: 'Paragenesis Study', status: 'Completed', icon: CheckCircle2, color: 'text-green-500' },
              { item: 'Initial Pit Shell Design', status: 'Next Step', icon: AlertCircle, color: 'text-gray-400' },
              { item: '5,000m Drilling (Cyr Drilling)', status: 'In Progress', icon: Clock, color: 'text-yellow-500' },
            ].map((w, i) => (
              <div key={i} className="flex items-center justify-between p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                <span className="font-bold text-sm text-gray-700">{w.item}</span>
                <span className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest ${w.color}`}>
                  <w.icon size={14} /> {w.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Report CTA */}
        <div className="bg-gradient-to-r from-brand-orange to-orange-600 rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg shadow-brand-orange/20">
          <div className="text-white max-w-md">
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Technical Report</h3>
            <p className="font-bold opacity-80 uppercase text-[10px] tracking-widest mb-3">NI 43-101 | Updated Sept 2024</p>
            <p className="text-white/80">Detailed analysis of the W2 Copper-Nickel-PGE Property including Exploration Target.</p>
          </div>
          <a
            href="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2025/03/07093225/2024-W2-Technical-Report_Final.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-gray-100 transition-all flex items-center whitespace-nowrap"
          >
            <FileText size={18} className="mr-3" /> Download PDF
          </a>
        </div>

        {/* QP & Disclaimers */}
        <div className="bg-gray-100 p-8 rounded-2xl text-xs text-gray-500 leading-relaxed space-y-3">
          <p><strong className="text-gray-700">Qualified Person:</strong> The technical information on this page has been reviewed and approved by R. Tim Trusler, P.Geo., a Qualified Person as defined by National Instrument 43-101.</p>
          <p><strong className="text-gray-700">Exploration Target Cautionary Note:</strong> The Exploration Target of 60-135Mt at 0.5-0.78% CuEq is conceptual in nature. There has been insufficient exploration to define a mineral resource and it is uncertain if further exploration will result in the target being delineated as a mineral resource. CuEq calculations use metal prices and recoveries as outlined in the NI 43-101 Technical Report dated September 2024, available on <a href="https://www.sedarplus.ca" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">SEDAR+</a>.</p>
          <p><strong className="text-gray-700">Historical Results:</strong> Historical drilling results referenced herein are sourced from assessment files and prior operator reports. PTX has not independently verified these results and they should not be relied upon. A Qualified Person has not done sufficient work to classify these as current mineral resources.</p>
        </div>
      </div>
    </div>
  );
};

// ─── SHINING TREE ────────────────────────────────────────────────────────────

export const ProjectShiningTree: React.FC = () => {
  return (
    <div className="bg-gray-50 text-black min-h-screen">
      {/* Hero */}
      <div className="relative h-[65vh] min-h-[350px] md:min-h-[500px] w-full flex items-end pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/04/05104654/STJV-PTX-FNC-Neighbours-265k-no-nameplate-legend-LS-010624-scaled.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-transparent to-transparent" />

        <div className="container relative mx-auto px-6 z-10">
          <Link to="/projects" className="inline-flex items-center text-white/60 hover:text-brand-orange transition-colors font-bold uppercase text-[10px] tracking-[0.2em] mb-6 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-brand-orange/50">
            <ChevronRight size={12} className="mr-1 rotate-180" /> All Projects
          </Link>
          <div className="max-w-3xl border-l-4 border-brand-orange pl-8">
            <div className="flex items-center flex-wrap gap-3 mb-4">
              <span className="bg-yellow-500/20 backdrop-blur-sm text-yellow-400 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-yellow-500/30">
                <Pickaxe size={12} className="inline mr-2 -mt-0.5" />
                Gold Exploration
              </span>
              <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">South Timmins JV — 75% PTX</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.95] mb-4">
              Shining Tree <span className="text-brand-orange">Gold</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              Direct neighbor of the next upcoming gold production in the Abitibi — district-scale 28,000 ha land package.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { icon: TrendingUp, value: '28,000 ha', label: 'Land Package' },
              { icon: Shield, value: '75%', label: 'PTX Interest' },
              { icon: MapPin, value: '5 Mines', label: 'Within 100km' },
              { icon: Coins, value: '~$10M', label: 'Historical Work' },
            ].map((s, i) => (
              <div key={i} className="py-6 px-4 text-center">
                <s.icon size={16} className="text-brand-orange mx-auto mb-2" />
                <div className="text-xl font-black text-gray-900">{s.value}</div>
                <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 space-y-24">
        {/* Neighbours */}
        <section>
          <div className="flex items-center space-x-4 mb-8">
            <span className="h-px w-12 bg-brand-orange"></span>
            <span className="text-brand-orange font-black uppercase text-[10px] tracking-[0.2em]">Neighbour Projects</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl text-white border-t-2 border-brand-orange">
              <h4 className="font-black uppercase text-xs tracking-widest text-brand-orange mb-2">IAMGOLD — Côté Gold Mine</h4>
              <p className="text-4xl font-black mb-1">20 Moz Au</p>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> In Production
              </span>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl text-white border-t-2 border-brand-orange">
              <h4 className="font-black uppercase text-xs tracking-widest text-brand-orange mb-2">Aris Mining — Juby Deposit</h4>
              <p className="text-4xl font-black mb-1">2.3 Moz Au</p>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span> Development Stage
              </span>
            </div>
          </div>
        </section>

        {/* Strategic Summary & Location */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Layers size={20} className="text-brand-orange" />
              <h3 className="text-xl font-black uppercase tracking-tight">Strategic Summary</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              The Shining Tree Project is a district-scale gold property covering a large section of the <strong className="text-gray-900">Ridout Tyrrell Deformation Zone (RTDZ)</strong>. This trans-crustal structure trends from Newmont's Borden Mine, through IAMGOLD's Côté Gold, positioning Shining Tree in the heart of Ontario's most prolific gold belt.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <MapPin size={20} className="text-brand-orange" />
              <h3 className="text-xl font-black uppercase tracking-tight">Location & Infrastructure</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Located 100 km southeast of Timmins and 125 km north of Sudbury, bisected by Hwy 560. Exceptional year-round access and proximity to world-class mining infrastructure, labor, and services.
            </p>
          </div>
        </div>

        {/* Exploration & Geology */}
        <section>
          <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <History size={20} className="text-brand-orange" />
              <h3 className="text-xl font-black uppercase tracking-tight">Exploration & Geology</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Gold was first discovered in 1911, leading to a proliferation of over 30 high-grade prospects. The property is centered on the axis of a regional gravity high — the strongest gravity anomaly in the entire gold belt. Such associations in the Abitibi are highly conducive to the discovery of major Tier 1 gold deposits.
            </p>
          </div>
        </section>

        {/* Work Program */}
        <section>
          <div className="flex items-center space-x-4 mb-8">
            <span className="h-px w-12 bg-brand-orange"></span>
            <span className="text-brand-orange font-black uppercase text-[10px] tracking-[0.2em]">Shining Tree Work Program</span>
          </div>
          <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="font-black uppercase text-xs tracking-widest text-gray-500 mb-8">Targeting a High-Grade Discovery</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Drilling Targets</span>
                <ul className="mt-3 space-y-2">
                  {['Ronda — 1,000m at surface', 'Herrick — 500m along strike'].map((t, i) => (
                    <li key={i} className="flex items-center text-gray-700 font-medium">
                      <span className="w-2 h-2 bg-brand-orange rounded-full mr-3"></span>{t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Program Details</span>
                <ul className="mt-3 space-y-2">
                  {['Phase 1: 1,500m total', 'Budget: CAD $500,000'].map((t, i) => (
                    <li key={i} className="flex items-center text-gray-700 font-medium">
                      <span className="w-2 h-2 bg-brand-orange rounded-full mr-3"></span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { step: 'Permitting', status: 'Done', color: 'text-green-500', icon: CheckCircle2 },
                { step: 'Data Review', status: 'Done', color: 'text-green-500', icon: CheckCircle2 },
                { step: 'Structural Mapping', status: 'In Progress', color: 'text-yellow-500', icon: Clock },
                { step: 'Phase 1 Drilling', status: 'Upcoming', color: 'text-gray-400', icon: AlertCircle },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100">
                  <div className="text-xs font-bold text-gray-700 mb-1">{s.step}</div>
                  <div className={`flex items-center justify-center gap-1 text-[10px] font-black uppercase tracking-widest ${s.color}`}>
                    <s.icon size={12} /> {s.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nav Footer */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/projects/w2" className="flex-1 group bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-orange/20 transition-all hover:shadow-lg flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Previous</span>
              <h4 className="text-lg font-black uppercase tracking-tight text-gray-900 group-hover:text-brand-orange transition-colors">W2 Cu-Ni-PGE</h4>
            </div>
            <ChevronRight size={20} className="rotate-180 text-gray-300 group-hover:text-brand-orange transition-colors" />
          </Link>
          <Link to="/projects/heenan" className="flex-1 group bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-orange/20 transition-all hover:shadow-lg flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Next</span>
              <h4 className="text-lg font-black uppercase tracking-tight text-gray-900 group-hover:text-brand-orange transition-colors">Heenan-Mallard Gold</h4>
            </div>
            <ChevronRight size={20} className="text-gray-300 group-hover:text-brand-orange transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
};

// ─── HEENAN-MALLARD ──────────────────────────────────────────────────────────

export const ProjectHeenan: React.FC = () => {
  return (
    <div className="bg-gray-50 text-black min-h-screen">
      {/* Hero */}
      <div className="relative h-[65vh] min-h-[350px] md:min-h-[500px] w-full flex items-end pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/04/05104654/STJV-PTX-FNC-Neighbours-265k-no-nameplate-legend-LS-010624-scaled.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-transparent to-transparent" />

        <div className="container relative mx-auto px-6 z-10">
          <Link to="/projects" className="inline-flex items-center text-white/60 hover:text-brand-orange transition-colors font-bold uppercase text-[10px] tracking-[0.2em] mb-6 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-brand-orange/50">
            <ChevronRight size={12} className="mr-1 rotate-180" /> All Projects
          </Link>
          <div className="max-w-3xl border-l-4 border-brand-orange pl-8">
            <div className="flex items-center flex-wrap gap-3 mb-4">
              <span className="bg-emerald-500/20 backdrop-blur-sm text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-emerald-500/30">
                <Zap size={12} className="inline mr-2 -mt-0.5" />
                New Discovery
              </span>
              <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">45km from Côté Gold Mine</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.95] mb-4">
              Heenan-Mallard <span className="text-brand-orange">Gold</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              New gold discovery in the Swayze Greenstone Belt with high-grade surface results. Part of the South Timmins Mining JV.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 space-y-24">
        {/* Asset Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Shield size={20} className="text-brand-orange" />
              <h3 className="text-xl font-black uppercase tracking-tight">Joint Venture</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Part of the <strong className="text-gray-900">South Timmins Mining JV</strong> with Fancamp Exploration (75% PTX interest, 25% Fancamp). Located in the Swayze Greenstone Belt.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="bg-gray-100 text-gray-600 text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">390 ha Heenan</span>
              <span className="bg-gray-100 text-gray-600 text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">5,104 ha Mallard</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl text-white">
            <div className="flex items-center gap-3 mb-6">
              <Compass size={20} className="text-brand-orange" />
              <h3 className="text-xl font-black uppercase tracking-tight">Adjacent Operations</h3>
            </div>
            <ul className="space-y-3 text-sm">
              {[
                'IAMGOLD — Côté Gold Mine (20Moz Au)',
                'Evolution Mining (October Gold)',
                'GFG Resources (Dore Gold)',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 font-medium">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full flex-shrink-0"></span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Drilling Results */}
        <section>
          <div className="flex items-center space-x-4 mb-8">
            <span className="h-px w-12 bg-brand-orange"></span>
            <span className="text-brand-orange font-black uppercase text-[10px] tracking-[0.2em]">2024-2025 Drilling — New Discovery</span>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Trench 02', result: '2m @ 4.05 g/t Au', sub: '8m @ 2.39 g/t Au', tag: 'Surface' },
              { label: 'PTX 2025 Drilling', result: '75.75m @ 0.50 g/t Au', sub: '', tag: '2025' },
              { label: 'PTX 2024 Drilling', result: '77.44m @ 0.40 g/t Au', sub: '', tag: '2024' },
            ].map((d, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-brand-orange">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-black uppercase text-sm tracking-tight">{d.label}</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{d.tag}</span>
                </div>
                <p className="text-lg font-bold text-gray-800">{d.result}</p>
                {d.sub && <p className="text-sm font-bold text-brand-orange mt-1">{d.sub}</p>}
              </div>
            ))}
          </div>
          <div className="mt-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl">
            <h4 className="font-black uppercase text-xs tracking-widest text-brand-orange mb-4">Camp River Zone — Historical High-Grade</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div><span className="font-bold text-gray-200">3.69m @ 5.04 g/t Au</span></div>
              <div><span className="font-bold text-gray-200">3.82m @ 5.31 g/t Au</span></div>
            </div>
          </div>
        </section>

        {/* Geology & Location */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Layers size={20} className="text-brand-orange" />
              <h3 className="text-xl font-black uppercase tracking-tight">Strategic Summary</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Located within the <strong className="text-gray-900">Swayze greenstone belt</strong>, part of the western Abitibi Subprovince. Bound to the north by the Nat River granitoid complex, to the west by the Kapuskasing Structural Zone. Targeting high-potential gold mineralization in a complexly folded and faulted stratigraphic sequence.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <MapPin size={20} className="text-brand-orange" />
              <h3 className="text-xl font-black uppercase tracking-tight">Location & Access</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Located approximately 110 km southwest of Timmins and 170 km northwest of Sudbury. Exceptional access via truck and ATV through the Mallard and Sultan industrial roads intersecting Highway 144.
            </p>
          </div>
        </div>

        {/* Assessment Reports */}
        <section>
          <div className="flex items-center space-x-4 mb-8">
            <span className="h-px w-12 bg-brand-orange"></span>
            <span className="text-brand-orange font-black uppercase text-[10px] tracking-[0.2em]">Assessment Reports</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: '2020 Heenan Report', url: 'https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/02/16170201/2020_Heenan_Assessment-Report.pdf' },
              { title: '2021 Mallard Report', url: 'https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/02/16170201/2021_Mallard_Assessment-Report.pdf' },
            ].map((r, i) => (
              <a key={i} href={r.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-brand-orange/30 transition-all group">
                <div>
                  <h4 className="font-black uppercase text-sm tracking-tight group-hover:text-brand-orange transition-colors">{r.title}</h4>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Assessment Documentation</span>
                </div>
                <Download className="text-gray-300 group-hover:text-brand-orange transition-colors" size={20} />
              </a>
            ))}
          </div>
        </section>

        {/* Nav Footer */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/projects/shining-tree" className="flex-1 group bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-orange/20 transition-all hover:shadow-lg flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Previous</span>
              <h4 className="text-lg font-black uppercase tracking-tight text-gray-900 group-hover:text-brand-orange transition-colors">Shining Tree Gold</h4>
            </div>
            <ChevronRight size={20} className="rotate-180 text-gray-300 group-hover:text-brand-orange transition-colors" />
          </Link>
          <Link to="/projects/royalty" className="flex-1 group bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-orange/20 transition-all hover:shadow-lg flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Next</span>
              <h4 className="text-lg font-black uppercase tracking-tight text-gray-900 group-hover:text-brand-orange transition-colors">Royalty Portfolio</h4>
            </div>
            <ChevronRight size={20} className="text-gray-300 group-hover:text-brand-orange transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
};

// ─── ROYALTY PORTFOLIO ────────────────────────────────────────────────────────

export const ProjectRoyalty: React.FC = () => {
  const ontarioRoyalties = [
    { asset: "Big Trout Lake (PGE-Ni-Cu-Cr)", details: "2.5% NSR on 12,080 acres.", icon: Gem },
    { asset: "Tib Lake (PGE)", details: "0.5% NSR on 4 legacy claims held by Lac des Iles Mines Ltd.", icon: Layers },
    { asset: "MacMurchy Township (Au)", details: "1% NSR on 33 legacy claims in Shining Tree area.", icon: Pickaxe },
    { asset: "Ring of Fire (Au-Ni-Cu-PGE-Cr)", details: "1% NSR on 23 cell claims held by Aurcrest Gold Inc.", icon: Mountain },
    { asset: "Scattergood Project", details: "1% NSR on project owned by Heritage Mining.", icon: Target },
    { asset: "Muskrat Dam Project", details: "1% NSR on the Muskrat Dam Critical Minerals Project.", icon: Atom },
  ];

  return (
    <div className="bg-gray-50 text-black min-h-screen">
      {/* Hero */}
      <div className="relative h-[65vh] min-h-[350px] md:min-h-[500px] w-full flex items-end pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/01/16170408/projects-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-transparent to-transparent" />

        <div className="container relative mx-auto px-6 z-10">
          <Link to="/projects" className="inline-flex items-center text-white/60 hover:text-brand-orange transition-colors font-bold uppercase text-[10px] tracking-[0.2em] mb-6 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-brand-orange/50">
            <ChevronRight size={12} className="mr-1 rotate-180" /> All Projects
          </Link>
          <div className="max-w-3xl border-l-4 border-brand-orange pl-8">
            <div className="flex items-center flex-wrap gap-3 mb-4">
              <span className="bg-blue-500/20 backdrop-blur-sm text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-blue-500/30">
                <Coins size={12} className="inline mr-2 -mt-0.5" />
                Non-Dilutive Value
              </span>
              <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">Global Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.95] mb-4">
              Royalty <span className="text-brand-orange">Portfolio</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              Strategic NSR assets and equity positions providing non-dilutive upside across premium global jurisdictions.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 space-y-24">
        {/* Green Canada Equity */}
        <section>
          <div className="flex items-center space-x-4 mb-8">
            <span className="h-px w-12 bg-brand-orange"></span>
            <span className="text-brand-orange font-black uppercase text-[10px] tracking-[0.2em]">Featured Position</span>
          </div>
          <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-2xl overflow-hidden">
            <div className="p-10">
              <div className="flex items-center gap-3 mb-6">
                <Globe2 size={22} className="text-brand-orange" />
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">Green Canada Co. — Equity Position</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Equity Stake</span>
                  <p className="text-4xl font-black text-brand-orange">52%</p>
                  <p className="text-sm text-gray-400 mt-1">Uranium project portfolio</p>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Est. Value</span>
                  <p className="text-4xl font-black text-brand-orange">~$3M</p>
                  <p className="text-sm text-gray-400 mt-1">Green Canada equity</p>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Status</span>
                  <p className="text-xl font-black text-white">IPO Planned</p>
                  <p className="text-sm text-gray-400 mt-1">Upon flagship uranium acquisition</p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400 leading-relaxed">Portfolio includes uranium projects in the Athabasca Basin, Thelon Basin, and Quebec — Canada's premier uranium jurisdictions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ontario Royalties */}
        <section>
          <div className="flex items-center space-x-4 mb-8">
            <span className="h-px w-12 bg-brand-orange"></span>
            <span className="text-brand-orange font-black uppercase text-[10px] tracking-[0.2em]">Ontario Royalties</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ontarioRoyalties.map((r, i) => (
              <div key={i} className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-brand-orange/20 transition-all duration-500 hover:shadow-xl hover:shadow-brand-orange/5">
                <div className="w-10 h-10 rounded-xl bg-gray-100 group-hover:bg-brand-orange/10 flex items-center justify-center mb-5 transition-colors duration-500">
                  <r.icon size={18} className="text-gray-400 group-hover:text-brand-orange transition-colors duration-500" />
                </div>
                <h4 className="font-black uppercase text-sm tracking-tight mb-2 group-hover:text-brand-orange transition-colors">{r.asset}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{r.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* International */}
        <section>
          <div className="flex items-center space-x-4 mb-8">
            <span className="h-px w-12 bg-brand-orange"></span>
            <span className="text-brand-orange font-black uppercase text-[10px] tracking-[0.2em]">International Portfolio</span>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl text-white border-t-2 border-brand-orange max-w-lg">
            <div className="flex items-center gap-3 mb-4">
              <Globe2 size={18} className="text-brand-orange" />
              <h4 className="font-black uppercase text-sm tracking-tight text-brand-orange">Sonia-Puma (Au-Cu), Chile</h4>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">2% NSR on Sonia-Puma claims held by Newmont.</p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-white rounded-2xl p-12 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Non-Dilutive Growth</h3>
            <p className="text-gray-500 max-w-md">Our royalty portfolio and equity positions provide significant upside potential without additional capital requirements.</p>
          </div>
          <Link to="/contact" className="bg-brand-orange text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-orange-600 transition-all whitespace-nowrap flex items-center">
            Inquire About JV <ArrowRight size={14} className="ml-2" />
          </Link>
        </div>

        {/* Nav Footer */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/projects/heenan" className="flex-1 group bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-orange/20 transition-all hover:shadow-lg flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Previous</span>
              <h4 className="text-lg font-black uppercase tracking-tight text-gray-900 group-hover:text-brand-orange transition-colors">Heenan-Mallard Gold</h4>
            </div>
            <ChevronRight size={20} className="rotate-180 text-gray-300 group-hover:text-brand-orange transition-colors" />
          </Link>
          <Link to="/investors" className="flex-1 group bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-orange/20 transition-all hover:shadow-lg flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Explore</span>
              <h4 className="text-lg font-black uppercase tracking-tight text-gray-900 group-hover:text-brand-orange transition-colors">Investor Centre</h4>
            </div>
            <ChevronRight size={20} className="text-gray-300 group-hover:text-brand-orange transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
};
