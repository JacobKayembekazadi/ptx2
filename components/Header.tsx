
import React, { useState, useEffect } from 'react';
// Added ChevronRight to the lucide-react import list
import { Menu, X, ChevronDown, ChevronUp, Zap, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Corporate',
      submenu: [
        { name: 'About Us', path: '/about-us' },
        { name: 'Management', path: '/management' },
        { name: 'Board of Directors', path: '/board' },
        { name: 'Technical Advisors', path: '/advisors' },
      ],
    },
    {
      name: 'Projects',
      path: '/projects',
      submenu: [
        { name: 'W2 Cu-Ni-PGE', path: '/projects/w2' },
        { name: 'Shining Tree Gold', path: '/projects/shining-tree' },
        { name: 'Heenan Mallard Gold', path: '/projects/heenan' },
        { name: 'Royalty Portfolio', path: '/projects/royalty' },
      ],
    },
    {
      name: 'Investors',
      submenu: [
        { name: 'Stock Information', path: '/investors' },
        { name: 'Corporate Presentation', path: '/investors/presentations' },
        { name: 'Financial Statements', path: '/investors/financials' },
        { name: 'Notice and Access', path: '/investors/notice-access' },
        { name: 'Cautionary Notes', path: '/investors/cautionary' },
      ],
    },
    { name: 'News', path: '/news' },
    {
      name: 'Contact',
      submenu: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Subscribe', path: '/subscribe' },
      ],
    },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled ? 'bg-black/90 backdrop-blur-3xl border-b border-white/5 py-2' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" onClick={closeMobileMenu} className="relative group">
          <svg width="200" height="46" viewBox="0 0 600 136" className="filter invert brightness-0">
            <image x="6" y="7" width="591" height="124" href="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/04/07152334/ptx-metals.png" />
          </svg>
          <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-orange group-hover:w-full transition-all duration-500" />
        </Link>

        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.path ? (
                <Link
                  to={item.path}
                  className={`flex items-center px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-brand-orange hover:text-white ${location.pathname === item.path ? 'bg-brand-orange text-white' : 'text-white'}`}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  className="flex items-center px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-brand-orange hover:text-white text-white"
                >
                  {item.name}
                  {item.submenu && <ChevronDown size={10} className="ml-2 group-hover:rotate-180 transition-transform" />}
                </button>
              )}

              {item.submenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl py-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 scale-95 group-hover:scale-100 shadow-2xl">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="block w-full text-left px-8 py-3 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-brand-orange hover:pl-10 transition-all"
                    >
                      {sub.name}
                    </Link>
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
                {item.submenu ? (
                  <button
                    onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                    className="text-5xl font-black uppercase tracking-tighter text-white hover:text-brand-orange transition-colors flex justify-between items-center w-full"
                  >
                    {item.name}
                    <ChevronRight size={32} className={openSubmenu === item.name ? 'rotate-90' : ''} />
                  </button>
                ) : (
                  <Link
                    to={item.path!}
                    onClick={closeMobileMenu}
                    className="text-5xl font-black uppercase tracking-tighter text-white hover:text-brand-orange transition-colors flex justify-between items-center w-full"
                  >
                    {item.name}
                  </Link>
                )}

                {item.submenu && openSubmenu === item.name && (
                  <div className="mt-6 space-y-4 pl-4 border-l border-brand-orange">
                    {item.submenu.map(sub => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={closeMobileMenu}
                        className="block text-xl font-bold uppercase tracking-widest text-gray-500 hover:text-white"
                      >
                        {sub.name}
                      </Link>
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
