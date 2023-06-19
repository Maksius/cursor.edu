// task#1
function getMaxDigit(number) {
	const digits = String(number).split('');
	let maxDigit;
	for (let i = 0; i < digits.length; i++) {
    if (maxDigit === undefined) {
			maxDigit = digits[i];
		} else if (digits[i] > maxDigit) {
      maxDigit = digits[i];
		};
	};
	return Number(maxDigit);
};

// task#2
function pow(number, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= number;
  };
  return result;
};

// task#3
function upperCase(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

// task#4
function netProfit (profit, tax1, tax2) {
  let result = (profit * (100 - (tax1 + tax2))) / 100;
  return result;
};

// task#5
function getRandomNumber(first, last) {
  return Math.round(Number((Math.random() * (last - first) + first).toFixed(0)));
};

// task#6
function countLetter(letter, word) {
  let count = 0;
  word = word.toLowerCase();
  letter = letter.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (letter === word[i]) {
      count ++;
    };
  };
  return count;
};

// task#7, task#8
function convertCurrency(money) {
  const rate = 37;
  const uah = 'UAH';
  const dollar = '$';
  if (money.includes(dollar)) {
    return parseFloat(money) * rate + uah;
  } else if (money.toUpperCase().includes(uah)) {
    return parseFloat(money) / rate + dollar;
  } else {
    return "Error";
  };
};

// task#9
function getRandomPassword(length = 8) {
  password = Math.random() * 10;
  let round = 'e' + (length - 1);
  return Number(password + round).toFixed(0);
};

// task#10
function deleteLetters(letter, phrase) {
  const newPhrase = phrase.replaceAll(letter, '');
  return newPhrase;
};

console.log(`
1: результат числа 364987 => ${getMaxDigit(364987)};
2: результат чисел 3, 3 => ${pow(3, 3)};
3: результат слова meTaMOrpHosiS => ${upperCase("meTaMOrpHosiS")};
4: результат чистой прибыли => ${netProfit(42964, 18, 1,5)};
5: результат в диапазоне 1 - 100 => ${getRandomNumber(1, 100)};
6: результат количества букв м в слове метроном => ${countLetter("м", "метроном")};
7-8: результат конвертации UAH <=> $ => ${convertCurrency("100$")}, ${convertCurrency("3700 Uah")};
9: результат пароля с длиной 5 символов => ${getRandomPassword(5)};
10: результат удаления всех букв a из слова alabama => ${deleteLetters('a', 'alabama')};
`);





