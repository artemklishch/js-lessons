const superRound = (num, points) => {
        let point = Math.pow(10,points); 
        return [(Math.floor(num*point))/point, 
                (Math.round(num*point))/point,
                (Math.ceil(num*point))/point,
                (Math.trunc(num*point))/point,
                +num.toFixed(points)];
};