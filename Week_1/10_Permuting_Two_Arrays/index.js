function twoArrays(k, A, B) {
    // sortA, sortB. smallest A + biggestB > k, right?
    let inc = A.sort((a, b) => a - b)
    let dec = B.sort((a, b) => b - a)
    // let ing = increasing.reverse()
     console.log(inc, "A increasing")
     console.log(dec, "B decreasing")
     for (let i=0; i < A.length; i++){
         if (inc[i] + dec[i] < k) {
             return "NO"
         }
     }
    return "YES"
}