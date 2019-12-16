// export const studentsBirthDays = students => {
//     const obj = {};
//     const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
//     'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//     let [...incomingArray] = students;
//     incomingArray.sort((a,b) => a.birthDate > b.birthDate ? 1 : -1);
//     months.forEach((element,index) => {
//         let arr = [];
//         incomingArray.forEach(elem => {
//             if(index === new Date(elem.birthDate).getMonth()){
//                 arr.push(elem.name);
//                 obj[element] = arr;
//             }   
//         });
//     });    
//     return obj;
// };

export const studentsBirthDays = students => {
    let [...incomingArray] = students;
    return incomingArray
        .sort((a,b) => a.birthDate > b.birthDate ? 1 : -1)
        .reduce((acc,elem) => {
            let arr = [];
            let temp = new Date(elem.birthDate).toString().split(' ')[1];
            for(let j = 0; j < incomingArray.length; j++){
                if(temp === new Date(incomingArray[j].birthDate).toString().split(' ')[1]){
                    arr.push(incomingArray[j].name);
                }
            }
            acc[temp] = arr;
            return acc;
        }, {});
};




const arr = [
    { name: 'Tom', birthDate: '02/15/2010' },
    { name: 'Ben', birthDate: '02/10/2010' },
    { name: 'Sam', birthDate: '06/15/2010' },
    { name: 'Sammy', birthDate: '02/14/2010' } 
];
console.log(studentsBirthDays(arr));
console.log(arr);