//alert("hi");
var batting = document.getElementsByClassName("bat")[0].addEventListener("click", funcind)
var ball = document.querySelector(".ind").getElementsByClassName("ball")
var ballpak = document.querySelector(".pak").getElementsByClassName("ball")
var score = document.querySelector(".ind").getElementsByClassName("score")[0]
var scorepak = document.querySelector(".pak").getElementsByClassName("score")[0]
var clicks=0;
var tot =0;
var scor;
var totpak =0;
var scorpak=0;
var clickpak=0;
var clicked = false;
var ele=document.getElementsByClassName("restart")[0].addEventListener("click", func)

function func(){
    clicked = true;
    resetfunc();
    clicks=0;
    tot=0;
    totpak=0;
    clickpak=0;
    score.innerHTML ="0/0";
    scorepak.innerHTML="0/0";
    
}
function resetfunc()
{
    const element = document.getElementsByClassName("ball");
    for(let i=0;i<element.length;i++){
        element[i].innerHTML="";
    }
  
}


function funcind(){
    
    if(clicks<6){
        scor = Math.round(Math.random()*6) 
        ball[clicks].innerHTML= scor;
        tot = tot+scor;
        score.innerHTML = tot + "/36";
    }

       else{
        funcpak();
        
        
       }
       clicks = clicks+1
       console.log(clicks)
       
 
}

function funcpak(){
    
    if(clickpak<6){
        scorpak = Math.round(Math.random()*6) 
        ballpak[clickpak].innerHTML= scorpak;
        totpak = totpak+scorpak;
        scorepak.innerHTML = totpak + "/36";
    }
    else{
        result()
    }
       
       clickpak = clickpak+1
       console.log(clicks)
       
 
}

function result(){
if(tot>totpak){
    alert("Ind wins");
}
if(tot<totpak){
    alert("Pak wins");
}
if(tot==totpak){
    alert("It is a super over again")
}
}