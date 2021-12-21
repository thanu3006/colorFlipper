const colors = ["blue" ,"red", "rgb(133,255,355)", "#f15055", "green", "yellow", "grey", "black", "crimson", "aqua", "brown", "darkmagenta"]

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    //get random num b/w 0-3 
    const randNum = getRandomNum();
    document.body.style.backgroundColor = colors[randNum];
    color.textContent = colors[randNum];


});

function getRandomNum() {
    return Math.floor(Math.random()*colors.length);
}