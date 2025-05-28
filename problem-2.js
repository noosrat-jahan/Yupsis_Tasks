// Problem 2: Inventory Management with Multiple Units

let initial_stock = {
    "tons": 1,
    "kilograms": 0,
    "grams": 0,
    "milligrams": 0
}

// converting all units in mg

let ton = 1000000000
let kilogram = 1000000
let gram = 1000
let milligram = 1


initial_stock.tons = ton * initial_stock.tons
initial_stock.kilograms = kilogram * initial_stock.kilograms
initial_stock.grams = gram * initial_stock.grams
initial_stock.milligrams = milligram * initial_stock.milligrams
console.log("Initial Stock In MG:", initial_stock)


let Total_in_milligrams = initial_stock.tons + initial_stock.kilograms + initial_stock.grams + initial_stock.milligrams


// perform addition or subtraction
// after sales
let sales_in_mg = 1 * gram // sales in mg
let update_stock = {}

// converting back to prev units
update_stock.tons = Math.floor((Total_in_milligrams - sales_in_mg) / ton )
update_stock.kilograms = Math.floor(((Total_in_milligrams - sales_in_mg) % ton) / kilogram )
update_stock.grams = Math.floor((((Total_in_milligrams - sales_in_mg) % ton) % kilogram) / gram )
update_stock.milligrams = Math.floor(((((Total_in_milligrams - sales_in_mg) % ton) % kilogram) % gram) / milligram  )

console.log("Updated Stock After Sale:", update_stock)


// after purchase
update_stock.tons = ton * update_stock.tons
update_stock.kilograms = kilogram * update_stock.kilograms
update_stock.grams = gram * update_stock.grams
update_stock.milligrams = milligram * update_stock.milligrams
console.log("Updated Stock In MG:", update_stock)


let Total_Updated_Stock_in_milligrams = update_stock.tons + update_stock.kilograms + update_stock.grams + update_stock.milligrams

let purchase_in_mg = 1001 * gram // purchase in mg.

update_stock.tons = Math.floor((Total_Updated_Stock_in_milligrams + purchase_in_mg) / ton )
update_stock.kilograms = Math.floor(((Total_Updated_Stock_in_milligrams + purchase_in_mg) % ton) / kilogram )
update_stock.grams = Math.floor((((Total_Updated_Stock_in_milligrams + purchase_in_mg) % ton) % kilogram) / gram )
update_stock.milligrams = Math.floor(((((Total_Updated_Stock_in_milligrams + purchase_in_mg) % ton) % kilogram) % gram) / milligram  )

console.log("Updated Stock After Purchase:", update_stock)
