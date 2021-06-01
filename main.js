// Display Get & Print Function===========
function getOutput(){
    return document.getElementById("display-1").innerHTML;
}
function printOutput(num){
    if(num == ""){
        document.getElementById("display-1").innerHTML = num;
    }
    else{
        document.getElementById("display-1").innerHTML = formatedNumber(num);
    }
}
function getHistory(){
    return document.getElementById("display-2").innerHTML;
}
function printHistory(num){
    document.getElementById("display-2").innerHTML = num;
}

// Formated Number for add Coma (,) ============
function formatedNumber(num){
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}

// Capture Number Button===========
let history;
let output;
let number = document.getElementsByClassName("number");
for(let i = 0; i < number.length; i++){
    number[i].addEventListener("click", function(){
        history = getHistory();
        history += this.id;
        printHistory(history);
    })
}

// Normal Number For Remove Coma (,)===============
function normalNumber(num){
    return Number(num.replace(/,/g,""));
}

// Capture Operator Button & Calculation==============

let operator = document.getElementsByClassName("operator");
for(let i = 0; i < operator.length; i++){
    operator[i].addEventListener("click", function(){
        if(this.id == "clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id == "backspace"){
            history = getHistory();
            history = history.substr(0, history.length - 1);
            printHistory(history);
            printOutput("");
        }
        else if(this.id == "="){
            history = getHistory();
            let result = eval(history);
            printHistory(history);
            printOutput(result);
        }
        
        else{
            let output = getOutput();
            history = getHistory();
            if(output){
                history = normalNumber(output) + this.id;
                printHistory(history);
            }
            else if(history == ""){
                printHistory("");
            }
            else if(isNaN(history[history.length - 1])){
                history =  history.substr(0, history.length - 1) + this.id;
                printHistory(history);
            }
            else{
                history = history + this.id;
                printHistory(history);
            }
        }
    })
}

// Square Root Calculation==========
function squareRoot(){
    output = getOutput();
    if(output){
        let result = Math.sqrt(normalNumber(output));
        printOutput(result);
    }
    else{
        let value = Math.sqrt(history);
        printOutput(value);
    }
    printHistory(history);
}

// Display Mode Dark & Light==========
function getData(product){
    var displayMode = document.getElementById("displayMode" + product);
    
    if(product == "Dark"){
        displayMode.style.display = "none";
        document.getElementById("displayModeLight").style.display = "block";
        document.body.classList.toggle("light-theme");
    }
    else if(product == "Light"){
        displayMode.style.display = "none";
        document.getElementById("displayModeDark").style.display = "block";
        document.body.classList.toggle("light-theme");
    }
}

// Current Time Function==========
let AM_PM = "";
const time = new Date();
let hour = time.getHours();
const min = time.getMinutes();

if(hour < 12){
    AM_PM = "AM";
}
else{
    AM_PM = "PM";
}

if(hour == 0){
    hour = 12;
}
else if(hour > 12){
    hour = hour -12;
}
document.getElementById("time").innerText = hour + ":" + min + " " + AM_PM;



















