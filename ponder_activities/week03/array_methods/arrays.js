let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

// Using the array.filter() method, create an array named namesB with only those names from the name array that start with the character 'B'.
let namesB = names.filter((name) => name[0] == "B");
console.log(namesB);

// Using the array.map() method, create a new array named namesLength that contains the length of each name in the names array. Expected output is [5, 8, 5, 8, 3].
let namesLength = names.map((name) => name.length);
console.log(namesLength);

// Using the names.reduce() method, create an expression that returns the average string length of the names in the names array. Expected output is 5.8.
let average = names.reduce((total, name) => total += name.length, 0) / names.length;
console.log(average);

// ---------------------------------------------------------------------------------------------------------

let steps = ['one', 'two', 'three'];

let stepsHTML = steps.map(function (step) {
    return  `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHTML.join();

// ---------------------------------------------------------------------------------------------------------

let grades = ['A', 'B', 'A'];

function gradeToPoints(letter) {
    let points = 0;

    if (letter === "A") {
        points = 4;
   }
   else if (letter === "B") {
        points = 3;
   }

   return points;
}

let gpaPoints = grades.map(gradeToPoints);
console.log(gpaPoints);

let gpa = gpaPoints.reduce((total, points) => total += points, 0) / gpaPoints.length;
console.log(gpa);

// ---------------------------------------------------------------------------------------------------------

let words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

let longerWords = words.filter(word => word.length > 6);
console.log(longerWords);

// ---------------------------------------------------------------------------------------------------------

let numbers = [12, 34, 21, 54];
let luckNumber = 21;
console.log(numbers.indexOf(luckNumber));