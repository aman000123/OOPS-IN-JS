

//jaise bulb bnate time sari complex machanism chejon ko hide kiya jata ha user ko uske sath jo interfere karne ke liye jo bhi available hona chahiye wo karke deta hai

//waise hi andar ki complex function ko andar hi class ke andar bnd kar dete hain  ki bhr se user class ke hidden field ya private fields ko access ka kar paye




class BankAccount {

    customerName;
    accountNumber;
    balance = 0;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance
    } z

    deposit(amount) {
        this.balance += amount
    }
    withdraw(amount) {
        this.balance -= amount
    }
}




class CurrentAccount extends BankAccount {
    transactionLimit = 5000;
    constructor(customerName, balance = 0) {

        super(customerName, balance)

    }
    takeBusinessLone = function (amount) {
        console.log("takings lone" + amount)
    }

}

const amanAccount = new CurrentAccount("Aman", 1000);

amanAccount.balance = "hello";

//  amanAccount.balance=== hm galti se number ki jgh string dal denge to 

//is karan baki ki functionality break ho sakti hai

//hame bahar se access ko rokna hai

console.log("1",amanAccount)

///abhi balance 5000 dikh raha 

///andar ki functionality ko hm bahar se hi change kar de rahe hain ye nhi hone chahiye





///////////////////////////////////////////aise design kare ki bahar access na kar paye





//////////Encaptulation == jo bhi internall chejen hai usko ham class ke andar hi rakhenge aur bahar se access nhi karne denge

//lekin usko access ke liye hm kuchh methods denge  jo public method hota hai


///////////////////////////////////////////////////////////////////////////////////////////////

///pahle private fields nhi hote the 


//// jo bhi underscore se start hota hai  _ private field hoti thi

class BankAccount2 {

    customerName;
    accountNumber;
    _balance = 0;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this._balance = balance
    }

    deposit(amount) {
        this._balance += amount
    }
    withdraw(amount) {
        this._balance -= amount
    }
}




class CurrentAccount2 extends BankAccount2 {
    transactionLimit = 5000;
    constructor(customerName, balance = 0) {

        super(customerName, balance)

    }
    takeBusinessLone = function (amount) {
        console.log("takings lone" + amount)
    }

}

const pranshAccount = new CurrentAccount2("Pransh", 1000);

pranshAccount._balance = "hello";

console.log("2",pranshAccount)

//////////////////////abhi bhi problem solve nhi hua h=  balance  hello aa hi raha


///////////////////ye convection tha ki  _undercsore wali koi bhi property ya methods hai unko bahar se access nhi karna hai




////////////////////////////////////////////////////////////////////////////////  private property ko use

///lekin recently  private property use hui hai

////////////////////////  ####   dekar



class BankAccount3 {

    customerName;
    accountNumber;
    #balance = 0;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance
    }

    deposit(amount) {
        this.#balance += amount
    }
    withdraw(amount) {
        this.#balance -= amount
    }
}




class CurrentAccount3 extends BankAccount3 {
    transactionLimit = 5000;
    constructor(customerName, balance = 0) {

        super(customerName, balance)

    }
    takeBusinessLone = function (amount) {
        console.log("takings lone" + amount)
    }

}

const pranshAccount2 = new CurrentAccount3("Pransh", 1000);

/*

pranshAccount.#balance="hello";


console.log("3",pranshAccount2)

//aise karne pr errpr

///  eld '#balance' must be declared in an enclosing class (at Encaptulation.js:174:14)

//means   balance ab private field ho chuka hai isko  hm bahar se access nhi kar sakte hain


*/






///////public proprerty bnate hai

///////////////////////////////////////////////internal private property ko access//////////////////////////////


///agar hme balanse set karna hai to ek methods    setBalance  bnate hai jo public methods hogi

///internal private prroperty ko aceess karti hai

//private property ko class ke andar aceess kar sakte hain lekin bahar nhi






//////////////////////////////////////////////////////   setBalance  ==== public methods bnate






class BankAccount4 {

    customerName;
    accountNumber;
    #balance = 0;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance
    }

    deposit(amount) {
        this.#balance += amount
    }
    withdraw(amount) {
        this.#balance -= amount
    }

    setBalance(amount) {
        //input ko validate kar lete hai taki amount me string na ho

        if (isNaN(amount)) {

            throw new Error("Amount is not a valid input")

        }
        this.#balance = amount
    }

    getBalance() {

        return this.#balance;


    }
}
///is trah hm getters   setters ko use karke hm privare property ko modify ya initialise karti hain



