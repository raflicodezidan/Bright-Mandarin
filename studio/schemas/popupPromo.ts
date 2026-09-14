export default {
  name: 'popupPromo',
  title: 'Poster Iklan Popup / Brosur Promo',
  type: 'document',
  fields: [
    {
      name: 'aktif',
      title: 'Status Aktif Popup',
      type: 'boolean',
      description: 'Nyalakan untuk menampilkan iklan popup saat pengunjung membuka website',
      initialValue: true,
    },
    {
      name: 'tipeTampilan',
      title: 'Tipe Tampilan Iklan',
      type: 'string',
      options: {
        list: [
          { title: 'Upload Poster Gambar / Brosur Custom', value: 'poster_custom' },
          { title: 'Template Brosur Interaktif Bright Mandarin', value: 'template_brosur' },
        ],
        layout: 'radio',
      },
      initialValue: 'poster_custom',
    },
    {
      name: 'posterImage',
      title: 'Upload Gambar Poster Iklan / Brosur Promo',
      type: 'image',
      description: 'Upload gambar poster promo Anda (format JPG/PNG/WebP, resolusi disarankan vertikal atau kotak)',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'judulPromo',
      title: 'Judul Promo / Keterangan Poster',
      type: 'string',
      initialValue: 'Promo Spesial Pendaftaran Batch Baru Bright Mandarin',
    },
    {
      name: 'linkTujuan',
      title: 'Link Tujuan (WhatsApp / URL Promo)',
      type: 'url',
      description: 'Link saat poster diklik (default: WhatsApp Admin Bright Mandarin)',
      initialValue: 'https://api.whatsapp.com/send/?phone=6289699288009&text=Halo+Admin+Bright+Mandarin%2C+saya+ingin+klaim+Promo+Brosur+dan+Konsultasi+Belajar',
    },
    {
      name: 'teksTombol',
      title: 'Teks Tombol Aksi (CTA)',
      type: 'string',
      initialValue: 'Klaim Promo via WhatsApp',
    },
  ],
};
