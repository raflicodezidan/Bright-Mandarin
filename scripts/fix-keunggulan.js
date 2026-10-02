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
    title: 'Sertifikasi Min. HSK 6',
    badge: 'Jaminan Kualitas',
    desc: 'Seluruh Laoshi di Bright Mandarin memiliki latar belakang pendidikan formal dengan sertifikasi minimal HSK 6 dari universitas bahasa Mandarin ternama di Tiongkok.',
    urutan: 1,
  },
  {
    _id: 'keunggulan-2',
    _type: 'keunggulan',
    title: 'Kelas Kids & Dewasa',
    badge: 'Fleksibel Usia',
    desc: 'Memiliki kurikulum berjenjang terpisah yang disesuaikan dengan psikologi anak (usia 4-15 th) serta kebutuhan profesional dan mahasiswa dewasa.',
    urutan: 2,
  },
  {
    _id: 'keunggulan-3',
    _type: 'keunggulan',
    title: 'Study Plan Terstruktur 3-4 Bulan',
    badge: 'Target Pasti',
    desc: 'Setiap level memiliki target pencapaian terukur dengan durasi 3 - 4 bulan sehingga murid tidak berputar-putar tanpa arah dan cepat menguasai target level.',
    urutan: 3,
  },
  {
    _id: 'keunggulan-4',
    _type: 'keunggulan',
    title: 'FREE Jasa Registrasi Ujian HSK',
    badge: 'Gratis Pengurusan',
    desc: 'Bagi murid yang hendak mengikuti ujian HSK resmi internasional dari Tiongkok, tim kami mengurus seluruh proses pendaftaran tanpa biaya admin tambahan.',
    urutan: 4,
  },
  {
    _id: 'keunggulan-5',
    _type: 'keunggulan',
    title: 'Metode Sesuai Kebutuhan',
    badge: 'Custom Learning',
    desc: 'Materi dapat disesuaikan: mulai dari HSK 1 - 6, Hanzi Tradisional / Simplified, Speaking & Daily Conversation, hingga Business Chinese untuk ekspansi usaha.',
    urutan: 5,
  },
  {
    _id: 'keunggulan-6',
    _type: 'keunggulan',
    title: 'Garansi Mengulang Gratis',
    badge: 'Garansi Siswa',
    desc: 'Apabila kehadiran di atas 90% dan mengerjakan seluruh tugas namun belum lulus ujian level, kami berikan fasilitas mengulang kelas secara cuma-cuma.',
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
