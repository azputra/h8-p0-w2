var tanggal = 29; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2201; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

function kalender(tgl, bln, thn){
    if (tgl < 1 || tgl > 31) {
        console.log(`Tanggal hanya ada dari 1 sampai 31`)
    } else if(thn < 1900 || thn > 2200){
        console.log(`Saat ini tahun hanya bisa di isi dari 1900 sampai 2200`)
    } else{
        switch (bln) {
            case 1: {console.log(`${tgl} Januari ${thn}`)} break;
            case 2: {if (tgl > 28){
                    console.log(`Tanggal februari hanya sampai 28`)
                    } else {
                        console.log(`${tgl} Februari ${thn}`)
                    }} break;
            case 3: {console.log(`${tgl} Maret ${thn}`)} break;
            case 4: {console.log(`${tgl} April ${thn}`)} break;
            case 5: {console.log(`${tgl} Mei ${thn}`)} break;
            case 6: {console.log(`${tgl} Juni ${thn}`)} break;
            case 7: {console.log(`${tgl} Juli ${thn}`)} break;
            case 8: {console.log(`${tgl} Agustus ${thn}`)} break;
            case 9: {console.log(`${tgl} September ${thn}`)} break;
            case 10: {console.log(`${tgl} Oktober ${thn}`)} break;
            case 11: {console.log(`${tgl} November ${thn}`)} break;
            case 12: {console.log(`${tgl} Desember ${thn}`)} break;
            default: {console.log(`Bulan Hanya ada dari 1 sampai 12`)} break;
        }
    }
}

kalender(tanggal, bulan, tahun)