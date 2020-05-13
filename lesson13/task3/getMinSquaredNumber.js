export default arr => 
    (!Array.isArray(arr) || arr.length === 0) ? null :
    Math.pow(Math.min(...arr
        .map(elem => Math.abs(elem))), 2);