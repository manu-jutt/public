//const is a variable that can't be changed.

const PI= 3.14159;
let rad;
let circum;

document.getElementById("mysub").onclick = function(){
    rad = document.getElementById("mytext").value;
    rad = Number(rad);
    circum = 2 * PI * rad;
    document.getElementById("h3").textContent = circum + "cm";

}