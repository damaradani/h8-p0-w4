//Exercise 17 week 4 Logic Challenge - Total Digit (Rekursif)

/*Problem
Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu
parameter berupa angka. Function akan me-return nilai total dari
digit tersebut dengan menambahkan satu per satu angka dari digit paling depan
ke paling belakang.

Wajib menggunakan rekursif untuk berlatih rekursif!
Disarankan untuk tidak menggunakan looping for untuk soal ini.

Contoh:

512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8.
1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.
*/

function totalDigitRekursif(angka) {
  /* kalo pake looping
  var angkaStr = String(angka);
  var result = 0;

  for(var i = 0; i < angkaStr.length; i++){
    result += parseInt(angkaStr[i]);
  }

  return result;
  */
  var result = 0;
  function proses(num){
    var numStr = String(num);
    if(numStr.length == 1){
        return result+num;
    }else {
        result += parseInt(numStr[0]);
        var delNum = numStr.slice(1,numStr.length);
        return proses(parseInt(delNum));
    }

  }

  return proses(angka);

}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
