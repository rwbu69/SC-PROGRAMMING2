# 📝 Lembar Latihan Siswa

## Informasi
- **Nama Siswa**: ________________________
- **Tanggal**: ________________________
- **Topik**: Membuat Website Portfolio dengan HTML & CSS

---

## 🎯 Tujuan Latihan
Membuat website portfolio sederhana yang menampilkan:
1. Nama Anda
2. Tentang diri Anda
3. Hal-hal yang Anda sukai
4. Link sosial media Anda

---

## ✅ Checklist Penyelesaian

### Bagian HTML
- [ ] File `index.html` sudah dibuat
- [ ] Struktur HTML dasar sudah lengkap (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`)
- [ ] Tag `<title>` sudah diisi dengan nama Anda
- [ ] File CSS sudah di-link dengan `<link rel="stylesheet">`
- [ ] Heading utama `<h1>` berisi nama Anda
- [ ] Section "Tentang Saya" sudah dibuat dengan `<h2>` dan `<p>`
- [ ] Section "Hal yang Saya Sukai" menggunakan `<ul>` dan `<li>`
- [ ] Section "Sosial Media" menggunakan `<ol>`, `<li>`, dan `<a>`
- [ ] Setiap section dipisah dengan `<hr>`
- [ ] Semua link sosial media sudah diisi dengan URL yang benar

### Bagian CSS
- [ ] File `styles.css` sudah dibuat
- [ ] Universal selector (`*`) untuk reset margin dan padding
- [ ] Styling `body` (font, background, padding, dll)
- [ ] Styling `h1` (ukuran, warna, posisi tengah)
- [ ] Styling `h2` (ukuran, warna)
- [ ] Styling `hr` (warna garis pemisah)
- [ ] Styling `p` (background, padding, border-radius, box-shadow)
- [ ] Styling `ul` dan `ol` (sama seperti paragraf)
- [ ] Styling `li` (padding, font-size)
- [ ] Styling `a` (warna link)
- [ ] Styling `a:hover` (efek saat mouse hover)

### Testing
- [ ] Website bisa dibuka di browser
- [ ] Semua teks terlihat dengan jelas
- [ ] Link sosial media bisa diklik dan membuka halaman yang benar
- [ ] Tampilan sudah rapi dan enak dilihat
- [ ] Efek hover pada link berfungsi

---

## 📝 Tugas Wajib

### 1. Isi Informasi Pribadi Anda

Ganti semua placeholder berikut dengan informasi Anda:

**Di file index.html:**
```html
<!-- Ganti: -->
<title>Portfolio – (Isi Nama Kalian)</title>
<h1>(Isi Nama Kalian)</h1>

<!-- Dengan contoh: -->
<title>Portfolio – Budi Santoso</title>
<h1>Budi Santoso</h1>
```

### 2. Tulis Deskripsi "Tentang Saya"

Tulis minimal 2-3 kalimat tentang diri Anda:
- Siapa Anda?
- Apa yang Anda pelajari/kerjakan?
- Apa minat atau fokus Anda?

**Contoh:**
```html
<p>
    Saya adalah mahasiswa Informatika semester 3 yang sangat tertarik 
    dengan web development. Saya senang belajar teknologi baru dan 
    membuat website yang menarik dan fungsional.
</p>
```

### 3. Buat Daftar Kesukaan (Minimal 4 Item)

```html
<ul>
    <li>______________________</li>
    <li>______________________</li>
    <li>______________________</li>
    <li>______________________</li>
</ul>
```

**Ide kesukaan:**
- Hobi (coding, gaming, membaca, olahraga)
- Makanan/minuman favorit
- Film/musik genre favorit
- Teknologi yang diminati

### 4. Isi Link Sosial Media

Ganti `(Isi link kalian)` dengan URL profile Anda:

```html
<li><a href="https://instagram.com/username_anda">Instagram</a></li>
<li><a href="https://linkedin.com/in/username_anda">LinkedIn</a></li>
<li><a href="https://github.com/username_anda">GitHub</a></li>
```

**Jika tidak punya akun tertentu**, bisa ganti dengan:
- Twitter/X
- Facebook
- YouTube
- Portfolio website lain
- Email (gunakan `mailto:email@example.com`)

---

## 🎨 Tugas Eksplorasi (Opsional)

### Level 1: Ubah Warna
Coba ubah warna-warna di CSS Anda:

```css
/* Coba warna background berbeda */
body {
    background: #e3f2fd;  /* Biru muda */
    /* atau */
    background: #fff8e1;  /* Kuning muda */
    /* atau */
    background: #f1f8e9;  /* Hijau muda */
}

/* Coba warna link berbeda */
a {
    color: #e91e63;  /* Pink */
    /* atau */
    color: #00897b;  /* Teal */
}
```

### Level 2: Tambah Section Baru
Tambahkan section "Keahlian" atau "Pendidikan":

```html
<hr>
<h2>Keahlian</h2>
<ul>
    <li>HTML & CSS</li>
    <li>JavaScript (Belajar)</li>
    <li>Photoshop</li>
</ul>
```

### Level 3: Styling Tambahan
Tambahkan efek hover pada list item:

```css
li:hover {
    background-color: #f0f0f0;
    padding-left: 10px;
    transition: all 0.3s;
    cursor: pointer;
}
```

### Level 4: Tambah Gambar
Tambahkan foto profil Anda:

```html
<!-- Tambahkan setelah <h1> -->
<img src="foto-anda.jpg" alt="Foto Profil" style="width: 150px; border-radius: 50%; display: block; margin: 0 auto 20px;">
```

---

## 🔍 Pertanyaan Refleksi

Jawab pertanyaan berikut setelah menyelesaikan latihan:

### 1. Apa fungsi dari tag `<meta name="viewport">`?
**Jawaban Anda:**
```
_____________________________________________________________
_____________________________________________________________
```

### 2. Apa perbedaan antara `<ul>` dan `<ol>`?
**Jawaban Anda:**
```
_____________________________________________________________
_____________________________________________________________
```

### 3. Apa yang dilakukan oleh `margin: auto;` pada body?
**Jawaban Anda:**
```
_____________________________________________________________
_____________________________________________________________
```

### 4. Apa fungsi dari pseudo-class `:hover`?
**Jawaban Anda:**
```
_____________________________________________________________
_____________________________________________________________
```

### 5. Apa yang terjadi jika Anda tidak menulis `box-sizing: border-box;`?
**Jawaban Anda:**
```
_____________________________________________________________
_____________________________________________________________
```

---

## 🐛 Troubleshooting

### Masalah 1: CSS Tidak Muncul
**Solusi:**
- [ ] Cek apakah nama file benar: `styles.css`
- [ ] Cek apakah path di `<link rel="stylesheet" href="styles.css">` benar
- [ ] Cek apakah file CSS dan HTML ada di folder yang sama
- [ ] Hard refresh browser: `Ctrl + F5` (Windows) atau `Cmd + Shift + R` (Mac)

### Masalah 2: Layout Berantakan
**Solusi:**
- [ ] Cek apakah semua tag sudah ditutup (setiap `<tag>` harus ada `</tag>`)
- [ ] Cek apakah ada typo di nama tag
- [ ] Buka DevTools (F12) dan cek error di Console

### Masalah 3: Link Tidak Berfungsi
**Solusi:**
- [ ] Pastikan URL lengkap dengan `https://`
- [ ] Cek apakah ada typo di atribut `href`
- [ ] Pastikan URL tidak ada spasi

### Masalah 4: Warna Tidak Berubah
**Solusi:**
- [ ] Cek syntax CSS (harus ada `:` dan `;`)
- [ ] Pastikan selector benar
- [ ] Pastikan tidak ada typo di nama properti

---

## 📸 Screenshot Website Anda

Setelah selesai, ambil screenshot website Anda dan tempel di sini atau kirim ke pengajar!

**Preview:**
```
[ Tempat untuk screenshot ]
```

---

## ⭐ Penilaian Diri

Beri nilai untuk diri Anda sendiri:

| Aspek | Nilai (1-5) | Catatan |
|-------|-------------|---------|
| Kelengkapan HTML | ___/5 | |
| Kelengkapan CSS | ___/5 | |
| Kerapian Code | ___/5 | |
| Kreativitas Design | ___/5 | |
| Fungsionalitas | ___/5 | |
| **Total** | ___/25 | |

**Keterangan:**
- 1 = Kurang
- 2 = Cukup
- 3 = Baik
- 4 = Sangat Baik
- 5 = Excellent

---

## 💭 Refleksi Pribadi

### Apa yang paling sulit dari latihan ini?
```
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
```

### Apa yang paling menarik dari latihan ini?
```
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
```

### Apa yang ingin Anda pelajari selanjutnya?
```
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
```

---

## 🎉 Selamat!

Anda telah menyelesaikan website portfolio pertama Anda!

**Langkah selanjutnya:**
1. Simpan file dengan baik
2. Coba eksplorasi lebih lanjut
3. Tunjukkan ke teman/keluarga
4. Lanjutkan belajar HTML & CSS lebih dalam

**Remember:** Setiap web developer profesional memulai dari sini! 🚀
