

/*


function BankAccount(customerName, balance = 0) {

    this.customerName = customerName;

    //jo bhi object new key se bnate hai to use hi ye this refer karta hai

    this.accountNumber = Date.now();
   this.balance = balance;


    this.deposit = function (amount) {
      this.balance += amount
    }

    this.withdraw = (amount) => {
        this.balance -= amount

        //this jo bhi object bnate hai usko point karega   method wala this
    }



}

const rakeshAccount = new BankAccount('rakesh');
const amanAccount = new BankAccount('aman',100);
console.log(rakeshAccount,amanAccount)


*/
























//koi bhi property ya method create karte hai to uske liye memory chahiye hoti hai

//customername,accountnumber,balance  har ek object ke liye alag alag hoga

//lekin methods deposit, withdraw ek hi hona chahiye

//deposit withdraw karne ka methods to sbke liye same hota hi h

//but abhi har ek object ke liye method bn raha consol me

//chunki method jo bn raha uske andar apna khud ka data hai hi nhi

//yahna par hmari extra memory weast ho rahi hai

//data alag alag chahiye but method ek hi jgh rahe

//ek jgh rakh kar sabko use mil jaye



//har ek object ke liye methods alag alag na bne name number alag ho === methods ek hi ho

//extra memory bekar na ho

//methods ko ek jgh rakh kar magically sare objects jo bnenge constructor function se  wo access kar payen

//yahi prototype solve karte ha




////////////////////////////////////////////////create prototype////////////////////////


function BankAccount(customerName, balance = 0) {

    this.customerName = customerName;

    this.accountNumber = Date.now()

    this.balance = balance;





 }



// //const rakeshAccount = new BankAccount('rakesh');




// //object ki proprty ko access karte  . dot se
// //but BankACCOUNT to function hai

//javascript me function khud object hota ha


// //prototype ek function hota hai js me function bhi object hota hai



// console.log(BankAccount.prototype)

//prototype ke andar kuch add kart

// BankAccount.prototype.test= "this is text";

// console.log(BankAccount.prototype)


// //js me kabhi bhi function bnata hai to javascript har ek function ke upar ek property add kar deta hai default ====  

// //yahi prototype hai


// //prototype ek empty object bnata  hai {}us function ke upar  javascript me



// //obj me to property add hi kar sakte  ====>   >>>>isme hm txt add kar sakte hai .text se





// //////////////////////////////////////kya hm string ki jgh function add kar sakte////////////////////////





BankAccount.prototype.deposit= function (amount) {

    //yahna par arrow function use nhi kar sakte hai 
    //bcz arrow function ka apna khud ka context nhi hota 
    //this.balance ko window object me find karega but wo milega nhi
       

    this.balance += amount
};


// console.log(BankAccount.prototype)

BankAccount.prototype.withdraw= function (amount){

    this.balance -= amount

    //this jo bhi object bnate hai usko point karega   method wala this
}





 const rakeshAccount = new BankAccount('rakesh');

const amanhAccount = new BankAccount('aman',100);


rakeshAccount.deposit(100)

 amanhAccount.deposit(200)

console.log(rakeshAccount,amanhAccount)





//BankAccount  ek contructor hai jiske upar hmne deposit methods dala hai to jo bhi object is construter se bnega wo sab isko access kar lega methods ko
















//hmne deposit withdraw function ko cunstructer se hata diye tb kahna se output me balanse aa rahaha

//pahle methods ko javascript is object ke andar dekhegi ki deposit name ka koi method hai ya nhi

//phir us object ke constructor ka prototype me check karti hai

//js custructor ka prototype chain se check karti hai ki 



//usme to deposit hai






//agar yahn bhi na hoti to ek step upar jakar aage ka prototype  jo ki object hai wo bhi ek constructor hi hai

//object ke prototype ke andar check karega isse aage nh jayega bcz 

//object root hai

//bankaccount custructor se jitne bhi object bnege un saabko ye propeerty mil jayegi


//prototype chain ki wajah se jitne bhi object bnage us constructor se wo function sb me share ho jayega




