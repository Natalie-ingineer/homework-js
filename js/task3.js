// console.log('Hello!!!');
// const arr = [1,2,3,4,5]
// console.log(arr);

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam",
 
// };

// console.log(emailInputName);


// function countProps(object) {
//     let propCount = 0;
//     // console.log(object);
//     // Change code below this line
//   for (const key in object) {
//     console.log([key].length);
//     if (object.hasOwnProperty(key)){
//     propCount += [key].length;
//     }
  

//   }
  
//     // Change code above this line
//     return propCount;
//   }
  
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   console.log(keys)
  
//   for (const value of keys) {
//     console.log(apartment[value]);
//     values.push(apartment[value]);
//     console.log(values);
//   }



// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;

//     const keys = Object.keys(object);
//     console.log(keys);

//     propCount += (keys).length;
//     console.log(propCount);

//     // for (const key in object) {
//     //   if (object.hasOwnProperty(key)) {
//     //     propCount += 1;
//     //   }
//     // }
  
//     return propCount;
//     // Change code above this line
//   }
  
  
//   console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
//  console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line
//   let valueSalary = Object.values(salaries);
//   console.log(valueSalary);
//   for(const value of valueSalary) {
//     console.log(value);
  
//   totalSalary += value;
//   }
//     // Change code above this line
//     return totalSalary;
//   }
// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
  

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   let hexColors = [];
//   let rgbColors = [];
// for(const value of colors) {
//     // console.log(value.hex);
//     // console.log(value.rgb);
//     hexColors.push(value.hex);
//     console.log(hexColors);
//     rgbColors.push(value.rgb);
//     console.log(rgbColors);

// }

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
  
//   function getProductPrice(productName) {
//     // Change code below this line
//   for (const key of products) {
// //     console.log(key.name);
// //    console.log(key.price);
//     if (productName === key.name){
//         return key.price;
//     }
 
//     // Change code above this line
//   }
//   return null;
// }
  
//   console.log(getProductPrice("Radar"));
//   console.log(getProductPrice("Grip"));
//   console.log(getProductPrice("Scanner"));
//   console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));




// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
// function getAllPropValues(propName) {

// let arrValue = [];

// for (const value of products) {
//     console.log(value);
// if (propName in value) {
//     arrValue.push(value[propName]); 
//     console.log(arrValue);
// }
// }

// return arrValue;
  
  
// //     // Change code above this line
// }

//   console.log(getAllPropValues("name"));
//   console.log(getAllPropValues("quantity"));
//   console.log(getAllPropValues("price"));
//   console.log(getAllPropValues("category"));


// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
  
//   function calculateTotalPrice(productName) {
//     // Change code below this line
//   let totalPrice = 0;
  
  
//   for (const product of products) {
//     // console.log(product.price);
//     // console.log(product.quantity);

//     if (product.name === productName){
//       totalPrice = product.price * product.quantity;
//       console.log(totalPrice);
//   }
//   }

//     return totalPrice;
//     // Change code above this line
//   }

//    console.log(calculateTotalPrice("Blaster"));
//   console.log(calculateTotalPrice("Radar"));
  // console.log(calculateTotalPrice("Droid"));
  // console.log(calculateTotalPrice("Grip"));
  // console.log(calculateTotalPrice("Scanner"));


//   const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
  
//   for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
//   }
// console.log(hexColors);


// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const { 
//   today: { high: highToday, low: lowToday, icon: todayIcon ="https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"},
//   tomorrow: { high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//    }} = forecast;



// function calculateMeanTemperature(forecast) {

//   const { today: {low: todayLow, high: todayHigh },
//   tomorrow: {low: tomorrowLow, high: tomorrowHigh}} = forecast;


//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));


// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// console.log(allScores);
// const bestScore = Math.max(...allScores);
//   console.log(bestScore);
// const worstScore = Math.min(...allScores);
// console.log(worstScore);


// Change code below this 
// let result = 0;

// function add(...args) {
//   // Change code above this line
//   let result = 0;
//   // console.log(args);
//   for (const arg of args) {
//     // console.log(arg);
//     result += arg;
//   }
  
  
//   return result;
// }

// console.log(add(15, 27));
// console.log(add(12,4,11,48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));


// Change code below this line
// function addOverNum(newArr, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (newArr < arg) {
//       total += arg;
//   }
//   }

//   return total;
//   // Change code above this line
// }


// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log((15, 32, 6, 13, 19, 8));
// console.log((20, 74, 11, 62, 46, 12, 36));


// function findMatches(arr1, ...arr2) {
//   const matches = []; // Don't change this line

//   for (let i of arr2) {
//     if (arr1.includes(i)){

//    matches.push(i);
//   }
// }

//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));





const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    if (this.potions.includes(newPotion)) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
this.potions.slice(potionName,0);


    // Change code above this line
  },
};

console.log(atTheOldToad.removePotion("Dragon breath"));
console.log(atTheOldToad.removePotion("Speed potion"));
