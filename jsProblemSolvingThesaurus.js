/* This is just a compilation of techniques I've discovered or tested to solve various problems in JavaScript. I wanted a place to centralize and review all of the notes that I have made in coming up with various solutions to challenging problems */



/* Make array with range of numbers */

	[...Array(4).keys()]; // [0,1,2,3]
	
// or

	Array(5).fill().map((_, i) => i); // [0, 1, 2, 3, 4]
	
// or
	
Array.apply(null, Array(5)).map((_, i) => i); // [0, 1, 2]



Array(5).fill().map((_, i) => i[Math.floor(Math.random(Array.length)])]); 


/* Return the first character in a string */

'anything'.charAt(0); // "a"




/* Return the last character in a string */

var str = 'anything';

str[str.length - 1]; // "g"



/* Get the length of the longest word in sentence. */

function getLongestWordLength(str){
	return Math.max(...(str.split(' ').map(s => s.length))); // use the spread operator (...) to spread the array as arguments to Math.max.
}




/* Add another item to an array */

var items = [1,2];
var newItems = items.concat(3,4,5);

console.log(newItems); // [1,2,3,4,5];

var newItems2 = items.concat([3,4,5]);

console.log(newItems2); // [1,2,3,4,5]; // same result b/c concat looks at all arguments individually
// you cannot do nested arrays with concat




/* Convert array to string */

var names = ['Shane', 'Alan', 'Fred'];

names.join( ); // "Shane,Alan,Fred"

// the comma is the default argument to join

// can provide whatever argument you want

names.join('-'); // "Shane-Alan-Fred"








/* Get the last item in an array */

function lastCharArray (array) {
	return array[array.length - 1];
}

var arr1 = ['hello', 'hi', 'здравствуйте']; 

lastCharArray(arr1); // "здравствуйте"




/* Iterate contents of an array */

function iterateArray (array) {
	for (let i = 0; i < array.length; i++) {
		console.log(array[i]);
	}
}

var arr4 = ["kumkwat", "pumpkin", "rhubarb"];

iterateArray(arr4);
// kumkwat
// pumpkin
// rhubarb





/* Get the highest value of a series of numbers */

Math.max(10, -20, 15, 24); // 24

/* Return the highest value in array - Math.max.apply */

Math.max.apply(null, arr2);

var arr2 = [25, 62, 24, 1];

getMax(arr2); // 62




/* Function - return highest value in array - for loop */ 

function largest (array) {
	var largestSoFar = array[0];
	for (let i = 1; i < array.length; i++){
		if (array[i] > largestSoFar) {
			largestSoFar = array[i];
		}
	}
	return largestSoFar;
}

var arr1 = [8, 0, -3, 4];

largest(arr1); // 8

var arr3 = [2, 0, 3, -2];

largest(arr3); // 3






/* To return the lowest value in an array */

Math.min.apply(null, Array)

var arr1 = [1, 2, 3];


/* Function - return multiples of three in a new array */

function multiplesOfThree (array) {
	var result = [];
	for (i = 0; i < array.length; i++) {
		if (array[i] % 3 === 0) {
			result.push(array[i]);
		}
	}
	
	return result;
}

var arr3 = [2, 0, 3, -2];

multiplesOfThree(arr3); // (2) [0, 3]





/* Split a string into an array of strings */

var numList = "4 6 2 3"; // string of numbers

function arrayOfStrings (number) {
	var arr = number.split(" ")
	return arr;
}

arrayOfStrings (numList); // ["4", "6", "2", "3"]

typeof arrayOfStrings(numList); // "object"
typeof numList; // "string"






/* split part of a string into an array of strings */

var myString = 'Hello World. How are you doing?';
var splits = myString.split(' ', 3);

console.log(splits); // ["Hello", "World.", "How"]


/* How to sum an array */

function add (x, y) {
	return x + y;
}

var arr3 = [5, 2, 3];

arr3.reduce(add, 0); // 10

// note: If the array is empty and no initialValue is provided, TypeError will be thrown. 


/* How to reverse a string */

var str = "anything";

function reverseStr () {
	str = str.split('').reverse().join('');
	return str;
} // "gnihtyna"



/* How to print out each letter of a word in console (with charAt() method) */

var str = "dingus";

