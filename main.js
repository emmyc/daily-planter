var sentimood = new Sentimood();
// var analysis = sentimood.analyze('Node is the best but i am sad');
// var positivity = sentimood.positivity('Python is excellent');
// var negativity = sentimood.negativity('PHP is bad');
// console.log(analysis);

// var entry = document.getElementById('entry-text').value;
// var an2 = sentimood.analyze(entry);
// console.log(an2)



var plants = []; //Define array plant gif frames

//loop through all pictures
for (i = 1; i <= 10; i++) {
    plants.push("assets/" + i + ".png"); //Add to array
}


var score = 0;
var currentFrame = 1;
var frame = plants[currentFrame];


$(document).ready(function(){

    $("#entry-text").keyup(function(){
        var tempscore = score;

        var temp = document.getElementById('entry-text').value;
        score = sentimood.analyze(temp).score;

        if(score > tempscore && currentFrame < 10){
            console.log("Frame:" + currentFrame);
             currentFrame = currentFrame + 1;
             console.log("Next Frame:" + currentFrame);

             frame = plants[currentFrame];
            
            console.log(score);
            console.log(frame);
            console.log("score is greater: " + score + "temp score: " + tempscore + " frame: " + frame);

            $("#plant-image").attr('src', frame);
        }
        else if (score < tempscore && currentFrame > 1){
            //decrease plant index down to 1
            currentFrame = currentFrame - 1;
            frame = plants[currentFrame];
            console.log("score: " + score + " frame: " + frame);
            $("#plant-image").attr('src', frame);
        }
        
    });
    
});


//$("image id or class or name").attr('src','image's src');


