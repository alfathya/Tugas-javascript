//soal nomor 1

let divisi = prompt("Masukkan divisi anda: ")


if (divisi == "CEO"){
    console.log("Tugas anda memimpin perusahaan")
    alert("Tugas anda memimpin perusahaan")
}
else if (divisi == "CTO"){
    console.log("Tugas anda memimpin teknologi dalam perusahaan")
    alert("Tugas anda memimpin teknologi dalam perusahaan")
}
else if (divisi == "HR") {
    console.log("Tugas anda merekrut pegawai baru")
    alert("Tugas anda merekrut pegawai baru")
}
else if (divisi == "Programmer"){
    console.log("Tugas anda membangun aplikasi")
    alert("Tugas anda membangun aplikasi")
}
else{
    console.log("divisi anda tidak terdaftar")
    alert("divisi anda tidak terdaftar")
}


//soal nomor 2

let bilangan1 = prompt ("Masukkan angka pertama: ")
let bilangan2 = prompt ("Masukkan angka kedua: ")

if (bilangan1 > bilangan2){
    console.log("Angka pertama lebih besar")
    alert("Angka pertama lebih besar")
}
else if (bilangan1 < bilangan2){
    console.log("Angka kedua lebih besar")
    alert("Angka kedua lebih besar")
}
else{
    console.log("Kedua angka sama besar")
    alert("Kedua angka sama besar")
}

//soal nomor 3

const hari = 8;

switch (hari){
    case 1:
        console.log("Minggu");
        break;
    case 2:
        console.log("Senin");
        break;
    case 3:
        console.log("Selasa");
        break; 
    case 4:
        console.log("Rabu");
        break; 
    case 5:
            console.log("Kamis");
            break;
    case 6:
        console.log("Jumat");
        break;
    case 7:
        console.log("Sabtu");
        break;
    default:
        console.log("Maaf data yang anda input salah")
}

//soal nomor 4

const arah = "LEFT"
switch (arah){
    case "UP":
        console.log("Karakter berjalan keatas")
        break;
    case "RIGHT":
        console.log("Karakter berjalan kekanan")
        break;
    case "BOTTOM":
        console.log("Karakter berjalan kebawah");
        break;
    case "LEFT":
        console.log("Karakter berjalan kekiri")
}
