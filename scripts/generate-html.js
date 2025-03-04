import { readFile, writeFile, mkdir } from 'fs/promises';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const translations = {
  en: {
    meta: {
      title: "3D Printing Cost Calculator",
      description: "Calculate 3D printing costs with precision. Estimate material, labor, and machine expenses to optimize your pricing strategy.",
      keywords: "3D printing, cost calculator, pricing tool, manufacturing costs, material costs, labor costs, machine costs, profit margins, 3D printer, filament calculator"
    }
  },
  es: {
    meta: {
      title: "Calculadora de Costos de Impresión 3D",
      description: "Calcule los costos de impresión 3D con precisión. Estime materiales, mano de obra y gastos de máquina para optimizar su estrategia de precios.",
      keywords: "impresión 3D, calculadora de costos, herramienta de precios, costos de fabricación, costos de materiales, costos de mano de obra, costos de máquina, márgenes de beneficio, impresora 3D, calculadora de filamento"
    }
  },
  de: {
    meta: {
      title: "3D-Druck Kostenrechner",
      description: "Berechnen Sie 3D-Druckkosten mit höchster Präzision. Schätzen Sie Material-, Arbeits- und Maschinenkosten für eine optimale Preisstrategie.",
      keywords: "3D-Druck, Kostenrechner, Preiswerkzeug, Herstellungskosten, Materialkosten, Arbeitskosten, Maschinenkosten, Gewinnmargen, 3D-Drucker, Filamentrechner"
    }
  },
  fr: {
    meta: {
      title: "Calculateur de Coûts d'Impression 3D",
      description: "Calculez les coûts d'impression 3D avec précision. Optimisez votre stratégie de prix en analysant les coûts de matériaux, main-d'œuvre et exploitation.",
      keywords: "impression 3D, calculateur de coûts, outil de tarification, coûts de fabrication, coûts des matériaux, coûts de main-d'œuvre, coûts machine, marges bénéficiaires, imprimante 3D, calculateur de filament"
    }
  },
  it: {
    meta: {
      title: "Calcolatore Costi Stampa 3D",
      description: "Calcola i costi di stampa 3D con precisione. Ottimizza la tua strategia di prezzo analizzando materiali, manodopera e costi operativi.",
      keywords: "stampa 3D, calcolatore costi, strumento prezzi, costi produzione, costi materiali, costi manodopera, costi macchina, margini profitto, stampante 3D, calcolatore filamento"
    }
  }
};

const PROJECT_ROOT = resolve(__dirname, '..');
const DIST_DIR = resolve(PROJECT_ROOT, 'dist');

// Ensure dist directory exists
try {
  await mkdir(DIST_DIR, { recursive: true });
} catch (error) {
  if (error.code !== 'EEXIST') {
    throw error;
  }
}
const LANGUAGES = ['en', 'es', 'de', 'fr', 'it'];
const BASE_URL = 'https://3dprintingcostcalculator.com/';

const META_TAGS = {
  title: /<title>(.*?)<\/title>/,
  description: /<meta\s+name="description"\s+content="(.*?)"/,
  keywords: /<meta\s+name="keywords"\s+content="(.*?)"/,
  ogTitle: /<meta\s+property="og:title"\s+content="(.*?)"/,
  ogDescription: /<meta\s+property="og:description"\s+content="(.*?)"/,
  ogUrl: /<meta\s+property="og:url"\s+content="(.*?)"/,
  twitterTitle: /<meta\s+name="twitter:title"\s+content="(.*?)"/,
  twitterDescription: /<meta\s+name="twitter:description"\s+content="(.*?)"/,
  htmlLang: /<html\s+lang="(.*?)"/,
  canonical: /<link\s+rel="canonical"\s+href="(.*?)"/
};

function generateAlternateLinks() {
  return `
    <link rel="alternate" hrefLang="en" href="${BASE_URL}" />
    <link rel="alternate" hrefLang="es" href="${BASE_URL}es/" />
    <link rel="alternate" hrefLang="de" href="${BASE_URL}de/" />
    <link rel="alternate" hrefLang="fr" href="${BASE_URL}fr/" />
    <link rel="alternate" hrefLang="it" href="${BASE_URL}it/" />
    <link rel="alternate" hrefLang="x-default" href="${BASE_URL}" />
  `;
}

function addVisuallyHiddenH1(html, translation) {
  // Add a single h1 before the root div
  return html.replace('<div id="root"></div>', `<h1 class="sr-only">${translation.meta.title}</h1>\n<div id="root"></div>`);
}

