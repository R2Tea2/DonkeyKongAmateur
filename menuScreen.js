
var menuBG;
var gameTimer=0;
var seconds=0;
var count=true;
var userScore=0;
var audio = new Audio('assets/menuSong.mp3');
//var inputFirstName = prompt("Please enter your first name:");
//var inputLastName = prompt("Please enter your last name:");
//var firstNameInitial = inputFirstName.substring(0,1).toUpperCase();
//var lastNameInitial = inputLastName.substring(0,1).toUpperCase();
//alert("Hello " + inputFirstName + " " + lastNameInitial + "!!!");
var menuScreen = {

preload: function(){
    //game.load.image('menu','assets/Sprites/Screens/MenuScreen3.png');
    game.load.image('title','assets/Sprites/donkeyTitle.png');
    game.load.image('donkeyKong','assets/Sprites/donkeyMenu.jpg');
    game.load.image('start','assets/Sprites/Screens/start.png');
    game.load.image('help','assets/Sprites/Screens/help2.png');
    game.load.image('leaderboard','assets/Sprites/Screens/Leaderboard.png');
    game.load.image('flower1','assets/Sprites/flower.png');
    game.load.image('flower2','assets/Sprites/flower.1.png');
    game.load.image('flower3','assets/Sprites/flower.2.png');
    game.load.image('flower4','assets/Sprites/flower.3.png');

    //game.load.start();
    lives = 3;
    
},

create: function() {
    //bg=game.add.sprite(-10,0,'menu');

    audio.loop =true;
    audio.play();
    //menuBG = game.add.sprite(0,0,'menu');
    title=game.add.sprite(220,40,'title');
    title.scale.setTo(0.15,0.15);
    
    donkeyKong=game.add.sprite(260,130,'donkeyKong');
    donkeyKong.scale.setTo(1.2,1.2);
    
    flower1=game.add.sprite(40,50,'flower1');
    flower1.scale.setTo(0.35,0.35);
    flower2=game.add.sprite(40,300,'flower2');
    flower2.scale.setTo(0.35,0.35);
    flower3=game.add.sprite(650,50,'flower3');
    flower3.scale.setTo(0.35,0.35);
    flower4=game.add.sprite(650,300,'flower4');
    flower4.scale.setTo(0.35,0.35);
    
    help = game.add.sprite(80,470,'help');
    help.inputEnabled=true;
	help.events.onInputDown.add(function(){
		game.state.start('helpScreen');
	}
	,this);
	leaderboard = game.add.sprite(570,470,'leaderboard');
    leaderboard.inputEnabled=true;
	leaderboard.events.onInputDown.add(function(){
		game.state.start('leaderboard');
	}
	,this);
	start = game.add.sprite(345,470,'start');
    start.inputEnabled=true;
	start.events.onInputDown.add(function(){
		game.state.start('lvl1');
	}
	,this);

},

update: function(){
    userScore=0;
},
};