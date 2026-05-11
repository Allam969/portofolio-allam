// =============================================
// PORTFOLIO - Ahmad Allam Mubarok
// script.js
// =============================================

// Fungsi sapa pengunjung (tombol di about.html)
function sapaPengunjung() {
  alert("Halo! Terima kasih sudah mengunjungi portofolio saya!\nSemoga harimu menyenangkan! 😊");
}

// Fungsi pindah halaman (bisa dipakai di mana saja)
function pindahHalaman(url) {
  window.location.href = url;
}

// Fungsi kirim pesan (form di contact.html)
function kirimPesan() {
  var nama  = document.getElementById("inputNama").value.trim();
  var email = document.getElementById("inputEmail").value.trim();
  var pesan = document.getElementById("inputPesan").value.trim();

  if (nama === "" || email === "" || pesan === "") {
    alert("Mohon isi semua field sebelum mengirim pesan!");
    return;
  }

  alert("Terima kasih, " + nama + "!\nPesan kamu sudah diterima. Saya akan segera membalas! 📩");

  document.getElementById("inputNama").value  = "";
  document.getElementById("inputEmail").value = "";
  document.getElementById("inputPesan").value = "";
}

// Animasi scroll - elemen muncul saat discroll
document.addEventListener("DOMContentLoaded", function () {
  var items = document.querySelectorAll(".exp-item, .contact-card, .section-box");

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  items.forEach(function (el) {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });
});
