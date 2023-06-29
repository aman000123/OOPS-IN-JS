

let add = function(c){

    console.log(this.a + this.b +c)
}

//abhi to a,b hai nhi is function me

//ek obj bnate hai a,b propety ke sath

let obj={
    a:1,b:2

}

add.call(obj,4)

//add functin ko is obj pr use kiya 

//jo iska part nhi 

//lekin use kar sakte hai