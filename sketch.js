	var paper,ground,trash1,launcher,trash2,trash3;
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;
	const Render = Matter.Render;
	const Constraint = Matter.Constraint;

	function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,450,50); 
	ground = new Ground(400,460,1800,10);
	trash1 = new Trash(600,410,20,100);
	trash2 = new Trash(685,450,150,20);	
	trash3 = new Trash(750,410,20,100);
	//launcher = new Launcher(paper.body,{x:200,y:200});
	Engine.run(engine);
	}


	function draw() {
	rectMode(CENTER);

	background(125);

	drawSprites();

	paper.display();   
	trash1.display();
	trash2.display();
	trash3.display();
	ground.display(); 
	//launcher.display();
		
	}
	function keyPressed(){
		if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:555,y:-269});
		}
	}
	