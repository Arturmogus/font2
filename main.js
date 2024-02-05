nose_x = 0;
nose_y = 0;
rwrist_x = 0;
lwrist_x = 0;
difference = 0;



function setup() {
video = createCapture(VIDEO);
video.size(550, 500)
video.position(100, 150)


canvas = createCanvas(400, 400)
canvas.position(750, 200)

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("posenet works")
}

function gotPoses(results)
{
if (results.length > 0)
{
    console.log(results)

    nose_x = results[0].pose.nose.x
    nose_y = results[0].pose.nose.y
    rwrist_x = results[0].pose.rightWrist.x
    lwrist_x = results[0].pose.leftWrist.x
    difference = floor(lwrist_x - rwrist_x)
    console.log("nose x: " + nose_x);
    console.log("nose y: " + nose_y);
    console.log("right wrist x: " + rwrist_x);
    console.log("left wrist x: " + lwrist_x);
}
}

function draw() {
    text("foot", nose_x, nose_y, difference)
}