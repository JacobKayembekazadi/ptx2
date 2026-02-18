import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight, Building2, Clock, Globe } from 'lucide-react';

export const ContactUs: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-end bg-brand-dark overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/01/16170408/projects-bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-brand-dark/60" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-80 h-80 bg-brand-orange/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-brand-orange/10 rounded-full blur-[100px]" />

        {/* Content */}
        <div className="container relative mx-auto px-6 z-10 pb-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 text-brand-orange text-[10px] font-black uppercase tracking-[0.25em] px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Mail size={12} />
              Investor Relations
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.05] mb-6">
              Let's <span className="text-brand-orange">Connect</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-xl">
              We welcome inquiries from shareholders, analysts, and potential partners. Our team is available to discuss our exploration programs and corporate strategy.
            </p>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
      </div>

      {/* Quick Contact Cards */}
      <div className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 group hover:border-brand-orange/30 transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:scale-110 transition-all">
              <MapPin className="text-brand-orange group-hover:text-white transition-colors" size={24} />
            </div>
            <h3 className="font-black uppercase text-xs tracking-widest text-gray-400 mb-2">Head Office</h3>
            <p className="text-gray-800 font-semibold leading-relaxed">
              The Exchange Tower<br />
              130 King St W, Suite 3680<br />
              Toronto, ON M5X 1B1
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 group hover:border-brand-orange/30 transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:scale-110 transition-all">
              <Mail className="text-brand-orange group-hover:text-white transition-colors" size={24} />
            </div>
            <h3 className="font-black uppercase text-xs tracking-widest text-gray-400 mb-2">Email</h3>
            <a href="mailto:info@ptxmetals.com" className="text-gray-800 font-semibold hover:text-brand-orange transition-colors block">
              info@ptxmetals.com
            </a>
            <a href="mailto:ir@ptxmetals.com" className="text-gray-500 hover:text-brand-orange transition-colors block mt-1">
              ir@ptxmetals.com
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 group hover:border-brand-orange/30 transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:scale-110 transition-all">
              <Phone className="text-brand-orange group-hover:text-white transition-colors" size={24} />
            </div>
            <h3 className="font-black uppercase text-xs tracking-widest text-gray-400 mb-2">Telephone</h3>
            <p className="text-gray-800 font-semibold">+1-416-270-5042</p>
            <p className="text-gray-400 text-sm mt-1">Mon - Fri, 9AM - 5PM EST</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-black uppercase tracking-tight mb-2 text-gray-900">Send a Message</h2>
              <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

              {formStatus === 'sent' ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-500" size={40} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-2 text-gray-900">Message Sent!</h3>
                  <p className="text-gray-500">We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">First Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded-xl focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-medium"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Last Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded-xl focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-medium"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded-xl focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-medium"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Subject</label>
                    <select className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded-xl focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-medium cursor-pointer">
                      <option>Investor Inquiry</option>
                      <option>Partnership Opportunity</option>
                      <option>Media Request</option>
                      <option>General Question</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Message</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded-xl focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-medium resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full bg-brand-dark text-white py-5 rounded-xl font-black uppercase tracking-widest hover:bg-brand-orange transition-all flex items-center justify-center gap-3 group disabled:opacity-70"
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info Section */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 leading-tight text-gray-900">
                Investor<br />Relations
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                PTX Metals maintains an open dialogue with the investment community. We're committed to transparency and timely disclosure of material information.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <Building2 className="text-brand-orange mb-4" size={28} />
                <h4 className="font-black uppercase text-sm tracking-tight mb-1 text-gray-900">TSX.V: PTX</h4>
                <p className="text-gray-500 text-sm">Listed on TSX Venture Exchange</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <Clock className="text-brand-orange mb-4" size={28} />
                <h4 className="font-black uppercase text-sm tracking-tight mb-1 text-gray-900">Response Time</h4>
                <p className="text-gray-500 text-sm">Within 24 business hours</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <Globe className="text-brand-orange mb-4" size={28} />
                <h4 className="font-black uppercase text-sm tracking-tight mb-1 text-gray-900">Global Reach</h4>
                <p className="text-gray-500 text-sm">Investors worldwide welcome</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <Mail className="text-brand-orange mb-4" size={28} />
                <h4 className="font-black uppercase text-sm tracking-tight mb-1 text-gray-900">IR Contact</h4>
                <p className="text-gray-500 text-sm">Greg Ferron, CEO</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-brand-dark to-gray-900 p-8 rounded-2xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-orange/20 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <h3 className="text-xl font-black uppercase tracking-tight mb-3">Subscribe to Updates</h3>
                <p className="text-gray-300 text-sm mb-6">Get the latest news, drill results, and corporate announcements.</p>
                <a
                  href="/subscribe"
                  className="inline-flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-full font-black uppercase text-xs tracking-widest hover:bg-white hover:text-brand-dark transition-all"
                >
                  Subscribe Now <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Subscribe: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[50vh] flex items-end bg-brand-dark overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark" />

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-brand-orange/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-brand-orange/10 rounded-full blur-[100px]" />

        {/* Content */}
        <div className="container relative mx-auto px-6 z-10 pb-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-brand-orange text-white text-[10px] font-black uppercase tracking-[0.25em] px-4 py-2 rounded-full mb-6 shadow-lg shadow-brand-orange/30">
              <Mail size={12} />
              Newsletter
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[1.05] mb-6">
              Stay <span className="text-brand-orange">Informed</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Get the latest technical data, drill results, and corporate news delivered directly to your inbox.
            </p>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-gray-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black uppercase tracking-tight mb-3 text-gray-900">Join Our Network</h2>
              <p className="text-gray-500">
                Stay updated on our 5,000m drill program at W2, JV developments at South Timmins, and strategic corporate milestones.
              </p>
            </div>

            <form
              action="https://ptxmetals.us2.list-manage.com/subscribe/post?u=e0280a0726e88400a5fb6a8b3&amp;id=18a345d216&amp;f_id=00239fe3f0"
              method="post"
              target="_blank"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">First Name</label>
                  <input
                    name="FNAME"
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded-xl focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Last Name</label>
                  <input
                    name="LNAME"
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded-xl focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-medium"
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
                  className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded-xl focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-medium"
                />
              </div>

              {/* Anti-spam field */}
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name="b_e0280a0726e88400a5fb6a8b3_18a345d216" tabIndex={-1} defaultValue="" />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange text-white py-5 rounded-xl font-black uppercase tracking-widest hover:bg-brand-dark transition-all shadow-xl shadow-brand-orange/20 flex items-center justify-center gap-3"
              >
                Subscribe Now <ArrowRight size={18} />
              </button>

              <p className="text-center text-xs text-gray-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                <CheckCircle size={14} className="text-green-500" /> Secure Subscription via Mailchimp
              </p>
            </form>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-brand-orange" size={20} />
              </div>
              <h4 className="font-black uppercase text-sm tracking-tight mb-1 text-gray-900">Instant Updates</h4>
              <p className="text-gray-500 text-sm">News releases as they happen</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-brand-orange" size={20} />
              </div>
              <h4 className="font-black uppercase text-sm tracking-tight mb-1 text-gray-900">Drill Results</h4>
              <p className="text-gray-500 text-sm">Technical data and assays</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-brand-orange" size={20} />
              </div>
              <h4 className="font-black uppercase text-sm tracking-tight mb-1 text-gray-900">Corporate News</h4>
              <p className="text-gray-500 text-sm">Strategic milestones & updates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
