function filtrerTableau(tableau, condition) {
    return tableau.filter(condition);
}
console.log(filtrerTableau([1, 2, 3, 4], x => x > 2)); // [3, 4]
