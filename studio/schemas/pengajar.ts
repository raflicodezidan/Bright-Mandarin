export default {
  name: 'pengajar',
  title: 'Pengajar (Laoshi)',
  type: 'document',
  fields: [
    {
      name: 'nama',
      title: 'Nama Lengkap & Gelar',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'gelar',
      title: 'Latar Belakang Pendidikan',
      type: 'string',
      description: 'Contoh: Master of Teaching Chinese (BLCU Beijing)',
    },
    {
      name: 'spesialisasi',
      title: 'Spesialisasi Pengajaran',
      type: 'string',
      description: 'Contoh: HSK 5-6 Specialist, Kids Mandarin, Business Mandarin',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'sertifikasi',
      title: 'Sertifikasi Resmi',
      type: 'string',
      description: 'Contoh: Sertifikasi Min. HSK 6 & Hanban International Teacher',
    },
    {
      name: 'bio',
      title: 'Biografi Singkat & Pengalaman',
      type: 'text',
      rows: 3,
    },
    {
      name: 'foto',
      title: 'Foto Profil Laoshi',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'urutan',
      title: 'Urutan Tampilan',
      type: 'number',
      initialValue: 0,
    },
  ],
};
