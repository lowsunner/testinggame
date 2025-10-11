const frame = document.getElementById("game-frame");
const loader = document.getElementById("game-loader");
const loaderStatus = document.getElementById("loader-status");
const progressFill = document.querySelector(".progress-fill");
const gameName = document.title.split(' - ')[1] || 'Game';
const gameImg = document.getElementById("game-img");


const loadingMessages = [
    "Preparing your game...",
    "Loading game assets...",
    "Almost there...",
    "Setting up the game environment...",
    "Initializing game engine...",
    "Not loading? Try refreshing!",
    `${gameName} is worth the wait!`,
    `${gameName} is gonna be great, trust.`,
    `Not loading? Contact us on Discord!`,
];

let messageIndex = 0;
let loadingMessageInterval;
let progressInterval;
let currentProgress = 0;

function startLoading() {
    frame.classList.add('loading');
    loader.classList.remove('hidden');

    loadingMessageInterval = setInterval(() => {
        messageIndex = (messageIndex + 1) % loadingMessages.length;
        if (loaderStatus) {
            loaderStatus.textContent = loadingMessages[messageIndex];
        }
    }, 2000);


    progressInterval = setInterval(() => {
        if (currentProgress < 90) {
            currentProgress += Math.random() * 15;
            currentProgress = Math.min(currentProgress, 90);
            if (progressFill) {
                progressFill.style.width = `${currentProgress}%`;
            }
        }
    }, 300);
}


function stopLoading() {

    if (progressFill) {
        progressFill.style.width = '100%';
    }


    setTimeout(() => {
        frame.classList.remove('loading');
        frame.classList.add('loaded');
        loader.classList.add('hidden');

        clearInterval(loadingMessageInterval);
        clearInterval(progressInterval);


        currentProgress = 0;
        if (progressFill) {
            setTimeout(() => {
                progressFill.style.width = '0%';
            }, 500);
        }
    }, 500);
}


startLoading();


frame.addEventListener('load', function () {

    setTimeout(() => {
        if (frame.contentWindow) {
            try {
                const iframeDoc = frame.contentDocument || frame.contentWindow.document;
                const title = iframeDoc.title;

                if (title.includes('404') || title.includes('Not Found')) {

                    if (loaderStatus) {
                        loaderStatus.textContent = "Trying alternate source...";
                    }
                    frame.src = 'https://enchanteddonutstudioz.github.io/the-math-hub-CDN/g/' +
                        frame.getAttribute('data-src').split('/')[3];
                } else {
                    stopLoading();
                }
            } catch (e) {
                console.log('Cannot access iframe content due to Same-Origin Policy.');

                stopLoading();
            }
        } else {
            stopLoading();
        }
    }, 1000);
});

frame.addEventListener('error', function () {
    if (loaderStatus) {
        loaderStatus.textContent = "Error loading game. Trying alternate source...";
    }
    setTimeout(() => {
        frame.src = 'https://enchanteddonutstudioz.github.io/the-math-hub-CDN/g/' +
            frame.getAttribute('data-src').split('/')[3];
    }, 1000);
});

document.getElementById("reload-btn")?.addEventListener("click", () => {
    startLoading();
    frame.src = frame.src;
});

const gameArea = document.getElementById("game-frame");
document.getElementById("fullscreen-btn")?.addEventListener("click", async () => {
    try {
        if (!document.fullscreenElement) {
            await gameArea.requestFullscreen();
        } else {
            await document.exitFullscreen();
        }
    } catch (e) {
        console.error(e);
    }
});

if (gameImg) {
    gameImg.onerror = function () {
        this.onerror = null;
        this.src = "https://enchanteddonutstudioz.github.io/the-math-hub-CDN/imgs/" + this.getAttribute('data-img').split('/').pop();
    }
    gameImg.src = gameImg.src;
}


async function loadMoreGames() {
    const moreGamesContainer = document.getElementById('more-games');
    if (!moreGamesContainer) return;

    const pathParts = window.location.pathname.split('/');
    const currentGameId = pathParts.find(part => part && part !== 'play') || '';

    try {
        const response = await fetch('/json/games.json');
        if (!response.ok) throw new Error('Failed to load games.json');
        const games = await response.json();


        const otherGames = games.filter(game => game.url !== currentGameId);


        const shuffled = otherGames.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 6);

        moreGamesContainer.innerHTML = '';


        selected.forEach(game => {
            const fallbackImageUrl = `https://enchanteddonutstudioz.github.io/the-math-hub-CDN/imgs/${game.image.split('/').pop()}`;

            const tile = document.createElement('a');
            if (game.url === "sug") {
                tile.addEventListener('click', () => {
                    window.open('https://discord.com/invite/ejP36Bb44r', '_blank');
                });
            }
            else {
                tile.href = `/play/${game.url}/`;
            }
            tile.className = 'game-tile';
            tile.innerHTML = `
            <div class="tile-image">
                <img src="${game.image}" alt="${game.name}" style="width:100%;height:120%;object-fit:cover;" 
                     onerror="this.onerror=null;this.src='${fallbackImageUrl}'">
            </div>
            <div class="tile-text">
                <p>${game.name}</p>
            </div>
        `;
            moreGamesContainer.appendChild(tile);
        });

    } catch (error) {
        console.error('Error loading more games:', error);
        moreGamesContainer.innerHTML = '<p>Could not load more games.</p>';
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadMoreGames);
} else {
    loadMoreGames();
}

document.querySelector('.logo')?.addEventListener('click', () => {
    window.location.href = '/';
});


function setGameCloak(type) {
    let title = "The Math Hub";
    let favicon = "img/mathhub.png";

    if (type === "classroom") {
        title = "Home";
        favicon = "/img/classroomfavicon.ico";
    } else if (type === "clever") {
        title = "Clever | Portal";
        favicon = "/img/clever.jpg";
    } else if (type === "none") {
        title = "The Math Hub";
        favicon = "/img/mathhub.png";
    }

    document.title = title;

    const oldIcon = document.querySelector("link[rel='icon']");
    if (oldIcon) oldIcon.remove();

    const link = document.createElement("link");
    link.rel = "icon";
    link.href = favicon;
    document.head.appendChild(link);
}


const savedGameCloak = localStorage.getItem("tabCloak");
if (savedGameCloak) {
    setGameCloak(savedGameCloak);
} else {
    setGameCloak("none");
}