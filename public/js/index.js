document.addEventListener("DOMContentLoaded", function() {
    // 1. HTTPS Check
    if (window.location.protocol === 'http:' && !['localhost', '127.0.0.1'].includes(window.location.host)) {
        const searchInput = document.getElementById('uv-address');
        if (searchInput) {
            searchInput.disabled = true;
            searchInput.placeholder = 'please turn on HTTPS to use this site!';
        }
    }

    // 2. Random Splash Text
    const randomtextstuff = [
        "MANGO MANGO 💀🙏",
        "DOWN WITH BLOCKERS",
        "also try getaway shootout",
        "official ohio song goes hard",
        "save your data!",
        "join the discord!",
        "search freely....",
        "all unblocked!",
        "this is indeed a proxy",
        "whats on your mind?"
    ];

    const splashElement = document.getElementById('splash-text');
    if (splashElement) {
        splashElement.innerText = randomtextstuff[Math.floor(Math.random() * randomtextstuff.length)];
    }

    // 3. Search Form Logic
    const form = document.getElementById('uv-form');
    const address = document.getElementById('uv-address');

    if (form && address) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            let url = address.value.trim();
            
            // Basic search vs URL logic
            if (!url.includes('.') || url.includes(' ')) {
                url = 'https://www.google.com/search?q=' + encodeURIComponent(url);
            } else if (!url.startsWith('http')) {
                url = 'https://' + url;
            }

            // Save to session and redirect to the player/embed page
            sessionStorage.setItem("encodedUrl", __uv$config.encodeUrl(url));
            window.location.href = "/embed.html"; 
        });
    }
});
