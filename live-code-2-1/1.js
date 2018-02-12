/*
==================================
Array Mastery: Smallest Number
==================================
Nama:________
[INSTRUKSI]
Function smallestNumber akan menerima satu parameter berupa array yang berisikan angka, dimana dengan asumsi kemungkinan angka dari 0 - 999, dan angka dalam array minimal 3 angka, dan tidak ada angka yang bernilai sama (ini adalah info tese case, bukan harus divalidasi/dicek).
smallestNumber akan mengembalikan angka yang terkecil dari array tersebut.
[CONTOH]
input: [4, 2, 5, 1]
output: 1
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
- Dilarang menggunakan .sort!
- Dilarang menggunakan built in object (Math.min, Math.max, dsb)
*/

function smallestNumber(numbers) {
  // Code here
  //var Indeks1 = 1;
  var smallNum = numbers[0];

  for (var i = 1; i < numbers.length; i++){
      if(numbers[i] < smallNum){
        smallNum = numbers[i];
        //Indeks1++;
      }
      //console.log(smallNum+'\n');
      //Indeks1++;
  }


  return smallNum;
}

// TEST CASES
console.log(smallestNumber([5, 2, 1, 4])); // 1
console.log(smallestNumber([999, 5, 0, 1, 4, 998])); // 0
console.log(smallestNumber([15, 32, 11, 14])); // 11
console.log(smallestNumber([5, 4, 3, 2, 1, 0])); // 0
console.log(smallestNumber([123, 321, 143, 313])); // 123
