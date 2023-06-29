
//A JavaScript class is not an object.
//It is a template for JavaScript objects.
//The constructor method is called automatically when a new object is created.


//class syntax js es-6
//class  keyword    classname


//constructer function ko hi class me convert karte hai 
// const myName= class{




class myName {
    name; class1; mother;
    constructor(name, class1, mother) {

        //constructor  =======> >=> => It is used to initialize object properties
        // If you do not define a constructor method, JavaScript will add an empty constructor method.
        this.name = name;
        this.class1 = class1;
        this.mother = mother;


    }

}

const myName1 = new myName("aman", "3", "kusum",)
console.log(myName1);

//myName { name: 'aman', class1: 3, mother: 'kusum' }


//or  //both gives same outputs



/*
class myName{


    constructor(name,mother){
        this.name = name;
        this.class1= 3;
        this.mother=mother;


    }
}
const myName1 = new myName("aman","kusum")

console.log(myName1);

////myName { name: 'aman', class1: 3, mother: 'kusum' }
*/


/*



// class BankAccount{

//     //in this bracket variables is property and jo bhi function honge we methods honge
// }



//class ke andar properties ko add


class BankAccount{

    customerName;
    accountNumber;
    balance;

    constructor(customerName,balance=0){

        this.customerName=  customerName;
        this.accountNumber = Date.now();
        this.balance = balance
    }

}

const amanAccount = new BankAccount("aman",100);

console.log(amanAccount)

*/


//////////////////////////////////////////////////////////////////////class ke andar method ko kaise add





// const BankAccount = class{

//class ko assign karke bhi use kar sakte hai

class BankAccount {

    customerName;
    accountNumber;
    balance;

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




    //class  me alag se prototype ke andar method nhi dene hote class ke andar se hi automatic prototype ke upar add ho jati isse memeory ki bchat bhi hoti hi

    //outputs


    /*  { BankAccount {customerName: 'aman', accountNumber: 1681992060040, balance: 100}
   accountNumber
   : 
   1681992060040
   balance
   : 
   100
   customerName
   : 
   "aman"
   [[Prototype]]
   : 
   Object
   constructor
   : 
   class BankAccount
   deposit
   : 
   ƒ deposit(amount)
   withdraw
   : 
   ƒ withdraw(amount)
   [[Prototype]]
   : 
   Object}*/
}

const amanAccount = new BankAccount("aman", 100);

amanAccount.deposit(1000)

console.log(amanAccount)




const atulaccount = new BankAccount("atul");

atulaccount.deposit(500);

atulaccount.withdraw(400);

console.log(atulaccount)




//cuntructer function se jyada readable hoti hai class


//readable bhi hai

//mehtods bhi hmara usi ke andar kam kar rahi


hello()

function hello() {
    console.log("hello")
}


hello()



//normal function ko cal karne pr koi problem nhi

//hello () upr bhi call ho raha niche bhi yahi hosting hai

//lekin classes me kam nhi karegi


//class ke sath hostings kam nhi karti

//pahle declarion phir


/////////hme classs pahle bnnani hogi fir use karni hogi iisse hosting nhi ho sakti hai


