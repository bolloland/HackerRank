function sockMerchant(n, ar) {
    let pairs = 0
    
    ar.sort((a, b) => a - b)
    for (let i = 0; i < n; i++) {
        let current = []
        if (ar[i] != ar[i + 1]) {
            current = ar.filter(sock => sock == ar[i])
            console.log(current, current.length, "current array & length")
            pairs += Math.floor(current.length/2)
        }
    }
    return pairs
}