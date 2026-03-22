let header = document.querySelector(".Header")
let top = document.querySelector(".top")
let middle = document.querySelector(".middle")
let add = document.querySelector(".add")
let Search = document.querySelector(".Search")

function render() {
  container.innerHTML = "";
  middle.forEach((el) => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.style.backgroundColor = el.color;
    const pName = document.createElement("p");
    pName.textContent = el.name;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("deleteButton");
    deleteButton.onclick = () => {
      handleDeleteFruit(el.id);
    };
    const editButton = document.createElement("button");
    editButton.textContent = "😕";
    editButton.onclick = () => {
      editModal.style.display = "block";
      editColorInput.value = el.color;
      editNameInput.value = el.name;
      idModal.value = el.id;
    }})};
