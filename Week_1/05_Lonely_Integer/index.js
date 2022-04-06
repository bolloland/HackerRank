function lonelyinteger(a) {
    
    let sorted = a.sort((x, y) => x - y)
    if (sorted.length == 1) return sorted[0]
        while (sorted.length > 1) {
          if (sorted[0] != sorted[1]) {
            return sorted[0]
        } else {
            sorted.splice(0, 2)
            console.log(sorted, "sorted post-splice")
            if (sorted.length == 1) return sorted[0]  
        }          
    }
}