const { createClient } = require('@sanity/client');

const token = process.env.SANITY_API_WRITE_TOKEN || 'skBWckgdWyVnq0YVnX7iaSNkaH1cUjl2LaexK3Hjq1dazDwZQxSOO4AltCAhCpoGDUdrMwYwV3fNyIhUUhjXbU9and4mamRkoPNAErpQfMKM1BSP8hOpic9UnIr7Ux8kMDUKJLZ8xblnd4L4Y6GCi0hX8tWl2FJEQNVvwDr9utTVt11KXGl5';
const projectId = '9f5rpp8c';
const dataset = 'production';

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-03-12',
  token,
  useCdn: false,
});

async function main() {
  console.log('Updating Sanity documents with new WhatsApp phone number: 6285890592738...');

  // 1. Update siteSettings if it exists
  const settings = await client.getDocument('siteSettings');
  if (settings) {
    console.log('Found siteSettings in Sanity. Patching phone and whatsapp...');
    await client
      .patch('siteSettings')
      .set({
        teleponHotline: '+62 858-9059-2738',
        whatsappUtama: 'https://api.whatsapp.com/send/?phone=6285890592738&text=Halo+Admin+Bright+Mandarin%2C+saya+ingin+konsultasi+kursus+Mandarin',
      })
      .commit();
    console.log('✓ siteSettings updated successfully!');
  } else {
    console.log('siteSettings not found by id.');
  }

  // 2. Update popupPromo if it exists
  const promo = await client.getDocument('popupPromo');
  if (promo) {
    console.log('Found popupPromo in Sanity. Patching linkTujuan...');
    await client
      .patch('popupPromo')
      .set({
        linkTujuan: 'https://api.whatsapp.com/send/?phone=6285890592738&text=Halo+Admin+Bright+Mandarin%2C+saya+ingin+klaim+Promo+Diskon+Brosur+dan+Free+Placement+Test',
      })
      .commit();
    console.log('✓ popupPromo updated successfully!');
  } else {
    console.log('popupPromo not found by id.');
  }

  console.log('All Sanity phone numbers successfully updated to 6285890592738.');
}

main().catch(console.error);
