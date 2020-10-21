const openUrl = (url) => {
    window.open(url, "_blank") || window.location.replace(url);
}

export { openUrl }
