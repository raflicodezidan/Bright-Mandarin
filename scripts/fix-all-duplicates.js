const { createClient } = require('@sanity/client');

const token = process.env.SANITY_API_WRITE_TOKEN || 'skBWckgdWyVnq0YVnX7iaSNkaH1cUjl2LaexK3Hjq1dazDwZQxSOO4AltCAhCpoGDUdrMwYwV3fNyIhUUhjXbU9and4mamRkoPNAErpQfMKM1BSP8hOpic9UnIr7Ux8kMDUKJLZ8xblnd4L4Y6GCi0hX8tWl2FJEQNVvwDr9utTVt11KXGl5';
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '9f5rpp8c';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-03-12',
  token,
  useCdn: false,
});

async function deduplicatePrograms() {
  console.log('\n--- DEDUPLICATING PROGRAMS ---');
  const docs = await client.fetch('*[_type == "program"]');
  console.log(`Found ${docs.length} program documents.`);

  // Group by slug or title
  const canonicalMap = new Map();
  for (const doc of docs) {
    const key = doc.slug?.current || doc.judul;
    if (!canonicalMap.has(key)) {
      canonicalMap.set(key, doc);
    } else {
      // If the current doc has an image or richer data, keep it
      const existing = canonicalMap.get(key);
      if (!existing.gambar && doc.gambar) {
        canonicalMap.set(key, doc);
      }
    }
  }

  // Delete all existing program documents
  for (const doc of docs) {
    console.log(`Deleting old program: ${doc._id} (${doc.judul})`);
    try {
      await client.delete(doc._id);
    } catch (e) {
      console.warn(`Could not delete ${doc._id}:`, e.message);
    }
  }

  // Re-create exactly 1 canonical copy per program with deterministic ID
  let idx = 1;
  for (const [key, item] of canonicalMap.entries()) {
    const newId = `program-${idx}`;
    const cleanDoc = {
      _id: newId,
      _type: 'program',
      judul: item.judul,
      slug: item.slug,
      kategori: item.kategori,
      tipeKelas: item.tipeKelas,
      ringkasan: item.ringkasan,
      durasi: item.durasi,
      targetLevel: item.targetLevel,
      harga: item.harga,
      keunggulan: item.keunggulan,
      urutan: item.urutan || idx,
      ...(item.gambar ? { gambar: item.gambar } : {}),
    };
    console.log(`Creating canonical program: ${newId} (${cleanDoc.judul})`);
    await client.createOrReplace(cleanDoc);
    idx++;
  }
}

async function deduplicatePengajar() {
  console.log('\n--- DEDUPLICATING PENGAJAR ---');
  const docs = await client.fetch('*[_type == "pengajar"]');
  console.log(`Found ${docs.length} pengajar documents.`);

  // Delete any untitled drafts first
  for (const doc of docs) {
    if (!doc.nama || doc.nama.trim() === '' || doc._id.startsWith('drafts.')) {
      console.log(`Deleting draft/empty pengajar: ${doc._id}`);
      try {
        await client.delete(doc._id);
      } catch (e) {
        console.warn(`Could not delete draft ${doc._id}:`, e.message);
      }
    }
  }

  const validDocs = docs.filter(d => d.nama && d.nama.trim() !== '' && !d._id.startsWith('drafts.'));
  const canonicalMap = new Map();
  for (const doc of validDocs) {
    const key = doc.nama.trim();
    if (!canonicalMap.has(key)) {
      canonicalMap.set(key, doc);
    } else {
      const existing = canonicalMap.get(key);
      if (!existing.foto && doc.foto) {
        canonicalMap.set(key, doc);
      }
    }
  }

  // Delete all existing valid pengajar docs
  for (const doc of validDocs) {
    console.log(`Deleting old pengajar: ${doc._id} (${doc.nama})`);
    try {
      await client.delete(doc._id);
    } catch (e) {
      console.warn(`Could not delete ${doc._id}:`, e.message);
    }
  }

  // Re-create exactly 1 canonical copy per pengajar with deterministic ID
  let idx = 1;
  for (const [key, item] of canonicalMap.entries()) {
    const newId = `pengajar-${idx}`;
    const cleanDoc = {
      _id: newId,
      _type: 'pengajar',
      nama: item.nama,
      gelar: item.gelar,
      spesialisasi: item.spesialisasi,
      hskLevel: item.hskLevel,
      universitas: item.universitas,
      pengalaman: item.pengalaman,
      bio: item.bio,
      urutan: item.urutan || idx,
      ...(item.foto ? { foto: item.foto } : {}),
    };
    console.log(`Creating canonical pengajar: ${newId} (${cleanDoc.nama})`);
    await client.createOrReplace(cleanDoc);
    idx++;
  }
}

async function deduplicateTestimoni() {
  console.log('\n--- DEDUPLICATING TESTIMONI ---');
  const docs = await client.fetch('*[_type == "testimoni"]');
  console.log(`Found ${docs.length} testimoni documents.`);

  const canonicalMap = new Map();
  for (const doc of docs) {
    const key = doc.nama?.trim() || doc._id;
    if (!canonicalMap.has(key)) {
      canonicalMap.set(key, doc);
    } else {
      const existing = canonicalMap.get(key);
      if (!existing.foto && doc.foto) {
        canonicalMap.set(key, doc);
      }
    }
  }

  for (const doc of docs) {
    console.log(`Deleting old testimoni: ${doc._id} (${doc.nama})`);
    try {
      await client.delete(doc._id);
    } catch (e) {
      console.warn(`Could not delete ${doc._id}:`, e.message);
    }
  }

  let idx = 1;
  for (const [key, item] of canonicalMap.entries()) {
    const newId = `testimoni-${idx}`;
    const cleanDoc = {
      _id: newId,
      _type: 'testimoni',
      nama: item.nama,
      peran: item.peran,
      program: item.program,
      rating: item.rating,
      komentar: item.komentar,
      urutan: item.urutan || idx,
      ...(item.foto ? { foto: item.foto } : {}),
    };
    console.log(`Creating canonical testimoni: ${newId} (${cleanDoc.nama})`);
    await client.createOrReplace(cleanDoc);
    idx++;
  }
}

async function verifyAll() {
  console.log('\n=== FINAL VERIFICATION OF SANITY COUNTS ===');
  const types = ['program', 'pengajar', 'testimoni', 'keunggulan', 'berita'];
  for (const t of types) {
    const list = await client.fetch(`*[_type == "${t}"] | order(urutan asc){ _id, judul, nama, title, urutan }`);
    console.log(`Type '${t}': total ${list.length} documents:`);
    list.forEach(i => console.log(`   - [${i._id}] ${i.judul || i.nama || i.title} (urutan: ${i.urutan})`));
  }
}

async function main() {
  await deduplicatePrograms();
  await deduplicatePengajar();
  await deduplicateTestimoni();
  await verifyAll();
}

main().catch(console.error);
