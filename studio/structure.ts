export const myStructure = (S: any) =>
  S.list()
    .title('Konten Bright Mandarin')
    .items([
      // 1. Singleton untuk Pengaturan Situs & Kontak
      S.listItem()
        .title('Pengaturan Situs, Kontak & Hero')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Pengaturan Situs')
        ),

      // 2. Singleton untuk Poster Iklan Popup Promo
      S.listItem()
        .title('Poster Iklan Popup / Brosur Promo')
        .id('popupPromo')
        .child(
          S.document()
            .schemaType('popupPromo')
            .documentId('popupPromo')
            .title('Pengaturan Poster Iklan Popup')
        ),

      S.divider(),

      // 3. Document list lainnya
      S.documentTypeListItem('program').title('Program Kelas Mandarin'),
      S.documentTypeListItem('pengajar').title('Daftar Pengajar (Laoshi)'),
      S.documentTypeListItem('testimoni').title('Testimoni Siswa & Alumni'),
      S.documentTypeListItem('keunggulan').title('Keunggulan / Kenapa Kami'),
      S.documentTypeListItem('berita').title('Berita & Info Beasiswa'),
      S.documentTypeListItem('galeri').title('Galeri Suasana Belajar'),
    ]);
