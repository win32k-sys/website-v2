function load(url) {
    window.location.href = url;
}

fetch('/json/games.json')
.then(response => response.json())
.then(data => {
    const gameContainer = document.getElementById('game-container');

    data.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');
        gameCard.onclick = function() {
            load(game.url);
        };

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        const img = document.createElement('img');
        img.src = game.imageSrc;
        img.onerror = function() {
            this.src = '/image-placeholder.svg';
        };

        const p = document.createElement('p');
        p.textContent = game.name;

        imageContainer.appendChild(img);
        gameCard.appendChild(imageContainer);
        gameCard.appendChild(p);
        gameContainer.appendChild(gameCard);
    });
})
.catch(error => {
    console.error('Error loading JSON data:', error);
});
