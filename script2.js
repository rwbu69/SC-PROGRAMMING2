// ========================================
// 1. VISITOR COUNTER
// ========================================

/**
 * Fungsi untuk menghitung jumlah pengunjung
 * Menggunakan localStorage untuk menyimpan data secara persistent
 */
function initVisitorCounter() {
    // Ambil elemen HTML yang akan menampilkan angka pengunjung
    const counterElement = document.getElementById('visitorCount');
    
    // Cek apakah sudah ada data pengunjung di localStorage
    // localStorage.getItem() mengambil data yang tersimpan
    let visitorCount = localStorage.getItem('visitorCount');
    
    // Jika belum ada data (null), set ke 0
    if (visitorCount === null) {
        visitorCount = 0;
    } else {
        // Jika ada, convert dari string ke number
        visitorCount = parseInt(visitorCount);
    }
    
    // Tambah 1 untuk pengunjung baru
    visitorCount++;
    
    // Simpan kembali ke localStorage
    // localStorage.setItem() menyimpan data (key, value)
    localStorage.setItem('visitorCount', visitorCount);
    
    // Tampilkan angka di halaman
    counterElement.textContent = visitorCount;
    
    // Tambahkan animasi saat angka muncul
    counterElement.style.animation = 'countUp 0.5s ease-out';
}

// Jalankan fungsi saat halaman selesai dimuat
// window.addEventListener menunggu event tertentu
window.addEventListener('load', initVisitorCounter);


// ========================================
// 2. CONTACT FORM VALIDATION
// ========================================

/**
 * Fungsi utama untuk handle form submission
 */
function initContactForm() {
    // Ambil elemen form dari HTML
    const form = document.getElementById('contactForm');
    
    // Tambahkan event listener untuk event 'submit'
    // Event ini dipicu saat user klik tombol submit atau tekan Enter
    form.addEventListener('submit', function(event) {
        // Mencegah form melakukan submit default (refresh page)
        event.preventDefault();
        
        // Validasi form sebelum kirim
        if (validateForm()) {
            // Jika validasi berhasil, kirim form
            submitForm();
        }
    });
}

/**
 * Fungsi untuk validasi semua input form
 * Return: true jika semua valid, false jika ada yang error
 */
function validateForm() {
    // Flag untuk track apakah form valid
    let isValid = true;
    
    // Clear semua error message sebelumnya
    clearErrors();
    
    // === VALIDASI NAMA ===
    const nameInput = document.getElementById('name');
    const nameValue = nameInput.value.trim(); // .trim() menghapus spasi di awal/akhir
    
    if (nameValue === '') {
        // Jika kosong, tampilkan error
        showError('nameError', 'Nama tidak boleh kosong');
        nameInput.classList.add('error');
        isValid = false;
    } else if (nameValue.length < 3) {
        // Jika terlalu pendek
        showError('nameError', 'Nama minimal 3 karakter');
        nameInput.classList.add('error');
        isValid = false;
    }
    
    // === VALIDASI EMAIL ===
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();
    
    // Regular Expression (Regex) untuk validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailValue === '') {
        showError('emailError', 'Email tidak boleh kosong');
        emailInput.classList.add('error');
        isValid = false;
    } else if (!emailRegex.test(emailValue)) {
        // .test() mengecek apakah string match dengan pattern regex
        showError('emailError', 'Format email tidak valid');
        emailInput.classList.add('error');
        isValid = false;
    }
    
    // VALIDASI PHONE 
    const phoneInput = document.getElementById('phone');
    const phoneValue = phoneInput.value.trim();
    
    // Phone bersifat optional, hanya validasi jika diisi
    if (phoneValue !== '') {
        // Regex untuk nomor telepon Indonesia
        // Bisa diawali dengan +62, 62, atau 0
        const phoneRegex = /^(\+62|62|0)[0-9]{9,12}$/;
        
        if (!phoneRegex.test(phoneValue.replace(/[\s-]/g, ''))) {
            // .replace(/[\s-]/g, '') menghapus spasi dan dash
            showError('phoneError', 'Format nomor telepon tidak valid');
            phoneInput.classList.add('error');
            isValid = false;
        }
    }
    
    // === VALIDASI MESSAGE ===
    const messageInput = document.getElementById('message');
    const messageValue = messageInput.value.trim();
    
    if (messageValue === '') {
        showError('messageError', 'Pesan tidak boleh kosong');
        messageInput.classList.add('error');
        isValid = false;
    } else if (messageValue.length < 10) {
        showError('messageError', 'Pesan minimal 10 karakter');
        messageInput.classList.add('error');
        isValid = false;
    }
    
    return isValid;
}

/**
 * Fungsi untuk menampilkan pesan error
 * @param {string} errorId - ID elemen untuk menampilkan error
 * @param {string} message - Pesan error yang akan ditampilkan
 */
function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

/**
 * Fungsi untuk menghapus semua error message dan styling
 */
