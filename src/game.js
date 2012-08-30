window.onload = function(){
	var canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		inti = new Ball(20,'FF0000'),
		keyPressed = [],
		//debug variables
		log = document.getElementById('log');
		

	
	inti.x = canvas.width / 2;
	inti.y = canvas.height /2;
	// Ball object augmentation
	inti.draw = function(context) {
		context.save();
		context.translate(this.x,this.y);
		context.rotate(this.rotation);
		context.scale(this.scaleX, this.scaleY);
		context.lineWidth = this.lineWidth;
		context.fillStyle = this.color;
		context.beginPath();
		context.arc(0,0, this.radius,0,(Math.PI * 2),true);
		context.closePath();
		context.fill();
		context.fillStyle = "#000000";
		context.beginPath();
		context.arc(0,0,this.radius - 10,0,(Math.PI * 2), true);
		context.closePath();
		context.fill();
		if(this.lineWidth > 0){
			context.stroke();
		}
		context.restore();
	};
	//Setting the controls 
	window.addEventListener('keydown',function(e){
		if(!keyPressed[e.keyCode]){
			keyPressed[e.keyCode] = e.keyCode;
		}

		alert(keyPressed[e.keycode]);
		switch (e.keyCode){
			case 38:
				inti.vy = -5;
				log.value = "UP key Pressed";
				break;
			case 37:
				inti.vx = -5;
				log.value = "LEFT key Pressed";
				break;
			case 40:
				inti.vy = 5;
				log.value = "DOWN key Pressed";
				break;
			case 39:
				inti.vx = 5;
				log.value = "RIGHT key pressed";
				break;
		}

	}, false);
	window.addEventListener('keyup', function(e){
//		if(!upPressed && !leftPressed && !downPressed && !rightPressed){

		switch (e.keyCode){
			case 38:
				upPressed = false;
				log.value = "UP key Released";
				break;
			case 37:
		
				log.value = "LEFT key Released";
				break;
			case 40:
				log.value = "DOWN key Released";
				break;
			case 39:

				log.value = "RIGHT key Released";
				break;
		}

		inti.vx = 0;
		inti.vy = 0;

//		}
	}, false);

/*
	window.addEventListener('keyup',function(e){
//		inti.vx = 0;
//		inti.vy = 0;

		switch (e.keyCode){
			case 38:
				inti.vy = 0;
				break;
			case 37:
				inti.vx = 0;
				break;
			case 40:
				inti.vy = 0;
				break;
			case 39:
				inti.vx = 0;
				break;
		}

	}, false); */

	(function drawFrame(){
		window.requestAnimationFrame(drawFrame, canvas);
		context.clearRect(0,0, canvas.width, canvas.height);
		inti.x += inti.vx;
		inti.y += inti.vy;
		inti.draw(context);
	}());



};