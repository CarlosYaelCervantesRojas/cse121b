const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url, doThis) {
    const response = await fetch(url)

    if (response.ok) {
        const data = await response.json()
        doThis(data);
    }
}

function doStuff(data) {
  results = data;
  
  const output = document.querySelector("#output");
  
  const html = `
  <h2>${results.name}</h2>
  <img src="${results.sprites.front_default}" alt="${results.name}"></img>
  `;
  output.innerHTML = html;
  console.log("first: ", results);
}

console.log("second: ", results);

function doStuffList(data) {
    const list = document.getElementById("outputList");
    console.log(data);
    const pokeList = data.results;

    pokeList.forEach(pokemon => {
        const html = `<li>${pokemon.name}</li>`;
        list.innerHTML += html;
    });
}

getPokemon(url, doStuff);
getPokemon(urlList, doStuffList);