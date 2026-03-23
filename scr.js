let headerd = document.querySelector(".Header");
let topd = document.querySelector(".top");
let topright = document.querySelector(".topRight");
let middle = document.querySelector(".middle");
let add = document.querySelector(".add");
let Search = document.querySelector(".Search");
let backcreatmodal = document.querySelector(".backcreatmodal");
let closes = document.querySelector(".close");
let cancel = document.querySelector(".Cancel");
let creatmodaltop = document.querySelector(".creatmodaltop");
let edit = document.querySelector(".edit");
let view = document.querySelector(".view");


let blocks = [
  {id:1, img: "https://i.pinimg.com/736x/06/14/fa/0614fa155de10e2072149b780c3e2e60.jpg",par:"Tajikistan", txt: "Feel the friendship"}
]

function render(data){
data.forEach((el)=>{
  let newss = document.createElement("div");
   newss.classList.add("newss")
   middle.append(newss)
  let img = document.createElement("div");
  img.classList.add("img")
  newss.append(img)
  let images = document.createElement("img")
  images.classList.add("images")
  images.src = el.img;
  img.append(images)
  let about = document.createElement("div")
  about.classList.add("about")
  newss.append(about)
  let parag = document.createElement("h1")
  parag.classList.add("parag")
  parag.textContent = el.par;
  about.append(parag)
  let text = 



});

}



add.onclick = () => {
  backcreatmodal.style.display = "block";
};

const closemodal = () => {
  backcreatmodal.style.display = "none";
};

closes.onclick = closemodal;
cancel.onclick = closemodal;



