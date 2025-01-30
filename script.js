
// Calculator Program

const display = document.getElementById('display');

function hello(){
    console.log("HO");
}
function appendToDisplay(input){
    // we have defined display as a const value i.e. "display" variablecontent cannot be changed but display.value can change...
    display.value += input;
}

function clearDisplay(){
    display.value = "";   
}

function calculate(){
    try{
        display.value = eval(display.value); // This can cause error for an incomplete equation, etc. So use error handling...
    }
    catch{
        display.value = "Error";
    }
}