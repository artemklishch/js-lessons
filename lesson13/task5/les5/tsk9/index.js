export default (a, b, n) => {
    if(a > b) return null;
    if(a === undefined || b === undefined || n === undefined) return null;
    let calc = 0;
    for(let i = a; i <= b; i++){
        if(i % n === 0) calc++;
    }
    return calc;
};