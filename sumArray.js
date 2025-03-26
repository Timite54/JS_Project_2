function sommeTableau(tableau) {
    return tableau.reduce((acc, val) => acc + val, 0);
}
// console.log(sommeTableau([1, 2, 3, 4])); // 10
