export default {
  name: 'berita',
  title: 'Berita & Artikel',
  type: 'document',
  fields: [
    {
      name: 'judul',
      title: 'Judul Artikel / Pengumuman',
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
      name: 'tanggal',
      title: 'Tanggal Publikasi',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      initialValue: () => new Date().toISOString().split('T')[0],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'kategori',
      title: 'Kategori Artikel',
      type: 'string',
      options: {
        list: [
          { title: 'Tips Belajar Mandarin', value: 'Tips Belajar' },
          { title: 'Info Beasiswa & Studi China', value: 'Beasiswa' },
          { title: 'Seputar Ujian HSK / YCT', value: 'Ujian HSK' },
          { title: 'Budaya & Bahasa Tionghoa', value: 'Budaya' },
          { title: 'Pengumuman Resmi', value: 'Pengumuman' },
        ],
      },
    },
    {
      name: 'ringkasan',
      title: 'Ringkasan Pendek (Excerpt)',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'gambarUtama',
      title: 'Gambar Utama (Cover)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'konten',
      title: 'Isi Konten Artikel',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },
  ],
};
