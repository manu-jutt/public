const myBox = document.getElementById("box");
const mybtn = document.getElementById("mybtn");

mybtn.addEventListener("click", event =>{
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH!😭";
});

mybtn.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "DON'T DO IT🙂";
});

mybtn.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me😁";
})