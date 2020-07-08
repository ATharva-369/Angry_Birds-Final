class Slingshot{
   constructor(body1,point2){
    var options = {
     bodyA:body1,
     pointB:point2,
     length:10,
     stiffness:0.05
    }
    this.pointB=point2;
    this.sling=Constraint.create(options);
    World.add(world,this.sling);
    this.sling1=loadImage("sprites/sling1.png")
    this.sling2=loadImage("sprites/sling2.png")
    this.sling3=loadImage("sprites/sling3.png")
   }
   display(){
      image(this.sling1,120,75);
      image(this.sling2,90,75); 
       if(this.sling.bodyA!=null){
      var posA=this.sling.bodyA.position;
      var posB = this.pointB;
      stroke(48,20,8);   
      push();
       
       if(posA.x<220){
         strokeWeight(7);
         line(posA.x-20,posA.y,posB.x+20,posB.y+6);
         line(posA.x-20,posA.y,posB.x-10,posB.y+6);
         image(this.sling3,posA.x-30,posA.y-10,12,30);
       }
      else{
        
         strokeWeight(4);
         line(posA.x+22,posA.y,posB.x+20,posB.y+6);
         line(posA.x+22,posA.y,posB.x-10,posB.y+6);
         image(this.sling3,posA.x+23,posA.y-10,12,30); 
      }
      pop();
   }
}
   fly(){
    this.sling.bodyA=null;


   }
   attach(body){
    this.sling.bodyA=body  
   }

}