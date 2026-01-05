
import React from 'react';
import { Banner, Sidebar } from '../components/UIElements';
import { Download, MapPin, Layers, History, Shield, FileText, PlayCircle, TrendingUp, Coins, Compass, Globe2 } from 'lucide-react';

export const ProjectW2: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Banner 
        title="W2 PROJECT" 
        subtitle="Drilling the Next Large Scale Cu-Ni-PGE in the Ring of Fire" 
        image="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2025/10/08180223/2025-03-11-12-15-46-831.png" 
      />
      
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-3/4 space-y-16">
          <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl reveal-up group">
            <video 
              className="w-full h-full object-cover"
              autoPlay muted loop playsInline
              src="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2025/10/08180842/W225-10_Video-1.mp4"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-8">
              <h2 className="text-white text-3xl font-black uppercase tracking-tighter mb-4">Discovery in Motion</h2>
              <p className="text-white/80 max-w-lg font-light mb-6">Visualizing the high-priority targets within the Lansdowne House Igneous Complex.</p>
              <div className="p-4 rounded-full bg-brand-orange text-white animate-pulse">
                <PlayCircle size={48} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-up">
            <div className="bg-gray-50 p-10 rounded-2xl border-l-4 border-brand-orange">
              <h3 className="text-xl font-black uppercase tracking-tight mb-6">Target Commodities</h3>
              <ul className="space-y-3 font-bold text-gray-700">
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-orange rounded-full mr-3"></span> Copper-Nickel</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-orange rounded-full mr-3"></span> PGEs (Platinum Group Elements)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-brand-orange rounded-full mr-3"></span> Gold & Cobalt</li>
              </ul>
            </div>
            <div className="bg-brand-dark p-10 rounded-2xl text-white">
              <h3 className="text-xl font-black uppercase tracking-tight mb-6 text-brand-orange">Land Position</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Ownership</span>
                  <p className="font-bold">100% PTX Interests</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Total Area</span>
                  <p className="font-bold">22,094 Hectares (220 km²)</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Jurisdiction</span>
                  <p className="font-bold">Ring of Fire, Ontario, Canada</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-20 text-gray-700">
            <section className="reveal-up">
              <div className="flex items-center space-x-4 mb-6">
                <MapPin className="text-brand-orange" size={24} />
                <h2 className="text-3xl font-black uppercase tracking-tighter">Location and Access</h2>
              </div>
              <p className="text-lg font-light leading-relaxed">
                W2 is located approximately 475 km northeast of Thunder Bay, 60 km southwest of Ring of Fire Metals' Eagle's Nest Mine, and 50 km from the future Webequie Supply Road. Currently, access is provided by a winter road originating in Pickle Lake.
              </p>
            </section>

            <section className="reveal-up">
              <div className="flex items-center space-x-4 mb-6">
                <Layers className="text-brand-orange" size={24} />
                <h2 className="text-3xl font-black uppercase tracking-tighter">Geology and Mineralization</h2>
              </div>
              <p className="text-lg font-light leading-relaxed">
                The W2 Project covers the layered mafic-ultramafic Lansdowne House Igneous Complex ("LHIC") which is highly prospective for copper-nickel (Cu-Ni) and reef-type platinum group element (PGE) deposits. The common thread of strong mineralization suggests a potential significant abundance of the metals in each intrusion.
              </p>
            </section>
          </div>

          <div className="bg-brand-orange rounded-2xl p-12 text-white reveal-up flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Technical Report</h3>
              <p className="font-bold opacity-80 uppercase text-xs tracking-widest mb-4">NI 43-101 | Updated 2024</p>
              <p className="text-white/90">Detailed analysis of the W2 Copper-Nickel-PGE Property.</p>
            </div>
            <a 
              href="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2025/03/07093225/2024-W2-Technical-Report_Final.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-dark text-white px-10 py-5 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center"
            >
              <FileText className="mr-3" /> Download PDF
            </a>
          </div>
        </div>

        <div className="lg:w-1/4">
          <Sidebar activeCategory="Projects" />
        </div>
      </div>
    </div>
  );
};

