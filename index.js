
// LEFT DICE
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1  = Math.floor(randomNumber1) + 1;

var source1 = "dice" + randomNumber1 + "." + "png";
var finalSource1 = "images/" + source1;

var pic1 = document.querySelectorAll("img")[0].setAttribute("src", finalSource1);


// RIGHT DICE
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2  = Math.floor(randomNumber2) + 1;

var source2 = "dice" + randomNumber2 + "." + "png";
var finalSource2 = "images/" + source2;

var pic2 = document.querySelectorAll("img")[1].setAttribute("src", finalSource2);


if(finalSource1 > finalSource2){
    document.querySelector("h1").innerHTML = "Player 1 won";
}
else if(finalSource2 > finalSource1){
    document.getElementsByTagName("h1")[0].innerHTML = "player 2 won"
}
// else{
//     document.getElementsByClassName("head1")[0].textContent = "Draw";
// }
else{
    document.getElementById("hh1").textContent = "Match Draw";

}
