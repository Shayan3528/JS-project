const button = document.getElementById("btn");
const container = document.getElementById("main-container");

function random(number){
    return Math.floor(Math.random()*(number+1));
}

button.addEventListener("click",()=>{
    const bgColor = `rgb(${random(255)},${random(255)} ,${random(255)})`;
    container.style.backgroundColor = bgColor;

});
