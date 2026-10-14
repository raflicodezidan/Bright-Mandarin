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
      initialValue: 'https://api.whatsapp.com/send/?phone=6285890592738&text=Halo%20Bright%20Mandarin!%20%F0%9F%91%8B%F0%9F%87%A8%F0%9F%87%B3%0A%0ASaya%20tertarik%20untuk%20belajar%20bahasa%20Mandarin%20dan%20ingin%20mengetahui%20informasi%20mengenai%20program%20kelas%20serta%20pendaftaran%20trial%20class.%0A%0ABoleh%20dibantu%20informasinya%3F%20Terima%20kasih!%20%F0%9F%98%8A',
    },
    {
      name: 'teksTombol',
      title: 'Teks Tombol Aksi (CTA)',
      type: 'string',
      initialValue: 'Klaim Promo via WhatsApp',
    },
  ],
};
