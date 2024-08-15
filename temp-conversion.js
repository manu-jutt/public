const textbox = document.getElementById("textbox");
const toFar = document.getElementById("toFar");
const toCel = document.getElementById("toCel");
const result = document.getElementById("result");
let temp;

function convert(){
    
    if(toFar.checked){
        temp = Number (textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + "°F"
    }
    else if(toCel.checked){
        temp = Number (textbox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp + "°C"
    }
    else{
        result.textContent = "Select a unit";
    }
}