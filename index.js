 var randomNumber1 = Math.random()*6+1;
 randomNumber1=Math.floor(randomNumber1);

var randomImage="dice"+randomNumber1+".png"

var imageSource="images/"+randomImage

 var image1=document.querySelectorAll("img")[0].setAttribute("src",imageSource)

 var randomNumber2=Math.floor(Math.random()*6+1)
 var randomImage2="dice"+randomNumber2+".png"
 var imageSource2="images/"+randomImage2

 var image2=document.querySelectorAll("img")[1].setAttribute("src",imageSource2)

 if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!"
 } else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Its a tie"
 } else{
    document.querySelector("h1").innerHTML="Player 2 wins!"
 }
 