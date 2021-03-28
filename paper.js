class Paper
{
	constructor(x,y,r)
	{
        var options={
            isStatic:false, 
            restitution:0.3, 
            friction:0, 
            density:1.2				
		} 
        this.x=x;
		this.y=y;
		this.r=r
        this.image=loadImage("paper.png")
        this.body=Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }
    display()
	{
			var paperpos =this.body.position;		
			push()
            translate(paperpos.x, paperpos.y);
			ellipseMode(RADIANS)
            image(this.image, 0, 0, 55,55)
            pop()
    }
}