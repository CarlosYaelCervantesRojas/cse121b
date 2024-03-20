myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
  let favoriteFood1 = document.createElement("li");
  favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
  let favoriteFood2 = document.createElement("li");
  favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
  let favoriteFood3 = document.createElement("li");
  favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
  let favoriteFood4 = document.createElement("li");
  favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  document.querySelector("#favorite-foods").appendChild(favoriteFood1);
  document.querySelector("#favorite-foods").appendChild(favoriteFood2);
  document.querySelector("#favorite-foods").appendChild(favoriteFood3);
  document.querySelector("#favorite-foods").appendChild(favoriteFood4);

// Activity 1
// Write a function using a .forEach method to loop over an array and output it's contents in a <ul>
const foodsElements = document.getElementById("favorite-foods");
myInfo.favoriteFoods.forEach(food => {
    let favoriteFood = document.createElement("li");
    favoriteFood.textContent = food;
    foodsElements.appendChild(favoriteFood);
});

// Write a function using a .map method to loop over an array and output it's contents in a <ul>
document.getElementById("favorite-foods").innerHTML = myInfo.favoriteFoods.map(food => `<li>${food}</li>`).join("");


const foodsElement = document.getElementById("favorite-foods");
const placesElement = document.getElementById("places-lived");


function embedded(food) {
    return `<li>${food}</li>`;
}

function embeddedHTML(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

function template(list, callback) {
    let longString = list.map(callback);
    return longString.join("");
}

foodsElement.innerHTML = template(myInfo.favoriteFoods, embedded);
placesElement.innerHTML = template(myInfo.placesLived, embeddedHTML);