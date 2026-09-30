# Bright Mandarin (亮华教育)

Website profil untuk lembaga kursus bahasa Mandarin **Bright Mandarin**. Dibangun dengan **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, dan **Sanity CMS** sebagai headless CMS.

---

## Halaman & Fitur

**Landing Page (`/`)**
- Hero section dengan CTA WhatsApp dan badge #BRIGHTMANDARIN
- Section keunggulan dan alasan memilih Bright Mandarin
- Tiga tipe pembelajaran: Kelas Online, Kelas Offline di Center, VIP Home Private 1-on-1
- Preview program kelas unggulan
- Profil dewan pengajar (Laoshi)
- Empat cabang lokasi: MOI Kelapa Gading, Tanjung Duren, Pluit, Citra 2 Kalideres — dilengkapi tautan Google Maps dan nomor WhatsApp per cabang
- Feed Instagram dan FAQ

**Program (`/program`)**
Katalog kelas Kids, Dewasa, HSK 1–6, Bisnis, dan Bimbingan Beasiswa ke Tiongkok.

**Pengajar (`/pengajar`)**
Direktori Laoshi bersertifikasi HSK 6 dari universitas di Tiongkok.

**Blog (`/berita` & `/berita/[slug]`)**
Artikel dan informasi seputar belajar bahasa Mandarin, dikelola via Sanity CMS dengan PortableText renderer.

**Galeri (`/galeri`)**
Dokumentasi foto kegiatan pembelajaran dan workshop kebudayaan Tionghoa.

**Webhook ISR (`/api/revalidate`)**
Revalidasi konten otomatis saat data diperbarui di Sanity CMS.

---

## Menjalankan Secara Lokal

### Website (Next.js)

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

### Sanity Studio (Panel Admin CMS)

```bash
cd studio
npm install
npm run dev
```

Buka `http://localhost:3333`.

---

## Environment Variables

Buat file `.env.local` di root project dengan isi berikut:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=isi_project_id_sanity_anda
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-03-12
SANITY_STUDIO_PROJECT_ID=isi_project_id_sanity_anda
SANITY_STUDIO_DATASET=production
SANITY_WEBHOOK_SECRET=token_rahasia_webhook_anda
```

---

## Deploy

### Push ke GitHub

```bash
git add .
git commit -m "pesan commit"
git push
```

File `.env.local` sudah dikecualikan via `.gitignore` dan tidak akan ikut ter-push.

### Deploy ke Vercel

1. Login ke [vercel.com](https://vercel.com) dengan akun GitHub.
2. Klik **Add New > Project**, pilih repository ini.
3. Tambahkan environment variables di bagian **Environment Variables**:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
   - `SANITY_WEBHOOK_SECRET`
4. Klik **Deploy**.

### Custom Domain

Masuk ke **Settings > Domains** di dashboard Vercel, masukkan domain, lalu tambahkan DNS record sesuai instruksi yang ditampilkan. SSL aktif otomatis.

---

## Setup Webhook Sanity

1. Buka [sanity.io/manage](https://sanity.io/manage), pilih project.
2. Masuk ke tab **API > Webhooks**, klik **Create Webhook**.
3. Isi konfigurasi:
   - **Name**: `Vercel Revalidate`
   - **URL**: `https://domain-vercel-anda.vercel.app/api/revalidate`
   - **Dataset**: `production`
   - **Trigger on**: Create, Update, Delete
   - **Filter**: `_type in ["program", "pengajar", "berita", "galeri", "siteSettings"]`
   - **Secret**: sama dengan nilai `SANITY_WEBHOOK_SECRET` di environment variables

---

## Tech Stack

| Layer | Teknologi |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| CMS | Sanity v3 |
| Deploy | Vercel |
| Font | Google Fonts (Inter) |

---

## 🌟 Fitur Utama

- **Landing Page Lengkap**:
  - Hero Section dengan CTA WhatsApp & badge jaminan tutor HSK 6
  - Section Keunggulan & Mengapa Bright Mandarin (Panda EDC style)
  - 3 Tipe Pembelajaran (Kelas Online, Kelas Offline di Center, VIP Home Private 1-on-1)
  - Preview Program Kelas Unggulan
  - Profil Dewan Pengajar (Laoshi)
  - 4 Cabang Lokasi Offline (MOI Kelapa Gading, Tanjung Duren, Pluit, Citra 2 Kalideres) dengan tautan Google Maps & nomor WhatsApp cabang
  - Feed Instagram Interaktif & FAQ Lengkap
