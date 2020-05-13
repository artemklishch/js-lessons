function findDivCount(a, b, n){
    let calc = 0;
    for(let i = a; i <= b; i++){
        if(i % n === 0) calc++;
    }
    return calc;
}