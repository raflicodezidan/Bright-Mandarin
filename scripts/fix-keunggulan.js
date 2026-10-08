const { createClient } = require('@sanity/client');

const token = process.env.SANITY_API_WRITE_TOKEN || 'skBWckgdWyVnq0YVnX7iaSNkaH1cUjl2LaexK3Hjq1dazDwZQxSOO4AltCAhCpoGDUdrMwYwV3fNyIhUUhjXbU9and4mamRkoPNAErpQfMKM1BSP8hOpic9UnIr7Ux8kMDUKJLZ8xblnd4L4Y6GCi0hX8tWl2FJEQNVvwDr9utTVt11KXGl5';
const projectId = '9f5rpp8c';
const dataset = 'production';

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-03-12',
  token,
  useCdn: false,
});

const correctKeunggulan = [
  {
    _id: 'keunggulan-1',
    _type: 'keunggulan',
    title: 'Personal Speaking Practice',
    badge: 'Latihan Berbicara Pribadi',
    desc: 'Siswa mendapatkan kesempatan untuk berlatih berbicara secara langsung dan aktif, sehingga lebih percaya diri menggunakan bahasa Mandarin dalam percakapan sehari-hari.',
    urutan: 1,
  },
  {
    _id: 'keunggulan-2',
    _type: 'keunggulan',
    title: 'Structured Learning Program',
    badge: 'Program Pembelajaran Terstruktur',
    desc: 'Program pembelajaran disusun secara terstruktur sesuai usia, level kemampuan, dan kebutuhan siswa, dari dasar hingga persiapan HSK.',
    urutan: 2,
  },
  {
    _id: 'keunggulan-3',
    _type: 'keunggulan',
    title: 'Experienced Teachers',
    badge: 'Guru Berpengalaman',
    desc: 'Didampingi oleh guru yang berpengalaman dalam mengajar Mandarin untuk anak-anak, remaja, maupun dewasa.',
    urutan: 3,
  },
  {
    _id: 'keunggulan-4',
    _type: 'keunggulan',
    title: 'Practical Mandarin Skills',
    badge: 'Keterampilan Praktis Mandarin',
    desc: 'Tidak hanya belajar kosakata dan tata bahasa, tetapi juga bagaimana menggunakan Mandarin dalam situasi nyata, seperti percakapan, sekolah, perjalanan, hingga kebutuhan profesional.',
    urutan: 4,
  },
  {
    _id: 'keunggulan-5',
    _type: 'keunggulan',
    title: 'HSK & Academic Support',
    badge: 'HSK & Dukungan Akademik',
    desc: 'Membantu siswa mempersiapkan ujian HSK sekaligus mendukung kebutuhan Mandarin di sekolah maupun pendidikan lanjutan.',
    urutan: 5,
  },
  {
    _id: 'keunggulan-6',
    _type: 'keunggulan',
    title: 'Engaging & Interactive Learning',
    badge: 'Pembelajaran Interaktif & Menarik',
    desc: 'Pembelajaran dibuat interaktif melalui speaking practice, games, activities, dan berbagai aktivitas yang membuat belajar Mandarin lebih menyenangkan.',
    urutan: 6,
  },
];

async function main() {
  console.log('Fetching all existing keunggulan documents...');
  const existing = await client.fetch('*[_type == "keunggulan"]{ _id, title, badge }');
  console.log(`Found ${existing.length} existing keunggulan items:`, existing);

  // Delete all existing keunggulan documents to eliminate all duplicates
  for (const item of existing) {
    console.log(`Deleting ${item._id}: ${item.title}`);
    await client.delete(item._id);
  }

  console.log('Creating clean, canonical 6 keunggulan items...');
  for (const item of correctKeunggulan) {
    console.log(`Creating ${item._id}: ${item.title}`);
    await client.createOrReplace(item);
  }

  console.log('Verification: fetching updated keunggulan items:');
  const verified = await client.fetch('*[_type == "keunggulan"] | order(urutan asc){ _id, title, badge, urutan }');
  console.log(`Now exactly ${verified.length} keunggulan items in Sanity:`, verified);
}

main().catch(console.error);
