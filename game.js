var score = 0;

var number1 = Math.round(Math.random()* 100)
number1box = document.getElementById("number1")
number1box.innerHTML = number1

var number2 = Math.round(Math.random()* 100)
number2box = document.getElementById("number2")
number2box.innerHTML = number2

const greaterThan = document.getElementById("greater-than")
greaterThan.onclick=()=>{
    if(number1>number2){
        score++;
    }
    else{
        location.href="./gameover.html?score" + score
    }
    number1 = Math.round(Math.random()* 100)
    number1box.innerHTML = number1
    number2 = Math.round(Math.random()* 100)
    number2box.innerHTML = number2

}

const equalTo = document.getElementById("equal-to")
equalTo.onclick = ()=>{
    if(number1==number2){
        score++;
    }
    else{
        location.href="./gameover.html?score" + score
    }
    number1 = Math.round(Math.random()* 100)
    number1box.innerHTML = number1
    number2 = Math.round(Math.random()* 100)
    number2box.innerHTML = number2

}

const lesserthan = document.getElementById("lesser-than")
lesserthan.onclick = () => {
    if(number1<number2){
        score++;
    }
    else{
        location.href="./gameover.html?score" + score
    }
    number1 = Math.round(Math.random()* 100)
    number1box.innerHTML = number1
    number2 = Math.round(Math.random()* 100)
    number2box.innerHTML = number2

}