# 🎓 Panduan Mengajar: HTML & CSS Portfolio

## 📋 Informasi Umum

**Topik:** Membuat Website Portfolio dengan HTML & CSS  
**Target:** Pemula (belum pernah belajar HTML/CSS)  
**Durasi Total:** 4-5 jam (bisa dibagi menjadi 3-4 sesi)  
**Level:** Beginner  

---

## 🎯 Learning Outcomes

Setelah mengikuti pembelajaran ini, siswa diharapkan mampu:
1. ✅ Memahami struktur dasar HTML5
2. ✅ Menggunakan tag HTML semantik (heading, paragraph, list, link)
3. ✅ Menghubungkan file CSS eksternal ke HTML
4. ✅ Menulis CSS selector dan properti dasar
5. ✅ Menerapkan styling (warna, font, spacing, border, shadow)
6. ✅ Membuat layout sederhana yang rapi dan responsif
7. ✅ Membuat website portfolio pribadi yang fungsional

---

## 📚 Materi yang Disiapkan

File-file yang tersedia:
1. **MATERI-PEMBELAJARAN.md** - Materi lengkap untuk referensi
2. **LATIHAN-SISWA.md** - Lembar kerja untuk siswa
3. **PANDUAN-MENGAJAR.md** - File ini (untuk pengajar)
4. **index.html** - Template HTML dengan komen lengkap
5. **styles.css** - Template CSS dengan komen lengkap

---

## 📅 Rencana Pembelajaran

### SESI 1: Pengenalan HTML (60-90 menit)

#### Tujuan Sesi:
- Siswa memahami apa itu HTML
- Siswa bisa membuat struktur HTML dasar
- Siswa memahami tag-tag penting

#### Agenda:
1. **Pembukaan (10 menit)**
   - Perkenalan dan ice breaking
   - Tunjukkan hasil akhir website yang akan dibuat
   - Jelaskan tujuan pembelajaran

2. **Teori HTML (15 menit)**
   - Apa itu HTML?
   - Struktur tag: `<tag>konten</tag>`
   - Elemen, tag, dan atribut
   - Tunjukkan contoh website dan "View Source"

3. **Praktek: Struktur Dasar HTML (20 menit)**
   ```html
   <!DOCTYPE html>
   <html lang="id">
   <head>
       <meta charset="UTF-8">
       <title>Portfolio Saya</title>
   </head>
   <body>
       <h1>Nama Saya</h1>
   </body>
   </html>
   ```
   - Live coding bersama siswa
   - Jelaskan fungsi setiap baris
   - Buka di browser, tunjukkan hasil

4. **Praktek: Menambah Konten (30 menit)**
   - Tambahkan section "Tentang Saya" dengan `<p>`
   - Tambahkan garis pemisah dengan `<hr>`
   - Tambahkan `<h2>` untuk sub-judul
   - Setiap penambahan, refresh browser
   
5. **Penutup (10 menit)**
   - Review: tag apa saja yang dipelajari
   - Q&A
   - Preview sesi berikutnya

#### Tips Mengajar:
- 💡 Gunakan analogi: "HTML seperti kerangka rumah"
- 💡 Refresh browser setiap perubahan agar siswa melihat hasil langsung
- 💡 Encourage siswa untuk bereksperimen (ubah teks, tambah paragraf)
- 💡 Jangan terlalu cepat, pastikan semua siswa mengikuti

---

### SESI 2: HTML Lanjutan - List dan Link (60-90 menit)

#### Tujuan Sesi:
- Siswa bisa membuat list (ordered & unordered)
- Siswa bisa membuat hyperlink
- Website portfolio HTML selesai

#### Agenda:
1. **Review Sesi 1 (10 menit)**
   - Tanya siswa: "Tag apa saja yang sudah kita pelajari?"
   - Buka file dari sesi sebelumnya

2. **Teori List (10 menit)**
   - Perbedaan `<ul>` dan `<ol>`
   - Kapan menggunakan yang mana
   - Struktur: parent (`<ul>`) dan child (`<li>`)

