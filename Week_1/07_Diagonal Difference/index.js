function diagonalDifference(arr) {
    // absolute value
    // diagOne: start at arr[i = 0][j = 0] until j hits last element
    // diagTwo: start at arr[i = 0][j = -1]  
    let addThese = []
    let addThose = []
    for (let i = 0; i < arr.length; i++) {
        addThese.push(arr[i][i])
    }
    
    for (let j = arr.length - 1; j > -1; j--) {
        addThose.push(arr[j][Math.abs(j - (arr.length - 1))])
    }
    let diagOne = addThese.reduce((a, b) => a + b)
         console.log(diagOne)
    let diagTwo = addThose.reduce((a, b) => a + b)
         console.log(diagTwo)
    return Math.abs(diagOne - diagTwo)

}