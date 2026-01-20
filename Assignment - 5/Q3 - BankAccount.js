function bankAccount(balance){
    return{
        deposit(Amount){
            if(Amount>0 , balance += 0);
            console.log("Deposited amout is : " + Amount);
        },
        withdraw(Amount){
            if (Amount<balance){
                balance -= 0;
                console.log("withdraw amount : ",Amount);
            }
            else{
                console.log("Insuffcient balance!!");
            }
        },
        checkBalance(){
            console.log("Current balance : " + balance);
        }

    };
}
const myAccount = bankAccount(200);
myAccount.deposit(50);
myAccount.withdraw(300);
myAccount.checkBalance();
