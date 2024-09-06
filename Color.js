const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElements =>{
    const lastchild = ulElements.lastElementChild;
    lastchild.style.backgroundColor = "yellow";
})

ulElements.forEach(ulElements =>{
    const firstchild = ulElements.firstElementChild;
    firstchild.style.backgroundColor = "red";
})

const element1 = document.getElementById("apple");
const next1 = element1.nextElementSibling;
next1.style.backgroundColor = "orange";

const element2 = document.getElementById("carrot");
const next2 = element2.nextElementSibling;
next2.style.backgroundColor = "orange";

const element3 = document.getElementById("cake");
const next3 = element3.nextElementSibling;
next3.style.backgroundColor = "orange";