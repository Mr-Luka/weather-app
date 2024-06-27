const app = document.querySelector(".weather-app");
const temp = document.querySelector(".temp");
const dateOutput = document.querySelector(".date");
const timeOutput = document.querySelector(".time");
const conditionOutput = document.querySelector(".condition");
const nameOutput = document.querySelector(".name");
const icon = document.querySelector(".icon");
const cloutOutput = document.querySelector(".cloud");
const humidityOutput = document.querySelector(".humidity");
const windOutput = document.querySelector(".wind");
const form = document.querySelector("#locationInput");
const search = document.querySelector(".search");
const btn = document.querySelector(".submit");
const cities = document.querySelector(".city");

// Default city when the page loads
let cityInput = "London";

// Add click event to each city in the panel
cities.forEach(city=> {
    city.addEventListener("click", (e) => {
        // Change from default city to the clicke one
        cityInput = e.target.innerHTML;
        // Function that fetches and displays all the 
        // data from the Weather API
        fetchWeatherData()
        // fade out the app (simple animation)
        app.style.opacity = "0";
    });
})

// Submit event to the form
form.addEventListener("submit", (e)=> {
    // if the input field (search bar) is
    // empty, throw an alert
    if(search.value.length == 0) {
        alert("Please type in a city name");
    } else {
        // Change from default city to the 
        // one written in the input field
        cityInput = search.value;
        // Function that fetches and displays all the
        // data from the Weather API
        fetchWeatherData()
        // Remove all text from the input field
        search.value = "";
        // fade out the app (simple animation)
        app.style.opacity = "0";
    }
    e.preventDefault();
})