
export interface NewsItem {
    id: string;
    title: string;
    date: string;
    year: string;
    category: 'Corporate' | 'Exploration' | 'Financials';
    summary: string;
    thumbnail?: string;
    content: string; // HTML string for rich text
}

export const newsData: NewsItem[] = [
    {
        id: "ptx-metals-strategic-partnership-battery-manufacturer",
        title: "PTX Metals Announces Strategic Partnership with Global Battery Manufacturer",
        date: "Feb 15, 2026",
        year: "2026",
        category: "Corporate",
        summary: "PTX Metals enters into a definitive agreement with a leading Tier-1 battery manufacturer to co-develop the W2 project infrastructure.",
        thumbnail: "https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2024/04/12092016/Photo-2024-04-06-3-06-48%E2%80%AFPM-scaled.jpg",
        content: `
            <p><strong>TORONTO, February 15, 2026 (NEWSFILE)</strong> – PTX Metals Inc. (TSXV: PTX) (OTCQB: PANXF) (Frankfurt: 9PX) (“PTX” or the “Company”) is pleased to announce a strategic partnership with a global Tier-1 battery manufacturer.</p>
            <p>This partnership will focus on the co-development of infrastructure at the Company's flagship W2 Copper-Nickel-PGE Project in the Ring of Fire, Ontario.</p>
            <h3>Key Highlights:</h3>
            <ul>
                <li><strong>Investment:</strong> The partner will invest CAD $5M directly into PTX Metals for a 9.9% equity stake.</li>
                <li><strong>Offtake Agreement:</strong> Conditional right of first refusal on 20% of future nickel concentrate production.</li>
                <li><strong>Technical Support:</strong> Formation of a joint technical committee to optimize flow sheets for battery-grade nickel sulphates.</li>
            </ul>
            <p>"This is a transformative moment for PTX," stated Greg Ferron, CEO. "Partnering with a major end-user validates the scale and quality of the W2 asset."</p>
        `
    },
    {
        id: "w2-drilling-intersects-copper-nickel",
        title: "W2 Drilling Intersects 1.2% CuEq over 50m at Central Target",
        date: "Jan 22, 2026",
        year: "2026",
        category: "Exploration",
        summary: "Drill hole W2-26-03 intercepts wide zone of mineralization, confirming continuity of the Central Target.",
        thumbnail: "https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2025/12/01074904/picture-1-1024x579.jpg",
        content: `
            <p><strong>TORONTO, January 22, 2026</strong> – PTX Metals Inc. announces assay results from the first three holes of the 2026 Winter Drill Program.</p>
            <p><strong>Highlight Intercepts:</strong></p>
            <ul>
                <li><strong>Hole W2-26-03:</strong> 50.0m @ 1.2% CuEq (0.8% Cu, 0.3% Ni, 0.4g/t PGE) from 120m depth.</li>
                <li><strong>Hole W2-26-04:</strong> 22.5m @ 1.5% CuEq including massive sulphide lenses.</li>
            </ul>
            <p>The program is currently 40% complete with two rigs turning.</p>
        `
    },
    {
        id: "webequie-first-nation-cooperation-agreement",
        title: "PTX Metals Signs Cooperation Agreement with Webequie First Nation",
        date: "Dec 10, 2025",
        year: "2025",
        category: "Corporate",
        summary: "A milestone agreement establishing a framework for collaboration and environmental stewardship at the W2 Project.",
        thumbnail: "https://wp-platinex-2024.s3.ca-central-1.amazonaws.com/media/2023/01/16170408/projects-bg.jpg",
        content: `
            <p><strong>TORONTO, December 10, 2025</strong> – PTX Metals Inc. is proud to announce the signing of a Cooperation Agreement with Webequie First Nation.</p>
            <p>The agreement outlines protocols for ongoing exploration, environmental monitoring, and the inclusion of traditional knowledge in project planning.</p>
        `
    },
    {
        id: "closing-financing-november-2025",
        title: "PTX Metals Closes $3M Financing for 2026 Exploration",
        date: "Nov 15, 2025",
        year: "2025",
        category: "Financials",
        summary: "Oversubscribed non-brokered private placement ensures full funding for the W2 Winter Program.",
        content: `
            <p><strong>TORONTO, November 15, 2025</strong> – PTX Metals Inc. has closed its previously announced non-brokered private placement, raising gross proceeds of $3,000,000.</p>
            <p>Proceeds will be used primarily for the upcoming 5,000m drill program at W2 and for general working capital.</p>
        `
    },
    {
        id: "lidar-survey-complete",
        title: "High-Resolution LIDAR Survey Completed at W2",
        date: "Oct 25, 2025",
        year: "2025",
        category: "Exploration",
        summary: "KBM Resources Group provides critical data for drill planning and infrastructure development.",
        content: `
            <p><strong>TORONTO, October 25, 2025</strong> – PTX Metals Inc. has received final data from the LIDAR survey flown over the W2 Property.</p>
        `
    }
];
