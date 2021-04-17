function sort1() {
  var randomNumber1 = Math.ceil(Math.random() * 6);
  var imagename1 = "images/dice" + randomNumber1 + ".png";

  var randomNumber2 = Math.ceil(Math.random() * 6);
  var imagename2 = "images/dice" + randomNumber2 + ".png";

  var image1 = document.getElementById("img1");
  image1.src = imagename1;

  var image2 = document.getElementById("img2");
  image2.src = imagename2;

  if (randomNumber1 > randomNumber2) {
    var text = document.querySelector(".refresh");
    text.innerHTML = "Number one Win";
  } else if (randomNumber1 < randomNumber2) {
    var text = document.querySelector(".refresh");
    text.innerHTML = "Number two Win";
  } else if (randomNumber1 == randomNumber2) {
    var text = document.querySelector(".refresh");
    text.innerHTML = "Draw!";
  }
}
