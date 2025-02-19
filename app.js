const list = document.getElementById("list");
const addItem = document.getElementById("addItem");

list.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    if (e.target.innerText === "JavaScript") {
      e.target.style.backgroundColor = "blue";
    } else if (e.target.innerText === "PHP") {
      e.target.style.backgroundColor = "green";
    } else {
      e.target.style.backgroundColor = "yellow";
    }
  }
});

addItem.addEventListener("click", function () {
  const newElementchild = document.createElement("li");
  newElementchild.textContent = "C++";
  list.appendChild(newElementchild);
});
