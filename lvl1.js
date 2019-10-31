//  Joshua Ramnaraine, Apinaash Pavalarajah, Prashanth Ketheeswaran
// January,24,2017
// lvl1.js
// Description: this screen loads level one of the game screen
// ******************************
// * Make Variables here        *
// ******************************
var tempX=20;
var tempY=511;
var marioLeft;
var mario;
var jumpCount=0;
var jumping=false;
var jumping2=false;
var beams;
var ladders;
var barrelCount;
var timer;
var lives;
var gameTimer=0;
var seconds=0;
var count = true;
var timerStatusStyle;
var timerStatus;
var scoreStatus;
var scoreStatusStyle;

var lvl1={




preload:function() {
		game.load.spritesheet("donkey", "assets/Sprites/Donkey5.png", 49, 32, 4 );
		game.load.spritesheet("marioLeft2", "assets/Sprites/Mario1.png", 18, 16, 3 );
		game.load.spritesheet("mario", "assets/Sprites/MarioF.png", 18, 16, 3 );
		game.load.spritesheet("marioClimb", "assets/Sprites/MarioClimb3.png", 14, 16, 2 );
		// // here we upolad our spritesheets
		
		game.load.image("beam","assets/Sprites/Beam.png");;
		game.load.image("barrel","assets/Sprites/Barrel.png");
		game.load.image("ladder","assets/Sprites/ladder.png");
		game.load.image("bigLadder","assets/Sprites/bigLadder.png");
		game.load.image("miniBeam", "assets/Sprites/miniBeam.png");
		game.load.image("peach", "assets/Sprites/princess.png");
		game.load.image("rollBarrel", "assets/Sprites/rollBarrel.png");
		game.load.image("heart1", "assets/Sprites/heart.png");
		game.load.image("marioLeft","assets/Sprites/marioLeft.png");;
		
		seconds=0;
		//here we add our images 
	
},


create:function() {
		timer=0;
		
		timerStatusStyle={ font: "16px Courier", fill: "#10D0F6", align: "center"};
		timerStatus=game.add.text(8,3,"Timer: 0 ",timerStatusStyle);
		scoreStatusStyle={ font: "16px Courier", fill: "#10D0F6", align: "center"};
		scoreStatus=game.add.text(600,5,"Score: 0 ",scoreStatusStyle);
		
		game.physics.startSystem(Phaser.Physics.ARCADE);
													
													
		game.world.enableBody = true;				
													
		heart1=game.add.sprite(760,0, 'heart1');
		heart1.scale.setTo(2,2);
		
		heart2=game.add.sprite(730,0, 'heart1');
		heart2.scale.setTo(2,2);
	
		heart3=game.add.sprite(700,0, 'heart1');
		heart3.scale.setTo(2,2);

		beam = game.add.sprite(-10, 110, 'beam');
		beam.body.immovable = true;



		beam3 = game.add.sprite(0, 541, 'beam');
		beam3.width= 800;
		beam3.body.immovable = true;

	
		beam2 = game.add.sprite(65, 190, 'beam');
		beam2.body.immovable = true;


		beam4 = game.add.sprite(0, 270, 'beam');;
		beam4.body.immovable = true;


		beam5 = game.add.sprite(60, 365, 'beam');
		beam5.body.immovable = true;


		beam6 = game.add.sprite(0, 450, 'beam');
		beam6.body.immovable = true;


		miniBeam = game.add.sprite(270,50, 'miniBeam');
		miniBeam.width=140;
		miniBeam.body.immovable = true;
		// beam 1-6 and minibeam is being place in the game and the beams are not moving. The beams are also place in angles.

		ladder = game.add.sprite(312,217, 'ladder');
		ladder.height = 52;
		ladder.body.immovable = true;

 

		ladder2 = game.add.sprite(237,395, 'ladder');
		ladder2.height = 56; 
		ladder2.body.immovable = true;


		ladder3 = game.add.sprite(505,479, 'ladder');
		ladder3.height = 60;
		ladder3.body.immovable = true;


		ladder4 = game.add.sprite(608,300, 'ladder');
		ladder4.height = 65; 
		ladder4.body.immovable = true;


		ladder5 = game.add.sprite(720,138, 'ladder');
		ladder5.height = 51; 
		ladder5.body.immovable = true;

		// ladder 1-5 is being placed in the game and they cannot also not move

		bigLadder = game.add.sprite(242,0, 'bigLadder');
		bigLadder.height = 110;
		bigLadder.body.immovable = true;

		bigLadder2 = game.add.sprite(411,0, 'bigLadder');
		bigLadder2.height = 110;
		bigLadder2.body.immovable = true;
		// ladder 1-5 and bigLadder1-2 is being placed in the game and they cannot also not move.

		peach = game.add.sprite(273,5, 'peach');
		peach.scale.setTo(2,2);
		// peaches location and setting the size 

		barrel = game.add.sprite(0, 45, 'barrel');
		barrel = game.add.sprite(20, 45, 'barrel');
		// Add in the barrels

		donkey = game.add.sprite(72, 45, 'donkey');
		donkey.animations.add('play');
		donkey.animations.play('play', 1, true);
		donkey.scale.setTo(2,2);
		//Adding donkey kong, the animations and setting the scale of it.


		mario = game.add.sprite(tempX, tempY, 'mario');
		mario.animations.add('walkRight');
		mario.scale.setTo(2,2);
		mario.body.gravity.y = 600;
		//The same concept above applies here but its for Mario instead of donkey kong.
		
		
		marioLeft = game.add.sprite(mario.x, mario.y, 'marioLeft');
		// marioLeft.animations.add('walk');
		marioLeft.scale.setTo(2,2);
		marioLeft.visible=false;
		marioLeft.body.gravity.y = 600;

		//The same concept as above but it applies for Mario when he turns left. Mario lefts, visiblity is set to 
		//false for now.


		rollBarrel = game.add.sprite(188, 90, 'rollBarrel');
		rollBarrel.scale.setTo(1.4,1.4);
		rollBarrel.body.gravity.y = 600;
		
		rollBarrel2 = game.add.sprite(188, 90, 'rollBarrel');
		rollBarrel2.scale.setTo(1.4,1.4);
		rollBarrel2.visible = false;

		
		rollBarrel3 = game.add.sprite(188, 90, 'rollBarrel');
		rollBarrel3.scale.setTo(1.4,1.4);
		rollBarrel3.visible = false;
		
		rollBarrel4 = game.add.sprite(188, 90, 'rollBarrel');
		rollBarrel4.scale.setTo(1.4,1.4);
		rollBarrel4.visible = false;
		
		rollBarrel5 = game.add.sprite(188, 90, 'rollBarrel');
		rollBarrel5.scale.setTo(1.4,1.4);
		rollBarrel5.visible = false;
		
		rollBarrel6 = game.add.sprite(188, 90, 'rollBarrel');
		rollBarrel6.scale.setTo(1.4,1.4);
		rollBarrel6.visible = false;
		
		rollBarrel7 = game.add.sprite(188, 90, 'rollBarrel');
		rollBarrel7.scale.setTo(1.4,1.4);
		rollBarrel7.visible = false;
		
		rollBarrel8 = game.add.sprite(188, 90, 'rollBarrel');
		rollBarrel8.scale.setTo(1.4,1.4);
		rollBarrel8.visible = false;
		//The barrel moving animation.
	

},
update:function() {
		 gameTimer ++;
		 if (gameTimer == 69){
		     seconds++;
		     gameTimer=0;
		     count = false;
		 }
		 else if (gameTimer == 269 && count == true){
		     gameTimer = 0;
		     seconds++;
		 }
		 timerStatus.text="Seconds Used: " + seconds;
		 
		
		timer=timer+1;
		
		 barrelsRolling(rollBarrel);
		
		if (timer>200)
		{
		rollBarrel2.visible=true;
		barrelsRolling(rollBarrel2);
		}
		
		if (timer>400)
		{
		rollBarrel3.visible=true;
		barrelsRolling(rollBarrel3);
		}
		
		if (timer>600)
		{
		rollBarrel4.visible=true;
		barrelsRolling(rollBarrel4);
		}
		
		if (timer>800)
		{
		rollBarrel5.visible=true;
		barrelsRolling(rollBarrel5);
		}
		
		if (timer>1000)
		{
		rollBarrel6.visible=true;
		barrelsRolling(rollBarrel6);
		}
		
		if (timer>1200)
		{
		rollBarrel7.visible=true;
		barrelsRolling(rollBarrel7);
		}
		
		if (timer>1400)
		{
		rollBarrel8.visible=true;
		barrelsRolling(rollBarrel8);
		}
		


		//Calls the function barrel rolls.
		
		deathByBarrel(mario,rollBarrel);
		deathByBarrel(mario,rollBarrel2);
		deathByBarrel(mario,rollBarrel3);
		deathByBarrel(mario,rollBarrel4);
		deathByBarrel(mario,rollBarrel5);
		deathByBarrel(mario,rollBarrel6);
		deathByBarrel(mario,rollBarrel7);
		deathByBarrel(mario,rollBarrel8);
		
		//the code above means if barrel hits mario, then mario starts at the beginning and loses a life 

		game.physics.arcade.collide(mario,beam6);
		game.physics.arcade.collide(mario,beam5);
		game.physics.arcade.collide(mario,beam4);
		game.physics.arcade.collide(mario,beam3);
		game.physics.arcade.collide(mario,beam2);
		game.physics.arcade.collide(mario,beam);
		game.physics.arcade.collide(mario,miniBeam);
		
		//the code above is making mario walk on the beam
		
		climbing(mario,ladder3);
		climbing(mario,ladder2);
		climbing(mario,ladder4);
		climbing(mario,ladder5);
		climbing(mario,ladder);
		climbing(mario,bigLadder);
		climbing(mario,bigLadder2);
		
		//mario climbing the ladders.
		
		
		//The if statement below is for mario to move right.
		if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){	
	    	mario.body.velocity.x = 250;
		}
		//The else if statement below makes mario move left.
		  else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
	        mario.body.velocity.x = -250;
		}
		else
		{
		//If the user does not click either key, then mario does not move.
			mario.body.velocity.x = 0;
		}
		//The code below makes it so that mario cannot leave the screen.
		if (mario.x>770)
		{
			mario.x=770;
		}
		if (mario.x<10)
		{
			mario.x=10;
		}
		if (mario.y<10)
		{
			mario.y=10;
		}
		if (mario.y>512)
		{
			mario.x = 20;
			mario.y = 500;
		}
		
		if (checkOverlap(mario,peach)==true)
		{
			if(seconds<12)
			{
				userScore= 1000;
			}
			else if(seconds<25)
			{
				userScore= 500;
			}
			else
			{
				userScore=100;
			}
			game.state.start('NextLevel');
		}

		//This calls the mario jumping function again.
		marioJumping(mario);

		if (lives==2)
		{
			heart3.visible=false;
		}
		if (lives==1)
		{
			heart2.visible=false;
		}
		if (lives==0)
		{
			heart1.visible = false;
		}
		if (heart1.visible==false)
		{
			game.state.start('GameOver');		
		}
	
	
},

};
	function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

	// This function is checking the overlap for each sprite.
	}
	 function climbing(player, ladder)
	{
		if (game.input.keyboard.isDown(Phaser.Keyboard.UP) && checkOverlap(player,ladder)){	
	    	//mario.body.velocity.y = -150;
	    	player.body.y-=5;
	    	player.body.velocity.x = 0;
	    	player.body.velocity.x = 0;
	    	
		}
		else if (game.input.keyboard.isDown(Phaser.Keyboard.UP) && jumping==false && jumpCount==0){	
	    	jumping=true;
	    
		}
		//This function is also checking the overlap for the ladder and sprite while pressing up arrow key.
		//If true, mario will go up the ladder.
		//If false, mario will go back down.
	}
	
	function marioJumping(mario1)
	{
		if(jumping==true)
		{
			mario1.body.velocity.y = -150;
			jumpCount++;
		}
		if(jumpCount>20 && jumping==true)
		{
			mario1.body.velocity.y = 150;
		}
		if(jumpCount>40 && jumping==true)
		{
			jumping=false;
			jumpCount=0;
		}
	}
	
	
	function deathByBarrel(mario,barrel)
	{
		if( checkOverlap(mario,barrel)==true)
		{
			mario.x = 20;
			mario.y = 500;
			lives=lives-1;
		}
	}
		//The function above is calculating the jumping for mario.
		//This is preventing the user from holding the up arrow key to fly.
		//Restricts the height of mario.
	
	//The function below is checking to see if the barrel is colliding or touching the beams.
	//If this is true the barrel will roll.
	function barrelsRolling(barrels)
	{
		barrels.body.gravity.y = 600;

		if (game.physics.arcade.collide(barrels,beam) == true)
		{
			barrels.x = barrels.x+3;

		}
		if (game.physics.arcade.collide(barrels,beam2) == true)
		{
			barrels.x = barrels.x-3;
			
		}
		
		if (game.physics.arcade.collide(barrels,beam4) == true)
		{
			barrels.x = barrels.x+3;
			
		}
		if (game.physics.arcade.collide(barrels,beam5) == true)
		{
			barrels.x = barrels.x-3;
			
		}
		if (game.physics.arcade.collide(barrels,beam6) == true)
		{
			barrels.x = barrels.x+3;
			
		}
		if (game.physics.arcade.collide(barrels,beam3) == true)
		{
			barrels.x = barrels.x-3;

		}
		
		

	}
