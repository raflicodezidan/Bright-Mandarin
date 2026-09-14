export default {
  name: 'galeri',
  title: 'Galeri Kegiatan & Foto Kelas',
  type: 'document',
  fields: [
    {
      name: 'judul',
      title: 'Judul Kegiatan / Album',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tanggal',
      title: 'Waktu Pelaksanaan',
      type: 'string',
      description: 'Contoh: Februari 2026, Semester Ganjil 2025',
    },
    {
      name: 'kategori',
      title: 'Kategori Kegiatan',
      type: 'string',
      options: {
        list: [
          { title: 'Kelas Offline', value: 'Kelas Offline' },
          { title: 'Kelas Online & Webinar', value: 'Kelas Online' },
          { title: 'Kegiatan Budaya & Workshop', value: 'Kegiatan Budaya' },
          { title: 'Pelepasan Beasiswa Tiongkok', value: 'Beasiswa Tiongkok' },
        ],
      },
    },
    {
      name: 'deskripsi',
      title: 'Deskripsi Singkat',
      type: 'text',
      rows: 2,
    },
    {
      name: 'foto',
      title: 'Koleksi Foto',
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
