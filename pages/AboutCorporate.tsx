
import React from 'react';
import { Link } from 'react-router-dom';
import { TeamMemberProps } from '../types';
import {
  Building2, Users, Award, Target, ChevronRight, ArrowRight,
  Globe, DollarSign, Shield, TrendingUp, Briefcase, GraduationCap,
  Star, MapPin, Gem, Pickaxe, FlaskConical, Mountain, UserCheck
} from 'lucide-react';

// ─── ABOUT US ────────────────────────────────────────────────────────────────

export const AboutUs: React.FC = () => {
  const stats = [
    { icon: Shield, value: 'Zero', label: 'Long-Term Debt (as of Oct 2025)', color: 'from-blue-500 to-indigo-600' },
    { icon: Globe, value: 'Ontario', label: 'Tier-1 Jurisdiction', color: 'from-red-500 to-rose-600' },
    { icon: TrendingUp, value: '4', label: 'Strategic Projects', color: 'from-brand-orange to-orange-600' },
    { icon: DollarSign, value: '171.2M', label: 'Shares Outstanding', color: 'from-green-500 to-emerald-600' },
  ];

  const pillars = [
    {
      icon: Gem,
      title: 'Critical Minerals Focus',
      desc: 'Cu-Ni-PGE and gold projects in proven mining camps with existing infrastructure and clear regulatory frameworks.',
    },
    {
      icon: MapPin,
      title: 'Tier-1 Jurisdiction',
      desc: 'All projects in Northern Ontario — one of the world\'s premier mining jurisdictions with supportive policy alignment.',
    },
    {
      icon: Users,
      title: 'Community Partnership',
      desc: 'Sustained, respectful engagement with Indigenous communities. Building trust through collaboration, not shortcuts.',
    },
    {
      icon: Target,
      title: 'Disciplined Strategy',
      desc: 'Technical rigour and regulatory compliance at every stage. Reducing risk and building confidence for stakeholders.',
    },
  ];

  return (
    <div className="bg-gray-50 text-black min-h-screen">
      {/* Hero */}
      <div className="relative h-[70vh] min-h-[350px] md:min-h-[550px] w-full flex items-end pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/03/08103835/IMG_0219-scaled.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-transparent to-transparent" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(229,100,23,0.07) 1px, transparent 0)', backgroundSize: '30px 30px' }} />

        <div className="container relative mx-auto px-6 z-10">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-6">
              <span className="bg-brand-orange/20 backdrop-blur-sm text-brand-orange text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-brand-orange/30">
                <Building2 size={12} className="inline mr-2 -mt-0.5" />
                About PTX Metals
              </span>
              <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">TSXV: PTX | FRA: 9PX | OTCQB: PANXF</span>
            </div>
            <div className="border-l-4 border-brand-orange pl-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.95] mb-6">
                Building Assets<br />
                <span className="text-brand-orange">The Right Way</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
                A Canadian mineral exploration company advancing strategically important projects in Northern Ontario through disciplined exploration and genuine partnership.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {stats.map((stat, i) => (
              <div key={i} className="py-8 px-6 text-center group">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-3`}>
                  <stat.icon size={18} />
                </div>
                <div className="text-3xl font-black text-gray-900 tracking-tight">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center space-x-4 mb-6">
            <span className="h-px w-12 bg-brand-orange"></span>
            <span className="text-brand-orange font-black uppercase text-[10px] tracking-[0.2em]">Who We Are</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-4xl font-black uppercase tracking-tighter text-gray-900 leading-tight">
                Disciplined Exploration,<br />
                <span className="text-brand-orange">Responsible Development</span>
              </h2>
              <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
                <p>
                  PTX is a Canadian mineral exploration company advancing strategically important projects in Northern Ontario. We focus on disciplined exploration, regulatory compliance, and long-term value-creation.
                </p>
                <p>
                  Our work is grounded in technical rigour, respect for process, and sustained engagement with Indigenous communities. Led by an experienced management team with deep understanding of Northern Ontario exploration and permitting.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/management" className="inline-flex items-center bg-brand-orange text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-orange-600 transition-colors">
                  Meet Our Team <ArrowRight size={14} className="ml-2" />
                </Link>
                <Link to="/projects" className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors">
                  Explore Projects <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-black uppercase tracking-tight text-gray-900 mb-4">Why PTX Now</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Canada and Ontario are placing renewed emphasis on responsibly developing domestic sources of critical and precious metals. Our projects sit in proven mining regions with clear regulatory frameworks.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <h3 className="font-black uppercase tracking-tight mb-4">Portfolio Focus</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    Cu-Ni-PGE project at the gateway to the Ring of Fire
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    Gold assets in established mining camps
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 flex-shrink-0"></span>
                    Top-tier jurisdiction with policy alignment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-orange font-black uppercase text-[10px] tracking-[0.2em]">What Sets Us Apart</span>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-gray-900 mt-3">
              The PTX <span className="text-brand-orange">Advantage</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar, i) => (
              <div key={i} className="group bg-gray-50 hover:bg-gray-900 rounded-2xl p-8 transition-all duration-500 border border-gray-100 hover:border-gray-800">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 group-hover:bg-brand-orange flex items-center justify-center mb-6 transition-colors duration-500">
                  <pillar.icon size={22} className="text-brand-orange group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-black uppercase tracking-tight text-gray-900 group-hover:text-white mb-3 transition-colors duration-500">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-400 leading-relaxed transition-colors duration-500">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="container mx-auto px-6 py-24">
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-3xl overflow-hidden p-6 md:p-16 text-center">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(229,100,23,0.08) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px]" />
          <div className="relative z-10">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white mb-4">
              Ready to Learn More?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Explore our project portfolio or connect with our investor relations team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/investors" className="inline-flex items-center bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-orange-600 transition-colors">
                Investor Centre <ArrowRight size={14} className="ml-2" />
              </Link>
              <Link to="/contact" className="inline-flex items-center bg-white/10 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-colors border border-white/10">
                Contact Us <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── MANAGEMENT ──────────────────────────────────────────────────────────────

const TeamCard: React.FC<TeamMemberProps & { index: number; accent?: string }> = ({ name, title, bio, index, accent = 'brand-orange' }) => (
  <div className="group bg-white rounded-2xl border border-gray-100 hover:border-brand-orange/20 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-brand-orange/5">
    <div className="p-8">
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-orange to-orange-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-brand-orange/20">
          {name.split(' ').map(n => n[0]).slice(0, 2).join('')}
        </div>
        <span className="text-[10px] font-bold text-gray-300 tracking-widest">0{index + 1}</span>
      </div>
      <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-1">{name}</h3>
      <div className="flex items-center mb-5">
        <span className="w-6 h-0.5 bg-brand-orange mr-2"></span>
        <span className="text-brand-orange font-bold uppercase text-[10px] tracking-[0.15em]">{title}</span>
      </div>
      {bio && <p className="text-gray-500 leading-relaxed text-sm">{bio}</p>}
    </div>
  </div>
);

export const Management: React.FC = () => {
  const team: TeamMemberProps[] = [
    {
      name: "Greg Ferron",
      title: "President, CEO, Director",
      bio: "20 years of corporate leadership with a comprehensive mining network. Former CEO of Treasury Metals where he completed the Goldlund acquisition and mine permitting/EA at Goliath. Built Laramide into a top uranium company. Senior roles at TMX Group, Scotiabank, Fancamp Board, and Omai Gold Mines."
    },
    {
      name: "Cindy Davis",
      title: "Chief Financial Officer",
      bio: "Over 15 years of experience in accounting, financial reporting, regulatory compliance, and management advisory for publicly listed companies. Canadian Chartered Professional Accountant with a B.Sc. specializing in Accounting and Economics."
    },
    {
      name: "Erika Dohring, MSc., P.Geo.",
      title: "Director of Technical Operations",
      bio: "Highly accomplished geologist with significant expertise in corporate development, including financing a copper project with BHP joint venture and Fiore Group. Built expertise across three continents with primary focus on precious and base metals."
    },
    {
      name: "Kyle Pedersen, P.Geo.",
      title: "Exploration Geologist",
      bio: "Over 15 years of experience in mineral exploration and 4 years in geotechnical and environmental consulting. Brings strong focus on management and execution of exploration programs mainly in Ontario."
    }
  ];

  return (
    <div className="bg-gray-50 text-black min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[450px] w-full flex items-end pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/03/08103739/Ronda-Stripping-5.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-transparent to-transparent" />

        <div className="container relative mx-auto px-6 z-10">
          <Link to="/about-us" className="inline-flex items-center text-white/60 hover:text-brand-orange transition-colors font-bold uppercase text-[10px] tracking-[0.2em] mb-6 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-brand-orange/50">
            <ChevronRight size={12} className="mr-1 rotate-180" /> Back to About
          </Link>
          <div className="max-w-3xl border-l-4 border-brand-orange pl-8">
            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-brand-orange/20 backdrop-blur-sm text-brand-orange text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-brand-orange/30">
                <Briefcase size={12} className="inline mr-2 -mt-0.5" />
                Leadership
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.95] mb-4">
              Management <span className="text-brand-orange">Team</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              Expert leadership driving discovery across Northern Ontario's most promising mineral properties.
            </p>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((m, i) => <TeamCard key={i} index={i} {...m} />)}
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-6 pb-24">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Meet Our Board & Advisors</h3>
            <p className="text-gray-400">Strategic governance and world-class technical expertise.</p>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <Link to="/board" className="inline-flex items-center bg-brand-orange text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-orange-600 transition-colors">
              Board <ArrowRight size={14} className="ml-2" />
            </Link>
            <Link to="/advisors" className="inline-flex items-center bg-white/10 text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-colors border border-white/10">
              Advisors <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── BOARD OF DIRECTORS ──────────────────────────────────────────────────────

export const Board: React.FC = () => {
  const boardMembers: (TeamMemberProps & { highlight?: string })[] = [
    {
      name: "Christophe Vereecke, MBA",
      title: "Chairman",
      bio: "Entrepreneur based in Paris with a background in finance, oil and gas, mine royalties and renewable energy. Involved in startup of several businesses including operating aggregate mineral royalties. MBA from Financia Business School, France.",
      highlight: "Finance & Energy"
    },
    {
      name: "Greg Ferron",
      title: "President, CEO, Director",
      bio: "20 years of mining industry, capital markets and corporate development experience. As CEO of Treasury Metals (now NexGold Mining Corp), he led the Goldlund project acquisition, creating one of Canada's largest gold developers.",
      highlight: "Mining Leadership"
    },
    {
      name: "Frederico Marques",
      title: "Director",
      bio: "Over 25 years experience in mining, M&A, and corporate law. Worked with leading mineral companies globally, including as an independent director of Sigma Lithium Corp. Involved in over US$30 Billion in sophisticated transactions.",
      highlight: "M&A & Legal"
    },
    {
      name: "Jean-David Moore, M.Sc.",
      title: "Director",
      bio: "Consultant and advisor to mineral exploration companies for over fifteen years. Director of Fokus Mining Corp. and served as director of Vanstar Mining Resources (acquired by Iamgold). Graduate of Laval University.",
      highlight: "Exploration Advisory"
    },
    {
      name: "Sam Kiri, CFA",
      title: "Director, Head of Audit Committee",
      bio: "Over 20 years of capital markets experience with a focus on mining and energy. Equity analyst for the Scotia Pacific Rim Mutual Fund and a founder of Proactive Investors. B.Sc. in Mechanical Engineering.",
      highlight: "Capital Markets"
    },
    {
      name: "Rajesh Sharma, ICD.D",
      title: "Director",
      bio: "President and CEO at Fancamp Exploration Ltd. Global leadership experience across metals, mining, mineral exploration and international trade. Board Member of various Tata Steel subsidiaries, specialized in Battery Metals.",
      highlight: "Battery Metals"
    },
    {
      name: "James R. Trusler, P.Eng.",
      title: "Director, Technical Advisor",
      bio: "Geological engineer with over 54 years of exploration experience with Teck and Falconbridge. Expert in layered intrusions, geomathematics and structural geology. History of discovery of world-class gold, uranium, and Ni-Cu-PGE deposits.",
      highlight: "Discovery Expert"
    }
  ];

  return (
    <div className="bg-gray-50 text-black min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[450px] w-full flex items-end pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/01/16170408/projects-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-transparent to-transparent" />

        <div className="container relative mx-auto px-6 z-10">
          <Link to="/about-us" className="inline-flex items-center text-white/60 hover:text-brand-orange transition-colors font-bold uppercase text-[10px] tracking-[0.2em] mb-6 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-brand-orange/50">
            <ChevronRight size={12} className="mr-1 rotate-180" /> Back to About
          </Link>
          <div className="max-w-3xl border-l-4 border-brand-orange pl-8">
            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-blue-500/20 backdrop-blur-sm text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-blue-500/30">
                <Award size={12} className="inline mr-2 -mt-0.5" />
                Governance
              </span>
              <span className="text-gray-400 text-xs font-bold">{boardMembers.length} Members</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.95] mb-4">
              Board of <span className="text-brand-orange">Directors</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              Strategic governance and institutional oversight guiding PTX Metals through disciplined growth.
            </p>
          </div>
        </div>
      </div>

      {/* Board Grid */}
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Chairman Featured */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-gray-900 to-gray-800 p-10 flex flex-col justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-orange to-orange-600 flex items-center justify-center text-white font-black text-2xl mb-6 shadow-lg shadow-brand-orange/30">
                    CV
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-1">{boardMembers[0].name}</h3>
                  <div className="flex items-center mb-4">
                    <span className="w-6 h-0.5 bg-brand-orange mr-2"></span>
                    <span className="text-brand-orange font-bold uppercase text-[10px] tracking-[0.15em]">{boardMembers[0].title}</span>
                  </div>
                  <span className="inline-block bg-brand-orange/20 text-brand-orange text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit">{boardMembers[0].highlight}</span>
                </div>
                <div className="md:w-2/3 p-10 flex items-center">
                  <p className="text-gray-600 leading-relaxed text-lg">{boardMembers[0].bio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Other Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.slice(1).map((m, i) => (
              <div key={i} className="group bg-white rounded-2xl border border-gray-100 hover:border-brand-orange/20 p-8 transition-all duration-500 hover:shadow-xl hover:shadow-brand-orange/5">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white font-black text-sm">
                    {m.name.split(' ').map(n => n.replace(/[^A-Za-z]/g, '')).filter(n => n).map(n => n[0]).slice(0, 2).join('')}
                  </div>
                  {m.highlight && (
                    <span className="bg-gray-100 text-gray-500 text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full">{m.highlight}</span>
                  )}
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-gray-900 mb-1">{m.name}</h3>
                <div className="flex items-center mb-4">
                  <span className="w-5 h-0.5 bg-brand-orange mr-2"></span>
                  <span className="text-brand-orange font-bold uppercase text-[9px] tracking-[0.15em]">{m.title}</span>
                </div>
                <p className="text-gray-500 leading-relaxed text-sm">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="container mx-auto px-6 pb-24">
        <div className="flex flex-col sm:flex-row gap-4 max-w-6xl mx-auto">
          <Link to="/management" className="flex-1 group bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-orange/20 transition-all hover:shadow-lg flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Previous</span>
              <h4 className="text-lg font-black uppercase tracking-tight text-gray-900 group-hover:text-brand-orange transition-colors">Management Team</h4>
            </div>
            <ChevronRight size={20} className="rotate-180 text-gray-300 group-hover:text-brand-orange transition-colors" />
          </Link>
          <Link to="/advisors" className="flex-1 group bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-orange/20 transition-all hover:shadow-lg flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Next</span>
              <h4 className="text-lg font-black uppercase tracking-tight text-gray-900 group-hover:text-brand-orange transition-colors">Technical Advisors</h4>
            </div>
            <ChevronRight size={20} className="text-gray-300 group-hover:text-brand-orange transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
};

// ─── TECHNICAL ADVISORS ──────────────────────────────────────────────────────

export const Advisors: React.FC = () => {
  const w2Committee: TeamMemberProps[] = [
    {
      name: "Shuda Zhou, MSc., P.Geo.",
      title: "Consulting Geologist (QP)",
      bio: "10 years of global exploration experience in Canada, South America, Africa and Asia. Qualified Person overseeing data review, geological model and exploration target at W2. Focus on Cu-Ni-PGE and Gold."
    },
    {
      name: "Wes Roberts, P.Eng., MBA",
      title: "Technical Advisor",
      bio: "40-year career spanning mineral exploration, mining operations, project engineering and management. Former VP Corporate Development for Breakwater Resources and VP Mining to Heenan Blaikie LLP. Queen's University and Schulich MBA."
    },
    {
      name: "Dr. James Mungall, PhD, M.Sc.",
      title: "Technical Advisor",
      bio: "Expert in magmatic sulfide and chromite deposits with significant Ring of Fire experience. Former Chief Geologist for Noront Resources during the Eagle's Nest discovery. Professor of Earth Sciences at Carleton University."
    },
    {
      name: "Ike Osmani, P.Geo.",
      title: "Technical Advisor",
      bio: "35 years of field-based mineral exploration and NI 43-101 technical reporting. Discovered Ti-V mineralization while exploring the W2 property in 2001. Developed ~1M oz gold resource at Coldstream Project."
    },
    {
      name: "Dave Bell",
      title: "Advisor, Environmental & Community",
      bio: "20 years of project management in environmental assessment and regulatory permitting. Former Director of Environment at Wyloo Metals and project manager at the Impact Assessment Agency of Canada."
    }
  ];

  const southTimminsCommittee: TeamMemberProps[] = [
    {
      name: "Wes Roberts",
      title: "Technical Advisor",
      bio: "Professional mining engineer with over 40 years' experience specializing in the economic evaluation and development of mineral deposits."
    },
    {
      name: "Charles Tarnocai",
      title: "Technical Advisor",
      bio: "Strong technical background with extensive mining and mineral exploration experience. Former VP Corporate Development for Alamos Gold and Chief Geologist with Oro Gold Resources. Ph.D in geological sciences, University of Ottawa."
    },
    {
      name: "Erika Dohring",
      title: "Head of Technical Development",
      bio: "M.Sc. in geology and mining engineering with over 10 years managing exploration projects across three continents. Excels at identifying and developing projects from exploration to development for major gold and copper players."
    }
  ];

  const CommitteeSection: React.FC<{ title: string; subtitle: string; icon: React.ElementType; color: string; members: TeamMemberProps[] }> = ({ title, subtitle, icon: Icon, color, members }) => (
    <div className="mb-20">
      <div className="flex items-center space-x-4 mb-10">
        <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center text-white`}>
          <Icon size={22} />
        </div>
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((m, i) => (
          <div key={i} className="group bg-white rounded-2xl border border-gray-100 hover:border-brand-orange/20 p-8 transition-all duration-500 hover:shadow-xl hover:shadow-brand-orange/5">
            <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-brand-orange/10 flex items-center justify-center mb-5 transition-colors duration-500">
              <UserCheck size={20} className="text-gray-400 group-hover:text-brand-orange transition-colors duration-500" />
            </div>
            <h3 className="text-lg font-black uppercase tracking-tight text-gray-900 mb-1">{m.name}</h3>
            <div className="flex items-center mb-4">
              <span className="w-5 h-0.5 bg-brand-orange mr-2"></span>
              <span className="text-brand-orange font-bold uppercase text-[9px] tracking-[0.15em]">{m.title}</span>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm">{m.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 text-black min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[450px] w-full flex items-end pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/01/16170408/projects-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-transparent to-transparent" />

        <div className="container relative mx-auto px-6 z-10">
          <Link to="/about-us" className="inline-flex items-center text-white/60 hover:text-brand-orange transition-colors font-bold uppercase text-[10px] tracking-[0.2em] mb-6 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-brand-orange/50">
            <ChevronRight size={12} className="mr-1 rotate-180" /> Back to About
          </Link>
          <div className="max-w-3xl border-l-4 border-brand-orange pl-8">
            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-green-500/20 backdrop-blur-sm text-green-400 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-green-500/30">
                <FlaskConical size={12} className="inline mr-2 -mt-0.5" />
                Technical Expertise
              </span>
              <span className="text-gray-400 text-xs font-bold">{w2Committee.length + southTimminsCommittee.length} Advisors</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.95] mb-4">
              Technical <span className="text-brand-orange">Advisors</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              World-class geoscientists and engineers driving discovery across our flagship assets.
            </p>
          </div>
        </div>
      </div>

      {/* Committees */}
      <div className="container mx-auto px-6 py-24 max-w-6xl">
        <CommitteeSection
          title="W2 Project Technical Committee"
          subtitle="Cu-Ni-PGE flagship asset advisory team"
          icon={Mountain}
          color="bg-gradient-to-br from-brand-orange to-orange-600"
          members={w2Committee}
        />
        <CommitteeSection
          title="South Timmins Technical Committee"
          subtitle="Gold exploration advisory team"
          icon={Pickaxe}
          color="bg-gradient-to-br from-yellow-500 to-amber-600"
          members={southTimminsCommittee}
        />
      </div>

      {/* Navigation Footer */}
      <div className="container mx-auto px-6 pb-24">
        <div className="flex flex-col sm:flex-row gap-4 max-w-6xl mx-auto">
          <Link to="/board" className="flex-1 group bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-orange/20 transition-all hover:shadow-lg flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Previous</span>
              <h4 className="text-lg font-black uppercase tracking-tight text-gray-900 group-hover:text-brand-orange transition-colors">Board of Directors</h4>
            </div>
            <ChevronRight size={20} className="rotate-180 text-gray-300 group-hover:text-brand-orange transition-colors" />
          </Link>
          <Link to="/projects" className="flex-1 group bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-orange/20 transition-all hover:shadow-lg flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Explore</span>
              <h4 className="text-lg font-black uppercase tracking-tight text-gray-900 group-hover:text-brand-orange transition-colors">Our Projects</h4>
            </div>
            <ChevronRight size={20} className="text-gray-300 group-hover:text-brand-orange transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
};
