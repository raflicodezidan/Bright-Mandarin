export default {
  name: 'program',
  title: 'Program Kelas',
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
      title: 'Kategori Usia & Minat',
      type: 'string',
      options: {
        list: [
          { title: 'Mandarin Kids & Teens', value: 'Kids' },
          { title: 'Mandarin Dewasa & Umum', value: 'Dewasa' },
          { title: 'Persiapan Ujian HSK 1 - 6', value: 'HSK' },
          { title: 'Mandarin Bisnis & Profesional', value: 'Bisnis' },
          { title: 'Persiapan Kuliah & Beasiswa ke Tiongkok', value: 'Studi ke Tiongkok' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tipeKelas',
      title: 'Tipe Pelaksanaan Kelas',
      type: 'string',
      options: {
        list: [
          { title: 'Online (Zoom Multimedia)', value: 'Online' },
          { title: 'Offline Center', value: 'Offline' },
          { title: 'Home Private (Tutor ke Rumah / 1-on-1)', value: 'Home Private' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'ringkasan',
      title: 'Deskripsi / Ringkasan Program',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'durasi',
      title: 'Target Waktu / Durasi Belajar',
      type: 'string',
      description: 'Contoh: 3 - 4 Bulan per Level, 12 Minggu',
    },
    {
      name: 'targetLevel',
      title: 'Target Level Kelulusan',
      type: 'string',
      description: 'Contoh: HSK 1 - 6, YCT 1 - 4, BCT',
    },
    {
      name: 'harga',
      title: 'Estimasi Biaya / Format Harga',
      type: 'string',
      description: 'Contoh: Mulai Rp 650.000 / bln',
    },
    {
      name: 'keunggulan',
      title: 'Poin Keunggulan / Fasilitas Kelas',
      type: 'array',
      of: [{ type: 'string' }],
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
};
