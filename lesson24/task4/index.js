// export const studentsBirthDays = students => {
//     const months = ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//     let tempArr = [];
//     students
//         .sort((a,b) => a.birthDate < b.birthDate ? 1 : -1)
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
//     let [...incomingArray] = students;
//     let obj = {};
//     for(let i = 0; i < months.length; i++){
//         let arr = [];
//         incomingArray
//         .sort((a,b) => a.birthDate < b.birthDate ? 1 : -1)
//         .forEach(elem => {
//             if(i === new Date(elem.birthDate).getMonth()){
//                 arr.push(elem.name);
//                 obj[element] = arr; 
//             }   
//         });
//     }
//     return obj;
// };



export const studentsBirthDays = students => {
    const obj = {};
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let [...incomingArray] = students;
    incomingArray.sort((a,b) => a.birthDate > b.birthDate ? 1 : -1);
    months.forEach((element,index) => {
        let arr = [];
        incomingArray.forEach(elem => {
            if(index === new Date(elem.birthDate).getMonth()){
                arr.push(elem.name);
                obj[element] = arr;
            }   
        });
    });    
    return obj;
};


// const birthDate = '02/15/2010';
// const a = new Date(birthDate);
// console.log(a.toString().split(' ')[1]);



// const arr = [
//     { name: 'Tom', birthDate: '02/15/2010' },
//     { name: 'Ben', birthDate: '02/10/2010' },
//     { name: 'Sam', birthDate: '06/15/2010' },
//     { name: 'Sammy', birthDate: '02/14/2010' } 
// ];
// console.log(studentsBirthDays(arr));
// console.log(arr);