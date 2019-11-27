// const getPeople = obj => Object.entries(obj)
//     .map(elem => elem = elem[1].map(elem=>elem.name))
//     .flat();

const getPeople = obj => Object.entries(obj)
    .map(elem => elem = elem[1])
    .flat()
    .map(elem => elem.name);

    // //const obj = {};
    // const rooms = {
    //     room1: [
    //         { name: 'room1 name1' },
    //         { name: 'room1 name2' },
    //         { name: 'room1 name3' },
    //         { name: 'room1 name4' },
    //     ],
    //     room2: [
    //         { name: 'room2 name1' },
    //     ],
    //     room3: [
    //         { name: 'room3 name1' },
    //         { name: 'room3 name2' },
    //         { name: 'room3 name3' },
    //     ],
    // };
    // //console.log(getPeople(obj));
    // console.log(getPeople(rooms));