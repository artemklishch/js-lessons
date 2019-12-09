export class User{
    constructor(id, name, sessionId){
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }
    get getId(){
        return this._id;
    }
    get getUserName(){
        return this._name;
    }
    get getSessionId(){
        return this._sessionId;
    }
}
export class UserRepository{
    constructor(users){
        this._users = Object.freeze(users);
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
    get getUsersArray(){
        return this._users;
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




