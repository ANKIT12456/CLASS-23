class Box{

    constructor(x,y,width,height){
       
        var box_option={
            isStatic:false,
            restitution:0.8
        }

        this.body=Bodies.rectangle(x,y,width,height,box_option);
        this.w=width;
        this.h=height;
        World.add(world,this.body);
    }

    show(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue");
        rect(0,0,this.w,this.h);
        pop();
    }
}