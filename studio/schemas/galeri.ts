export default {
  name: 'galeri',
  title: 'Galeri Kegiatan & Dokumentasi',
  type: 'document',
  fields: [
    {
      name: 'judul',
      title: 'Judul Kegiatan / Acara',
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
    },
    {
      name: 'tanggal',
      title: 'Waktu Pelaksanaan',
      type: 'string',
      description: 'Contoh: Februari 2026, 15 Januari 2026, dsb.',
    },
    {
      name: 'kategori',
      title: 'Kategori Kegiatan',
      type: 'string',
      options: {
        list: [
          { title: 'Kelas Offline', value: 'Kelas Offline' },
          { title: 'Kegiatan Budaya & Workshop', value: 'Kegiatan Budaya' },
          { title: 'Simulasi & Ujian HSK', value: 'Ujian HSK' },
          { title: 'Pelepasan Beasiswa Tiongkok', value: 'Beasiswa Tiongkok' },
          { title: 'Event & Perayaan', value: 'Event & Perayaan' },
        ],
      },
      initialValue: 'Kelas Offline',
    },
    {
      name: 'deskripsi',
      title: 'Ringkasan Preview Kegiatan',
      type: 'text',
      rows: 3,
      description: 'Cuplikan singkat kegiatan yang tampil pada preview kartu blog',
    },
    {
      name: 'ceritaLengkap',
      title: 'Cerita / Detail Lengkap Kegiatan',
      type: 'text',
      rows: 5,
      description: 'Penjelasan lengkap kegiatan saat pengunjung mengklik "Lihat Selengkapnya"',
    },
    {
      name: 'coverImage',
      title: 'Foto Sampul Utama (Cover)',
      type: 'image',
      options: { hotspot: true },
      description: 'Foto sampul utama yang dijadikan thumbnail kartu kegiatan (opsional, jika kosong otomatis memakai foto pertama)',
    },
    {
      name: 'videoFile',
      title: 'Upload File Video Kegiatan (Sanity Upload)',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      description: 'Upload rekaman video langsung ke Sanity (MP4, WebM, MOV)',
    },
    {
      name: 'videoUrl',
      title: 'Link Video Eksternal (YouTube / Video URL)',
      type: 'url',
      description: 'Alternatif: Masukkan link YouTube atau URL video online jika video tidak di-upload langsung',
    },
    {
      name: 'foto',
      title: 'Koleksi Foto Dokumentasi',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Keterangan Foto',
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required().min(1),
    },
  ],
};
