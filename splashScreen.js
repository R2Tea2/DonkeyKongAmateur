//  Joshua Ramnaraine, Apinaash Pavalarajah, Prashanth Ketheeswaran
// January,24,2017
// lvl1.js
// Description: this screen loads splash screen


var bg;
var timer;

var splashScreen = {   
preload: function() {
    game.load.image('background','assets/Sprites/Screens/SplashScreens.png');
},

create: function() {
    bg=game.add.sprite(0,0,'background');
	timer=0;
},
update: function(){
    timer=timer+1;
	if(timer>200){
		game.state.start('menu');
	}
},
};

