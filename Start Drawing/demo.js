function setup() { "use strict";
  var canvas = document.getElementById('myCanvas');
  var slider1 = document.getElementById('slider1');
  slider1.value = 0;
  var slider2 = document.getElementById('slider2');
  slider2.value = 0;
  function draw() {
    var context = canvas.getContext('2d');
    canvas.width = canvas.width;
    // use the sliders to get various parameters
    var dx = slider1.value;
    var dy = slider2.value;
    

    function DrawLOutline(color) {
      context.beginPath();
      context.fillStyle = color;
      context.moveTo(250,25);
      context.lineTo(350,25);
      context.lineTo(350,40);
      context.lineTo(330,45);
      context.lineTo(330,50);
      context.lineTo(350,60);
      context.lineTo(350,75);
      context.lineTo(300,75);
      context.lineTo(300,100);
      context.lineTo(310,140);
      context.lineTo(295,180);
      context.lineTo(275,205);
      context.lineTo(200,220);
      context.lineTo(80,200);
      context.lineTo(180,190);
      context.lineTo(250,100);
      context.lineTo(250,25);
      context.fill(); 
    }

    function DrawWine(color){
        context.beginPath();
        context.fillStyle = color;
        context.moveTo(260,140);
        context.lineTo(215,75);
        context.lineTo(120,85);
        context.lineTo(180,95);
        context.lineTo(260,140);
        context.fill(); 
    }

    function DrawWineOutlne(color){
        context.beginPath();
        context.strokeStyle=color;
        context.moveTo(260,140);
        context.lineTo(215,75);
        context.lineTo(120,85);
        context.lineTo(180,95);
        context.lineTo(260,140);
        context.stroke();
    }

    function DrawWine2(color){
        context.beginPath();
        context.fillStyle = color;
        context.moveTo(170,93);
        context.lineTo(130,100);
        context.lineTo(190,110);
        context.lineTo(230,130);
        context.lineTo(231,123);
        context.lineTo(180,95);
        context.fill(); 
    }

    function DrawWineOutline2(color){
        context.beginPath();
        context.strokeStyle=color;

        context.moveTo(170,93);
        context.lineTo(130,100);
        context.lineTo(190,110);
        context.lineTo(230,130);
        context.stroke();
    }
    
     function Draweye(color){
        context.fillStyle = color;
        //context.lineWidth = 5;
        context.beginPath();
        context.moveTo(270,40);
        context.lineTo(290,30);
        context.lineTo(310,40);
        context.lineTo(290,50);
        context.closePath();
        context.fill(); 
     }

     function DrawFile(color){
        context.beginPath();
        context.fillStyle = color;

        context.moveTo(350,42);
        context.lineTo(350,58);
        context.lineTo(390,80);
        context.lineTo(370,60);
        context.lineTo(410,70);
        context.lineTo(380,55);
        context.lineTo(430,52);
        context.lineTo(380,45);
        context.lineTo(410,35);
        context.lineTo(370,40);
        context.lineTo(395,25);
        context.closePath();
        context.fill(); 
     }

     function DrawTree1(color){
      context.beginPath();
      context.fillStyle = color;

      context.moveTo(600, 500);
      context.lineTo(650,500);
      context.lineTo(650,450);
      context.lineTo(600,450);
      context.fill(); 
     }

     function DrawTree2(color){
      context.beginPath();
      context.fillStyle = color;

      context.moveTo(550, 450);
      context.lineTo(700,450);
      context.lineTo(660,400);
      context.lineTo(690,400);
      context.lineTo(640,360);
      context.lineTo(670,360);
      context.lineTo(625,330);
      context.lineTo(585,360);
      context.lineTo(610,360);
      context.lineTo(570,400);
      context.lineTo(600,400);
      context.fill(); 
     }

     function DrawStar(color){
       context.beginPath();
       context.strokeStyle=color;

       context.moveTo(25,30);
       context.lineTo(35,35);
       context.lineTo(47,30);
       context.lineTo(43,41);
       context.lineTo(50,48);
       context.lineTo(40,50);
       context.lineTo(37,60);
       context.lineTo(30,50);
       context.lineTo(20,48);
       context.lineTo(27,40);
       context.lineTo(25,30);
       context.stroke();
     }
    
    DrawTree1("Maroon");
    DrawTree2("Green");
    context.save();

    context.translate(0,dy);
    DrawStar("Gold");
    DrawLOutline("green");
    Draweye("red");
    DrawWine("Lime");
    DrawWineOutline2("green");
    DrawWineOutlne("green");
    DrawWine2("Lime");
    DrawFile("DarkOrange");
  
    context.translate(dx,0);
    DrawFile("DarkOrange");
    
    context.restore();

   
    
  }
  slider1.addEventListener("input",draw);
  slider2.addEventListener("input",draw);

  draw();
}
window.onload = setup;