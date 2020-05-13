const cleanTransactionsList = sums => sums
    .map(elem => Number(elem))
    .filter(elem => !Number.isNaN(elem))
    .map(elem => "$" + elem.toFixed(2));
   

// const sums = [' 1.9 ', '16.4', 17, ' 1 dollar '];
// console.log(cleanTransactionsList(sums));
