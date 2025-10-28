function Namal(){
    console.log("Namal");
}

function Amal(){
    console.log("Amal")
}

function Tharindu(call){
    call(34);
    console.log("Tharindu");
}

Tharindu(function (val){
    console.log(val);
});



// function calling(call){
//     call();
// }

// calling(Tharindu);
// calling(Amal);
