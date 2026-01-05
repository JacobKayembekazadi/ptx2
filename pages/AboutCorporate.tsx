
import React from 'react';
import { Banner, Sidebar, TeamMember } from '../components/UIElements';
import { TeamMemberProps } from '../types';

export const Management: React.FC = () => {
  const team: TeamMemberProps[] = [
    { 
      name: "Greg Ferron", 
      title: "President, Chief Executive Officer, Director", 
      bio: "Mr. Ferron has 20 years of mining industry, capital markets and corporate development experience. He has held senior level roles at Laramide Resources Ltd., Treasury Metals Inc., Fancamp Exploration, Omai Gold Mines, TMX Group and Scotiabank." 
    },
    { 
      name: "Cindy Davis", 
      title: "Chief Financial Officer", 
      bio: "Mrs. Cindy Davis possesses over 15 years of experience providing accounting, financial reporting, and management advisory services to publicly listed companies. She also serves as the CFO for several publicly listed companies." 
    },
    { 
      name: "Erika Dohring", 
      title: "Head of Technical Development", 
      bio: "Mrs. Dohring holds a M.Sc. in geology and mining engineering from LaSalle Beauvais (France), cumulating more than 10 years of experience in leading and strategically managing exploration projects." 
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Banner title="MANAGEMENT" subtitle="Expert Leadership Driving Discovery" image="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/03/08103739/Ronda-Stripping-5.jpg" />
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-3/4">
          {team.map((m, i) => <TeamMember key={i} {...m} />)}
        </div>
        <div className="lg:w-1/4">
          <Sidebar activeCategory="Corporate" />
        </div>
      </div>
    </div>
  );
};

export const Board: React.FC = () => {
  const boardMembers: TeamMemberProps[] = [
    {
      name: "Christophe Vereecke, MBA",
      title: "Chairman",
      bio: "Mr. Vereecke is a businessman and entrepreneur based in Paris, with a background in finance, oil and gas, mine royalties and renewable energy. He has been involved in the startup of several businesses including co-founder and former CFO of BOP Energy. He has been a director of Treasury Metals Inc. since 2015. Mr. Vereecke holds an MBA 2 from Financia Business School in France."
    },
    {
      name: "Greg Ferron",
      title: "President, Chief Executive Officer, Director",
      bio: "Mr. Ferron has 20 years of mining industry, capital markets and corporate development experience. As CEO of Treasury Metals (now NexGold Mining Corp), he led the Goldlund project acquisition, creating one of Canada’s largest gold developers. He has held roles at TMX Group, Scotiabank, and Omai Gold Mines."
    },
    {
      name: "Frederico Marques",
      title: "Director",
      bio: "Frederico brings over 25 years experience in mining, M&A, and corporate law. He has worked with leading mineral companies globally, including as an independent director of Sigma Lithium Corp. Involved in over US$30 Billion in sophisticated transactions including financings and joint ventures."
    },
    {
      name: "Jean-David (\"JD\") Moore, M.Sc.",
      title: "Director",
      bio: "Mr. Moore has been a consultant and advisor to mineral exploration companies for over fifteen years. He is a director of Fokus Mining Corp. and served as a director of Vanstar Mining Resources (acquired by Iamgold). A graduate of Laval University, he is a member of the Order of Forest Engineers of the Province of Québec."
    },
    {
      name: "Sam Kiri, CFA",
      title: "Director, Head of Audit Committee",
      bio: "Mr. Kiri has over 20 years of capital markets experience with a focus on mining and energy. He was an equity analyst for the Scotia Pacific Rim Mutual Fund and a founder of Proactive Investors. His clients have included Medley Global Advisors and CRU Group. He holds a B.Sc. in Mechanical Engineering."
    },
    {
      name: "Rajesh Sharma",
      title: "Director",
      bio: "Mr. Sharma has 25 years of leadership experience in mining and international trade. Past roles include Executive in Residence at Investissement Quebec and CEO of Tata Steel's investment arm for mineral projects in Africa. He holds the ICD.D designation from the Institute of Corporate Directors."
    },
    {
      name: "James R. Trusler, P.Eng.",
      title: "Director, Technical Advisor",
      bio: "Mr. Trusler is a geological engineer with over 45 years of exploration experience. He has a history of discovery and strategic acquisitions of world-class gold, uranium, and Ni-Cu-PGE deposits. He previously served as Chairman and CEO of the Company."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Banner title="BOARD OF DIRECTORS" subtitle="Strategic Governance & Institutional Oversight" image="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/01/16170408/projects-bg.jpg" />
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-3/4 space-y-4">
          {boardMembers.map((m, i) => (
            <div key={i} className="reveal-up">
              <TeamMember {...m} />
            </div>
          ))}
        </div>
        <div className="lg:w-1/4">
          <Sidebar activeCategory="Corporate" />
        </div>
      </div>
    </div>
  );
};

export const Advisors: React.FC = () => {
  const w2Committee: TeamMemberProps[] = [
    {
      name: "Wes Roberts",
      title: "Technical Advisor",
      bio: "Wes Roberts, M.Sc., P.Eng., MBA is a professional mining engineer with over 40 years’ experience specializing in the economic evaluation and development of mineral deposits. He has held numerous positions including VP Corporate Development for Breakwater Resources and VP Mining to Heenan Blaikie LLP. Since 2011, he has advised several Ontario based First Nations. He holds degrees from Queen’s University and an MBA from Schulich School of Business."
    },
    {
      name: "Dr. James Mungall",
      title: "Technical Advisor",
      bio: "Dr. James (Jim) Mungall, P.Geo., is a recognized world expert in the study of magmatic Ni-Cu-PGE deposits. Jim has significant experience in the Ring of Fire, having served as Noront Resources’ Chief Geologist during the discovery of Eagle’s Nest. He is currently Professor of Earth Sciences at Carleton University."
    },
    {
      name: "Ike Osmani, P.Geo.",
      title: "Technical Advisor",
      bio: "Mr. Osmani is a professional geologist with 35 years of experience in field-based mineral exploration and NI 43-101 technical reporting. He discovered Titanium-Vanadium mineralization while exploring Lansdowne House property (now W2) in 2001 and is credited with developing a NI 43-101 compliant resource of ~1 million ounces of gold at the Coldstream Project."
    },
    {
      name: "Dave Bell",
      title: "Technical Advisor",
      bio: "With 25 years of experience in community engagement and environmental permitting, Dave brings significant knowledge from his roles as former Director of Environment at Wyloo Metals and project manager at the Impact Assessment Agency of Canada. He has been involved in more than 100 environmental assessments."
    }
  ];

  const southTimminsCommittee: TeamMemberProps[] = [
    {
      name: "Wes Roberts",
      title: "Technical Advisor",
      bio: "Wes Roberts, M.Sc., P.Eng., MBA is a professional mining engineer with over 40 years’ experience specializing in the economic evaluation and development of mineral deposits."
    },
    {
      name: "Charles Tarnocai",
      title: "Technical Advisor",
      bio: "Mr. Tarnocai has a strong technical background with extensive experience in mining and mineral exploration. Past roles include Vice President, Corporate Development for Alamos Gold and Chief Geologist with Oro Gold Resources Ltd. He holds a Ph.D in geological sciences from the University of Ottawa."
    },
    {
      name: "Erika Dohring",
      title: "Head of Technical Development",
      bio: "Mrs. Dohring holds a M.Sc. in geology and mining engineering and has over 10 years of experience managing exploration projects across three continents. She excels at identifying and developing projects from exploration to development for major gold and copper players."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Banner title="TECHNICAL ADVISORS" subtitle="Specialized Expertise for Flagship Asset Development" image="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/01/16170408/projects-bg.jpg" />
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-3/4">
          <div className="mb-20">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 flex items-center">
              <span className="w-12 h-1 bg-brand-orange mr-4"></span>
              W2 Project Technical Committee
            </h2>
            {w2Committee.map((m, i) => (
              <div key={i} className="reveal-up">
                <TeamMember {...m} />
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 flex items-center">
              <span className="w-12 h-1 bg-brand-orange mr-4"></span>
              South Timmins Technical Committee
            </h2>
            {southTimminsCommittee.map((m, i) => (
              <div key={i} className="reveal-up">
                <TeamMember {...m} />
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/4">
          <Sidebar activeCategory="Corporate" />
        </div>
      </div>
    </div>
  );
};

export const AboutUs: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
          <Banner title="ABOUT US" subtitle="A Focus on Northern Ontario's Critical Minerals" image="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/03/08103835/IMG_0219-scaled.jpg" />
          <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
            <div className="lg:w-3/4 space-y-6 text-xl text-gray-700 leading-relaxed font-light">
                <p>
                    PTX Metals Inc. is a mineral exploration company focused on high-quality strategic metals assets in northern Ontario, allowing exposure for shareholders to Copper, Gold, Nickel, and PGEs discoveries.
                </p>
                <p>
                    Our corporate objective is to advance our assets and unveil the potential of two Flagship Projects, the W2 Cu-Ni-PGE located in the strategic Ring of Fire region, and the South Timmins Mining JV (75% PTX / 25% Fancamp).
                </p>
                <p>
                    The Province of Ontario is a renowned mining jurisdiction for its abundance of mineral resources and safe jurisdiction. PTX’s portfolio of assets was strategically acquired for their geologically favorable attributes and proximity to established mining companies.
                </p>
            </div>
            <div className="lg:w-1/4">
              <Sidebar activeCategory="Corporate" />
            </div>
          </div>
        </div>
    );
};
