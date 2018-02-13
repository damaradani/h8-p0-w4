//Exercise 8 week 4 Logic Challenge - Mengurutkan Abjad

/*Problem :
Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string.
Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya
dari a hingga z. Contohnya, halo akan menjadi ahlo.
Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.
*/

function urutkanAbjad(str) {
  var abjad = 'abcdefghijklmnopqrstuvwxyz';
  var abjadNum = [];

  for(var i = 0; i < str.length; i++){
    for(var j = 0; j < abjad.length; j++){
      if(str[i] === abjad[j]){
        abjadNum.push(j);
      }
    }
  }

  //Mengurutkan huruf / angka abjad nya kalo pake sort
  abjadNum.sort(function(a,b){return a > b});

  var afterSort = '';

  for(var k = 0; k < abjadNum.length; k++){
    for(var l = 0; l < abjad.length; l++){
      if(abjadNum[k] === l){
        afterSort += abjad[l];
      }
    }
  }
  return afterSort;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
