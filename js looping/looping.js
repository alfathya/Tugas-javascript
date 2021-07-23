//soal 1

for (let i = 1 ; i<=100 ; i++){
    document.write("User ke -" + i + "<br>")
}

//soal 2

for (let i = 0 ; i <= 19 ;){
    console.log(i);
    i+=2;
}

//soal 3

for (let i=0; i<=20; i++){
    if (i % 2 == 0){
        console.log(i + " angka genap")
    } else{
        console.log(i+ " angka ganjil")
    }
}

//soal 4

let count = 0;
while (true) {
    let ulang = confirm("Apakah anda mau mengulang?");
    if (ulang == false) {
        console.log("Perulangan telah dilakukan sebanyak " + count);
        alert("Perulangan telah dilakukan sebanyak " + count);
        break;
    } else {
        count++;
    }
}
//soal 5
do{
    let kuis = prompt("Sebutkan kepanjangan dari nama IB (Impact Byte)?")
    if (kuis == "Impact Byte"){
        alert("Selamat Jawaban Anda Benar")
        break
    }
}
while(true)