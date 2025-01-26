const API_KEY = "ZAOHEaKagHYSBHMFd3ITDskSUDszXYV2DqadldNU"; // Replace with your NASA API key
const API_URL = "https://api.nasa.gov/planetary/apod";

// Get HTML elements
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const imageContainer = document.getElementById("current-image-container");
const apodImage = document.getElementById("apod-image");
const apodTitle = document.getElementById("apod-title");
const apodDescription = document.getElementById("apod-description");
const searchHistoryList = document.getElementById("search-history");

// Fetch and display the current image of the day
async function getCurrentImageOfTheDay() {
    const currentDate = new Date().toISOString().split("T")[0];
    await getImageOfTheDay(currentDate, false);
}

// Fetch and display an image for a specific date
async function getImageOfTheDay(date, saveToHistory = true) {
    try {
        const response = await fetch(`${API_URL}?api_key=${API_KEY}&date=${date}`);
        const data = await response.json();

        if (data.url) {
            apodImage.src = data.url;
            apodTitle.textContent = data.title || "No Title Available";
            apodDescription.textContent = data.explanation || "No Description Available";
        } else {
            apodImage.src = "";
            apodTitle.textContent = "Image not available for the selected date.";
            apodDescription.textContent = "";
        }

        if (saveToHistory) {
            saveSearch(date);
            addSearchToHistory();
        }
    } catch (error) {
        console.error("Error fetching NASA data:", error);
        apodTitle.textContent = "Failed to load image. Try again later.";
        apodImage.src = "";
        apodDescription.textContent = "";
    }
}

// Save a search date to local storage
function saveSearch(date) {
    let searches = JSON.parse(localStorage.getItem("searches")) || [];
    if (!searches.includes(date)) {
        searches.push(date);
        localStorage.setItem("searches", JSON.stringify(searches));
    }
}

// Display search history
function addSearchToHistory() {
    let searches = JSON.parse(localStorage.getItem("searches")) || [];
    searchHistoryList.innerHTML = "";
    searches.forEach((searchDate) => {
        const listItem = document.createElement("li");
        listItem.textContent = searchDate;
        listItem.addEventListener("click", () => getImageOfTheDay(searchDate, false));
        searchHistoryList.appendChild(listItem);
    });
}

// Validate date input format
function isValidDate(date) {
    return /^\d{4}-\d{2}-\d{2}$/.test(date);
}

// Event listener for the search form submission
searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const selectedDate = searchInput.value;
    if (isValidDate(selectedDate)) {
        getImageOfTheDay(selectedDate);
    } else {
        alert("Please enter a valid date in YYYY-MM-DD format.");
    }
});

// Load current image and search history on page load
window.addEventListener("load", () => {
    getCurrentImageOfTheDay();
    addSearchToHistory();
});

