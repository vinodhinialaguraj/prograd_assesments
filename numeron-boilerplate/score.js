// Iteration 5: Store the player score and display it on the game over screen
//import { score } from "./game.js";
var scorebox = document.getElementById("score-board");
scorebox.innerHTML=score();
ply_agn_btn=document.getElementById("play-again-button").addEventListener("click", function(){
    location.replace("./index.html");
    
})