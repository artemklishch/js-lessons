function getPrimes(n){
    for(let i = 1; i < n; i++){
        let calc = 0;
        for(let j = i; j >= 1; j--){
            if(j != i && j != 1 && i % j === 0) calc++;
        }
        if(i === 1 || i === n || calc === 0) console.log(i);
    }
}