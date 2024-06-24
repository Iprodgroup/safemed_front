// pages/products-sitemap.xml.js

import axios from 'axios';

const generateProductsSitemap = async ({ country }) => {
  try {
    const response = await axios.get('https://admin.safemedsupply.com/api/products/medical');
    const products = response.data;
    const xml = `
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${products.map(product => `
          <url>
            <loc>https://safemedsupply.com/${product.slug}</loc>
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

const ProductsSitemap = () => null;

export async function getServerSideProps({ res }) {
  const sitemap = await generateProductsSitemap();
  if (sitemap) {
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
  } else {
    res.statusCode = 500;
    res.end('Error generating products sitemap');
  }
  res.end();
  return { props: {} };
}

export default ProductsSitemap;