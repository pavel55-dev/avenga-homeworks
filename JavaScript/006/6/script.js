const nameRecipe = prompt("Enter the name of the recipe:");
const numberOfIngredients = prompt("Enter the number of ingredients:");
const ingredients = [];

for (let i = 0; i < numberOfIngredients; i++) {
  const ingredient = prompt(`Enter ingredient ${i + 1}:`);
  ingredients.push(ingredient);
}

const nameRecipeHTML = document.getElementsByClassName("header")[0];
nameRecipeHTML.innerText = nameRecipe;

const ingredientsListHTML = document.getElementsByClassName("ingredients-list")[0];
ingredients.forEach(ingredient => {
  const li = document.createElement("li");
  li.innerText = ingredient;
  ingredientsListHTML.appendChild(li);
});