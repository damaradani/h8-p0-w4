//Exercise 10 week 4 Logic Challenge - Check AB
/*Problem
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string.
function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat
karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali.
Jika tidak ditemukan sama sekali, kembalikan nilai false.
*/

function checkAB(str) {
  var arrA = 0;//[];
  var arrB = 0;//[];
  var falseResult = '';

  for(var i = 0; i < str.length; i++){
    if(str[i] === 'a' || str[i] === 'A'){
      if(str[i+4] === 'b' || str[i-4] === 'b'){
        return true;
      }else{
        falseResult = 'false';
      }
    }else if (str[i] === 'b' || str[i] === 'B') {
      if(str[i+4] === 'a' || str[i-4] === 'a'){
        return true;
      }else{
        falseResult = 'false';
      }
    }
  }
  return falseResult;

}
//jarak dari b atau a -> +4 - 4
// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false

//Tes lagi
console.log(checkAB('ba')); // should be false
console.log(checkAB('baba')); //
console.log(checkAB('baab')); //
console.log(checkAB('abba')); //
console.log(checkAB('aaaabaaa')); //
console.log(checkAB('bbbabbb')); //
