canvas = document.getElementById("#myCanvas");
ctx = canvas.getcontext("2d");
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
car_width=100;
car_height=90;
function add() {
	background_imgTag=new Image();
	backgroung_imgTag.onload=upload_background;
	background_imgTag.src=background_image;
	car_imgTag=new Image();
	car_imgTag.onload=upload_car;
	car_imgTag.src=car_image;
	}

function uploadBackground() {
	ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);   
}

function uploadgreencar() {
	ctx.drawImage(car_imgTag, car_x,car_y,car_width,car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
