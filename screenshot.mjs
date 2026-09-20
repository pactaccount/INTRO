import puppeteer from 'puppeteer';

(async () => {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const delay = ms => new Promise(r => setTimeout(r, ms));

  console.log("Capturing RAG Pipeline...");
  await page.goto('https://financial-rag-pipeline-te58.onrender.com', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await delay(8000);
  await page.screenshot({ path: 'public/images/real_rag_pipeline.png' });

  console.log("Capturing MedBot...");
  await page.goto('https://medbot-backend-0895.onrender.com', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await delay(8000);
  await page.screenshot({ path: 'public/images/real_medbot.png' });

  console.log("Capturing SeaQL...");
  await page.goto('https://seaql.onrender.com', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await delay(8000);
  await page.screenshot({ path: 'public/images/real_seaql.png' });

  console.log("Done!");
  await browser.close();
})();
