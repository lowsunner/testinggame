// Smooth page loader
window.addEventListener('load', () => {
    const loader = document.getElementById('page-loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }
});

// Add loader HTML and CSS
const loaderHTML = `
    <div id="page-loader" style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.3s ease;
    ">
        <div style="text-align: center;">
            <div class="loader-spinner"></div>
            <p style="color: white; margin-top: 20px; font-size: 1.2rem; font-weight: 600;">Loading...</p>
        </div>
    </div>
`;

const loaderCSS = `
    .loader-spinner {
        width: 50px;
        height: 50px;
        border: 4px solid rgba(102, 126, 234, 0.2);
        border-top: 4px solid #667eea;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

// Inject loader
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        document.body.insertAdjacentHTML('afterbegin', loaderHTML);
        const style = document.createElement('style');
        style.textContent = loaderCSS;
        document.head.appendChild(style);
    });
} else {
    document.body.insertAdjacentHTML('afterbegin', loaderHTML);
    const style = document.createElement('style');
    style.textContent = loaderCSS;
    document.head.appendChild(style);
}
