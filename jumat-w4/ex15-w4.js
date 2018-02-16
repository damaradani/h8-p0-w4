//Exercise 15 week 4 Logic Challenge - Password Generator

/*Problem
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces,
dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini
untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan
huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu
(ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar
menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di
dalam string yang sudah kita manipulasi

NOTE:
Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces)
diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/

function changeVocals (str) {
  var vokalPlus = 'bjvfp';
  var vokal = 'aiueo';
  var vokalChanges = '';


  for(let i = 0; i < str.length; i ++){
      var changes = '';
      for(let j = 0; j < vokal.length; j++){
          if(str[i] === vokal[j].toUpperCase()){
              changes = vokalPlus[j].toUpperCase();
          }else if (str[i] === vokal[j].toLowerCase()) {
              changes = vokalPlus[j].toLowerCase();
          }

      }

      if(changes !== ''){
        vokalChanges += changes;
      }else{
        vokalChanges += str[i];
      }

      //changes = '';

  }

  return vokalChanges;

}

function reverseWord (str) {
  var reverseResult = '';
  for(let i = str.length-1; i >= 0; i--){
    reverseResult += str[i];
  }
  return reverseResult;
}

function setLowerUpperCase (str) {
  let result = '';
  for(let i = 0; i < str.length; i++){
      if(str[i] === str[i].toLowerCase()){
          result += str[i].toUpperCase();
      }else if (str[i] === str[i].toUpperCase()) {
          result += str[i].toLowerCase();
      }
  }
  return result;
}

function removeSpaces (str) {
  let space = '';
  for(let i = 0; i < str.length; i++){
      if(str[i] !== ' '){
          space += str[i];
      }
  }
  return space;
}

function passwordGenerator (name) {
  vocals = changeVocals(name);
  reverse = reverseWord(vocals);
  setCase = setLowerUpperCase(reverse);
  password = removeSpaces(setCase);
  if(password.length < 5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }else{
      return password;
  }

}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
