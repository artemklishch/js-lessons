export function spy(func){
    let spied = function(...args){
        spied.calls.push(args);
        return func.call(this, ...args);
    }
    spied.calls = [];
    return spied;
}
