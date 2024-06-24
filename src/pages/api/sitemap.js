export default function handler(req, res) {
  const sitemaps = [
    'https://instruhub.com/sitemap-products.xml',
    'https://instruhub.com/sitemap-categories.xml',
    'https://instruhub.com/sitemap-brands.xml',
  ];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  sitemaps.forEach((sitemap) => {
    xml += '<sitemap>\n';
    xml += `<loc>${sitemap}</loc>\n`;
    xml += '</sitemap>\n';
  });

  xml += '</sitemapindex>';
  
  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(xml);
}