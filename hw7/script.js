const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// task#1
function getMyTaxes(salary) {
  return salary * this.tax;
};

console.log(getMyTaxes.call(ukraine, 2500));

// task#2
function getMiddleTaxes(country) {
  return this.tax * this.middleSalary;
};

console.log(getMiddleTaxes.call(litva));

// task#3
function getTotalTaxes(country) {
  return this.tax * this.middleSalary * this.vacancies;
};

console.log(getTotalTaxes.call(latvia));

// task#4
function getMySalary(country) {
  setInterval(() => {
    const salary = Math.floor(1500 + Math.random() * (2000 + 1 -1500));
    const taxes = Number((salary * this.tax).toFixed(0));
    const profit = salary - taxes;
    console.log({salary, taxes, profit});
  }, 10000);
};

getMySalary.call(ukraine);