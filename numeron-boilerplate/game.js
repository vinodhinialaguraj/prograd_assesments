// Iteration 2: Generate 2 random number and display it on the screen
var number_1 = document.getElementById("number1");
var number_2 = document.getElementById("number2");
var greater_than = document.getElementById("greater-than");
var equal_to = document.getElementById("equal-to");
var lesser_than = document.getElementById("lesser-than");
var sum=0;
//var s=0;
//var random_number_1 = Math.floor(Math.random()*10+1);
//var random_number_2 = Math.floor(Math.random()*10+1);
//number_1.innerHTML= random_number_1;
//number_2.innerHTML=random_number_1;
// Iteration 3: Make the options button functional
clicked = false;
var greaterSum=0;
var equalSum=0;
var lesserSum=0;
function scores(random_number_1,random_number_2){
    if(random_number_1>random_number_2){
        
        return"greater"
       // 
    }
    if(random_number_1==random_number_2){
       
         return "equal";
        // console.log(equalSum);
    
    }
    if(random_number_1<random_number_2){
        
     return"lesser"
     //console.log(lesserSum);
    }
   
}
function score(){
    sum=sum+1;
    return sum;
}
function val(){
    var random_number_1 = Math.floor(Math.random()*100+1);
    var random_number_2 = Math.floor(Math.random()*100+1);
    number_1.innerHTML= random_number_1;
    number_2.innerHTML=random_number_2;
   var results=scores(random_number_1,random_number_2);
   //console.log(results);
   return results
}

res = val();

greater_than.addEventListener("click",function(){
     var clickedVariable="greater";
   // res=val()
     
    // scores(random_number_1,random_number_2);
    if(clickedVariable==res){
        greaterSum=greaterSum+1;
        //console.log("greater")
        score();
    }
    else{
        console.log("Wrong button");
    }
    console.log(greaterSum);
    clicked=true;
   // console.log(clicked);
    if(clicked){
        res= val();
     }
 })
 equal_to.addEventListener("click",function(){
     var clickedVariable="equal"
    // res=val()
    if(clickedVariable==res){
        equalSum=equalSum+1;
        //console.log("equal");
        score();
    }
    else{
        console.log("Wrong button");
    }
    console.log(equalSum);
    clicked=true;
    if(clicked){
        res= val();
     }
 })
 lesser_than.addEventListener("click",function(){
     var clickedVariable="lesser";
    
     //res=val();
     if(clickedVariable== res){
        lesserSum=lesserSum+1
        //console.log("lesser");
        score();
     }
     else{
        console.log("Wrong button");
    }
     console.log(lesserSum); 
     clicked=true;
     //console.log(clicked);
     if(clicked){
        res= val();
     }
     //scores(random_number_1,random_number_2);
 })
/*for(let i=0;i<sum.length;i++){
    s=s+sum[i];
}
 console.log(sum);*/
 
// Iteration 4: Build a timer for the game
setTimeout(delayFunction, 30000);
function delayFunction() {
    //display the message on web after 3 seconds on calling delayFunction
    
    alert(score());
    location.replace("./gameover.html");
}
/*var scorebox = document.getElementById("score-board");
scorebox.innerHTML=score();
ply_agn_btn=document.getElementById("play-again-button").addEventListener("click", function(){
    location.replace("./index.html");
    
})*/