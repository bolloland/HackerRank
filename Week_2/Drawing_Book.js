function pageCount(n, p) {
    if (p == 1 || p == n) console.log("0")
    if (p % 2 != 0) { p = p - 1 }
    if (n % 2 != 0) { n = n - 1 }
    let fromFront = p/2
    let fromBack = (n-p)/2
    return (Math.min(fromFront, fromBack))
    // Write your code here

}