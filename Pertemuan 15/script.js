function hitungDiskon() {  
    // Mengambil nilai dari input HTML berdasarkan id
    let namaPembeli = document.getElementById("namaPembeli").value.trim();
    let TotalBelanja = Number(document.getElementById("hargaBarang").value);
    let diskon = 0;

    // Validasi sederhana: pastikan nama dan total belanja terisi
    if (namaPembeli === "" || isNaN(TotalBelanja) || TotalBelanja <= 0) {
        alert("Silakan masukkan nama pembeli dan total belanja dengan benar!");
        return;
    }

    // Percabangan if...else if...else untuk menentukan persentase diskon
    if (TotalBelanja >= 500000) {
        diskon = 0.20; // Diskon 20%
    } else if (TotalBelanja >= 300000) {
        diskon = 0.15; // Diskon 15%
    } else if (TotalBelanja >= 100000) {
        diskon = 0.10; // Diskon 10%
    } else {
        diskon = 0;    // Diskon 0% di bawah 100rb
    }

    // Perhitungan jumlah potongan dan total yang harus dibayar
    let jumlahDiskon = TotalBelanja * diskon;
    let totalBayar = TotalBelanja - jumlahDiskon;

    // Fungsi bantu untuk memformat angka menjadi format Rupiah
    let formatRupiah = (angka) => {
        return "Rp " + angka.toLocaleString("id-ID");
    };

    // Menampilkan hasil ke elemen <p> di dalam HTML
    document.getElementById("resNama").innerText = "Nama Pembeli: " + namaPembeli;
    document.getElementById("resTotalBelanja").innerText = "Total Belanja: " + formatRupiah(TotalBelanja);
    document.getElementById("resDiskon").innerText = "Diskon: " + (diskon * 100) + "%";
    document.getElementById("resPotongan").innerText = "Jumlah Potongan: " + formatRupiah(jumlahDiskon);
    document.getElementById("resTotalBayar").innerText = "Total Bayar: " + formatRupiah(totalBayar);

    // Memunculkan kotak hasil (yang tadinya disembunyikan dengan display: none)
    document.getElementById("hasilContainer").style.display = "block";

    // Tetap menampilkan log di console browser untuk debugging jika diperlukan
    console.log("Nama Pembeli: " + namaPembeli);
    console.log("Total Belanja: Rp." + TotalBelanja);
    console.log("Diskon: " + (diskon * 100) + "%");
    console.log("Potongan : Rp." + jumlahDiskon);
    console.log("Total Bayar: Rp." + totalBayar);
}