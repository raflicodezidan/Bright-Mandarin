export default {
  name: 'testimoni',
  title: 'Testimoni Siswa & Alumni',
  type: 'document',
  fields: [
    {
      name: 'nama',
      title: 'Nama Siswa / Alumni / Wali Murid',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'peran',
      title: 'Profesi / Status / Peran',
      type: 'string',
      description: 'Contoh: Penerima Beasiswa S1 Tsinghua University, Mahasiswa UI, Orang Tua Murid Kids',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'program',
      title: 'Program Kelas yang Diikuti',
      type: 'string',
      description: 'Contoh: Intensive HSK 5 & Bimbingan Beasiswa, Kids & Teens Level 2',
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
      title: 'nama',
      subtitle: 'program',
      media: 'foto',
    },
  },
};
