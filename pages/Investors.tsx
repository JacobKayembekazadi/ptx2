
import React from 'react';
import { Link } from 'react-router-dom';
import { Banner, Sidebar } from '../components/UIElements';
import { TrendingUp, FileText, Download, PieChart, Info, ShieldAlert, UserCheck, Lock, DollarSign, Users, BarChart3, ChevronRight, ArrowUpRight, Globe, Building2 } from 'lucide-react';

const Investors: React.FC = () => {
    const capitalData = [
        { label: "Basic Shares Outstanding", value: "171,150,598", highlight: false },
        { label: "Options (Avg Strike $0.18)", value: "8,262,500", highlight: false },
        { label: "Warrants", value: "39,298,000", highlight: false },
        { label: "Fully Diluted", value: "218,711,098", highlight: false },
        { label: "Market Cap", value: "~$20M", highlight: true },
        { label: "Cash Position", value: "~$6.0M", highlight: true },
    ];

    const shareholderData = [
        { label: "Ontario Retail", value: 27, color: "bg-brand-orange" },
        { label: "European Family Office & HNW", value: 19, color: "bg-blue-500" },
        { label: "Board, Management & Fancamp", value: 14, color: "bg-green-500" },
        { label: "OTC / United States", value: 10, color: "bg-purple-500" },
        { label: "Institutional & Other Retail", value: 30, color: "bg-gray-500" },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="relative min-h-[70vh] flex items-end bg-brand-dark overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/01/16170408/projects-bg.jpg')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/50" />
                </div>

                {/* Animated Background Grid */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-brand-orange/30 rounded-full blur-[150px]" />
                <div className="absolute bottom-40 left-20 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px]" />

                {/* Content */}
                <div className="container relative mx-auto px-6 z-10 pb-24 pt-32">
                    {/* Top Badge Row */}
                    <div className="flex flex-wrap items-center gap-4 mb-8 reveal-up">
                        <span className="inline-flex items-center gap-2 bg-brand-orange text-white text-[10px] font-black uppercase tracking-[0.25em] px-4 py-2 rounded-full shadow-lg shadow-brand-orange/30">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            Live Market Data
                        </span>
                        <div className="hidden md:flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-widest">
                            <span>TSX.V: PTX</span>
                            <span className="w-1 h-1 bg-gray-600 rounded-full" />
                            <span>OTCQB: PANXF</span>
                            <span className="w-1 h-1 bg-gray-600 rounded-full" />
                            <span>FRA: 9PX</span>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-12 items-end">
                        {/* Left Column - Main Info */}
                        <div className="lg:col-span-3 reveal-up">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[0.95] mb-6">
                                Stock<br />
                                <span className="text-brand-orange">Information</span>
                            </h1>

                            <p className="text-xl text-gray-300 font-light mb-8 max-w-xl leading-relaxed">
                                Real-time charts, capital structure, and comprehensive shareholder data for PTX Metals Inc.
                            </p>

                            {/* Quick Links */}
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/investors/presentations"
                                    className="group relative bg-brand-orange text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs overflow-hidden transition-all hover:shadow-xl hover:shadow-brand-orange/30 hover:-translate-y-1"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        View Presentations <ArrowUpRight size={14} />
                                    </span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
                                </Link>
                                <Link
                                    to="/investors/financials"
                                    className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all"
                                >
                                    Financial Reports
                                </Link>
                            </div>
                        </div>

                        {/* Right Column - Stock Ticker Cards */}
                        <div className="lg:col-span-2 hidden lg:block">
                            <div className="space-y-3">
                                {[
                                    { exchange: "TSX Venture", symbol: "PTX", primary: true, flag: "🇨🇦" },
                                    { exchange: "OTCQB", symbol: "PANXF", primary: false, flag: "🇺🇸" },
                                    { exchange: "Frankfurt", symbol: "9PX", primary: false, flag: "🇩🇪" },
                                ].map((ticker, idx) => (
                                    <div
                                        key={idx}
                                        className={`group flex items-center justify-between p-5 rounded-2xl border backdrop-blur-sm transition-all hover:-translate-x-2 cursor-pointer ${
                                            ticker.primary
                                                ? 'bg-brand-orange/20 border-brand-orange/40'
                                                : 'bg-white/5 border-white/10 hover:bg-white/10'
                                        }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="text-2xl">{ticker.flag}</span>
                                            <div>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">{ticker.exchange}</span>
                                                <span className={`text-2xl font-black ${ticker.primary ? 'text-brand-orange' : 'text-white'}`}>{ticker.symbol}</span>
                                            </div>
                                        </div>
                                        <ChevronRight size={20} className={`${ticker.primary ? 'text-brand-orange' : 'text-gray-500'} group-hover:translate-x-1 transition-transform`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
            </div>

            {/* Key Metrics Bar */}
            <div className="bg-white border-b border-gray-100 sticky top-[80px] z-20 shadow-sm">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between py-4 overflow-x-auto gap-8">
                        {[
                            { label: "Market Cap", value: "~$20M", highlight: true },
                            { label: "Cash", value: "~$6.0M", highlight: true },
                            { label: "Shares Out", value: "171.2M", highlight: false },
                            { label: "Fully Diluted", value: "218.7M", highlight: false },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 whitespace-nowrap">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{item.label}</span>
                                <span className={`text-lg font-black ${item.highlight ? 'text-brand-orange' : 'text-gray-900'}`}>{item.value}</span>
                            </div>
                        ))}
                        <a href="https://www.sedarplus.ca/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-brand-orange transition-colors whitespace-nowrap">
                            SEDAR+ <ArrowUpRight size={12} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">
                <div className="lg:w-3/4 space-y-12">

                    {/* Stock Charts - Primary Focus */}
                    <div className="space-y-8">
                        <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 overflow-hidden shadow-lg reveal-up">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-brand-orange/10 rounded-lg">
                                        <TrendingUp className="text-brand-orange" size={20} />
                                    </div>
                                    <h3 className="text-lg font-black tracking-tighter uppercase text-gray-900">Interactive Stock Chart</h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Live</span>
                                </div>
                            </div>
                            <iframe
                                src="https://feed.adnet.dev/platinexinc/charts-ptx.html"
                                width="100%" height="480" className="border-0 rounded-xl bg-gray-50 stock-chart" title="Chart"
                            />
                        </div>
                        <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 overflow-hidden shadow-lg reveal-up">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-50 rounded-lg">
                                        <BarChart3 className="text-blue-600" size={20} />
                                    </div>
                                    <h3 className="text-lg font-black tracking-tighter uppercase text-gray-900">Real-time Quotes</h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Live</span>
                                </div>
                            </div>
                            <iframe
                                src="https://feed.adnet.dev/platinexinc/quotes-ptx.html"
                                width="100%" height="400" className="border-0 rounded-xl bg-gray-50 stock-quote" title="Quote"
                            />
                        </div>
                    </div>

                    {/* Two Column: Capital Structure & Shareholder Mix */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Capital Structure */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg reveal-up">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-brand-orange/10 rounded-lg">
                                    <DollarSign className="text-brand-orange" size={20} />
                                </div>
                                <h3 className="text-lg font-black tracking-tighter uppercase text-gray-900">Capital Structure</h3>
                            </div>
                            <div className="space-y-4">
                                {capitalData.map((item, i) => (
                                    <div key={i} className={`flex items-center justify-between p-4 rounded-xl ${item.highlight ? 'bg-brand-orange/5 border border-brand-orange/20' : 'bg-gray-50'}`}>
                                        <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{item.label}</span>
                                        <span className={`text-lg font-black ${item.highlight ? 'text-brand-orange' : 'text-gray-900'}`}>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Shareholder Mix */}
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl shadow-xl reveal-up relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/10 rounded-full blur-[60px]" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-white/10 rounded-lg">
                                        <Users className="text-brand-orange" size={20} />
                                    </div>
                                    <h3 className="text-lg font-black tracking-tighter uppercase text-white">Shareholder Mix</h3>
                                </div>
                                <div className="space-y-4">
                                    {shareholderData.map((item, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
                                                <span className="text-gray-400">{item.label}</span>
                                                <span className="text-brand-orange">{item.value}%</span>
                                            </div>
                                            <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                                                <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value}%` }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Access Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 reveal-up">
                        {[
                            { title: "Presentations", desc: "Investor decks", icon: FileText, path: "/investors/presentations", color: "orange" },
                            { title: "Financials", desc: "SEDAR filings", icon: PieChart, path: "/investors/financials", color: "blue" },
                            { title: "Notice & Access", desc: "Meeting materials", icon: Users, path: "/investors/notice-access", color: "green" },
                            { title: "Cautionary", desc: "Legal disclosures", icon: ShieldAlert, path: "/investors/cautionary", color: "red" },
                        ].map((item, idx) => (
                            <Link key={idx} to={item.path} className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all ${
                                    item.color === 'orange' ? 'bg-brand-orange/10 group-hover:bg-brand-orange' :
                                    item.color === 'blue' ? 'bg-blue-50 group-hover:bg-blue-600' :
                                    item.color === 'green' ? 'bg-green-50 group-hover:bg-green-600' :
                                    'bg-red-50 group-hover:bg-red-600'
                                }`}>
                                    <item.icon className={`transition-colors ${
                                        item.color === 'orange' ? 'text-brand-orange group-hover:text-white' :
                                        item.color === 'blue' ? 'text-blue-600 group-hover:text-white' :
                                        item.color === 'green' ? 'text-green-600 group-hover:text-white' :
                                        'text-red-600 group-hover:text-white'
                                    }`} size={20} />
                                </div>
                                <h4 className="font-black uppercase tracking-tight text-gray-900 text-sm mb-1">{item.title}</h4>
                                <p className="text-gray-400 text-xs">{item.desc}</p>
                            </Link>
                        ))}
                    </div>

                    {/* Global Listings Banner */}
                    <div className="bg-gradient-to-r from-brand-dark via-gray-900 to-brand-dark p-8 md:p-10 rounded-3xl text-white reveal-up relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                                backgroundSize: '30px 30px'
                            }} />
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-[80px]" />
                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                                <div>
                                    <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Listed on Three Exchanges</h3>
                                    <p className="text-gray-400 font-light">Trade PTX Metals on major North American and European markets</p>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    {[
                                        { exchange: "TSX.V", symbol: "PTX", flag: "🇨🇦" },
                                        { exchange: "OTCQB", symbol: "PANXF", flag: "🇺🇸" },
                                        { exchange: "FRA", symbol: "9PX", flag: "🇩🇪" },
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10">
                                            <span className="text-xl">{item.flag}</span>
                                            <div>
                                                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500 block">{item.exchange}</span>
                                                <span className="text-lg font-black text-white">{item.symbol}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/4">
                    <Sidebar activeCategory="Investors" />
                </div>
            </div>
        </div>
    );
};

export const Presentations: React.FC = () => (
    <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative min-h-[50vh] flex items-center bg-brand-dark overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }} />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-20 w-[400px] h-[400px] bg-brand-orange/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]" />

            {/* Content */}
            <div className="container relative mx-auto px-6 z-10 py-20">
                <div className="max-w-3xl">
                    <Link to="/investors" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-xs font-bold uppercase tracking-widest mb-8 transition-colors">
                        <ChevronRight size={14} className="rotate-180" /> Back to Investors
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="inline-flex items-center gap-2 bg-brand-orange text-white text-[10px] font-black uppercase tracking-[0.25em] px-4 py-2 rounded-full">
                            <FileText size={12} /> Documents
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.95] mb-6">
                        Corporate<br /><span className="text-brand-orange">Presentations</span>
                    </h1>
                    <p className="text-xl text-gray-300 font-light max-w-xl leading-relaxed">
                        Download our latest investor decks, corporate presentations, and fact sheets.
                    </p>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
            <div className="lg:w-3/4 space-y-12">
                {/* Featured Presentation */}
                <div className="reveal-up">
                    <h2 className="text-xs font-black uppercase tracking-[0.3em] text-brand-orange mb-6">Featured</h2>
                    <div className="group bg-white p-10 rounded-3xl border border-gray-100 hover:border-brand-orange/50 hover:shadow-2xl transition-all relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-[80px] group-hover:bg-brand-orange/10 transition-all" />
                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div className="flex items-start gap-6">
                                <div className="bg-brand-orange/10 p-5 rounded-2xl group-hover:bg-brand-orange transition-all">
                                    <FileText className="text-brand-orange group-hover:text-white transition-colors" size={36} />
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange mb-2 block">February 2026</span>
                                    <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-2">Corporate Presentation</h3>
                                    <p className="text-gray-500 font-light">High-Grade Gold & Critical Minerals Strategy — W2 Project Update</p>
                                </div>
                            </div>
                            <button className="flex items-center gap-3 bg-brand-dark text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-brand-orange transition-all shadow-lg group-hover:shadow-xl">
                                <Download size={18} /> Download PDF
                            </button>
                        </div>
                    </div>
                </div>

                {/* Other Documents */}
                <div className="reveal-up">
                    <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Additional Resources</h2>
                    <div className="space-y-4">
                        {[
                            { title: "Company Fact Sheet — Q1 2026", desc: "Quick Overview & Key Metrics", color: "blue" },
                            { title: "Investor One-Pager", desc: "Executive Summary for Institutional Investors", color: "green" },
                            { title: "Technical Presentation — W2 Gold Project", desc: "Geology, Drill Results & Resource Estimates", color: "purple" },
                        ].map((doc, idx) => (
                            <div key={idx} className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all flex items-center justify-between">
                                <div className="flex items-center gap-5">
                                    <div className={`p-4 rounded-xl ${doc.color === 'blue' ? 'bg-blue-50 group-hover:bg-blue-600' : doc.color === 'green' ? 'bg-green-50 group-hover:bg-green-600' : 'bg-purple-50 group-hover:bg-purple-600'} transition-all`}>
                                        <FileText className={`${doc.color === 'blue' ? 'text-blue-600' : doc.color === 'green' ? 'text-green-600' : 'text-purple-600'} group-hover:text-white transition-colors`} size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-black uppercase tracking-tight text-gray-900 mb-1">{doc.title}</h4>
                                        <p className="text-gray-400 text-sm">{doc.desc}</p>
                                    </div>
                                </div>
                                <button className={`p-3 rounded-full ${doc.color === 'blue' ? 'text-blue-600 hover:bg-blue-600' : doc.color === 'green' ? 'text-green-600 hover:bg-green-600' : 'text-purple-600 hover:bg-purple-600'} hover:text-white transition-all`}>
                                    <Download size={20} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Archive Section */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-10 rounded-3xl reveal-up">
                    <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-6">Presentation Archive</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {['Q4 2025', 'Q3 2025', 'Q2 2025', 'Q1 2025'].map((quarter) => (
                            <button key={quarter} className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-all group">
                                <span className="font-bold text-gray-700 group-hover:text-brand-orange transition-colors">{quarter} Corporate Presentation</span>
                                <Download size={16} className="text-gray-400 group-hover:text-brand-orange transition-colors" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="lg:w-1/4">
                <Sidebar activeCategory="Investors" />
            </div>
        </div>
    </div>
);

export const Financials: React.FC = () => (
    <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative min-h-[50vh] flex items-center bg-brand-dark overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }} />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-20 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-orange/10 rounded-full blur-[100px]" />

            {/* Content */}
            <div className="container relative mx-auto px-6 z-10 py-20">
                <div className="max-w-3xl">
                    <Link to="/investors" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-xs font-bold uppercase tracking-widest mb-8 transition-colors">
                        <ChevronRight size={14} className="rotate-180" /> Back to Investors
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="inline-flex items-center gap-2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.25em] px-4 py-2 rounded-full">
                            <PieChart size={12} /> Financials
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.95] mb-6">
                        Financial<br /><span className="text-blue-400">Statements</span>
                    </h1>
                    <p className="text-xl text-gray-300 font-light max-w-xl leading-relaxed">
                        Access our quarterly and annual financial reports, MD&A documents, and SEDAR filings.
                    </p>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
            <div className="lg:w-3/4 space-y-12">
                {/* Latest Reports */}
                <div className="reveal-up">
                    <h2 className="text-xs font-black uppercase tracking-[0.3em] text-brand-orange mb-6">Latest Reports</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Q4 2025 Financial Statements", type: "Annual", date: "Dec 31, 2025" },
                            { title: "Q4 2025 MD&A", type: "Analysis", date: "Dec 31, 2025" },
                        ].map((doc, idx) => (
                            <div key={idx} className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[50px] group-hover:bg-blue-500/10 transition-all" />
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{doc.type}</span>
                                        <span className="text-xs text-gray-400">{doc.date}</span>
                                    </div>
                                    <h3 className="text-lg font-black uppercase tracking-tight text-gray-900 mb-4">{doc.title}</h3>
                                    <button className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest hover:text-blue-800 transition-colors">
                                        <Download size={14} /> Download PDF
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quarterly Reports */}
                <div className="reveal-up">
                    <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-6">2025 Quarterly Reports</h2>
                    <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
                        {['Q3 2025', 'Q2 2025', 'Q1 2025'].map((quarter, idx) => (
                            <div key={idx} className={`flex items-center justify-between p-6 hover:bg-gray-50 transition-all ${idx !== 2 ? 'border-b border-gray-100' : ''}`}>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                                        <FileText size={20} className="text-gray-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-black uppercase tracking-tight text-gray-900">{quarter}</h4>
                                        <p className="text-gray-400 text-sm">Financial Statements & MD&A</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-brand-orange transition-colors">Statements</button>
                                    <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-brand-orange transition-colors">MD&A</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SEDAR Link */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-3xl text-white reveal-up relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-2">SEDAR+ Filings</h3>
                            <p className="text-blue-200 font-light">Access all historical filings and regulatory documents on SEDAR+</p>
                        </div>
                        <a href="https://www.sedarplus.ca/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:shadow-xl transition-all">
                            Visit SEDAR+ <ArrowUpRight size={14} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/4">
                <Sidebar activeCategory="Investors" />
            </div>
        </div>
    </div>
);

export const NoticeAndAccess: React.FC = () => (
    <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative min-h-[50vh] flex items-center bg-brand-dark overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }} />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-20 w-[400px] h-[400px] bg-green-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-orange/10 rounded-full blur-[100px]" />

            {/* Content */}
            <div className="container relative mx-auto px-6 z-10 py-20">
                <div className="max-w-3xl">
                    <Link to="/investors" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-xs font-bold uppercase tracking-widest mb-8 transition-colors">
                        <ChevronRight size={14} className="rotate-180" /> Back to Investors
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="inline-flex items-center gap-2 bg-green-600 text-white text-[10px] font-black uppercase tracking-[0.25em] px-4 py-2 rounded-full">
                            <Users size={12} /> Shareholders
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.95] mb-6">
                        Notice &<br /><span className="text-green-400">Access</span>
                    </h1>
                    <p className="text-xl text-gray-300 font-light max-w-xl leading-relaxed">
                        Access shareholder meeting materials online. We're committed to reducing paper use while keeping you informed.
                    </p>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
            <div className="lg:w-3/4 space-y-12">
                {/* Featured Meeting */}
                <div className="reveal-up">
                    <h2 className="text-xs font-black uppercase tracking-[0.3em] text-brand-orange mb-6">Upcoming Meeting</h2>
                    <div className="group bg-white p-10 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/5 rounded-full blur-[80px] group-hover:bg-green-500/10 transition-all" />
                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-green-600 bg-green-50 px-3 py-1 rounded-full">Annual General Meeting</span>
                                    <h3 className="text-3xl font-black uppercase tracking-tight text-gray-900 mt-4">AGM 2026</h3>
                                    <p className="text-gray-500 font-light mt-2">Notice of Annual General Meeting of Shareholders</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-4xl font-black text-green-600">TBD</p>
                                    <p className="text-gray-400 text-sm uppercase tracking-widest">Meeting Date</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex items-center justify-center gap-3 bg-brand-dark text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-brand-orange transition-all shadow-lg">
                                    <Download size={16} /> Notice Packet
                                </button>
                                <button className="flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-green-700 transition-all shadow-lg">
                                    <FileText size={16} /> Information Circular
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Notice and Access */}
                <div className="reveal-up">
                    <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-6">About Notice and Access</h2>
                    <div className="bg-white p-10 rounded-3xl border border-gray-100">
                        <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                            PTX Metals is utilizing Notice and Access provisions to provide shareholders with electronic access to meeting materials. This approach reduces printing and mailing costs while minimizing environmental impact.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { icon: "🌱", title: "Eco-Friendly", desc: "Reduces paper waste and environmental footprint" },
                                { icon: "⚡", title: "Instant Access", desc: "Documents available immediately online" },
                                { icon: "📱", title: "Any Device", desc: "View materials on desktop, tablet, or mobile" },
                            ].map((item, idx) => (
                                <div key={idx} className="text-center p-6 bg-gray-50 rounded-2xl">
                                    <span className="text-3xl mb-4 block">{item.icon}</span>
                                    <h4 className="font-black uppercase tracking-tight text-gray-900 mb-2">{item.title}</h4>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Historical Meetings */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-10 rounded-3xl reveal-up">
                    <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-6">Previous Meetings</h3>
                    <div className="space-y-4">
                        {['AGM 2025', 'AGM 2024', 'AGM 2023'].map((meeting) => (
                            <div key={meeting} className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-all group">
                                <span className="font-bold text-gray-700 group-hover:text-brand-orange transition-colors">{meeting} Materials</span>
                                <div className="flex gap-2">
                                    <button className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-brand-orange transition-colors">Notice</button>
                                    <span className="text-gray-300">|</span>
                                    <button className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-brand-orange transition-colors">Circular</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="lg:w-1/4">
                <Sidebar activeCategory="Investors" />
            </div>
        </div>
    </div>
);

export const CautionaryNotes: React.FC = () => (
    <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative min-h-[50vh] flex items-center bg-brand-dark overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }} />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-20 w-[400px] h-[400px] bg-red-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-orange/10 rounded-full blur-[100px]" />

            {/* Content */}
            <div className="container relative mx-auto px-6 z-10 py-20">
                <div className="max-w-3xl">
                    <Link to="/investors" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-xs font-bold uppercase tracking-widest mb-8 transition-colors">
                        <ChevronRight size={14} className="rotate-180" /> Back to Investors
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="inline-flex items-center gap-2 bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.25em] px-4 py-2 rounded-full">
                            <ShieldAlert size={12} /> Legal
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.95] mb-6">
                        Cautionary<br /><span className="text-red-400">Notes</span>
                    </h1>
                    <p className="text-xl text-gray-300 font-light max-w-xl leading-relaxed">
                        Important legal disclosures, forward-looking statements, and regulatory compliance information.
                    </p>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
            <div className="lg:w-3/4 space-y-8">
                {/* Quick Nav */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 sticky top-24 z-20 reveal-up">
                    <div className="flex flex-wrap gap-3">
                        {['General', 'Forward-Looking', 'Qualified Person', 'Privacy'].map((item, idx) => (
                            <a key={idx} href={`#section-${idx}`} className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-brand-orange hover:bg-brand-orange/5 rounded-full transition-all">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>

                {/* General */}
                <section id="section-0" className="bg-white p-10 rounded-3xl border border-gray-100 reveal-up">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="p-3 bg-brand-orange/10 rounded-xl">
                            <Info className="text-brand-orange" size={24} />
                        </div>
                        <h2 className="text-2xl font-black uppercase tracking-tighter text-gray-900">General Information</h2>
                    </div>
                    <p className="text-lg text-gray-600 font-light leading-relaxed">
                        Information presented on this website has been prepared by PTX Metals Inc. and should be read in conjunction with the Company's final listing applications to the TSX Venture Exchange (2005) and Canadian Securities Exchange (2017), its management discussion and analysis documents, and other SEDAR filings. Nothing included on this website constitutes a prospectus or public offering for financing. Interested investors should seek advice from their investment advisors.
                    </p>
                </section>

                {/* Forward-Looking */}
                <section id="section-1" className="bg-white p-10 rounded-3xl border border-gray-100 reveal-up">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="p-3 bg-red-50 rounded-xl">
                            <ShieldAlert className="text-red-600" size={24} />
                        </div>
                        <h2 className="text-2xl font-black uppercase tracking-tighter text-gray-900">Forward-Looking Statements</h2>
                    </div>
                    <div className="space-y-6">
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                            Information presented on this website may include "forward-looking statements" which reflect the Company's expectations with respect to future events and are based on information currently available to the Company. Wherever possible, words such as "may", "would", "could", "will", "anticipate", "believe", "plan", "expect" and similar expressions have been used to identify these forward-looking statements.
                        </p>
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                            <p className="text-red-800 font-medium">
                                Forward-looking statements involve significant known and unknown risks, uncertainties and assumptions. A number of factors could cause actual results, performance or achievements to be materially different from any future results, performance or achievements that may be expressed or implied by such forward-looking statements.
                            </p>
                        </div>
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                            Although forward-looking statements on this website are based upon what the Company currently believes to be reasonable assumptions, the Company cannot assure prospective investors that actual results, performance or achievements will be consistent with these forward-looking statements. These forward-looking statements are made as of the date of addition to this website and the Company does not assume any obligation to update or revise these forward-looking statements to reflect new events or circumstances.
                        </p>
                    </div>
                </section>

                {/* Qualified Person */}
                <section id="section-2" className="bg-gradient-to-br from-brand-dark to-gray-900 p-10 rounded-3xl text-white reveal-up relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-[80px]" />
                    <div className="relative z-10">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="p-3 bg-brand-orange/20 rounded-xl">
                                <UserCheck className="text-brand-orange" size={24} />
                            </div>
                            <h2 className="text-2xl font-black uppercase tracking-tighter">Qualified Person</h2>
                        </div>
                        <p className="text-lg text-gray-300 font-light leading-relaxed mb-6">
                            Technical information presented on this website has been prepared in accordance with the Canadian regulatory requirements set out in National Instrument 43-101.
                        </p>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                            <p className="text-xl font-black text-brand-orange mb-1">James R. Trusler, P.Eng</p>
                            <p className="text-gray-400 text-sm uppercase tracking-widest">Chairman & Qualified Person (NI 43-101)</p>
                        </div>
                    </div>
                </section>

                {/* Privacy */}
                <section id="section-3" className="bg-white p-10 rounded-3xl border border-gray-100 reveal-up">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="p-3 bg-purple-50 rounded-xl">
                            <Lock className="text-purple-600" size={24} />
                        </div>
                        <h2 className="text-2xl font-black uppercase tracking-tighter text-gray-900">Privacy Policy</h2>
                    </div>
                    <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                        PTX Metals' website does not collect any personal information about visitors to this website other than that which is specifically and knowingly provided by you. That personal information will not be transferred to any third party unless otherwise stated at the time of collection.
                    </p>
                    <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                        PTX Metals may collect and maintain statistics relating to the number of visits to the website, the types of browsers used and the Internet Protocol Address of the originator. This information is used only for internal purposes.
                    </p>
                    <div className="flex items-center gap-4 p-6 bg-purple-50 rounded-2xl">
                        <Lock className="text-purple-600" size={20} />
                        <p className="text-purple-800">
                            Questions? Contact us at <a href="mailto:info@ptxmetals.com" className="font-bold hover:underline">info@ptxmetals.com</a>
                        </p>
                    </div>
                </section>
            </div>
            <div className="lg:w-1/4">
                <Sidebar activeCategory="Investors" />
            </div>
        </div>
    </div>
);

export default Investors;
