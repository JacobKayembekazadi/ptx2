import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Download, ChevronRight, Search, ArrowLeft, Share2 } from 'lucide-react';
import { newsData } from '../data/newsData';

const NewsSidebar: React.FC = () => {
  const years = [...new Set(newsData.map(n => n.year))].sort((a, b) => b.localeCompare(a));
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg sticky top-32">
      <h3 className="text-lg font-extrabold text-gray-900 uppercase tracking-widest border-b-2 border-brand-orange pb-2 mb-6 inline-block">
        News Archive
      </h3>
      <ul className="space-y-3">
        {years.map((year) => (
          <li key={year}>
            <Link to={`/news`} onClick={() => window.scrollTo(0, 0)} className="w-full text-left px-4 py-3 rounded-xl transition-all flex justify-between items-center group text-gray-600 hover:bg-gray-50 hover:text-brand-orange border border-transparent hover:border-gray-100">
              <span className="font-bold">{year} Releases</span>
              <ChevronRight size={16} className="transition-transform text-gray-300 group-hover:translate-x-1 group-hover:text-brand-orange" />
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8 pt-8 border-t border-gray-100">
        <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-4">Media Contact</h4>
        <p className="text-sm text-gray-600 mb-1">Greg Ferron, CEO</p>
        <p className="text-sm font-bold text-brand-orange">ir@ptxmetals.com</p>
      </div>
    </div>
  );
};

// ── Individual Article Page ──────────────────────────────────────────────────

export const NewsArticle: React.FC = () => {
  const { id } = useParams();
  const article = newsData.find(item => item.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h2>
          <Link to="/news" className="text-brand-orange font-bold uppercase tracking-widest hover:underline">
            Return to News
          </Link>
        </div>
      </div>
    );
  }

  // Find related articles (same category, excluding current)
  const related = newsData
    .filter(n => n.category === article.category && n.id !== article.id)
    .slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-[50vh] min-h-[400px] w-full flex items-end pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: article.thumbnail ? `url('${article.thumbnail}')` : `url('https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/04/12092016/Photo-2024-04-06-3-06-48%E2%80%AFPM-scaled.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
        <div className="container relative mx-auto px-6 z-10">
          <Link to="/news" className="inline-flex items-center text-white/70 hover:text-brand-orange transition-colors font-bold uppercase text-[10px] tracking-[0.2em] mb-8 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-brand-orange/50">
            <ArrowLeft size={14} className="mr-2" /> Back to News
          </Link>
          <div className="max-w-4xl border-l-4 border-brand-orange pl-8">
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-brand-orange text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded shadow-lg">{article.category}</span>
              <span className="text-gray-300 font-bold uppercase text-xs tracking-widest">{article.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-[1.1] drop-shadow-lg">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-3/4">
          <div className="news-article-content" dangerouslySetInnerHTML={{ __html: article.content }} />


          <div className="mt-12 pt-8 border-t border-gray-100">
            <h4 className="text-xl font-black uppercase tracking-tight mb-8">About PTX Metals</h4>
            <p className="text-gray-600 leading-relaxed mb-8">
              PTX Metals is a mineral exploration company focused on the acquisition, exploration, and development of high-quality copper-nickel-PGE-gold properties in Canada. The Company's flagship W2 Project in the Ring of Fire and South Timmins Gold Projects represent district-scale opportunities.
            </p>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <p className="text-xs text-gray-400 leading-relaxed">
                <strong>Forward-Looking Information:</strong> This news release may contain forward-looking information within the meaning of applicable securities legislation. Forward-looking statements involve known and unknown risks and uncertainties, which may cause actual results to differ materially. Please refer to the Company's SEDAR+ filings for full cautionary notes.
              </p>
            </div>
          </div>

          {/* Related Releases */}
          {related.length > 0 && (
            <div className="mt-16 pt-8 border-t border-gray-100">
              <h4 className="text-xl font-black uppercase tracking-tight mb-8">Related Releases</h4>
              <div className="space-y-4">
                {related.map((item, idx) => (
                  <Link
                    key={idx}
                    to={`/news/${item.id}`}
                    className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group border border-gray-100"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-brand-orange font-bold text-xs uppercase tracking-widest">{item.date}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="text-gray-400 font-bold text-xs uppercase tracking-widest">{item.category}</span>
                    </div>
                    <h5 className="font-bold text-gray-900 group-hover:text-brand-orange transition-colors leading-tight">
                      {item.title}
                    </h5>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="lg:w-1/4 space-y-8">
          <div className="bg-brand-dark p-8 rounded-2xl text-white shadow-xl sticky top-32">
            <Share2 className="mb-6 text-brand-orange" />
            <h4 className="font-black uppercase tracking-tight text-xl mb-6">Share Release</h4>
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')} className="p-3 bg-white/10 rounded-lg hover:bg-brand-orange transition-colors text-xs font-bold uppercase tracking-wider">Twitter</button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')} className="p-3 bg-white/10 rounded-lg hover:bg-brand-orange transition-colors text-xs font-bold uppercase tracking-wider">LinkedIn</button>
              <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')} className="p-3 bg-white/10 rounded-lg hover:bg-brand-orange transition-colors text-xs font-bold uppercase tracking-wider">Facebook</button>
              <button onClick={() => window.location.href = `mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(window.location.href)}`} className="p-3 bg-white/10 rounded-lg hover:bg-brand-orange transition-colors text-xs font-bold uppercase tracking-wider">Email</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── News Listing Page ────────────────────────────────────────────────────────

const News: React.FC = () => {
  const [filterYear, setFilterYear] = useState<string>('All');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const years = [...new Set(newsData.map(n => n.year))].sort((a, b) => b.localeCompare(a));

  const filteredNews = useMemo(() => {
    return newsData.filter(item => {
      const matchesYear = filterYear === 'All' || item.year === filterYear;
      const matchesCategory = filterCategory === 'All' || item.category === filterCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesYear && matchesCategory && matchesSearch;
    });
  }, [filterYear, filterCategory, searchQuery]);

  const featuredArticle = newsData[0];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[85vh] flex items-end bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        {featuredArticle.thumbnail && (
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[2000ms] hover:scale-110"
              style={{ backgroundImage: `url('${featuredArticle.thumbnail}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-transparent" />
          </div>
        )}

        <div className="absolute top-32 right-10 w-72 h-72 bg-brand-orange/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px]" />

        <div className="container relative mx-auto px-6 z-10 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div className="reveal-up">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center gap-2 bg-brand-orange text-white text-[10px] font-black uppercase tracking-[0.25em] px-4 py-2 rounded-full shadow-lg shadow-brand-orange/30">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  Latest Release
                </span>
                <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">{featuredArticle.date}</span>
              </div>

              <Link to={`/news/${featuredArticle.id}`} className="group block">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.1] mb-6 group-hover:text-brand-orange transition-colors duration-300">
                  {featuredArticle.title}
                </h1>
              </Link>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to={`/news/${featuredArticle.id}`}
                  className="group relative bg-brand-orange text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs overflow-hidden transition-all hover:shadow-xl hover:shadow-brand-orange/30 hover:-translate-y-1 inline-flex items-center gap-2"
                >
                  <span className="relative z-10">Read Full Story</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
                </Link>
                <span className="px-6 py-4 border border-white/20 rounded-full text-white/60 font-bold uppercase text-xs tracking-widest backdrop-blur-sm">
                  {featuredArticle.category}
                </span>
              </div>
            </div>

            <div className="hidden lg:block">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-orange mb-6">More Headlines</h3>
              <div className="space-y-4">
                {newsData.slice(1, 4).map((item, idx) => (
                  <Link
                    key={idx}
                    to={`/news/${item.id}`}
                    className="group block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-brand-orange/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl font-black text-white/20 group-hover:text-brand-orange/50 transition-colors">0{idx + 2}</span>
                      <div>
                        <p className="text-white font-bold text-sm leading-tight group-hover:text-brand-orange transition-colors line-clamp-2">
                          {item.title}
                        </p>
                        <span className="text-gray-500 text-xs mt-2 block">{item.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-3/4">
          {/* Filters */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 sticky top-[80px] z-20">
            <div className="flex items-center bg-gray-50 px-4 py-3 rounded-xl border border-gray-200 w-full md:w-auto flex-grow">
              <Search className="text-gray-400 mr-3" size={20} />
              <input
                type="text"
                placeholder="Search news..."
                className="bg-transparent border-none focus:outline-none text-gray-700 font-semibold w-full placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-4">
              <select
                className="bg-gray-50 border border-gray-200 text-gray-700 font-bold text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange cursor-pointer"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="Corporate">Corporate</option>
                <option value="Exploration">Exploration</option>
                <option value="Financials">Financials</option>
              </select>
              <select
                className="bg-gray-50 border border-gray-200 text-gray-700 font-bold text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange cursor-pointer"
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
              >
                <option value="All">All Years</option>
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 gap-8">
            {filteredNews.length > 0 ? (
              filteredNews.map((item, idx) => (
                <Link
                  key={idx}
                  to={`/news/${item.id}`}
                  className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group flex flex-col md:flex-row gap-8 items-start"
                >
                  {item.thumbnail && (
                    <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden bg-gray-100 relative">
                      <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest">
                        {item.category}
                      </div>
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-brand-orange font-bold text-xs uppercase tracking-widest">{item.date}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="text-gray-400 font-bold text-xs uppercase tracking-widest">{item.category}</span>
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-4 leading-tight group-hover:text-brand-orange transition-colors">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center text-xs font-black uppercase tracking-[0.2em] text-black border-b-2 border-brand-orange pb-1 group-hover:text-brand-orange transition-colors">
                      Read More <ChevronRight size={12} className="ml-1" />
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                <p className="text-gray-400 font-bold uppercase tracking-widest">No articles found matching your filters.</p>
                <button onClick={() => { setFilterCategory('All'); setFilterYear('All'); setSearchQuery(''); }} className="mt-4 text-brand-orange font-black text-xs uppercase tracking-widest hover:underline">Clear Filters</button>
              </div>
            )}
          </div>
        </div>
        <div className="lg:w-1/4">
          <NewsSidebar />
          <div className="mt-12 bg-gradient-to-br from-brand-orange to-red-600 p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 opacity-20 transform rotate-12">
              <Download size={150} />
            </div>
            <h4 className="font-black uppercase tracking-tight text-xl mb-4 relative z-10">Investor Kit</h4>
            <p className="text-white/80 text-sm mb-6 relative z-10">Download our full investor presentation, fact sheet, and financial reports.</p>
            <Link
              to="/investors"
              className="block w-full bg-white text-brand-orange py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-gray-50 transition-colors relative z-10 shadow-lg text-center"
            >
              Access Kit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
