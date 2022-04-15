const findingMedian = (arr) => {
    arr.sort((a, b) => (a - b))
    return arr[(arr.length - 1)/2]
}

//all arrays are odd, 
//arr.length is 7, we want the 4th term - index[3]
//7 >> 3 by (7-1)/2