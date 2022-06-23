status=""

function setup(){
    canvas=createCanvas(640,420)
    canvas.center()
    objectDetector=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="Status: detecting objects "
}

function preload(){
    img=loadImage("toy_fan.jpg")
}

function modelLoaded(){
    console.log("modelLoaded")
status=true
objectDetector.detect(img,gotResult)
}

function draw(){
    if(status !="")

    for(i=0;i<object.length;i++){
        document.getElementById("status").innerHTML="Status:objects detected "
        fill("red")
        precent=floor(object[i].confidence*100)
        text(object[i].label+""+precent+"%",object[i].x,object[i].y)
        noFill()
        stroke("red")
        rect(object[i].x,object[i].y,object[i].width,object[i].height)
}
   


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