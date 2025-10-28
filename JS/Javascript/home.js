console.log("AFSSD")

document.writeln("<h2>DOM manipulation</h2>");
document.writeln("<h3>Pasindu</h3> <p style=background-color:red> I live in <br> Gampaha </p>")

//Data Types
//number

const num= 30;

//string

const string = "Pasinduu";

//boolean

const boolean = true;

//object

const obj = {}

//array

const arr = []

//variable types

//var

var v = 10;
console.log(v)

var v = 20
console.log(v)

v = 30
console.log(v)

{var vv = 100;}
console.log(vv)

//let

let l = 10;
console.log(l)

//let l = 20;

l = 30;
console.log(l)

{l=40;}
console.log(l)

{let ll = 100;}
//console.log(ll)


//const

const c = 10;
console.log(c)

//const c = 20;

//c = 30;
console.log(c);

{const cc = 40;}
//console.log(cc);


//Arithmetic operator

let n1 = 10;
let n2 = 20;

//addition
console.log(n1+n2)

//subtraction
console.log(n1-n2)

//multiplication
console.log(n1*n2)

//division
console.log(n1/n2)

//modulas
console.log(n1%n2)

//increment
console.log(++n1)

//decrement
console.log(--n2)

//comparision operators
console.log("Comperison operator")

var n3 = 40;
var n4 = '40';

//equal
console.log(n3==n4)

//equal value and data type
console.log(n3===n4)

//notequal
console.log(n3!=n4)

//greater than
console.log(n3>n4)

//less than
console.log(n3<n4)

//greater than or equal
console.log(n3>=n4)

//less than or equal
console.log(n3<=n4)

//logical operators
console.log("Logical operator")

const e = true;
const f =  false;

//&&
console.log(e && f)

// ||
console.log(e || f)

// !
console.log(e != f)

//function

//parametarized functions

function addTwoNumbers (num1,num2) {
    console.log(num1+num2)
}

addTwoNumbers(30,40);
addTwoNumbers(4569930,95959590);


//return functions

function AdditionNumber () {
    const num1 = 45;
    const num2 = 60;
    console.log("Run addition number function....");
    return(num1+num2);
}

console.log(AdditionNumber());

//AlAverage

console.log("Average A/L Mark");

function Average(mark1, mark2, mark3){
    return((mark1+mark2+mark3)/3)
}

console.log(Average(90, 90, 90));


/// Types of functions

// named functions

function getName (){

}

//annonymous function

const getAddress = function (){
    
}

//arrow function

const getTown = () => {

}

//classMarks

function Grade(mark){
    if(mark>=75){
        return ("A");
    }else if(mark>=65){
        return ("B");
    }else if(mark>50){
        return ("C");
    }else if(mark>35){
        return ("S");
    }else{
        return ("F");
    }
}

console.log(Grade(68));
console.log(Grade(24));
console.log(Grade(87));

function getName(letter) {
    switch(letter){
        case 'A':
            return ("Amal");
            break;
        case 'B':
            return ("Bhanuka");
            break;
        case 'C':
            return ("Chathura");
            break;
        case 'D':
            return ("Damith");
            break;
        case 'E':
            return ("Eshan");
            break;
        default:
            return("none");
    }
}

console.log(getName('D'));
console.log(getName('A'));
console.log(getName('B'));
console.log(getName('C'));
console.log(getName('K'));

