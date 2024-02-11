(async function() {
    const btn = document.querySelector(`#btn`);
    
    btn.addEventListener(`click`, async function() {
        const chuckNorrisApiUrl = 'https://api.chucknorris.io/jokes/random';
        const res = await fetch(chuckNorrisApiUrl);
        const data = await res.json();

        createCard(data);
    });
})();

function createCard(data) {
    document.querySelector(`#joke`).innerHTML = ``;

    const div = document.createElement(`div`);
    div.classList.add(`card`, `mt-3`);
    const cardBody = document.createElement(`div`);
    cardBody.classList.add(`card-body`);
    const cardText = document.createElement(`p`);
    cardText.classList.add(`card-text`);
    cardText.textContent = data.value;
    document.querySelector(`#joke`).appendChild(div);
    div.appendChild(cardBody);
    cardBody.appendChild(cardText);
}