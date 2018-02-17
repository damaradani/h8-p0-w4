//Exercise 18 week 4 Logic Challenge - Kali Terus (Rekursif)

/*Problem
Diberikan sebuah function kaliTerusRekursif(angka) yang menerima satu parameter
berupa angka. Function akan memproses angka yang lebih dari satu digit
menjadi satu digit dengan melakukan perkalian.
Bila masih lebih dari satu digit, terus lakukan perkalian setiap digit-nya
untuk pada akhirnya mendapatkan satu digit.

Wajib menggunakan rekursif untuk berlatih rekursif,
namun kamu boleh menggunakan looping juga disini.

Contoh:

3 => 3, karena sudah satu digit
24 => 8. Karena 24 dua digit, maka kita lakukan 2 * 4 = 8.
8 satu digit, maka hasilnya adalah 8.

654 => 0. Karena 654 tiga digit, maka lakukan 6 * 5 * 4 = 120.
120 tiga digit, maka lakukan 1 * 2 * 0 = 0. 0 satu digit, maka hasilnya adalah 0.
*/

function kaliTerusRekursif(angka) {
  /*var kali = 1;
  var angkaStr = String(angka);
  if(angkaStr.length === 1){
      return angka;
  }else{
      for(var i = 0; i < angkaStr.length; i++){
        kali *= parseInt(angkaStr[i]);
      }
      var kali2 = String(kali);
      if(kali2.length === 1 ){
          return kali;
      }else{
          kali = 1;
          for(var j = 0; j < kali2.length; j++){
              kali *= parseInt(kali2[j]);
          }
          var kali3 = String(kali);
          if(kali3.length === 1){
              return kali;
          }else{
              kali = 1;
              for(var k = 0; k < kali3.length; k++){
                  kali *= parseInt(kali3[k]);
              }
              return kali;
          }

      }
  }*/
  let numStr = String(angka);
  let hasilKali = 1;

  if(numStr.length === 1){
      return hasilKali*angka;
  }else{
      for(let i = 0; i < numStr.length; i++){
          hasilKali *= parseInt(numStr[i]);
      }
      //console.log(hasilKali);
      return kaliTerusRekursif(hasilKali);
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
