const superRound = (num, points) => {
    let point = "1";
    for(let i = 0; i < points; i++){
        point+="0";
    }
    return [(Math.floor(num*point))/point, 
        (Math.round(num*point))/point,
        (Math.ceil(num*point))/point,
        (Math.trunc(num)),
        +num.toFixed(points)];
};
    

// console.log(superRound(-2.5678971124, 2));