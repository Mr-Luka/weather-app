const app = document.querySelector(".weather-app");
const temp = document.querySelector(".temp");
const dateOutput = document.querySelector(".date");
const timeOutput = document.querySelector(".time");
const conditionOutput = document.querySelector(".condition");
const nameOutput = document.querySelector(".name");
const icon = document.querySelector(".icon");
const cloudOutput = document.querySelector(".cloud");
const humidityOutput = document.querySelector(".humidity");
const windOutput = document.querySelector(".wind");
const form = document.querySelector("#locationInput");
const search = document.querySelector(".search");
const btn = document.querySelector(".submit");
const cities = document.querySelectorAll(".city");

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

// Function that returns a day of the week
// (Monday, Tuesday, Friday...) from a date
function dayOfTheWeek(day, month, year) {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return weekday[new Date(`${day}/${month}/${year}`).getDay()]
}

// Function that fetches and displays the data from the weather API
function fetchWeatherData() {
    // Fetch the data and dynamicaly add the city name
    // with template literals
    fetch(`http://api.weatherapi.com/v1/current.json?key=2dff0dc594da402c997192633242706&q=${cityInput}`)
    // Taking the data (which is in JSON format)
    // and converting it to a JavaScript object
    .then(response => response.json())
    .then(data=> {
        // console logging the data to see what is available
        console.log(data);

        // adding the Temperature and weather condition to the page
        temp.innerHTML = data.current.temp_f + "&#176";
        conditionOutput.innerHTML = data.current.condition.text;

        // Getting the data and time from the city and extract
        // the dat, month, year and time into individual variables
        const date = data.location.localtime;
        const y = parseInt(date.substr(0, 4));
        const m = parseInt(date.substr(5, 2));
        const d = parseInt(date.substr(8, 2));
        const time = date.substr(11);

        //  Reformat the date into something more appealing add it to the page
        //  original: 2024-06-27 17:53
        //  New format: 17:53 - Thursday 27, 06 2024
        dateOutput.innerHTML = `${dayOfTheWeek(m, d, y)} ${m}, ${d}, ${y}`;
        timeOutput.innerHTML = time;

        // Add the name of the city into the page
        nameOutput.innerHTML = data.location.name;

        // Getting the corresponding icon url for the weather and 
        // extract a part of it
        const iconId = data.current.condition.icon.substr(
            "//cdn.weatherapi.com/weather/64x64/".length);

        // Reformat the icon url to your own local folder path 
        // and add it to the page
        icon.src = `./icons` + iconId;

        // Add the weather details to the page
        cloudOutput.innerHTML = data.current.cloud + "%";
        humidityOutput.innerHTML = data.current.humidity + "%";
        windOutput.innerHTML = data.current.wind_mph + " mph";

    })
}
fetchWeatherData()