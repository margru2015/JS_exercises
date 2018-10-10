function personFactory () {
    var details = {
        firstName: 'Jan',
        lastName: 'Kowalski',
        accounts_list: [
            {balance: 2131,
            currency: 'euro'}
        ]
    }
    return {
        firstName: details.firstName,
        lastName: details.lastName,
        sayHello: function (){
            return 'First Name: ' + this.firstName + ', Last Name: ' + this.lastName + ', number of accounts: ' + details.accounts_list.length;
        }
    }
}

person1 = personFactory();
console.log(person1.sayHello());



