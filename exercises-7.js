const rows = 5; // input the number of rows

function asteriks1(num) {
    for (let i = 0; i < num; i++) {
        console.log("*")
    }
}

function asteriks2(num) {
    for (let i = 0; i < num; i++) {
        let result = "";
        for (let j = 0; j < num; j++) {
            result += "*"
        }
        console.log(result)    
    }
}

function asteriks3(num) {
    for (let i = 0; i < num; i++){
        let result = "";
        for (let j = 0; j <= i; j++){
            result += "*"
        }
        console.log(result)
    }
}

asteriks1(rows)
console.log("\n")
asteriks2(rows)
console.log("\n")
asteriks3(rows)