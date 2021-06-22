noseX=0;
noseY=0;
function preload(){
    clownNose=loadImage("https://i.postimg.cc/Jhc8kTDZ/wow.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    //fill(255,0,0);
    //stroke(0,0,0);
    //circle(noseX,noseY,20);
    image(clownNose,noseX,noseY,25,25)
}

function modelLoaded(){
    console.log("Posenet Model is Loaded!!");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        console.log("nose X = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
    }
}

function take_snapshot(){
    save("Filter_Clown_Image.png");
}