noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;


function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(200,120)

    canvas=createCanvas(530,500);
    canvas.position(900,120);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Posenetis Intialized!!");
}

function draw(){
    background('#808080');

    document.getElementById("square_side").innerHTML="Width and height of circle="+difference+"px"
    fill('#FFA500');
    stroke('#FFA500');
    circle(noseX,noseY,difference);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose x="+noseX+"Nose y="+noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);

        console.log("left wrist x="+leftWristX+",right wrist x="+rightWristX+",difference="+difference);
    }
}
