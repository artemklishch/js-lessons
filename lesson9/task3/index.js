const getCustomersList = obj => Object.entries(obj)
        .map(elem => elem = {...elem[1], id:elem[0]})
        .sort((a, b) => a.age > b.age ? 1 : -1);