document.addEventListener("DOMContentLoaded", function() {
    // HTTPS Check
    if(window.location.protocol === 'http:'){
        if (window.location.host !== 'localhost' && window.location.host !== '127.0.0.1'){
            const searchInput = document.getElementById('uv-address');
            if (searchInput) {
                searchInput.disabled = true;
                searchInput.placeholder = 'please turn on HTTPS to use this site!';
            }
        }
    }

    // Splash Text Logic
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
        const randomItem = randomtextstuff[Math.floor(Math.random() * randomtextstuff.length)];
        splashElement.innerText = randomItem;
    }
});
