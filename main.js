var Account = function (balance, currency) {
    this.balance = balance;
    this.currency = currency;

    
}
var person = (function() {
    var details = {
        firstName: 'Jan',
        lastName: 'Kowalski'
    
    };
    var calculateBalance = function() {
        var sum=0;
        for(var i=0; i < this.accounts_list.length; i++){
            sum += this.accounts_list[i].balance;            
        } 
        return sum;};
    return {
        firstName: details.firstName,
        lastName: details.lastName,
        accounts_list: [new Account(2131, 'euro'), new Account(7654, 'euro')],
        sayHello: function (){
            return 'First Name: ' + this.firstName + 
            ', Last Name: ' + this.lastName + 
            ', number of accounts: ' + this.accounts_list.length +
            ', total balance: ' + calculateBalance.call(this);

        },
        addAccount: function (account){
            this.accounts_list.push(account);

        },
        
    };
})();

console.log(person.sayHello());
console.log(person.accounts_list);
person.addAccount(new Account(23233, 'PLN'));

myObject = new Account(2312,'forint');
person.addAccount(myObject);

console.log(person.accounts_list);
console.log(person.sayHello());


 






