let buku = [
    {"nama": "sherlock", "jumlah":2},
    {"nama": "lupin", "jumlah":2},
    {"nama": "aladin", "jumlah":2},
];

function pinjamBuku() {
    let jumlah = parseInt(document.getElementById("jumlah").value);
    let bukuPilihan = document.getElementById("buku").value;

    if (isNaN(jumlah) || jumlah === 0) {
        alert("Silahkan masukkan jumlah buku yang valid.");
        return;
    }

    let bukuDitemukan = false;
    for (let i = 0; i < buku.length; i++) {
        if (buku[i].nama === bukuPilihan) {
            bukuDitemukan = true;
            if (jumlah > buku[i].jumlah) {
                alert("Maaf, stok buku tidak mencukupi.");
            } else {
                alert("Silahkan ambil buku Anda.");
            }
            break;
        }
    }

    if (!bukuDitemukan) {
        alert("Buku tidak ditemukan.");
    }
}
