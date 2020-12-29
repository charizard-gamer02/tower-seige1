class Poly{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            density:2.0
        }

        this.body=Bodies.circle(x,y,radius/2,options)
        World.add(world,this.body);
this.image=loadImage("polygon.png");
}
display(){ 
    var pos =this.body.position; 

     push()

       translate(pos.x,pos.y)
     
         imageMode(CENTER);
        
           image(this.image,0, 0,50,50); 
           pop()
         
         
    }

}