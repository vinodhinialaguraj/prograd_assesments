//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge,currentTeam,trophiesWon){
  var managerDetails=[]
  managerDetails.push(managerName);
  managerDetails.push(managerAge);
  managerDetails.push(currentTeam);
  managerDetails.push(trophiesWon);
  return managerDetails;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
 
 let formationMembers={
  defender: formation[0],
  midfield: formation[1],
  forward: formation[2]
 };
 if(formation.length==0){
  formationMembers=null;
   }
 return formationMembers;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  arrayOfPlayersDebuted=[];
 //var player = new players()
 for (var i=0;i<players.length;i++){
      if(players[i].debut==year){
        arrayOfPlayersDebuted.push(players[i]);
      }
 }
 return arrayOfPlayersDebuted;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  arrayOfPlayersPosition=[];
 //var player = new players()
 for (var i=0;i<players.length;i++){
      if(players[i].position==position){
        arrayOfPlayersPosition.push(players[i]);
      }
 }
 return arrayOfPlayersPosition;
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(award){
  arrayOfPlayersAward=[];
  var j=0;
 //var player = new players()
 for (var i=0;i<players.length;i++){
  for(var j=0;j<players[i].awards.length;j++){
    if(players[i].awards[j].name==award){
      arrayOfPlayersAward.push(players[i]);
      //j=j+1
    }
  }
      
 }
 return arrayOfPlayersAward;
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(award,times){
  arrayOfPlayersAwardxTimes=[];
 //var count=0;
 //var player = new players()
 for (var i=0;i<players.length;i++){
  var count=0;
  for(var j=0;j<players[i].awards.length;j++){
    if(players[i].awards[j].name==award){
      count=count+1;
      if(count == times){
        arrayOfPlayersAwardxTimes.push(players[i]);
      
      }
      
    }
  }
      
 }
 return arrayOfPlayersAwardxTimes;
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(award, country){
  arrayOfPlayersAwardxCountry=[];
  var j=0;
 //var player = new players()
 for (var i=0;i<players.length;i++){
  for(var j=0;j<players[i].awards.length;j++){
    if(players[i].awards[j].name==award&&players[i].country==country){
      arrayOfPlayersAwardxCountry.push(players[i]);
      //j=j+1
    }
  }
      
 }
 return arrayOfPlayersAwardxCountry;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noofaward,team,age){
  arrayOfPlayersNoOfAwardsxTeamxAge=[];
  //var j=0;
 //var player = new players()
 for (var i=0;i<players.length;i++){
 if(players[i].awards.length>=noofaward && players[i].team==team && players[i].age<=age){
arrayOfPlayersNoOfAwardsxTeamxAge.push(players[i]);
 }     
 }
 return arrayOfPlayersNoOfAwardsxTeamxAge;
}
//Progression 9 - Sort players in descending order of their age
function SortByAge(){
   function compare( a, b ) {
      return b.age-a.age;
    }
    players.sort( compare );
    return players;
  //return array;
}
function SortByLexo(){
  function compare( a, b ) {
    if(a.name<b.name){
      return -1;
    }
    if(a.name>b.name){
      return 1;
    }
    if(a.name==b.name){
      return 0;
    }
  }
  players.sort( compare );
 // console.log(players);
  return players;
//return array;
  }
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team){
  players=SortByAge();
 arrayOfPlayerTeamxSortByAward=[]
 for(var i=0;i<players.length;i++){
  if(players[i].team==team){
    arrayOfPlayerTeamxSortByAward.push(players[i]);
  }
}

    function compare( a, b ) {
      return b.awards.length-a.awards.length;
    }
    arrayOfPlayerTeamxSortByAward.sort( compare );
    return arrayOfPlayerTeamxSortByAward;
  }
 

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country){
  players=SortByAge();
  arrayOfPlayersSortAwardxCountry=[];
  var j=0;
 //var player = new players()
 for (var i=0;i<players.length;i++){
  for(var j=0;j<players[i].awards.length;j++){
    if(players[i].awards[j].name==awardName&&players[i].country==country&& players[i].awards.length>=noOfTimes){
      arrayOfPlayersSortAwardxCountry.push(players[i]);
      //j=j+1
    }
  }
      
 }
 return arrayOfPlayersSortAwardxCountry;
  }
 
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age){
  arrayOfSortedPlayers=[];
  players=SortByLexo();
  for(var i=0;i<players.length;i++){
    if(players[i].age>=age){
      arrayOfSortedPlayers.push(players[i]);
    }
  }
  function compare(a,b){
    return b.year-a.year;
  }
  for(var i=0;i<arrayOfSortedPlayers.length;i++){
    arrayOfSortedPlayers[i].awards.sort(compare)
  }
  console.log(arrayOfSortedPlayers);
 return arrayOfSortedPlayers;
}