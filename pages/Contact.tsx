
import React from 'react';
import { Banner, Sidebar } from '../components/UIElements';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export const ContactUs: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Banner 
        title="CONTACT US" 
        subtitle="Connect with PTX Metals Investor Relations" 
        image="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/01/16170408/projects-bg.jpg" 
      />
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-8">
              <h2 className="text-4xl font-black uppercase tracking-tighter">Get In Touch</h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                We welcome inquiries from shareholders, analysts, and potential partners. Our team is available to discuss our exploration programs and corporate strategy.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg text-brand-orange">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-xs tracking-widest text-gray-400">Head Office</h4>
                    <p className="text-gray-700">The Exchange Tower, 130 King St W, Suite 3680, Toronto, ON M5X 1B1</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg text-brand-orange">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-xs tracking-widest text-gray-400">Email</h4>
                    <a href="mailto:info@ptxmetals.com" className="text-gray-700 hover:text-brand-orange transition-colors">info@ptxmetals.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg text-brand-orange">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-xs tracking-widest text-gray-400">Telephone</h4>
                    <p className="text-gray-700">+1-416-270-5042</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">First Name</label>
                    <input type="text" className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-brand-orange transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Last Name</label>
                    <input type="text" className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-brand-orange transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                  <input type="email" className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-brand-orange transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Message</label>
                  <textarea rows={4} className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-brand-orange transition-colors resize-none"></textarea>
                </div>
                <button className="w-full bg-brand-dark text-white py-5 font-black uppercase tracking-widest hover:bg-brand-orange transition-all flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4">
          <Sidebar activeCategory="Contact" />
        </div>
      </div>
    </div>
  );
};

export const Subscribe: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Banner 
        title="SUBSCRIBE" 
        subtitle="Get the Latest Technical Data and News" 
        image="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/01/16170408/projects-bg.jpg" 
      />
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-3/4">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">Join Our Network</h2>
            <p className="text-xl text-gray-600 font-light mb-12 leading-relaxed">
              Stay updated on our 5,000m drill program at W2, JV developments at South Timmins, and strategic corporate milestones.
            </p>

            <form 
              action="https://ptxmetals.us2.list-manage.com/subscribe/post?u=e0280a0726e88400a5fb6a8b3&amp;id=18a345d216&amp;f_id=00239fe3f0" 
              method="post" 
              target="_blank"
              className="space-y-8 bg-gray-50 p-12 rounded-3xl border border-gray-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">First Name</label>
                  <input 
                    name="FNAME" 
                    type="text" 
                    placeholder="Enter your first name" 
                    className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-brand-orange transition-colors text-black font-medium" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Last Name</label>
                  <input 
                    name="LNAME" 
                    type="text" 
                    placeholder="Enter your last name" 
                    className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-brand-orange transition-colors text-black font-medium" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Corporate Email *</label>
                <input 
                  required 
                  name="EMAIL" 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-brand-orange transition-colors text-black font-medium" 
                />
              </div>

              {/* Anti-spam field */}
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name="b_e0280a0726e88400a5fb6a8b3_18a345d216" tabIndex={-1} value="" />
              </div>

              <div className="pt-4">
                <button type="submit" className="bg-brand-orange text-white px-12 py-5 font-black uppercase tracking-[0.2em] hover:bg-brand-dark transition-all shadow-xl shadow-brand-orange/20">
                  Submit Subscription
                </button>
                <p className="mt-6 text-xs text-gray-400 font-bold uppercase tracking-widest flex items-center">
                  <CheckCircle size={14} className="mr-2 text-green-500" /> Secure Subscription via Mailchimp
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="lg:w-1/4">
          <Sidebar activeCategory="Contact" />
        </div>
      </div>
    </div>
  );
};
