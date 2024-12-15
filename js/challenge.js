// Get the counter element from the HTML
const counterElement = document.getElementById('counter');

// Get the plus and minus buttons from the HTML
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');

// Get all the like buttons from the HTML
const likeButtons = document.querySelectorAll('.like-button');

// Get the pause and resume buttons from the HTML
const pauseButton = document.getElementById('pause');
const resumeButton = document.getElementById('resume');

// Define a variable to track whether the counter is paused
let isPaused = false;

// Define a function to update the counter
function updateCounter() {
  if (!isPaused) {
    const currentValue = parseInt(counterElement.textContent);
    const newValue = currentValue + 1;
    counterElement.textContent = newValue.toString();
  }
}

// Define a function to increment the counter
function incrementCounter() {
  const currentValue = parseInt(counterElement.textContent);
  const newValue = currentValue + 1;
  counterElement.textContent = newValue.toString();
}

// Define a function to decrement the counter
function decrementCounter() {
  const currentValue = parseInt(counterElement.textContent);
  const newValue = currentValue - 1;
  counterElement.textContent = newValue.toString();
}

// Define a function to update the like count
function updateLikeCount() {
  const currentValue = parseInt(counterElement.textContent);
  const likeCount = parseInt(this.dataset.likeCount);
  const newValue = likeCount + 1;
  this.dataset.likeCount = newValue.toString();
  this.textContent = newValue.toString();
}

// Define a function to pause the counter
function pauseCounter() {
  isPaused = true;
  pauseButton.disabled = true;
  resumeButton.disabled = false;
  pauseButton.textContent = 'resume';
}

// Define a function to resume the counter
function resumeCounter() {
  isPaused = false;
  pauseButton.disabled = false;
  resumeButton.disabled = true;
  pauseButton.textContent = 'pause';
}

// Set up the interval to update the counter every second
setInterval(updateCounter, 1000);

// Add event listeners to the plus and minus buttons
plusButton.addEventListener('click', incrementCounter);
minusButton.addEventListener('click', decrementCounter);

// Add event listeners to the like buttons
likeButtons.forEach((likeButton) => {
  likeButton.addEventListener('click', updateLikeCount);
});

// Add event listeners to the pause and resume buttons
pauseButton.addEventListener('click', pauseCounter);
resumeButton.addEventListener('click', resumeCounter);