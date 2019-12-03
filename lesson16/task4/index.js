var foo = 1; 

function bar() { 
    if (!foo) { 
        foo = 10; 
    } 

    return foo;
}

export default bar();