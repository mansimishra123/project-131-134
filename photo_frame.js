status=""

function setup(){
    canvas=createCanvas(640,420)
    canvas.center()
    objectDetector=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="Status: detecting objects "
}

function preload(){
    img=loadImage("photo_frame.jpg")
}

function modelLoaded(){
    console.log("modelLoaded")
status=true
objectDetector.detect(img,gotResult)
}

function draw(){
    image(img,0,0,640,420)
    fill("white")
    text("PHOTO_FRAME",45,75)
    noFill()
    stroke("red")
    rect(30,60,450,350)

}

function gotResult(error,result){
    if(error){
        console.log(error)
    }
    console.log(result)

}


function back(){
    window.location="index.html"
}