const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg( )
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
 if(backgroundImg){
     background(backgroundImg)
 }
   
    Engine.update(engine);

}

async function getBackgroundImg(){
        var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
        var response_json= await response.json()
        var dt= response_json.datetime;
        var hour= dt.slice(11,13)
        console.log(response_json)
        console.log(dt)
        console.log(hour)
        if(hour>06 && hour<08){
            backgroundImg=loadImage("sunrise1.png");
        }
        else if(hour>08 && hour<10){
            backgroundImg=loadImage("sunrise2.png");
        }
        else if(hour>10 && hour<12){
            backgroundImg=loadImage("sunrise3.png");
        }
        else if(hour>12 && hour<13){
            backgroundImg=loadImage("sunrise4.png");
        }
        else if(hour>13 && hour<14){
            backgroundImg=loadImage("sunrise5.png");
        }
        else if(hour>14 && hour<16){
            backgroundImg=loadImage("sunrise6.png");
        }
        else if(hour>16 && hour<17){
            backgroundImg=loadImage("sunset7.png");
        }
        else if(hour>17 && hour<18){
            backgroundImg=loadImage("sunset8.png");
        }
        else if(hour>18 && hour<19){
            backgroundImg=loadImage("sunset9.png");
        }
        else if(hour>19 && hour<20){
            backgroundImg=loadImage("sunset10.png");
        }
        else if(hour>20 && hour<22){
            backgroundImg=loadImage("sunset11.png");
        }
        else{
            backgroundImg=loadImage("sunset12.png");
        }
    }