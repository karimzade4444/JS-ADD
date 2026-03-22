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
let newBL= document.querySelector(".new")

add.onclick = () => {
  backcreatmodal.style.display = "block";
};

const closemodal = () => {
  backcreatmodal.style.display = "none";
};

closes.onclick = closemodal;
cancel.onclick = closemodal;



