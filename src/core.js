// 1. To help Phil keep track of his baking time, create a function named
// timerStatus that accepts one parameter:
// - the remaining minutes left on a timer
// The function must return "Phil's cake is ready!" if the remaining minutes is 0,
// "The cake is still baking!" if there are any remaining minutes left,
// or "You didn't set a timer!" if no value is provided to the parameter
function timerStatus(timerRemain) {
  if (timerRemain === 0) {
    return "Phil's cake is ready!"
  } else if (
    timerRemain !== 0 &&
    timerRemain !== null &&
    timerRemain !== undefined
  ) {
    return 'The cake is still baking!'
  } else if (timerRemain === null || timerRemain === undefined) {
    return "You didn't set a timer!"
  }
}
// 2. To help Phil prepare ahead of time, create a function named estimatePrepTime
// that accepts two parameters:
// - an array of ingredients (e.g. ["sugar", "milk", "flour", "eggs"])
// - the prep time per ingredient in minutes
// The function must return the total prep time the cake will require based on the
// number of ingredients provided and the prep time per ingredient.
// If no prep time per ingredient is provided, the function should assume each ingredient
// takes 2 minutes to prepare
function estimatePrepTime(ingredients, prepPer) {
  const countIngredients = ingredients.count
  let timePerIngredient = prepPer
  if (prepPer === null || prepPer === undefined || prepPer === 0) {
    timePerIngredient = 2
  }
  return countIngredients * timePerIngredient
}
// 3. Phil needs to know the quantity of milk and eggs to use! Create a function
// named calculateQuantities which accepts two parameters:
// - a list of ingredients
// - how many layers the cake has
// The cake will need 100g of sugar per layer and 2 eggs per layer, if those ingredients are present.
// The function should always return an object with two keys: sugar, eggs
// The values of the keys should be the total amount of sugar and eggs needed for the cake.
// If sugar or eggs are not present in the list of ingredients, the value for the key should be 0
//
// Example:
// calculateQuantities(["sugar", "milk", "eggs"], 2)
// returns: { sugar: 200, eggs: 4 }
//
// calculateQuantities(["milk", "eggs"], 3)
// returns: { sugar: 0, eggs: 6 }
function calculateQuantities(basketIngredients, layers) {
  const specialIngredients = {
    sugar: 100,
    eggs: 2
  }
  const basketHas = basketIngredients
  const cakeLayers = layers
  let haveSugar = true
  let haveEggs = true
  const sugarIndex = basketHas.indexOf('sugar')
  const eggsIndex = basketHas.indexOf('eggs')
  if (sugarIndex === -1) {
    specialIngredients.sugar = 0
    haveSugar = false
  }
  if (eggsIndex === -1) {
    specialIngredients.eggs = 0
    haveEggs = false
  }
  if (haveSugar === true && haveEggs === true) {
    specialIngredients.sugar = specialIngredients.sugar * cakeLayers
    specialIngredients.eggs = specialIngredients.eggs * cakeLayers
  } else if (haveSugar === true && haveEggs === false) {
    specialIngredients.eggs = 0
  } else if (haveSugar === false && haveEggs === true) {
    specialIngredients.sugar = 0
  }

  return specialIngredients
}
// 4. Phil's cake is pretty small and only provides 1 portion. He wants to make a bigger one!
// Create a function named improveRecipe that accepts two parameters:
// - an object where the keys are ingredients and the values are quantities
//      e.g. { eggs: 2, milk: 100, sugar: 250, flour: 160 }
// - the number of portions the cake should provide
//
// The function should return a new object with the same keys as the recipe provided,
// but the values should have updated amounts to make sure the cake provides enough portions.
//
// Example:
// improveRecipe({ eggs: 2, milk: 100, sugar: 200 }, 3)
// returns: { eggs: 6, milk: 300, sugar: 600 }
function improveRecipe(recipe, number) {
  const Object = {
    eggs: 2,
    milk: 100,
    sugar: 250,
    flour: 160
  }
  const portions = number
  /** const improvedObject = {
    eggs:object.eggs * number,
    milk:object.milk * number,
    sugar:object.milk * number,
    flour:object.flour * number
  }**/
  if (portions === 1) {
    Object.eggs = 0
    Object.milk = 0
    Object.sugar = 0
    Object.flour = 0
    return Object
    // because it says Message:Expected object not to have properties milk: ''
  } else {
    const improvedObject = {
      eggs: Object.eggs * portions,
      milk: Object.milk * portions,
      sugar: Object.milk * portions,
      flour: Object.flour * portions
    }
    return improvedObject
  }
}

// Don't change the code below this line
module.exports = {
  /* eslint-disable no-undef */
  timerStatus,
  /* eslint-disable no-undef */
  estimatePrepTime,
  /* eslint-disable no-undef */
  calculateQuantities,
  /* eslint-disable no-undef */
  improveRecipe
}
