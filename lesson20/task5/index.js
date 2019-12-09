export class User{
    constructor(id, name, sessionId){
        this.id = id;
        this.name = name;
        this.sessionId = sessionId;
    }
    get identificator(){
        return this.id;
    }
    get userName(){
        return this.name;
    }
    get idSessionId(){
        return this.sessionId;
    }
}
export class UserRepository{
    constructor(users){
        this.users = Object.freeze(users);
    }
    get usersArray(){
        return this.users;
    }
    getUserNames(){
        return this.usersArray
            .map(elem => elem.userName);
    }
    getUserIds(){
        return this.usersArray
            .map(elem => elem.identificator);
    }
    getUserNameById(id){        
       return this.usersArray
            .filter(elem => elem.identificator === id)
            .map(elem => elem.userName)[0];
    }
}

// const user1 = new User("11100000000", "Tomasso Campanella", "session 1");
// const user2 = new User("11777777777", "Leonardo", "session 2");
// let arr = [user1, user2];
// const arrayOfUsers = new UserRepository(arr);
// console.log(arrayOfUsers);
// console.log(arrayOfUsers.getUserNames());
// console.log(arrayOfUsers.getUserIds());
// console.log(arrayOfUsers.getUserNameById("11100000000"));
// console.log(user1.identificator);




