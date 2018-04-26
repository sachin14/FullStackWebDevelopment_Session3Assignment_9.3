//Spread operator Assignment 9.3

//create arrays

var evens = [2,4,6,8];
var odds = [1,3,5,7];
var primes = [2,3,5,7,11];

//combine arrays
var combineArray = [...primes, ...evens, ...odds];
console.log(combineArray);

//create a copy of primes
var copyPrimes = [...primes];
console.log(copyPrimes);

//Destructure

var jamesBond = {
    first: 'James',
    last: 'Bond',
    country: 'United States',
    city: 'New York',
    twitter: '@jamesbond'
};

var{first, last, country, city, twitter} = jamesBond;

//player array
var players = ['paul', 'andy', 'darrell', 'jim'];

var[player1, player2, player3, player4] = players;

