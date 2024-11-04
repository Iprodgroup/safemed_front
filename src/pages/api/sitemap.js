// pages/api/sitemap.js

export default async function handler(req, res) {
  const sitemaps = [
    'https://safemedsupply.com/ae/catalog/sitemap-medical.xml',
    'https://safemedsupply.com/ae/catalog/sitemap-safety.xml',
    'https://safemedsupply.com/sa/catalog/sitemap-medical.xml',
    'https://safemedsupply.com/sa/catalog/sitemap-safety.xml',
  ];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  sitemaps.forEach((sitemap) => {
    xml += '  <sitemap>\n';
    xml += `    <loc>${sitemap}</loc>\n`;
    xml += '  </sitemap>\n';
  });

  xml += '</sitemapindex>';

  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(xml);
}
