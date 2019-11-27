const getPeople = obj => {
    let arr = [];
    for(let prop in obj){
        arr.push(obj[prop].map(elem => elem.name));
    }
    return arr.flat();
};