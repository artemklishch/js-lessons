const squareArray = arr => (!Array.isArray(arr)) ? null : arr
    .map(elem => elem * elem);