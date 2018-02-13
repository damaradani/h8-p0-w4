//Exercise 6 week 4 Logic Challenge - Hitung huruf
/*Problem:
Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string.
Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang
paling besar.
Contoh: "Today, is the greatest day ever!" akan me-return "greatest"
karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu.
Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.
*/

function hitungHuruf(kata) {
  var arrKata = kata.split(' ');
  var hasilKata = '';
  var jumlahHuruf = 1;
  var hurufSama = '';

  for(var h = 0; h < arrKata.length; h++){

      var counter = 0;

      for(var i = 0; i < arrKata[h].length; i++){
        
            for(var j = i; j <arrKata[h].length; j++){
                if(arrKata[h][i] === arrKata[h][j]){
                  counter += 1;
                }

                if(jumlahHuruf < counter){
                  hurufSama = arrKata[h][i];
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
      //return hasilKata+' '+hurufSama+' '+jumlahHuruf+'\n';
      //return hasilKata;
      return 'Hasil kalimat : '+hasilKata+'\nHuruf Sama : '+hurufSama+'\nJumlah hurufnya ; '+jumlahHuruf+'\n';
  }
  /*var hurufSama = '';
  var jumlahHuruf = 1;
  var counter = 0;

  for(var i = 0; i < arrKata[3].length; i++){
      for(var j = i; j <arrKata[3].length; j++){
          if(arrKata[3][i] === arrKata[3][j]){
            counter += 1;
          }

          if(jumlahHuruf < counter){
            hurufSama = arrKata[3][i];
            //hurufSama = arrKata[h];

            jumlahHuruf += 1;
          }
      }
      counter = 0;
  }
  return hurufSama+' '+jumlahHuruf;*/
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
