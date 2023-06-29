class myFunction {
    name;
    age;
    father;
    salary;
    constructor(name, father, salary) {
        this.name = name;
        this.age = 80;
        this.father = father;
        this.salary = salary;
        this.rollNo = 34
    }


}

const employee = new myFunction("Aman", "ambe", "28000")
console.log(employee)



class myName {

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.classes = 10
    }
}

const myname = new myName("pransh", 23)
console.log(myname)
console.log(myname.name)




function myFunction0(name, age) {
    this.name = name;
    this.age = age
}

const myf = new myFunction0("aman", 12)

console.log(myf)
/*

function myFunction0(name) {
    this.name = name;
    this.age = 30
}

const myf = new myFunction0("aman")

console.log(myf)

*/

function StudentRecord(name, class1, sub, roolno) {

    this.name = name,
        this.class1 = class1,
        this.sub = sub,
        this.roolno = roolno
}

const strecord = new StudentRecord("Aman", 10, "English", 12)

console.log("strecord", strecord);

console.log(strecord.name)

strecord.name = "atul";
console.log(strecord.name)