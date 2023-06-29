

//class ke instance == new lagakar jo object bnae hai wahi hai instance



/////////aise property jinka  class ke instence se koi mtlb nahi hota hi=====static methods

////static property ko instence ke upr  acess nhi kar sakte




//static methods ko use karne ke liye class ka instence bnane ki jarurat nhi



//static method   ko configuration,cashing,utility function bnanae me use karte


///////////////////////////////////////////////////////////////////////////////////////////////////////


////utility function ke liye kaise static methods ka use karte hai

class user {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


//inke do instence bnate user1, user2///////////////


const user1 = new user("Aman", 30)

const user2 = new user("Aman mis", 20)


const user3 = new user("Aman mishra", 25)


console.log(user1, user2, user3)


//abhi log me tino user hai 


//hme static methods ko use karna na 


///sare user jo bna rahe unko age wise sort karna hai

//array me dalte



const users = [user1, user2, user3];

users.sort((a, b) => a.age - b.age)


console.log("1", users)


//hmne sort age ke hisab se kiya hai 


//sort jo kiya wo user se related hi hai

////lekin sabhi feature to user clas se related hain 


///////user ke andar hi method ko store karenge  to wo user class ke instance se bind ho jayega

//hm sare user ko compare  kar rahe

//instance methods ko use karke sort karna sense nhi bnata




///////////////////////////////////////////////////////////////////////////////

//isliye static methods bnate

class user0 {

    constructor(name, age, income) {
        this.name = name;
        this.age = age;
        this.income = income
    }

    //static keyword
    static compareByAge(user01, user02) {
        return user01.age - user02.age
    }

    static compareByIncome(user01, user02) {
        return user01.income - user02.income
    }
}


//static methods ya property jo class ke andar hoti h unko instance ke upar nhi call kar sakte kyunki

//instence   ka    static ka koi relation nahi hai


////////////////////////////////////////////////////////////////////////////////////////////////////////
//[[[[[[[[static property aur methods class ke upar store ho jati hain]]]]]]]]]]]]]]]]]]]

//user1.compareByAge()  aise nhi


//[[[[[[[[[[[[[[[[lekin normal property  wo instance ke andar store ho jati]]]]]]]]]]]]]]]]]]]]
/////////////////////////////////////////////////////////////////////////////////////////////////////

const user11 = new user0("Aman1", 30, 5000)

const user22 = new user0("Aman1 mis", 20, 10000)


const user33 = new user0("Aman1 mishra", 25, 7000)

const userss = [user11, user22, user33];

// userss.sort(user0.compareByAge)

userss.sort(user0.compareByIncome)


console.log("2", userss)


///////////////////////ye utility function tha

//////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////static property ko use


//////////////////////jb bhi koi user create ho to usko ek id assign karnu=i

//wo id har ek user ke create ke  bad increment ho jaye




///incriment
/*

let id=1;

class user00{

    constructor(name,age, income){
        this.name = name;
        this.age = age;
        this.income = income;
        this.id = id++
    }




//static keyword
    // static  compareByAge(user01, user02){
    //     return user01.age-user02.age
    // }

    // static  compareByIncome(user01, user02){
    //     return user01.income-user02.income
    // }
}


const user110 = new user00("Aman1",30, 5000)

const user220 = new user00("Aman1 mis",20, 10000)


const user330 = new user00("Aman1 mishra",25, 7000)

const userss0 =[user110,user220,user330];

// userss.sort(user0.compareByAge)

// userss.sort(user0.compareByIncome)


// console.log("3",userss0)

console.log("4",user110,user220,user330)



*/

//////////////////////////lekin id ko class ke andar hi store karna hoga

//iska aur instence ka koi link nhi alag se increase karna




////static property


// let id=1;

class user00 {

    static id = 1

    constructor(name, age, income) {
        this.name = name;
        this.age = age;
        this.income = income;

        //this instence ko point karta  new User1, new User2  instence hi hai
        //lekin property static hai
        //this.id=this.id

        this.id = user00.id++
    }

}


const user110 = new user00("Aman1", 30, 5000)

const user220 = new user00("Aman1 mis", 20, 10000)


const user330 = new user00("Aman1 mishra", 25, 7000)

const userss0 = [user110, user220, user330];

console.log("4", user110, user220, user330)









/////////////////////////////////////////////////////////////////////////////////////////////

//configuration ke liye static property aur methods kaise use hota

//agr hme application ke liye ek hi config chahiye alag alag instence ki jaruret nhi

//is case me configuration ko static bna sakte


class config {

    static dbuser = "user";
    static dbpassword = "aman";
    static apiToken = "abcd"

    //config ko modify karne ke liye agar kuch method use hi to udse kar sakte hai yahna niche isi class me bna sakte

}

//yahna access ke liye instence bnane ki jarurat nhi padti
/*
aise nhi acces kar sakte dbuser ko

const config = new config();
config.dbuser
*/


////////////////////////////////////static property ko aise access karte hai

//alag se instance bnanae ki jarurat nahi padti access karne ke liye


//access dbuser ko

console.log(config.dbuser)

console.log(config.apiToken)










///////////////////////////////////////////////////////////////////////////////////////////////////

//static property aur methods class ke andar kahna kahna pr access hoti hai class ke andar

class user000 {

    static id = 1

    static cash = {
        '1': 'some'
    }

    constructor(name, age, income) {
        this.name = name;
        this.age = age;
        this.income = income;
        this.id = user00.id++
    }

    static check() {
        console.log(this.cash)
    }

    static hasInCash() {

        //normal methods me aise nhi  laga sakte this ko

        this.check()
        //this tabhi kam karega static methods se static propert ya methods access kar rahe tbhi kam karea
        // console.log(this.cash)


    }



    ///////////static block
    static {

        console.log("initialised")
    }

    //ye block class ke andar bnata 

    //jb bhi static method pehli bar call karte hai to ek bar run hoga ye
}






user000.hasInCash()
user000.hasInCash()

//do bar calll kiye lekin block  ek hi bar call hua hai

////math.random() bhi static methods hai

//ye math ki utility hai

//math class hai

//uske upr  rendim() method call karte 



