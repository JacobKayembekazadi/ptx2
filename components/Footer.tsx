
import React from 'react';
import { useNavigation } from './NavigationContext';

const Footer: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <footer className="bg-brand-dark text-gray-300 pt-16 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 border-b border-white/10 pb-12">
          {/* Logo and Links */}
          <div className="w-full lg:w-1/2">
            <button onClick={() => navigateTo('home')} className="mb-8">
              <svg width="300" height="70" viewBox="0 0 600 136" className="filter invert brightness-0">
                <image x="6" y="7" width="591" height="124" href="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/04/07152334/ptx-metals.png" />
              </svg>
            </button>
            <nav className="flex flex-wrap gap-x-8 gap-y-4">
              {['Home', 'Corporate', 'Projects', 'Investors', 'News', 'Contact'].map(link => (
                <button 
                  key={link} 
                  onClick={() => navigateTo(link.toLowerCase() as any)} 
                  className="text-sm font-bold uppercase tracking-widest hover:text-brand-orange transition-colors"
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Details */}
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-8 lg:justify-end">
            <div className="text-sm leading-relaxed text-gray-400">
              <h4 className="text-white font-bold uppercase mb-2">Office</h4>
              The Exchange Tower<br />
              130 King St W, Suite 3680<br />
              Toronto, ON M5X 1B1<br />
            </div>
            <div className="text-sm leading-relaxed text-gray-400">
              <h4 className="text-white font-bold uppercase mb-2">Contact</h4>
              Greg Ferron, CEO<br />
              Email: <a href="mailto:gferron@ptxmetals.com" className="text-brand-orange hover:text-white transition-colors">gferron@ptxmetals.com</a><br />
              Tel: +1-416-270-5042
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <div className="text-xs text-gray-500">
            &copy; 2026 Copyright PTX Metals Inc.
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://x.com/PTXMetals" target="_blank" className="hover:opacity-80 transition-opacity">
              <svg width="40" height="40" viewBox="0 0 50 50">
                <path fill="#E56417" d="M7.14285714,0 C3.203125,0 0,3.203125 0,7.14285714 L0,42.8571429 C0,46.796875 3.203125,50 7.14285714,50 L42.8571429,50 C46.796875,50 50,46.796875 50,42.8571429 L50,7.14285714 C50,3.203125 46.796875,0 42.8571429,0 L7.14285714,0 Z M40.3093944,9.375 L28.6717881,22.6116071 L42.3611111,40.625 L31.6428533,40.625 L23.2566014,29.6986607 L13.6482887,40.625 L8.32279446,40.625 L20.7676336,26.4620536 L7.63888889,9.375 L18.6262243,9.375 L26.216455,19.3638393 L34.9839002,9.375 L40.3093944,9.375 Z M36.1111111,37.5 L17.0618903,12.5 L13.8888889,12.5 L33.151138,37.5 L36.0998991,37.5 L36.1111111,37.5 Z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/ptxmetals" target="_blank" className="hover:opacity-80 transition-opacity">
              <svg width="40" height="40" viewBox="0 0 24 24"><path fill="#E56417" d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zm-4 7.28V4.5h-2.29c-2.1 0-3.42 1.6-3.42 3.89v1.67H8v2.77h2.29v6.67h2.85v-6.67h2.29l.57-2.77h-2.86V8.94c0-1.1.58-1.66 1.72-1.66H16z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/ptxmetals" target="_blank" className="hover:opacity-80 transition-opacity">
              <svg width="40" height="40" viewBox="0 0 50 50">
                <path fill="#E56417" d="M46.4285714,0 L3.56026786,0 C1.59598214,0 0,1.61830357 0,3.60491071 L0,46.3950893 C0,48.3816964 1.59598214,50 3.56026786,50 L46.4285714,50 C48.3928571,50 50,48.3816964 50,46.3950893 L50,3.60491071 C50,1.61830357 48.3928571,0 46.4285714,0 Z M15.1116071,42.8571429 L7.70089286,42.8571429 L7.70089286,18.9955357 L15.1227679,18.9955357 L15.1227679,42.8571429 L15.1116071,42.8571429 Z M11.40625,15.7366071 C9.02901786,15.7366071 7.109375,13.8058036 7.109375,11.4397321 C7.109375,9.07366071 9.02901786,7.14285714 11.40625,7.14285714 C13.7723214,7.14285714 15.703125,9.07366071 15.703125,11.4397321 C15.703125,13.8169643 13.7834821,15.7366071 11.40625,15.7366071 L11.40625,15.7366071 Z M42.890625,42.8571429 L35.4799107,42.8571429 L35.4799107,31.25 C35.4799107,28.4821429 35.4241071,24.921875 31.6294643,24.921875 C27.7678571,24.921875 27.1763393,27.9352679 27.1763393,31.0491071 L27.1763393,42.8571429 L19.765625,42.8571429 L19.765625,18.9955357 L26.875,18.9955357 L26.875,22.2544643 L26.9754464,22.2544643 C27.96875,20.3794643 30.390625,18.4040179 33.9955357,18.4040179 C41.4955357,18.4040179 42.890625,23.3482143 42.890625,29.7767857 L42.890625,42.8571429 L42.890625,42.8571429 Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
