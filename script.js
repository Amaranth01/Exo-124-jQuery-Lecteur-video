// FIXME Assurez vous que ces deux variables contiennent bien les bonnes choses ;-)
let player = $('.player__video').first();
let progress = $('.progress__filled').first();
let toggle = true;
let maxBar = 200;
let currentBar = 0;
let intervalId;

//button play pause
$(".toggle").click(function (){
    if (toggle){
        $(this).html("⏸");
        toggle = false;
        player.get(0).play();
    }
    else {
        $(this).html("►");
        toggle = true;
        player.get(0).pause();
    }
});

//See the progress of the video
player.on('timeupdate', function (){
    console.log(this.on)
});

//progress filled
$("#playbackRate").on("change", function (){
    player[0].currentTime = document.getElementById("playbackRate").value * player[0].duration;
});

//back -10 or speed 25
$("button").click(function (){
    switch ($(this).attr("data-skip")){
        case "-10":
            player[0].currentTime -= 10;
            break;
        case "25":
            player[0].currentTime += 25;
            break;
    }
});

//sound filled
$("#volume").on("change", function (){
    player[0].volume = this.value;
});