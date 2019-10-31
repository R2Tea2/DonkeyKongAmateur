//  Joshua Ramnaraine, Apinaash Pavalarajah, Prashanth Ketheeswaran
// January,24,2017
// NextLevel.js
// Description: this screens tells the user that they beat the level and they are on to the next one 

//make all screen variables here
var bg;
var timer;
var NextLevel={

preload:function() {
	game.load.image('NextLevel','assets/Sprites/Screens/NextLevelScreen.png');
},
//This function loads the Splash Screen.
create:function() {
	bg=game.add.sprite(0,0,'NextLevel');
	timer=0;
},

update:function() {
	timer=timer+1;
	if(timer>200){
		game.state.start('lvl2');
	}
},


};