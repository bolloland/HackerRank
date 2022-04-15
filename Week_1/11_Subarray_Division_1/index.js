function birthday(s, d, m) {
    // m-value will set the window size
    // slide window, check sum against d-value
    // true? dump that window/array into results (or just counter?)
    let results = 0
    for (let i = 0; (i + m - 1 )< s.length; i++) {
        console.log(m, s, s.slice(i, i+m), "window size, array, sliced array")
        console.log(s.slice(i, i+m).reduce((a, b) => a + b ), "sum of array") 
        if (d == s.slice(i, i+m).reduce((a, b) => a + b )) {
            results += 1
        }
    }
    return results
}