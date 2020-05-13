const getTotalPrice = arr => "$" +
    Math.floor((arr.reduce((acc,num) => acc += num))*100)/100;