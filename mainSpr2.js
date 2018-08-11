//Next, declare variables that use methods of alert, prompt and confirm
let goodName = alert('Tell us about You and the Ukelele!...Your name, uke stuff and # of yrs you\'ve been playing');
let FName = prompt('Enter your FIRST NAME?');
let LName= prompt('Enter your LAST NAME?');
//a joke
let myMovie = prompt('What\'s your FAVORITE MOVIE?');
let myJoke = alert('WAIT WHAT?--Awake Now?--Just Kidding! Now, tell us about the Uke and You');
// return to recieving user input. 
let myNameUke = prompt('What TYPE of Uke do you play?');
let myBrandUke = prompt('What BRAND of Uke do you play?');
let myUkeLevel = prompt('Describe your player level as (B)eginner, (I)ntermediate, (A)dvanced');
let myYrsUke = confirm('Played > 5 years?');

let output = document.getElementById(' name ');
output.innerHTML = (FName +' '+ LName);
let output2 = document.getElementById('uke');
output2.innerHTML = myNameUke;
let output3 = document.getElementById('level');
output3.innerHTML = myUkeLevel;
let output4 = document.getElementById('yrs');
output4.innerHTML = myYrsUke;

console.log(FName +' '+ LName);
console.log(myNameUke);
console.log(myBrandUke);
console.log(myUkeLevel);
console.log(myMovie);
console.log(myYrsUke);

if (myYrsUke === true) {  //if the years playing uke is greater than 5
    let yrsTrue = document.getElementById('yrsTrue');
    yrsTrue.innerHTML = 'Great, ' + FName + ', we see you\'ve been playing the Uke for some time now!';
}
else {
    let yrsFalse = document.getElementById('yrsFalse');
    yrsFalse.innerHTML = 'No worries, ' + FName + ', you\'ll enjoy our program to further your playing the Uke!';

}
