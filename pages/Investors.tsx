
import React from 'react';
import { Banner, Sidebar } from '../components/UIElements';
import { TrendingUp, FileText, Download, PieChart, Info, ShieldAlert, UserCheck, Lock } from 'lucide-react';

const Investors: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Banner title="Stock Information" subtitle="Real-time Charts and Market Data" image="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/01/16170408/projects-bg.jpg" />
      
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-3/4 space-y-16">
            {/* Iframes */}
            <div className="space-y-12">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 overflow-hidden shadow-sm reveal-up">
                    <h3 className="text-xl font-bold mb-6 flex items-center tracking-tighter uppercase"><TrendingUp className="mr-2 text-brand-orange" /> Interactive Stock Chart</h3>
                    <iframe 
                        src="https://feed.adnet.dev/platinexinc/charts-ptx.html" 
                        width="100%" height="520" className="border-0 rounded-lg bg-white stock-chart" title="Chart" 
                    />
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 overflow-hidden shadow-sm reveal-up">
                    <h3 className="text-xl font-bold mb-6 flex items-center tracking-tighter uppercase"><TrendingUp className="mr-2 text-brand-orange" /> Real-time Quotes</h3>
                    <iframe 
                        src="https://feed.adnet.dev/platinexinc/quotes-ptx.html" 
                        width="100%" height="450" className="border-0 rounded-lg bg-white stock-quote" title="Quote" 
                    />
                </div>
            </div>

            {/* General Info */}
            <div className="bg-brand-dark p-12 rounded-2xl text-white reveal-up border-t-4 border-brand-orange">
                <div className="flex items-center space-x-4 mb-6">
                    <Info className="text-brand-orange" />
                    <h2 className="text-3xl font-black uppercase tracking-tighter">Listing Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <span className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">TSX Venture</span>
                        <p className="text-2xl font-black">PTX</p>
                    </div>
                    <div>
                        <span className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">Frankfurt</span>
                        <p className="text-2xl font-black">9PX</p>
                    </div>
                    <div>
                        <span className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">OTCQB</span>
                        <p className="text-2xl font-black">PANXF</p>
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
    <div className="bg-white min-h-screen">
      <Banner title="Presentations" subtitle="Corporate Updates and Event Deck" image="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/01/16170408/projects-bg.jpg" />
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-3/4 space-y-8">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Corporate Deck</h2>
            <div className="p-10 border border-gray-100 rounded-2xl flex items-center justify-between hover:border-brand-orange transition-all group">
                <div className="flex items-center space-x-6">
                    <FileText className="text-gray-300 group-hover:text-brand-orange transition-colors" size={32} />
                    <div>
                        <h4 className="font-black uppercase tracking-tight">Investor Presentation 2025</h4>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Download PDF | Updated Q4 2025</p>
                    </div>
                </div>
                <button className="p-4 bg-gray-50 rounded-full text-brand-orange hover:bg-brand-orange hover:text-white transition-all"><Download size={24} /></button>
            </div>
        </div>
        <div className="lg:w-1/4">
          <Sidebar activeCategory="Investors" />
        </div>
      </div>
    </div>
);

export const Financials: React.FC = () => (
    <div className="bg-white min-h-screen">
      <Banner title="Financial Statements" subtitle="SEDAR Filings and Regulatory Docs" image="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/01/16170408/projects-bg.jpg" />
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-3/4">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-12">SEDAR Filings</h2>
            <div className="space-y-4">
                {['Q3 2025 Financials', 'Q3 2025 MD&A', 'Q2 2025 Financials', 'Q2 2025 MD&A'].map(doc => (
                    <div key={doc} className="p-6 bg-gray-50 flex items-center justify-between rounded-xl hover:bg-white hover:shadow-md transition-all">
                        <span className="font-bold text-gray-700 uppercase tracking-tight">{doc}</span>
                        <button className="text-brand-orange font-black text-xs uppercase tracking-widest flex items-center"><Download size={14} className="mr-2"/> PDF</button>
                    </div>
                ))}
            </div>
        </div>
        <div className="lg:w-1/4">
          <Sidebar activeCategory="Investors" />
        </div>
      </div>
    </div>
);

