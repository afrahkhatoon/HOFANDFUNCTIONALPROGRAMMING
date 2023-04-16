/*
3. Build a feature for Store's Inventory.
Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
use the map higher-order function to create a new object with the converted prices in Rupees.
*/

let items = {
    "apple": 1.99,
    "banana": 0.99,
    "orange": 2.49,
    "pear": 1.79
  }; // store's inventory with prices in USD
  
  let exchangeRate = 80; // exchange rate from USD to INR
  
  let inventoryInRupees = {}; // initialize an empty object for the inventory in INR
  
  for (let item in items) {
    inventoryInRupees[item] = items[item] * exchangeRate; // convert the price to INR and add it to the inventory object
  }
  
  console.log(inventoryInRupees); // display the inventory with prices in INR
  