const getFiniteNumbers = arr => arr
.filter(elem => Number.isFinite(elem));

const getFiniteNumbersV2 = arr => arr
.filter(elem => isFinite(elem));

const getNaN = arr => arr
.filter(elem => Number.isNaN(elem));

// const getNaNV2 = arr => arr
//     .filter(elem => isNaN(elem) && typeof elem === 'number');

const getNaNV2 = arr => arr.filter(isNaN);

const getIntegers = arr => arr
    .filter(elem => Number.isInteger(elem));

// const arr = [1,2,3.5, NaN, 'text', NaN];
// console.log(getNaNV2(arr));