function isUrl(val = "") {
    if (/^http(s?):\/\//.test(val) || (val.includes(".") && val.slice(0, 1) !== " ")) return true;
    return false;
}

function loadNewPage(url) {
    const searchBar = document.getElementById("uv-address-searchbar");
    searchBar.blur();

    // Register Service Worker using standard UV paths
    window.navigator.serviceWorker.register("/uv/sw.js", {
        scope: __uv$config.prefix,
    });

    if (!isUrl(url)) {
        url = "https://www.google.com/search?q=" + url;
    } else if (!(url.startsWith("https://") || url.startsWith("http://"))) {
        url = "https://" + url;
    }

    const urlEncoded = __uv$config.prefix + __uv$config.encodeUrl(url);
    const iframe = document.getElementById("iframeid");
    if (iframe) {
        iframe.src = urlEncoded;
    }
    searchBar.value = url;
}

// Ensure the iframe loads the last saved URL from session storage
window.addEventListener("load", function () {
    const encodedUrl = sessionStorage.getItem("encodedUrl");
    const iframe = document.getElementById("iframeid");
    if (iframe && encodedUrl) {
        iframe.src = __uv$config.prefix + encodedUrl;
    }
});
