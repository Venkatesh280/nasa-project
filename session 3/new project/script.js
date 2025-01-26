const counterElement = document.getElementById("counter");
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const clearButton = document.getElementById("clear");
const errorElement = document.getElementById("error");

let count = 0;

// Function to update the UI based on the count value
function updateUI() {
    counterElement.textContent = count;

    // Show/hide the Clear button
    clearButton.style.display = count > 0 ? "inline-block" : "none";

    // Disable decrement button if count is 0
    decrementButton.disabled = count === 0;

    // Hide error if the count is above 0
    if (count > 0) {
        errorElement.style.display = "none";
    }
}

// Increment button click event
incrementButton.addEventListener("click", () => {
    count++;
    updateUI();
});

// Decrement button click event
decrementButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
        errorElement.style.display = "none"; // Hide the error when decrementing above 0
    } else {
        errorElement.style.display = "block"; // Show the error when attempting to go below 0
    }
    updateUI();
});

// Clear button click event
clearButton.addEventListener("click", () => {
    count = 0;
    updateUI();
});

// Initial UI setup
updateUI();