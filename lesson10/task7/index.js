const superRound = (num, points) => [(Math.floor(num*Math.pow(10,points)))/Math.pow(10,points), 
        (Math.round(num*Math.pow(10,points)))/Math.pow(10,points),
        (Math.ceil(num*Math.pow(10,points)))/Math.pow(10,points),
        (Math.trunc(num*Math.pow(10,points)))/Math.pow(10,points),
        +num.toFixed(points)];