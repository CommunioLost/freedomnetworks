const form = document.getElementById('uv-form');
const address = document.getElementById('uv-address');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    let url = address.value.trim();
    
    if (!url.includes('.') || url.includes(' ')) {
        url = 'https://www.google.com/search?q=' + encodeURIComponent(url);
    } else if (!url.startsWith('http')) {
        url = 'https://' + url;
    }

    sessionStorage.setItem("encodedUrl", __uv$config.encodeUrl(url));
    window.location.href = "/embed.html";
});
