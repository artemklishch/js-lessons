function withdraw(clients, balances, client, amount){
    let sumAfterOperation = 0;
    let index, costs;
    for(let i = 0; i < clients.length; i++){
        if(clients[i] === client){
            index = i;
            break;
        }
    }
    costs = balances[index];
    sumAfterOperation = costs - amount;
    if(sumAfterOperation <= 0){
        return -1;
    }else return sumAfterOperation;
}