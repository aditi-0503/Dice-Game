var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomnumberimage="dice"+randomnumber1+".png";
var randomimagesource="images/"+randomnumberimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimagesource2="images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);

if(randomnumber1>randomnumber2){
    document.querySelectorAll("h1").innerHTML="Player 1 wins!";
}
else if(randomnumber2 >randomnumber1){
    document.querySelectorAll("h1").innerHTML="Player 2 wins!";
}
else{
document.querySelectorAll("h1").innerHTML="Draw";

}