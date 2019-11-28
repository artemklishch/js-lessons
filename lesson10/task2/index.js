const getParsedIntegers = arr => arr
    .reduce((acc,elem) => acc.concat(Number.parseInt(elem)),[]);

const getParsedIntegersV2 = arr => arr
    .reduce((acc,elem) => acc.concat(parseInt(elem)),[]);

const getParsedFloats = arr => arr
    .reduce((acc,elem) => acc.concat(Number.parseFloat(elem)),[]);

const getParsedFloatsV2 = arr => arr
    .reduce((acc,elem) => acc.concat(parseFloat(elem)),[]); 



// const arr = [3.5, 45.12,'12px', '12.45', '34.5px' ];
// console.log(getParsedFloatsV2(arr));