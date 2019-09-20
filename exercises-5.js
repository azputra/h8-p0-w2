var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(`${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`)
//JavaScript is awesome and I love it!

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13]; // do your own!
var thirdWord = word[15] + word[16]; // do your own!
var fourthWord = word[18] + word[19]; // do your own!
var fifthWord = word[21] + word[22] + word[23] + word[24]; // do your own!

console.log('\nFirst Word: ' + exampleFirstWord);
// First Word: wow
console.log('Second Word: ' + secondWord);
// Second Word: JavaScript
console.log('Third Word: ' + thirdWord);
// Third Word: is
console.log('Fourth Word: ' + fourthWord);
// Fourth Word: so
console.log('Fifth Word: ' + fifthWord);
// Fifth Word: cool

var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4, 14); // do your own!
var thirdWord3 = word3.substring(15, 17); // do your own!
var fourthWord3 = word3.substring(18, 20); // do your own!
var fifthWord3 = word3.substring(21, 26); // do your own!

console.log('\nFirst Word: ' + exampleFirstWord);
// First Word: wow
console.log('Second Word: ' + secondWord3);
// Second Word: JavaScript
console.log('Third Word: ' + thirdWord3);
// Third Word: is
console.log('Fourth Word: ' + fourthWord3);
// Fourth Word: so
console.log('Fifth Word: ' + fifthWord3);
// Fifth Word: cool

var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word4.substring(0, 3);
var secondWord4 = word4.substring(4, 14); // do your own!
var thirdWord4 = word4.substring(15, 17); // do your own!
var fourthWord4 = word4.substring(18, 20); // do your own!
var fifthWord4 = word4.substring(21, 26); // do your own!

var firstWordLength = exampleFirstWord4.length;
var secondWordLength = secondWord4.length;
var thirdWordLength = thirdWord4.length;
var fourthWordLength = fourthWord4.length;
var fifthWordLength = fifthWord4.length;
// create new variables around here

console.log('\nFirst Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
// First Word: wow, with length: 3
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength);
// Second Word: JavaScript, with length: 10
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordLength);
// Third Word: is, with length: 2
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength);
// Fourth Word: so, with length: 2
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLength);
// Fifth Word: cool, with length: 4