function countingSort(arr) {
    // create array size of n
   // iterate through, value of number = arr[0] (say 65)
   // so +1 at myArr[65] 
   let result = new Array(100).fill(0)
   for (let i = 0; i < arr.length; i++) {
       let value = arr[i]
       result[value] += 1
   }
   return result
}