async function generateLanguageFiles() {
  try {
    // Read the base HTML template
    const templatePath = join(DIST_DIR, 'index.html');
    const templateHtml = await readFile(templatePath, 'utf-8');

    // Generate root (English) HTML
    let rootHtml = templateHtml;
    rootHtml = rootHtml
      .replace(META_TAGS.htmlLang, `<html lang="en"`)
      .replace(META_TAGS.title, `<title>${translations.en.meta.title}</title>`)
      .replace(META_TAGS.description, `<meta name="description" content="${translations.en.meta.description}"`)
      .replace(META_TAGS.keywords, `<meta name="keywords" content="${translations.en.meta.keywords}"`)
      .replace(META_TAGS.ogTitle, `<meta property="og:title" content="${translations.en.meta.title}"`)
      .replace(META_TAGS.ogDescription, `<meta property="og:description" content="${translations.en.meta.description}"`)
      .replace(META_TAGS.ogUrl, `<meta property="og:url" content="${BASE_URL}"`)
      .replace(META_TAGS.twitterTitle, `<meta name="twitter:title" content="${translations.en.meta.title}"`)
      .replace(META_TAGS.twitterDescription, `<meta name="twitter:description" content="${translations.en.meta.description}"`)
      .replace(META_TAGS.canonical, `<link rel="canonical" href="${BASE_URL}"`);

    // Add language alternates to root
    rootHtml = rootHtml.replace('</head>', `${generateAlternateLinks()}\n</head>`);

    // Add visually hidden h1 for SEO
    rootHtml = addVisuallyHiddenH1(rootHtml, translations.en);

    // Remove any duplicate h1 elements
    rootHtml = rootHtml.replace(/<h1 class="sr-only">.*?<\/h1>\s*<h1 class="sr-only">.*?<\/h1>/, (match) => {
      const firstH1 = match.match(/<h1.*?<\/h1>/)[0];
      return `<h1 class="sr-only">${translations.en.meta.title}</h1>`;
    });

    // Save root index.html
    await writeFile(join(DIST_DIR, 'index.html'), rootHtml, 'utf-8');
    console.log('✓ Generated root HTML');

    // Generate language-specific files
    for (const lang of LANGUAGES) {
      if (lang === 'en') continue; // Skip English as it's already handled in root

      const t = translations[lang];
      let langHtml = templateHtml;
      const canonicalUrl = `${BASE_URL}${lang}/`;

      // Update meta tags
      langHtml = langHtml
        .replace(META_TAGS.htmlLang, `<html lang="${lang}"`)
        .replace(META_TAGS.title, `<title>${t.meta.title}</title>`)
        .replace(META_TAGS.description, `<meta name="description" content="${t.meta.description}"`)
        .replace(META_TAGS.keywords, `<meta name="keywords" content="${t.meta.keywords}"`)
        .replace(META_TAGS.ogTitle, `<meta property="og:title" content="${t.meta.title}"`)
        .replace(META_TAGS.ogDescription, `<meta property="og:description" content="${t.meta.description}"`)
        .replace(META_TAGS.ogUrl, `<meta property="og:url" content="${canonicalUrl}"`)
        .replace(META_TAGS.twitterTitle, `<meta name="twitter:title" content="${t.meta.title}"`)
        .replace(META_TAGS.twitterDescription, `<meta name="twitter:description" content="${t.meta.description}"`)
        .replace(META_TAGS.canonical, `<link rel="canonical" href="${canonicalUrl}"`);

      // Add language alternates
      langHtml = langHtml.replace('</head>', `${generateAlternateLinks()}\n</head>`);

      // Add visually hidden h1 for SEO
      langHtml = addVisuallyHiddenH1(langHtml, t);

      // Remove any duplicate h1 elements
      langHtml = langHtml.replace(/<h1 class="sr-only">.*?<\/h1>\s*<h1 class="sr-only">.*?<\/h1>/, (match) => {
        const firstH1 = match.match(/<h1.*?<\/h1>/)[0];
        return `<h1 class="sr-only">${t.meta.title}</h1>`;
      });

      // Create language directory and save file
      const langDir = join(DIST_DIR, lang);
      await mkdir(langDir, { recursive: true });
      await writeFile(join(langDir, 'index.html'), langHtml, 'utf-8');

      console.log(`✓ Generated HTML for ${lang}`);
    }
  } catch (error) {
    console.error('Failed to generate language files:', error);
    process.exit(1);
  }
}

generateLanguageFiles();
