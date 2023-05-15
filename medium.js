function findIndex (arr, num) {		// create function that accepts an array and a target number
	return arr.indexOf(num);		// indexOf method return the place of the target number or -1 if number is not found
}

testArray = [2,4,5,6,7,3,1];
console.log(findIndex(testArray, 8));