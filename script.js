window.onload = function () {
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('roulette').className = 'roulette-visible';
    }, 3000); // Simulates a loading time of 3 seconds
};

function spinRoulette() {
    const images = [
        { src: 'path/to/card1.png', info: 'Information about pictogram 1' },
        { src: 'path/to/card2.png', info: 'Information about pictogram 2' },
        { src: 'path/to/card3.png', info: 'Information about pictogram 3' },
        // Add more cards as needed
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    const imageElement = document.getElementById('rouletteImage');
    imageElement.src = selectedImage.src;
    imageElement.alt = selectedImage.info;

    // Optionally display information about the pictogram
    alert(selectedImage.info);
}
