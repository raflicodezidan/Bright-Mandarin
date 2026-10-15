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
      name: 'videoVertical',
      title: 'Video Vertikal 9:16 (Opsional)',
      description: 'Upload video format vertikal 9:16 (seperti Reels / TikTok) untuk ditampilkan di dalam artikel.',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    },
    {
      name: 'videoJudul',
      title: 'Judul / Caption Video',
      description: 'Teks keterangan yang tampil di bawah video vertikal.',
      type: 'string',
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
