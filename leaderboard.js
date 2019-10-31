//  Joshua Ramnaraine, Apinaash Pavalarajah, Prashanth Ketheeswaran
// January,24,2017
// leaderboard.js
// Description: this screen shows the scores


//The array is for the scores.

// var score = [1,5,8,6,3,number];
///The function below is where bubble sorting is used.
//Sorts the array.
var one;
var two;
var three;
var four;
var five;
var six;
var statusOne;
var statusTwo;
var statusThree;
var statusFour;
var statusFive;
var statusSix;
var title;
var font;
var font2;

 function bubbleSort(items) {  
    var length = items.length;
    for (var i = (length - 1); i >= 0; i--) {
        //Number of passes
        for (var j = (length - i); j > 0; j--) {
            //Compare the adjacent positions
            if (items[j] < items[j - 1]) {
                //Swap the numbers
                var tmp = items[j];
                items[j] = items[j - 1];
                items[j - 1] = tmp;
            }
        }
    }
}
var leaderboard={
preload: function(){
 game.load.image('backbtn', 'assets/Sprites/gem-castle.png');  
 game.load.image('coin1','assets/Sprites/coin.png');
 game.load.image('coin2','assets/Sprites/coin.1.png');
 game.load.image('coin3','assets/Sprites/coin.2.png');
 game.load.image('coin4','assets/Sprites/coin.3.png');
 game.load.image('coin5','assets/Sprites/coin.4.png');
},
create: function(){
    
    font={ font: "16px Courier", fill: "white", align: "center"};
    font2 ={font2:"40px Courier", fill: "blue", align:"center"};
    
    
    title=game.add.text(260,78,"",font2);
    
    coin1=game.add.sprite(40,80,'coin1');
    coin1.scale.setTo(0.1,0.1);
    coin2=game.add.sprite(510,170,'coin2');
    coin2.scale.setTo(0.1,0.1);
    coin3=game.add.sprite(60,400,'coin3');
    coin3.scale.setTo(0.1,0.1);
    coin4=game.add.sprite(500,500,'coin4');
    coin4.scale.setTo(0.1,0.1);
    coin5=game.add.sprite(700,350,'coin5');
    coin5.scale.setTo(0.1,0.1);
	
	statusOne=game.add.text(242, 148,"", font);
	statusTwo=game.add.text(242, 198,"", font);
	statusThree=game.add.text(242, 248,"", font);
	statusFour=game.add.text(242, 298,"", font);
	statusFive=game.add.text(242, 348,"", font);
	statusSix=game.add.text(242, 398,"", font);
	
	backbtn=game.add.sprite(20, 470, 'backbtn');
	backbtn.inputEnabled=true;
	backbtn.scale.setTo(0.35,0.35);
	backbtn.events.onInputDown.add(function(){
	game.state.start('menu');
	}
	,this);
},

update:function() {
	var number = userScore;
	var score= [200,100,700,1999,1499,number];
    bubbleSort(score);
    one=score[5];
	two=score[4];
	three=score[3];
	four=score[2];
	five=score[1];
	six=score[0];
	statusOne.text =   "First Place:           "+one;
	statusTwo.text =   "Second Place:          "+two;
	statusThree.text = "Third Place:           "+three;
	statusFour.text =  "Fourth Place:          "+four;
	statusFive.text =  "Fifth Place:           "+five;
	statusSix.text =   "Sixth Place:           "+six;
	title.text="TOP 6 SCORES";
	if(one==userScore){
	    statusOne.addColor('#FFD700',0);
	}
	else if(two==userScore){
	    statusTwo.addColor('#FFD700',0);
	}
	else if(three==userScore){
	    statusThree.addColor('#FFD700',0);
	}
	else if(four==userScore){
	    statusFour.addColor('#FFD700',0);
	}
	else if(five==userScore){
	    statusFive.addColor('#FFD700',0);
	}
	else if(six==userScore){
	    statusSix.addColor('#FFD700',0);
	}
},
};