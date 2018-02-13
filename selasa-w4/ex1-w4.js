//Exercise 1 week 4 Logic Challenge - Angka Prima

/* Problem
Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter
berupa angka. Function akan me-return true jika angka tersebut adalah
bilangan prima. Jika tidak, return false
*/


function angkaPrima(angka) {

  if( ((angka / 2) / 2) % 1 - 0.75 === 0 ){
    return true;
  }else{
    return false;
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false

console.log(angkaPrima(83)); // true
console.log(angkaPrima(85)); // false
