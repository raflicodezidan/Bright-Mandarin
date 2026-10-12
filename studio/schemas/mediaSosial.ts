export default {
  name: 'mediaSosial',
  title: 'Media Sosial Kami (Instagram Feed)',
  type: 'document',
  fields: [
    {
      name: 'socialSectionTitle',
      title: 'Judul Bagian Media Sosial',
      type: 'string',
      initialValue: 'MEDIA SOSIAL KAMI',
    },
    {
      name: 'socialSectionSubtitle',
      title: 'Sub-Judul Bagian Media Sosial',
      type: 'string',
      initialValue: 'Ikuti Aktivitas & Tips Belajar di Instagram @brightmandarin',
    },
    {
      name: 'socialSectionDesc',
      title: 'Deskripsi Bagian Media Sosial',
      type: 'text',
      rows: 3,
      initialValue: 'Dapatkan edukasi kosakata harian, tips lolos ujian HSK, serta update peluang beasiswa kuliah ke China.',
    },
    {
      name: 'instagramUrl',
      title: 'Link Profil Instagram',
      type: 'url',
      initialValue: 'https://instagram.com/bright_mandarin',
      description: 'Link saat tombol Follow Instagram atau tombol kartu diklik.',
    },
    {
      name: 'instagramHandle',
      title: 'Username Instagram (Handle)',
      type: 'string',
      initialValue: '@brightmandarin',
      placeholder: '@brightmandarin',
    },
    {
      name: 'instagramAspectRatio',
      title: 'Pengaturan Rasio / Ukuran Foto Instagram Feed',
      type: 'string',
      options: {
        list: [
          { title: 'Asli / Full Tanpa Terpotong (Auto / Uncropped)', value: 'auto' },
          { title: 'Portrait 4:5 (1080 x 1350 px)', value: 'portrait' },
          { title: 'Persegi / Square 1:1 (1080 x 1080 px)', value: 'square' },
          { title: 'Story / Vertikal 9:16 (1080 x 1920 px)', value: 'story' },
        ],
        layout: 'radio',
      },
      initialValue: 'auto',
      description: 'Pilih bagaimana ukuran dan rasio foto Instagram ditampilkan di website.',
    },
    {
      name: 'instagramShowCaptionLikes',
      title: 'Tampilkan Caption & Jumlah Likes pada Hover?',
      type: 'boolean',
      initialValue: false,
      description: 'Aktifkan jika ingin memunculkan teks caption dan jumlah likes saat kursor diarahkan ke foto.',
    },
    {
      name: 'instagramPosts',
      title: 'Daftar Foto Postingan Instagram',
      type: 'array',
      description: 'Upload foto-foto postingan Instagram terbaru untuk ditampilkan di feed beranda. Jika kosong, akan menggunakan 4 foto default.',
      of: [
        {
          type: 'object',
          title: 'Postingan Instagram',
          fields: [
            {
              name: 'gambar',
              title: 'Foto Postingan',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'caption',
              title: 'Caption / Teks Postingan (Opsional)',
              type: 'text',
              rows: 3,
              placeholder: 'Contoh: Keseruan kelas Kids Mandarin hari ini.',
            },
            {
              name: 'linkPost',
              title: 'Link ke Postingan Instagram Tertentu (Opsional)',
              type: 'url',
              placeholder: 'https://www.instagram.com/p/xxxxxx/',
              description: 'Jika kosong, akan otomatis diarahkan ke link profil Instagram utama.',
            },
            {
              name: 'likes',
              title: 'Jumlah Likes (Opsional, misal: 250)',
              type: 'string',
              initialValue: '150+',
            },
          ],
          preview: {
            select: {
              title: 'caption',
              media: 'gambar',
              subtitle: 'likes',
            },
            prepare({ title, media, subtitle }: any) {
              return {
                title: title ? (title.length > 40 ? title.substring(0, 40) + '...' : title) : 'Foto Postingan Instagram',
                subtitle: subtitle ? `Likes: ${subtitle}` : '',
                media,
              };
            },
          },
        },
      ],
    },
    {
      name: 'instagramEmbedWidget',
      title: 'Kode Embed Widget Instagram Otomatis (Opsional)',
      type: 'text',
      rows: 4,
      description: 'Jika menggunakan widget embed otomatis seperti SnapWidget atau Elfsight, tempelkan kodenya di sini.',
    },
  ],
};
