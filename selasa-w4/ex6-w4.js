//Exercise 6 week 4 Logic Challenge - Hitung huruf
/*Problem:
Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string.
Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang
paling besar.
Contoh: "Today, is the greatest day ever!" akan me-return "greatest"
karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu.
Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.
*/

/* Mencari kalimat yang memiliki huruf perulangan yang paling banyak
function hitungHuruf(kata) {
  var arrKata = kata.split(' ');
  var hasilKata = '';
  var jumlahHuruf = 1;

  for(var h = 0; h < arrKata.length; h++){

      var counter = 0;

      for(var i = 0; i < arrKata[h].length; i++){

            for(var j = i; j <arrKata[h].length; j++){
                if(arrKata[h][i] === arrKata[h][j]){
                  counter += 1;

                }

                if(jumlahHuruf < counter){

                  hasilKata = arrKata[h];
                  jumlahHuruf += 1;

                }

            }

            counter = 0;
      }

  }

  if(jumlahHuruf === 1){
      return -1;
  }else{
      return hasilKata;
      //return 'Hasil kalimat : '+hasilKata+'\nHuruf Sama : '+hurufSama+'\nJumlah hurufnya ; '+jumlahHuruf+'\n'+counter2+'\n';
  }

}
*/

//Mencari kalimat yang memilik jumlah huruf sama yang paling banyak dalam 1 kalimat
function hitungHuruf(kata){
  var arrKata = kata.split(' ');
  var hasilKata = '';
  var jumlahKataSama = 0;

  for( var h = 0; h < arrKata.length; h++){
    var hurufSama = [];
    var counter = 0;

    for(var i = 0; i < arrKata[h].length; i++){
        for(var j = i; j < arrKata[h].length; j++){
            if(arrKata[h][i] === arrKata[h][j]){
              counter += 1;
            }
        }

        if(counter > 1){
            hurufSama.push(arrKata[h][i]);
        }

        counter = 0;
    }

    //Mencari jumlah huruf yang sama dalam 1 kalimat
    for(var z = 0; z < hurufSama.length; z++){
        for(var x = 0; x < hurufSama.length; x++){
            if(z !== x){
                if(hurufSama[z] === hurufSama[x]){
                    hurufSama.splice(x, 1);
                }
            }
        }
    }

    //Cek apabila kalimat sekaranag memiliki jumlah huruf yang lebih besar dari kalimat sebelumnya
    if(jumlahKataSama < hurufSama.length){
        jumlahKataSama = hurufSama.length;
        hasilKata = arrKata[h];
    }

  }

  if(hasilKata !== ''){
      return hasilKata;
  }else{
      return -1;
  }

}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau

//Tes lain
console.log(hitungHuruf('aabbcc ddddeee'));
console.log(hitungHuruf('abcdefg'));
