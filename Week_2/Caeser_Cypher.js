function caesarCipher(s, k) {
    k = (k % 26)
    //65-90 uppercase, 97-122 lowercase
    let arr = s.split("")
    for (let i = 0; i < arr.length; i++) {
       let origCode = parseInt(arr[i].charCodeAt(0))

        if (64 < origCode && origCode < 91) {
            (origCode + k > 90) ? arr[i] = String.fromCharCode(origCode + k - 26) : arr[i] = String.fromCharCode(origCode + k)
        } else if (96 < origCode && origCode < 123) {       
            (origCode + k > 122) ? arr[i] = String.fromCharCode(origCode + k - 26) : arr[i] = String.fromCharCode(origCode + k)
        } else {
                }
            
        }
    return arr.join("")
    }