
import React, { useState, useEffect } from 'react';
// Added ChevronRight to the lucide-react import list
import { Menu, X, ChevronDown, ChevronUp, Zap, ChevronRight } from 'lucide-react';
import { useNavigation } from './NavigationContext';
import { Page } from '../types';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const { navigateTo } = useNavigation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: Page) => {
    navigateTo(page);
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  const navItems = [
    { name: 'Home', page: 'home' as Page },
    {
      name: 'Corporate',
      submenu: [
        { name: 'About Us', page: 'about-us' as Page },
        { name: 'Management', page: 'management' as Page },
        { name: 'Board of Directors', page: 'board' as Page },
        { name: 'Technical Advisors', page: 'advisors' as Page },
      ],
    },
    {
      name: 'Projects',
      submenu: [
        { name: 'W2 Cu-Ni-PGE', page: 'projects-w2' as Page },
        { name: 'Shining Tree Gold', page: 'projects-shining' as Page },
        { name: 'Heenan Mallard Gold', page: 'projects-heenan' as Page },
        { name: 'Royalty Portfolio', page: 'projects-royalty' as Page },
      ],
    },
    {
      name: 'Investors',
      submenu: [
        { name: 'Stock Information', page: 'investors' as Page },
        { name: 'Corporate Presentation', page: 'presentations' as Page },
        { name: 'Financial Statements', page: 'financials' as Page },
        { name: 'Notice and Access', page: 'notice-access' as Page },
        { name: 'Cautionary Notes', page: 'cautionary' as Page },
      ],
    },
    { name: 'News', page: 'news' as Page },
    {
      name: 'Contact',
      submenu: [
        { name: 'Contact Us', page: 'contact' as Page },
        { name: 'Subscribe', page: 'subscribe' as Page },
      ],
    },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled ? 'bg-black/90 backdrop-blur-3xl border-b border-white/5 py-2' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => handleNavClick('home')} className="relative group">
          <svg width="200" height="46" viewBox="0 0 600 136" className="filter invert brightness-0">
            <image x="6" y="7" width="591" height="124" href="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/04/07152334/ptx-metals.png" />
          </svg>
          <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-orange group-hover:w-full transition-all duration-500" />
        </button>

        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <button 
                onClick={() => item.page && handleNavClick(item.page)}
                className="flex items-center px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-brand-orange hover:text-white text-white"
              >
                {item.name}
                {item.submenu && <ChevronDown size={10} className="ml-2 group-hover:rotate-180 transition-transform" />}
              </button>
              {item.submenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 glass rounded-2xl py-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 scale-95 group-hover:scale-100">
                  {item.submenu.map((sub) => (
                    <button 
                      key={sub.name}
                      onClick={() => handleNavClick(sub.page)}
                      className="block w-full text-left px-8 py-3 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-brand-orange hover:pl-10 transition-all"
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-white">
          <Menu size={32} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-[200] p-12 overflow-y-auto">
          <div className="flex justify-between items-center mb-20">
            <svg width="180" height="40" viewBox="0 0 600 136" className="filter invert brightness-0">
                <image x="6" y="7" width="591" height="124" href="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/04/07152334/ptx-metals.png" />
            </svg>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                <X size={32} />
            </button>
          </div>
          <div className="space-y-8">
            {navItems.map((item) => (
                <div key={item.name}>
                    <button 
                        onClick={() => {
                            if(item.submenu) setOpenSubmenu(openSubmenu === item.name ? null : item.name);
                            else if(item.page) handleNavClick(item.page);
                        }}
                        className="text-5xl font-black uppercase tracking-tighter text-white hover:text-brand-orange transition-colors flex justify-between items-center w-full"
                    >
                        {item.name}
                        {item.submenu && <ChevronRight size={32} className={openSubmenu === item.name ? 'rotate-90' : ''} />}
                    </button>
                    {item.submenu && openSubmenu === item.name && (
                        <div className="mt-6 space-y-4 pl-4 border-l border-brand-orange">
                            {item.submenu.map(sub => (
                                <button key={sub.name} onClick={() => handleNavClick(sub.page)} className="block text-xl font-bold uppercase tracking-widest text-gray-500 hover:text-white">
                                    {sub.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;