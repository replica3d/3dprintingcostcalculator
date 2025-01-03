import { copyFile, mkdir } from 'fs/promises';
import { join } from 'path';

const languages = ['es', 'de', 'fr', 'it'];
const sourceDir = 'public';
const distDir = 'dist';

async function copyLocalizedFiles() {
  // Copy static files to root
  await copyFile(
    join(sourceDir, 'manifest.json'),
    join(distDir, 'manifest.json')
  );
  
  await copyFile(
    join(sourceDir, 'robots.txt'),
    join(distDir, 'robots.txt')
  );

  await copyFile(
    join(sourceDir, 'sitemap.xml'),
    join(distDir, 'sitemap.xml')
  );

  await copyFile(
    join(sourceDir, '_redirects'),
    join(distDir, '_redirects')
  );

  // Copy localized files
  for (const lang of languages) {
    // Copy manifest to each language directory
    const langDir = join(distDir, lang);
    await mkdir(langDir, { recursive: true });
    await copyFile(
      join(sourceDir, 'manifest.json'),
      join(langDir, 'manifest.json')
    );
  }
}

copyLocalizedFiles().catch(console.error);
