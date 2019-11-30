export default (a, b, c, d) => {
    if (a === undefined || b === undefined || c === undefined || d === undefined) return null;
    return sum(a, b) > sum(c, d);
}
function sum(from, to) {
    let allSum = 0;
    for (let i = from; i <= to; i++) {
        allSum += i;
    }
    return allSum;
}