3. **Praktek: Membuat List Kesukaan (20 menit)**
   ```html
   <h2>Hal yang Saya Sukai</h2>
   <ul>
       <li>Coding</li>
       <li>Gaming</li>
       <li>Musik</li>
   </ul>
   ```
   - Live coding bersama
   - Minta siswa tambah lebih banyak item

4. **Teori Link (10 menit)**
   - Apa itu hyperlink
   - Struktur `<a href="url">teks</a>`
   - Pentingnya atribut `href`

5. **Praktek: Membuat List Sosial Media (20 menit)**
   ```html
   <h2>Sosial Media</h2>
   <ol>
       <li><a href="https://instagram.com">Instagram</a></li>
       <li><a href="https://linkedin.com">LinkedIn</a></li>
   </ol>
   ```
   - Minta siswa isi dengan link profile mereka sendiri
   - Test link berfungsi atau tidak

6. **Penutup (10 menit)**
   - Review struktur HTML lengkap
   - Q&A
   - Preview: "Sekarang HTML sudah rapi, tapi masih plain. Sesi depan kita akan membuat cantik dengan CSS!"

#### Tips Mengajar:
- 💡 Tunjukkan perbedaan visual `<ul>` vs `<ol>`
- 💡 Explain: "List seperti daftar belanja atau to-do list"
- 💡 Pastikan siswa test klik link mereka
- 💡 Jika ada siswa yang belum punya sosmed tertentu, bisa skip atau isi dengan yang lain

---

### SESI 3: Pengenalan CSS & Styling (90-120 menit)

#### Tujuan Sesi:
- Siswa memahami apa itu CSS
- Siswa bisa menulis CSS selector dan properti
- Website portfolio sudah ter-styling dengan baik

#### Agenda:
1. **Pembukaan & Review (10 menit)**
   - Buka HTML dari sesi sebelumnya
   - Tunjukkan bahwa tampilan masih plain
   - "Bagaimana caranya membuat tampilan ini lebih cantik?"

2. **Teori CSS (15 menit)**
   - Apa itu CSS?
   - Syntax: `selector { properti: nilai; }`
   - Cara menghubungkan CSS ke HTML
   - Tunjukkan file `styles.css`

3. **Praktek: Setup CSS (15 menit)**
   - Buat file `styles.css`
   - Link ke HTML: `<link rel="stylesheet" href="styles.css">`
   - Test dengan CSS sederhana:
     ```css
     body {
         background: lightblue;
     }
     ```
   - Refresh browser, pastikan CSS terhubung

4. **Praktek: Styling Body (20 menit)**
   ```css
   body {
       font-family: Arial, sans-serif;
       background: #f5f6fa;
       color: #2c2c2c;
       padding: 40px 20px;
       max-width: 850px;
       margin: auto;
   }
   ```
   - Jelaskan setiap properti satu per satu
   - Tunjukkan perubahan di browser
   - Ajak siswa coba ubah nilai (misalnya background color)

5. **Praktek: Styling Heading (15 menit)**
   ```css
   h1 {
       font-size: 2.8rem;
       text-align: center;
       color: #1a1a1a;
   }
   
   h2 {
       font-size: 1.6rem;
       color: #3a3a3a;
   }
   ```

6. **Praktek: Styling Paragraf & List (20 menit)**
   ```css
   p {
       background: white;
       padding: 18px 22px;
       border-radius: 8px;
       border: 1px solid #e8e8e8;
       box-shadow: 0 2px 6px rgba(0,0,0,0.04);
   }
   ```
   - Jelaskan box model: content, padding, border, margin
   - Tunjukkan efek `border-radius` dan `box-shadow`

7. **Praktek: Styling Link (15 menit)**
   ```css
   a {
       color: #0f70f0;
       text-decoration: none;
       transition: 0.2s;
   }
   
   a:hover {
       color: #084a9e;
       text-decoration: underline;
   }
   ```
   - Jelaskan pseudo-class `:hover`
   - Tunjukkan efek transition

8. **Penutup (10 menit)**
   - Review CSS yang sudah dipelajari
   - Bandingkan tampilan before/after CSS
   - Q&A

