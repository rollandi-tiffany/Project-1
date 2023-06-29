$(document).ready(function(){
    //select the start button
    const $startButton = $("#start");
    const $squares = $(".square");
    //listen for clicks on the starte button
    $startButton.on("click", function(){
        randomSquare();
    });

    //when clicked, call a function that selections a random square that turns the background green
    function randomSquare(){
        const randomSquare = $squares[Math.floor(Math.random() * $squares.length)];
        $(randomSquare).addClass("green-bg");

        setTimeout(function(){
            $(randomSquare).removeClass("green-bg");

        }, 3000)

    }
});