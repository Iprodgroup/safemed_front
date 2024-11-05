import axios from 'axios';

const generateSafetySitemap = async () => {
  let page = 1;
  let hasMore = true;
  let products = [];

  try {
    while (hasMore) {
      const response = await axios.get(`https://admin.safemedsupply.com/api/products/safety`, {
        params: { page },
      });

      const currentPageProducts = response.data.products || [];
      products = products.concat(currentPageProducts);

      hasMore = currentPageProducts.length > 0;
      page++;
    }

    const xml = `
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${products.map(product => `
          <url>
            <loc>https://safemedsupply.com/ae/catalog/${product.slug}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.5</priority>
          </url>
        `).join('')}
      </urlset>
    `;

    return xml;
  } catch (error) {
    console.error('Error fetching safety products:', error);
    return null;
  }
};

export default async function handler(req, res) {
  const sitemap = await generateSafetySitemap();

  if (sitemap) {
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
  } else {
    res.status(500).send('Error generating safety sitemap');
  }

  res.end();
}
