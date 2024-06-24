
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const { subdomain } = req.query; 
  try {
    const robotsTxt = fs.readFileSync(path.join(process.cwd(), 'public', 'robots.txt'), 'utf-8');
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(robotsTxt);
  } catch (error) {
    res.status(404).send('Not Found');
  }
}