function clearErrors() {
    // Ambil semua elemen dengan class 'error-message'
    const errorMessages = document.querySelectorAll('.error-message');
    
    // Loop untuk setiap error message dan hide
    errorMessages.forEach(function(errorMsg) {
        errorMsg.textContent = '';
        errorMsg.classList.remove('show');
    });
    
    // Hapus class 'error' dari semua input
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    inputs.forEach(function(input) {
        input.classList.remove('error');
    });
}

/**
 * Fungsi untuk submit form (simulasi pengiriman)
 */
function submitForm() {
    // Ambil semua nilai dari form
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        message: document.getElementById('message').value.trim()
    };
    
    // Tampilkan loading state
    const submitBtn = document.querySelector('.btn-submit');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline-block';
    
    // Simulasi pengiriman dengan setTimeout (delay 2 detik)
    setTimeout(function() {
        // Log data ke console (untuk development/testing)
        console.log('Form Data:', formData);
        
        // Tampilkan success message
        showAlert('success', 'Pesan berhasil dikirim! Terima kasih sudah menghubungi saya.');
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Reset button state
        submitBtn.disabled = false;
        btnText.style.display = 'inline-block';
        btnLoading.style.display = 'none';

        
    }, 2000); 
}

/**
 * Fungsi untuk menampilkan alert sukses/error
 * @param {string} type - 'success' atau 'error'
 * @param {string} message - Pesan yang akan ditampilkan
 */
function showAlert(type, message) {
    const alertElement = document.getElementById('formAlert');
    
    // Set class untuk styling (success atau error)
    alertElement.className = 'form-alert ' + type;
    alertElement.textContent = message;
    alertElement.style.display = 'block';
    
    // Auto hide alert setelah 5 detik
    setTimeout(function() {
        alertElement.style.display = 'none';
    }, 5000);
}

/**
 * Real-time validation saat user mengetik
 * Memberikan feedback langsung tanpa perlu submit
 */
function initRealTimeValidation() {
    // Ambil semua input
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    // Tambahkan event listener untuk setiap input
    inputs.forEach(function(input) {
        // Event 'blur' dipicu saat user keluar dari input field
        input.addEventListener('blur', function() {
            // Validasi field yang bersangkutan
            validateSingleField(input);
        });
        
        // Event 'input' dipicu setiap kali user mengetik
        input.addEventListener('input', function() {
            // Hapus error jika user mulai mengetik
            if (input.classList.contains('error')) {
                input.classList.remove('error');
                const errorId = input.id + 'Error';
                const errorElement = document.getElementById(errorId);
                if (errorElement) {
                    errorElement.classList.remove('show');
                }
            }
        });
    });
}

/**
 * Fungsi untuk validasi satu field saja
 * @param {HTMLElement} input - Element input yang akan divalidasi
 */
function validateSingleField(input) {
    const value = input.value.trim();
    const errorId = input.id + 'Error';
    
    // Clear error dulu
    input.classList.remove('error');
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.classList.remove('show');
    }
    
    // Validasi berdasarkan ID input
    switch(input.id) {
        case 'name':
            if (value === '') {
                showError(errorId, 'Nama tidak boleh kosong');
                input.classList.add('error');
            } else if (value.length < 3) {
                showError(errorId, 'Nama minimal 3 karakter');
                input.classList.add('error');
            }
            break;
            
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value === '') {
                showError(errorId, 'Email tidak boleh kosong');
                input.classList.add('error');
            } else if (!emailRegex.test(value)) {
                showError(errorId, 'Format email tidak valid');
                input.classList.add('error');
            }
            break;
            
        case 'phone':
            if (value !== '') {
                const phoneRegex = /^(\+62|62|0)[0-9]{9,12}$/;
                if (!phoneRegex.test(value.replace(/[\s-]/g, ''))) {
                    showError(errorId, 'Format nomor telepon tidak valid');
                    input.classList.add('error');
                }
            }
            break;
            
        case 'message':
            if (value === '') {
                showError(errorId, 'Pesan tidak boleh kosong');
                input.classList.add('error');
            } else if (value.length < 10) {
                showError(errorId, 'Pesan minimal 10 karakter');
                input.classList.add('error');
            }
            break;
    }
}


// ========================================
// 3. BONUS: SMOOTH SCROLL
// ========================================

/**
 * Fungsi untuk smooth scroll ke section tertentu
 * (Bisa digunakan jika ada navigation menu)
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}


// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ JavaScript loaded successfully!');
    
    initContactForm();
    initRealTimeValidation();
    initSmoothScroll();
    
});


// ========================================
// 5. LEAFLET MAP 
// ========================================

function initMap() {

    const latitude = -7.774898;   
    const longitude = 110.449579; 
    const zoomLevel = 18;        
    

    const map = L.map('map').setView([latitude, longitude], zoomLevel);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,              
        minZoom: 3,               
    }).addTo(map);
    
    const marker = L.marker([latitude, longitude]).addTo(map);
    
    marker.bindPopup(`
        <div style="text-align: center;">
            <h3 style="margin: 0 0 5px 0; color: #667eea;">Lokasi Saya</h3>
            <p style="margin: 0; color: #666;">Jakarta, Indonesia</p>
        </div>
    `).openPopup();  
    
}


window.addEventListener('load', initMap);


