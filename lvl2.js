//  Joshua Ramnaraine, Apinaash Pavalarajah, Prashanth Ketheeswaran
// January,24,2017
// lvl2.js
// Description: this screen loads the second level of the game

// ******************************
// * Make Variables here        *
// ******************************
var tempX=20;
var tempY=511;
var mario;
var jumpCount=0;
var jumping=false;
var jumping2=false;
var beams;
var ladders;
var lives;
var barrelCount;
var timer;
var gameTimer2=0;
var count2 = true;
var timerStatusStyle2;
var timerStatus2;
var scoreStatusStyle2;
var scoreStatus2;

//var inputFirstName = prompt("Please enter your first name:");
//var inputLastName = prompt("Please enter your last name:");
//var firstNameInitial = inputFirstName.substring(0,0).toUpperCase();
//var lastNameInitial = inputLastName.substring(0,0).toUpperCase();


var lvl2={




preload:function() {
		game.load.spritesheet("donkey", "assets/Sprites/lvl2donkey.png", 48.1, 32, 4 );
		game.load.spritesheet("marioLeft33", "assets/Sprites/Mario1.png", 18, 16, 3 );
		game.load.spritesheet("mario", "assets/Sprites/MarioF.png", 18, 16, 3 );
		game.load.spritesheet("marioClimb", "assets/Sprites/MarioClimb3.png", 14, 16, 2 );
		// here we upolad our spritesheets
		game.load.image("beam","assets/Sprites/BlueBeam.png");;
		game.load.image("barrelrolling","assets/Sprites/Barrel.png");
		game.load.image("ladder","assets/Sprites/greenladder.png");
		game.load.image("bigLadder","assets/Sprites/greenbigLadder.png");
		game.load.image("miniBeam", "assets/Sprites/blueMiniBeam.png");
		game.load.image("peach", "assets/Sprites/Peach2.png");
		game.load.image("Barrel", "assets/Sprites/barrellvl2.png");
		game.load.image("heart1", "assets/Sprites/heart.png");
		game.load.image("marioLeft3","assets/Sprites/marioLeft.png");;

		//here we add our images 
		seconds2=0;
},


create:function() {
		timer=0;
			
		timerStatusStyle2={ font: "16px Courier", fill: "#7FFF00", align: "center" };
		timerStatus2=game.add.text(8,3,"Timer: 0 ",timerStatusStyle2);
		scoreStatusStyle2={ font: "16px Courier", fill: "#7FFF00", align: "center" };
		scoreStatus2=game.add.text(590,5,"Score: 0 ",scoreStatusStyle2);
	
		
		game.physics.startSystem(Phaser.Physics.ARCADE);
													
													
		game.world.enableBody = true;				
													
		heart1=game.add.sprite(760,0, 'heart1');
		heart1.scale.setTo(2,2);
		
		heart2=game.add.sprite(730,0, 'heart1');
		heart2.scale.setTo(2,2);
	
		heart3=game.add.sprite(700,0, 'heart1');
		heart3.scale.setTo(2,2);


		beams = game.add.group();
		ladders = game.add.group();

		beam = game.add.sprite(60, 110, 'beam');
		beam.body.immovable = true;
		beams.add(beam);


		beam3 = game.add.sprite(0, 541, 'beam');
		beam3.width= 800;
		beam3.body.immovable = true;

	
		beam2 = game.add.sprite(0, 190, 'beam');
		beam2.body.immovable = true;
		beams.add(beam2);

		beam4 = game.add.sprite(60, 270, 'beam');;
		beam4.body.immovable = true;
		beams.add(beam4);

		beam5 = game.add.sprite(0, 365, 'beam');
		beam5.body.immovable = true;
		beams.add(beam5);

		beam6 = game.add.sprite(60, 450, 'beam');
		beam6.body.immovable = true;
		beams.add(beam6);

		miniBeam = game.add.sprite(370,50, 'miniBeam');
		miniBeam.width=140;
		miniBeam.body.immovable = true;
		// beam 1-6 and minibeam is being place in the game and the beams are not moving. The beams are also place in angles.

		ladder = game.add.sprite(312,217, 'ladder');
		ladder.height = 52;
		ladder.body.immovable = true;
		ladders.add(ladder);
 

		ladder2 = game.add.sprite(237,395, 'ladder');
		ladder2.height = 56; 
		ladder2.body.immovable = true;
		ladders.add(ladder2);

		ladder3 = game.add.sprite(505,479, 'ladder');
		ladder3.height = 60;
		ladder3.body.immovable = true;
		ladders.add(ladder3);

		ladder4 = game.add.sprite(608,300, 'ladder');
		ladder4.height = 65; 
		ladder4.body.immovable = true;
		ladders.add(ladder4);

		ladder5 = game.add.sprite(120,138, 'ladder');
		ladder5.height = 51; 
		ladder5.body.immovable = true;
		ladders.add(ladder5);
		
		ladder6 = game.add.sprite(420,80,'ladder');
		ladder6.height = 30; 
		ladder6.body.immovable = true;
		// ladder 1-5 is being placed in the game and they cannot also not move


		// ladder 1-5 and bigLadder1-2 is being placed in the game and they cannot also not move.

		peach = game.add.sprite(470,5, 'peach');
		peach.scale.setTo(2,2);
		// peaches location and setting the size 

		barrelrolling = game.add.sprite(750, 45, 'barrelrolling');
		barrelrolling = game.add.sprite(725, 45, 'barrelrolling');
		// Add in the barrels

		donkey = game.add.sprite(630, 45, 'donkey');
		donkey.animations.add('play');
		donkey.animations.play('play', 1, true);
		donkey.scale.setTo(2,2);
		//Adding donkey kong, the animations and setting the scale of it.

		marioLeft3 = game.add.sprite(780, 511, 'marioLeft3');
		marioLeft3.animations.add('walk');
		marioLeft3.scale.setTo(2,2);
		marioLeft3.body.gravity.y = 600;
		
		mario = game.add.sprite(marioLeft3.x, marioLeft3.y, 'mario');
		mario.animations.add('walkRight');
		mario.scale.setTo(2,2);
		mario.visible=false;
		//The same concept above applies here but its for Mario instead of donkey kong.
		
		

		
		// marioLeft3.body.gravity.y = 600;

		//The same concept as above but it applies for Mario when he turns left. Mario lefts, visiblity is set to 
		//false for now.


		Barrel = game.add.sprite(620, 90, 'Barrel');
		Barrel.scale.setTo(1.4,1.4);
		Barrel.body.gravity.y = 600;
		
		Barrel2 = game.add.sprite(620, 90, 'Barrel');
		Barrel2.scale.setTo(1.4,1.4);
		Barrel2.visible = false;

		
		Barrel3 = game.add.sprite(620, 90, 'Barrel');
		Barrel3.scale.setTo(1.4,1.4);
		Barrel3.visible = false;
		
		Barrel4 = game.add.sprite(620, 90, 'Barrel');
		Barrel4.scale.setTo(1.4,1.4);
		Barrel4.visible = false;
		
		Barrel5 = game.add.sprite(620, 90, 'Barrel');
		Barrel5.scale.setTo(1.4,1.4);
		Barrel5.visible = false;
		
		Barrel6 = game.add.sprite(620, 90, 'Barrel');
		Barrel6.scale.setTo(1.4,1.4);
		Barrel6.visible = false;
		
		Barrel7 = game.add.sprite(620, 90, 'Barrel');
		Barrel7.scale.setTo(1.4,1.4);
		Barrel7.visible = false;
		
		Barrel8 = game.add.sprite(620, 90, 'Barrel');
		Barrel8.scale.setTo(1.4,1.4);
		Barrel8.visible = false;
		//The barrel moving animation.
	

},


update:function() {
		gameTimer2 ++;
		 if (gameTimer2 == 69){
		     seconds2++;
		     gameTimer2=0;
		     count2 = false;
		 }
		 else if (gameTimer2 == 269 && count2 == true){
		     gameTimer2 = 0;
		     seconds2++;
		 }
		 timerStatus2.text="Seconds Used: " + seconds2;	
		 scoreStatus2.text="Score: "+userScore;
	
		timer=timer+1;
		
		 barrelsRolling2(Barrel);
		
		if (timer>200)
		{
		Barrel2.visible=true;
		barrelsRolling2(Barrel2);
		}
		
		if (timer>400)
		{
		Barrel3.visible=true;
		barrelsRolling2(Barrel3);
		}
		
		if (timer>600)
		{
		Barrel4.visible=true;
		barrelsRolling2(Barrel4);
		}
		
		if (timer>800)
		{
		Barrel5.visible=true;
		barrelsRolling2(Barrel5);
		}
		
		if (timer>1000)
		{
		Barrel6.visible=true;
		barrelsRolling2(Barrel6);
		}
		
		if (timer>1200)
		{
		Barrel7.visible=true;
		barrelsRolling2(Barrel7);
		}
		
		if (timer>1400)
		{
		Barrel8.visible=true;
		barrelsRolling2(Barrel8);
		}
		
		//Calls the function barrel rolls.
		

	
		deathByBarrel2(marioLeft3,Barrel);
		deathByBarrel2(marioLeft3,Barrel2);
		deathByBarrel2(marioLeft3,Barrel3);
		deathByBarrel2(marioLeft3,Barrel4);
		deathByBarrel2(marioLeft3,Barrel5);
		deathByBarrel2(marioLeft3,Barrel6);
		deathByBarrel2(marioLeft3,Barrel7);
		deathByBarrel2(marioLeft3,Barrel8);

		//the code above means if barrel hits mario, then mario starts at the beginning and loses a life 
		
		game.physics.arcade.collide(marioLeft3,beam6);
		game.physics.arcade.collide(marioLeft3,beam5);
		game.physics.arcade.collide(marioLeft3,beam4);
		game.physics.arcade.collide(marioLeft3,beam3);
		game.physics.arcade.collide(marioLeft3,beam2);
		game.physics.arcade.collide(marioLeft3,beam);
		game.physics.arcade.collide(marioLeft3,miniBeam);
		//the code above is making mario walk on the beam
		
		
		climbing2(marioLeft3,ladder3);
		climbing2(marioLeft3,ladder2);
		climbing2(marioLeft3,ladder4);
		climbing2(marioLeft3,ladder5);
		climbing2(marioLeft3,ladder);
		climbing2(marioLeft3,ladder6);
		//mario climbing the ladders.
		
		
		//The if statement below is for mario to move right.
		if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){	
	    	marioLeft3.body.velocity.x = 250;
			
		}
		//The else if statement below makes mario move left.
		 else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
		 	marioLeft3.body.velocity.x = -250;

		}
		else
		{
		//If the user does not click either key, then mario does not move.
			marioLeft3.body.velocity.x = 0;

		}
		//The code below makes it so that mario cannot leave the screen.
		if (marioLeft3.x>770)
		{
			marioLeft3.x=770;
		}
		if (marioLeft3.x<10)
		{
			marioLeft3.x=10;
		}
		if (marioLeft3.y<10)
		{
			marioLeft3.y=10;
		}
		
		if (checkOverlap(marioLeft3,peach)==true)
		{
			if(seconds2<12)
			{
				userScore= userScore+1000;
			}
			else if(seconds2<25)
			{
				userScore= userScore+500;
			}
			else
			{
				userScore=userScore+100;
			}
			game.state.start('leaderboard');		
		}

		//This calls the mario jumping function again.
		marioJumping2();	
		
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
function checkOverlap2(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

	// This function is checking the overlap for each sprite.
	}
	 function climbing2(player, ladder)
	{
		if (game.input.keyboard.isDown(Phaser.Keyboard.UP) && checkOverlap2(player,ladder)){	
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
	
	function marioJumping2()
	{
		if(jumping==true)
		{
			marioLeft3.body.velocity.y = -150;
			jumpCount++;
		}
		if(jumpCount>25 && jumping==true)
		{
			marioLeft3.body.velocity.y = 150;
		}
		if(jumpCount>50 && jumping==true)
		{
			jumping=false;
			jumpCount=0;
		}
	}
	
	function deathByBarrel2(mario,barrel)
	{
		if( checkOverlap2(mario,barrel)==true)
		{
			mario.x = 780;
			mario.y = 500;
			lives=lives-1;
		}
	}
		//The function above is calculating the jumping for mario.
		//This is preventing the user from holding the up arrow key to fly.
		//Restricts the height of mario.
	
	//The function below is checking to see if the barrel is colliding or touching the beams.
	//If this is true the barrel will roll.
	function barrelsRolling2(barrels2)
	{
		barrels2.body.gravity.y = 600;

		if (game.physics.arcade.collide(barrels2,beam) == true)
		{
			barrels2.x = barrels2.x-3;

		}
		if (game.physics.arcade.collide(barrels2,beam2) == true)
		{
			barrels2.x = barrels2.x+3;
			
		}
		
		if (game.physics.arcade.collide(barrels2,beam4) == true)
		{
			barrels2.x = barrels2.x-3;
			
		}
		if (game.physics.arcade.collide(barrels2,beam5) == true)
		{
			barrels2.x = barrels2.x+3;
			
		}
		if (game.physics.arcade.collide(barrels2,beam6) == true)
		{
			barrels2.x = barrels2.x-3;
			
		}
		if (game.physics.arcade.collide(barrels2,beam3) == true)
		{
			barrels2.x = barrels2.x+3;

		}
		

	}
