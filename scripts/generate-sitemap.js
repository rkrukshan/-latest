import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://your-netlify-site.netlify.app' });
  const writeStream = createWriteStream('./public/sitemap.xml');

  // Pipe sitemap to file
  sitemap.pipe(writeStream);

  // Add your pages
  sitemap.write({ url: '/', changefreq: 'monthly', priority: 1 });
  sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.8 });
  sitemap.write({ url: '/projects', changefreq: 'monthly', priority: 0.8 });
  sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.8 });

  sitemap.end();

  // Wait for sitemap to be fully written
  await streamToPromise(sitemap);
  console.log('Sitemap created!');
}

generateSitemap();
