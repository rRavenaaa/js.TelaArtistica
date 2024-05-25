function setup() {
    createCanvas(800, 600);
    background("#03A9F4")
  }
  
  function draw() {
    stroke("black");
    fill("pink");
    
    
    if (mouseIsPressed) {
      circle(mouseX, mouseY, 20, 35);
    }
  }
  