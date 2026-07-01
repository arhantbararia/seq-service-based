import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

const websites = [
  { id: 'pathology-demo-1', url: 'https://x-diagnostics-website.vercel.app/' },
  { id: 'pathology-demo-2', url: 'https://69f45d5e.seq-pathology-demo-1-website.pages.dev/' },
  { id: 'dental-demo-1', url: 'https://a0141aac.seq-dental-demo-1-website.pages.dev/' },
  { id: 'ca-firm-demo-1', url: 'https://f37b9fa6.seq-ca-firm-demo-1-website.pages.dev' },
  { id: 'law-firm-demo-1', url: 'https://d74f5863.seq-law-firm-demo-1-website.pages.dev' },
  { id: 'int-design-demo-1', url: 'https://seq-int-design-demo-1-website.pages.dev/' },
  { id: 'ivf-demo-1', url: 'https://seq-ivf-demo-1-website.pages.dev' },
  { id: 'mental-wellness-demo-1', url: 'https://seq-mental-wellness-demo-1-website.pages.dev/' }
];

const screenshotsDir = path.join(process.cwd(), 'public', 'screenshots');

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  for (const site of websites) {
    console.log(`Capturing ${site.url}...`);
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    try {
      await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 60000 });
      // small delay for animations
      await new Promise(r => setTimeout(r, 2000));
      await page.screenshot({ path: path.join(screenshotsDir, `${site.id}.png`) });
      console.log(`Saved ${site.id}.png`);
    } catch (e) {
      console.error(`Failed to capture ${site.url}:`, e);
    }
    await page.close();
  }
  await browser.close();
})();
