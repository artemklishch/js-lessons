export class User{
    constructor(id, name, sessionId){
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }
    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
    get sessionId(){
        return this._sessionId;
    }
}
export class UserRepository{
    constructor(users){
        this._users = Object.freeze(users);
    }
    get users(){
        return this._users;
    }
    getUserNames(){
        return this.users
            .map(elem => elem.name);
    }
    getUserIds(){
        return this.users
            .map(elem => elem.id);
    }
    getUserNameById(id){        
       return this.users
            .filter(elem => elem.id === id)
            .map(elem => elem.name)[0];
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
// console.log(user1.id);