class CurrentAccount4 extends BankAccount4 {
    transactionLimit = 5000;
    constructor(customerName, balance = 0) {

        super(customerName, balance)

    }
    takeBusinessLone = function (amount) {
        console.log("takings lone" + amount)
    }

}

const pranshAccount3 = new CurrentAccount4("Pransh", 1000);

pranshAccount3.setBalance(2000);

///valid kar liye isliye   input sahi nhi ka error throw karega

//pranshAccount3.setBalance("hello");

// console.log("p",pranshAccount3.#balance)


console.log("3", pranshAccount3.getBalance())


///private field ko is trah access nhi kar sakte uske liye bhi method bnana hoga


///ab balanse 2000 ho chuka hai






//////////////////////javascript me naye syntax aaya hai -------set ====== get ke liye


class BankAccount5 {

    customerName;
    accountNumber;
    #balance = 0;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance
    }

    deposit(amount) {
        this.#balance += amount
    }
    withdraw(amount) {
        this.#balance -= amount
    }

    set Balance(amount) {


        if (isNaN(amount)) {

            throw new Error("Amount is not a valid input")

        }
        this.#balance = amount
    }

    get Balance() {

        return this.#balance;


    }
}
///is trah hm getters   setters ko use karke hm privare property ko modify ya initialise karti hain



class CurrentAccount5 extends BankAccount5 {
    transactionLimit = 5000;
    constructor(customerName, balance = 0) {

        super(customerName, balance)

        ////jo private property ko hm sirf class ke andar hi access kar sakte hai 

        ////sab class me access karenge to kam nhi karega


        //console.log(this.#balance)

    }
    takeBusinessLone = function (amount) {
        console.log("takings lone" + amount)
    }

}

const pranshAccount4 = new CurrentAccount5("Pransh", 1000);




// ab hm getter ko as normal property se access kar lete hain

//dikha method hi hi

//get  keyword ki wajah se


//ab set bhi kar sakte hain balance ko

//bina methode jaise ko call karke 

pranshAccount4.Balance = 5000

console.log("A", pranshAccount4.Balance)


//////////yahi khashiyat hai   get  set ki



////jo private property ko hm sirf class ke andar hi access kar sakte hai 

////sab class me access karenge to kam nhi karega





///////////////private property ke trah private methods bhi bna sakte hai


///jo bhi internal logic hota hai usko bahar access dene ki jarurat nhi hogi



class BankAccount6 {

    customerName;
    accountNumber;
    #balance = 0;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance
    }

    deposit(amount) {
        this.#balance += amount
    }
    withdraw(amount) {
        this.#balance -= amount
    }

    set Balance(amount) {


        if (isNaN(amount)) {

            throw new Error("Amount is not a valid input")

        }
        this.#balance = amount
    }

    get Balance() {

        return this.#balance;


    }
}


class CurrentAccount6 extends BankAccount6 {
    transactionLimit = 5000;
    constructor(customerName, balance = 0) {

        super(customerName, balance)

        ////jo private property ko hm sirf class ke andar hi access kar sakte hai 

        ////sab class me access karenge to kam nhi karega


        //console.log(this.#balance)




    }


    calculateInterest(amount) {

        console.log("calculating interset")

    }
    takeBusinessLone = function (amount) {

        ///////////////private property ke trah private methods bhi bna sakte hai

        ///logics


        this.calculateInterest(amount)


        console.log("takings lone" + amount)
    }

}

const pranshAccount5 = new CurrentAccount6("Pransh", 1000);



pranshAccount5.calculateInterest(40000)

//abhi calculateinginterst  ko  call kar rahe hain bahr se

//jbki ye to enternale method hai

console.log("A", pranshAccount5)





//////////////////////////private method bnate hain




class BankAccount7 {

    customerName;
    accountNumber;
    #balance = 0;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance
    }

    deposit(amount) {
        this.#balance += amount
    }
    withdraw(amount) {
        this.#balance -= amount
    }

    set Balance(amount) {


        if (isNaN(amount)) {

            throw new Error("Amount is not a valid input")

        }
        this.#balance = amount
    }

    get Balance() {

        return this.#balance;


    }
}


class CurrentAccount7 extends BankAccount7 {
    transactionLimit = 5000;
    constructor(customerName, balance = 0) {

        super(customerName, balance)




    }

    //create private methods

    #calculateInterest(amount) {

        console.log("calculating interset")

    }
    takeBusinessLone(amount) {
        this.#calculateInterest(amount)
        console.log("takings lone" + amount)
    }

}

const pranshAccount6 = new CurrentAccount7("Pransh", 1000);



pranshAccount6.takeBusinessLone(40000)

//ab yahna public method ko call karna 

console.log("Ak", pranshAccount6)


