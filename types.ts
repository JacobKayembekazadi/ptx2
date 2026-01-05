
export type Page = 
  | 'home' 
  | 'about-us' 
  | 'management' 
  | 'board' 
  | 'advisors' 
  | 'projects-w2' 
  | 'projects-shining' 
  | 'projects-heenan' 
  | 'projects-royalty' 
  | 'investors' 
  | 'presentations'
  | 'financials'
  | 'notice-access'
  | 'news' 
  | 'news-article-w2-drill' 
  | 'contact' 
  | 'subscribe'
  | 'cautionary';

export interface TeamMemberProps {
  name: string;
  title: string;
  bio?: string;
}

export interface NewsItem {
  date: string;
  title: string;
  page?: Page;
  summary?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}