function maxMin(k, arr) {
   
    arr.sort((a, b) => a - b)
    let smallest = arr[k-1]
    for (let i = 0; i + k - 1 < arr.length; i++) {
        smallest = Math.min((arr[i+k-1]-arr[i]), smallest)
        console.log(arr[i+k-1]-arr[i], smallest)
    }
    return smallest
}