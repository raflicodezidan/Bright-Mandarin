export default {
  name: 'achievement',
  title: 'Achievement HSK / HSKK',
  type: 'document',
  fields: [
    {
      name: 'kategori',
      title: 'Kategori Achievement',
      type: 'string',
      options: {
        list: [
          { title: 'HSK / HSKK', value: 'hsk' },
          { title: 'Ujian Sekolah / Kompetisi', value: 'examSchool' },
        ],
        layout: 'radio',
      },
      initialValue: 'hsk',
      description: 'Pilih kategori: HSK/HSKK untuk sertifikasi internasional, atau Ujian Sekolah untuk nilai rapor/kompetisi.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'level',
      title: 'Level / Jenis Ujian',
      type: 'string',
      description: 'Contoh: HSK 1-3, HSK 4, HSKK, UAS Mandarin, Kompetisi Mandarin',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'skor',
      title: 'Score / Hasil Nilai',
      type: 'string',
      description: 'Contoh: 95/100, 285/300, Juara 2 Kota',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'keterangan',
      title: 'Keterangan Tambahan',
      type: 'string',
      description: 'Contoh: Kelas 5 SD – Nilai Tertinggi, HSK Preparation, Bright Mandarin Kids',
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
      kategori: 'kategori',
      level: 'level',
      skor: 'skor',
      keterangan: 'keterangan',
      media: 'foto',
    },
    prepare({ kategori, level, skor, keterangan, media }: any) {
      const badge = kategori === 'examSchool' ? '🏫' : '🏆';
      return {
        title: `${badge} ${level} (${skor || '-'})`,
        subtitle: keterangan || 'Bright Mandarin',
        media,
      };
    },
  },
};

