const content = document.getElementById("content");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

document.getElementById("close").addEventListener("click", reset);

async function getData(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        
        return data;
    }
}

searchButton.addEventListener("click", async () => {
    const word = searchInput.value;
    const link = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    let data = await getData(link);   

    data ? displayInfo(data) : noInformation();
});

function displayInfo(data) {
    reset();
    data.forEach(word => {
        const basicDiv = createBasicDiv(word);
        const audioButton = createAudioButton(word);
        const meaningDiv = createMeaningDiv(word);

        basicDiv.appendChild(audioButton);
        content.appendChild(basicDiv);
        content.appendChild(meaningDiv);
    });
}

function createBasicDiv(data) {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const span = document.createElement("span");

    div.id = "basic-info"
    h1.textContent = data.word;
    span.textContent = data.phonetic;

    div.appendChild(h1);
    div.appendChild(span);

    return div;
}

function createAudioButton(data) {
    const audiosArray = data.phonetics;

    const audioObject = audiosArray.find((ob) => {
        const src = ob.audio;
        return src != "";
    });

    const audioSource = audioObject.audio;

    const audioButton = document.createElement("img");
    audioButton.id = "audio";
    audioButton.src = "../images/volume.svg";
    audioButton.alt = "audio";
    audioButton.addEventListener("click", () => playAudio(audioSource));

    return audioButton
}

function createMeaningDiv(data) {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const hr = document.createElement("hr");
    
    h3.textContent = "Definition";
    p.textContent = data.meanings[0].definitions[0].definition;

    div.appendChild(h3);
    div.appendChild(p);
    
    const synonymsList = data.meanings[0].synonyms;
    
    if (synonymsList.length != 0) {
        const h4 = document.createElement("h4");
        const ul = document.createElement("ul");
        
        h4.textContent = "Synonyms"

        ul.innerHTML = synonymsList.map((synonym) => {
            return `<li>${synonym}</li>`
        }).join("");

        div.appendChild(h4);
        div.appendChild(ul);
    }

    div.appendChild(hr);

    return div;
}

function playAudio(source) {
    const audio = new Audio(source);
    audio.play();
}

function reset() {
    searchInput.value = "";
    content.innerHTML = "";
}

function noInformation() {
    reset();
    const p = document.createElement("p");

    p.textContent = "We couldn't find definitions for the word you were looking for."

    content.appendChild(p);
}