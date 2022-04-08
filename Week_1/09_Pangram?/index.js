function pangrams(s) {
    // lowercase, need array with alphabet?
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let caps = s.toUpperCase()
    for (let i = 0; i < alphabet.length; i++) {
        if (!caps.includes(alphabet[i])) {
            console.log(alphabet[i], "not")
            return "not pangram"
        }
    }
    return "pangram"
}
