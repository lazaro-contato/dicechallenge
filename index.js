function sort() {
  var randomNumber1 = Math.ceil(Math.random() * 6);
  var imagename = "dice" + randomNumber1 + ".png";

  var image = document.getElementById("img1");
  image.src = imagename;
}
