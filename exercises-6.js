function loopingPertama(firstNum, lastNum) {
    let i = firstNum;
    while (i < lastNum) {
        i+=2;
        console.log(i + " - I love coding");
    }
}

function loopingKedua(firstNum, lastNum) {
    let i = firstNum;
    while (i >= lastNum) {
        console.log(i + " - I will become fullstack developer");
        i-=2;
    }
}

function loopingKetiga(firstNum, lastNum) {
    for (let i = firstNum; i <= lastNum; i++) {
        console.log(i + " - I love coding");
    }
}

function loopingKeempat(firstNum, lastNum) {
    for (let i = firstNum; i > lastNum; i--){
        console.log(i + " - I will become fullstack developer");
    }
}

function ganjilGenap(firstNum, lastNum) {
    for (let i = firstNum; i <= lastNum; i++) {
        if (i % 2 !== 0) {
            console.log(i + " Ganjil");
        } else {
            console.log(i + " Genap");
        }
    }
}

function kelipatan3(firstNum, lastNum) {
    for(let i = firstNum; i <= lastNum; i+=2){
        if(i % 3 === 0){
            console.log(i + " Kelipatan 3")
        }
    }
}

function kelipatan6(firstNum, lastNum) {
    for(let i = firstNum; i <= lastNum; i+=5){
        if(i % 6 === 0){
            console.log(i + " Kelipatan 6")
        }
    }
}

function kelipatan10(firstNum, lastNum) {
    for(let i = firstNum; i <= lastNum; i+=9){
        if(i % 10 === 0){
            console.log(i + " Kelipatan 10")
        }
    }
}

console.log("pertama");
loopingPertama(0, 20);
console.log("\nKedua");
loopingKedua(20, 2);
console.log("\nKetiga");
loopingKetiga(1, 20);
console.log("\nKempat");
loopingKeempat(20, 0);
console.log("\nGanjil dan Genap");
ganjilGenap(1, 100);
console.log("\nKelipatan 3");
kelipatan3(1, 100);
console.log("\nKelipatan 6");
kelipatan6(1, 100);
console.log("\nKelipatan 10");
kelipatan10(1, 100);