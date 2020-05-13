export const tasks = [
    { 
        text: 'Buy milk',
        done: false, 
        id: Math.random().toFixed(10),
        createdDate: new Date(2019, 0, 0), 
        completedDate: undefined, 
    },
    { 
        text: 'Pick up Tom from airport', 
        done: false, 
        id: Math.random().toFixed(10), 
        createdDate: new Date(2019,0,1), 
        completedDate: undefined, 
    },
    { 
        text: 'Visit party', 
        done: false, 
        id: Math.random().toFixed(10), 
        createdDate: new Date(2019,0,2), 
        completedDate: undefined, 
    },
    { 
        text: 'Visit doctor', 
        done: true, 
        id: Math.random().toFixed(10), 
        createdDate: new Date(2019,0,0), 
        completedDate: new Date(2011, 4, 5), 
    },
    { 
        text: 'Buy meat', 
        done: true, 
        id: Math.random().toFixed(10), 
        createdDate: new Date(2019,0,0), 
        completedDate: new Date(2011, 4, 2),
    },
];