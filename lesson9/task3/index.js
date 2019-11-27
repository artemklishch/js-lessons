const getCustomersList = obj => {
    let arrayOfAgeValues = Object.values(obj)
        .map(elem=>elem.age)
        .sort((a,b) => a - b);
    const object = {...obj};
    for(let key in object){
        object[key].id = key;
    }
    let arrayOfUsersPrevious = Object.values(object);
    let arrayOfUsers = [];
    for(let num of arrayOfAgeValues){
       for(let i = 0; i < arrayOfUsersPrevious.length; i++){
            if(arrayOfUsersPrevious[i].age === num){
                arrayOfUsers.push(arrayOfUsersPrevious[i]);
            }
       }
    }
    return arrayOfUsers;
};