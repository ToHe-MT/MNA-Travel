export async function GET({ fetch, setHeaders }) {
	setHeaders({
		'Content-Type': 'application/xml'
	});

	const site = 'https://mna.travel';
	const response = await fetch('https://mna.travel');
	if (!response.ok) {
		throw new Error('Failed to fetch posts.');
	}
	const posts = await response.json();

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>${site}</loc>
<changefreq>daily</changefreq>
<priority>0.7</priority>
</url>
${posts.map(post => `
<url>
<loc>${site}/articles/${post.id}</loc>
<changefreq>weekly</changefreq>
<lastmod>${post.published_at.split('T')[0]}</lastmod>
</url>
`).join('')}
</urlset>`;
	return new Response(sitemap);
}