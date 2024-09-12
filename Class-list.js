const myButton = document.getElementById("mybutton");

myButton.classList.add("enabled");
myButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
})
myButton.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
})
myButton.addEventListener("click", event => {
    event.target.classList.replace("enabled", "disabled");
})