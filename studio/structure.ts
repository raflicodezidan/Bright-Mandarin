export const myStructure = (S: any) =>
  S.list()
    .title('Konten Bright Mandarin')
    .items([
      // 1. Singleton untuk Pengaturan Teks & Konten Seluruh Website
      S.listItem()
        .title('Pengaturan Teks Website & Beranda')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Pengaturan Teks & Konten Seluruh Website')
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
      S.documentTypeListItem('achievement').title('Achievement Murid-Murid'),
      S.documentTypeListItem('testimoni').title('Testimoni Siswa & Alumni'),
      S.documentTypeListItem('keunggulan').title('Keunggulan / Kenapa Kami'),
      S.documentTypeListItem('berita').title('Berita & Info Beasiswa'),
      S.documentTypeListItem('galeri').title('Galeri Suasana Belajar'),
    ]);
