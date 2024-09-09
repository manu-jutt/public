//const newh1 = document.createElement("h1");
const newlistitem = document.createElement("li");
//newh1.textContent = "I like Pizza!"
//newh1.id="myH1";
//newh1.style.color = "tomato";
//newh1.style.textAlign = "center";
newlistitem.textContent= "Coconut";
newlistitem.id = "coconut";
newlistitem.style.fontWeight = "bold"
newlistitem.style.backgroundColor = "lightgreen";

//document.body.append(newh1);
//document.getElementById("box1").append(newh1);
//document.getElementById("box2").prepend(newh1);
//document.getElementById("box3").append(newh1);
const orange = document.getElementById("banana");
document.getElementById("friuts").insertBefore(newlistitem, orange);
//document.body.prepend(newlistitem);
//document.body.insertBefore(newh1, orange)

//const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newh1, boxes[3])