#### Tips Mengajar:
- 💡 Gunakan analogi: "CSS seperti cat dan dekorasi rumah"
- 💡 Tunjukkan perubahan SETIAP menambah CSS
- 💡 Buka DevTools (F12) dan tunjukkan cara inspect element
- 💡 Encourage eksperimen: "Coba ubah warnanya jadi merah!"
- 💡 Explain visual: tunjukkan box model dengan diagram

---

### SESI 4: Finalisasi & Eksplorasi (60-90 menit)

#### Tujuan Sesi:
- Siswa menyelesaikan portfolio mereka
- Siswa bisa troubleshoot masalah sendiri
- Siswa terinspirasi untuk eksplorasi lebih lanjut

#### Agenda:
1. **Review & Troubleshooting (20 menit)**
   - Minta siswa buka project mereka
   - Bantu siswa yang mengalami masalah
   - Common issues:
     - CSS tidak muncul → cek path file
     - Layout berantakan → cek tag yang tidak ditutup
     - Link tidak berfungsi → cek href

2. **Personalisasi (20 menit)**
   - Minta siswa isi dengan data pribadi mereka
   - Ganti warna sesuai preferensi
   - Tambah konten jika perlu
   - Waktu kerja mandiri, pengajar berkeliling membantu

3. **Challenge/Eksplorasi (20 menit)**
   - Tantang siswa untuk:
     - Tambah section baru (Pendidikan, Keahlian, dll)
     - Ubah color scheme
     - Tambah efek hover pada list item
     - Tambah foto profil
   - Berikan kebebasan berkreasi

4. **Showcase & Sharing (15 menit)**
   - Minta 3-5 siswa tunjukkan hasil mereka
   - Apresiasi setiap karya
   - Diskusi: "Apa yang paling sulit? Apa yang paling seru?"

5. **Penutup & Next Steps (15 menit)**
   - Review keseluruhan pembelajaran
   - Tunjukkan kemungkinan next steps:
     - Belajar Flexbox/Grid
     - JavaScript untuk interaktivitas
     - Hosting website (GitHub Pages, Netlify)
   - Bagikan resources untuk belajar mandiri
   - Q&A terakhir

#### Tips Mengajar:
- 💡 Beri apresiasi positif untuk setiap hasil siswa
- 💡 Encourage siswa untuk show & tell
- 💡 Jangan terlalu critique, fokus pada yang baik
- 💡 Motivasi: "Ini adalah portfolio pertama kalian. Semua web developer mulai dari sini!"

---

## 🛠️ Tools yang Dibutuhkan

### Wajib:
1. **Text Editor**
   - VS Code (Recommended) ✅
   - Sublime Text
   - Notepad++
   - Atom

2. **Web Browser**
   - Google Chrome (Recommended - best DevTools)
   - Mozilla Firefox
   - Microsoft Edge

### Opsional:
1. **Extensions VS Code** (untuk kemudahan):
   - Live Server (untuk auto-refresh)
   - HTML CSS Support
   - Prettier (code formatter)

---

## 🎯 Metode Pengajaran yang Efektif

### 1. Live Coding
- Koding bersama siswa step-by-step
- Jangan copy-paste, tulis manual
- Explain while typing
- Refresh browser setiap perubahan

### 2. Show, Don't Just Tell
- Tunjukkan hasil visual setiap perubahan
- Gunakan DevTools untuk show box model
- Compare before/after

### 3. Hands-On Practice
- 70% praktek, 30% teori
- Beri waktu siswa untuk try sendiri
- Encourage eksplorasi dan mistakes

### 4. Use Analogies
- "HTML = kerangka rumah"
- "CSS = cat dan dekorasi"
- "Tag = kotak yang membungkus konten"
- "Selector = cara kita menunjuk elemen"

### 5. Incremental Learning
- Jangan overwhelm dengan info terlalu banyak
- Satu konsep di satu waktu
- Build upon previous knowledge

### 6. Encourage Questions
- "No stupid questions"
- Buat atmosphere yang nyaman
- Answer dengan sabar dan jelas

---

## 🐛 Common Troubleshooting

### Problem 1: CSS Tidak Muncul
**Symptoms:** Website masih plain, tidak ada styling

