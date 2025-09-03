let eat=document.getElementById("feed")
let check = document.getElementById("check");
let what=document.getElementById("what")
function show() {
  let image = document.getElementById("img");
const selectedPetElement = document.querySelector('input[name="pet"]:checked');

  
  if (!selectedPetElement) {
    image.innerHTML = "<p>Please select a pet.</p>";
    return;
  }
const selectedpet = selectedPetElement.value
  
  
  let imagepath = "";

  if (selectedpet === "dog") {
    imagepath = "dogg.png";
  } else if (selectedpet === "cat") {
    imagepath = "catt.png";
  } else if (selectedpet === "rabbit") {
    imagepath = "rabbitt.png"; 
  }

  image.innerHTML = `<img src="${imagepath}" alt="${selectedpet}" width="200">`;
}

check.addEventListener("click", show);




let hungerEl = document.getElementById("hungry");
let happinessEl = document.getElementById("happy");
let sleepEl = document.getElementById("sleepy");

class Pets{
  constructor(hungerE1,happinessE1,sleepE1){
   this.hungerE1=hungerE1;
   this.happinessE1=happinessE1;
   this.sleepE1=sleepE1;
   this.hunger=Number(hungerE1.textContent)
   this.happiness=Number(happinessE1.textContent)
   this.sleep=Number(sleepE1.textContent)

  }
  feed(){
    this.hunger=Math.max(this.hunger-10,20)
    this.happiness=Math.min(this.happiness+2,100)
    this.render()
  }
   play(){
    this.happiness=Math.min(this.happiness+10,100)
    this.hunger=Math.min(this.hunger+2,100)
    this.sleep=Math.max(this.sleep-3,0)
    this.render() 
  }
   bedTime(){
    this.sleep=Math.min(this.sleep+10,100)
    this.render()
   }
   render(){
    this.hungerE1.textContent=this.hunger
    this.happinessE1.textContent=this.happiness
    this.sleepE1.textContent=this.sleep
   }
}
let pet=new Pets(hungerEl,happinessEl,sleepEl)
let feed=document.getElementById("feed")
let bed=document.getElementById("bed")
let play=document.getElementById("play")

feed.addEventListener("click",()=>{
  pet.feed()
});
bed.addEventListener("click",()=>{
  pet.bedTime()
});
play.addEventListener("click",()=>{
  pet.play()
});

     
  

