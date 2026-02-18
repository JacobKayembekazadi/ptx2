
import React from 'react';
import { Banner } from '../components/UIElements';
import { Globe, Activity, BarChart3, Target, Zap, Award, CheckCircle, Clock, TrendingUp, Users } from 'lucide-react';

const Milestones: React.FC = () => {
    const milestones = [
        {
            year: '2024',
            title: 'Asset Consolidation',
            status: 'Completed',
            icon: Globe,
            color: 'text-green-500',
            bgColor: 'bg-green-500/10',
            borderColor: 'border-green-500',
            details: [
                'Completed strategic claim acquisitions at W2 project',
                'Formation of the South Timmins Joint Venture',
                'Secured 100% ownership of W2 claims in Ring of Fire',
                'Established partnerships with local First Nations communities'
            ]
        },
        {
            year: '2025',
            title: 'Drill Program Launch',
            status: 'In Progress',
            icon: Activity,
            color: 'text-brand-orange',
            bgColor: 'bg-brand-orange/10',
            borderColor: 'border-brand-orange',
            details: [
                'Mobilization of Cyr Drilling for 5,000m diamond drilling campaign',
                'Central Target Phase 1 drilling initiated',
                'Advanced 3D geological modeling completed',
                'High-resolution geophysical surveys conducted',
                'Initial drill results expected Q2 2025'
            ]
        },
        {
            year: '2026',
            title: 'Resource Expansion',
            status: 'Planned',
            icon: BarChart3,
            color: 'text-blue-500',
            bgColor: 'bg-blue-500/10',
            borderColor: 'border-blue-500',
            details: [
                'Resource modeling and estimation for LHIC complex',
                'Paragenesis study completion',
                'Expansion drilling based on 2025 results',
                'Preliminary Economic Assessment (PEA) initiation',
                'Strategic partnership development'
            ]
        },
        {
            year: '2027+',
            title: 'Value Realization',
            status: 'Future',
            icon: Award,
            color: 'text-purple-500',
            bgColor: 'bg-purple-500/10',
            borderColor: 'border-purple-500',
            details: [
                'Resource definition and expansion',
                'Feasibility studies and permitting',
                'Strategic optionality evaluation',
                'Continued exploration across portfolio',
                'Stakeholder value maximization'
            ]
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <Banner
                title="STRATEGIC MILESTONES"
                subtitle="Our Roadmap to Value Creation Through Methodical Exploration"
                image="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/05/07152333/home-main-bg-3.jpg"
            />

            <div className="container mx-auto px-6 py-20">
                {/* Introduction */}
                <div className="max-w-4xl mx-auto mb-20 text-center">
                    <div className="inline-flex items-center space-x-2 text-brand-orange mb-8">
                        <Target size={24} />
                        <span className="font-black uppercase text-sm tracking-[0.4em]">Clear Path Forward</span>
                    </div>
                    <h2 className="text-5xl font-black uppercase tracking-tighter leading-tight mb-8 text-black">
                        Building Value Through <span className="text-brand-orange">Systematic Execution</span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        PTX Metals follows a disciplined approach to exploration and development, with clear milestones that demonstrate progress and create shareholder value at each stage.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200"></div>

                    {/* Milestone cards */}
                    <div className="space-y-16">
                        {milestones.map((milestone, idx) => (
                            <div key={idx} className={`relative flex flex-col md:flex-row items-start gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                {/* Icon */}
                                <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 z-10 ${milestone.bgColor} ${milestone.borderColor} border-4 rounded-full p-4 shadow-lg`}>
                                    <milestone.icon size={32} className={milestone.color} />
                                </div>

                                {/* Content */}
                                <div className={`flex-1 ml-24 md:ml-0 ${idx % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                                    <div className={`bg-gray-50 p-8 rounded-2xl border-l-4 ${milestone.borderColor} hover:shadow-xl transition-all duration-300 group cursor-pointer`}>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className={`text-5xl font-black ${milestone.color}`}>{milestone.year}</span>
                                            <span className={`px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest ${milestone.bgColor} ${milestone.color}`}>
                                                {milestone.status}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl font-black uppercase tracking-tight mb-4 text-black group-hover:text-brand-orange transition-colors">
                                            {milestone.title}
                                        </h3>
                                        <ul className="space-y-3 text-gray-700">
                                            {milestone.details.map((detail, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <CheckCircle size={18} className={`${milestone.color} mt-1 flex-shrink-0`} />
                                                    <span className="text-sm leading-relaxed">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Key Metrics */}
                <div className="mt-32 bg-brand-dark text-white rounded-2xl p-12">
                    <h3 className="text-3xl font-black uppercase tracking-tight mb-12 text-center">
                        Progress <span className="text-brand-orange">Indicators</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: Target, label: '2024 Objectives', value: '100%', sublabel: 'Completed' },
                            { icon: Activity, label: '2025 Drill Program', value: '22%', sublabel: 'In Progress' },
                            { icon: TrendingUp, label: 'Portfolio Projects', value: '4', sublabel: 'Active Assets' },
                            { icon: Users, label: 'Stakeholder Engagement', value: 'Active', sublabel: 'Ongoing' }
                        ].map((metric, i) => (
                            <div key={i} className="text-center group cursor-pointer">
                                <metric.icon className="text-brand-orange mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
                                <div className="text-4xl font-black mb-2">{metric.value}</div>
                                <div className="text-sm font-bold uppercase tracking-widest text-gray-400">{metric.label}</div>
                                <div className="text-xs text-gray-500 mt-1">{metric.sublabel}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-20 text-center">
                    <p className="text-gray-600 mb-6">
                        Stay updated on our progress through regular news releases and investor updates.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="/news" className="bg-brand-orange text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-brand-dark transition-all">
                            Latest News
                        </a>
                        <a href="/investors" className="border-2 border-brand-orange text-brand-orange px-8 py-4 font-bold uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all">
                            Investor Center
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Milestones;
