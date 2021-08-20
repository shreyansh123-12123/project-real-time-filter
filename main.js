function preload(){

}
function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350,350);
    video.hide();
}
poseNet = ml5.poseNet(video,modelLoded);
poseNet.on('pose',gotPose);
function modelLoded(){
    console.log("mission successfull");
}
function gotPose(results){
    if (results.length > 0) {
      console.log(results) ;
      console.log("nose x= " + results[0].pose.nose.x);
      console.log("nose y= " + results[0].pose.nose.y);
    }
}
function draw(){

}
function take_snapshot(){
    save('filtered_image.png');
}