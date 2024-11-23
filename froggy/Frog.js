let clicks = 0;

function onClick() {
clicks++;
document.getElementById("clicks").innerHTML = clicks;

// Dynamically create a worm image
const wormImg = document.createElement('img');
wormImg.src = 'images/worm.png';
wormImg.alt = 'Worm';
wormImg.classList.add('worm'); // Apply fall animation class

// Set random horizontal position (0% to 100% of the screen width)
const randomLeft = Math.random() * 100; // Generates a value between 0 and 100
wormImg.style.left = `${randomLeft}%`; // Set the random left position

// Add the worm image to the container
document.getElementById('container').appendChild(wormImg);

// Remove the worm image after 2 seconds (animation duration)
setTimeout(() => {
wormImg.remove();
}, 2000);
}

