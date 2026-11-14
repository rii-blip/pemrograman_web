// ex funtion 1
function sapa (nama){
    console.log("Hallo nama saya " + nama);
}

// ex function
sapa ("joko");
sapa ("juli");

// ex function 2
function perkenalan (nama, usia, alamat){
    console.log ("nama :" + nama);
    console.log ("usia ;" + usia);
    console.log ("alamat ;" + usia);
}

// panggil function 2
perkenalan ("Alience", "24", "Paris");

// function with return
function hitungluas(panjang, lebar){
    return panjang * lebar;
}
let hasil = hitungluas(10.5);
console.log("luas :" + hasil);

// ex function with expression
const tambah = function(a,b){
    return a+b;
};
console.log(tambah(10,6));

// object
let mhs = {
    nama : "budi",
    nim : "20246578465",
    kelas :"05SISE004",

};
mhs.semester = "5";
mhs.nama = "coki";
console.log(mhs);
console.log(mhs.nama);

// method
let mobil ={
    merek : "honda",
    model : "civic",
    warna : "hitam",
    tahun :"2026",

    tampilkan : function(){
        console.log("merek :" + this.merek);
        console.log("model ;" + this.model);
        console.log("model ;" + this.warna);
    },

};

// panggil data
mobil.tampilkan();

// method 2
let kalkulator = {
    tambah : function(a,b){
        return a+b;
    },
};
console.log(kalkulator.tambah(10,9));
console.log(kalkulator.tambah(40,8));


//Studi kasus menghitung hasil akhir dan menetukan grade

let mahasiswa ={
    nama : "jule",
    nim : "241656653700731",
    kelas : "05sise004",
    prodi : "Sistem informasi",
    nilaiTugas : 80,
    nilaiUTS : 70,
    nilaiUAS : 80,
    nilaiAbsen : 21,
    totalhari : 21,
    // Membuat Method untuk menghitung nilai akhir
    hitungNilaiAkhir : function (){
        var persentaseAbsen = (this.nilaiAbsen / this.totalhari) * 100;
        return this.nilaiTugas * 0.2 + // 20% dari nilai tugas
               this.nilaiUTS * 0.3 + // 30% dari nilai UTS
               this.nilaiUAS * 0.4 + // 40% dari nilai UAS
               this.nilaiAbsen * 0.1; // 10% dari nilai absen
    },
    // membuat method untuk menampilkan data mahasiswa 
    tampilkanData : function (){
        console.log ("Nama ;" + this.nama);
        console.log ("Nim ;" + this.nim);
        console.log ("Kelas ;" + this.kelas);
        console.log ("Program studi ;" + this.prodi);
        console.log ("Nilai Akhir ;" + this.hitungNilaiAkhir);
    },
};
// membuat function untuk menetukan grade
function tentukanGrade (nilai){
    if (nilai >= 85){
        return "A";
    } else if(nilai >= 79){
        return "B";
    } else if( nilai >= 69){
        return "C";
    } else if ( nilai >= 59){
        return "D";
    } else {
        return "E"
    }
}

// Panggil mthod objeck
mahasiswa.tampilkanData();
// panggil 
let nilaiAhir = mahasiswa.hitungNilaiAkhir();
console.log("grade :" , tentukanGrade(nilaiAhir));