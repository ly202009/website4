const body = document.body

let box1 = adddiv()
box1.innerText='Raindrop'
box1.style.color = "grey";
box1.setAttribute('class','word')
box1.style.borderBottom = "hidden"

let box2 = adddiv()
box2.innerText='and';
box2.setAttribute('class','word')
box2.style.fontSize = "60px"
box2.style.borderBottom = "hidden"
box2.style.borderTop = "hidden"

let box3 = adddiv()
box3.innerText='Mango!'
box3.style.color = "orange";
box3.setAttribute('class','word')
box3.style.borderTop = "hidden"

let box4 = adddiv()
box4.style.width = "1200px"
box4.style.height = "20px"
box4.style.borderBottom = "10px goldenrod double"
box4.style.margin = "auto"

var img1 = document.createElement("IMG")
img1.setAttribute("src","MandRStaring.JPG" );
document.body.appendChild(img1);
img1.style.width = "815px";
img1.style.height = "470px";
img1.setAttribute('class','img');

var img2 = document.createElement("IMG")
img2.setAttribute("src","MRsleeping.JPG");
document.body.appendChild(img2);
img2.setAttribute('class','img');
img2.style.width = "508px";

var img3 = document.createElement("IMG")
img3.setAttribute("src","M.JPG");
document.body.appendChild(img3);
img3.setAttribute('class','img');
img3.style.width = "411px";

var img4 = document.createElement("IMG")
img4.setAttribute("src","Rstaring.JPG");
document.body.appendChild(img4);
img4.setAttribute('class','img');
img4.style.width = "411px";

var img5 = document.createElement("IMG")
img5.setAttribute("src","HUGS!.JPG");
document.body.appendChild(img5);
img5.setAttribute('class','img');
img5.style.width = "411px";

var img6 = document.createElement("IMG")
img6.setAttribute("src","hug!.JPG");
document.body.appendChild(img6);
img6.setAttribute('class','img');
img6.style.width = "484px";

var img7 = document.createElement("IMG")
img7.setAttribute("src","Salty.JPG");
document.body.appendChild(img7);
img7.setAttribute('class','img');
img7.style.width = "839px";
img7.style.height = "647px";

var img8 = document.createElement("IMG")
img8.setAttribute("src","HiFive!.jpg");
document.body.appendChild(img8);
img8.setAttribute('class','img');
img8.style.width = "661px";

var img9 = document.createElement("IMG")
img9.setAttribute("src","AfternoonBrawl.JPG");
document.body.appendChild(img9);
img9.setAttribute('class','img');
img9.style.width = "661px";

var img10 = document.createElement("IMG")
img10.setAttribute("src","TheUltimatePillow.JPG");
document.body.appendChild(img10);
img10.setAttribute('class','img');
img10.style.width = "1425";

let box5 = adddiv()
box5.style.width = "1250px"
box5.style.height = "20px"
box5.style.borderBottom = "15px goldenrod double"
box5.style.margin = "auto"
box5.style.paddingTop = "4050px"

var img11 = document.createElement("IMG")
img11.setAttribute("src","weblogo.PNG");
document.body.appendChild(img11);
img11.setAttribute('class','centerplz');
img11.style.width = "150px"

function adddiv() {
let div = document.createElement('div')
body.appendChild(div)
return div
}


