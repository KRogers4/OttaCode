//Next, declare variables that use methods of alert, prompt and confirm
let goodName = alert('Tell us about You and the Ukelele!...Share your name\, uke\, and how many years playing');
let FName = prompt('Enter your First name?');
let LName= prompt('Enter your Last name?');
//a joke
let myMovie = prompt('What\'s Your Favorite Movie?');
let myJoke = alert('WAIT WHAT?--Awake Now?--Just Kidding! Now, tell us about you and the Uke');
// return to recieving user input. 
let myNameUke = prompt('What Type of Uke do you play?');
let myBrandUke = prompt('What Brand of Uke do you play?');
let myUkeLevel = prompt('Describe your player level as Beginner, Intermediate, Advanced');
let myYrsUke = confirm('Played > 5?');

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

    // yrsTrue.innerHTML = 'Great, ' + FName + ' ' + LName + ', we see you\'ve been playing the Uke for some time now!';
} else {
//console.log('Great ' + FName + ' you\'re fairly new playing the Uke!');
    let yrsFalse = document.getElementById('yrsFalse');
    yrsFalse.innerHTML = 'No worries, ' + FName + ', you\'ll enjoy our program to further your playing the Uke!';

    // yrsFalse.innerHTML = 'No worries, ' + FName + ' ' + LName + ', you\'ll enjoy our program to further your playing the Uke!';
}
