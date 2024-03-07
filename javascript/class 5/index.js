//Selecting DOM elements 
const temperatureField = document.querySelector(".temp")
const cityField = document.querySelector(".time_location p")
const dateField = document.querySelector(".time_location span")
const emojiField = document.querySelector(".weather_condition img")
const weatherField = document.querySelector(".weather_condition span")
const searchField = document.querySelector(".searchfield")
const form = document.querySelector("form")

let cityName = 'Pune'
//Now add a event Listener
form.addEventListener('submit', event => {
    event.preventDefault()//it will prevent the default behaviour of that event 
    const cityName = searchField.value
    getWeatherInfo(cityName)

})

//Extracting user Input
async function getWeatherInfo(cityName) {
    //let url=`http://api.weatherapi.com/v1/current.json?key=3b858064ea084fc69d785400232509&q=${cityName}&aqi=no`

    //fetching url and getting response object
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=3b858064ea084fc69d785400232509&q=${cityName}&aqi=yes`)//here await is telling to ftech that you complete your work i am waiting
        const weatherData = await response.json()//here response object is converted to json 
        console.log(weatherData)

        //Extracting data from json object
        let temp = weatherData.current.temp_c
        let name = weatherData.location.name
        let condition = weatherData.current.condition.text
        let url = weatherData.current.condition.icon
        let date = weatherData.current.last_updated

        console.log(temp, name, condition, url, date)
        let splitTime = date.split(" ") //split() splits a string into an array of substrings
        //console.log(splitTime)
        let exactDate = splitTime[0] //0th index
        let exactTime = splitTime[1] //1th index

        const d = new Date(exactDate)//date object
        //console.log(d)
        //console.log(d.getDay())

        const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
        let day = weekDay[d.getDay()]
        console.log(day)

        //updating DOM
        temperatureField.innerText = temp
        cityField.innerText = name
        dateField.innerText = `${exactDate} ${day} ${exactTime}`
        emojiField.src = url
        weatherField.innerText = condition
    }catch(error){
        console.log("I'm catching my error : ",error)
        console.log("Some logic to handle error")
    } 
}
getWeatherInfo(cityName)