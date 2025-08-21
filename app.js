const btns = document.querySelectorAll(".btn");
const body = document.querySelector("body");
const random = document.querySelector(".Random")

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
       color=btn.value;
        changeBackground(color);
        btns.forEach((b)=>b.classList.remove("glow"));
        btn.classList.add("glow");
    });
});

function changeBackground(color){
    body.className = "";

    switch(color){
        case("purple"):
         body.classList.add("purple");
         break;
        case("blue"):
         body.classList.add("blue");
         break;
        case("red"):
         body.classList.add("red")
         break;
        case("green"):
         body.classList.add("green");
         break;
        case("yellow"):
         body.classList.add("yellow");
         break;
        case("teal"):
         body.classList.add("teal");
         break;
        // case("undo"):
        // body.classList.add("");
        // break;
        default:
        break;    
    }
}

const randomColors = [
    "purple",
    "blue",
    "red",
    "green",
    "yellow",
    "teal"
];

random.addEventListener("click", ()=> {
    const rndmColor = randomColors[Math.floor(Math.random()*randomColors.length)];
    body.classList.add(rndmColor) 
});