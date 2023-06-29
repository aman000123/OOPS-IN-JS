//complex code ko hide kar ke simple ko hi show karana hai 
//yahi abstractions hai


//////////////////////////////////////////create object usings constructers functions//////////////////
//constructor function se object kaise bnate hain
///constructor function normal function jaisa hi dikhta hai
//lekin kuch special feature hai jo oops me use hota hai

//constructor function ka pahle   letter capital ===  BankAccount()





//balance=0;   balance ki by default value ko 0 set
//bank account me name balance accountnumber hota  

//jise oops me  property kahte hai

//account number ko date se find kar lete hai
/*



function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;

    //jo bhi object new key se bnate hai to use hi ye this refer karta hai
    
    this.accountNumber = Date.now()
    this.balance = balance;
}




//make objects from this constructor

//new keyword  BankAccount()  constructer function se ek object bnayega

const rakeshAccount = new BankAccount('Rakesh k', 1000)



//rakeshAccount instance hai is constructor function ka

//amanAccount me kuch change to rakeshAccount me change nhi hoga


const amanAccount = new BankAccount('Aman k')   //0 balance account

console.log(rakeshAccount, amanAccount)


//access property 

//console.log(rakeshAccount.customerName)*/

//outputs

// BankAccount {
//     customerName: 'Rakesh k',
//     accountNumber: 1681897961836,
//     balance: 1000
//   } BankAccount {
//     customerName: 'Aman k',
//     accountNumber: 1681897961836,
//     balance: 0
//   }

//jab bhi ham object bnate hai to hmare computer ki memory hr object ki alag alag memory space rahegi 

//dusre object ka space alag hoga
//means isse kitne bhi object bna sakte hain

//har ek ka data space ke andar alag alag hoga

//amanAccount me kuch change to rakeshAccount me change nhi hoga


//isse kitne bhi object bna sakte hai



//agar balance ko change karna to

//rakeshAccount.balance=2000;

//console.log(rakeshAccount.balance)

//balance 2000




















////////////////////////////////////////////////////////////////////////////////////////////////////////

//but is trah se object ke baharr balance ko change karke aise nhi kar sakte ha

//ooop me ek feature [[[[[[[[encaptulations]]]]]]]] hota hai jisme jo bhi cheejen hai usko class ke abdar private bna dete hai to hm modify nhi kar payenge


//modify ke liye setters() use karte


//isi trah hm kuch methods bhi dal sakte

//function jo classes ke andar use karte hain use method bolte hai

//variables ko properties bolte hai

//ek method bnate hi use call karke balance change kar sake





function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now()
     this.balance = balance;

     this.deposit = function (amount) {
// this.balance = this.balance + amount
      this.balance += amount
    }
    //withdraw

    this.withdraw = (amount) => {
   // this.balance = this.balance - amount
        this.balance -= amount
    }



}

//ham constructor function se ek object bna rahe  rakeshAccount

//phir uski property ko use 

//constructor ke andar se koi mtlb nhi






/*
 const rakeshAccount = new BankAccount('rakesh', 1000);

const amanAccount = new BankAccount('Aman')

 rakeshAccount.deposit(5000)

 amanAccount.deposit(2000)

rakeshAccount.withdraw(2000)

 console.log(rakeshAccount, amanAccount)
*/





/////////////////////////////////////////////////////////////////dom manipulation for deposits or withdraw 










//ab balance 6000 ho jayega

//amanAccount  ka 0 hi hoga

// sare account ko store arraye me  by default empty

//arr me in memory store

const accounts =[];


const accform = document.querySelector('#accountForm');

const customerName = document.querySelector('#name');

const balance = document.querySelector('#balance')


accform.addEventListener('submit',(e)=>{

e.preventDefault();


 const account = new BankAccount(customerName.value, + balance.value)

    //balance ki number bnana hai string se===> + sign se

//    console.log(customerName.value, balance.value)

accounts.push(account)

  console.log(accounts)

})






 const depform = document.querySelector('#depositForm');

 const acountnumber = document.querySelector('#acountnumber');

 const depositammount= document.querySelector('#depositammount');


depform.addEventListener('submit',(e)=>{

    e.preventDefault();

    //sare account number get karke usko find karne hai jo input me dala h

    //accounts array me sare account hai

   const account1 =  accounts.find(
     (item)=>item.acountnumber === +acountnumber.value
    );

    //input se strings aa rahi hai number bnana hai

    account1.deposit(+depositammount.value);

    console.log(accounts)

})




///////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////object constructor se object bnana

// function Aman(name,class1=7,sub,disc){
//     this.name=name,
//     this.class1= class1,
//         this.sub=sub,
//         this.disc=disc

// }

// const am= new Aman("Atul",10,"math","hello");
// console.log(am)








// function StudentRecord(name,class1,sub,roolno){

//     this.name=name,
//     this.class1=class1,
//     this.sub=sub,
//     this.roolno= roolno
// }

// const strecord = new StudentRecord("Aman",10,"English",12)

// console.log(strecord);

// console.log(strecord.name)

// strecord.name="atul";



// console.log(strecord.name)

