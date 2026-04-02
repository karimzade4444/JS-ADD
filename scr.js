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
let backmodal = document.querySelector(".backmodal");
let modal = document.querySelector(".modal");
let imgmodal = document.querySelector(".imgmodal");
let textmodal = document.querySelector(".textmodal");
let closesmodal = document.querySelector(".closes");
let paraginmodal = document.querySelector(".paraginmodal");
let textinmodal = document.querySelector(".textinmodal");
let nameinp = document.querySelector(".nameinp");
let imginp = document.querySelector(".imginp");
let tarea = document.querySelector(".tarea");
let creatcancel = document.querySelector(".CreatCancel");
let creatbtn = document.querySelector(".Creat");
const count = document.querySelector(".count");

let blocks = [
  {
    id: 1,
    img: "https://i.pinimg.com/736x/06/14/fa/0614fa155de10e2072149b780c3e2e60.jpg",
    par: "Tajikistan",
    txt: "Feel the friendship",
  },
];

function render(data) {
  middle.innerHTML = "";
  data.forEach((el) => {
    let newss = document.createElement("div");
    newss.classList.add("newss");
    middle.append(newss);
    let img = document.createElement("div");
    img.classList.add("img");
    newss.append(img);
    let images = document.createElement("img");
    images.classList.add("images");
    images.src = el.img;
    img.append(images);
    let about = document.createElement("div");
    about.classList.add("about");
    newss.append(about);
    let parag = document.createElement("h1");
    parag.classList.add("parag");
    parag.textContent = el.par;
    about.append(parag);
    let text = document.createElement("p");
    text.classList.add("text");
    text.textContent = el.txt;
    about.append(text);
    let edit = document.createElement("div");
    edit.classList.add("edit");
    newss.append(edit);
    let view = document.createElement("button");
    view.textContent = "Просмотр";
    view.classList.add("view");
    edit.append(view);
    let delet = document.createElement("button");
    delet.textContent = "Удалить";
    delet.classList.add("delet");
    edit.append(delet);
    delet.onclick = () => {
      blocks = blocks.filter((item) => item.id !== el.id);
      render(blocks);
    };
    view.onclick = () => {
      backmodal.style.display = "block";

      // очищаем модалку
      imgmodal.innerHTML = "";

      // создаём новую картинку
      let imginmodal = document.createElement("img");
      imginmodal.src = el.img;
      imginmodal.classList.add("imginmodal");
      imgmodal.append(imginmodal);

      // текст
      paraginmodal.textContent = el.par;
      textinmodal.textContent = el.txt;

      closesmodal.onclick = () => {
        backmodal.style.display = "none";
      };
    };
  });
  count.textContent = "Всего: " + data.length;
}
render(blocks);

const handleCreate = () => {
  let newBlock = {
    id: Date.now(),
    img: imginp.value,
    par: nameinp.value,
    txt: tarea.value,
  };
  
  blocks.push(newBlock);
  render(blocks);
  imginp.value = "";
  nameinp.value = "";
  tarea.value = "";
};

creatbtn.onclick = () => {
  handleCreate();
  backcreatmodal.style.display = "none";
};

add.onclick = () => {
  backcreatmodal.style.display = "block";
};

const closemodal = () => {
  backcreatmodal.style.display = "none";
};

closes.onclick = closemodal;
cancel.onclick = closemodal;

Search.oninput = () => {
  let searchBlock = blocks.filter((el) => el.par.includes(Search.value));
  return searchBlock ? render(searchBlock) : render(blocks);
};
