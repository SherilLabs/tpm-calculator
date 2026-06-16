function hitungTPM() {
    const volume = document.getElementById("volume").value;
    const jam = document.getElementById("jam").value;
    const menit = document.getElementById("menit").value;
    const faktor = document.getElementById("faktor").value;

    const totalMenit = (jam * 60) + Number(menit);

    const tpm = Math.round((volume * faktor) / totalMenit);

    document.getElementById("hasil").innerText =
        "TPM: " + tpm + " tetes/menit";
}

function hitungTPM() {
    const volume = document.getElementById("volume").value;
    const jam = document.getElementById("jam").value;
    const menit = document.getElementById("menit").value;
    const faktor = document.getElementById("faktor").value;

    if (volume === "" || (jam === "" && menit === "")) {
        alert("Mohon lengkapi data yang masih kosong.");
        return;
    }

    const totalMenit = (jam * 60) + Number(menit);

    const tpm = Math.round((volume * faktor) / totalMenit);

    document.getElementById("hasil").innerText =
        "TPM: " + tpm + " tetes/menit";
}
