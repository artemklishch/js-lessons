// const getPeople = obj => Object.entries(obj)
//     .map(elem => elem = elem[1].map(elem=>elem.name))
//     .flat();

const getPeople = obj => Object.entries(obj)
    .map(elem => elem = elem[1])
    .flat()
    .map(elem => elem.name);