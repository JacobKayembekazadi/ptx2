interface Env {}

interface RSSItem {
  id: string;
  title: string;
  date: string;
  year: string;
  category: 'Corporate' | 'Exploration' | 'Financials';
  summary: string;
  externalUrl: string;
  content: string;
}

function categorize(title: string, description: string): 'Corporate' | 'Exploration' | 'Financials' {
  const text = (title + ' ' + description).toLowerCase();
  const explorationKeywords = ['drill', 'exploration', 'assay', 'sample', 'geolog', 'mineral', 'survey', 'geophysic', 'gold', 'copper', 'nickel', 'pge', 'pgm', 'w2 project', 'shining tree', 'heenan', 'metallurg', 'resource'];
  const financialKeywords = ['financ', 'private placement', 'shares', 'stock', 'dividend', 'revenue', 'earnings', 'closing', 'fiscal', 'quarterly', 'annual report', 'warrant', 'option'];

  if (explorationKeywords.some(k => text.includes(k))) return 'Exploration';
  if (financialKeywords.some(k => text.includes(k))) return 'Financials';
  return 'Corporate';
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
    .replace(/-$/, '');
}

function formatDate(pubDate: string): { formatted: string; year: string } {
  const d = new Date(pubDate);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return {
    formatted: `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`,
    year: String(d.getFullYear()),
  };
}

function extractItems(xml: string): RSSItem[] {
  const items: RSSItem[] = [];
  const itemRegex = /<item[^>]*>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];

    const title = (block.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) || block.match(/<title>([\s\S]*?)<\/title>/))?.[1]?.trim() || '';
    const link = (block.match(/<link><!\[CDATA\[([\s\S]*?)\]\]><\/link>/) || block.match(/<link>([\s\S]*?)<\/link>/))?.[1]?.trim() || '';
    const description = (block.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) || block.match(/<description>([\s\S]*?)<\/description>/))?.[1]?.trim() || '';
    const pubDate = (block.match(/<pubDate><!\[CDATA\[([\s\S]*?)\]\]><\/pubDate>/) || block.match(/<pubDate>([\s\S]*?)<\/pubDate>/))?.[1]?.trim() || '';

    if (!title) continue;

    const { formatted, year } = formatDate(pubDate);
    // Decode HTML entities from RSS
    const decoded = description
      .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
      .replace(/<img[^>]*style="width:\s*1px[^"]*"[^>]*\/?>/gi, ''); // remove tracking pixels
    const plainText = decoded.replace(/<[^>]*>/g, '');
    const summary = plainText.slice(0, 200).trim();

    items.push({
      id: slugify(title),
      title,
      date: formatted,
      year,
      category: categorize(title, description),
      summary,
      externalUrl: link,
      content: `<p>${decoded}</p>`,
    });
  }

  return items;
}

export const onRequestGet: PagesFunction<Env> = async () => {
  try {
    const res = await fetch('https://feeds.newsfilecorp.com/company/7277', {
      headers: { 'User-Agent': 'PTXMetals/1.0' },
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'RSS feed unavailable', status: res.status }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    const xml = await res.text();
    const items = extractItems(xml);

    return new Response(JSON.stringify(items), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=1800',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to fetch RSS', detail: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
};
