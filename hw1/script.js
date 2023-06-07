const priceOne = 15.678;
const priceTwo = 123.965;
const priceThree = 90.2345;

// console.log('Price of the first product: ', priceOne);
// console.log('Price of the second product: ', priceTwo);
// console.log('Price of the third product: ', priceThree);

let expensiveProduct = Math.max(priceOne, priceTwo, priceThree);
// console.log('Most expensive product: ', expensiveProduct);

let cheapestProduct = Math.min(priceOne, priceTwo, priceThree);
// console.log('Cheapest product: ', cheapestProduct);

let sumPrice = priceOne + priceTwo + priceThree;
// console.log('Sum of prices: ', sumPrice);

let priceOneFloor = Math.floor(priceOne)
// console.log('Rounded price of first product: ', priceOneFloor);

let priceTwoFloor = Math.floor(priceTwo)
// console.log('Rounded price of second product: ', priceTwoFloor);

let priceThreeFloor = Math.floor(priceThree)
// console.log('Rounded price of third product: ', priceThreeFloor);

let sumPriceRounded = priceOneFloor + priceTwoFloor + priceThreeFloor;
// console.log('Sum of rounded prices: ', sumPriceRounded);

let sumPriceRoundedToHundred = Math.round(sumPriceRounded / 100) * 100;
// console.log('Sum of prices rounded to hundred: ', sumPriceRoundedToHundred);

let sumPriceRoundedOdd = sumPriceRounded % 2 == 0;
// console.log('Boolean is: ', sumPriceRoundedOdd);

let change = 500 - sumPrice;
// console.log('Change is: ', change);

let averagePriceRounded = Math.round((sumPrice / 3) * 100) / 100;
// console.log('Average price is: ', averagePriceRounded);

const minDiscount = 0;
const maxDiscount = 10;

const discount = Math.floor((maxDiscount - minDiscount) * Math.random() + minDiscount);
// console.log('Client discount is: ', discount);

let clientSale = (sumPrice - sumPrice / 100 * discount).toFixed(2);
// console.log('Client sale is: ', clientSale);

let cost = sumPrice / 2;
let profit = (clientSale - cost).toFixed(2);
// console.log('Profit is: ', profit);

let = allValues = `
Price of the first product: ${priceOne}
Price of the second product: ${priceTwo}
Price of the third product: ${priceThree}
Most expensive product: ${expensiveProduct}
Cheapest product: ${cheapestProduct}
Sum of prices: ${sumPrice}
Rounded price of first product: ${priceOneFloor}
Rounded price of second product: ${priceTwoFloor}
Rounded price of third product: ${priceThreeFloor}
Sum of rounded prices: ${sumPriceRounded}
Sum of prices rounded to hundred: ${sumPriceRoundedToHundred}
Boolean is: ${sumPriceRoundedOdd}
Change is: ${change}
Average price is: ${averagePriceRounded}
Client discount is: ${discount}
Client sale is: ${clientSale}
Profit is: ${profit}
`;
console.log(allValues);