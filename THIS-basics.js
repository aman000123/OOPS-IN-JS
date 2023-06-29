
//global = window,browser


//yahna this globals function 

function myFunctions(){
    console.log(this === global);
}

myFunctions()




//obj ke andar ek function liya myobjects ko call kiya

//ab this globa nhi rah gaya

/*

var myobjects={
    myFunction:function(){
        console.log(this === myobjects) //prints true
    }
}

 myobjects.myFunction()

 */





//object decoration same ho but call karte time variables me assign kare to this global ho jayega


var myobjects={
    myFunction:function(){
        console.log(this === myobjects) //prints false
    }
}

//directly call na karke assign var se call

//agr usi object ko variables me assign kar de to global ho jayega

var myFunction = myobjects.myFunction;

myFunction()


//ab false print hoga



var myobjects={
    myFunction:function(){
        console.log(this === myobjects) //prints true //yahna myobjects ka refrence hai

  setTimeout(function(){

    console.log(this === myobjects) //prints false  global ho gaya  

    //yahna myobjects ka refrence nahi hai

    
    console.log(this === global) //prints true


  },3000)


    }
}

myobjects.myFunction()




//agr 

//object.function()

//call to funcion ke andar this key object ko 

//otherwise false

//agr usi object ko variables me assign kar de to global ho jayega lone-50