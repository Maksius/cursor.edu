// task#1
function getRandomArray(length, min, max) {
	const arrayRandom = [];
	if (min < max) {
		for (let i = 0; i < length; i++) {
			let numbers = parseInt(Math.random() * (max - min + 1) + min);
			arrayRandom.push(numbers);
		}
	} else if (min >= max) {
		for (let i = 0; i < length; i++) {
			let numbers = parseInt(Math.random() * (min - max + 1) + max);
			arrayRandom.push(numbers);
		}
	}
	return arrayRandom;
};

console.log(getRandomArray(7, 3, 95));

// task#2
function getModa(...numbers) {
	const integerNumber = numbers.filter((number) => Number.isInteger(number)).sort((a,b) => numbers.filter(n => n===a).length - numbers.filter(n => n===b).length).pop();
  return integerNumber;
};

const result = getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(result);

// task#3
function getAverage(...numbers) {
  const average = numbers.filter((number) => Number.isInteger(number)).reduce((prev, next) => prev + next, 0) / numbers.length;
  return average;
};

const average = getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(average);

// task#4
function getMedian(...numbers) {
	const integerValues = numbers.filter((number) => Number.isInteger(number)).sort((a, b) => a - b);
	const middle = Math.floor(integerValues.length / 2);
	return integerValues.length % 2 !== 0 ? integerValues[middle] : (integerValues[middle - 1] + integerValues[middle]) / 2;
};

const median = getMedian(1, 2, 3, 4, 5, 6);
console.log(median);

// task#5
function filterEvenNumbers(...numbers) {
  const filtered = numbers.filter(number => number % 2 !== 0);
  return filtered;
}

const filtered = filterEvenNumbers(1, 2, 3, 4, 5, 6);
console.log(filtered);

// task#6
function countPositiveNumbers(...numbers) {  
  const count = numbers.filter(number => number > 0).length;
  return count;
}

const count = countPositiveNumbers(1, -2, 3, -4, -5, 6,);
console.log(count);

// task#7
function getDividedByFive(...numbers){
  const filtered = numbers.filter(number => number % 5 == 0);
  return filtered;
}

const filtered1 =  getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(filtered1);

// task#8
function replaceBadWords(string) {
  const separated = string.split(' ');

  for (let i = 0; i < separated.length; i++) {
    separated[i] = separated[i].includes('shit') ? separated[i] = separated[i].replace('shit', '****') : separated[i].includes('fuck') ? separated[i] = separated[i].replace('fuck', '****') : separated[i];
  }
  return separated.join(' ');
}

const uncensored = replaceBadWords("Holy shit! Are you fucking kidding?");
console.log(uncensored);
