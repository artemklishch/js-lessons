class User{
    constructor(id, name, sessionId){
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }
}
class UserRepository{
    constructor(users){
        this._users = Object.freeze(users);
    }
    getUserNames(){
        return this._users
            .map(elem => elem._name);
    }
    getUserIds(){
        return this._users
            .map(elem => elem._id);
    }
    getUserNameById(id){        
       return this._users
            .filter(elem => elem._id === id)
            .map(elem => elem._name)[0];
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
