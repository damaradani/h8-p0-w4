//Exercise 14 week 4 Logic Challenge - Most Frequent Largest Numbers

/*Problem
Dengan HANYA mengubah code di dalam 2 function yang diberikan, selesaikan countLargestNumbers.
Dilarang mengubah isi dalam function numberProcessing!
*/

function sorting(arrNumber) {

  //kalo ga pake fungsi sort()
  var done = false;
  while(!done) {
    done = true;
    for(var i = 1; i < arrNumber.length; i++){
        if(arrNumber[i - 1] > arrNumber[i]){
            done = false;
            var temp = arrNumber[i - 1];
            arrNumber[i - 1] = arrNumber[i];
            arrNumber[i] = temp;
            //console.log(arrNumber);
        }
    }
  }

  return arrNumber;
}

function getTotal(arrNumber) {

  var largestNum = arrNumber[0];

  for(var j = 1; j < arrNumber.length; j++){
      if(largestNum < arrNumber[j]){
        largestNum = arrNumber[j];
      }
  }

  //return largestNum;

  var jumlahNum = 1;
  var counter = 0;

  for(var k = 0; k < arrNumber.length; k++){
      if(largestNum == arrNumber[k]){
          counter++;
      }

      if(jumlahNum < counter){
          jumlahNum++;
      }
  }
  return 'angka paling besar adalah '+largestNum+' dan jumlah kemunculan sebanyak '+jumlahNum+' kali';
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  //return listSort;
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

//console.log(countLargestNumbers([]));
//''
