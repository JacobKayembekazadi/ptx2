
import React from 'react';
import { Banner, Sidebar } from '../components/UIElements';
import { useNavigation } from '../components/NavigationContext';
import { Calendar, ArrowLeft, Share2, Download, ExternalLink, ChevronRight, PlayCircle } from 'lucide-react';

const NewsSidebar: React.FC = () => {
  const years = ['2025', '2024', '2023', '2022', '2021', '2020'];
  return (
    <div className="bg-gray-50 p-8 rounded border border-gray-100 shadow-sm sticky top-32">
      <h3 className="text-lg font-extrabold text-gray-800 uppercase tracking-widest border-b-2 border-brand-orange pb-2 mb-6 inline-block">
        News Archive
      </h3>
      <ul className="space-y-2">
        {years.map((year) => (
          <li key={year}>
            <button className="w-full text-left px-4 py-3 rounded transition-all flex justify-between items-center group text-gray-600 hover:bg-gray-200 hover:text-gray-900">
              <span>{year} Releases</span>
              <ChevronRight size={16} className="transition-transform -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const News: React.FC = () => {
  const { navigateTo } = useNavigation();

  const newsItems = [
    {
      date: 'Dec 1, 2025',
      title: 'PTX METALS LAUNCHES 5,000M DRILL PROGRAM AT W2 COPPER-NICKEL-PGE-GOLD PROJECT',
      summary: 'Commencement of a 5,000m diamond drilling program focused on the Central Target with initial holes targeting CA1 and AP zones.',
      page: 'news-article-w2-drill' as const
    },
    {
      date: 'Nov 12, 2025',
      title: 'PTX Metals Announces Closing of Strategic Financing',
      summary: 'Completion of a non-brokered private placement to fund exploration activities at the W2 and South Timmins projects.',
      page: 'news' as const
    },
    {
      date: 'Oct 25, 2025',
      title: 'High-Resolution LIDAR Survey Completed at W2 Central Target',
      summary: 'LIDAR orthophoto survey flown by KBM Resources Group provides critical data for drill planning and infrastructure development.',
      page: 'news' as const
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Banner 
        title="NEWS RELEASES" 
        subtitle="The Latest Updates from PTX Metals" 
        image="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/04/12092016/Photo-2024-04-06-3-06-48%E2%80%AFPM-scaled.jpg" 
      />
      
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-3/4 space-y-12">
          {newsItems.map((item, idx) => (
            <div key={idx} className="group border-b border-gray-100 pb-12 last:border-0 reveal-up">
              <div className="flex items-center space-x-4 mb-4">
                <Calendar className="text-brand-orange" size={16} />
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{item.date}</span>
              </div>
              <h3 
                onClick={() => navigateTo(item.page)}
                className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 cursor-pointer group-hover:text-brand-orange transition-colors leading-tight"
              >
                {item.title}
              </h3>
              <p className="text-gray-600 font-light text-lg mb-6 leading-relaxed">{item.summary}</p>
              <button 
                onClick={() => navigateTo(item.page)}
                className="inline-flex items-center text-xs font-black uppercase tracking-[0.2em] text-black border-b-2 border-brand-orange pb-1 hover:text-brand-orange transition-colors"
              >
                Read Full Release <ChevronRight size={14} className="ml-1" />
              </button>
            </div>
          ))}
        </div>
        <div className="lg:w-1/4">
          <NewsSidebar />
        </div>
      </div>
    </div>
  );
};

export const NewsArticleW2Drill: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-[500px] w-full flex items-end pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/04/12092016/Photo-2024-04-06-3-06-48%E2%80%AFPM-scaled.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="container relative mx-auto px-6">
            <button onClick={() => navigateTo('news')} className="flex items-center text-white/60 hover:text-brand-orange transition-colors font-bold uppercase text-[10px] tracking-widest mb-8">
                <ArrowLeft size={16} className="mr-2" /> Back to News
            </button>
            <div className="max-w-4xl border-l-4 border-brand-orange pl-8">
                <div className="text-brand-orange font-bold uppercase text-xs tracking-widest mb-4">December 1, 2025 | W2 Project</div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-[1.1]">
                    PTX METALS LAUNCHES 5,000M DRILL PROGRAM AT W2 COPPER-NICKEL-PGE-GOLD PROJECT
                </h1>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-3/4">
          <div className="prose prose-xl prose-orange max-w-none text-gray-700 font-light leading-relaxed space-y-8">
            <p className="font-bold text-black border-l-2 border-gray-100 pl-6">
                TORONTO, December 1st, 2025 (NEWSFILE) – PTX Metals Inc. (TSXV: PTX) (OTCQB: PANXF) (Frankfurt: 9PX) (“PTX” or the “Company”) is pleased to announce commencement of a 5,000m diamond drilling program at its W2 Copper-Nickel and Platinum-Palladium-Gold (PGE) Project in Ontario, Canada.
            </p>
            
            <p>
                Drilling is focused on the Central Target with the initial holes targeting the CA1 and AP zones. The objectives of the first phase of the program are to test and delineate known exploratory targets with the goal of enhancing the resource estimate, as well as expand the identified mineralized bodies with step-out holes within geologically prospective zones.
            </p>

            <div className="my-16 reveal-up">
                <img 
                    src="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2025/12/01070922/Picture1-FINAL-1.png" 
                    className="w-full rounded-3xl shadow-2xl border border-gray-100" 
                    alt="Drill Pad Location" 
                />
                <p className="text-center text-sm text-gray-400 mt-6 italic">
                    Figure 1: Drill pad location within the CA1 zone of the Central Target and a section of the W225-14 hole targeting the mag anomaly.
                </p>
            </div>

            <p>
                Drill planning was based on multiple lines of geological evidence, leading to targeting of a never-before-tested geological interpretation of the property which is expected to more precisely guide current and future drilling at the W2 property. Data considered during drill planning includes, but is not limited to, previous PTX and historic drilling cumulating more than a 120 drill holes, the recent 2025 high-resolution magnetic survey and the subsequent 3D inversion model.
            </p>

            <div className="bg-brand-dark rounded-3xl p-12 text-white relative overflow-hidden my-16 reveal-up">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <PlayCircle size={100} className="text-brand-orange" />
                </div>
                <p className="text-2xl font-light italic leading-relaxed relative z-10">
                    "We are particularly excited to be back drilling at the W2 Project this year with a more extensive program. We have taken significant steps for the Project and for the Company to improve our geological understanding of the deposit, that we are now ready to further test and build on the large exploration target issued in 2024."
                </p>
                <div className="mt-8">
                    <span className="font-black uppercase tracking-widest text-brand-orange">Greg Ferron</span>
                    <span className="block text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">President & CEO, PTX Metals</span>
                </div>
            </div>

            <div className="my-16 reveal-up">
                <img 
                    src="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2025/12/01074904/picture-1-1024x579.jpg" 
                    className="w-full rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
                    alt="Cyr Drilling rig" 
                />
                <p className="text-center text-sm text-gray-400 mt-6 italic">
                    Picture 1: Cyr Drilling rig currently drilling at the W2 Project.
                </p>
            </div>

            <h3 className="text-3xl font-black uppercase tracking-tighter text-black mt-20 mb-8">Ongoing Activities</h3>
            <p>
                The Company continues to advance the project increasing knowledge with the preliminary metallurgical results received, highly anticipated impending age dating, paragenesis study, resource modeling and geological 3D interpretations still pending for results. Additionally, a high-resolution topography and orthophoto LIDAR survey was flown by KBM Resources Group and completed on October 25th for the Central Target.
            </p>

            <div className="bg-gray-50 p-10 border-l-4 border-brand-orange rounded-r-2xl mt-20">
                <h4 className="text-xl font-black uppercase mb-4 tracking-tight">Forward-Looking Information</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                    This news release contains forward-looking information which is not comprised of historical facts. Forward-looking information involves risks, uncertainties and other factors that could cause actual events, results, and opportunities to differ materially from those expressed or implied by such information.
                </p>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/4 space-y-12">
            <div className="bg-brand-orange p-10 rounded-2xl text-white shadow-xl">
                <Share2 className="mb-6" />
                <h4 className="font-black uppercase tracking-tight text-xl mb-4">Share this Release</h4>
                <div className="flex space-x-4">
                    <button className="p-3 bg-white/20 rounded-full hover:bg-white/40 transition-colors"><Share2 size={20} /></button>
                </div>
            </div>
            <a 
                href="#" 
                className="flex items-center justify-between p-8 bg-gray-50 border border-gray-100 rounded-2xl hover:border-brand-orange transition-all group"
            >
                <div>
                    <h4 className="font-black uppercase text-sm tracking-tight">Full PDF Version</h4>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest tracking-widest">Download Press Release</span>
                </div>
                <Download className="text-gray-300 group-hover:text-brand-orange transition-colors" size={24} />
            </a>
            <NewsSidebar />
        </div>
      </div>
    </div>
  );
};

export default News;