export const NoticeAndAccess: React.FC = () => (
    <div className="bg-white min-h-screen">
      <Banner title="Notice and Access" subtitle="Shareholder Meeting Information" image="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/01/16170408/projects-bg.jpg" />
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-3/4">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">Shareholder Documents</h2>
            <p className="text-xl font-light text-gray-600 mb-10 leading-relaxed">PTX Metals is utilizing Notice and Access to provide shareholders with access to meeting materials online, reducing paper use and environmental impact.</p>
            <div className="bg-gray-50 p-12 border-l-4 border-brand-orange rounded-r-2xl">
                <h4 className="text-xl font-black uppercase mb-4">Notice of AGM 2025</h4>
                <p className="font-bold text-gray-400 uppercase text-xs tracking-[0.2em]">Annual General Meeting Documentation</p>
                <button className="mt-8 bg-brand-dark text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-brand-orange transition-all">Download Notice Packet</button>
            </div>
        </div>
        <div className="lg:w-1/4">
          <Sidebar activeCategory="Investors" />
        </div>
      </div>
    </div>
);

export const CautionaryNotes: React.FC = () => (
    <div className="bg-white min-h-screen">
      <Banner 
        title="Cautionary Notes" 
        subtitle="Forward Looking Statements & Compliance" 
        image="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/01/16170408/projects-bg.jpg" 
      />
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-3/4 space-y-16">
            
            <section className="reveal-up">
                <div className="flex items-center space-x-4 mb-6">
                    <Info className="text-brand-orange" size={24} />
                    <h2 className="text-3xl font-black uppercase tracking-tighter">General</h2>
                </div>
                <div className="prose prose-orange max-w-none">
                    <p className="text-lg text-gray-700 font-light leading-relaxed">
                        Information presented on this website has been prepared by PTX Metals Inc. and should be read in conjunction with the Company’s final listing applications to the TSX Venture Exchange (2005) and Canadian Securities Exchange (2017), its management discussion and analysis documents, and other SEDAR filings. Nothing included on this website constitutes a prospectus or public offering for financing. Interested investors should seek advice from their investment advisors.
                    </p>
                </div>
            </section>

            <section className="reveal-up">
                <div className="flex items-center space-x-4 mb-6">
                    <ShieldAlert className="text-brand-orange" size={24} />
                    <h2 className="text-3xl font-black uppercase tracking-tighter">Forward-Looking Statements</h2>
                </div>
                <div className="prose prose-orange max-w-none space-y-6">
                    <p className="text-lg text-gray-700 font-light leading-relaxed">
                        Information presented on this website may include “forward-looking statements” which reflect the Company’s expectations with respect to future events and are based on information currently available to the Company. Wherever possible, words such as “may”, “would”, “could”, “will”, “anticipate”, “believe”, “plan”, “expect” and similar expressions have been used to identify these forward-looking statements.
                    </p>
                    <p className="text-lg text-gray-700 font-light leading-relaxed">
                        Forward-looking statements involve significant known and unknown risks, uncertainties and assumptions. A number of factors could cause actual results, performance or achievements to be materially different from any future results, performance or achievements that may be expressed or implied by such forward-looking statements. Although forward-looking statements on this website are based upon what the Company currently believes to be reasonable assumptions, the Company cannot assure prospective investors that actual results, performance or achievements will be consistent with these forward-looking statements. These forward-looking statements are made as of the date of addition to this website and the Company does not assume any obligation to update or revise these forward-looking statements to reflect new events or circumstances.
                    </p>
                </div>
            </section>

            <section className="reveal-up">
                <div className="flex items-center space-x-4 mb-6">
                    <UserCheck className="text-brand-orange" size={24} />
                    <h2 className="text-3xl font-black uppercase tracking-tighter">Qualified Person</h2>
                </div>
                <div className="bg-gray-50 p-10 border-l-4 border-brand-orange rounded-r-2xl">
                    <p className="text-lg text-gray-700 font-light leading-relaxed">
                        Technical information presented on this website has been prepared in accordance with the Canadian regulatory requirements set out in National Instrument 43-101. <span className="font-bold text-black">James R. Trusler, Chairman, P.Eng</span>, is a qualified person as defined by National Instrument 43-101 and has reviewed the technical information presented on this website.
                    </p>
                </div>
            </section>

            <section className="reveal-up">
                <div className="flex items-center space-x-4 mb-6">
                    <Lock className="text-brand-orange" size={24} />
                    <h2 className="text-3xl font-black uppercase tracking-tighter">Privacy</h2>
                </div>
                <div className="prose prose-orange max-w-none">
                    <p className="text-lg text-gray-700 font-light leading-relaxed">
                        PTX Metals’ website does not collect any personal information about visitors to this website other than that which is specifically and knowingly provided by you. That personal information will not be transferred to any third party unless otherwise stated at the time of collection. PTX Metals may collect and maintain statistics relating to the number of visits to the website, the types of browsers used and the Internet Protocol Address of the originator. This information is used only for internal purposes. Any questions or concerns relating to the privacy or confidentiality of this website should be directed to PTX Metals at <a href="mailto:info@ptxmetals.com" className="text-brand-orange font-bold hover:underline">info@ptxmetals.com</a>.
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
