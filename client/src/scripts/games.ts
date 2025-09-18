let allGames: any[] = [];

function loadGames() {
    const gamesContainer = document.getElementById('games');
    if (!gamesContainer) return;

    fetch('/json/games.json')
        .then(response => response.json())
        .then(games => {
            allGames = games;
            renderGames(games);

            const searchInput = document.getElementById('searchInput') as HTMLInputElement;
            if (searchInput) {
                searchInput.addEventListener('input', () => {
                    const searchTerm = searchInput.value.toLowerCase().trim();
                    const filteredGames = allGames.filter(game =>
                        game.name.toLowerCase().includes(searchTerm)
                    );
                    renderGames(filteredGames);
                });
            }
        })
        .catch(error => console.error('Error loading games:', error));
}

function renderGames(games: any[]) {
    const gamesContainer = document.getElementById('games');
    if (!gamesContainer) return;

    gamesContainer.innerHTML = games.map(game => {

        const fallbackImageUrl = `https://enchanteddonutstudioz.github.io/the-math-hub-CDN/imgs/${game.image.split('/').pop()}`;

        return `
            <div class="game-card glass cursor-pointer transform transition-transform " data-link="/play/${game.url}/">
                <img 
                    src="${game.image}" 
                    alt="${game.name} image" 
                    class="game-image"
                    onerror="this.onerror=null;this.src='${fallbackImageUrl}';"
                >
                <div class="p-4">
                    <h3 class="text-white font-medium text-xl">${game.name}</h3>
                </div>
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
}

document.addEventListener('DOMContentLoaded', loadGames);