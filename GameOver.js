// Joshua Ramnaraine, Apinaash Pavalarajah, Prashanth Ketheeswaran
// January,24,2017
// GameOver.js
// Description: when the player loses all it lives this screen tells them that the game is over

var bg;
var timer;
var GameOverSound  = new Audio('assets/Sprites/sounds/GameOverSong.mp3');
var GameOver={

preload:function() {
	game.load.image('GameOver','assets/Sprites/Screens/gameover.png');
	//this loads the game over screen.
},
//This function loads the Splash Screen.
create:function() {
	bg=game.add.sprite(0,0,'GameOver');
	timer=0;
},

update:function() {
	timer=timer+1;
	audio.pause();
	GameOverSound.play();
	if(timer>200){
		game.state.start('leaderboard');
		//once the game is over, the leaderboard will load.
	}
},

};