class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimg= loadImage("sprites/smoke.png");
    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    var position=[this.body.position.x,this.body.position.y];
    this.trajectory.push(position);        //trajectory=[[20,25][28,30][32,35]]
    //console.log(trajectory[0][0])                       00 01 ,10 11, 20, 21
    for (var i=0; i<this.trajectory.length; i++){
      image(this.smokeimg,this.trajectory[i][0],this.trajectory[i][1]);
    }      
  }
}
