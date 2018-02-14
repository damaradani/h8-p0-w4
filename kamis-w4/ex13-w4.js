//Exercise 13 week 4 Logic Challenge - Toko X

/*Problem
Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk
setiap jenis barang yang terjual pada hari itu.

Barang-barang SALE yang akan dihitung penjualannya:

Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
Function akan menerima array yang berisikan object pembeli
(nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya).
Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli
maka pembeli batal untuk membeli barang tersebut.

Function countProfit akan mengembalikan/me-return sebuah array of object
dimana array tersebut berisi objek-objek barang dari toko X tersebut
yang berisikan info nama barang, siapa saja yang membeli,
sisa stock barang dan total pemasukan untuk barang tersebut
*/

function countProfit(shoppers) {
                  // [namaBarang, hargaBarang, stock, pembeli, profit]
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10, [], 0],
                     ['Baju Zoro', 500000, 2, [], 0],
                     ['Sweater Uniklooh', 175000, 1, [], 0]
                   ];
  let result = [];

  if(shoppers.length === 0){
      return result;
  }else{
      for(var i = 0; i < shoppers.length; i++){
          //console.log(shoppers[i].product+' yang diminta');
          //console.log(shoppers[i].amount);
          for(var list = 0; list < listBarang.length; list++){
              //for(var j = 0; j < listBarang[list].length; j++){
              //console.log(listBarang[list][0]);
              if(shoppers[i].product === listBarang[list][0]){
                  if(listBarang[list][2] >= shoppers[i].amount){
                      //Stock barang  di listBarang
                      listBarang[list].splice(2,1, listBarang[list][2]-shoppers[i].amount);

                      //Pembeli di barang indeks [list]
                      listBarang[list][3].push(shoppers[i].name);

                      //memasukan profit0
                      listBarang[list].splice(4,1, listBarang[list][4]+ (shoppers[i].amount * listBarang[list][1]) );

                  }
              }
              //}
          }
          //listBarang[list][4].push(shoppers[i].name);

      }

      /*listBarang[0][4].push(profit0);
      listBarang[1][4].push(profit1);
      listBarang[2][4].push(profit2);*/

      //console.log(shoppers[0].product);
      //return profit0+' 1:'+profit1+' 2:'+profit2;
      //console.log(listBarang);
      //console.log(pembeli);

      let objResult = {};

      for(var d = 0; d < listBarang.length; d ++){
            //console.log(pembeli[d][pembeli[d].length-1]);
            //console.log(pembeli[d].slice(0, pembeli[d].length-2));
            //console.log(pembeli);
            //if()
            objResult = {
                        product: listBarang[d][0],
                        shoppers: listBarang[d][3],
                        leftOver: listBarang[d][2],
                        totalProfit: listBarang[d][4]
                     };
            result.push(objResult);

            objResult = {};
      }

      //console.log(result);
      return result;
  }

}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2},
                         {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3},
                         {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));//Sweater Uniklooh
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8},
                         {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10},
                         {name: 'Rani', product: 'Sweater Uniklooh', amount: 1},
                         {name: 'Devi', product: 'Baju Zoro', amount: 1},
                         {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
