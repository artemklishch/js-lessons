export default (a, index) => {
    if(!Number.isInteger(a) || !Number.isInteger(index)) return null;
    return a > index ? a + index : a;
};