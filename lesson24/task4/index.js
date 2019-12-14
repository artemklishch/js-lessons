// export const studentsBirthDays = students => {
//     const months = ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//     let tempArr = [];
//     students
//         .sort((a,b) => a.birthDate > b.birthDate ? 1 : -1)
//         .map(elem => {
//             let tempObj = {};
//             tempObj.name = elem.name;
//             tempObj.month = new Date(elem.birthDate).getMonth();
//             tempArr.push(tempObj);
//         });
//     let obj = {};
//     for(let i = 0; i < months.length; i++){
//         let arr = [];
//         tempArr.forEach(elem => {
//             if(i === elem.month){
//                 arr.push(elem.name);
//                 for(let prop in elem){
//                     prop = months[i];
//                     obj[prop] = arr;
//                 }
//             }   
//         });
//     }
//     return obj;
// };






// export const studentsBirthDays = students => {
//     const months = ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];    
//     let obj = {};
//     for(let i = 0; i < months.length; i++){
//         let arr = [];
//         students
//         .sort((a,b) => a.birthDate > b.birthDate ? 1 : -1)
//         .forEach(elem => {
//             if(i === new Date(elem.birthDate).getMonth()){
//                 arr.push(elem.name);
//                 for(let prop in elem){
//                     prop = months[i];
//                     obj[prop] = arr;
//                 }
//             }   
//         });
//     }
//     return obj;
// };



export const studentsBirthDays = students => {
   const obj = {};
    ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun',
     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        .forEach((element,index) => {
            let arr = [];
            students
            .sort((a,b) => a.birthDate > b.birthDate ? 1 : -1)
            .forEach(elem => {
                if(index === new Date(elem.birthDate).getMonth()){
                    arr.push(elem.name);
                    for(let prop in elem){
                        prop = element;
                        obj[prop] = arr;
                    }
                }   
            });
        });    
    return obj;
};

// const arr = [
//     { name: 'Tom', birthDate: '02/15/2010' },
//     { name: 'Ben', birthDate: '02/10/2010' },
//     { name: 'Sam', birthDate: '03/15/2010' },
//     { name: 'Sammy', birthDate: '02/14/2010' } 
// ];
// console.log(studentsBirthDays(arr));