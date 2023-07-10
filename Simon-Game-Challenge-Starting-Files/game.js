

//Creating new array
var buttonColours = ["red", "blue", "green", "yellow"];

// create new array
var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;


$(document).on( "keypress", function() {
    if (!started){
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;}
});        


$(".btn").on("click", function(){

    var userChosenColor = $(this).prop("id");
    userClickedPattern.push(userChosenColor)
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});


function checkAnswer(currentLevel){

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){

        console.log("Success");

        if (userClickedPattern.length === gamePattern.length){

            setTimeout(function(){

                nextSequence();
            }, 1000

            )
        }

    }else{

        console.log("Wrong");

    }
}



// Creating  new function
function nextSequence(){
    level++;
    $("#level-title").text("Level " + level);
    //creating random number between 0 and 3
var randomNumber = Math.floor((Math.random() * 4));
var randomChosenColor = buttonColours[randomNumber];
gamePattern.push(randomChosenColor);
$("#"+ randomChosenColor ).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);

};



function playSound(name){

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();   

};


function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
}, 100);

};


        


 
  