export const ProjectShiningTree: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Banner 
        title="SHINING TREE GOLD" 
        subtitle="A District-Scale Gold Property in the Abitibi Greenstone Belt" 
        image="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/04/05104654/STJV-PTX-FNC-Neighbours-265k-no-nameplate-legend-LS-010624-scaled.jpg" 
      />
      
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-3/4 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-up">
            <div className="glass bg-gray-50 p-8 rounded-2xl">
              <TrendingUp className="text-brand-orange mb-4" size={32} />
              <h4 className="text-3xl font-black mb-1">23,242 ha</h4>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Total Land Package</span>
            </div>
            <div className="glass bg-gray-50 p-8 rounded-2xl">
              <Shield className="text-brand-orange mb-4" size={32} />
              <h4 className="text-3xl font-black mb-1">75%</h4>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">PTX Ownership (JV)</span>
            </div>
            <div className="glass bg-gray-50 p-8 rounded-2xl">
              <MapPin className="text-brand-orange mb-4" size={32} />
              <h4 className="text-3xl font-black mb-1">Abitibi</h4>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Tier 1 Jurisdiction</span>
            </div>
          </div>

          <div className="space-y-12 text-gray-700">
            <section className="reveal-up">
              <div className="flex items-center space-x-4 mb-6">
                <Layers className="text-brand-orange" size={24} />
                <h2 className="text-3xl font-black uppercase tracking-tighter">Strategic Summary</h2>
              </div>
              <p className="text-lg font-light leading-relaxed">
                The Shining Tree Project is a district-scale gold property covering a large section of the <span className="font-bold text-black">Ridout Tyrrell Deformation Zone (RTDZ)</span>. This trans-crustal structure trends from Newmont’s Borden Mine, through IAMGOLD’s Côté Gold deposit, and across Aris Gold’s Juby Project, positioning Shining Tree in the heart of Ontario's most prolific gold belt.
              </p>
            </section>

            <section className="reveal-up">
              <div className="flex items-center space-x-4 mb-6">
                <MapPin className="text-brand-orange" size={24} />
                <h2 className="text-3xl font-black uppercase tracking-tighter">Location & Infrastructure</h2>
              </div>
              <p className="text-lg font-light leading-relaxed">
                Located 100 km southeast of Timmins and 125 km north of Sudbury, the property is bisected by Hwy 560. This provides exceptional year-round access and proximity to world-class mining infrastructure, labor, and services.
              </p>
            </section>

            <section className="reveal-up">
              <div className="flex items-center space-x-4 mb-6">
                <History className="text-brand-orange" size={24} />
                <h2 className="text-3xl font-black uppercase tracking-tighter">Exploration & Geology</h2>
              </div>
              <div className="space-y-6 text-lg font-light leading-relaxed">
                <p>
                  Gold was first discovered in 1911, leading to a proliferation of over 30 high-grade prospects. The property is centered on the axis of a regional gravity high—the strongest gravity anomaly in the entire gold belt. Such associations in the Abitibi are highly conducive to the discovery of major Tier 1 gold deposits.
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="lg:w-1/4">
          <Sidebar activeCategory="Projects" />
        </div>
      </div>
    </div>
  );
};

export const ProjectHeenan: React.FC = () => {
    return (
      <div className="bg-white min-h-screen">
        <Banner 
          title="HEENAN MALLARD" 
          subtitle="Heeenan and Mallard (Gold)" 
          image="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/04/05104654/STJV-PTX-FNC-Neighbours-265k-no-nameplate-legend-LS-010624-scaled.jpg" 
        />
        <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-3/4 space-y-16">
            
            {/* Asset Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-up">
                <div className="p-10 bg-gray-50 border-l-4 border-brand-orange rounded-r-2xl">
                    <Shield className="text-brand-orange mb-4" />
                    <h3 className="text-xl font-black uppercase mb-4">Ownership Status</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                        Part of the <span className="font-bold text-black">South Timmins Mining JV</span> with Fancamp Exploration (75% PTX, 25% Fancamp).
                    </p>
                </div>
                <div className="p-10 bg-brand-dark text-white rounded-2xl">
                    <Compass className="text-brand-orange mb-4" />
                    <h3 className="text-xl font-black uppercase mb-4">Adjacent Operations</h3>
                    <ul className="text-xs space-y-2 font-bold opacity-80 uppercase tracking-widest">
                        <li>Evolution Mining (October Gold)</li>
                        <li>GFG Resources (Dore Gold)</li>
                        <li>IAMGold (Côté Gold Mine)</li>
                    </ul>
                </div>
            </div>

            <div className="space-y-12 text-gray-700">
                <section className="reveal-up">
                    <div className="flex items-center space-x-4 mb-6">
                        <Layers className="text-brand-orange" size={24} />
                        <h2 className="text-3xl font-black uppercase tracking-tighter">Strategic Summary</h2>
                    </div>
                    <p className="text-lg font-light leading-relaxed">
                        On a regional scale the Heenan and Mallard properties are located within the <span className="font-bold text-black">Swayze greenstone belt</span>, part of the western Abitibi Subprovince. The Swayze greenstone belt is bound to the north by the Nat River granitoid complex, to the west by the Kapuskasing Structural Zone, and to the east by the Kenogamissi granitoid complex.
                    </p>
                    <p className="text-lg font-light leading-relaxed mt-4">
                        The land package consists of <span className="font-bold text-black">390 ha (Heenan)</span> and <span className="font-bold text-black">5,104 ha (Mallard)</span>, targeting high-potential gold mineralization in a complexly folded and faulted stratigraphic sequence.
                    </p>
                </section>

                <section className="reveal-up">
                    <div className="flex items-center space-x-4 mb-6">
                        <MapPin className="text-brand-orange" size={24} />
                        <h2 className="text-3xl font-black uppercase tracking-tighter">Location & Access</h2>
                    </div>
                    <p className="text-lg font-light leading-relaxed">
                        The properties are located in Heenan, Benton, and Mallard townships approximately 110 km southwest of Timmins and 170 km northwest of Sudbury. Exceptional access is available via truck and ATV through the Mallard and Sultan industrial roads that intersect Highway 144.
                    </p>
                </section>

                {/* Assessment Reports */}
                <section className="reveal-up">
                    <div className="flex items-center space-x-4 mb-8">
                        <FileText className="text-brand-orange" size={24} />
                        <h2 className="text-3xl font-black uppercase tracking-tighter">Assessment Reports</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <a 
                          href="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/02/16170201/2020_Heenan_Assessment-Report.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-brand-orange transition-all group"
                        >
                            <div>
                                <h4 className="font-black uppercase text-sm tracking-tight">2020 Heenan Report</h4>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Assessment Documentation</span>
                            </div>
                            <Download className="text-gray-300 group-hover:text-brand-orange transition-colors" size={20} />
                        </a>
                        <a 
                          href="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/02/16170201/2021_Mallard_Assessment-Report.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-brand-orange transition-all group"
                        >
                            <div>
                                <h4 className="font-black uppercase text-sm tracking-tight">2021 Mallard Report</h4>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Assessment Documentation</span>
                            </div>
                            <Download className="text-gray-300 group-hover:text-brand-orange transition-colors" size={20} />
                        </a>
                    </div>
                </section>
            </div>
          </div>
          <div className="lg:w-1/4">
            <Sidebar activeCategory="Projects" />
          </div>
        </div>
      </div>
    );
};

