const container = document.getElementById("container");
const formField = document.getElementById("formField");
const btn = document.getElementById("btn");
const propagationOutput = document.getElementById("propagationOutput");

function listener(e) {
  console.log(e.currentTarget.tagName);
}

container.addEventListener("click", listener,true);

formField.addEventListener("click", listener);

btn.addEventListener("click", listener,true);