function printer () {
	for (let i = 0; i < str.length; i++) {
		console.log(str.charAt(i));
	}
}

printer();



/* Push a sequence of numbers into an array (i.e. 1 to 10) */

function Num2Array (numbers) {
	var numbers = []; // need to have empty array for numbers to be pushed into
	for (let i = 1; i <= 10; i++) {
		numbers.push(i);
	}
	return numbers;
}

Num2Array(); // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


/* Function - Push all even numbers in a string to an array */

function evenNumberPusher (string) {
var evenNumbers = [];
for (let i = 0; i < string.length; i++) {
	if (string.charAt(i) % 2 === 0) {
		evenNumbers.push(string.charAt(i));
	}
}
	return evenNumbers;
}

var numbers = '32491892374597';

evenNumberPusher(numbers); // (5) ["2", "4", "8", "2", "4"]



/* Map a string of numbers to an array */

var str = "1 2 4 5";

function mapping () {
	numbers = numbers.split(' ').map(Number)
	return numbers;
} // map is for generating a new array

mapping(str); // (4) [1, 2, 4, 5]


/* Very quick way to find max/min of an array of numbers */

var arr1 = [5, 2, 10];

Math.max(...arr); // 10

Math.min(...arr); // 2



/* how to find square root w/o method */


function squareRoot (x) {
    var y = Math.pow(Math.abs(x), 1/2)
	return x < 0 ? -y : y; // if we only had 'return y' in this line, we would only get the right answer for positive numbers
	}
	
/* Fastest way to convert smth into a number */

// unary plus, operator: +x

+3     // 3
+'3'   // 3
+true  // 1
+false // 0
+null  // 0
+function(val){  return val } // NaN


/* Array into string */

// using concat method


var greeting = ["Mark", "Bill", "and", "Dave"];

"".concat(...greeting); // MarkBillandDave



/* Making numbers positive or negative */

Math.abs(num) => Always positive
-Math.abs(num) => Always negative



/* Quicker method to turn positive numbers to negative and vice versa */

var arr1 = [8, 0, -3, 4];

arr1.map( x => x === 0 ? x : -x); // [-8, 0, 3, -4]

arr1.map(x => x && -x); // [-8, 0, 3, -4]

arr1.map(i => 0 - i);



/* How to append letters to elements over an array of strings */

var arr1 = ['Apple', 'Banana', 'Pear'];

arr1.map(function(i){
	return i + this;
}, 's') //["Apples", "Bananas", "Pears"] // taken from scriptverse

// my version

var arr4 = ["kumkwat", "pumpkin", "rhubarb"];

arr4.map(i => i +'s');  // ["kumkwats", "pumpkins", "rhubarbs"]




/* Add numbers to elements over an array of numbers */


var items = [1,2,3];


items.map(function(item) { 
	return item + 1;
}); // [2,3,4];

items.map(i => i + 1); // [2,3,4];




/* Check whether strings in an array contain palindromes */


var items = ["mom", "brother", "evade me dave"];

items.map(i => i.split('').reverse().join('') === i); // [true, true, false, true]

// doesn't work with strings with spaces 





/* Challenge - make a function that returns only the last three letters of any string that you pass into it */

var str = 'hello';

str.slice(str.length - 3).toUpperCase(); // "LLO"



/* Simple function to det. whether a string is a tweet (140 char or less) */

//variant 1
function tweeter (x) {
	var y = x.length;
	return y <= 140;
} 

//variant 2
function tweeter (x) {
	var y = x.length;
    return y < 140 && y > 0;
}

tweeter ('here\'s my message'); // true




/* Check to see if a word/string is in a longer string */

var message = "here's my tweet";

function finder (x, y) {
	return x.indexOf(y) > -1;
}

finder (message, "tweet"); // true


/* Check to see if year is a valid input (bet. 1900 and 2017) */

function isYearRight (year) {
	return typeof year === "number" && year > 1900 && year < 2018
	}

isYearRight (1922);
// true
isYearRight (1899);
// false
isYearRight(-2000);
// false


/* Check if the last letter in a string is a question mark */

var question = "is this a question?";
var notQuestion = "this is not a question";

function questionOrNot (x) {
	if (x.charAt(x.length - 1) === '?') {
		return "it's a question";
	} else {
		return "it's not question";
	}
}

