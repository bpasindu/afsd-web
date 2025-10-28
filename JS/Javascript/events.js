function clickEvent(){
    console.log('Run the click button..')
}

function clickBlue () {
    document.getElementById('color-change').style.backgroundColor = "blue";
    document.getElementById('color-change' , 'mouseEvent').style.borderRadius = '100px';
}

function clickRed () {
    document.getElementById('color-change').style.backgroundColor = 'red';
    document.getElementById('color-change').style.borderRadius = '0px';
}

function mouseIn () {
    document.getElementById('mouseEvent').style.backgroundColor = 'red';
}

function mouseOut(){
        document.getElementById('mouseEvent').style.backgroundColor = 'green';
}

function mouseIn () {
    document.getElementById('image-box').style.backgroundImage = "url('../assetsImage/chat-c.png')";
}

function mouseOut(){
    document.getElementById('image-box').style.backgroundImage = "url('../assetsImage/chat-c-1.png')";
}

function mouseIn () {
    document.getElementById('image2').src = "../assetsImage/chat-c.png" ;
}

function mouseOut(){
    document.getElementById('image2').src = "../assetsImage/chat-c-1.png" ;
}

/* Key events */

function keyDownEvent () {
    const name = document.getElementById("name").value;
    console.log(name);
    //console.log("Key down");
}

function keyPressEvent (){
    const name = document.getElementById("name").value;
    console.log(name);
    //console.log("Key Press...")
}

function keyUpEvent (){
    //console.log("Key UP");
    const name = document.getElementById("name").value;
    console.log(name);
    document.getElementById("display1").innerText = name;
    document.getElementById("display2").innerHTML = `<p> ${name} </p>`
}

/* inner tag to display inserted values */

