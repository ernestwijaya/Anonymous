function showMessage() {
  const message = document.getElementById("hiddenMessage");

  // Cek apakah pesan sedang tersembunyi
  const isHidden = message.classList.contains("hidden");

  if (isHidden) {
    // Jika tersembunyi → tampilkan pesan + confetti
    message.classList.remove("hidden");
    createConfetti();
  } else {
    // Jika sudah tampil → sembunyikan tanpa confetti
    message.classList.add("hidden");
  }
}

function createConfetti() {
  const colors = [
    "#ff4d6d",
    "#ffd700",
    "#00c2ff",
    "#7cff6b",
    "#ff8c00",
    "#b5179e",
    "#ffffff"
  ];

  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    // Warna acak
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    // Ukuran acak
    const size = Math.random() * 8 + 4;
    confetti.style.width = size + "px";
    confetti.style.height = size + "px";

    // Bentuk acak
    if (Math.random() > 0.5) {
      confetti.style.borderRadius = "50%";
    }

    // Posisi awal dari tengah tombol/layar
    confetti.style.left = "50%";
    confetti.style.top = "50%";

    // Arah gerak acak
    confetti.style.setProperty(
      "--x",
      (Math.random() - 0.5) * 800 + "px"
    );

    confetti.style.setProperty(
      "--y",
      (Math.random() - 0.7) * 600 + "px"
    );

    // Rotasi acak
    confetti.style.setProperty(
      "--r",
      Math.random() * 1080 + "deg"
    );

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 2000);
  }
}