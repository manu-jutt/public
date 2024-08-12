const oncebtn = document.getElementById("oncebtn");
const twicebtn = document.getElementById("twicebtn");
const thricebtn = document.getElementById("thricebtn");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const max = 6;
const min = 1;
let randomnum1;
let randomnum2;
let randomnum3;


oncebtn.onclick = function(){
    randomnum1 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomnum1;
    label2.textContent("empty")  ;
    label3.textContent("em")  ;

}

twicebtn.onclick = function(){
    randomnum1 = Math.floor(Math.random() * max) + min;
    randomnum2 = Math.floor(Math.random() * max) + min;

    label1.textContent = randomnum1;
    label2.textContent = randomnum2;
    label3.textContent ("") ;
}

thricebtn.onclick = function(){
    randomnum1 = Math.floor(Math.random() * max) + min;
    randomnum2 = Math.floor(Math.random() * max) + min;
    randomnum3 = Math.floor(Math.random() * max) + min;

    label1.textContent = randomnum1;
    label2.textContent = randomnum2;
    label3.textContent = randomnum3;
}