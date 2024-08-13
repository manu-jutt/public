const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const paypalbtn = document.getElementById("paypalbtn");
const mybutton = document.getElementById("mybutton");
const subresult = document.getElementById("subresult");
const payresult = document.getElementById("payresult");


mybutton.onclick = function(){
    if(mycheckbox.checked){
        subresult.textContent = `Thanks for subscribing:)`;
    }
    else{
        subresult.textContent = `Why are you still not sbuscribe mate?)`;
    }

    if(visabtn.checked){
        payresult.textContent = `You are paying thruough Visa Card.`;
    }
    else if(mastercardbtn.checked){
        payresult.textContent = `You are paying thruough Master Card.`;        
    }
    else if(paypalbtn.checked){
        payresult.textContent = `You are paying thruough PayPal.`;
    }
    else{
        payresult.textContent = `You need to select method for the payment.`;
    }
}