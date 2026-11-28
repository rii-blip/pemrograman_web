// DOM Selection

const judul = document.getElementById('judul');

judul.innerHTML = 'INI DIUBAH DENGAN JAVASCRIPT';
judul.style.backgroundColor = "pink";
judul.style.color = "Purple";
judul.style.fontFamily = "comic sans ms";
judul.style.fontStyle = "bold";


// deklarasi by tag name
const p = document.getElementsByTagName('p');

p[0].style.backgroundColor = "red";
p[1].style.backgroundColor = "orange";
p[2].style.backgroundColor = "yellow";
p[3].style.backgroundColor = "green";

// ubah warna font yang ada di dalam p (ubah semua)
for (i=0; i<p.length ; i++){
    p[i].style.color = "white";
    p[i].innerHTML = "Paragraf diubah ke " + [i];
    p[i].style.fontStyle = "bold";
    p[i].style.fontSize = "25px";
}

// ubah warna font yang ada di dalam p (salah 1 aja)
const p2 = document.getElementsByTagName ('p2');
p[2].style.color ="black";


// deklarasi by class name
const l1 = document.getElementsByClassName ("l1")[0];

l1.style.backgroundColor = "lightgreen";
l1.innerHTML = "Urutan Ke-1";

const l2 = document.getElementsByClassName ("l2")[0];

l2.style.backgroundColor = "lightblue";
l2.innerHTML = "Urutan Ke-2";

const l3 = document.getElementsByClassName ("l3")[0];

l3.style.backgroundColor = "lightpink";
l3.innerHTML = "Urutan Ke-3";

// deklarasi query selector
const sectionA = document.querySelector
("Section#a");

sectionA.style.backgroundColor = "lightgrey";

const sectionB = document.querySelector
("Section#b");

sectionB.style.backgroundColor = "pink";

// Ubah tag a jadi "link instagram" dan center
const a = document.getElementsByTagName('a');

a[0].style.backgroundColor = "orange";
a[0].style.textAlign = "center";
a[0].innerHTML = "Link Instagram";