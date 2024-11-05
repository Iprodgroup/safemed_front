// pages/api/sitemap/medical.js

import axios from 'axios';

const generateMedicalSitemap = async () => {
  try {
    const response = await axios.get('https://admin.safemedsupply.com/api/products/medical');
    const products = response.data;

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
    console.error('Error fetching products:', error);
    return null;
  }
};

export default async function handler(req, res) {
  const sitemap = await generateMedicalSitemap();
  
  if (sitemap) {
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
  } else {
    res.status(500).send('Error generating medical sitemap');
  }
  
  res.end();
}
