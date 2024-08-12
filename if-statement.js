const mytext = document.getElementById("mytext");
const mybutton = document.getElementById("mybutton");
const myh3 = document.getElementById("myh3"); 

let age;

mybutton.onclick = function(){

    age = mytext.value;
    age = Number(age);

    if(age >= 100){
        myh3.textContent = `You are ${age} years old. HOW??? Why are you still alive?`;
    }
    else if(age >= 18){
        myh3.textContent = `You are ${age} years old and eligible for this site`;
    }
    else if(age < 0){
        myh3.textContent = `You are ${age} years old which is not even possible mate`;
    }
    else if(age == 0){
        myh3.textContent = `You are ${age} which means you are just born why are you even here`;
    }
    else{
        myh3.textContent = `You are ${age} years old and not eligible for this site`;    
    }
}


age = Number(age);

