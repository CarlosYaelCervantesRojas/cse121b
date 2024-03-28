/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");

        h3.innerText = temple.templeName;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.location);
        
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    
    displayTemples(templeList);
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
}

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    const filer = document.getElementById("filtered").value;
    
    switch (filer) {
        case "utah":
            const utahTemples = temples.filter((temple) => {
                const name = temple.templeName;
                return name.includes("Utah");
            });
            displayTemples(utahTemples);
            break;
        case "notutah":
            const notUtahTemples = temples.filter((temple) => {
                const name = temple.templeName;
                return !name.includes("Utah");
            });
            displayTemples(notUtahTemples);
            break;
        case "older":
            const olderTemples = temples.filter((temple) => {
                const date = new Date(1950, 0, 1).getTime();
                const dedicated = temple.dedicated;
                const dateDedicated = new Date(dedicated).getTime();
                return dateDedicated < date;
            });
            displayTemples(olderTemples);
            break;
        case "all":
            displayTemples(temples);
            break;
    }
}


/* Event Listener */
document.getElementById("filtered").addEventListener("change", () => filterTemples(templeList));

getTemples();