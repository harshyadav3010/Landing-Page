const textArray = [
    "Explore Our Latest Models",
    "Discover Luxury Vehicles",
    "Find Your Perfect Ride",
    "Drive into the Future"
];

let index = 0;
const changingText = document.getElementById('changing-text');

function changeText() {
    changingText.textContent = textArray[index];
    index = (index + 1) % textArray.length;
}

setInterval(changeText, 1000); 