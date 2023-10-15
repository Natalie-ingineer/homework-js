// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }
  
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });
//   // Change code below this 
  
 
//   makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}.`);
//   });
  

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName) {},
// };
// // Change code above this line
// const namePizza = Object.values(pizzaPalace.pizzas);
// console.log(namePizza);
// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// const arr = [1,2,3,4,5,6];

// // const newArr = arr.map((item,index,arr) => item * 2)
// // console.log(newArr);
// console.log(arr);

// const newArr2 = arr.map((item) => {
//    if (!(item%2)) {   іф реагує на тру, тоді щоб дізнатися чи число парне треба виконати ділення без остачі, тобто щоб при діленні на 2 отримали 0, а нуль -це фольз, тому робимо інверсію   
//     return item *2;
//   }
// return item
// })
// console.log(newArr2);

