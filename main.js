class Account  {
    constructor(balance, currency, number) {
        this.balance = balance;
        this.currency = currency;
        this.number = number;
    }
  };

class Person  {
    constructor(firstName, lastName, accounts_list){
        this.firstName = firstName;
        this.lastName = lastName;
        this.accounts_list = accounts_list;
       }

    _calculateBalance() {
        var sum = 0;
        for (let account of this.accounts_list) {
            sum += account.balance;
        }
        return sum;
     }

    addAccount(account) {
            this.accounts_list.push(account)

    }
    sayHello(){
           return `Imie: ${this.firstName}, Nazwisko: ${this.lastName}, liczba kont: ${this.accounts_list.length}, stan konta: ${this._calculateBalance()}`;
    } 
    
    findAccount(accountNumber){
          return this.accounts_list.find(account => {
              return account.number === accountNumber});
        }
    
    withdraw (accountNumber, amount) {
        return new Promise ((resolve, reject) => {
            var account = this.findAccount(accountNumber);
                if (account === undefined){
                    reject('Konto o podanym numerze nie istnieje')
                } else if (amount >= account.balance){
                    reject('Nie wystarczająca ilość środków na koncie')
                } else if (amount <= 0) {
                    reject('Error: niepoprawnie wprowadzona kwota')
                } else {
                    setTimeout (() => { 
                    account.balance -= amount;                 
                    resolve(`Witaj ${this.firstName} ${this.lastName}! Wypłaciłeś/-aś ${amount}${account.currency}! Aktualny stan Twojego konta nr ${accountNumber} wynosi ${account.balance}${account.currency}`);}, 3000);
                }
        }
        )    }   
} 