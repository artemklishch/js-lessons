const getCustomersList = obj => {
    let previousArrayOfObjects = Object.entries(obj)
        .map(elem => {
            elem[1].id = elem[0];
            return elem[1];
        });
    return previousArrayOfObjects.sort((a, b) => a.age > b.age ? 1 : -1);
};