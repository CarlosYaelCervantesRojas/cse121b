/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Carlos Cervantes",
    photo: "images/carloscervantes.jpg",
    favotireFoods : [
        "Roast beef", 
        "French fries", 
        "Hamburger", 
        "Pizza", 
        "Wings", 
        "Lasagne", 
        "Spaghetti"
    ],
    hobbies: [
        "Drawing",
        "Painting",
        "Jewelry making",
        "Lego sets",
        "Video games"
    ],
    placesLived: [

    ],
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: "Guatemala City, Guatemala",
    length: "2 years"
});

myProfile.placesLived.push({
    place: "Puebla, Mexico",
    length: "21 years"
});


/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
let photo = document.getElementById("photo");
photo.setAttribute("src", myProfile.photo);
photo.setAttribute("alt", "profile picture");

/* Favorite Foods List*/
myProfile.favotireFoods.forEach((food) => {
    let li = document.createElement("li");
    li.textContent = food;
    document.getElementById("favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.getElementById("hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach((place) => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;

    let dd = document.createElement("dd");
    dd.textContent = place.length;

    let placesList = document.getElementById("places-lived");
    placesList.appendChild(dt);
    placesList.appendChild(dd);
});

