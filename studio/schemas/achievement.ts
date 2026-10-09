export default {
  name: 'achievement',
  title: 'Achievement Murid-Murid',
  type: 'document',
  fields: [
    {
      name: 'level',
      title: 'Level Ujian / Tes',
      type: 'string',
      description: 'Contoh: HSK 1-3, HSK 4, HSK 5, HSKK',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'skor',
      title: 'Score Test / Hasil Nilai',
      type: 'string',
      description: 'Contoh: 95/100, 285/300, 195/200',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'keterangan',
      title: 'Keterangan Tambahan / Program Kelas',
      type: 'string',
      description: 'Contoh: Siswa Primary 3, Bright Mandarin Kids, HSK Preparation',
    },
    {
      name: 'foto',
      title: 'Gambar / Foto Murid',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'urutan',
      title: 'Urutan Tampil',
      type: 'number',
      initialValue: 1,
    },
  ],
  preview: {
    select: {
      level: 'level',
      skor: 'skor',
      keterangan: 'keterangan',
      media: 'foto',
    },
    prepare({ level, skor, keterangan, media }: any) {
      return {
        title: level ? `${level} (Skor: ${skor || '-'})` : (skor || 'Achievement Murid'),
        subtitle: keterangan || 'Bright Mandarin',
        media,
      };
    },
  },
};
