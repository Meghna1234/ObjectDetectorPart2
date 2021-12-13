volume = ""
status1 = ""

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
    video = createCapture();
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML =  "Status:Detecting Objects";
    object_name = document.getElementById("input").value;
    }

function modelLoaded(){
    console.log("Model is Loaded");
    status1 = true
}

function draw(){
    image(video,0,0,480,380)
}