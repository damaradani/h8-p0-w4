/*
==================================
Array Mastery: Group Odd Evens
==================================
Nama:________
[INSTRUKSI]
Function groupOddEven akan menerima satu parameter berupa array yang berisi number.
Function akan mengelompokkan setiap number yang ganjil (odd) dan setiap number yang genap (even),
dan akan mereturn sebuah string dengan format berikut:
"ODDS: <OddNum1>,<OddNum2>,<OddNum3> EVENS: <EvenNum1>,<EvenNum2>,<EvenNum3>"
aturan:
  - Apabila tidak ada angka ganjil, hanya tampilkan:
  "EVENS: <EvenNum1>, <EvenNum2>"
  - Apabila tidak ada angka genap, hanya tampilkan:
  "ODDS: <OddNum1>, <OddNum2>"
  - Apabila tidak ada angka sama sekali, tampilkan string kosong!
  - Angka tidak perlu diurutkan!
[CONTOH]
input: [1, 5, 8, 2, 3]
output: "ODDS: 1, 5, 3 EVENS: 8, 2"
input: [1, 1, 1]
output: "ODDS: 1, 1, 1"
input: [2, 8, 10]
output: "EVENS: 2, 8, 10"
[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
*/

/* pseudocode
CREATE FUNCTION 'groupOddEven()' with parameter 'students'

  SET 'genap' with empty Array
  SET 'ganjil' with empty Array
  SET 'i' with 0

  FOR 'i' to length of 'student' minus 1 DO
      IF value of 'student' index 'i' modulo 2 EQUALS WITH 0 then
          STORE 'genap' with value of 'students' index 'i'
      ELSE IF value of'student' index 'i' modulo 2 NOT EQUALS with 0 then
          STORE 'ganjil' with value of 'students' index 'i'
      ELSE
          DO FOR LOOPING
      END IF
  END FOR

  IF 'genap' is empty AND 'ganjil' is empty then
      DISPLAY ""
  ELSE IF 'ganjil' is empty then
      DISPLAY "EVENS: "+'genap'
  ELSE IF 'genap' is empty then
      DISPLAY "ODDS: "+'ganjil'
  ELSE
      DISPLAY "ODDS: "+'ganjil'+" "+"EVENS: "+'genap'
  END IF
*/

function groupOddEven(students) {

  var genap = [];
  var ganjil = [];
  for( var i = 0; i < students.length; i++){
    if(students[i]%2 === 0){
      genap.push(students[i]);
    }else if(students[i]%2 !== 0){
      ganjil.push(students[i]);
    }

  }

  if(ganjil.length === 0 & genap.length === 0){
    return '';
  }else if(genap.length === 0){
    return 'ODDS: '+ganjil;
  }else if(ganjil.length === 0){
    return 'EVENS: '+genap;
  }else{
    return 'ODDS: '+ganjil+' EVENS: '+genap;
  }
}

// TEST CASES
console.log(groupOddEven([1, 5, 8, 2, 3])); // "ODDS: 1, 5, 3 EVENS: 8, 2"
console.log(groupOddEven([1, 1, 1])); // "ODDS: 1, 1, 1"
console.log(groupOddEven([2, 8, 10])); // "EVENS: 2, 8, 10"
console.log(groupOddEven([2, 111])); // "ODDS: 111 EVENS: 2"
console.log(groupOddEven([])); // ""
