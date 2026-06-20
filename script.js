function hitungTPM() {
    const volume = document.getElementById("volume").value;
    const jam = document.getElementById("jam").value;
    const menit = document.getElementById("menit").value;
    const faktor = document.getElementById("faktor").value;

    // validasi input kosong
    if (volume === "" || (jam === "" && menit === "")) {
        alert("Mohon lengkapi data yang masih kosong.");
        return;
    }

    const totalMenit = (Number(jam) * 60) + Number(menit);

    // hindari pembagian 0
    if (totalMenit <= 0) {
        alert("Durasi waktu tidak valid.");
        return;
    }

    const tpm = Math.round((Number(volume) * Number(faktor)) / totalMenit);

    document.getElementById("hasil").innerText =
        "TPM: " + tpm + " tetes/menit";
}