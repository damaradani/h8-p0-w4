//Exercise 5 week 4 Logic Challenge - Ubah Huruf
/*Problem:
Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string.
Function akan me-return sebuah kata baru dimana setiap huruf
akan digantikan dengan huruf alfabet setelahnya.
Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.
*/

function ubahHuruf(kata) {
  // you can only write your code here!
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
                  /*sama kaya
                  //[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                  //'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                  //'s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];*/

  var hasilKata = '';

  for(var i = 0; i < kata.length; i++){

      for(var j = 0; j < alphabet.length; j++){

          if(kata[i] === alphabet[j]){
              hasilKata += alphabet[j+1];
          }

      }

  }

  return hasilKata;


}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
