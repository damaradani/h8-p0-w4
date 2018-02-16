function angkaPalindrome (num) {

  //var reverseNum = String(num).split('').reverse().join('');
  /* kalo pake looping
  if(num == reverseNum){
    for(let i = num+1; i >= num; i++){
        reverseNum = String(i).split('').reverse().join('');
        if(reverseNum == i){
            return i;
        }
    }
  }else{
      for(let i = num+1; i >= num; i++){
          reverseNum = String(i).split('').reverse().join('');
          if(reverseNum == i){
              return i;
          }
      }
  }
  */

  //var reverseNum = String(num+1).split('').reverse().join('');
  //num++;
  num++
  var numStr = String(num);
  var reverseNum = '';
  for(var i = numStr.length-1; i >= 0; i--){
      reverseNum += numStr[i];
  }

  if(reverseNum == num){
      return num;
  }else{
      return angkaPalindrome(num);
  }

}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1001)); // 1001
