const init = ( () => {
    function onClicked() {
        var pers = new Person('Martyna', 'Grudzka', []);
        pers.addAccount(new Account(1200, 'PLN', 1));
        pers.addAccount(new Account(500, 'PLN', 2));

        document.addEventListener("DOMContentLoaded", function() {

            document.querySelector('.card-title').innerHTML = pers.firstName + ' ' + pers.lastName;

            let accountInfo = ' ' ;
            for (let numb in pers.accounts_list) {
                accountInfo += '<p> Nr konta: ' + pers.accounts_list[numb].number + '<br>Stan konta: ' + pers.accounts_list[numb].balance + ' ' + pers.accounts_list[numb].currency + '</p>' ;
                document.querySelector('.card-text').innerHTML = accountInfo;
            }

            const button = document.querySelector('.btn.btn-primary') ;

            button.onclick = () => withdrawal();
            
            let textInput_account = document.querySelector('#number');
            let textInput_amount = document.querySelector('#amount');

            function withdrawal() {
                let accNum = parseInt(textInput_account.value);
                let amount = parseInt(textInput_amount.value);

            pers.withdraw(accNum, amount)
                .then((a) => {
                    alert(a)

                let accountInfo = ' ' ;
                for (let numb in pers.accounts_list) {
                accountInfo += '<br> Nr konta: ' + pers.accounts_list[numb].number + '<br>Stan konta: ' + pers.accounts_list[numb].balance + ' ' + pers.accounts_list[numb].currency ;;
                document.querySelector('.card-text').innerHTML = accountInfo;
                }
                
                }
                ).catch((b) =>{
                    alert(b)
                }
                );

                
        }})}
    function onChanged() {
        document.addEventListener("DOMContentLoaded", function() {
            const button1 = document.querySelector('.btn.btn-primary') ;
            let textInput_account1 = document.querySelector('#number');
            let textInput_amount1 = document.querySelector('#amount');
            
            button1.setAttribute('disabled','disabled');
                        
            function check_input(){
            let accNum1 = textInput_account1.value;
            let amount1 = textInput_amount1.value;

           
            button1.disabled = !(accNum1 && amount1);
            
           
            
        }
            textInput_account1.addEventListener("change", check_input);
            textInput_amount1 .addEventListener("change", check_input);
            textInput_account1.addEventListener("keyup", check_input);
            textInput_amount1 .addEventListener("keyup", check_input);
            
                
        }
    )};

 return {
    onClicked : onClicked(),
    onChanged : onChanged()
}
}) ();