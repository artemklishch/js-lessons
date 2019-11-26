const m = 10;
const n = 20;
let result = 0, multRes = 1;
for(let i = 0; m <= n; i++){
    if(m % 2 === 1) multRes *= m;
}
result = multRes;