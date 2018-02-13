//Exercise 7 week 4 Logic Challenge - Digit Perkalian Minimum
/*Problem:
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter
angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan
faktor angka parameter tersebut, Contoh, jika angka adalah 24,
maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6.
Dari antara faktor tersebut, yang digit nya paling sedikit
adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.
*/

function digitPerkalianMinimum(angka) {
  //var faktor = '';
  //var hasilKali = 0;
  //var numStr = '';
  var hasil;

  for(var i = 1; i <= angka; i++){
    //faktor = i+' * '+(angka / i);
    //hasilKali = i * (angka / i);
    var numStr = String(angka /i);

    if(i === angka){
      hasil = numStr.length+1;
    }else if(angka % i !== 0 && angka % i !== angka){
      break;
    }else if (angka / i < 10) {
      hasil = numStr.length+1;
    }else if(angka / i === 10){
      hasil = numStr.length;
    }else { //if (angka / i < 100) {
      hasil = numStr.length+1;
    }

    //console.log(faktor);
    //console.log(hasilKali+'\n');
  }
  return hasil;
  //return hasil+'\n===========';
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2

// Tes lain
console.log(digitPerkalianMinimum(200)); //
console.log(digitPerkalianMinimum(2000)); // 
console.log(digitPerkalianMinimum(100));
