function zoomin() {
    let image = document.getElementById("image");
    let currentWidth = image.width;
    image.style.width = (currentWidth + 50);
}

function zoomout() {
    let image = document.getElementById("image");
    let currentWidth = image.width;
    image.style.width = (currentWidth - 50);
}