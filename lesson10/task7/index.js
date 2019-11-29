const superRound = (num, points) => {
    // let point = "1";
    // for(let i = 0; i < points; i++){
    //     point+="0";
    // }
    //let point = Math.pow(10,points);
    return [(Math.floor(num*Math.pow(10,points)))/Math.pow(10,points), 
        (Math.round(num*Math.pow(10,points)))/Math.pow(10,points),
        (Math.ceil(num*Math.pow(10,points)))/Math.pow(10,points),
        (Math.trunc(num)),
        +num.toFixed(points)];
};
    

// console.log(superRound(-2.5678971124, 2));