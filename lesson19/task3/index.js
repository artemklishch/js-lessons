export const user = {
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