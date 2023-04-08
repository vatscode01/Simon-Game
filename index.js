// console.log(parseInt(ran));
// alert("JQuery")

let level=0,pointer=0,startFlag=true;

let gamePattern=[];
let userClickedPattern=[];
let buttonColors=["red","blue","green","yellow"];
let randomChoosedColour,userChoosenColour;

$(document).keydown(function(){  
    if(startFlag===true)  {
        nextSequence();
        startFlag=false;
    }
});

// Pointer should be zero at every call to nextSequence
function nextSequence(){
    userClickedPattern=[];      //Reset the userClickedPattern

    level++;
    $("h1").text("level "+level);

    let randomNumber=Math.floor(Math.random()*4);
    randomChoosedColour=buttonColors[randomNumber];
    makeSound(randomChoosedColour);
    gamePattern.push(randomChoosedColour);

    $("#"+randomChoosedColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

// Call check function with every click
$(".btn").click(function(){
    userChoosenColour=$(this).attr("id");
    userClickedPattern.push(userChoosenColour);
    makeSound(this.id);
    animateSound(this.id);
    checkPattern(userClickedPattern.length-1);

});

function checkPattern(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence();

            },1000);
        }
    }
    else{
        makeSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        startOver();
    }
}

function startOver(){
    $("h1").text("Game Over! Press any key to restart");
    startFlag=true; level=0; gamePattern=[];

}

function makeSound(colour){
    var audio = new Audio("sounds/" + colour + ".mp3");
    audio.play();
}

function animateSound(colour){
    $("#"+colour).addClass("pressed");
    setTimeout(()=>{
        $("#"+colour).removeClass("pressed");
    },100);
}