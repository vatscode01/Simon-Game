// console.log(parseInt(ran));
// alert("JQuery")

let level=1;


let gamePattern=[];
let userClickedPattern=[];
let buttonColors=["red","blue","green","yellow"];


function nextSequence(){
    let randomNumber=Math.floor(Math.random()*4);
    let randomChoosedColour=buttonColors[randomNumber];
    makeSound(randomChoosedColour);
    gamePattern.push(randomChoosedColour);
    $("#"+randomChoosedColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

$(".btn").click(function(){
    let userClickedButton=$(this).attr("id");
    userClickedPattern.push(userClickedButton);
    makeSound(this.id);
    animateSound(this.id);

});

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


setTimeout(function(){
    nextSequence();
},2000);



