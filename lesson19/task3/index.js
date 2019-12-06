export default {
    firstName: 'John',
    lastName: 'Doe',
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value){
        let [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    },
};
// user.fullName = 'Tom Hardy';
// console.log(user.fullName);

// export default (firstName, lastName) => {
//     this.firstName = firstName;
//     this.lastName = lastName;
// };

// Object.prototype.getfullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// };
// Object.prototype.setfullName = function(value){
//             let [firstName, lastName] = value.split(' ');
//             this.firstName = firstName;
//             this.lastName = lastName;
//         };
// const user1 = new User("John", "Doe");
// user1.setfullName("Tom Hardy");
// console.log(user1.getfullName());