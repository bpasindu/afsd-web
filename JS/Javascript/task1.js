function addTwo(){
    let num1 = Number(document.getElementById("number1").value);
    let num2 = Number(document.getElementById("number2").value);

    document.getElementById("total").innerText = (num1 + num2);
}

function seeEqual(){
    let word1 = document.getElementById("text1").value.toLowerCase();
    let word2 = document.getElementById("text2").value.toLowerCase();

    if(word1 == word2){
        document.getElementById("total2").innerText = ("Equal");
    }else{
        document.getElementById("total2").innerText = ("Not Equal");
    }
}

function changeText(){
    let text3 = document.getElementById("text3").value;
    text3 = text3.toLowerCase();
    let words = text3.split(" ");
    for(let i = 0; i < words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    document.getElementById("total3").innerText = (words.join(" "));
}

var total4 = 0;
function addNum(){
    let number = Number(document.getElementById("number4").value.slice(-1));
    total4 = total4 + number;
    document.getElementById("total4").innerText = total4;
}

function calculateGrade(){
    let score = Number(document.getElementById("number5").value);
    let grade = " ";
    if(score>75){
        grade = "A";
    }else if(score>65){
        grade = "B";
    }else if(score>50){
        grade = "C"
    }else if(score>35){
        grade = "S"
    }else{
        grade = "Fail"
    }

    document.getElementById("total5").innerText = (grade);
}

function showPosition(){
    let text1 = document.getElementById("number6").value;
    let display;
    switch(text1){
        case "intern":
            display = "Intern Software Engineer";
            break;
        case "ase":
            display = "Associate software engineer";
            break;
        case "se":
            display = "Software Engineer";
            break;
        case "sse":
            displat = "Senior Software Engineer";
            break;
        case "tl":
            display = "Tech Lead";
            break;
        default:
            display = "Enter valid keyword";
    }
    document.getElementById("total6").innerText = (display);
}

let array1 = [];
function pushToArray(){
    number = document.getElementById("number7").value;
    array1.push(number);
    document.getElementById("number7").value = "";
}

function showArray(){
    document.getElementById("total7").innerText = array1;
}

let numbers = [];
window.onload = function() {
      // generate 50 random integers between 0 and 100
      for (let i = 0; i < 50; i++) {
        let randomNum = Math.floor(Math.random() * 101);
        numbers.push(randomNum);
      }

      document.getElementById("total8").innerText = numbers.join(", ");
};

function seeDividingNumbers(){
    let divider = Number(document.getElementById("number8").value);
    let array1 = [];
    for(let i=0; i<numbers.length ; i++){
        if((numbers[i]%divider)==0){
            array1.push(numbers[i])
        }
    }
    document.getElementById("total81").innerText = array1.join(", ");
}


console.log("workinggg")