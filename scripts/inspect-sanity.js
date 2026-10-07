const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '9f5rpp8c',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-12',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

async function main() {
  const programs = await client.fetch('*[_type == "program"]{_id, judul, urutan, "hasImg": defined(gambar)}');
  console.log('PROGRAMS', JSON.stringify(programs, null, 2));
  const settings = await client.fetch('*[_type == "siteSettings"]{_id, heroPrimaryCtaText, heroCard3Number, heroCard3Text, learningModesTitle, learningModesSubtitle, learningModesDesc, programSectionDesc, pengajarSectionTitle}');
  console.log('SETTINGS', JSON.stringify(settings, null, 2));
  const types = await client.fetch('array::unique(*[]._type)');
  console.log('TYPES', types);
}

main().catch((e) => { console.error(e); process.exit(1); });
