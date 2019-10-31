// Joshua Ramnaraine, Apinaash Pavalarajah, Prashanth Ketheeswaran
// January,24,2017
// helpScreen.js
// Description: this screen shows the players on how to play donkey kong 

var helpBG;
var helpScreen={

preload:function() {
	game.load.image('help','assets/Sprites/Screens/helpScreen.png');
	game.load.image('backbtn', 'assets/Sprites/gem-castle.png');

	//These are the images used for this screen.
},

create:function() {
	helpBG=game.add.sprite(0,0,'help');
	backbtn=game.add.sprite(20, 470, 'backbtn');
	backbtn.scale.setTo(0.35,0.35);
	backbtn.inputEnabled=true;
	backbtn.events.onInputDown.add(function(){
	game.state.start('menu');
		//this code is for when the back button is clicked, the menu wil load.
	}
		,this);
		//This code is for when the start button is clicked, the game begins.
		audio.loop =true;
		//audio.play();
},

update:function() {

},


};