export const ProjectRoyalty: React.FC = () => {
    const ontarioRoyalties = [
      { asset: "Big Trout Lake (PGE-Ni-Cu-Cr)", details: "2.5% NSR on 12,080 acres." },
      { asset: "Tib Lake (PGE)", details: "0.5% NSR on 4 legacy claims held by Lac des Iles Mines Ltd. (North American Palladium Ltd.) covering the Tib Lake intrusion." },
      { asset: "MacMurchy Township (Au)", details: "1% NSR on 33 legacy claims in Shining Tree area held by Golden Harp Resources." },
      { asset: "Ring of Fire (Au-Ni-Cu-PGE-Cr)", details: "1% NSR on 23 cell claims in Ring of Fire area held by Aurcrest Gold Inc." },
      { asset: "Scattergood Project", details: "1% NSR on project owned by Heritage Mining." },
      { asset: "Muskrat Dam Project", details: "1% NSR on the Muskrat Dam Critical Minerals Project." }
    ];

    const internationalRoyalties = [
      { asset: "Sonia-Puma (Au-Cu), Chile", details: "2% NSR on Sonia-Puma claims held by Newmont." }
    ];

    return (
      <div className="bg-white min-h-screen">
        <Banner title="ROYALTY PORTFOLIO" subtitle="Strategic NSR Assets in Prime Mining Districts" image="https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/01/16170408/projects-bg.jpg" />
        <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-3/4 space-y-16">
            <section className="reveal-up">
                <div className="flex items-center space-x-4 mb-8">
                    <Coins className="text-brand-orange" size={28} />
                    <h2 className="text-3xl font-black uppercase tracking-tighter">Strategic Overview</h2>
                </div>
                <p className="text-xl text-gray-700 font-light leading-relaxed">
                    PTX Metals is developing a net smelter return (NSR) royalty portfolio and currently holds royalties on several early-stage gold, PGE, and base metal properties across premium global jurisdictions.
                </p>
            </section>

            <section className="reveal-up">
                <div className="flex items-center space-x-4 mb-8">
                    <MapPin className="text-brand-orange" size={24} />
                    <h2 className="text-3xl font-black uppercase tracking-tighter">Ontario, Canada</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {ontarioRoyalties.map((r, i) => (
                        <div key={i} className="p-8 bg-gray-50 border border-gray-100 rounded-2xl hover:border-brand-orange transition-all group">
                            <h4 className="font-black uppercase text-sm tracking-tight mb-2 group-hover:text-brand-orange transition-colors">{r.asset}</h4>
                            <p className="text-gray-500 text-sm font-light leading-relaxed">{r.details}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="reveal-up">
                <div className="flex items-center space-x-4 mb-8">
                    <Globe2 className="text-brand-orange" size={24} />
                    <h2 className="text-3xl font-black uppercase tracking-tighter">International Portfolio</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {internationalRoyalties.map((r, i) => (
                        <div key={i} className="p-8 bg-brand-dark text-white rounded-2xl border-t-2 border-brand-orange">
                            <h4 className="font-black uppercase text-sm tracking-tight mb-2 text-brand-orange">{r.asset}</h4>
                            <p className="text-gray-400 text-sm font-light leading-relaxed">{r.details}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="p-12 glass bg-gray-50 border border-gray-100 rounded-3xl reveal-up">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Non-Dilutive Growth</h3>
                        <p className="text-gray-500 font-light max-w-md">Our royalty portfolio provides significant upside potential without additional capital requirements.</p>
                    </div>
                    <button className="bg-brand-orange text-white px-10 py-4 font-black uppercase tracking-widest hover:bg-black transition-all">
                        Inquire About Asset JV
                    </button>
                </div>
            </div>
          </div>
          <div className="lg:w-1/4">
            <Sidebar activeCategory="Projects" />
          </div>
        </div>
      </div>
    );
};
