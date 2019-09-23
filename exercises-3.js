var nama = 'a';
var peran = 'asd';

function gameProxytia(nama, peran) {
    if (nama === "") {
        console.log(`Nama Harus Di isi`)
    } else if(nama !== "" && peran === ""){
        console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)
    } else if (nama !== "" && peran === "Ksatria"){
        console.log(`Selamat datang di Dunia Proxytia, ${nama}
Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`)
    } else if (nama !== "" && peran === "Tabib"){
        console.log(`Selamat datang di Dunia Proxytia, ${nama}
Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`)
    } else if (nama !== "" && peran === "Penyihir"){
        console.log(`Selamat datang di Dunia Proxytia, ${nama}
Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!`)
    } else {
        console.log(`Halo ${nama}, untuk saat ini anda hanya dapat memilih peran Ksatria, Tabib, dan Penyihir
Silahkan pilih peran yang ada dalam kategori`)
    }
}

gameProxytia(nama, peran)