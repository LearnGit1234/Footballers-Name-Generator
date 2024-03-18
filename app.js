
let generatorButton=document.querySelector(".button2"),
 toggleButton=document.querySelector(".button1"),
 main=document.querySelector(".main"),
 appnym=document.querySelector(".appName"),
 container=document.querySelector(".container")
 display=document.querySelector(".displayScreen");



function random() {

 let listofStacks=["Messi","Neymar","Rooney","Ronaldinho","Ronaldo Nazario","Pogba","Osimhen","CR7","Kaka","Suarez","Bale","Zinedane Zidane","Kun Aguero","Pele","Maradona"] ;  

let randomPick=Math.floor(Math.random()*14);

let  randomFootballersName= listofStacks[randomPick];

if(randomPick==7 || randomPick==0 ){
  display.style.fontSize="500%";
}else{
  display.style.fontSize="300%"
}
  display.textContent=randomFootballersName;

}

function modeChange(){
 display.classList.toggle("black-bg");
 main.classList.toggle("black-bg");
   }
   

toggleButton.addEventListener("click",modeChange);
generatorButton.addEventListener("click",random);

// 
let name = `oyama`,
val;


val = name.slice(0,-1)

console.log(val)

