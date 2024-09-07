const newh1 = document.createElement("h1");

newh1.textContent = "I like Pizza!"
newh1.id="myH1";
newh1.style.color = "tomato";
newh1.style.textAlign = "center";

//document.body.append(newh1);
document.getElementById("box1").append(newh1);
document.getElementById("box2").prepend(newh1);
document.getElementById("box3").append(newh1);
document.getElementById("box4").prepend(newh1);

//const box2 = document.getElementById("box2");
//document.body.insertBefore(newh1, box2)

//const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newh1, boxes[3])

