
//each objects haves own properties and objects


//obj1 ke pass apni khud ki properties,apna methods ho sakte ha

//obj2 ke pass apni khud ki properties,apna methods ho sakte ha

//but in js obj1 ke apni property , obj2 ki apni roperty ho sakti hai

//but methods ko seprately likhkar call,apply,bind se use kar sakte hain

//common methods various objects ke liye likh sakte hain


//create one object property ke sath

const obj1={num:2}


//create a methods===function

const addToThiss = function(a){

    return this.num+a;
}

//obj ke pass property to hai but koi methods nhi hai

//addtothis methods ke pass koi  num name ki property nhi hai to kaise return karega  ===== this.num  ko



/////////////////////////////////////////hint=======>>>>functionName.call(obj,functionsarguments)

 console.log(addToThiss.call(obj1,3)) // ==>5


//addToThis function call kiya obj1 ke liye

//obj1 ki property ko addToThis function me this .num se access kiya

//arg 3 function ka arg 



//if we have multi arg then

const addToThis11 = function(a,b,c,d){

    return this.num+a+b+c+d;
}


console.log(addToThis11.call(obj1,3,4,5,6))

//out == 20


//call function ko objects se attach karta temporarely


//////////////////////////////////////////////////////////////////////////////////////////////////////apply()


//arg in Array

const arr = [3,4,5,6]

console.log(addToThis11.apply(obj1,arr))


console.log(addToThis11.apply(obj1,[3,4,5,6]))

//array me sabhi arg ko pass na karke ek array me combine karke pass karte hai





/////////////////////////agr many objects ho to

const obj11={num:2}


const obj12={num:3}

const addToThis01 = function(a,b,c,d){

    return this.num+a+b+c+d;
}





/////////////////////////////////////////////////////////////////////////////////////////////////////////bind()





const objbind={num:2}



const addToThisbind = function(a,b){

    return this.num+a+b;
}

const arrbind=[1,3];




console.log(addToThisbind.bind(objbind,arrbind))

//sidha console.log karne par
//binds gives us function which have ability to execute this  

//abhi to output

// ƒ (a,b){

//     return this.num+a+b;
// }

//so hm ek naya object bnate hai




const bound = addToThisbind.bind(objbind)

console.dir(bound)




//call aplly me directly execute kar deta hai function 

//bind me executes nhi karta 

//hme function return karta wapas

//jise hm execute kar lete hai

// const bo=bound(1,2,3)

// console.log(bo)




//in a nuttshell  


var objj = {num:5};


var myFunctions = function(arg10,arg20,arg30){

    return this.num+arg10+arg20+arg30


};

myFunctions.call(objj,1,2,3)

myFunctions.call(objj[1,2,3])





//bind me pahle kewal object ko apply karte 

//firyah bound function return karta hai


//tb inke sath arg pass kar sakthain function ko execute ke liye

var bound1 = myFunctions.bind(objj);


bound1(1,2,3)
