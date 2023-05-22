// //use this function to sort coin array
// function descendArray (a, b) {
// 	return b - a;
// }

// function howManyCoins (arr, amount) {
// 	let inputAmout = amount;
// 	let coins = arr.sort(descendArray);
// 	let coinCount = 0;

// 	while (inputAmout > 0) {
		
// 	}
// }
// Code Above attempted to solve problem with while loop

// coins is the array of coins passed
const minNumOfCoins = (coins,amount) => {

	// store[i] will hold the min number of coins
	let store = new Array(amount + 1);
	//start store at 0, ) coins required to make 0
	store[0] = 0;

	//Initialize all the store variables as large number, only a placeholder
	for(let i = 1; i <= amount; i++) {
		store[i] = Number.MAX_VALUE
	}

	// find minimum coins needed for values between 1 - amount
	for (let i = 1; i <= amount; i++) {
		// loop through all coins smaller than i
		for (let j = 0; j < coins.length; j++) 
		if(coins[j] <= i) { 	// Checks if the coin value is less than or equal to the current i value
			let sResult = store[i - coins[j]]; 	//// Retrieve the previous minimum coin count for the remaining value

			// If sResult is not the placeholder value and using the current coin leads to a smaller coin count,
    		// update the table with the new minimum coin count
			if (sResult != Number.MAX_VALUE && sResult + 1 < store[i]) {	
				store[i] = sResult + 1;
			}
		}
	}

	// If amount can not be made with the given coin types, return -1
	if(store[amount] == Number.MAX_VALUE) {
		return -1;
	}

	return store[amount]; // return min coin count for the passed amount
}

console.log(minNumOfCoins([5,1], 12));



	
	