questionOrNot(question); // "it's a question"
questionOrNot(notQuestion); // "it's not question"


/* Challenge: tweet improver */

var message = "that's gotta hurt LOL";
var message1 = "whoa there buddy";

function tweetImprover (tweet) {
	var result;
	if (tweet.toLowerCase().indexOf("lol") == -1) {
	return result = tweet + " lol";
	} else {
		return tweet;
	}
	
}

tweetImprover(message); // "that's gotta hurt LOL"
tweetImprover(message1); // "whoa there buddy lol"


/* While loop that gives the even and odd numbers for any range */

var number = 0;

while (number <= 100) {
	if (number % 2 === 0) {
		console.log("even");
	} else {
		console.log("odd");
	}
	number = number + 1;
}

for (let number = 0; number <= 100; number++) {
	if (number % 2 === 0) {
			console.log("even");
		} else {
			console.log("odd");
		}
		number = number + 1;
	}
	
	
/* Make a function for the largest divisor of a given number */

function largestDivisor (number) {
	var result = 1; // smallest possible value it could be; situation when the number is prime
	for (let i = 2; i < number; i++){ // i < number so we don't get number returned as answer for largest divisor
		if (number % i === 0) {
			result = i;
		}
	}
	
	return result;
}

largestDivisor(33); // 11
largestDivisor(101); // 1
largestDivisor(44); // 22



/* Make a function that removes all vowels in a string */

function removeVowels (word) {
	if (typeof word !== "string") {
		throw "input a string";
	} 
	var result = ""; // iterate over each character in a string
	
	for (let i = 0; i < word.length; i++) {
		var currentChar = word.charAt(i).toLowerCase();
		if (currentChar !== "a" && currentChar !== "e" && currentChar !== "i" && currentChar !== "o" && currentChar !== "u") {
			result = result + word.charAt(i); // not currentChar b/c we want the words to be printed in their original style
		}
	} 
	return result;
} 

var message = "that's gotta hurt LOL";
removeVowels(message); // "tht's gtt hrt LL"



/* Function that returns the first lowercase letter in a string */

function firstLowerCase (string) {
	if (typeof string !== "string") {
		throw "input a string";
	} 
	var result = ""; // if there are no lower case letters, it will return ""
	for (let i = 0; i < string.length && result === ""; i++) // modification of the continuation condition (&& result === "") to break the loop 
	{
		if ("a" <= string.charAt(i) && string.charAt(i) <= "z")
			result = string.charAt(i); 
	}
	
	return result;
}

var message2 = "WWEFJLlkjsd";
firstLowerCase(message2); // "l"

var message3 = "HELLO everybody";
firstLowerCase(message3); // "e"



/* Counting numbers backwards (i.e. from 10 to 0) */

function countDown (number) {
	if (typeof number !== "number") {
		throw "please input number";
	}
	for (let i = number; i >= 0; i--) {
		console.log(i);
	}
}

countDown(5);
//5
//4
//3
//2
//1
//0

/* Function - sum numbers in an array */

function sum (list) {
	var i = 0;
	
	list.forEach(function (number){
		sum = sum + number;
	})
	
	return sum;
}

var arr1 = [3, 2, 9, 12, 3];

sum(arr1); // 29



/* Function - double each item in array */

function doubles (list) {
	var result = [];
	
	list.forEach(function (number) {
		result.push(number * 2);
	})
	
	return result;
}

var arr1 = [3, 2, 9, 12, 3];
doubles (arr1); // [6, 4, 18, 24, 6]

function doublesWithMap (list) {
	var result = list.map(function (number){
		return number * 2;
	})
	return result;
}

doublesWithMap(arr1); // [6, 4, 18, 24, 6]

// can also return the result variable altogether

function doublesWithMap (list) {
	return list.map(function (number){
		return number * 2;
	})
	return result;
	
} // whenever we want to create a new array from an existing array, we use map function
// when we use map it calls the function on each element (i.e. number * 2); so it is useful when we want some operation done to each element of the array, otherwise leaving it unchanged

doublesWithMap(arr1); // [6, 4, 18, 24, 6]

/* Raise elements of array to 3rd power - map function */

var arr1 = [3, 2, 9, 12, 3];

arr1.map(function (number){
	return Math.pow(number, 3);
}) // [27, 8, 729, 1728, 27]



