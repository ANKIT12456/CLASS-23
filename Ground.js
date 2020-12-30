class Ground{

constructor(){

    var ground_options={

        isStatic:true 
    }

    this.body=Bodies.rectangle(200,380,400,20,ground_options);
    //this.width=400;
    //this.height=20;
    World.add(world,this.body);

}

display(){

    var pos=this.body.position;
    fill ('red');
    rectMode(CENTER);
    rect(pos.x,pos.y,400,20);
}


}