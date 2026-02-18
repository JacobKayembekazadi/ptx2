
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, Leaf, Target, Award, TreePine, Droplets, Mountain, Handshake, GraduationCap, MessageCircle, Scale, FileCheck, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';

const ESGPolicy: React.FC = () => {
    const pillars = [
        {
            icon: Leaf,
            title: 'Environmental',
            color: 'from-emerald-500 to-green-600',
            colorLight: 'bg-emerald-50',
            colorText: 'text-emerald-600',
            colorBorder: 'border-emerald-500',
            description: 'Minimizing our environmental footprint through advanced exploration techniques and responsible land management practices.',
            commitments: [
                {
                    icon: Target,
                    title: 'Advanced Survey Technology',
                    text: 'Utilizing LIDAR orthophoto surveys and high-resolution geophysical methods to minimize ground disturbance while maximizing exploration efficiency.',
                },
                {
                    icon: Droplets,
                    title: 'Baseline Environmental Studies',
                    text: 'Conducting comprehensive environmental assessments before, during, and after exploration activities.',
                },
                {
                    icon: TreePine,
                    title: 'Reclamation Planning',
                    text: 'Implementing progressive reclamation strategies to restore exploration sites to natural conditions.',
                },
                {
                    icon: Mountain,
                    title: 'Biodiversity Protection',
                    text: 'Monitoring and protecting local ecosystems, wildlife corridors, and sensitive habitats throughout all phases of exploration.',
                },
            ],
        },
        {
            icon: Users,
            title: 'Social',
            color: 'from-brand-orange to-amber-600',
            colorLight: 'bg-orange-50',
            colorText: 'text-brand-orange',
            colorBorder: 'border-brand-orange',
            description: 'Building meaningful partnerships with First Nations communities and contributing to local economic development.',
            commitments: [
                {
                    icon: Handshake,
                    title: 'First Nations Partnerships',
                    text: 'Maintaining active working relationships and agreements with local First Nations communities, including support service contracts and collaborative decision-making.',
                },
                {
                    icon: GraduationCap,
                    title: 'Local Employment & Training',
                    text: 'Prioritizing employment opportunities for community members and supporting local businesses through procurement and skills development.',
                },
                {
                    icon: MessageCircle,
                    title: 'Transparent Communication',
                    text: 'Regular engagement with stakeholders to ensure concerns are heard and addressed through open dialogue.',
                },
                {
                    icon: Users,
                    title: 'Community Investment',
                    text: 'Contributing to the social and economic well-being of communities near our exploration projects through targeted investments.',
                },
            ],
        },
        {
            icon: ShieldCheck,
            title: 'Governance',
            color: 'from-blue-500 to-indigo-600',
            colorLight: 'bg-blue-50',
            colorText: 'text-blue-600',
            colorBorder: 'border-blue-500',
            description: 'Maintaining transparent operations, ethical business practices, and accountability to all stakeholders.',
            commitments: [
                {
                    icon: Scale,
                    title: 'Board Oversight',
                    text: 'Our Board of Directors provides strategic guidance and oversight on all ESG matters with dedicated committee review.',
                },
                {
                    icon: FileCheck,
                    title: 'Regulatory Compliance',
                    text: 'Full compliance with all applicable environmental, health, and safety regulations across all jurisdictions.',
                },
                {
                    icon: BarChart3,
                    title: 'Stakeholder Transparency',
                    text: 'Regular reporting on ESG performance and progress toward our commitments through public disclosures.',
                },
                {
                    icon: ShieldCheck,
                    title: 'Ethical Standards',
                    text: 'Enforcing a strict code of conduct, anti-corruption policies, and whistleblower protections across the organization.',
                },
            ],
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[65vh] flex items-end overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/04/12092016/Photo-2024-04-06-3-06-48%E2%80%AFPM-scaled.jpg"
                        alt="ESG Policy"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '60px 60px'
                    }} />
                </div>

                <div className="relative container mx-auto px-6 pb-16 pt-40">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                                Sustainability
                            </span>
                            <span className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/70 text-[10px] font-black uppercase tracking-widest">
                                Corporate Responsibility
                            </span>
                        </div>
                        <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-6">
                            ESG<br />
                            <span className="text-brand-orange">Policy</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                            Our commitment to Environmental, Social, and Governance excellence guides every decision we make as we advance critical mineral exploration in Northern Ontario.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-brand-dark border-y border-white/10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
                        {[
                            { value: '100%', label: 'Regulatory Compliance' },
                            { value: 'Active', label: 'First Nations Partnerships' },
                            { value: 'LIDAR', label: 'Survey Technology' },
                            { value: 'Ongoing', label: 'Reclamation Programs' },
                        ].map((stat) => (
                            <div key={stat.label} className="py-8 px-6 text-center">
                                <div className="text-2xl md:text-3xl font-black text-brand-orange tracking-tight">{stat.value}</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <span className="h-px w-12 bg-brand-orange" />
                            <span className="text-brand-orange font-black uppercase text-[10px] tracking-widest">Our Framework</span>
                            <span className="h-px w-12 bg-brand-orange" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black leading-tight mb-8">
                            Responsible Resource <span className="text-brand-orange">Development</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            At PTX Metals, we believe that responsible exploration and strong ESG practices are not just the right thing to do — they're essential to creating lasting value for our shareholders, communities, and the environment. Our ESG framework is built on three interconnected pillars.
                        </p>
                    </div>

                    {/* Three Pillars Overview Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
                        {pillars.map((pillar) => (
                            <div key={pillar.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100">
                                <div className={`w-14 h-14 ${pillar.colorLight} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <pillar.icon className={pillar.colorText} size={28} />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tight mb-3 text-black">{pillar.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-sm">{pillar.description}</p>
                                <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-brand-orange transition-colors">
                                    <span>{pillar.commitments.length} Commitments</span>
                                    <ArrowRight size={12} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Pillar Sections */}
            {pillars.map((pillar, idx) => (
                <section key={pillar.title} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <div className="container mx-auto px-6 py-20">
                        <div className="max-w-6xl mx-auto">
                            {/* Section Header */}
                            <div className="flex items-center gap-4 mb-12">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center`}>
                                    <pillar.icon className="text-white" size={24} />
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-black">
                                        {pillar.title} <span className="text-gray-300">Commitments</span>
                                    </h2>
                                </div>
                            </div>

                            {/* Commitment Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {pillar.commitments.map((commitment) => (
                                    <div
                                        key={commitment.title}
                                        className={`border-l-4 ${pillar.colorBorder} bg-white rounded-r-xl p-8 hover:shadow-lg transition-all duration-300 group`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`w-10 h-10 ${pillar.colorLight} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                                <commitment.icon className={pillar.colorText} size={20} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-black uppercase tracking-tight text-black mb-2">{commitment.title}</h4>
                                                <p className="text-gray-500 leading-relaxed text-sm">{commitment.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Key Principles Banner */}
            <section className="bg-brand-dark py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <span className="h-px w-12 bg-brand-orange" />
                                <span className="text-brand-orange font-black uppercase text-[10px] tracking-widest">Guiding Principles</span>
                                <span className="h-px w-12 bg-brand-orange" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-tight">
                                Our ESG <span className="text-brand-orange">Standards</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                'Minimize environmental impact at every stage of exploration',
                                'Respect and uphold Indigenous rights and traditional knowledge',
                                'Maintain transparent reporting and open stakeholder communication',
                                'Prioritize worker health, safety, and well-being',
                                'Exceed regulatory requirements wherever possible',
                                'Continuously improve ESG performance through measurable goals',
                            ].map((principle) => (
                                <div key={principle} className="flex items-start gap-3 bg-white/5 rounded-xl p-5 border border-white/10">
                                    <CheckCircle2 className="text-brand-orange flex-shrink-0 mt-0.5" size={18} />
                                    <span className="text-gray-300 text-sm leading-relaxed">{principle}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 via-brand-dark to-gray-900 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-5" style={{
                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        }} />
                        <div className="relative">
                            <Award className="text-brand-orange mx-auto mb-6" size={48} />
                            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
                                Our Ongoing <span className="text-brand-orange">Commitment</span>
                            </h3>
                            <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                                We continuously review and enhance our ESG practices to meet evolving standards and stakeholder expectations. Our goal is to set the benchmark for responsible mineral exploration in Northern Ontario.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    to="/contact"
                                    className="px-8 py-4 bg-brand-orange text-white font-black uppercase text-xs tracking-widest rounded-full hover:bg-orange-600 transition-all inline-flex items-center gap-2"
                                >
                                    Contact Our Team
                                    <ArrowRight size={14} />
                                </Link>
                                <Link
                                    to="/about-us"
                                    className="px-8 py-4 bg-white/10 border border-white/20 text-white font-black uppercase text-xs tracking-widest rounded-full hover:bg-white/20 transition-all"
                                >
                                    About PTX Metals
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation Footer */}
            <section className="border-t border-gray-200 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 divide-x divide-gray-200">
                        <Link to="/about-us" className="py-8 px-6 group flex items-center gap-4 hover:bg-gray-50 transition-colors">
                            <ArrowRight size={16} className="rotate-180 text-gray-400 group-hover:text-brand-orange group-hover:-translate-x-1 transition-all" />
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Previous</div>
                                <div className="text-sm font-black uppercase tracking-tight text-black group-hover:text-brand-orange transition-colors">About Us</div>
                            </div>
                        </Link>
                        <Link to="/projects" className="py-8 px-6 group flex items-center justify-end gap-4 hover:bg-gray-50 transition-colors text-right">
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Next</div>
                                <div className="text-sm font-black uppercase tracking-tight text-black group-hover:text-brand-orange transition-colors">Projects</div>
                            </div>
                            <ArrowRight size={16} className="text-gray-400 group-hover:text-brand-orange group-hover:translate-x-1 transition-all" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ESGPolicy;
