function loadGames() {
    const gamesContainer = document.getElementById('games');
    if (gamesContainer) {
        fetch('/json/games.json')
            .then(response => response.json())
            .then(games => {
                gamesContainer.innerHTML = games.map((game: { name: string; description: string; url: string; image: string; }) => `
                    <div class="game-card glass" data-link="/play/${game.url}/">
                        <img src="${game.image}" alt="${game.name} image" class="game-image">
                        <h3>${game.name}</h3>
                    </div>
                `).join('');
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