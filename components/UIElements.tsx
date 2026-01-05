
import React from 'react';
import { Page, TeamMemberProps } from '../types';
import { useNavigation } from './NavigationContext';
import { ChevronRight } from 'lucide-react';

export const Banner: React.FC<{ title: string; image: string; subtitle?: string }> = ({ title, image, subtitle }) => {
  return (
    <div className="relative h-[400px] w-full flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative mx-auto px-6">
        <div className="max-w-2xl border-l-4 border-brand-orange pl-8">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tighter mb-4">
            {title}
          </h1>
          {subtitle && <p className="text-xl text-gray-300 font-medium">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export const Sidebar: React.FC<{ activeCategory: string }> = ({ activeCategory }) => {
  const { currentPage, navigateTo } = useNavigation();

  const navGroups: Record<string, { label: string; id: Page }[]> = {
    'Corporate': [
      { id: 'about-us', label: 'About Us' },
      { id: 'management', label: 'Management' },
      { id: 'board', label: 'Board of Directors' },
      { id: 'advisors', label: 'Technical Advisors' },
    ],
    'Projects': [
      { id: 'projects-w2', label: 'W2 Cu-Ni-PGE' },
      { id: 'projects-shining', label: 'Shining Tree Gold' },
      { id: 'projects-heenan', label: 'Heenan Mallard Gold' },
      { id: 'projects-royalty', label: 'Royalty Portfolio' },
    ],
    'Investors': [
      { id: 'investors', label: 'Stock Information' },
      { id: 'presentations', label: 'Corporate Presentation' },
      { id: 'financials', label: 'Financial Statements' },
      { id: 'notice-access', label: 'Notice and Access' },
      { id: 'cautionary', label: 'Cautionary Notes' },
    ],
    'News': [
      { id: 'news', label: 'News Releases' },
      { id: 'news-article-w2-drill', label: 'W2 Drill Launch' }
    ],
    'Contact': [
      { id: 'contact', label: 'Contact Us' },
      { id: 'subscribe', label: 'Subscribe' }
    ]
  };

  const currentLinks = navGroups[activeCategory] || [];

  return (
    <div className="bg-gray-50 p-8 rounded border border-gray-100 shadow-sm sticky top-32">
      <h3 className="text-lg font-extrabold text-gray-800 uppercase tracking-widest border-b-2 border-brand-orange pb-2 mb-6 inline-block">
        {activeCategory}
      </h3>
      <ul className="space-y-2">
        {currentLinks.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => navigateTo(link.id)}
              className={`w-full text-left px-4 py-3 rounded transition-all flex justify-between items-center group ${
                currentPage === link.id
                  ? 'bg-brand-orange text-white font-bold shadow-lg transform translate-x-2'
                  : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              <span>{link.label}</span>
              <ChevronRight size={16} className={`transition-transform ${currentPage === link.id ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const TeamMember: React.FC<TeamMemberProps> = ({ name, title, bio }) => (
  <div className="mb-12 border-b border-gray-100 pb-12 last:border-0">
    <h3 className="text-2xl font-extrabold text-gray-800 tracking-tight">{name}</h3>
    <div className="text-brand-orange font-bold uppercase text-xs tracking-widest mt-1 mb-6 flex items-center">
      <span className="w-8 h-px bg-brand-orange mr-3"></span>
      {title}
    </div>
    {bio && <p className="text-gray-600 leading-relaxed text-lg">{bio}</p>}
  </div>
);