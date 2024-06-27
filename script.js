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
        app.style.opacity = "0";
    } )
})