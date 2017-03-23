var targetResult = Math.floor(Math.random() * 50 + 10);
$("#value").text(targetResult);

var picResult = [Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 10 + 1), ];

for (var i = 0; i < picResult.length; i++) {
    console.log(picResult[i]);
};

var userCounter = 0,
    wins = 0,
    losses = 0;

 var intervalSum;


function reset() {

    targetResult = Math.floor(Math.random() * 50 + 10);
    $("#value").text(targetResult);
    // $("#userScoreValue").text(resetIntervalSum = 0);
    userCounter = 0;
    $("#userScoreValue").text(userCounter);
};


$('.pic').click(function() {

    var id = $(this).data("id")


 intervalSum = userCounter += picResult[id];


    $("#userScoreValue").text(intervalSum);

    if (intervalSum > targetResult) {
        alert(intervalSum + " You went over!");
        losses++;
        $("#lossCounter").text(losses);
        reset();
        console.log(targetResult);
        // redo();

    };

    if (intervalSum == targetResult) {
        console.log(targetResult)
        alert("You win!");
        wins++;
        $("#winsCounter").text(wins);
        reset();
        // redo();
    };



});



////////////////////////// I DIDN'T DELETE THIS STUFF BECAUSE IT'S ANOTHER WAY TO DO THE FUNCTION ///////////////////////////////


 // var picReset = [Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 10 + 1), ];

// for (var j = 0; j < picResult.length; j++) {
//     console.log(picResult[j]);
// };

// var pic1Result = Math.floor(Math.random() * 10 + 1),
//     pic2Result = Math.floor(Math.random() * 10 + 1),
//     pic3Result = Math.floor(Math.random() * 10 + 1),
//     pic4Result = Math.floor(Math.random() * 10 + 1);


// var pic1input, pic2input, pic3input, pic4input;

// var resetIntervalSum;

// // var resetIntervalSum;

// // var pic1Reset = Math.floor(Math.random() * 10 + 1);
// // var newrube = eval(userCounter += pic1Reset);

// // function reset() {
// //     $("#value").text(resetTarget);
// //     $("#userScoreValue").text(resetIntervalSum = 0);

// //     // $("#pic1").click(newrube);
// //     // $("#userScoreValue").text(newrube);

// // };
// var resetTarget,
//     resetUserScore,
//     pic1Reset,
//     resetIntervalSum;




// function redo() {

//     var pic1Reset = Math.floor(Math.random() * 10 + 1);
//     $("pic1").click(function() {
//         resetIntervalSum = eval(resetUserScore += picReset[0]);
//         $("#userScoreValue").text(resetIntervalSum);
//     });
// };


// $("#pic1").click(function() {

//     intervalSum = userCounter += picResult[0];


//     $("#userScoreValue").text(intervalSum);

//     if (intervalSum > targetResult) {
//         alert(intervalSum + " You went over!");
//         losses++;
//         $("#lossCounter").text(losses);
//         reset();
//         // redo();

//     };

//     if (intervalSum == targetResult) {
//         alert("You win!");
//         wins++;
//         $("#winsCounter").text(wins);
//         reset();
//         // redo();

//     };












// });


// $("#pic2").click(function() {

//     intervalSum = eval(userCounter += picResult[1]);

//     $("#userScoreValue").text(intervalSum);

//     if (intervalSum > targetResult) {
//         alert(intervalSum + " You went over!");
//     };

//     if (intervalSum == targetResult) {
//         alert("You win!");
//         wins++;
//         $("#winsCounter").text(wins);
//     };

// });

// $("#pic3").click(function() {

//     intervalSum = eval(userCounter += picResult[2]);

//     $("#userScoreValue").text(intervalSum);

//     if (intervalSum > targetResult) {
//         alert(intervalSum + " You went over!");
//     };

//     if (intervalSum == targetResult) {
//         alert("You win!");
//         wins++;
//         $("#winsCounter").text(wins);
//     };

// });

// $("#pic4").click(function() {

//     intervalSum = eval(userCounter += picResult[3]);

//     $("#userScoreValue").text(intervalSum);

//     if (intervalSum > targetResult) {
//         alert(intervalSum + " You went over!");
//     };

//     if (intervalSum == targetResult) {
//         alert("You win!");
//         wins++;
//         $("#winsCounter").text(wins);
//     };

// });



////////////////////////////////////////////////////////////////////

// function reset(){
//     wins = 0;
//     losses = 0;
//     userCounter= 0;

// };
// var i = picResult[i];

// var picResult = [Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 10 + 1),];

// for( var i=0; i < picResult.length; i++){
// console.log(picResult[i]);
// };
