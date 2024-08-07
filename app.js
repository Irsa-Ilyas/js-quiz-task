var name=prompt("enter your name");
alert(name + " start your quiz " );
var sum=0;
var q1=prompt(" Q1: What does HTML stand for?\n Home tool language \n Home link language \n hyper text markup language")
var correctans="hyper text markup language"
if(q1===correctans){
    sum+=10;
    alert("Correct answer! you got "  + sum + " marks")
} else{
    alert("wrong answer")
}
var q2=prompt(" Q2: Choose the correct Html element for largest heading?\n <heading> \n <h6> \n <h1>")
var correctans="<h1>"
if(q2===correctans){
    sum+=10;
    alert("Correct answer! you got " + sum + " marks")
} else{
    alert("wrong answer")
}
var q3=prompt(" Q3: What is the correct HTML element for inserting a line break?\n <Ib>  \n <br> \n <break>")
var correctans="<br>"
if(q3===correctans){
    sum+=10;
    alert("Correct answer! you got " + sum  + " marks")
} else{
    alert("wrong answer")
};
var q4=prompt(" Q4: Choose the correct HTML element to define important text?\n <strong>  \n <b> \n <i>")
var correctans="<strong>"
if(q4===correctans){
    sum+=10;
    alert("Correcr answer! you got " + sum +" marks") 
} else{
    alert("wrong answer")
};
var q5=prompt(" Q5:  Choose the correct HTML element to define emphasized text?\n <italic>  \n <em> \n <i>")
// check marks
var correctans="<em>"
if(q5===correctans){
    sum+=10;
    alert("Correcr answer! you got " + sum +" marks")
} else{
    alert("wrong answer")
};
if (sum >= 25) {
    alert("Great job! You've successfully passed the quiz!");
} else {
    alert("You achieved " + sum + " marks. Don't be discouraged. Learn from this attempt and come back stronger next time!");
}














