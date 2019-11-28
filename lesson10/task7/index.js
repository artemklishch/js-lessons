const superRound = (num, points) => {
    let calc = "1";
    let point = 0;
    for(let i = 0; i < points; i++){
        calc+="0";
        point++;
    }
    calc = Number(calc);
    let arr = [(Math.floor(num*calc))/calc, 
        (Math.round(num*calc))/calc,
        (Math.ceil(num*calc))/calc,
        (Math.trunc(num)),
        +num.toFixed(point)];
    return arr;

};
    

// console.log(superRound(2.5678971124, 2));