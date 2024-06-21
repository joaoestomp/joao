function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
  function draw() {
    stroke("blue");
    fill("re");
    
     if(mouseIsPressed){
       rect(mouseX, mouseY, 20,35);
     }
  }  