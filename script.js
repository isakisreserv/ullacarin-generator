var canvas = document.getElementById("result");
var ctx = canvas.getContext("2d");

var button = document.getElementById("button");
var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var link3 = document.getElementById("link3");
var link4 = document.getElementById("link4");

var height = 720;
var ff = 0.85;

canvas.style.width = "100%";
canvas.height = height;
canvas.width = height*4;

var img = Array(4);

for (var i = 0; i < 4; i++) {
  img[i] = new Image();
  img[i].name = ""+i;
}

img[0].onload = function() {
  setTimeout(drawImages, 100);
}

function drawImages() {
  img[0].w = ff * img[0].width * (height/img[0].height);
  img[1].w = ff * img[1].width * (height/img[1].height);
  img[2].w = ff * img[2].width * (height/img[2].height);
  img[3].w = ff * img[3].width * (height/img[3].height);
  for (i in img) {
    if (!(img[i].w > 0)) {
      img[i].w = 0;
    }
  }
  canvas.width = img[0].w+img[1].w+img[2].w+img[3].w;


  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img[0], 0, 0, img[0].w, height);
  ctx.drawImage(img[1], img[0].w, 0, img[1].w, height);
  ctx.drawImage(img[2], img[0].w+img[1].w, 0, img[2].w, height);
  ctx.drawImage(img[3], img[0].w+img[1].w+img[2].w, 0, img[3].w, height);
}

button.onclick = function() {
  img[0].src = link1.value;
  img[1].src = link2.value;
  img[2].src = link3.value;
  img[3].src = link4.value;
}
