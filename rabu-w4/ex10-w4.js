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

  for(var i = 0; i < str.length; i++){
    if(str[i] === 'a' || str[i] === 'A'){
      //arrA.push(i);
      arrA += i;
    }else if (str[i] === 'b' || str[i] === 'B') {
      //arrB.push(i);
      arrB += i;
    }
  }
  //console.log(arrA+'\n'+arrB);
  if(arrA === 0 || arrB === 0){
    return false;
  }else if(arrA - arrB !== 1){
    return true;
  }else{
    return false+'kayanya';
  }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false

//Tes lagi
console.log(checkAB('ba')); // should be false
console.log(checkAB('baba')); // should be true
console.log(checkAB('baab')); // should be true
console.log(checkAB('abba')); // should be true
console.log(checkAB('aaaabaaaaaa')); //
console.log(checkAB('bbbabbb')); // 
