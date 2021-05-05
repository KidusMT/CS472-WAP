var wallHit = false;
var started = false;

var loseFunc = () => {
    if (started){
        $(".boundary").removeClass("youWin");
        $(".boundary").addClass("youlose");
        $("h2").text("Sorry you lost :[");
        started = false;
        wallHit = true;
    }
}

$(document).ready(() => {
    $("#congratzImg").hide();

    $("#start").click((e) => { 
        console.log("started");
        started = true;
        wallHit = false;
        $(".boundary").removeClass("youlose");
        $(".boundary").removeClass("youWin");
        $("h2").text("Game On!");
        $("#congratzImg").hide();
    });

    $("#maze").mouseleave(() => { 
        loseFunc();
    });

    $(".boundary").mouseover(() => {
        loseFunc();
    });

    $("#end").mouseover(() => {
        if (started && !wallHit){
            $("h2").text("You win :]");
            $(".boundary").addClass("youWin");
            started = false;
        }
    });
});
