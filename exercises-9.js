function shoutOut() {
    return "Hallo Function!"
}
console.log(shoutOut()) //Menampilkan "Hallo Function!"

var num1 = 5;
var num2 = 6;
function calculateMultiply(num1, num2) {
    return num1 * num2
}

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

function processSentence(nama, umur, tempatTinggal, hobi) {
    return `Nama saya ${nama}, umur saya ${umur}, alamat saya di ${tempatTinggal} dan saya punya hobby yaitu ${hobi}!`
}

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"