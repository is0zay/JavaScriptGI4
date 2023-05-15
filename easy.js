const getAverage = (arr) => {		// arrow function for practice purposes passes an array as a parameter
	let sum = 0;					// this is a running some using let
	for (let i = 0; i < arr.length; i++) {	// iterate through array passed in the function
		sum += arr[i];						// for each index of the array, add the value stored in the index to the sum
	}
	
	let avg = sum / arr.length;				// average = sum/length
	return avg								// gives a value back to us
};

let testArr1 = [1,2,3,5,6,7];
let testArr2 = [10,22,34,95,86,57];
console.log(getAverage(testArr1));
console.log(getAverage(testArr2));