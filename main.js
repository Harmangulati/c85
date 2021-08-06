canvas = document.getElementById("myCanvas");
ctx = canvas.getcontext("2d");
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_Y=225;
greencar_X=5;
greencar_width=100;
greencar_height=90;
function add() {
	background_imgTag=new Image();
	backgroung_imgTag.onload=upload_background;
	background_imgTag.src=background_image;
	greencar_imgTag=new Image();
	greencar_imgTag.onload=upload_car;
	greencar_imgTag.src=greencar_image;
	}

function uploadBackground() {
	ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);   
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_X,greencar_Y,greencar_width,greencar_height);
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
	if (greencar_Y>=0){
		green_Y=greencar_Y-10;
		console.log("when up arrow is pressed,x= "+rover_x+"|y="+rover_y);
	   upload_background();
	   upload_greencar();   
		} 
}

function down()
{
	if (greencar_Y>=500){
		greencar_Y=greencar_Y+10;
		console.log("when down arrow is pressed,x= "+greencar_X+"|y="+greencar_Y);
	   upload_background();
	   upload_greencar();
}

function left()
{
	if (greencar_X>=0){
		greencar_X=greencar_X-10;
		console.log("when left arrow is pressed,x= "+greencar_X"|y="+greencar_Y);
	   upload_background();
	   upload_greencar(); 
}

function right()
{
	if (greencar_X>=700){
		greencar_X=greencar_X+10;
		console.log("when right arrow is pressed,x= "+greencar_X+"|y="+greencar_Y);
	   upload_background();
	   upload_greencar(); 
}
