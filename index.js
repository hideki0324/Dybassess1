//LEVEL 3 - APP1 CONTROLS - SIMPLE JS

var bg1 = document.getElementById("bg1"),
    bg2 = document.getElementById("bg2"),
    bg3 = document.getElementById("bg3"),
    bg4 = document.getElementById("bg4"),
    ch1 = document.getElementById("ch1"),
    ch2 = document.getElementById("ch2"),
    ch3 = document.getElementById("ch3");

bg1.addEventListener("click", function(){
    ch1.style.backgroundImage = "url(imgs/i1.jpg)";
    ch2.style.backgroundImage = "url(imgs/i2.jpg)";
    ch3.style.backgroundImage = "url(imgs/i3.jpg)";
});

bg2.addEventListener("click", function(){
    ch1.style.backgroundImage = "url(imgs/i4.jpg)";
    ch2.style.backgroundImage = "url(imgs/i5.jpg)";
    ch3.style.backgroundImage = "url(imgs/i6.jpg)";
});

bg3.addEventListener("click", function(){
    ch1.style.backgroundImage = "url(imgs/i7.jpg)";
    ch2.style.backgroundImage = "url(imgs/i8.jpg)";
    ch3.style.backgroundImage = "url(imgs/i9.jpg)";
});

bg4.addEventListener("click", function(){
    ch1.style.backgroundImage = "url(imgs/i10.jpg)";
    ch2.style.backgroundImage = "url(imgs/i11.jpg)";
    ch3.style.backgroundImage = "url(imgs/i12.jpg)";
});