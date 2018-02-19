//Exercise 16 week 4 Logic Challenge - Makan Terus (Rekursif)

/*Problem
Seorang customer sedang makan di sebuah restaurant AYCE(All You Can Eat).
Dia akan terus makan sampai waktu yang diberikan oleh restaurant tersebut habis.
Setiap customer memesan/mengambil makanan dan memakan pesanannya maka waktu
customer berkurang 15 menit. Begitu seterusnya sampai waktunya habis .
Customer masih bisa memesan/mengambil makanan selama waktunya belum 0.

Diberikan sebuah function makanTerusRekursif(waktu) yang menerima
satu parameter berupa waktu. Function akan memproses jika waktu masih ada.
Function akan mengembalikan/me-return berapa kali seorang customer
memesan/mengambil makanan dalam waktu yang diberikan.
Wajib menggunakan rekursif.

Contoh:

45 => 3

100 => 7

10 => 1
*/
//let makan = 0;

function makanTerusRekursif(waktu) {
  //var makan;
  //var makan += 1;
  /*kalo pake looping
  for(var i = waktu; i > 0; i -= 15){
      makan += 1;
  }*/

  /*if(waktu > 0){
    makan += 1;
    makanTerusRekursif(waktu-15);

  }else{
    return 0;
  }

  return makan;
  */

  /*looping cara lain
  if(waktu == 0){
    return waktu;
  }else{
      for(var i = 1; i >= 0 ; i++){
          waktu -= 15;
          if(waktu <= 0){
              return i;
          }
      }
  }*/
  if(waktu <= 0){
      return 0;
  }else {
      return 1 + makanTerusRekursif(waktu-15)
  };
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0
