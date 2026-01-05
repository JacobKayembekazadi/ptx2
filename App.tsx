
import React from 'react';
import { NavigationProvider, useNavigation } from './components/NavigationContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

// Pages
import Home from './pages/Home';
import { AboutUs, Management, Board, Advisors } from './pages/AboutCorporate';
import { ProjectW2, ProjectShiningTree, ProjectHeenan, ProjectRoyalty } from './pages/Projects';
import Investors, { Presentations, Financials, NoticeAndAccess, CautionaryNotes } from './pages/Investors';
import News, { NewsArticleW2Drill } from './pages/News';
import { ContactUs, Subscribe } from './pages/Contact';

const AppContent: React.FC = () => {
  const { currentPage } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'about-us': return <AboutUs />;
      case 'management': return <Management />;
      case 'board': return <Board />;
      case 'advisors': return <Advisors />;
      case 'projects-w2': return <ProjectW2 />;
      case 'projects-shining': return <ProjectShiningTree />;
      case 'projects-heenan': return <ProjectHeenan />;
      case 'projects-royalty': return <ProjectRoyalty />;
      case 'investors': return <Investors />;
      case 'presentations': return <Presentations />;
      case 'financials': return <Financials />;
      case 'notice-access': return <NoticeAndAccess />;
      case 'cautionary': return <CautionaryNotes />;
      case 'news': return <News />;
      case 'news-article-w2-drill': return <NewsArticleW2Drill />;
      case 'contact': return <ContactUs />;
      case 'subscribe': return <Subscribe />;
      // Default to Home for now
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-orange selection:text-white">
      <Header />
      <main className="flex-grow pt-[80px]">
        {renderPage()}
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
};

export default App;