// console.log(typeof 2)

// var Bean = 1
// var Cheese = 2

// console.log(Bean + Cheese)

var height = [4 , 5 , 6 , 7, 8, 9, 20]

//console.log(`${height[4]} tallest`)

//console.log(height[0] + height[1] + height[2] + height[3] + height[4])

//console.log(height[height.length -1])

// var evenSum = 0;
// var oddSum = 0;
// for (var i = 0; i<height.length; i++){ 
// 	if (height[i] %2 === 0) {
// 		evenSum = evenSum + height[i]; 
// 	} else { 
// 		oddSum = oddSum + height[i];
		
// 	}
		
// }
// console.log( oddSum, evenSum);

var person = {
	firstName: "Barb",
	height: 5,
	lastName: "Gee",
	favoriteColor: "Green",
	birthday: "05/01/1990"
	}

	console.log(person['firstName'] + ' ' + person['lastName']);

var person2 = {
	firstName: "Umbrella",
	height: 7,
	lastName: "Shoot",
	favoriteVideoGame: "GTO3",
	favoriteCar: "Skyline",
	siblings: 4,
	allis: "Batman",
}

console.log(`${person2['allis']} loves ${person['firstName']}`);

var people = [person, person2] 
console.log(people[people.length-1]['favoriteCar']);
console.log(people[0]['favoriteColor']);