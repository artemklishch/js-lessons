export function sumOfSquares(){
    return [...arguments].reduce((acc,elem) => acc + Math.pow(elem,2), 0);
}