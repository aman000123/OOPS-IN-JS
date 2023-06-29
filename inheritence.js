

//inheritence === virasat me milna 

//jo parent class hoti hai unke child ke andar hm use kar sakte hia

//DRY  ==DO NOT REPEAT YOURSELF

//inheritence ke use se hm repetation of codes ko solve kar sakte hai




function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
}
BankAccount.prototype.deposit = function (amount) {
    this.balance += amount
};
BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount
}


const amanAccount = new BankAccount('Aman', 100)

//console.log("Amanmm",amanAccount)




//bankaccount ke alag alag type hota hai real life me  current account saving account

//agar current account bnana ho to hme bankaccount ki trah funcion fir copy karke pura code fir likhna hoga

//current account ke liye cunstrocter ko copy karke bankaccount ki jgh current account

//current account ke pahle apne kuch feature ho sakte hai use add kar sakte


function CurrentAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now()
    this.balance = balance;
    this.transaction = 50000;

}
//ab takebusinesslone name ka methods pass karte hai prototype me

CurrentAccount.prototype.takeBusinessLone = function (amount) {

    console.log("takings lone" + amount)
}

CurrentAccount.prototype.deposit = function (amount) {


    this.balance += amount
};

CurrentAccount.prototype.withdraw = function (amount) {

     this.balance -= amount

}





const rakeshAccount = new CurrentAccount('rakesh');


const amanhAccount = new CurrentAccount('aman', 100);

amanhAccount.deposit(200);

console.log(rakeshAccount, amanhAccount)


///////////////////////////////////////////////////////////////////////////////////////////////

//ab agar saving  account bnana ho to fir copy

function SavingAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now()
    this.balance = balance;
    this.transaction = 50000;

}

SavingAccount.prototype.takePersonelLone = function (amount) {
    console.log("takings personal lone" + amount)
}

SavingAccount.prototype.deposit = function (amount) {
    this.balance += amount
};

SavingAccount.prototype.withdraw = function (amount) {
    this.balance -= amount

}


const rakeshSavingAccounts = new SavingAccount('rakesh');
const amanhSavingAccounts = new SavingAccount('aman', 100);

// amanhAccounts.deposit(200);



console.log(rakeshSavingAccounts, amanhSavingAccounts)



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//hmne account ke liye alag, saveaccount ke liye alag,currentaccount ke liye alag


///hmne kitna repeatation kiya hi ek hi methods  ek hi extra property chahiye thi to iske liye sari property ko repeat ki jaruret padi



//but hme repeat karni nhi hai bar bar///////////////////////////////////////////////////////////////////



//to hm inheritence use kar sakte parent cunstrucor bnakar uske andar common properties ya methods ko add kar denge




//baki classes ko unka children bnate hai taki parent constructer ko jitne bhi methods hai inherit karke child constructer===currentaccount,savingaccount  ko de den




function BankAccount1(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
}
BankAccount1.prototype.deposit = function (amount) {
    this.balance += amount
};
BankAccount1.prototype.withdraw = function (amount) {
    this.balance -= amount
}



function CurrentAccount1(customerName, balance = 0) {

    this.transaction = 50000;

}





function SavingAccount1(customerName, balance = 0) {

    //parent constructor ko child construter se link karte hai

    ///ise hi cunstructer linking === parent construcor ko child se link  

    //parent class ki property chahiye
    //call()=== 2 parameter 1-context,,2- jitne parameter hai savingaccount me,

    BankAccount1.call(this, customerName, balance)

    //cunstructer linking === parent construcor ko child se link

    //yahna this savingaccount ko point karega

    this.transaction = 50000;

}
///////////////////////////////////////////////////////
///abhi to sari property aa gai parent ki but methods nhi aaya to uske liye prototype me add karna hoga


//parent ka protype link ke liye  .create()  methids///////////////////////////////////////////////


//parent construtor ka protype link ke liye  .create()  methids///////////////////////////////////////////////

CurrentAccount1.prototype = Object.create(BankAccount1.prototype)
//means parent cinstructer ka protoype hai usse object bnakar current account prototype se link kara do


CurrentAccount1.prototype.takeBusinessLone = function (amount) {

    console.log("takings lone" + amount)
}



SavingAccount1.prototype = Object.create(BankAccount1.prototype)

SavingAccount1.prototype.takePersonelLone = function (amount) {
    console.log("takings personal lone" + amount)
}



const amanAccounts = new SavingAccount1('aman', 1000);



amanAccounts.deposit(500);
amanAccounts.withdraw(200);


//inheritence.js:153  Uncaught TypeError: amanAccount.deposit is not a function
//error

//amanAccount pr to deposit methods hai hi nhi wo func Bankaccount pr hai

//deposit function to bankAccount ke upar hai SavingAccount ke instence me to nhi

//parent custructer ke prototype ke upar hi deposit()



//custructer ke prototype ko access karna ho to hme 

//pahle property ko iherite karte hai




amanAccounts.takePersonelLone(10000)


console.log("last", amanAccounts)








/////////////////////////////////classes ke andar inheritence kaise kam


//////////////////////////////////////////////////////////isi function ko class methods se bnana//////////////



////////class syntax me chijen aur easy aur readable hai




class BankAccounts {

    customerName;
    accountNumber;
    balance = 0;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance
    }

    deposit(amount) {
        this.balance += amount
    }
    withdraw(amount) {
        this.balance -= amount
    }
}


///hme current account bnana hai
//extend karna hota hai bBankAccount se

///bank account ko sari property methods is class ko access ho jayegi


class CurrentAccounts extends BankAccount {
    transactionLimit = 5000;
    constructor(customerName, balance = 0) {

        super(customerName, balance)

    }
    takeBusinessLone = function (amount) {
        console.log("takings lone" + amount)
    }

}
///saving Account

       class SavingAccounts extends BankAccount {
      transactionLimit = 10000;
      constructor(customerName, balance = 0) {
     //agar hm kisi class se inherit kar rahe hain to =====>
     
     //super  construtor() call karna hoga

     super(customerName, balance)

      }
      takePersonelLone = function (amount) {
         console.log("takings personel lone" + amount)
    }

}

const atulaccount = new SavingAccount1('Atul', 1000);

atulaccount.deposit(1000);

atulaccount.withdraw(100)

atulaccount.takePersonelLone(20000)

console.log(atulaccount)