- **Katalog Program Kelas (`/program`)**: Daftar kelas Kids, Dewasa, HSK 1-6, Bisnis, dan Bimbingan Beasiswa ke Tiongkok.
- **Profil Pengajar (`/pengajar`)**: Direktori Laoshi bersertifikasi HSK 6 dari kampus top Tiongkok.
- **Artikel & Tips (`/berita` & `/berita/[slug]`)**: Portal berita dan tips belajar Mandarin dengan PortableText renderer.
- **Galeri Foto Kegiatan (`/galeri`)**: Dokumentasi kelas dan workshop kebudayaan Tionghoa.
- **Webhook ISR Revalidation (`/api/revalidate`)**: Pembaruan konten otomatis instan saat data diubah di Sanity CMS.

---

## 🚀 Menjalankan Secara Lokal

### 1. Website Frontend (Next.js)
```bash
# Pastikan berada di root folder project
npm install
npm run dev
```
Buka browser di `http://localhost:3000`.

### 2. Sanity Studio CMS (Panel Admin)
```bash
# Pindah ke folder studio
cd studio
npm install
npm run dev
```
Buka Sanity Studio di `http://localhost:3333`.

---

## ⚙️ Konfigurasi Environment Variables

Salin `.env.example` menjadi `.env.local`:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=isi_project_id_sanity_anda
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-03-12
SANITY_WEBHOOK_SECRET=token_rahasia_webhook_anda
```

> **Catatan**: Jika `NEXT_PUBLIC_SANITY_PROJECT_ID` belum diisi, website otomatis menggunakan data contoh (mock data) beresolusi tinggi sehingga tampilan langsung aktif dan siap dipresentasikan.

---

## 🌐 Panduan Deploy ke GitHub & Vercel

### 1. Push ke GitHub
```bash
# Di root folder project
git add .
git commit -m "feat: complete Bright Mandarin profile website with Sanity CMS integration"

# Buat repository baru di github.com (misal: bright-mandarin)
git remote add origin https://github.com/USERNAME_ANDA/bright-mandarin.git
git branch -M main
git push -u origin main
```

### 2. Deploy ke Vercel
1. Buka [vercel.com](https://vercel.com) dan login dengan akun GitHub Anda.
2. Klik **"Add New..."** -> **"Project"**.
3. Pilih repository **bright-mandarin** yang baru saja di-push.
4. Pada bagian **Environment Variables**, tambahkan variabel berikut:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`: ID proyek Sanity Anda
   - `NEXT_PUBLIC_SANITY_DATASET`: `production`
   - `SANITY_WEBHOOK_SECRET`: Token rahasia webhook
5. Klik **"Deploy"**. Vercel akan otomatis melakukan build dan menyediakan URL live dengan sertifikat SSL (HTTPS) gratis tanpa konfigurasi manual.

### 3. Setup Custom Domain di Vercel
1. Di Dashboard Vercel project Anda, masuk ke tab **Settings** -> **Domains**.
2. Masukkan nama domain Anda (misal: `brightmandarin.com`).
3. Tambahkan DNS Record (CNAME atau A record) sesuai instruksi otomatis dari Vercel pada registrar domain Anda. SSL akan aktif secara otomatis dalam beberapa menit.

---

## 🔄 Setup Webhook Sanity (Instant Revalidation)

1. Buka dashboard Sanity di [sanity.io/manage](https://sanity.io/manage).
2. Pilih project Anda -> masuk ke tab **API** -> **Webhooks**.
3. Klik **"Create Webhook"**:
   - **Name**: `Vercel Revalidate`
   - **URL**: `https://DOMAIN-VERCEL-ANDA.vercel.app/api/revalidate`
   - **Dataset**: `production`
   - **Trigger on**: `Create`, `Update`, `Delete`
   - **Filter**: `_type in ["program", "pengajar", "berita", "galeri", "siteSettings"]`
   - **Secret**: Masukkan secret yang sama dengan `SANITY_WEBHOOK_SECRET` di `.env.local` / Vercel.
