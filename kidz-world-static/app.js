var btn = document.getElementsByClassName("button");
var price= document.getElementsByClassName("buy");
var prod = document.getElementsByTagName("h3");
var book = document.getElementsByClassName("books");
var game = document.getElementsByClassName("games");
var craft = document.getElementsByClassName("crafts");
var cartVal = document.getElementById("cart-value");
var prodID;
var bookLength = book.length;
var gameLength = game.length;
var cost;
var sum =0;
var count =0;
var arr=[];
for(var i=0;i<price.length;i++){
    costLen = price[i].getElementsByTagName("p")[0].innerHTML.length;
    cost = price[i].getElementsByTagName("p")[0].innerHTML.slice(1,costLen)
    console.log(price[i].getElementsByTagName("p")[0].innerHTML);
    cost =parseFloat(cost);
    //sum=sum+cost;
    //console.log(typeof (cost));   
 }
 //console.log("sum= "+sum);
 /*for(var i=0;i<prod.length-1;i++){
     console.log(prod[i].innerHTML);
 }*/
for(var i=0;i<btn.length;i++){
    btn[i].addEventListener("click", function(e){
         prodID = this.id;
         var array = prodID.split("");
        var n= array.length;
        var j=array[n-1];
        var typ = array.splice(0,n-1).toString().replace(/[^a-zA-Z0-9 ]/g, '');
        count=count+1
        cartVal.innerHTML=count;
        if(typ =="book"){
            costLen = price[j-1].getElementsByTagName("p")[0].innerHTML.length;
            cost = price[j-1].getElementsByTagName("p")[0].innerHTML.slice(1,costLen);
            cost =parseFloat(cost);
            sum=sum+cost;
            arr.push(prod[j-1].innerHTML)
            //console.log(price[j-1].getElementsByTagName("p")[0].innerHTML);
            //console.log(prod[j-1].innerHTML);
           // console.log("sum= "+sum);
        }
        if(typ =="game"){
            costLen = price[j-1+bookLength].getElementsByTagName("p")[0].innerHTML.length;
            cost = price[j-1+bookLength].getElementsByTagName("p")[0].innerHTML.slice(1,costLen);
            cost =parseFloat(cost);
            sum=sum+cost;
            arr.push(prod[j-1+bookLength].innerHTML);
            
            //console.log(price[j-1+bookLength].getElementsByTagName("p")[0].innerHTML);
           // console.log(prod[j-1+bookLength].innerHTML);
           // console.log("sum= "+sum);
        }
        if(typ =="craft"){
            costLen = price[j-1+bookLength+gameLength].getElementsByTagName("p")[0].innerHTML.length;
            cost = price[j-1+bookLength+gameLength].getElementsByTagName("p")[0].innerHTML.slice(1,costLen);
            cost =parseFloat(cost);
            sum=sum+cost;
            arr.push(prod[j-1+bookLength+gameLength].innerHTML);
            //console.log(price[j-1+gameLength+bookLength].getElementsByTagName("p")[0].innerHTML);
            //console.log(prod[j-1+bookLength+gameLength].innerHTML);
            //console.log("sum= "+sum);
        }
//console.log(typ);


    });

}

var prodCount =0;
var totProd =[];
var num=9444876090;
var names ="Alaguraj"
var txtMsg ="";
cartVal.addEventListener("click", function(){
    arr.sort();
    for(var i=0;i<arr.length;i++){
        if(arr[i]==arr[i+1]){
            prodCount= prodCount+1;
            arr.splice(i,1);
        }
        else{
            prodCount=1;
        }
        totProd.push(prodCount)
    
    }
    for(var i=0;i<arr.length;i++){
       // txtMsg=txtMsg+arr[i]+" "+totProd[i]+" ";
        console.log(arr[i]+" "+totProd[i]);
    }
   // txtMsg = txtMsg+" and the total cost is "+sum;
   // var win = window.open(`https://wa.me/${num}?text=Hello%20Mr%20${names}%20your%20purchases%20are%20${txtMsg}`, '_blank');
    console.log(txtMsg);
})
