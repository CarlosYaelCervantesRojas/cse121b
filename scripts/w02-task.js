/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Carlos Cervantes";
let currentYear = 2024;
let profilePicture = "images/carloscervantes.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = [
    "Roast beef",
    "French fries",
    "Hamburger",
    "Pizza",
    "Wings",
    "Lasagne",
    "Spaghetti"
];

foodElement.innerHTML += `<br>${favoriteFoods}`;

let newFavoriteFood = "Tacos";
favoriteFoods.push(newFavoriteFood);

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;