**Solutions:**
1. Cek nama file: harus `styles.css` (case-sensitive)
2. Cek path di `<link>`: `href="styles.css"`
3. Pastikan file CSS dan HTML di folder yang sama
4. Hard refresh: `Ctrl + F5` atau `Cmd + Shift + R`
5. Cek console di DevTools (F12) untuk error

**Teaching Tip:**
Tunjukkan cara cek di DevTools → Network tab → cek apakah `styles.css` ter-load atau 404

---

### Problem 2: Layout Berantakan
**Symptoms:** Element overlapping, tidak rapi

**Solutions:**
1. Cek apakah semua tag sudah ditutup
2. Cek indentation (formatting)
3. Validate HTML di validator.w3.org
4. Cek typo di nama tag

**Teaching Tip:**
Tunjukkan cara auto-format di VS Code: `Shift + Alt + F`

---

### Problem 3: Link Tidak Berfungsi
**Symptoms:** Klik link tidak membuka halaman

**Solutions:**
1. Pastikan URL lengkap dengan `https://`
2. Cek typo di `href`
3. Pastikan tidak ada spasi dalam URL
4. Test URL di browser terpisah dulu

**Teaching Tip:**
Explain: URL harus valid dan accessible

---

### Problem 4: Warna/Font Tidak Berubah
**Symptoms:** Styling tertentu tidak apply

**Solutions:**
1. Cek syntax CSS: harus ada `:` dan `;`
2. Cek selector: apakah sudah benar?
3. Cek specificity: apakah ada style yang override?
4. Cek typo di properti atau value

**Teaching Tip:**
Gunakan DevTools → Inspect element → lihat computed styles

---

### Problem 5: Browser Tidak Refresh
**Symptoms:** Perubahan code tidak terlihat

**Solutions:**
1. Hard refresh: `Ctrl + F5`
2. Clear cache
3. Gunakan Live Server extension
4. Pastikan file sudah di-save (`Ctrl + S`)

**Teaching Tip:**
Remind siswa untuk save dulu sebelum refresh

---

## 📊 Assessment & Evaluation

### Formative Assessment (During Class)
- Observasi: Apakah siswa bisa mengikuti live coding?
- Q&A: Tanya random siswa untuk explain konsep
- Peer check: Minta siswa cek punya teman

### Summative Assessment (End of Session)
Gunakan checklist di **LATIHAN-SISWA.md**:

**Kriteria Penilaian:**

| Kriteria | Bobot | Deskripsi |
|----------|-------|-----------|
| Kelengkapan HTML | 20% | Semua section ada (nama, tentang, kesukaan, sosmed) |
| Kelengkapan CSS | 20% | Semua element ter-styling |
| Kerapian Code | 20% | Indentation, struktur rapi |
| Fungsionalitas | 20% | Link berfungsi, tidak ada error |
| Kreativitas | 20% | Personalisasi, design choices |

**Rubrik:**
- **90-100:** Excellent - Semua kriteria terpenuhi dengan sempurna + kreativitas tinggi
- **80-89:** Very Good - Semua kriteria terpenuhi dengan baik
- **70-79:** Good - Sebagian besar kriteria terpenuhi
- **60-69:** Satisfactory - Kriteria minimum terpenuhi
- **<60:** Needs Improvement - Banyak kriteria belum terpenuhi

---

## 💡 Tips Pro untuk Pengajar

### Before Class:
- ✅ Test semua code sample di berbagai browser
- ✅ Siapkan backup file jika ada yang corrupt
- ✅ Cek koneksi internet (untuk buka documentation)
- ✅ Siapkan contingency plan jika ada technical issue

### During Class:
- ✅ Walk around, jangan hanya di depan
- ✅ Check individual progress
- ✅ Identify struggling students early
- ✅ Encourage fast learners to help others
- ✅ Take breaks every 45-60 minutes

### After Class:
- ✅ Collect student work (screenshot atau folder)
- ✅ Note down common mistakes untuk diperbaiki di session berikutnya
- ✅ Prepare feedback individual
- ✅ Share additional resources

---

## 📚 Additional Resources untuk Siswa

