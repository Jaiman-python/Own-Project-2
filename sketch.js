var gamestate = 0;
var player, form;



function setup() {
  createCanvas(1200,700);
  
  player = new Player();

  form = new Form();
}

function draw() {
  background(100,255,255);
if(gamestate == 0){
  form.display();
}
if(gamestate == 1){
  player.display();
  drawSprites();
}
  
}


