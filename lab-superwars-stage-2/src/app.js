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
    for(var i=0;i<PLAYERS.length+1;i++){
         detailedPlayers[i]={
            name:PLAYERS[i],
            strength: getRandomStrength(),
            img:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/super-"+(i+1)+".png",
            Type:"villain"
            
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
    let fragment = [];

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    if(type =="hero"){
        for(var j=0;j<10;j++){
            fragment[j]="<div class=\"borders\">\n"+
        "<div>\n"+
        "<img src="+players[j].img+">\n"+
        "</div>\n"+
        "<div>\n"+
        "<p>"+players[j].name+"</p>\n"+
        "<h2>"+players[j].strength+"</h2>\n"+
        "</div>\n"+
        "</div>";
        console.log(j);
         
        }
    }
   else{
    for(var k=10;k<20;k++){
        fragment[k]="<div class=\"borders\">\n"+
    "<div>\n"+
    "<img src="+players[k].img+">\n"+
    "</div>\n"+
    "<div>\n"+
    "<p>"+players[k].name+"</p>\n"+
    "<h2>"+players[k].strength+"</h2>\n"+
    "</div>\n"+
    "</div>";
    console.log(k);
   
    }
}
    
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


