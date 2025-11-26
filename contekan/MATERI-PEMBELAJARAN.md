# 📚 Materi Pembelajaran: HTML & CSS untuk Website Portfolio

## 🎯 Tujuan Pembelajaran
Membuat website portfolio sederhana yang menampilkan informasi pribadi, keahlian, dan sosial media menggunakan HTML dan CSS.

---

## 📖 Daftar Isi
1. [Pengenalan HTML](#1-pengenalan-html)
2. [Pengenalan CSS](#2-pengenalan-css)
3. [Struktur Dasar Website](#3-struktur-dasar-website)
4. [Membuat Portfolio Step-by-Step](#4-membuat-portfolio-step-by-step)
5. [Latihan & Eksplorasi](#5-latihan--eksplorasi)

---

## 1. Pengenalan HTML

### Apa itu HTML?
**HTML** (HyperText Markup Language) adalah bahasa markup untuk membuat struktur halaman web. HTML terdiri dari **elemen-elemen** yang dibungkus dengan **tag**.

### Struktur Tag HTML
```html
<namatag>Konten</namatag>
```

### Tag-Tag Penting yang Digunakan

| Tag | Fungsi | Contoh |
|-----|--------|--------|
| `<!DOCTYPE html>` | Deklarasi tipe dokumen HTML5 | `<!DOCTYPE html>` |
| `<html>` | Elemen root/akar dokumen | `<html lang="id">` |
| `<head>` | Bagian metadata (tidak terlihat) | `<head>...</head>` |
| `<body>` | Bagian konten yang terlihat | `<body>...</body>` |
| `<h1>` - `<h6>` | Heading (judul) level 1-6 | `<h1>Judul Utama</h1>` |
| `<p>` | Paragraf | `<p>Ini paragraf</p>` |
| `<a>` | Hyperlink | `<a href="url">Link</a>` |
| `<ul>` | Unordered List (list tanpa nomor) | `<ul><li>Item</li></ul>` |
| `<ol>` | Ordered List (list bernomor) | `<ol><li>Item</li></ol>` |
| `<li>` | List Item | `<li>Item dalam list</li>` |
| `<hr>` | Horizontal Rule (garis) | `<hr>` |
| `<meta>` | Metadata dokumen | `<meta charset="UTF-8">` |
| `<link>` | Link ke file eksternal (CSS) | `<link rel="stylesheet">` |

### Attribute (Atribut)
Atribut memberikan informasi tambahan pada elemen:
```html
<a href="https://google.com">Google</a>
```
- `href` = nama atribut
- `"https://google.com"` = nilai atribut

---

## 2. Pengenalan CSS

### Apa itu CSS?
**CSS** (Cascading Style Sheets) adalah bahasa untuk **mendesain** dan **mengatur tampilan** halaman HTML.

### Cara Menulis CSS
```css
selector {
    properti: nilai;
}
```

**Contoh:**
```css
h1 {
    color: blue;
    font-size: 32px;
}
```

### Properti CSS yang Sering Digunakan

| Properti | Fungsi | Contoh |
|----------|--------|--------|
| `color` | Warna teks | `color: #333;` |
| `background` | Warna latar belakang | `background: #f5f5f5;` |
| `font-size` | Ukuran font | `font-size: 16px;` |
| `font-family` | Jenis font | `font-family: Arial;` |
| `font-weight` | Ketebalan font | `font-weight: bold;` |
| `margin` | Jarak luar elemen | `margin: 20px;` |
| `padding` | Jarak dalam elemen | `padding: 15px;` |
| `border` | Garis tepi | `border: 1px solid black;` |
| `border-radius` | Sudut melengkung | `border-radius: 8px;` |
| `text-align` | Perataan teks | `text-align: center;` |
| `line-height` | Jarak antar baris | `line-height: 1.5;` |
| `box-shadow` | Bayangan elemen | `box-shadow: 0 2px 4px rgba(0,0,0,0.1);` |

### Selector CSS

#### 1. **Universal Selector** (`*`)
Memilih semua elemen:
```css
* {
    margin: 0;
    padding: 0;
}
```

#### 2. **Element Selector**
Memilih berdasarkan nama tag:
```css
h1 {
    color: red;
}
```

#### 3. **Class Selector** (`.`)
Memilih elemen dengan class tertentu:
```css
.kotak {
    background: white;
}
```

#### 4. **ID Selector** (`#`)
Memilih elemen dengan ID tertentu:
```css
#header {
    height: 100px;
}
```

---

## 3. Struktur Dasar Website

### Anatomi File HTML
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Judul Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Konten website di sini -->
</body>
</html>
```

### Penjelasan:
- **`<!DOCTYPE html>`**: Memberitahu browser ini HTML5
- **`<html lang="id">`**: Root element, `lang="id"` untuk bahasa Indonesia
- **`<head>`**: Bagian metadata (tidak terlihat di browser)
- **`<meta charset="UTF-8">`**: Encoding karakter
- **`<meta name="viewport">`**: Membuat website responsif
- **`<title>`**: Judul yang muncul di tab browser
- **`<link rel="stylesheet">`**: Menghubungkan file CSS
- **`<body>`**: Konten yang terlihat di browser

---

## 4. Membuat Portfolio Step-by-Step

### 🎯 Hasil Akhir yang Akan Dibuat
Website portfolio dengan bagian:
1. Nama (Header)
2. Tentang Saya
3. Hal yang Saya Sukai
4. Sosial Media

---

### 📝 STEP 1: Struktur HTML Dasar

**File: index.html**
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Saya</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Nama Anda</h1>
</body>
</html>
```

**Penjelasan:**
- Ini struktur minimum HTML yang valid
- `<h1>` adalah heading utama (judul besar)

---

### 📝 STEP 2: Menambahkan Section "Tentang Saya"

**Tambahkan di dalam `<body>`:**
```html
<hr>

<h2>Tentang Saya</h2>
<p>
    Saya adalah seorang mahasiswa jurusan Informatika yang tertarik 
    dengan web development. Saya senang belajar teknologi baru dan 
    membuat proyek-proyek kreatif.
</p>
```

**Penjelasan:**
- `<hr>` membuat garis pemisah horizontal
- `<h2>` adalah sub-heading (lebih kecil dari h1)
- `<p>` adalah paragraf untuk teks

---

### 📝 STEP 3: Menambahkan List "Hal yang Saya Sukai"

**Tambahkan:**
```html
<hr>

<h2>Hal yang Saya Sukai</h2>
<ul>
    <li>Coding</li>
    <li>Desain UI/UX</li>
    <li>Bermain Game</li>
    <li>Mendengarkan Musik</li>
</ul>
```

**Penjelasan:**
- `<ul>` = Unordered List (list dengan bullet point)
- `<li>` = List Item (item dalam list)

---

### 📝 STEP 4: Menambahkan Link Sosial Media

**Tambahkan:**
```html
<hr>

<h2>Sosial Media</h2>
<ol>
    <li><a href="https://instagram.com/username">Instagram</a></li>
    <li><a href="https://linkedin.com/in/username">LinkedIn</a></li>
    <li><a href="https://github.com/username">GitHub</a></li>
</ol>
```

**Penjelasan:**
- `<ol>` = Ordered List (list bernomor)
- `<a href="...">` = Hyperlink (link yang bisa diklik)
- Atribut `href` berisi URL tujuan

---

### 🎨 STEP 5: Styling dengan CSS

**File: styles.css**

#### Reset Dasar
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
**Penjelasan:** Menghapus margin dan padding default browser.

---

#### Styling Body
```css
body {
    font-family: Arial, sans-serif;
    background: #f5f6fa;
    color: #2c2c2c;
    padding: 40px 20px;
    max-width: 850px;
    margin: auto;
    line-height: 1.75;
}
```

**Penjelasan:**
- `font-family`: Jenis font yang digunakan
- `background`: Warna latar belakang (abu-abu muda)
- `color`: Warna teks default
- `padding`: Jarak dalam (40px atas-bawah, 20px kiri-kanan)
- `max-width`: Lebar maksimal 850px
- `margin: auto`: Membuat konten di tengah horizontal
- `line-height`: Jarak antar baris teks

---

#### Styling Heading (h1)
```css
h1 {
    font-size: 2.8rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 15px;
    color: #1a1a1a;
}
```

**Penjelasan:**
- `font-size`: Ukuran font (2.8rem = 2.8x dari ukuran default)
- `font-weight`: Ketebalan font (700 = bold)
- `text-align: center`: Teks di tengah
- `margin-bottom`: Jarak bawah 15px

---

#### Styling Garis Pemisah (hr)
```css
hr {
    border: none;
    border-top: 2px solid #dedede;
    margin: 35px 0;
}
```

**Penjelasan:**
- Menghapus border default, lalu menambahkan border atas
- `margin: 35px 0`: Jarak atas-bawah 35px

---

#### Styling Sub-Heading (h2)
```css
h2 {
    font-size: 1.6rem;
    margin-bottom: 10px;
    color: #3a3a3a;
    font-weight: 600;
}
```

---

#### Styling Paragraf (p)
```css
p {
    background: #ffffff;
    padding: 18px 22px;
    border-radius: 8px;
    border: 1px solid #e8e8e8;
    box-shadow: 0 2px 6px rgba(0,0,0,0.04);
    margin-bottom: 10px;
    font-size: 1rem;
}
```

**Penjelasan:**
- `background`: Latar putih
- `padding`: Ruang dalam elemen
- `border-radius`: Sudut melengkung 8px
- `border`: Garis tepi tipis
- `box-shadow`: Bayangan halus untuk kesan depth

---

#### Styling List (ul, ol)
```css
ul, ol {
    background: #ffffff;
    padding: 20px 30px;
    border-radius: 8px;
    border: 1px solid #e8e8e8;
    box-shadow: 0 2px 6px rgba(0,0,0,0.04);
    margin-bottom: 10px;
    width: fit-content;
}

li {
    padding: 6px 0;
    font-size: 1rem;
    color: #333;
}
```

**Penjelasan:**
- `width: fit-content`: Lebar menyesuaikan isi
- Styling sama seperti paragraf untuk konsistensi

---

#### Styling Link (a)
```css
a {
    color: #0f70f0;
    font-weight: 600;
    text-decoration: none;
    transition: 0.2s;
}

a:hover {
    color: #084a9e;
    text-decoration: underline;
}
```

**Penjelasan:**
- `color`: Warna biru profesional
- `text-decoration: none`: Hilangkan garis bawah default
- `transition`: Animasi smooth 0.2 detik
- `:hover`: Style saat mouse di atas link
- `text-decoration: underline`: Garis bawah saat hover

---

## 5. Latihan & Eksplorasi

### ✏️ Latihan 1: Personalisasi Konten
1. Ganti semua `(Isi ...)` dengan informasi pribadi Anda
2. Tambahkan lebih banyak item di list kesukaan
3. Ganti link sosial media dengan profile Anda

### ✏️ Latihan 2: Eksplorasi Warna
Coba ubah warna-warna berikut di CSS:
```css
body {
    background: #f5f6fa;  /* Coba: #e0f7fa, #fff3e0, #f3e5f5 */
    color: #2c2c2c;       /* Coba: #1a1a1a, #424242 */
}

a {
    color: #0f70f0;       /* Coba: #d32f2f, #388e3c, #7b1fa2 */
}
```

### ✏️ Latihan 3: Tambahkan Section Baru
Tambahkan section "Pendidikan" atau "Hobi":
```html
<hr>
<h2>Pendidikan</h2>
<ul>
    <li>SD Negeri 1 Jakarta (2010-2016)</li>
    <li>SMP Negeri 5 Jakarta (2016-2019)</li>
    <li>SMA Negeri 3 Jakarta (2019-2022)</li>
</ul>
```

### ✏️ Latihan 4: Styling Lanjutan
Coba tambahkan styling ini untuk efek hover pada list:
```css
li:hover {
    background: #f0f0f0;
    padding-left: 10px;
    transition: 0.3s;
}
```

### ✏️ Latihan 5: Responsif
Coba resize browser Anda! Website sudah responsif karena:
- `max-width: 850px` membatasi lebar
- `padding: 40px 20px` memberi ruang di samping
- `margin: auto` menempatkan konten di tengah

---

## 🎓 Konsep Penting yang Dipelajari

### HTML
✅ Struktur dokumen HTML5  
✅ Tag heading (`<h1>`, `<h2>`)  
✅ Paragraf (`<p>`)  
✅ List ordered & unordered (`<ol>`, `<ul>`, `<li>`)  
✅ Hyperlink (`<a>`)  
✅ Horizontal rule (`<hr>`)  
✅ Metadata (`<meta>`, `<title>`)  
✅ Linking CSS eksternal  

### CSS
✅ Selector (universal, element)  
✅ Box model (margin, padding, border)  
✅ Typography (font-size, font-family, font-weight)  
✅ Colors & backgrounds  
✅ Border & border-radius  
✅ Box shadow  
✅ Pseudo-class (`:hover`)  
✅ Transition  
✅ Centering content  

---

## 🚀 Langkah Selanjutnya

Setelah menguasai dasar ini, Anda bisa eksplorasi:

1. **Flexbox & Grid** - Layout modern CSS
2. **Responsive Design** - Media queries untuk mobile
3. **JavaScript** - Membuat website interaktif
4. **Framework CSS** - Bootstrap, Tailwind CSS
5. **Hosting** - Deploy website ke GitHub Pages, Netlify, atau Vercel

---

## 📚 Referensi Belajar

- [MDN Web Docs](https://developer.mozilla.org/) - Dokumentasi lengkap HTML & CSS
- [W3Schools](https://www.w3schools.com/) - Tutorial interaktif
- [CSS Tricks](https://css-tricks.com/) - Tips & trik CSS
- [Google Fonts](https://fonts.google.com/) - Font gratis untuk website

---

## 💡 Tips untuk Pengajar

### Cara Mengajar Efektif:
1. **Live Coding**: Koding bersama siswa step-by-step
2. **Explain While Coding**: Jelaskan setiap baris yang ditulis
3. **Show Result Frequently**: Refresh browser setiap perubahan
4. **Encourage Experimentation**: Biarkan siswa coba ubah warna/ukuran
5. **Use Browser DevTools**: Tunjukkan cara inspect element (F12)

### Urutan Pengajaran:
1. **Sesi 1 (60 menit)**: Pengenalan HTML + Struktur Dasar
2. **Sesi 2 (60 menit)**: Melengkapi HTML Portfolio
3. **Sesi 3 (90 menit)**: Pengenalan CSS + Styling Portfolio
4. **Sesi 4 (60 menit)**: Finalisasi + Eksplorasi + Q&A

### Troubleshooting Umum:
- **CSS tidak muncul**: Cek nama file `styles.css` dan path di `<link>`
- **Warna tidak berubah**: Cek syntax CSS (titik koma, kurung kurawal)
- **Layout berantakan**: Cek apakah ada tag yang tidak ditutup
- **Font tidak berubah**: Cek ejaan `font-family`

---

**Selamat Mengajar! 🎉**

Materi ini dirancang untuk pemula yang baru belajar HTML & CSS. Sesuaikan kecepatan dengan kemampuan siswa dan selalu encourage mereka untuk bereksperimen!
