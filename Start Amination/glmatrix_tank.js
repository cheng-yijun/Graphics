    function Tank(context)
    {
        // set some initial states for my tank
        this.myPath = 0;
        this.cannon = 0.2;
        this.fire = 1;
        this.mypath_tank = 0;
        this.path_tank = 0; 
        this.WheelAngle = 0;
        this.context = context;
        this.boom_path = 10;
    }

    Tank.prototype.drawBase = function() {
        
        this.context.beginPath();
        this.context.fillStyle = 'DarkGreen';
        this.context.moveTo(50,250);
        this.context.lineTo(210,240);
        this.context.lineTo(190,285);
        this.context.lineTo(60,285);
        this.context.lineTo(50,250);//change to fill
        this.context.closePath();
        this.context.fill();
        this.context.stroke();
        
    }

    Tank.prototype.drawBase2 = function() {
       
        this.context.beginPath();
        this.context.fillStyle = 'Lime';
        this.context.moveTo(50,250);
        this.context.lineTo(60,240);
        this.context.lineTo(180,230);
        this.context.lineTo(210,240);
        this.context.closePath();
        this.context.fill();
        this.context.stroke();
       
    }

    Tank.prototype.drawBase3 = function() {
        
        this.context.beginPath();
        this.context.fillStyle = 'Chocolate';
        this.context.moveTo(96,237);
        this.context.lineTo(96,230);
        this.context.lineTo(150,225);
        this.context.lineTo(156,232);
        this.context.closePath();
        this.context.fill();
        this.context.stroke();
       
    }

    Tank.prototype.drawBattery = function(){
        
        this.context.beginPath();
        this.context.fillStyle = 'ForestGreen';
        this.context.moveTo(96,230);
        this.context.lineTo(60,210);
        this.context.lineTo(65,195);
        this.context.lineTo(150,195);
        this.context.lineTo(150,225);
        this.context.closePath();
        this.context.fill();
        this.context.stroke();
        
    }

    Tank.prototype.drawCannon = function(){
       
        this.context.beginPath();
        this.context.fillStyle = 'SaddleBrown';
        this.context.arc(0, 0, 10, 0, 1.8 * Math.PI);
        this.context.moveTo(10,0);
        this.context.lineTo(100,-8);
        this.context.lineTo(100,-18);
        this.context.lineTo(7,-8);
        this.context.closePath();
        this.context.fill();

       
    }

    Tank.prototype.drawWheel = function(){
       
        this.context.beginPath();
        this.context.arc(0, 0, 10, 0, 2 * Math.PI);
        this.context.stroke();
        
    }

    Tank.prototype.drawWheel2 = function(){
        
        this.context.beginPath();
        this.context.moveTo(-10,0);
        this.context.lineTo(10,0);
        this.context.lineTo(0,0);
        this.context.lineTo(0,-10);
        this.context.lineTo(0,10);
        this.context.lineTo(0,0);
        this.context.lineTo(-7,-7);
        this.context.lineTo(7,7);
        this.context.lineTo(0,0);
        this.context.lineTo(-7,7);
        this.context.lineTo(7,-7);
        this.context.stroke();
       
    }

    Tank.prototype.drawFire = function(color){
        
        this.context.beginPath();
        this.context.fillStyle = color;
        this.context.moveTo(0,0);
        this.context.lineTo(0,20);
        this.context.lineTo(20,30);
        this.context.lineTo(10,20);
        this.context.lineTo(30,27);
        this.context.lineTo(20,20);
        this.context.lineTo(40,20);
        this.context.lineTo(20,15);
        this.context.lineTo(60,10);
        this.context.lineTo(20,7);
        this.context.lineTo(40,2);
        this.context.lineTo(15,2);
        this.context.lineTo(25,-4);
        this.context.closePath();
        this.context.fill();
        this.context.stroke();
        
    }

    Tank.prototype.drawAirplane = function(){
        this.context.beginPath();
        this.context.fillStyle = 'LightBlue';
        this.context.moveTo(0,0);
        this.context.lineTo(100,0);
        this.context.lineTo(120,-20);
        this.context.lineTo(105,-20);
        this.context.lineTo(98,-13);
        this.context.lineTo(68,-13);
        this.context.lineTo(90,-30);
        this.context.lineTo(70,-29);
        this.context.lineTo(50,-13);
        this.context.lineTo(20,-13);
        this.context.lineTo(14,-13);
        this.context.lineTo(6,-8);
        this.context.lineTo(0,0);
        this.context.closePath();
        this.context.fill();
        this.context.stroke();
    }

    Tank.prototype.drawAirplane2 = function(){
        this.context.beginPath();
        this.context.fillStyle = 'LightBlue';
        this.context.moveTo(100,0);
        this.context.lineTo(0,0);
        this.context.lineTo(-20,-20);
        this.context.lineTo(-5,-20);
        this.context.lineTo(2,-13);
        this.context.lineTo(32,-13);
        this.context.lineTo(10,-30);
        this.context.lineTo(30,-29);
        this.context.lineTo(50,-13);
        this.context.lineTo(80,-13);
        this.context.lineTo(86,-13);
        this.context.lineTo(94,-8);
        this.context.lineTo(100,0);
        this.context.closePath();
        this.context.fill();
        this.context.stroke();
    }

    Tank.prototype.drawboom = function(){
        this.context.beginPath();
        this.context.fillStyle = 'Black';
        this.context.arc(0, 0, 10, 0, 2 * Math.PI);
        this.context.fill();
        this.context.stroke();
    }

    Tank.prototype.drawwarehouse = function(){
        this.context.beginPath();
        this.context.fillStyle = 'Black';
        this.context.rect(0,0,120,6);
        this.context.fill();

    }


    Tank.prototype.setCanvasTransform = function(Tx) {
        this.context.setTransform(Tx[0],Tx[1],Tx[3],Tx[4],Tx[6],Tx[7]);
    }

    Tank.prototype.draw = function() {

        var ware_to_canvas = mat3.create();
        mat3.fromTranslation(ware_to_canvas, [0,72]);
        this.setCanvasTransform(ware_to_canvas);
        this.drawwarehouse();

        var ammo_to_canvas = mat3.create();
        mat3.fromTranslation(ammo_to_canvas, [10,62]);
        this.setCanvasTransform(ammo_to_canvas);
        this.drawboom();
        

        var ammo2_to_canvas = mat3.create();
        mat3.fromTranslation(ammo2_to_canvas, [30,62]);
        this.setCanvasTransform(ammo2_to_canvas);
        this.drawboom();

        var ammo3_to_canvas = mat3.create();
        mat3.fromTranslation(ammo3_to_canvas, [50,62]);
        this.setCanvasTransform(ammo3_to_canvas);
        this.drawboom();

        var ammo4_to_canvas = mat3.create();
        mat3.fromTranslation(ammo4_to_canvas, [70,62]);
        this.setCanvasTransform(ammo4_to_canvas);
        this.drawboom();

        var ammo5_to_canvas = mat3.create();
        mat3.fromTranslation(ammo5_to_canvas, [90,62]);
        this.setCanvasTransform(ammo5_to_canvas);
        this.drawboom();

        var ammo6_to_canvas = mat3.create();
        mat3.fromTranslation(ammo6_to_canvas, [110,62]);
        this.setCanvasTransform(ammo6_to_canvas);
        this.drawboom();

        var air_path = this.myPath.deltaX(this.mypath_tank);
        var airplane_to_canvas = mat3.create();
        mat3.fromTranslation(airplane_to_canvas, [350-1.5*air_path,50]);
        if(Math.cos(this.mypath_tank) >= 0){
            this.setCanvasTransform(airplane_to_canvas);
            this.drawAirplane();
        }
        else{
            this.setCanvasTransform(airplane_to_canvas);
            this.drawAirplane2();
        }

        
        var boom_to_plane = mat3.create();
        if(Math.cos(this.path_tank) < 0){
            this.boom_path = 10;

        }
        mat3.fromTranslation(boom_to_plane, [60,this.boom_path]);
        var boom_to_canvas = mat3.create();
        mat3.multiply(boom_to_canvas, airplane_to_canvas, boom_to_plane);
        this.setCanvasTransform(boom_to_canvas);
        this.drawboom();
        
        
        var deltapath = this.myPath.deltaX(this.mypath_tank);
        var base_to_canvas = mat3.create();
        mat3.fromTranslation(base_to_canvas, [170+0.8*deltapath, 50]);
        this.setCanvasTransform(base_to_canvas);
        this.drawBase();
        this.drawBase2();
        this.drawBase3();
        this.drawBattery();

        var cannon_to_base = mat3.create();
        mat3.fromTranslation(cannon_to_base, [160, 208]);
        mat3.rotate(cannon_to_base,cannon_to_base,-this.cannon);
        var cannon_to_canvas = mat3.create();
        mat3.multiply(cannon_to_canvas, base_to_canvas, cannon_to_base);
        this.setCanvasTransform(cannon_to_canvas);
        this.drawCannon();

        var fire_to_cannon = mat3.create();
        mat3.fromTranslation(fire_to_cannon, [105,-26]);
        mat3.scale(fire_to_cannon,fire_to_cannon,[this.fire,this.fire]);
        var fire_to_canvas = mat3.create();
        mat3.multiply(fire_to_canvas,cannon_to_canvas,fire_to_cannon);
        this.setCanvasTransform(fire_to_canvas);
        this.drawFire('Orange');

        var fire2_to_cannon = mat3.create();
        mat3.fromTranslation(fire2_to_cannon, [105,-21.7]);
        mat3.scale(fire2_to_cannon,fire2_to_cannon,[0.6 * this.fire, 0.7 * this.fire]);
        var fire2_to_canvas = mat3.create();
        mat3.multiply(fire2_to_canvas,cannon_to_canvas,fire2_to_cannon);
        this.setCanvasTransform(fire2_to_canvas);
        this.drawFire('Red');

        var wheel1_to_base = mat3.create();
        mat3.fromTranslation(wheel1_to_base, [75,267]);
        mat3.scale(wheel1_to_base,wheel1_to_base,[1.5,1.5]);
        if (Math.cos(this.path_tank) >= 0) {
            mat3.rotate(wheel1_to_base,wheel1_to_base,this.WheelAngle);
        }else{
            mat3.rotate(wheel1_to_base,wheel1_to_base,-this.WheelAngle);
        }
        var wheel1_to_canvas = mat3.create();
        mat3.multiply(wheel1_to_canvas,base_to_canvas,wheel1_to_base);
        this.setCanvasTransform(wheel1_to_canvas);
        this.drawWheel();
        this.drawWheel2();

        var wheel2_to_base = mat3.create();
        mat3.fromTranslation(wheel2_to_base, [108,265]);
        mat3.scale(wheel2_to_base,wheel2_to_base,[1.6,1.6]);
        if (Math.cos(this.path_tank) >= 0) {
            mat3.rotate(wheel2_to_base,wheel2_to_base,this.WheelAngle);
        }else{
            mat3.rotate(wheel2_to_base,wheel2_to_base,-this.WheelAngle);
        }
        var wheel2_to_canvas = mat3.create();
        mat3.multiply(wheel2_to_canvas,base_to_canvas,wheel2_to_base);
        this.setCanvasTransform(wheel2_to_canvas);
        this.drawWheel();
        this.drawWheel2();
        
        var wheel3_to_base = mat3.create();
        mat3.fromTranslation(wheel3_to_base, [143,264]);
        mat3.scale(wheel3_to_base,wheel3_to_base,[1.7,1.7]);
        if (Math.cos(this.path_tank) >= 0) {
            mat3.rotate(wheel3_to_base,wheel3_to_base,this.WheelAngle);
        }else{
            mat3.rotate(wheel3_to_base,wheel3_to_base,-this.WheelAngle);
        }
        var wheel3_to_canvas = mat3.create();
        mat3.multiply(wheel3_to_canvas,base_to_canvas,wheel3_to_base);
        this.setCanvasTransform(wheel3_to_canvas);
        this.drawWheel();
        this.drawWheel2();

        var wheel4_to_base = mat3.create();
        mat3.fromTranslation(wheel4_to_base, [178,262]);
        mat3.scale(wheel4_to_base,wheel4_to_base,[1.8,1.8]);
        if (Math.cos(this.path_tank) >= 0) {
            mat3.rotate(wheel4_to_base,wheel4_to_base,this.WheelAngle);
        }else{
            mat3.rotate(wheel4_to_base,wheel4_to_base,-this.WheelAngle);
        }
        var wheel4_to_canvas = mat3.create();
        mat3.multiply(wheel4_to_canvas,base_to_canvas,wheel4_to_base);
        this.setCanvasTransform(wheel4_to_canvas);
        this.drawWheel();
        this.drawWheel2();

       
    }

    Tank.prototype.update = function() {
        this.WheelAngle  += 0.1;
        this.path_tank += 0.01;
        this.mypath_tank += 0.01;
        this.boom_path += 4;
    }