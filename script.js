const apiKey = '980412ab42ba8c30dce52b2003a439c0'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
let link = document.querySelector(".name span")


async function checkWeather(city) {
    const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await responce.json();

    if (responce.status == 404) {
        document.querySelector(".error").style.display = "block"
    }
    else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "./images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "./images/clear.png"

        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./images/drizzle.png"

        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "./images/mist.png"

        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "./images/rain.png"

        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "./images/snow.png"

        }

        document.querySelector(".error").style.display = "none"
    }


}

link.addEventListener("click" , ()=>{
    location.href = "https://github.com/Rityamali"
})

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})

searchBox.addEventListener("keyup", (e) => {
    if(e.keyCode === 13){                                  // detect enter key press
        checkWeather(searchBox.value)
    }
})