### Documentation:
- [MDN Web Docs](https://developer.mozilla.org/) - Most comprehensive
- [W3Schools](https://www.w3schools.com/) - Beginner friendly
- [CSS Tricks](https://css-tricks.com/) - CSS tips & tricks

### Interactive Learning:
- [freeCodeCamp](https://www.freecodecamp.org/) - Free courses
- [Codecademy](https://www.codecademy.com/) - Interactive tutorials
- [Scrimba](https://scrimba.com/) - Video + coding environment

### Tools:
- [Google Fonts](https://fonts.google.com/) - Free fonts
- [Coolors](https://coolors.co/) - Color palette generator
- [CSS Gradient](https://cssgradient.io/) - Gradient generator
- [Can I Use](https://caniuse.com/) - Browser compatibility checker

### Inspiration:
- [Dribbble](https://dribbble.com/) - Design inspiration
- [Awwwards](https://www.awwwards.com/) - Best web designs
- [CodePen](https://codepen.io/) - Front-end code examples

---

## 🎯 Expected Outcomes by End of Course

### Technical Skills:
- ✅ Understand HTML structure and semantics
- ✅ Write valid HTML5 code
- ✅ Use appropriate tags for content
- ✅ Write CSS selectors and rules
- ✅ Apply colors, fonts, spacing
- ✅ Create simple layouts
- ✅ Use browser DevTools basics

### Soft Skills:
- ✅ Problem-solving (debugging)
- ✅ Attention to detail
- ✅ Self-learning (using documentation)
- ✅ Patience and perseverance
- ✅ Creative thinking

### Mindset:
- ✅ Confidence to build simple websites
- ✅ Understanding that coding is learnable
- ✅ Excitement to learn more
- ✅ Not afraid of errors/bugs

---

## 🚀 What's Next? (Rekomendasi Lanjutan)

### Immediate Next Steps (Week 2-4):
1. **CSS Layout:**
   - Flexbox
   - CSS Grid
   - Positioning

2. **Responsive Design:**
   - Media queries
   - Mobile-first approach
   - Responsive images

3. **More HTML/CSS:**
   - Forms & inputs
   - Tables
   - Semantic HTML5

### Intermediate (Month 2-3):
1. **JavaScript Basics:**
   - Variables, functions
   - DOM manipulation
   - Event handling

2. **CSS Advanced:**
   - Animations & transitions
   - CSS Variables
   - Pseudo-elements

3. **Tools:**
   - Git & GitHub
   - VS Code tips & tricks
   - Browser DevTools advanced

### Long Term (Month 4+):
1. **Framework/Library:**
   - Bootstrap / Tailwind CSS
   - React / Vue / Angular

2. **Backend:**
   - Node.js
   - PHP / Python
   - Databases

3. **Deployment:**
   - GitHub Pages
   - Netlify / Vercel
   - Domain & hosting

---

## 📝 Feedback Form untuk Siswa

Bagikan form ini di akhir pembelajaran:

### 1. Seberapa jelas materi yang disampaikan? (1-5)
- ⭐⭐⭐⭐⭐

### 2. Seberapa sesuai kecepatan pembelajaran? (1-5)
- ⭐⭐⭐⭐⭐

### 3. Apakah Anda merasa lebih percaya diri membuat website sekarang? (1-5)
- ⭐⭐⭐⭐⭐

### 4. Apa yang paling Anda sukai dari pembelajaran ini?
```
_______________________________
```

### 5. Apa yang bisa diperbaiki?
```
_______________________________
```

### 6. Topik apa yang ingin Anda pelajari selanjutnya?
```
_______________________________
```

---

## 🎊 Penutup

**Remember:**
> "Every expert was once a beginner. Every pro was once an amateur. 
> Every master was once a novice. Don't be afraid to start!"

Teaching is not just about transferring knowledge, but inspiring students to keep learning!

**Good luck and have fun teaching! 🚀**

---

**Questions atau butuh support?**
Feel free to reach out atau refer ke:
- MATERI-PEMBELAJARAN.md (untuk content)
- LATIHAN-SISWA.md (untuk worksheets)
- Template HTML & CSS yang sudah dibuat

**Happy Teaching! 🎓**
