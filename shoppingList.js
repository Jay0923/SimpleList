const listMaker = document.querySelector("#listMaker");
const listDeleter = document.querySelector("#listDeleter");
const add = document.querySelector("#add");
const remove = document.querySelector("#remove");
let itemNum;
let list = [];
let listContainer = document.createElement("div");
document.body.appendChild(listContainer);

const createList = () => {
  while (true) {
    itemNum = Number(prompt("Please enter number of items in your list"));
    if (itemNum) {
      break;
    } else {
      alert("Enter a digit greater than 0");
    }
  }
  for (i = 1; i <= itemNum; i++) {
    let item = prompt(`Item ${i}`);
    list.push(`<li>${item}</li>`);
  }
  listContainer.style.fontSize = "24px";
  listContainer.innerHTML = list.join(" ");
};

listMaker.addEventListener("click", createList);

listDeleter.addEventListener("click", () => {
  listContainer.innerHTML = "";
  list = [];
});

add.addEventListener("click", () => {
  if (list.length === 0) {
    alert("You need to make a list first");
    createList();
  } else {
    listContainer.innerHTML = "";
    let item = prompt("Enter item:");
    list.push(`<li>${item}</li>`);
    listContainer.innerHTML = list.join(" ");
  }
});

remove.addEventListener("click", () => {
  if (list.length === 0) {
    alert("You need to make a list first");
    createList();
  } else {
    listContainer.innerHTML = "";
    let item;
    while (true) {
      item = Number(prompt("Enter list item number you want to delete:"));
      if (item) {
        break;
      } else {
        alert("Enter list item number");
      }
    }
    list.splice(item - 1, 1);
    listContainer.innerHTML = list.join(" ");
  }
});
