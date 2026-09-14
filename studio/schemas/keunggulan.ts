export default {
  name: 'keunggulan',
  title: 'Keunggulan / Kenapa Kami',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Keunggulan',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'badge',
      title: 'Label Kategori / Badge',
      type: 'string',
      description: 'Contoh: Jaminan Kualitas, Fleksibel Usia, Target Pasti, Gratis Pengurusan, Custom Learning, Garansi Lulus',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'desc',
      title: 'Deskripsi Penjelasan',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'customIcon',
      title: 'Upload Ikon Custom (Opsional)',
      type: 'image',
      description: 'Upload gambar/ikon custom jika ingin mengganti ikon default bawaan sistem',
      options: {
        hotspot: true,
      },
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
      title: 'title',
      subtitle: 'badge',
      media: 'customIcon',
    },
  },
};
