export default {
  name: 'testimoni',
  title: 'Testimoni Siswa & Alumni',
  type: 'document',
  fields: [
    {
      name: 'peran',
      title: 'Profesi / Status / Peran Siswa',
      type: 'string',
      description: 'Contoh: Penerima Beasiswa S1 Tsinghua University, Mahasiswa UI, Orang Tua Murid Kids',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating Bintang (1 - 5)',
      type: 'number',
      initialValue: 5,
      validation: (Rule: any) => Rule.min(1).max(5),
    },
    {
      name: 'komentar',
      title: 'Komentar / Ulasan / Testimoni Lengkap',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'foto',
      title: 'Foto Siswa / Profil Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'urutan',
      title: 'Urutan Tampil (Prioritas)',
      type: 'number',
      initialValue: 1,
    },
  ],
  preview: {
    select: {
      title: 'peran',
      subtitle: 'komentar',
      media: 'foto',
    },
  },
};
