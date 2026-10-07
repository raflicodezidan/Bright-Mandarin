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

async function uploadImageFromUrl(url, filename) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const asset = await client.assets.upload('image', buffer, { filename });
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    };
  } catch (err) {
    console.warn(`Failed to upload image ${filename}:`, err.message);
    return null;
  }
}

async function updateSanity() {
  console.log('=== UPDATING SANITY DATA ===');

  // 1. Update siteSettings
  console.log('1. Updating siteSettings...');
  await client
    .patch('siteSettings')
    .set({
      learningModesTitle: 'METODE BELAJAR',
      learningModesSubtitle: 'Kelas Offline Tatap Muka di Learning Center Kelapa Gading',
      learningModesDesc: 'Belajar langsung bersama Laoshi di ruang kelas modern ber-AC dengan suasana interaktif, fokus, dan menyenangkan.',
      programSectionTitle: 'PROGRAM KURSUS UNGGULAN',
      programSectionSubtitle: 'Pilihan Program Kursus Mandarin Favorit & Terstruktur',
      programSectionDesc: 'Program belajar Mandarin untuk semua usia: mulai dari bimbingan akademik sekolah, kelas reguler, persiapan HSK & HSKK, hingga kelas percakapan profesional.',
      achievementSectionTitle: 'ACHIEVEMENT MURID',
      achievementSectionSubtitle: 'Prestasi & Skor Ujian Murid-Murid Bright Mandarin',
      achievementSectionDesc: 'Bukti nyata hasil belajar dan dedikasi murid-murid kami dalam meraih skor memuaskan pada ujian HSK dan HSKK.',
    })
    .commit();
  console.log('siteSettings updated successfully!');

  // 2. Remove existing programs and replace with the 7 requested programs
  console.log('2. Updating programs...');
  const existingPrograms = await client.fetch('*[_type == "program"]{ _id }');
  for (const p of existingPrograms) {
    console.log(`Deleting old program: ${p._id}`);
    try {
      await client.delete(p._id);
    } catch (e) {
      console.warn(`Could not delete ${p._id}:`, e.message);
    }
  }

  const HUBUNGI_KAMI = 'Hubungi kami untuk informasi program dan biaya';

  const newProgramsData = [
    {
      _id: 'program-1',
      judul: 'Bimbingan Belajar Akademik',
      slug: { current: 'bimbingan-belajar-akademik' },
      kategori: 'Akademik',
      ringkasan: 'Membantu siswa memahami pelajaran Mandarin di sekolah dengan lebih baik dan meningkatkan kemampuan akademiknya melalui pembelajaran yang disesuaikan dengan kebutuhan masing-masing siswa.',
      targetUsia: 'Siswa sekolah',
      materi: 'Pelajaran Mandarin sesuai kurikulum sekolah',
      metode: 'Personalized learning & latihan interaktif',
      durasi: 'Disesuaikan dengan kebutuhan siswa',
      benefit: 'Membantu memahami materi, meningkatkan kemampuan Mandarin, dan mendukung prestasi akademik',
      harga: HUBUNGI_KAMI,
      urutan: 1,
      imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=80',
    },
    {
      _id: 'program-2',
      judul: 'Kelas Reguler',
      slug: { current: 'kelas-reguler' },
      kategori: 'Reguler',
      ringkasan: 'Mengembangkan kemampuan berbicara, membaca, menulis, dan mendengarkan bahasa Mandarin melalui metode pembelajaran yang interaktif dan disesuaikan dengan usia serta tingkat kemampuan siswa.',
      targetUsia: 'Kindergarten – Adult',
      materi: 'Speaking, Listening, Reading & Writing',
      metode: 'Interaktif dan sesuai level kemampuan siswa',
      durasi: 'Disesuaikan dengan program kelas',
      benefit: 'Membangun kemampuan Mandarin secara menyeluruh dan meningkatkan kepercayaan diri dalam berkomunikasi',
      harga: HUBUNGI_KAMI,
      urutan: 2,
      imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80',
    },
    {
      _id: 'program-3',
      judul: 'Kindergarten – International Curriculum',
      slug: { current: 'kindergarten-international-curriculum' },
      kategori: 'Kindergarten',
      ringkasan: 'Program yang dirancang untuk memenuhi kebutuhan siswa di sekolah dengan kurikulum internasional. Pembelajaran menggunakan lagu, gambar, permainan, storytelling, dan aktivitas kreatif agar anak dapat mengenal dan menggunakan Mandarin dengan cara yang menyenangkan.',
      targetUsia: 'Kindergarten',
      materi: 'Kosakata, percakapan dasar & aktivitas Mandarin',
      metode: 'Songs, games, storytelling & creative activities',
      durasi: 'Disesuaikan dengan program kelas',
      benefit: 'Mengenalkan Mandarin dengan cara yang menyenangkan dan membangun kepercayaan diri anak',
      harga: HUBUNGI_KAMI,
      urutan: 3,
      imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80',
    },
    {
      _id: 'program-4',
      judul: 'Bright Mandarin Kids',
      slug: { current: 'bright-mandarin-kids' },
      kategori: 'Kids',
      ringkasan: 'Fokus pada kemampuan percakapan dasar, pengucapan, dan penggunaan nada Mandarin yang tepat. Siswa dibimbing untuk lebih percaya diri berbicara melalui aktivitas interaktif, permainan, percakapan sederhana, dan storytelling.',
      targetUsia: 'Primary 1–3',
      materi: 'Percakapan dasar, kosakata & pengucapan',
      metode: 'Games, storytelling & interactive speaking',
      durasi: 'Disesuaikan dengan program kelas',
      benefit: 'Membangun kemampuan dan kepercayaan diri berbicara Mandarin',
      harga: HUBUNGI_KAMI,
      urutan: 4,
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80',
    },
    {
      _id: 'program-5',
      judul: 'HSK Preparation',
      slug: { current: 'hsk-preparation' },
      kategori: 'HSK',
      ringkasan: 'Program yang menggabungkan pengembangan kemampuan Mandarin dengan persiapan ujian HSK Level 1–6. Siswa mengembangkan kemampuan membaca, menulis, memahami teks, serta penggunaan kosakata dan tata bahasa secara lebih terstruktur. Cocok untuk kebutuhan akademik maupun profesional.',
      targetUsia: 'Primary 4 – Adult',
      materi: 'HSK Level 1–6, kosakata, tata bahasa, membaca & menulis',
      metode: 'Latihan soal, pembahasan & simulasi ujian',
      durasi: 'Disesuaikan dengan level HSK',
      benefit: 'Mempersiapkan siswa menghadapi ujian HSK untuk kebutuhan akademik maupun profesional',
      harga: HUBUNGI_KAMI,
      urutan: 5,
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80',
    },
    {
      _id: 'program-6',
      judul: 'HSKK – Hanyu Shuiping Kaoshi (Speaking Test)',
      slug: { current: 'hskk-speaking-test' },
      kategori: 'HSKK',
      ringkasan: 'Program persiapan ujian kemampuan berbicara bahasa Mandarin. Siswa berlatih menyampaikan jawaban, mendeskripsikan gambar, melakukan percakapan, serta meningkatkan kelancaran dan kepercayaan diri dalam berbicara Mandarin sesuai tingkat ujian.',
      targetUsia: 'Primary 6 – Adult',
      materi: 'HSK Level 1–6, kosakata, tata bahasa, membaca & menulis',
      metode: 'Latihan soal, pembahasan & simulasi ujian',
      durasi: 'Disesuaikan dengan level HSK',
      benefit: 'Mempersiapkan siswa menghadapi ujian HSK untuk kebutuhan akademik maupun profesional',
      harga: HUBUNGI_KAMI,
      urutan: 6,
      imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=80',
    },
    {
      _id: 'program-7',
      judul: 'Kelas Percakapan',
      slug: { current: 'kelas-percakapan' },
      kategori: 'Percakapan',
      ringkasan: 'Program khusus untuk kebutuhan komunikasi dalam lingkungan profesional. Siswa mempelajari percakapan dan kosakata Mandarin yang digunakan dalam dunia kerja, seperti memperkenalkan diri, meeting, presentasi, komunikasi dengan klien, negosiasi, hingga situasi bisnis sehari-hari.',
      targetUsia: 'Remaja – Dewasa',
      materi: 'Percakapan sehari-hari & komunikasi profesional',
      metode: 'Role play, speaking practice & simulasi situasi nyata',
      durasi: 'Disesuaikan dengan kebutuhan siswa',
      benefit: 'Meningkatkan kemampuan berkomunikasi dalam situasi sosial maupun profesional',
      harga: HUBUNGI_KAMI,
      urutan: 7,
      imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80',
    },
  ];

  for (const prog of newProgramsData) {
    console.log(`Uploading image & creating program: ${prog.judul}...`);
    const imgAsset = await uploadImageFromUrl(prog.imageUrl, `${prog.slug.current}.jpg`);
    const doc = {
      _id: prog._id,
      _type: 'program',
      judul: prog.judul,
      slug: prog.slug,
      kategori: prog.kategori,
      ringkasan: prog.ringkasan,
      targetUsia: prog.targetUsia,
      materi: prog.materi,
      metode: prog.metode,
      durasi: prog.durasi,
      benefit: prog.benefit,
      harga: prog.harga,
      urutan: prog.urutan,
      ...(imgAsset ? { gambar: imgAsset } : {}),
    };
    await client.createOrReplace(doc);
    console.log(`Program created: ${prog.judul}`);
  }

  // 3. Create Achievement documents in Sanity
  console.log('3. Updating Achievement documents...');
  const existingAchievements = await client.fetch('*[_type == "achievement"]{ _id }');
  for (const a of existingAchievements) {
    try {
      await client.delete(a._id);
    } catch (e) {
      console.warn(`Could not delete ${a._id}:`, e.message);
    }
  }

  const achievementsData = [
    {
      _id: 'achievement-1',
      nama: 'Chloe Valerie',
      level: 'HSK 1-3',
      skor: '95/100',
      keterangan: 'Bright Mandarin Kids - HSK 1-3 Test Score 95/100',
      urutan: 1,
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80',
    },
    {
      _id: 'achievement-2',
      nama: 'Nathan Budi',
      level: 'HSK 2',
      skor: '188/200',
      keterangan: 'Kelas Reguler Primary',
      urutan: 2,
      imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80',
    },
    {
      _id: 'achievement-3',
      nama: 'Michelle Angela',
      level: 'HSK 3',
      skor: '285/300',
      keterangan: 'HSK Preparation',
      urutan: 3,
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
    },
    {
      _id: 'achievement-4',
      nama: 'David Kusuma',
      level: 'HSK 4',
      skor: '271/300',
      keterangan: 'HSK Preparation',
      urutan: 4,
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80',
    },
    {
      _id: 'achievement-5',
      nama: 'Amanda Stephanie',
      level: 'HSKK Dasar',
      skor: '92/100',
      keterangan: 'HSKK Speaking Test',
      urutan: 5,
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80',
    },
  ];

  for (const ach of achievementsData) {
    console.log(`Uploading image & creating achievement: ${ach.nama}...`);
    const imgAsset = await uploadImageFromUrl(ach.imageUrl, `${ach._id}.jpg`);
    const doc = {
      _id: ach._id,
      _type: 'achievement',
      nama: ach.nama,
      level: ach.level,
      skor: ach.skor,
      keterangan: ach.keterangan,
      urutan: ach.urutan,
      ...(imgAsset ? { foto: imgAsset } : {}),
    };
    await client.createOrReplace(doc);
    console.log(`Achievement created: ${ach.nama} (${ach.skor})`);
  }

  console.log('\n=== SANITY UPDATE COMPLETED SUCCESSFULLY ===');
}

updateSanity().catch((err) => {
  console.error('Error during update:', err);
  process.exit(1);
});
