export class User{
    constructor(id, name, sessionId){
        this.id = id;
        this.name = name;
        this.sessionId = sessionId;
    }
    get getId(){
        return this.id;
    }
    get getUserName(){
        return this.name;
    }
    get getSessionId(){
        return this.sessionId;
    }
}
export class UserRepository{
    constructor(users){
        this._users = Object.freeze(users);
    }
    get getUsersArray(){
        return this._users;
    }
    getUserNames(){
        return this.getUsersArray
            .map(elem => elem.getUserName);
    }
    getUserIds(){
        return this.getUsersArray
            .map(elem => elem.getId);
    }
    getUserNameById(id){        
       return this.getUsersArray
            .filter(elem => elem.getId === id)
            .map(elem => elem.getUserName)[0];
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
// console.log(user1.getId);




