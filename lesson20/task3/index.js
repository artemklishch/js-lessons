export class Wallet{
    _balance = 0;

    getBalance(){
        return this._balance;
    }
    deposit(amount){
        this._balance += amount;
    }
    withdraw(sum){
        if(sum > this._balance) {
            console.log(`No enough funds`);
            return;
        }
        this._balance -= sum;
    }
}
// const balance1 = new Wallet();
// console.log(balance1);
// balance1.deposit(100);
// balance1.withdraw(10);
// balance1.withdraw(110);
// console.log(balance1.getBalance());
// console.log(balance1);