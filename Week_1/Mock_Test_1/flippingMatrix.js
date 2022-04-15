function flippingMatrix(matrix) {
    let total = 0
    //in a 4x4, border is [1], in 6x6 border is [2]
    let nBorder = (matrix.length/2)
    
    for (let row = 0; row < nBorder; row++) {
        for (let col = 0; col < nBorder; col++) {
            //top left corner when at (00), compare (03)(30)(33)
            let max = Math.max(matrix[row][col], 
                matrix[row][matrix.length - col - 1], 
                matrix[matrix.length - row - 1][col], 
                matrix[matrix.length - row - 1][matrix.length - col - 1])
            console.log(max, "max")
            total += max
            console.log(total, "total")
        }
    }
    return total

}