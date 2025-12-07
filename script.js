// 1. Ambil elemen HTML yang dibutuhkan
const colorPicker = document.getElementById('colorPicker');
const dynamicText = document.getElementById('dynamicText');

// 2. Tambahkan "event listener" untuk mendeteksi setiap kali warna pada colorPicker berubah
// Event yang digunakan adalah 'input', yang akan bekerja secara real-time saat pengguna menggeser warna
colorPicker.addEventListener('input', function() {
    // 3. Ambil nilai (value) warna yang dipilih oleh pengguna
    const selectedColor = colorPicker.value;
    
    // 4. Terapkan warna tersebut ke properti 'color' (warna teks) dari elemen dynamicText
    dynamicText.style.color = selectedColor;
});
