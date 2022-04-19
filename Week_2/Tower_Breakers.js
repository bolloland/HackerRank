function towerBreakers(n, m) {
    // if m = 1, P2 wins b/c 1 can't make a move
    // if n is even, P2 wins by matching move for move
    // if n = 1, P1 wins, thy'll take them all on first move
    // if n is odd, P1 wins. Take all of first, and then match move for move
    if (m == 1) return "2"
    if (n % 2 == 0) return "2"
    else return "1"
}