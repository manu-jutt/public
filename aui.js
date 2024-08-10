//let username;

//username = window.prompt("What's your username?")

//console.log(username)

let username;
document.getElementById("mysub").onclick = function(){
    username = document.getElementById("test").value;
    document.getElementById("wel").textContent = `Hello ${username}`;
}