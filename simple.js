//LEVEL 4a - APP1 ZOOM - SIMPLE JS
var ch1 = document.getElementById("ch1"),
    ch2 = document.getElementById("ch2"),
    ch3 = document.getElementById("ch3");

ch1.addEventListener("mouseenter", function(){
      zoom.style.backgroundImage = ch1.style.backgroundImage;         
});

ch2.addEventListener("mouseenter", function(){
      zoom.style.backgroundImage = ch2.style.backgroundImage;         
});

ch3.addEventListener("mouseenter", function(){
      zoom.style.backgroundImage = ch3.style.backgroundImage;         
});



//LEVEL 4b - MENU CONTROLS

var makeBg = document.getElementById("makeBg"),
    reset = document.getElementById("reset"),
    hideApp = document.getElementById("hideApp"),
    showApp = document.getElementById("showApp");

makeBg.addEventListener("click", function(){
      bg.style.backgroundImage = zoom.style.backgroundImage;            
});

reset.addEventListener("click", function(){
      bg.style.display = "none";            
});

showApp.addEventListener("click", function(){
      bg.style.display = "block";            
});

hideApp,addEventListener("clixk", function(){
    app1.style.display = "none";
});


//LEVEL 5 - SIMPLE CALCULATIONS - ZOOM

var plus = document.getElementById("plus"),
    minus = document.getElementById("minus"),
    widthNum = 100, 
    heightNum = 70;

plus.addEventListener("click", function(){
    if(widthNum <= 91 && widthNum <=64){
        widthNum += 10;
        zoom.style.width = widthNum + "%";
        heightNum += 7;
        document.getElementById("zoom").style.height = heightNum + "%";
    }
});

minus.addEventListener("click", function(){
    if(widthNum >= 11 && heightNum >= 8){
        widthNum -= 10;
        document.getElementById("zoom").style.width = widthNum + "%";
        heightNum -= 7;
        document.getElementById("zoom").style.height = heightNum + "%";
    }
});



//LEVEL 6a - CHALLENGE 2 - NEXT + PREVIOUS
var inputNum = document.getElementById("inputNum");

inputNum.addEventListener("change",function(){
    if(inputNum.value <= 12 && inputNum.value >= 1){
        bg.style.backgroundImage = "url(imgs/i"+inputNum.value+".jpg)";
        }if(inputNum.value > 12 && inputNum.value < 1){
            alert("doesn’t exist!");
        }
});


//

//LEVEL 6b - CHALLENGE 2 - NEXT + PREVIOUS
var previousBut = document.getElementById("previous"),
    nextBut = document.getElementById("next");

previousBut.addEventListener("click", function() {
    if(ch1.style.backgroundImage == 'url("imgs/i1.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i10.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i11.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i12.jpg")';
        
    } 
    else if(ch1.style.backgroundImage == 'url("imgs/i4.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i1.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i2.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i3.jpg")';
        
    } 
    else if(ch1.style.backgroundImage == 'url("imgs/i7.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i4.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i5.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i6.jpg")'; 
    }
    else if(ch1.style.backgroundImage == 'url("imgs/i10.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i7.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i8.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i9.jpg")'; 
    }
        
});

nextBut.addEventListener("click", function() {
    
    if(ch1.style.backgroundImage == 'url("imgs/i1.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i4.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i5.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i6.jpg")';
        
    } 
    else if(ch1.style.backgroundImage == 'url("imgs/i4.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i7.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i8.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i9.jpg")';
        
    } 
    else if(ch1.style.backgroundImage == 'url("imgs/i7.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i10.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i11.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i12.jpg")'; 
    }
    else if(ch1.style.backgroundImage == 'url("imgs/i10.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i1.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i2.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i3.jpg")'; 
    }
});








































