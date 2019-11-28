const getPeople = obj => Object.values(obj)
    .reduce((acc,room) => acc.concat(room), [])
    .map(elem => elem.name);