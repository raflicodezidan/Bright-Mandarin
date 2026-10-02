const { createClient } = require('@sanity/client');

const token = process.env.SANITY_API_WRITE_TOKEN || 'skBWckgdWyVnq0YVnX7iaSNkaH1cUjl2LaexK3Hjq1dazDwZQxSOO4AltCAhCpoGDUdrMwYwV3fNyIhUUhjXbU9and4mamRkoPNAErpQfMKM1BSP8hOpic9UnIr7Ux8kMDUKJLZ8xblnd4L4Y6GCi0hX8tWl2FJEQNVvwDr9utTVt11KXGl5';
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '9f5rpp8c';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-03-12',
  token,
  useCdn: false,
});

async function main() {
  const types = ['program', 'pengajar', 'metodeBelajar', 'testimoni', 'berita', 'keunggulan', 'faq'];
  for (const t of types) {
    const docs = await client.fetch(`*[_type == "${t}"] | order(urutan asc, _createdAt asc){ _id, title, judul, nama, slug, urutan }`);
    console.log(`\n=== TYPE: ${t} (COUNT: ${docs.length}) ===`);
    docs.forEach(d => {
      console.log(`  - [${d._id}] ${d.judul || d.title || d.nama || d.slug?.current || 'Untitled'} (urutan: ${d.urutan})`);
    });
  }
}

main().catch(console.error);
