  
function setup() {
    var observerCanvas = document.getElementById('observerCanvas');
    var cameraCanvas = document.getElementById('cameraCanvas');
    var observerContext = observerCanvas.getContext('2d');
    var cameraContext = cameraCanvas.getContext('2d');
    var slider1 = document.getElementById('slider1');
    slider1.value = 0;
    var slider11 = document.getElementById('slider11');
    slider11.value = 0;
    var slider111 = document.getElementById('slider111');
    slider111.value = 0;
    var slider2 = document.getElementById('slider2');
    slider2.value = 0;

    var context = cameraContext; // default to drawing in the camera window

    function draw() {
      
    // clear both canvas instances
	observerCanvas.width = observerCanvas.width;
	cameraCanvas.width = cameraCanvas.width;

	// use the sliders to get the angles
    var tParam = slider1.value*0.01;
    var tParam2 = slider11.value*0.01;
    var tParam3 = slider111.value*0.01;
    var viewAngle = slider2.value*0.02*Math.PI;
     
	function moveToTx(loc,Tx)
	{var res=vec3.create(); vec3.transformMat4(res,loc,Tx); context.moveTo(res[0],res[1]);}

	function lineToTx(loc,Tx)
	{var res=vec3.create(); vec3.transformMat4(res,loc,Tx); context.lineTo(res[0],res[1]);}
	
	
    function drawCamera(color,TxU,scale) {
        var Tx = mat4.clone(TxU);
        mat4.scale(Tx,Tx,[scale,scale,scale]);
        context.beginPath();
	    context.strokeStyle = color;
        // Twelve edges of a cropped pyramid
        moveToTx([-3,-3,0],Tx);lineToTx([3,-3,0],Tx);
        lineToTx([3,3,0],Tx);lineToTx([-3,3,0],Tx);lineToTx([-3,-3,0], Tx);
        moveToTx([-3,-3,-2],Tx);lineToTx([3,-3,-2],Tx);
        lineToTx([3,3,-2],Tx);lineToTx([-3,3,-2],Tx);lineToTx([-3,-3,-2], Tx);
        moveToTx([-3,-3,0],Tx);lineToTx([-3,-3,-2],Tx);
        moveToTx([3,-3,0],Tx);lineToTx([3,-3,-2],Tx);
        moveToTx([3,3,0],Tx);lineToTx([3,3,-2],Tx);
        moveToTx([-3,3,0],Tx);lineToTx([-3,3,-2],Tx);
        // draw lens
        moveToTx([-1,-1,-2],Tx);lineToTx([1,-1,-2],Tx);
        lineToTx([1,1,-2],Tx);lineToTx([-1,1,-2],Tx);lineToTx([-1,-1,-2], Tx);
        moveToTx([-1,-1,-4],Tx);lineToTx([1,-1,-4],Tx);
        lineToTx([1,1,-4],Tx);lineToTx([-1,1,-4],Tx);lineToTx([-1,-1,-4], Tx);
        moveToTx([-1,-1,-2],Tx);lineToTx([-1,-1,-4],Tx);
        moveToTx([1,-1,-2],Tx);lineToTx([1,-1,-4],Tx);
        moveToTx([1,1,-2],Tx);lineToTx([1,1,-4],Tx);
        moveToTx([-1,1,-2],Tx);lineToTx([-1,1,-4],Tx);
        context.stroke();
    }
      
    function draw3DAxes(color,TxU,scale) {
        var Tx = mat4.clone(TxU);
        mat4.scale(Tx,Tx,[scale,scale,scale]);

        context.strokeStyle=color;
	    context.beginPath();
	    // Axes
	    moveToTx([1.2,0,0],Tx);lineToTx([0,0,0],Tx);lineToTx([0,1.2,0],Tx);
        moveToTx([0,0,0],Tx);lineToTx([0,0,1.2],Tx);
	    // Arrowheads
	    moveToTx([1.1,.05,0],Tx);lineToTx([1.2,0,0],Tx);lineToTx([1.1,-.05,0],Tx);
	    moveToTx([.05,1.1,0],Tx);lineToTx([0,1.2,0],Tx);lineToTx([-.05,1.1,0],Tx);
      	moveToTx([.05,0,1.1],Tx);lineToTx([0,0,1.2],Tx);lineToTx([-.05,0,1.1],Tx);
	    // X-label
	    moveToTx([1.3,-.05,0],Tx);lineToTx([1.4,.05,0],Tx);
	    moveToTx([1.3,.05,0],Tx);lineToTx([1.4,-.05,0],Tx);
        // Y-label
        moveToTx([-.05,1.4,0],Tx);lineToTx([0,1.35,0],Tx);lineToTx([.05,1.4,0],Tx);
        moveToTx([0,1.35,0],Tx);lineToTx([0,1.28,0],Tx);
	    // Z-label
	    moveToTx([-.05,0,1.3],Tx);
	    lineToTx([.05,0,1.3],Tx);
	    lineToTx([-.05,0,1.4],Tx);
	    lineToTx([.05,0,1.4],Tx);

	    context.stroke();
	}

    function drawUVWAxes(color,TxU,scale) {
        var Tx = mat4.clone(TxU);
        mat4.scale(Tx,Tx,[scale,scale,scale]);

        context.strokeStyle=color;
	    context.beginPath();
	    // Axes
	    moveToTx([1.2,0,0],Tx);lineToTx([0,0,0],Tx);lineToTx([0,1.2,0],Tx);
        moveToTx([0,0,0],Tx);lineToTx([0,0,1.2],Tx);
	    // Arrowheads
	    moveToTx([1.1,.05,0],Tx);lineToTx([1.2,0,0],Tx);lineToTx([1.1,-.05,0],Tx);
	    moveToTx([.05,1.1,0],Tx);lineToTx([0,1.2,0],Tx);lineToTx([-.05,1.1,0],Tx);
      	moveToTx([.05,0,1.1],Tx);lineToTx([0,0,1.2],Tx);lineToTx([-.05,0,1.1],Tx);
	    // U-label
        moveToTx([1.3,.05,0],Tx);lineToTx([1.3,-.035,0],Tx);lineToTx([1.35,-.05,0],Tx);
        lineToTx([1.4,-.035,0],Tx);lineToTx([1.4,.05,0],Tx);
        // V-label
        moveToTx([-.05,1.4,0],Tx);lineToTx([0,1.3,0],Tx);lineToTx([.05,1.4,0],Tx);
	    // W-label
	    moveToTx([-.1,0,1.3],Tx);lineToTx([-.05,0,1.4],Tx);lineToTx([-0,0,1.3],Tx);
	    lineToTx([.05,0,1.4],Tx);lineToTx([.1,0,1.3],Tx);

	    context.stroke();
	}

    // -----------------------------------------// -----------------------------------------// -----------------------------------------// -----------------------------------------
    function drawObject1(color,Tx) {
        context.beginPath();
        context.fillStyle = color;
        moveToTx([-10,3,0],Tx);
        lineToTx([10,3,0],Tx);
        lineToTx([10,7,0],Tx);
        lineToTx([7,7,0],Tx);
        lineToTx([3,11,0],Tx);
        lineToTx([-3,11,0],Tx);
        lineToTx([-7,7,0],Tx);
        lineToTx([-10,7,0],Tx);
        context.closePath();
        context.fill();
        context.beginPath();
        context.fillStyle = "red";
        moveToTx([-8,3,0],Tx);
        lineToTx([-8,0,0],Tx);
        lineToTx([-4,0,0],Tx);
        lineToTx([-4,3,0],Tx);
        context.closePath();
        context.fill();
        context.beginPath();
        context.fillStyle = "red";
        moveToTx([8,3,0],Tx);
        lineToTx([8,0,0],Tx);
        lineToTx([4,0,0],Tx);
        lineToTx([4,3,0],Tx);
        context.closePath();
        context.fill();
        }

    var Cplatform = function(t){
            var x = t;
            var y = -80;
            return [x,y,0];
      }

      var Cplatform_tangent = function(t){
          var x = 1;
          var y = 0;
          return [x,y,0];
      }

  var C0 = function(t) {
      var x = 70 * Math.cos(t) + (100* t)/(2*Math.PI) - 100;
      var y = 80 * Math.sin(t);
      return [x,y,0];
  }

  var C0_tangent = function(t) {
      var x = -70 * Math.sin(t) + (100)/(2*Math.PI);
      var y = 80 * Math.cos(t);
      return [x,y,0];
  }

  var C1 = function(t) {
      var x = 270 * Math.cos(t) ;
      var y = 270 * Math.sin(t);
      return [x, y,0];
  }

  var C1_tangent = function(t) {
      var x = -270 * Math.sin(t);
      var y = 270 * Math.cos(t);
      return [x, y,0];
  }

  var C2 = function(t) {
      var x = 80 * Math.sin(t) - 190;
      var y = -80 * Math.cos(t);
      return [x, y,0];
  }

  var C2_tangent = function(t) {
      var x = 80 * Math.cos(t);
      var y = 80 * Math.sin(t);
      return [x, y,0];
  }

  var C3 = function(t) {//[-300, 4.7]
      var x = t ;
      var y = 0.007 * (t + 190) * (t + 190) - 80;
      return [x,y,0];
  }

  var C3_tangent = function(t) {
      var x = 1;
      var y = 0.014 * (t+190);
      return [x, y, 0];
  }

  var C4 = function(t) {
      var x = 20 * Math.sin(0.5 * t);
      var y = 20 * Math.cos(0.5 * t);;
      var z = t;
      return [x, y, z];
  }

  var C4_tangent = function (t) {
      var x = 10 * Math.cos(0.5 * t);
      var y = -10 * Math.sin(0.5 * t);
      var z = 1;
      return [x, y, z];
  }

  var C5 = function(t){
      return [0,20 * Math.cos(50),-t];
  }

  var C6 = function(t) {
      return [-10*t, ((4.7 - 20 * Math.cos(50))/30) * t + 20 * Math.cos(50), 0];
  }

  var C6_tangent = function(t) {
      return [-10, -((4.7 - 20 * Math.cos(50))/30), 0];
  }

  var curve3 = function(t) {
    if (t <= 20){
        var tt = 10*t - 100;
        return C4(tt);
    }else if(t <= 30){
        var tt = 10*(t-20) - 100;
        return C5(tt);
    }else if(t <= 40){
        var tt = (t-30)*3;
        return C6(tt);
    }else{
        var tt = t-40;
        return curve2(tt);
    }
  }

  var curve3_tangent = function(t) {
    if (t <= 20){
        var tt = 10*t - 100;
        return C4_tangent(tt);
    }else if(t <= 30){
        //var tt = 10*(t-20) - 100;
        return [0,0,-1];
    }else if(t <= 40){
        var tt = (t-30)*3;
        return C6_tangent(tt);
    }else{
        var tt = t-40;
        return curve_tangent2(tt);
    }
  }
  

  var curve = function(t) {
             if (t < 1.5*Math.PI){
                  return Cplatform((110*t/Math.PI) - 190);
      }else if (t < 6*Math.PI){
          return C0(t);
      } else if (t < 7*Math.PI){
          return C1(t);
      }else{
          return C2(t-5.5*Math.PI);
      }
  }

  var curve2 = function(t) {
             if (t < Math.PI){
                  return C3((110*t/15 * Math.PI) - 300);
            }else if (t < 1.5 * Math.PI){
          return Cplatform((330*t/Math.PI) - 520);
      }else if (t < 6*Math.PI){
          return C0(t);
      } else if (t < 7*Math.PI){
          return C1(t);
      }else if (t < 7.5 * Math.PI){
          return C2(t-5.5*Math.PI);
      }
  }

  var curve_tangent = function(t) {
      if (t < 1.5*Math.PI){
          return Cplatform_tangent((110*t/Math.PI) - 190);
      }else if (t < 6* Math.PI){
          return C0_tangent(t);
      } else if (t < 7*Math.PI){
          return C1_tangent(t);
      } else{
          return C2_tangent(t-5.5*Math.PI);
      }
  }

  var curve_tangent2 = function(t) {
      if (t < Math.PI){
          return C3_tangent((110*t/15 * Math.PI) - 300);
      }else if (t < 1.5 * Math.PI){
          return Cplatform_tangent((330*t/Math.PI) - 520);
      }else if (t < 6*Math.PI){
          return C0_tangent(t);
      } else if (t < 7*Math.PI){
          return C1_tangent(t);
      }else if (t < 7.5 * Math.PI){
          return C2_tangent(t-5.5*Math.PI);
      }
  }

    // -----------------------------------------// -----------------------------------------// -----------------------------------------// ---------------------
    var CameraCurve = function(angle) {
        var distance = 180.0;
        var eye = vec3.create();
        eye[0] = distance*Math.sin(viewAngle);
        eye[1] = 0;
        eye[2] = distance*Math.cos(viewAngle);  
        return [eye[0],eye[1],eye[2]];
    }

    function drawTrajectory(t_begin,t_end,intervals,C,Tx,color) {
	    context.strokeStyle=color;
	    context.beginPath();
        moveToTx(C(t_begin),Tx);
        for(var i=1;i<=intervals;i++){
            var t=((intervals-i)/intervals)*t_begin+(i/intervals)*t_end;
            lineToTx(C(t),Tx);
        }
        context.stroke();
	}

    // create two lookAt transforms; one for the camera
    // and one for the "external observer"

    // Create Camera (lookAt) transform
    var eyeCamera = CameraCurve(viewAngle);
    var targetCamera = vec3.fromValues(0,0,0); // Aim at the origin of the world coords
    var upCamera = vec3.fromValues(0,100,0); // Y-axis of world coords to be vertical
	var TlookAtCamera = mat4.create();
    mat4.lookAt(TlookAtCamera, eyeCamera, targetCamera, upCamera);

    // Create Camera (lookAt) transform
    var eyeObserver = vec3.fromValues(150,300,500);
    var targetObserver = vec3.fromValues(100,50,0); // Observer still looks at origin
    var upObserver = vec3.fromValues(0,1,0); // Y-axis of world coords to be vertical
	var TlookAtObserver = mat4.create();
    mat4.lookAt(TlookAtObserver, eyeObserver, targetObserver, upObserver);

    // Create ViewPort transform (assumed the same for both canvas instances)
    var Tviewport = mat4.create();
	mat4.fromTranslation(Tviewport,[400,300,0]);  // Move the center of the
                                                  // "lookAt" transform (where
                                                  // the camera points) to the
                                                  // canvas coordinates (200,300)
	mat4.scale(Tviewport,Tviewport,[100,-100,1]); // Flip the Y-axis,
                                                  // scale everything by 100x
    // make sure you understand these    

    context = cameraContext;

    // Create Camera projection transform
    // (orthographic for now)
    var TprojectionCamera = mat4.create();
    mat4.ortho(TprojectionCamera,-100,100,-100,100,-1,1);
    //mat4.perspective(TprojectionCamera,Math.PI/4,1,-1,1); // Use for perspective teaser!

    // Create Observer projection transform
    // (orthographic for now)
    var TprojectionObserver = mat4.create();
    mat4.ortho(TprojectionObserver,-400,400,-300,300,-1,1);

    // Create transform t_VP_PROJ_CAM that incorporates
    // Viewport, projection and camera transforms
    var tVP_PROJ_VIEW_Camera = mat4.create();
    mat4.multiply(tVP_PROJ_VIEW_Camera,Tviewport,TprojectionCamera);
    mat4.multiply(tVP_PROJ_VIEW_Camera,tVP_PROJ_VIEW_Camera,TlookAtCamera);
    var tVP_PROJ_VIEW_Observer = mat4.create();
    mat4.multiply(tVP_PROJ_VIEW_Observer,Tviewport,TprojectionObserver);
    mat4.multiply(tVP_PROJ_VIEW_Observer,tVP_PROJ_VIEW_Observer,TlookAtObserver);

	// Create model(ing) transform
    // (from moving object to world)
    var Tmodel = mat4.create();
	mat4.fromTranslation(Tmodel,curve(tParam));
    var tangent = curve_tangent(tParam);
    var angle = Math.atan2(tangent[1],tangent[0]);
    mat4.rotateZ(Tmodel,Tmodel,angle);
    
    var Tmodel2 = mat4.create();
	mat4.fromTranslation(Tmodel2,curve2(tParam2));
    var tangent2 = curve_tangent2(tParam2);
    var angle2 = Math.atan2(tangent2[1],tangent2[0]);
    mat4.rotateZ(Tmodel2,Tmodel2,angle2);
    
    var Tmodel3 = mat4.create();
	mat4.fromTranslation(Tmodel3,curve3(tParam3));
    var tangent3 = curve3_tangent(tParam3);
    var angle3 = Math.atan2(tangent3[1],tangent3[0]);
	mat4.rotateZ(Tmodel3,Tmodel3,angle3);

    // Create transform t_VP_PROJ_VIEW_MOD that incorporates
    // Viewport, projection, camera, and modeling transform
    var tVP_PROJ_VIEW_MOD_Camera = mat4.create();
    mat4.multiply(tVP_PROJ_VIEW_MOD_Camera, tVP_PROJ_VIEW_Camera, Tmodel);
    
    var tVP_PROJ_VIEW_MOD_Camera2 = mat4.create();
    mat4.multiply(tVP_PROJ_VIEW_MOD_Camera2, tVP_PROJ_VIEW_Camera, Tmodel2);
    
    var tVP_PROJ_VIEW_MOD_Camera3 = mat4.create();
	mat4.multiply(tVP_PROJ_VIEW_MOD_Camera3, tVP_PROJ_VIEW_Camera, Tmodel3);

    var tVP_PROJ_VIEW_MOD1_Observer = mat4.create();
    mat4.multiply(tVP_PROJ_VIEW_MOD1_Observer, tVP_PROJ_VIEW_Observer, Tmodel);

    var tVP_PROJ_VIEW_MOD1_Observer2 = mat4.create();
    mat4.multiply(tVP_PROJ_VIEW_MOD1_Observer2, tVP_PROJ_VIEW_Observer, Tmodel2);

    var tVP_PROJ_VIEW_MOD1_Observer3 = mat4.create();
    mat4.multiply(tVP_PROJ_VIEW_MOD1_Observer3, tVP_PROJ_VIEW_Observer, Tmodel3);
    
    var tVP_PROJ_VIEW_MOD2_Observer = mat4.create();
    mat4.translate(tVP_PROJ_VIEW_MOD2_Observer, tVP_PROJ_VIEW_Observer, eyeCamera);

	var TlookFromCamera = mat4.create();
    mat4.invert(TlookFromCamera,TlookAtCamera);
    mat4.multiply(tVP_PROJ_VIEW_MOD2_Observer, tVP_PROJ_VIEW_MOD2_Observer, TlookFromCamera);

    // Draw the following in the Camera window
    context = cameraContext;

    drawTrajectory(1.5*Math.PI, 6*Math.PI,1000,C0,tVP_PROJ_VIEW_Camera,"orange");
	drawTrajectory(6*Math.PI,7*Math.PI,1000,C1,tVP_PROJ_VIEW_Camera,"red");
    drawTrajectory(-190,-25,1000,Cplatform,tVP_PROJ_VIEW_Camera,"blue");
    drawTrajectory(1.5 * Math.PI,2 * Math.PI,1000,C2,tVP_PROJ_VIEW_Camera,"purple" );
    drawTrajectory(-100,100,1000,C4,tVP_PROJ_VIEW_Camera,"DeepPink");
    drawTrajectory(-103,0,1000,C5,tVP_PROJ_VIEW_Camera,"DeepPink");
    drawTrajectory(0,30,1000,C6,tVP_PROJ_VIEW_Camera,"DeepPink");
    drawTrajectory(-300,-190,1000,C3,tVP_PROJ_VIEW_Camera,"Black");
    drawObject1("green", tVP_PROJ_VIEW_MOD_Camera);
    drawObject1("Gold", tVP_PROJ_VIEW_MOD_Camera2);
    drawObject1("Navy", tVP_PROJ_VIEW_MOD_Camera3);
    // Draw the following in the Observer window
    context = observerContext;
	draw3DAxes("grey",tVP_PROJ_VIEW_Observer,100.0);  
    drawObject1("green", tVP_PROJ_VIEW_MOD1_Observer);   
    drawObject1("Gold", tVP_PROJ_VIEW_MOD1_Observer2);
    drawObject1("Navy", tVP_PROJ_VIEW_MOD1_Observer3);
    drawTrajectory(1.5*Math.PI, 6*Math.PI,1000,C0,tVP_PROJ_VIEW_Observer,"orange");
	drawTrajectory(6*Math.PI,7*Math.PI,1000,C1,tVP_PROJ_VIEW_Observer,"red");
    drawTrajectory(-190,-25,1000,Cplatform,tVP_PROJ_VIEW_Observer,"blue");
    drawTrajectory(1.5 * Math.PI,2 * Math.PI,1000,C2,tVP_PROJ_VIEW_Observer,"purple" );
    drawTrajectory(-100,100,1000,C4,tVP_PROJ_VIEW_Observer,"DeepPink");
    drawTrajectory(-300,-190,1000,C3,tVP_PROJ_VIEW_Observer,"Black");
    drawTrajectory(-100,0,1000,C5,tVP_PROJ_VIEW_Observer,"DeepPink");
    drawTrajectory(0,30,1000,C6,tVP_PROJ_VIEW_Observer,"DeepPink");
    
    //draw the camera and its coordinates system on observer
    drawCamera("black",tVP_PROJ_VIEW_MOD2_Observer,10.0); 
	drawUVWAxes("black",tVP_PROJ_VIEW_MOD2_Observer,100.0);  
    }
    
    slider1.addEventListener("input",draw);
    slider11.addEventListener("input",draw);
    slider111.addEventListener("input",draw);
    slider2.addEventListener("input",draw);
    draw();
}
window.onload = setup;
