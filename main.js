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
        return sum};
    return {
        firstName: details.firstName,
        lastName: details.lastName,
        accounts_list: [
            {balance: 2131,
            currency: 'euro'},
            {balance: 7654,
             currency: 'euro'}],
        sayHello: function (){
            return 'First Name: ' + this.firstName + 
            ', Last Name: ' + this.lastName + 
            ', number of accounts: ' + this.accounts_list.length +
            ', total balance: ' + calculateBalance.call(this);
            
        },
        addAccount: function (newBalance, newCurrency){
            this.accounts_list.push ({
               balance: newBalance,
               currency: newCurrency 
            })

        },
        
    };
})();

console.log(person.sayHello());

person.addAccount(1000, 'euro');

console.log(person.sayHello());

