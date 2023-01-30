const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (PLAYERS) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for(var i=0;i<PLAYERS.length;i++){
         detailedPlayers[i]={
            name:PLAYERS[i],
            strength: getRandomStrength(),
            img:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/super-"+(i+1)+".png",
            Type:"hero"
            
        };
    }
    
    
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    var randStrength = Math.floor(Math.random()*100)+1
    return randStrength;
}

const buildPlayers = (players, type) => {
    var fragment = [];

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    if(type =="hero"){
        for(var j=0;j<players.length/2;j++){
            fragment[j]="<div class=\"player\">\n"+
        "<img src="+players[j].img+" alt=\"\">\n"+

        "<div class=\"name\">"+players[j].name+"</div>\n"+
        "<div class=\"strength\">"+players[j].strength+"</div>\n"+
        
        "</div>";
        //console.log(j);
         
        }
        
    }
    
   else{
    for(var k=players.length/2;k<players.length;k++){
        fragment[k]="<div class=\"player\">\n"+

    "<img src="+players[k].img+" alt=\"\">\n"+

    "<div class=\"name\">"+players[k].name+"</div>\n"+
    "<div class=\"strength\">"+players[k].strength+"</div>\n"+

    "</div>";
    //console.log(k);
   
    }
}
console.log();

return fragment;

}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}


