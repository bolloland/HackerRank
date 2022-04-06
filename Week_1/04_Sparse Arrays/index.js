function matchingStrings(strings, queries) {
    // Write your code here
    let results = []
 //we can iterate through the queries using .find()
    for (let i=0; i < queries.length; i++) {
        let check = strings.filter(elem => elem == queries[i])
        results.push(check.length)
 }
    return results
}