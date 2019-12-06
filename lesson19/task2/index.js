export function getOwnProps(obj){
    return Object.entries(obj)
        .filter(elem => typeof elem[1] !== 'function')
        .map(elem => elem[0]);
}