// Mengambil elemen HTML yang dibutuhkan
const modal = document.getElementById("posterModal");
const imgPoster = document.getElementById("imgPoster");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close-btn")[0];
const buttons = document.querySelectorAll(".btn-lomba");

// Menambahkan event listener klik pada setiap tombol
buttons.forEach(button => {
    button.addEventListener("click", function() {
        // Mengambil nama file gambar dari atribut data-poster
        const posterSrc = this.getAttribute("data-poster");
        const lombaName = this.innerText;

        // Membuka modal dan memasukkan gambar
        modal.style.display = "flex";
        imgPoster.src = posterSrc;
        captionText.innerHTML = lombaName;
    });
});

// Menutup modal jika tombol 'X' diklik
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Menutup modal jika area gelap di luar gambar diklik
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});