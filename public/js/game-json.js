function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createGameCard(cardData) {
    const div = document.createElement('div');
    div.classList.add('game-card2');
    
    const a = document.createElement('a');
    a.href = cardData.url;
    
    const img = document.createElement('img');
    img.src = cardData.image;
    img.alt = cardData.title;
    
    const span = document.createElement('span');
    span.textContent = cardData.title;
    
    a.appendChild(img);
    a.appendChild(span);
    
    div.appendChild(a);
    
    return div;
}

function loadGameCards() {
    const container = document.querySelector('.game-cards-container');
    fetch('/json/game-cards.json')
        .then(response => response.json())
        .then(data => {
            shuffleArray(data);
            // Displays 3 cards
            const limitedData = data.slice(0, 3);
            limitedData.forEach(cardData => {
                const cardElement = createGameCard(cardData);
                container.appendChild(cardElement);
            });
        })
        .catch(error => console.error('Error loading game cards:', error));
}

window.addEventListener('load', loadGameCards);
w