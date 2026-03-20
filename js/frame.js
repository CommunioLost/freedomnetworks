function isUrl(val = "") {
    return /^http(s?):\/\//.test(val) || (val.includes(".") && val.slice(0, 1) !== " ");
}

function loadNewPage(url) {
    const searchBar = document.getElementById("uv-address-searchbar");
    const iframe = document.getElementById("iframeid");
    
    searchBar.blur();

    // Register UV Service Worker
    window.navigator.serviceWorker.register("/uv.sw.js", {
        scope: __uv$config.prefix,
    });

    // Formatting the URL
    if (!isUrl(url)) url = "https://www.google.com/search?q=" + encodeURIComponent(url);
    else if (!url.startsWith("http")) url = "https://" + url;

    // Custom Redirections (The logic from your snippet)
    if (url.includes("now.gg")) {
        alert('Redirecting to nowgg.lol/hub for better compatibility.');
        url = "https://nowgg.lol/hub";
    }

    // Encode and load
    const urlEncoded = __uv$config.prefix + __uv$config.encodeUrl(url);
    if (iframe) iframe.src = urlEncoded;
    searchBar.value = url;
}

window.addEventListener("load", function () {
    const encodedUrl = sessionStorage.getItem("encodedUrl");
    const iframe = document.getElementById("iframeid");
    const searchBar = document.getElementById("uv-address-searchbar");

    if (iframe && encodedUrl) {
        iframe.src = __uv$config.prefix + encodedUrl;
        if (searchBar) {
            searchBar.value = __uv$config.decodeUrl(encodedUrl);
        }
    }
});
