export const user = {
    firstName: "John",
    lastName: "Doe",
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    setFullName(firstname, lastname){
        this.firstName = firstname;
        this.lastName = lastname;
    },
};
// console.log(user.getFullName());
// user.setFullName("Tom", "Black");
// console.log(user.getFullName());