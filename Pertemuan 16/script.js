// tanpa [erulangan]
console.log("belajar perulangan")
console.log("belajar perulangan")
console.log("belajar perulangan")

// perulangan dengan for
for (let i=1; i<= 5; i++){
    console.log("perulangan denga for:" + i);
}

// perulangan dengan while
let angka =1;
while (angka <= 5){
    console.log("perulangan dengan while:" + angka);
        angka++;
}

// perulangan dengan do while
let x =6;
do{
    console.log("perulangan dengan do while : " + x);
    x++;
} while (x <= 5);

// perulangan array dengan for biasa 
let mahasiswa = ["Budi", "Agus", "Suci", "Citra"]
for (let i=0; i<=mahasiswa.length; i ++){
    console.log(mahasiswa[i]);
}

// perulangan for of
let buah = ["apel", "Anggur", "Melon", "Semangka"];
for (item of buah){
    console.log(item);
}

// perulangan for in digunakan untuk porperti objek
let motor ={
    merek: "honda",
    model: "Vario",
    warna: "hitam",
};
for (let data in motor) {
    console.log(data);
}
// perulangan dengan break
for ( let y = 1; y<=10; y++){
    if(y === 7) {
        break;
    }
    console.log(y);
}

// peurlangan dengan continue langsung melawati / ke skip 
for (let z= 1; z<= 10; z++){
    if (z ===7){
        continue;
    }
    console.log(z);
}

// contoh kasus untuk menghitung nilai mahasiswa
// web 1 = 90, audit = 80, crm = 100

let nilai = [90,80,100,60,70];
let Totalnilai = 0;
for ( let i= 0; i<nilai.length; i++){
    Totalnilai += nilai[i];
}
let rataRata = Totalnilai/nilai.length;
// menampilkan output
console.log("Rata-rata Nilai :" + rataRata);

// contoh kasus belanja
let barang = ["Baju","Sepatu","Tas","Jam"];
let hargaBarang = [200000,140000,540000,5000000];

let totalPembelian =0;

// menampilkan pembelian
console.log("==Daftar belanja==");
for ( let i= 0; i< barang.length; i++){
    console.log(barang[i] + ": Rp " + hargaBarang[i]);

    totalPembelian += hargaBarang[i];
}
// Menampilkan total
console.log("===========");
console.log("Total belanja :" + totalPembelian);

// Tabungan mahasiswa
let saldoAwal = 470000;
let tabunganBulanan = 1000000;
let jumlahBulan = 18;

console.log("SIMULASI TABUNGAN MAHASISWA");

let saldo = saldoAwal;

for(let bulan = 1; bulan<jumlahBulan; bulan++){
    saldo = saldo + tabunganBulanan;

    console.log("Bulan ke-" +bulan + "Saldo Rp." + saldo);
}
console.log("Total Tabungan : Rp." + saldo);
