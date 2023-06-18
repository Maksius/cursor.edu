let firstNumber = Number(prompt('Enter first number', ''));
let lastNumber = Number(prompt('Enter second number', ''));
let result;

while(!Number.isInteger(firstNumber) || !Number.isInteger(lastNumber)) {
  alert('Enter integer number');
  firstNumber = Number(prompt('Enter first number', firstNumber));
  lastNumber = Number(prompt('Enter second number', lastNumber));
};

let skip = confirm('Skip pair numbers?')
if (skip===true && !(firstNumber%2===0) && !(lastNumber%2===0)) {
  result = alert(firstNumber + lastNumber);
} else if (skip===false) {
  result = alert(firstNumber + lastNumber);
} else {
  result = alert(`Numbers: ', ${firstNumber}, ${lastNumber}`);
};
