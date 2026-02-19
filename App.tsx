
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

// Pages
// Pages
import Home from './pages/Home';
import { AboutUs, Management, Board, Advisors } from './pages/AboutCorporate';
import { ProjectW2, ProjectShiningTree, ProjectHeenan, ProjectRoyalty, ProjectsOverview } from './pages/Projects';
import Investors, { Presentations, FactSheet, Financials, NoticeAndAccess, CautionaryNotes } from './pages/Investors';
import News, { NewsArticle } from './pages/News';
import { ContactUs, Subscribe } from './pages/Contact';
import ESGPolicy from './pages/ESGPolicy';
import Milestones from './pages/Milestones';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-brand-orange selection:text-white">
        <Header />
        <main className="flex-grow pt-[80px]">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Corporate */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/management" element={<Management />} />
            <Route path="/board" element={<Board />} />
            <Route path="/advisors" element={<Advisors />} />

            {/* Projects */}
            <Route path="/projects" element={<ProjectsOverview />} />
            <Route path="/projects/w2" element={<ProjectW2 />} />
            <Route path="/projects/shining-tree" element={<ProjectShiningTree />} />
            <Route path="/projects/heenan" element={<ProjectHeenan />} />
            <Route path="/projects/royalty" element={<ProjectRoyalty />} />

            {/* Investors */}
            <Route path="/investors" element={<Investors />} />
            <Route path="/investors/presentations" element={<Presentations />} />
            <Route path="/investors/fact-sheet" element={<FactSheet />} />
            <Route path="/investors/financials" element={<Financials />} />
            <Route path="/investors/notice-access" element={<NoticeAndAccess />} />
            <Route path="/investors/cautionary" element={<CautionaryNotes />} />

            {/* News */}
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsArticle />} />

            {/* ESG */}
            <Route path="/esg" element={<ESGPolicy />} />

            {/* Contact */}
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/subscribe" element={<Subscribe />} />

            {/* Milestones */}
            <Route path="/milestones" element={<Milestones />} />

            {/* 404 Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
};


export default App;


