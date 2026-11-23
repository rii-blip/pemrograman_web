const btnKabur = document.getElementById("btnKabur");
const arena = document.querySelector(".arena");

btnKabur.addEventListener("mouseover", function () {
  // Batas gerak agar tombol tetap di dalam area .arena
  const maxX = arena.clientWidth - btnKabur.offsetWidth - 16;
  const maxY = arena.clientHeight - btnKabur.offsetHeight - 16;

  // Hitung posisi acak baru (minimal 16px dari tepi)
  const randomX = Math.max(16, Math.floor(Math.random() * maxX));
  const randomY = Math.max(50, Math.floor(Math.random() * maxY));

  // Hilangkan transform tengah agar koordinat left/top bekerja presisi
  btnKabur.style.transform = "none";
  btnKabur.style.left = `${randomX}px`;
  btnKabur.style.top = `${randomY}px`;
});