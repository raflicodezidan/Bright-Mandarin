export default {
  name: 'program',
  title: 'Program Kursus Unggulan',
  type: 'document',
  fields: [
    {
      name: 'judul',
      title: 'Judul Program',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: {
        source: 'judul',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'kategori',
      title: 'Kategori Program',
      type: 'string',
      description: 'Contoh: Akademik, Reguler, Kindergarten, Kids, HSK, HSKK, Percakapan',
    },
    {
      name: 'ringkasan',
      title: 'Deskripsi / Ringkasan Program',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'targetUsia',
      title: 'Target Usia',
      type: 'string',
      description: 'Contoh: Siswa sekolah, Kindergarten – Adult, Primary 1–3, dsb.',
    },
    {
      name: 'materi',
      title: 'Materi Pembelajaran',
      type: 'text',
      rows: 2,
      description: 'Contoh: Speaking, Listening, Reading & Writing',
    },
    {
      name: 'metode',
      title: 'Metode Pembelajaran',
      type: 'text',
      rows: 2,
      description: 'Contoh: Personalized learning & latihan interaktif',
    },
    {
      name: 'durasi',
      title: 'Durasi Belajar',
      type: 'string',
      description: 'Contoh: Disesuaikan dengan kebutuhan siswa',
    },
    {
      name: 'benefit',
      title: 'Benefit Program',
      type: 'text',
      rows: 2,
      description: 'Contoh: Membantu memahami materi, meningkatkan kemampuan Mandarin, dan mendukung prestasi akademik',
    },
    {
      name: 'harga',
      title: 'Informasi Biaya / Harga',
      type: 'string',
      description: 'Contoh: Hubungi kami untuk informasi program dan biaya',
      initialValue: 'Hubungi kami untuk informasi program dan biaya',
    },
    {
      name: 'gambar',
      title: 'Gambar Utama Program',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'urutan',
      title: 'Urutan Tampilan',
      type: 'number',
      initialValue: 0,
    },
  ],
  preview: {
    select: {
      title: 'judul',
      subtitle: 'targetUsia',
      media: 'gambar',
    },
  },
};
