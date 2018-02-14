/*if(list === 0){
    profit[0].push(profit[0]+shoppers[i].amount * listBarang[list][1]);
}else if (list === 1) {
    profit[1].push(profit[1]+shoppers[i].amount * listBarang[list][1]);
}else if (list === 2) {
    profit[2].push(profit[2]+shoppers[i].amount * listBarang[list][1]);
}else{
    console.log('list barang baru sampai 3!');
}*/

let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                   ['Baju Zoro', 500000, 2],
                   ['Sweater Uniklooh', 175000, 1]
                 ];

listBarang[0].splice(2,1, listBarang[0][2]-4);

console.log(listBarang);