/* Get first letters of array of strings */

function getFirstLetters (listOfStrings) {
	return listOfStrings.map(function(word){
		// return word[0];
		return word.charAt(0);
	})
}

var arr4 = ["kumkwat", "pumpkin", "rhubarb"];
getFirstLetters(arr4); // ["k", "p", "r"]





/* Flip boolean values in array */

var arr = [true, false, true, true, false];

arr.map(i => !i); // [false, true, false, false, true]
	
	
	
	
// or... as a function:
	
function flipBooleans (booleanArray) {
	return booleanArray.map(function(value){
		return !value;
	})
}

flipBooleans(boolean1); // [false, true, false, false, true]




/* Function - filter range of numbers in array */


function filter100 (arrayOfNum) {
	return arrayOfNum.filter(function (number){
	return number >= 100; // return only values >= 100
	})
}

arr.filter(i => i >= 100);

var arr1 = [3, 200, 90, 102, 300];

filter100(arr1); // [200, 102, 300]


/* Function - filter even numbers in array */

var arr1 = [3, 200, 90, 102, 300];

arr.filter(i => i % 2 === 0);



/* String (w/o commas) to array  */

var string = "that is cool lol";

string.split(' '); // ["that", "is", "cool", "lol"]


/* Convert from array to string */

var arr = ["that", "is", "cool", "lol"];

array.join(' '); // "that is cool lol"



/* Check if all elements in array satisfy a condition */

array.every( x => x % 2 === 1 ); // checks if all elements in the array are odd

arr1 = [1, 2, 3, 4, 5]; 

array.every( x => x % 2 === 1 ); // false

var arr3 = [5, 5, 5];

arr3.every(x => x%2 === 1); // true


/* FP - Fizz Buzz Challenge */


const range = n => [...Array(n).keys()]; //provides a range of numbers

/*
FIRST LIST ALTERNATIVE:

function range(n){
	return Array.apply(null, Array(n)).map((_, i) => i);
} */

function fizzBuzzTest(n){
	var by3 = n % 3 === 0;
	var by5 = n % 5 === 0;

	return  by3 && by5 ? 'fizz buzz'
							 : by3 ? 'fizz'
							 : by5 ? 'buzz'
										 : n;
}

function fizzBuzz(n){
	return range(n).map(x => fizzBuzzTest(x + 1)).join(', ');

}

document.write(fizzBuzz(100));


// Get random color function - in hexadecimal 

function getRandomColor() {
	var length = 6;
	var chars = '0123456789ABCDEF';
	var hex = '#';
	while(length--) hex += chars[(Math.random() * 16) | 0];
	return hex;
}


console.log(getRandomColor()); // #D0A34A



// Make a censoring program 

const CHAR = 'X'
const BANNED = ['nice', 'is', 'stupid', 'potato']

const censor = (sentence) => sentence
	.split(/\b/)
	.map(word => BANNED.includes(word.toLowerCase()) ? CHAR.repeat(word.length) : word)
	.join('')
	
	
censor('that is a nice tie'); // "that XX a XXXX tie"



// FP - Capitalize 

const titleCase = str => str
	.toLowerCase()
	.split(' ')
	.map(v => v
		.charAt(0)
		.toUpperCase() + v
		.slice(1))
	.join(' '); // need space in join to capitalize mult words
	
	
titleCase('something') // "Something"

titleCase('something green'); // "Something Green"


// FP - Find digital sum of number

const digitalSum = num => num
	.toString() // convert num to string; "24"
	.split('') // split string into array by empty string; ["2", "4"]
	.map(c => parseInt(c)) // convert each digit from string to num
	.reduce((a,b) => a + b) // reduce the list by sum function


// Find shortest word in array, where not every element is a string

const findShortestWord = arr => arr
	.filter(e => typeof e === 'string')
	.sort((a, b) => a.length - b.length)[0];
	
	
// map properties onto new objects
	
var map = function(arr, property) { 
		var m = arr.map(makeKv);

		function makeKv(item, index) {
			var ret = {};
			ret[item[property]] = index;
			return ret;
		};

		console.log("m : ", m);
	}

	map([{name: "Kevin"}, {name: "Bob"}], 'name');



/* Create HTML tags function */



/* create array from string of numbers with split method */



