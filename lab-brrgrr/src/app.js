// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;
var sum = 20;
//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: false,
  Cheese: false,
  Tomatoes: false,
  Onions: false,
  Lettuce: false
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}
document.getElementsByClassName("price-details")[0].innerHTML="INR"+" "+sum;
function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  
  if (state.Patty) {
    patty.style.display = "inherit";
    sum = sum+ ingredients.Patty;
    
  } else {
    patty.style.display = "none";
    sum = sum- ingredients.Patty;
  }
  document.getElementsByClassName("price-details")[0].innerHTML="INR"+" "+sum;
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  //you can also use getElementById
  if (state.Cheese) {
    cheese.style.display = "inherit";
    sum = sum+ ingredients.Cheese;
  } else {
    cheese.style.display = "none";
    sum = sum - ingredients.Cheese;
  }
  document.getElementsByClassName("price-details")[0].innerHTML="INR"+" "+sum;
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes = document.querySelector("#tomato");
  //you can also use getElementById
  if (state.Tomatoes) {
    tomatoes.style.display = "inherit";
    sum = sum + ingredients.Tomatoes;  
  } else {
    tomatoes.style.display = "none";
    sum = sum - ingredients.Tomatoes;
  }
  document.getElementsByClassName("price-details")[0].innerHTML="INR"+" "+sum;
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions = document.querySelector("#onion");
  //you can also use getElementById
  if (state.Onions) {
    onions.style.display = "inherit";
    sum = sum + ingredients.Onions;
    
  } else {
    onions.style.display = "none";
    sum = sum - ingredients.Onions;
  }
  document.getElementsByClassName("price-details")[0].innerHTML="INR"+" "+sum;
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");
  //you can also use getElementById

  if (state.Lettuce) {
    lettuce.style.display = "inherit";
    sum = sum + ingredients.Lettuce;
   
  } else {
    lettuce.style.display = "none";
    sum = sum - ingredients.Lettuce;
  }
  console.log(sum);
  document.getElementsByClassName("price-details")[0].innerHTML="INR"+" "+sum;
}


document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderPatty(); 
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderCheese();
  
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderTomatoes();
  
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderOnions();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderLettuce();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
var contain = document.getElementsByClassName("button-container")[0];
var btns = contain.getElementsByClassName("button");
for (var i = 0; i < btns.length; i++) {
  console.log(btns[i]);
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  console.log(current[0]);
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  console.log(this);
  });
}
//Challenge 2 - Render only the items selected in the ingredients board based on the state
document.getElementById("patty").style.display ="none";
document.getElementById("cheese").style.display ="none";
document.getElementById("tomato").style.display ="none";
document.getElementById("onion").style.display ="none";
document.getElementById("lettuce").style.display ="none";
//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
