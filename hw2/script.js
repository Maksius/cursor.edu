let firstNumber = Number(prompt('Enter first number', ''));
let lastNumber = Number(prompt('Enter second number', ''));
let result = 0;

while(!Number.isInteger(firstNumber) || !Number.isInteger(lastNumber)) {
  alert('Enter integer number');
  firstNumber = Number(prompt('Enter first number', firstNumber));
  lastNumber = Number(prompt('Enter second number', lastNumber));
};

const skip = confirm('Skip pair numbers?')
for (let i = firstNumber; i <= lastNumber; i++) {
  if (skip) {
      result += i % 2 ? i : 0;
  } else {
      result += i;
  }
}
alert(`The result is: ${result}`)





// if (skip===true && !(firstNumber%2===0) && !(lastNumber%2===0)) {
//   result = alert(firstNumber + lastNumber);
//   result += firstNumber % 2 ? firstNumber : 0;
// } else {
//   result += firstNumber;
// };
