export class User{
    constructor(id, name, sessionId){
        this.#id = id;
        this.#name = name;
        this.#sessionId = sessionId;
    }
}
export class UserRepository{
    constructor(users){
        this.#users = Object.freeze(users);
    }
    getUserNames(){
        return this.#users
            .map(elem => elem.name);
    }
    getUserIds(){
        return this.#users
            .map(elem => elem.id);
    }
    getUserNameById(id){        
       return this.#users
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
