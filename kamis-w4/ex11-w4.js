//Exercise 11 week 4 Logic Challenge - Change Me!
/*Problem
Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa
array multidimensi dimana array tersebut berisi value
(pasti berurut dari kiri ke kanan) First Name, Last Name, Gender dan Birth Year .
Fungsi ini akan menampilkan object literal yang memiliki property
firstName, lastName, gender dan age. Nilai age didapatkan dari tahun sekarang
dikurang tahun lahir. Jika tahun lahir tidak diisi atau tahun lahir lebih besar
dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'

Contoh jika arr inputan adalah
  [
    ['Platinum', 'Fox', 'female', 1995],
    ['John', 'Doe', 'male', 2000]
  ]
maka output:

Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }
Code
*/

function changeMe(arr) {
  var objHasil = {};
  var arrHasil = [];
  var forAge = 0;

  for(var i = 0; i < arr.length; i++){

      if(arr[i][3] === undefined || arr[i][3] >= 2018 || arr[i][3].length === 0){
        forAge = 'invalid Birth Year';
      }else{
        forAge = 2018-arr[i][3];
      }

      objHasil = {
        'firstName' : arr[i][0],
        'lastName' : arr[i][1],
        'gender' : arr[i][2],
        'age' : forAge
      }
      arrHasil.push(objHasil);

      console.log((i+1)+'. '+arr[i][0]+' '+arr[i][1]+':');
      console.log(arrHasil[i]);


      objHasil = {};
  }
  //console.log(arrHasil[0].objHasil+' '+arrHasil[0].objHasil);
  //console.log(arrHasil[0].firstName);

}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
