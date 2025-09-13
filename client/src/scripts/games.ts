function loadGames() {
    const gamesContainer = document.getElementById('games');
    if (gamesContainer) {
        fetch('/json/games.json')
            .then(response => response.json())
            .then(games => {
                gamesContainer.innerHTML = games.map((game: any) => {
                    const fallbackImageUrl = `https://enchanteddonutstudioz.github.io/the-math-hub-CDN/imgs/${game.image.split('/').pop()}`;

                    return `
                    <div class="game-card glass" data-link="/play/${game.url}/">
                        <img 
                            src="${game.image}" 
                            alt="${game.name} image" 
                            class="game-image"
                            onerror="this.onerror=null;this.src='${fallbackImageUrl}';"
                        >
                        <h3>${game.name}</h3>
                    </div>
                    `;
                }).join('');

                document.querySelectorAll('.game-card').forEach(card => {
                    card.addEventListener('click', () => {
                        const link = card.getAttribute('data-link');
                        if (link) {
                            window.location.href = link;
                        }
                    });
                });
            })
            .catch(error => console.error('Error loading games:', error));
    }
}
loadGames();