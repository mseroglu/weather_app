const cityInput = document.querySelector(".inputText")
const btn = document.querySelector(".btn")
const city = document.querySelector(".city")
const tempreture = document.querySelector(".temp")
const hum = document.querySelector(".humidity")
const wind = document.querySelector(".wind")
const weatherDesc = document.querySelector(".weather")
const feeling = document.querySelector(".feeling")

const API_KEY = "08cbc619488231cf6426a069795f35a7"

btn.addEventListener("click", () => {
    
    const cityName = cityInput.value
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=tr`
    fetch(URL)
    .then((res) => res.json())
    .then((data) => {
        const {name, main:{temp, feels_like, humidity}, sys:{country}, weather:[{description}], wind:{speed} } = data;
        console.log(name, country, temp, feels_like, humidity, description, speed)

        city.textContent = `${name}, ${country}`
        tempreture.innerHTML = `${temp.toFixed(1)} <i class="fas fa-temperature-low"></i>`
        hum.textContent = `Nem : % ${humidity}`
        wind.innerText = `Rüzgar : ${speed.toFixed(1)} Km/h`
        weatherDesc.innerHTML = `<em>${description}</em>`
        feeling.innerHTML = `Hissedilen : ${feels_like.toFixed(1)} <i class="fas fa-temperature-low"></i>`

    })
    .catch((err) => console.log(err))

    cityInput.value = "";
    
}
)