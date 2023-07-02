
var increaseButton = document.getElementById("increaseButton");
var decreaseButton = document.getElementById("decreaseButton");
var text = document.getElementById("myText");

var fontSize = 16;
text.style.fontSize = fontSize + "px";

increaseButton.addEventListener("click", function () {
    fontSize += 2;
    text.style.fontSize = fontSize + "px";
});

decreaseButton.addEventListener("click", function () {
    fontSize -= 2;
    text.style.fontSize = fontSize + "px";
});