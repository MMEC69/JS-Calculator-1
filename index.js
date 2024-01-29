//calculate program

const display = document.getElementById("display");

function appendToDisplay(input){
    //onsole.log(input);
    if(display.value === "Error"){
        display.value = input;
        return;
    }
    display.value += input;
    
    
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    
}

function clearDisplay(){
    display.value = "";
}