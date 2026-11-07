// let nama = "Busdi" //string
// let umur = 25; //number
// let tinggi badan = 167.3 //float
// let berat badan; //undifine
// let pacar = nul //nul

// beratBadan = 55;

// // if else
// // if (pacar == null) {
// //    pacar ="jomblo"
// // } else {
// //    pacar ="sudah punya pacar"
// // }

// // switch case
// switch (pacar){
//     case 1:
//         pacar = "sudah punya pacar";
//         break;
//     case 2:
//         pacar = "sudah punya pacar pacar";
//         break;
//     case 3:
//         pacar = "sudah banyak pacar";
//         break;
//     default:
//         pacar = "jomblo"
//         break;    

// }


// //alert('Hallo nama saya ${nama}, umur saya saat ini ${umur}, tinggi badan saya sekitar ${tinggi badan}cm dengan berat badan saya saat ini ${berat badan} dan untuk status hubungan saya saat ini ${pacar}');

// console.log('Hallo nama saya ${nama}, umur saya saat ini ${umur}, tinggi badan saya sekitar ${tinggi badan}cm dengan berat badan saya saat ini ${berat badan} dan untuk status hubungan saya saat ini ${pacar}');

// let saldoAwal = 12000000;
// let saldoTambahan = 2000000;
// let hutang = 8000000;
// let saldoAkhir = saldoAwal + saldoTambahan - hutang;

// console.log('saldo awal bulan saya sebesar ${saldoAwal} dengan tambahan saldo sebesar ${saldoTambahan}, akan tetapi saya mempunyai hutang paylatter sebesar ${hutang} jadi sisa saldo saya saat ini sebesar ${saldoAkhir}');

// // ARRAY
// namaMhs = ["Budi","joko","ahmad"];
// namaMhs.push("Ghina","devi");
// console.log(namaMhs);

// //FOR
// for (i=0; i<=20; i++){
//     console.log("hey bro!!");    
// }

// for (let i = 0; i < namaMhs, length; i++){
//     console.log(namaMhs[i]);
// }
     
function  hitungNilai(){


    // ambil data input
    let nama = document.getElementById("nama").value;
    let nilai = Number(document.getElementById ("nilai").value);
    
    let hasil ="";

    //validasi input
    if (nama==="" || document.getElementById ("nilai").value === ""){
        hasil = "Nama dan nilai harus di isi!!";
    }

    //cek rentang Nilai
    else if (nilai < 0 || nilai > 100){
        hasil = "Nilai harus di isi 0-100"
    }

    //check kelulusan
    else if (nilai>= 75){
        hasil = nama + " dinyatakan Lulus";
    } else {
        hasil = nama + " dinyatakan Tidak Lulus";    
    }

    //menampilkan hasil ke halaman web
    document.getElementById("hasil").innerHTML = hasil ;
} 