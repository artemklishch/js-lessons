const getParsedIntegers = arr => arr
    .reduce((acc,elem) => acc.concat(Number.parseInt(elem)),[]);

const getParsedIntegersV2 = arr => arr
    .reduce((acc,elem) => acc.concat(parseInt(elem)),[]);

const getParsedFloats = arr => arr
    .reduce((acc,elem) => acc.concat(Number.parseFloat(elem)),[]);

const getParsedFloatsV2 = arr => arr
    .reduce((acc,elem) => acc.concat(parseFloat(elem)),[]); 